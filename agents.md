# Hanabi (花火)

RisuAI multi-provider routing plugin with CoT/Thinking block support.

## Structure

```
hanabi/
├── index.html      # WebUI Config Generator
├── style.css       # WebUI styles (dark/light theme, CSS custom properties)
├── app.js          # WebUI logic (vanilla JS, no framework)
├── src/
│   └── main.js     # RisuAI plugin (v2.0.0, Plugin API 3.0)
└── README.md
```

## Plugin (src/main.js)

Registers providers via `Risuai.addProvider()`. Supports 3 API formats:

- **anthropic** — `/v1/messages` endpoint, converts messages to Anthropic format (system extraction, role merging, user-first), SSE with `content_block_delta` events, `thinking_delta` for CoT
- **openai** — `/v1/chat/completions` endpoint, passes messages through as-is, SSE with `choices[0].delta`, `reasoning_content` for CoT
- **gemini** — `/v1beta/models/{model}:streamGenerateContent?alt=sse` endpoint, converts to Gemini `contents` format, `thought: true` parts for CoT, auth via `x-goog-api-key` header

Config is a JSON array passed via `@arg config`. Each entry produces one registered provider.

Key config fields: `api_key`, `model`, `base_url`, `api_format`, `provider_name`, `enable_thinking`, `thinking_budget`, `thinking_display`, `show_thinking_output`, `thinking_style`, `thinking_open`, `thinking_close`, `custom_body`.

## WebUI (index.html + style.css + app.js)

Vanilla JS config generator. No build step, no dependencies.

- Provider cards with form fields, drag-and-drop reorder (+ keyboard arrow keys)
- Real-time JSON sync (input → JSON, and import JSON → cards)
- i18n: Korean, English, Japanese
- Dark/light theme via `data-theme` attribute and CSS custom properties
- CoT fields use `<select>` dropdowns (활성화/비활성화, 표시/비표시)
- Model field uses `<input>` with `<datalist>` for presets + free text input
- Import/copy/download buttons float inside the JSON code block

## CSS Token System

All colors use CSS custom properties defined in `:root` / `[data-theme="light"]`:
- `--bg`, `--bg-s`, `--bg-in`, `--bg-r`, `--bg-a` — background layers
- `--text`, `--text-sec`, `--text-dim` — text hierarchy
- `--accent` — primary accent (mauve/sakura pink)
- `--danger`, `--success`, `--info`, `--warn` — semantic colors

## Conventions

- All user-facing strings go through `i18n` object and `t()` function
- HTML is escaped via `escapeHtml()` before injection (both app.js and main.js)
- Boolean config values are strings `"true"` / `"false"` (not actual booleans)
- The plugin checks both string and boolean equality for backwards compatibility: `cfg.enable_thinking !== "false" && cfg.enable_thinking !== false`
- Animations are minimal — only functional transitions (advanced fields expand, checkbox toggle, toast fade)

## License

AGPL v3.0
