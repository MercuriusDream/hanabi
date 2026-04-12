//@name Hanabi
//@api 3.0
//@version 2.0.0
//@display-name Hanabi
//@link https://docs.fireworks.ai/guides/reasoning
//@arg config string Provider configurations (JSON array). Each item can have: api_key, base_url, model, provider_name, api_format, enable_thinking, thinking_budget, thinking_display, show_thinking_output, thinking_style, thinking_open, thinking_close, custom_body. Example: [{"api_key":"fw-xxx","model":"accounts/fireworks/routers/glm-5-fast","provider_name":"GLM"},{"api_key":"fw-yyy","model":"accounts/fireworks/routers/kimi-k2p5-turbo","provider_name":"Kimi","api_format":"openai","enable_thinking":"false"}]

(async () => {
  try {
    // ── Shared Utilities ──────────────────────────────────────────────

    function escapeHtml(str) {
      return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }

    function redactKeys(str) {
      return str
        .replace(/\b(fw-|sk-|key-)[A-Za-z0-9_-]{8,}\b/g, "$1[REDACTED]")
        .replace(/Bearer\s+[A-Za-z0-9_.\-]{8,}/gi, "Bearer [REDACTED]");
    }

    function formatDuration(ms) {
      if (ms >= 60000) return (ms / 60000).toFixed(1) + "m";
      return (ms / 1000).toFixed(1) + "s";
    }

    function formatTokens(chars) {
      const t = Math.round(chars / 4);
      return t >= 1000 ? (t / 1000).toFixed(1) + "k" : String(t);
    }

    /**
     * Convert OpenAI-format messages to Anthropic Messages API format.
     * Merges consecutive same-role messages; pulls out system prompts.
     */
    function convertMessages(oaiMessages) {
      const systemParts = [];
      const msgs = [];

      for (const m of oaiMessages || []) {
        const role = m.role;
        let text = "";
        if (typeof m.content === "string") {
          text = m.content;
        } else if (Array.isArray(m.content)) {
          text = m.content
            .map((p) => {
              if (typeof p === "string") return p;
              if (p && typeof p === "object") {
                if (p.type === "image_url" || p.type === "image")
                  return "[image omitted — not supported by this provider]";
                return p.text || "";
              }
              return "";
            })
            .join("");
        }

        if (role === "system") {
          if (text) systemParts.push(text);
          continue;
        }
        if (!text) continue;

        const anthRole = role === "assistant" ? "assistant" : "user";

        if (msgs.length > 0 && msgs[msgs.length - 1].role === anthRole) {
          msgs[msgs.length - 1].content[0].text += "\n\n" + text;
        } else {
          msgs.push({
            role: anthRole,
            content: [{ type: "text", text }],
          });
        }
      }

      // Anthropic requires the first message to be "user"
      if (msgs.length === 0) {
        msgs.push({ role: "user", content: [{ type: "text", text: "." }] });
      } else if (msgs[0].role !== "user") {
        msgs.unshift({ role: "user", content: [{ type: "text", text: "." }] });
      }

      return {
        system: systemParts.join("\n\n"),
        messages: msgs,
      };
    }

    /**
     * Convert OpenAI-format messages to Gemini API format.
     * Merges consecutive same-role messages; extracts system instruction.
     */
    function convertToGemini(oaiMessages) {
      const systemParts = [];
      const contents = [];

      for (const m of oaiMessages || []) {
        let text = "";
        if (typeof m.content === "string") {
          text = m.content;
        } else if (Array.isArray(m.content)) {
          text = m.content
            .map((p) => {
              if (typeof p === "string") return p;
              if (p && typeof p === "object") {
                if (p.type === "image_url" || p.type === "image")
                  return "[image omitted — not supported by this provider]";
                return p.text || "";
              }
              return "";
            })
            .join("");
        }

        if (m.role === "system") {
          if (text) systemParts.push(text);
          continue;
        }
        if (!text) continue;

        const geminiRole = m.role === "assistant" ? "model" : "user";

        if (
          contents.length > 0 &&
          contents[contents.length - 1].role === geminiRole
        ) {
          contents[contents.length - 1].parts[0].text += "\n\n" + text;
        } else {
          contents.push({ role: geminiRole, parts: [{ text }] });
        }
      }

      if (contents.length === 0) {
        contents.push({ role: "user", parts: [{ text: "." }] });
      } else if (contents[0].role !== "user") {
        contents.unshift({ role: "user", parts: [{ text: "." }] });
      }

      return {
        systemInstruction:
          systemParts.length > 0
            ? { parts: [{ text: systemParts.join("\n\n") }] }
            : null,
        contents,
      };
    }

    // ── Thinking Block Styles ───────────────────────────────────────

    const DEFAULT_STYLE = [
      "<style>",
      // Container — fade in on first appearance
      ".fw-think{margin:.75em 0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif;",
      "animation:fw-in .3s cubic-bezier(.16,1,.3,1) both}",
      // Summary pill — fill only, no border
      ".fw-think>summary{cursor:pointer;list-style:none;display:inline-flex;align-items:center;gap:.5em;",
      "padding:.35em .7em;border-radius:3px;font-size:.85em;font-weight:500;",
      "color:color-mix(in srgb,currentColor 55%,transparent);",
      "background:color-mix(in srgb,currentColor 5%,transparent);",
      "border:none;user-select:none;transition:color .2s ease}",
      ".fw-think[open]>summary{margin-bottom:.4em;",
      "color:color-mix(in srgb,currentColor 65%,transparent)}",
      // Meta — duration/tokens
      ".fw-think-meta{font-weight:400;opacity:.4;font-size:.82em;font-variant-numeric:tabular-nums}",
      // Hide native marker
      ".fw-think>summary::-webkit-details-marker{display:none}",
      ".fw-think>summary::marker{content:''}",
      // Chevron — rotates on open
      ".fw-think>summary::before{content:'';width:.4em;height:.4em;",
      "border-right:1.5px solid currentColor;border-bottom:1.5px solid currentColor;",
      "transform:rotate(-45deg);transition:transform .2s cubic-bezier(.16,1,.3,1);",
      "display:inline-block;opacity:.5;flex:none}",
      ".fw-think[open]>summary::before{transform:rotate(45deg)}",
      // Body — slides down + fades in when details opens
      ".fw-think>pre.fw-think-body{margin:0;padding:.75em 1em;",
      "background:color-mix(in srgb,currentColor 3%,transparent);",
      "border:none;border-radius:3px;font-family:inherit;font-size:.85em;line-height:1.6;",
      "white-space:pre-wrap;word-break:break-word;",
      "color:color-mix(in srgb,currentColor 50%,transparent);",
      "max-height:60vh;overflow-y:auto;",
      "animation:fw-body .25s cubic-bezier(.16,1,.3,1) both}",
      // Keyframes
      "@keyframes fw-in{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}",
      "@keyframes fw-body{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}",
      "</style>",
    ].join("");

    const MINIMAL_OPEN =
      '\n<details style="margin:.75em 0;animation:fw-in .3s cubic-bezier(.16,1,.3,1) both">' +
      "<style>@keyframes fw-in{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}@keyframes fw-mb{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}</style>" +
      '<summary style="cursor:pointer;list-style:none;font-size:.85em;padding:.3em .6em;border-radius:3px;background:color-mix(in srgb,currentColor 4%,transparent);color:color-mix(in srgb,currentColor 45%,transparent);user-select:none;border:none;display:inline-block;transition:color .2s ease">Thinking</summary>' +
      '<pre style="margin:.3em 0 0;padding:.6em .9em;font-size:.85em;line-height:1.6;white-space:pre-wrap;word-break:break-word;color:color-mix(in srgb,currentColor 45%,transparent);background:color-mix(in srgb,currentColor 2%,transparent);border:none;border-radius:3px;animation:fw-mb .25s cubic-bezier(.16,1,.3,1) both">';

    // ── Parse Configurations ────────────────────────────────────────

    const configRaw = await Risuai.getArgument("config");
    let configs = [];

    if (configRaw && configRaw.trim()) {
      try {
        const parsed = JSON.parse(configRaw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          configs = parsed;
        } else {
          throw new Error("Config must be a non-empty array");
        }
      } catch (e) {
        return {
          success: false,
          content: `[Hanabi] Failed to parse config: ${e.message}. Please provide valid JSON array.`,
        };
      }
    } else {
      return {
        success: false,
        content: `[Hanabi] Config is required. Example: [{"api_key":"your-key","model":"accounts/fireworks/routers/glm-5-fast","provider_name":"My-GLM"}]`,
      };
    }

    // Track registered names to avoid collisions
    const registeredNames = new Set();

    // ── Register All Providers ────────────────────────────────────

    for (const cfg of configs) {
      const apiKey = cfg.api_key || "";
      const baseUrlRaw = cfg.base_url || "https://api.fireworks.ai/inference";
      const model = cfg.model || "accounts/fireworks/routers/glm-5-fast";

      // Deduplicate provider names
      let providerName = cfg.provider_name || "Fireworks-Thinking";
      if (registeredNames.has(providerName)) {
        let n = 2;
        while (registeredNames.has(`${providerName}-${n}`)) n++;
        providerName = `${providerName}-${n}`;
      }
      registeredNames.add(providerName);

      const enableThinking =
        cfg.enable_thinking !== "false" && cfg.enable_thinking !== false;

      const thinkingDisplayOmitted =
        cfg.thinking_display === "true" || cfg.thinking_display === true;

      const showThinkingOutput =
        cfg.show_thinking_output !== "false" &&
        cfg.show_thinking_output !== false;

      const budget = enableThinking
        ? Math.max(1024, parseInt(cfg.thinking_budget) || 8192)
        : parseInt(cfg.thinking_budget) || 8192;

      const thinkingStyle = cfg.thinking_style || "default";
      const customOpenTag = cfg.thinking_open || "";
      const customCloseTag = cfg.thinking_close || "";
      const customBodyStr = cfg.custom_body || "";

      const apiFormat = cfg.api_format || "anthropic";
      const isOpenAi = apiFormat === "openai";
      const isGemini = apiFormat === "gemini";

      const baseUrl = baseUrlRaw.replace(/\/+$/, "");
      const endpoint = isGemini
        ? `${baseUrl}/v1beta/models/${encodeURIComponent(model)}:streamGenerateContent?alt=sse`
        : isOpenAi
          ? `${baseUrl}/v1/chat/completions`
          : `${baseUrl}/v1/messages`;

      const safeName = escapeHtml(providerName);

      // ── Thinking tag builders ──

      function buildOpenTag(durationMs, charCount) {
        switch (thinkingStyle) {
          case "custom":
            return customOpenTag || "";
          case "raw":
            return "\n\n**Thinking:**\n\n```\n";
          case "minimal":
            return MINIMAL_OPEN;
          default: {
            const meta = ` <span class="fw-think-meta">${formatDuration(durationMs)} · ~${formatTokens(charCount)} tokens</span>`;
            return `\n<details class="fw-think">${DEFAULT_STYLE}<summary>Thinking${meta}</summary><pre class="fw-think-body">`;
          }
        }
      }

      function buildCloseTag() {
        switch (thinkingStyle) {
          case "custom":
            return customCloseTag || "</pre></details>";
          case "raw":
            return "\n```\n\n";
          case "minimal":
            return "</pre></details>";
          default:
            return "</pre></details>";
        }
      }

      function transformThinking(text, isRawStyle) {
        if (!text) return "";
        if (isRawStyle) {
          // Escape backtick fences inside code blocks
          text = text.replace(/```/g, "\\`\\`\\`");
          text = text.replace(/\n{4,}/g, "\n\n\n");
          return text;
        }
        // HTML-escape for <pre> contexts, then neutralize markdown list markers
        text = escapeHtml(text);
        text = text.replace(/\n{3,}/g, "\n\n");
        text = text.replace(/^([ \t]*)([-+*#>])/gm, "$1\\$2");
        text = text.replace(/^([ \t]*)(\d+)\./gm, "$1$2\\.");
        return text;
      }

      // ── SSE Stream Processor ──

      function createSseProcessor() {
        const parts = [];
        let inThinking = false;
        let thinkingParts = [];
        let thinkingStartMs = 0;

        function flushThinking() {
          const thinkingText = thinkingParts.join("");
          if (thinkingText) {
            const durationMs = Date.now() - thinkingStartMs;
            const open = buildOpenTag(durationMs, thinkingText.length);
            const isRaw = thinkingStyle === "raw";
            parts.push(
              open +
                transformThinking(thinkingText, isRaw) +
                buildCloseTag() +
                "\n\n",
            );
          }
          thinkingParts = [];
          inThinking = false;
        }

        return {
          processLine(rawLine) {
            const line = rawLine.trim();
            if (!line.startsWith("data:")) return;

            const payload = line.slice(5).trim();
            if (!payload || payload === "[DONE]") return;

            let data;
            try {
              data = JSON.parse(payload);
            } catch {
              return;
            }

            const t = data.type;

            if (t === "content_block_start") {
              if (
                data.content_block &&
                data.content_block.type === "thinking"
              ) {
                inThinking = true;
                thinkingParts = [];
                thinkingStartMs = Date.now();
              }
            } else if (t === "content_block_delta") {
              const dt = data.delta && data.delta.type;
              if (dt === "thinking_delta") {
                if (showThinkingOutput) {
                  thinkingParts.push(data.delta.thinking || "");
                }
              } else if (dt === "text_delta") {
                if (inThinking) flushThinking();
                parts.push(data.delta.text || "");
              }
            } else if (t === "content_block_stop" || t === "message_stop") {
              if (inThinking) flushThinking();
            } else if (t === "error") {
              const msg =
                (data.error && data.error.message) || JSON.stringify(data);
              parts.push(
                `\n\n[${safeName} upstream error] ${escapeHtml(redactKeys(msg))}`,
              );
            }
          },

          finish() {
            if (inThinking) flushThinking();
            return parts.join("");
          },
        };
      }

      // ── OpenAI SSE Stream Processor ──

      function createOpenAiSseProcessor() {
        const parts = [];
        let inThinking = false;
        let thinkingParts = [];
        let thinkingStartMs = 0;

        function flushThinking() {
          const thinkingText = thinkingParts.join("");
          if (thinkingText) {
            const durationMs = Date.now() - thinkingStartMs;
            const open = buildOpenTag(durationMs, thinkingText.length);
            const isRaw = thinkingStyle === "raw";
            parts.push(
              open +
                transformThinking(thinkingText, isRaw) +
                buildCloseTag() +
                "\n\n",
            );
          }
          thinkingParts = [];
          inThinking = false;
        }

        return {
          processLine(rawLine) {
            const line = rawLine.trim();
            if (!line.startsWith("data:")) return;

            const payload = line.slice(5).trim();
            if (!payload || payload === "[DONE]") return;

            let data;
            try {
              data = JSON.parse(payload);
            } catch {
              return;
            }

            if (data.error) {
              const msg =
                (data.error && data.error.message) || JSON.stringify(data);
              parts.push(
                `\n\n[${safeName} upstream error] ${escapeHtml(redactKeys(msg))}`,
              );
              return;
            }

            const choice = data.choices && data.choices[0];
            if (!choice) return;
            const delta = choice.delta;
            if (!delta) return;

            if (delta.reasoning_content) {
              if (!inThinking) {
                inThinking = true;
                thinkingParts = [];
                thinkingStartMs = Date.now();
              }
              if (showThinkingOutput) {
                thinkingParts.push(delta.reasoning_content);
              }
            }

            if (delta.content) {
              if (inThinking) flushThinking();
              parts.push(delta.content);
            }

            if (choice.finish_reason) {
              if (inThinking) flushThinking();
            }
          },

          finish() {
            if (inThinking) flushThinking();
            return parts.join("");
          },
        };
      }

      // ── Gemini SSE Stream Processor ──

      function createGeminiSseProcessor() {
        const parts = [];
        let inThinking = false;
        let thinkingParts = [];
        let thinkingStartMs = 0;

        function flushThinking() {
          const thinkingText = thinkingParts.join("");
          if (thinkingText) {
            const durationMs = Date.now() - thinkingStartMs;
            const open = buildOpenTag(durationMs, thinkingText.length);
            const isRaw = thinkingStyle === "raw";
            parts.push(
              open +
                transformThinking(thinkingText, isRaw) +
                buildCloseTag() +
                "\n\n",
            );
          }
          thinkingParts = [];
          inThinking = false;
        }

        return {
          processLine(rawLine) {
            const line = rawLine.trim();
            if (!line.startsWith("data:")) return;

            const payload = line.slice(5).trim();
            if (!payload || payload === "[DONE]") return;

            let data;
            try {
              data = JSON.parse(payload);
            } catch {
              return;
            }

            if (data.error) {
              const msg =
                (data.error && data.error.message) || JSON.stringify(data);
              parts.push(
                `\n\n[${safeName} upstream error] ${escapeHtml(redactKeys(msg))}`,
              );
              return;
            }

            const candidate = data.candidates && data.candidates[0];
            if (!candidate) return;
            const contentParts = candidate.content && candidate.content.parts;
            if (!contentParts) return;

            for (const part of contentParts) {
              if (!part.text) continue;

              if (part.thought) {
                if (!inThinking) {
                  inThinking = true;
                  thinkingParts = [];
                  thinkingStartMs = Date.now();
                }
                if (showThinkingOutput) {
                  thinkingParts.push(part.text);
                }
              } else {
                if (inThinking) flushThinking();
                parts.push(part.text);
              }
            }

            if (candidate.finishReason) {
              if (inThinking) flushThinking();
            }
          },

          finish() {
            if (inThinking) flushThinking();
            return parts.join("");
          },
        };
      }

      async function consumeStream(body, signal) {
        const proc = isGemini
          ? createGeminiSseProcessor()
          : isOpenAi
            ? createOpenAiSseProcessor()
            : createSseProcessor();
        const reader = body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";

            for (const line of lines) proc.processLine(line);
          }
        } catch (err) {
          // If aborted, return what we have so far
          if (err.name === "AbortError") {
            if (buffer) proc.processLine(buffer);
            const partial = proc.finish();
            return partial || "[Request aborted]";
          }
          throw err;
        } finally {
          try {
            reader.releaseLock();
          } catch {}
        }

        if (buffer) proc.processLine(buffer);
        return proc.finish();
      }

      function consumeText(fullText) {
        const proc = isGemini
          ? createGeminiSseProcessor()
          : isOpenAi
            ? createOpenAiSseProcessor()
            : createSseProcessor();
        for (const line of fullText.split("\n")) proc.processLine(line);
        return proc.finish();
      }

      // ── Request Body Builder ──

      function buildRequestBody(args, system, messages, temperature) {
        let thinkingObj = null;
        if (enableThinking) {
          thinkingObj = { type: "enabled", budget_tokens: budget };
          if (thinkingDisplayOmitted) {
            thinkingObj.display = "omitted";
          }
        }

        const userMax =
          typeof args.max_tokens === "number" && args.max_tokens > 0
            ? args.max_tokens
            : 4096;
        const maxTokens = enableThinking
          ? Math.max(userMax, budget + 1024)
          : userMax;

        // Custom body template — substitute placeholders
        if (customBodyStr && customBodyStr.trim()) {
          try {
            let customBody = customBodyStr;
            const systemJson = system
              ? JSON.stringify(system).slice(1, -1)
              : "";
            const messagesJson = JSON.stringify(messages);
            const tempJson = temperature !== null ? temperature : 1.0;
            const thinkingJson = thinkingObj
              ? JSON.stringify(thinkingObj)
              : "null";

            customBody = customBody
              .replace(/\{\{model\}\}/g, model)
              .replace(/\{\{max_tokens\}\}/g, String(maxTokens))
              .replace(/\{\{messages\}\}/g, messagesJson)
              .replace(/\{\{system\}\}/g, systemJson)
              .replace(/\{\{temperature\}\}/g, String(tempJson))
              .replace(/\{\{thinking\}\}/g, thinkingJson);

            return JSON.parse(customBody);
          } catch (err) {
            console.warn(
              `[${providerName}] Failed to parse custom_body, falling back to default:`,
              err,
            );
          }
        }

        const body = {
          model,
          max_tokens: maxTokens,
          messages,
          stream: true,
        };

        if (enableThinking && thinkingObj) {
          body.thinking = thinkingObj;
        }
        if (system) body.system = system;
        if (temperature !== null) {
          body.temperature = temperature;
        }

        return body;
      }

      // ── Register Provider ──────────────────────────────────────

      await Risuai.addProvider(
        providerName,
        async (args, abortSignal) => {
          if (!apiKey) {
            return {
              success: false,
              content: `[${safeName}] API key is empty. Set api_key in config.`,
            };
          }

          let body, reqHeaders;

          if (isGemini) {
            // Gemini format — convert to Gemini contents
            const { systemInstruction, contents } = convertToGemini(
              args.prompt_chat,
            );

            let temperature = null;
            if (typeof args.temperature === "number" && args.temperature > 0) {
              temperature = Math.min(2, Math.max(0, args.temperature));
            }

            const userMax =
              typeof args.max_tokens === "number" && args.max_tokens > 0
                ? args.max_tokens
                : 4096;
            const maxTokens = enableThinking
              ? Math.max(userMax, budget + 1024)
              : userMax;

            body = { contents };
            if (systemInstruction) body.system_instruction = systemInstruction;

            body.generationConfig = { maxOutputTokens: maxTokens };
            if (temperature !== null)
              body.generationConfig.temperature = temperature;
            if (enableThinking) {
              body.generationConfig.thinkingConfig = {
                thinkingBudget: budget,
                includeThoughts: showThinkingOutput,
              };
            }

            reqHeaders = {
              "Content-Type": "application/json",
              "x-goog-api-key": apiKey,
            };
          } else if (isOpenAi) {
            // OpenAI format — pass messages through
            let temperature = null;
            if (typeof args.temperature === "number" && args.temperature > 0) {
              temperature = Math.min(2, Math.max(0, args.temperature));
            }

            const userMax =
              typeof args.max_tokens === "number" && args.max_tokens > 0
                ? args.max_tokens
                : 4096;
            const maxTokens = enableThinking
              ? Math.max(userMax, budget + 1024)
              : userMax;

            body = {
              model,
              max_tokens: maxTokens,
              messages: args.prompt_chat,
              stream: true,
            };
            if (temperature !== null) body.temperature = temperature;

            reqHeaders = {
              "Content-Type": "application/json",
              Accept: "text/event-stream",
              Authorization: `Bearer ${apiKey}`,
            };
          } else {
            // Anthropic format — convert messages
            const { system, messages } = convertMessages(args.prompt_chat);

            let temperature = null;
            if (typeof args.temperature === "number" && args.temperature > 0) {
              temperature = Math.min(1, Math.max(0, args.temperature));
            }

            body = buildRequestBody(args, system, messages, temperature);

            reqHeaders = {
              "Content-Type": "application/json",
              Accept: "text/event-stream",
              Authorization: `Bearer ${apiKey}`,
              "x-api-key": apiKey,
              "anthropic-version": "2023-06-01",
            };
          }

          // Custom body override for non-Anthropic formats
          if (customBodyStr && customBodyStr.trim() && (isOpenAi || isGemini)) {
            try {
              let customBody = customBodyStr;
              const messagesJson = isGemini
                ? JSON.stringify(body.contents)
                : JSON.stringify(args.prompt_chat);
              customBody = customBody
                .replace(/\{\{model\}\}/g, model)
                .replace(
                  /\{\{max_tokens\}\}/g,
                  String(
                    isGemini
                      ? body.generationConfig.maxOutputTokens
                      : body.max_tokens,
                  ),
                )
                .replace(/\{\{messages\}\}/g, messagesJson)
                .replace(
                  /\{\{temperature\}\}/g,
                  String(
                    isGemini
                      ? body.generationConfig.temperature || 1.0
                      : body.temperature || 1.0,
                  ),
                );
              body = JSON.parse(customBody);
            } catch (err) {
              console.warn(
                `[${providerName}] Failed to parse custom_body, using default:`,
                err,
              );
            }
          }

          let response;
          try {
            response = await Risuai.nativeFetch(endpoint, {
              method: "POST",
              headers: reqHeaders,
              body: JSON.stringify(body),
              signal: abortSignal,
            });
          } catch (err) {
            if (err && err.name === "AbortError") {
              return {
                success: false,
                content: `[${safeName}] Request aborted.`,
              };
            }
            const msg = err && err.message ? err.message : String(err);
            return {
              success: false,
              content: `[${safeName}] Network error: ${escapeHtml(redactKeys(msg))}`,
            };
          }

          if (!response.ok) {
            let errText = "";
            try {
              errText = await response.text();
            } catch {}
            return {
              success: false,
              content: `[${safeName}] HTTP ${response.status} ${response.statusText}\n${escapeHtml(redactKeys(errText.slice(0, 1000)))}`,
            };
          }

          // Some environments don't support ReadableStream — fall back to .text()
          if (!response.body) {
            try {
              const fullText = await response.text();
              if (fullText.includes("data:")) {
                return { success: true, content: consumeText(fullText) };
              }
              return { success: true, content: fullText };
            } catch (err) {
              const msg = err && err.message ? err.message : String(err);
              return {
                success: false,
                content: `[${safeName}] Response body unavailable: ${escapeHtml(msg)}`,
              };
            }
          }

          try {
            const finalText = await consumeStream(response.body, abortSignal);
            return { success: true, content: finalText };
          } catch (err) {
            if (err && err.name === "AbortError") {
              return {
                success: false,
                content: `[${safeName}] Request aborted.`,
              };
            }
            const msg = err && err.message ? err.message : String(err);
            return {
              success: false,
              content: `[${safeName}] Stream error: ${escapeHtml(redactKeys(msg))}`,
            };
          }
        },
        {
          tokenizer: "gpt-4",
        },
      );

      console.log(`[Hanabi] Registered provider: ${providerName}`);
    }

    console.log(
      `[Hanabi] All ${configs.length} provider(s) registered successfully`,
    );
  } catch (err) {
    console.log(
      `[Hanabi] Init failed: ${err && err.message}\n${err && err.stack}`,
    );
  }
})();
