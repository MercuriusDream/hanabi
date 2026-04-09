const IC = {
    plus: '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M8 3v10M3 8h10"/></svg>',
    trash: '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3 5h10M5 5v8h6V5M6 3h4"/></svg>',
    copy: '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="5" width="8" height="8" rx="1"/><path d="M3 11V3h8"/></svg>',
    download: '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11v2h10v-2M8 3v7M5 7l3 3 3-3"/></svg>',
    grip: '<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><circle cx="6" cy="4" r="1.2"/><circle cx="10" cy="4" r="1.2"/><circle cx="6" cy="8" r="1.2"/><circle cx="10" cy="8" r="1.2"/><circle cx="6" cy="12" r="1.2"/><circle cx="10" cy="12" r="1.2"/></svg>',
    x: '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 4l8 8M12 4l-8 8"/></svg>',
    chevron: '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 6l3 3 3-3"/></svg>',
    duplicate: '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="5" width="8" height="8" rx="1"/><path d="M3 11V3h8"/></svg>',
    thinking: '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="8" cy="8" r="5.5"/><path d="M8 5v3l2 1.5"/></svg>',
    paste: '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 10V3M5 5.5L8 3l3 2.5"/><path d="M3 9v4h10V9"/></svg>',
    template: '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="5" height="5" rx="1"/><rect x="9" y="2" width="5" height="5" rx="1"/><rect x="2" y="9" width="5" height="5" rx="1"/><rect x="9" y="9" width="5" height="5" rx="1"/></svg>',
    pen: '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 1.5l3 3L5 14H2v-3L11.5 1.5z"/></svg>',
};

const i18n = {
    ko: {
        addProvider: "프로바이더 추가",
        clearAll: "전체 삭제",
        provider: "프로바이더",
        providerName: "프로바이더 이름",
        apiKey: "API 키",
        model: "모델",
        baseUrl: "기본 URL",
        apiFormat: "API 형식",
        enableThinking: "CoT",
        thinkingBudget: "CoT 토큰 예산",
        thinkingDisplay: "API CoT",
        showThinkingOutput: "채팅 CoT",
        thinkingStyle: "CoT 블록 스타일",
        optEnabled: "활성화",
        optDisabled: "비활성화",
        optShow: "표시",
        optHide: "비표시",
        thinkingOpen: "커스텀 시작 태그",
        thinkingClose: "커스텀 종료 태그",
        customBody: "커스텀 요청 본문",
        generatedConfig: "생성된 설정",
        outputHint: "RisuAI Hanabi 플러그인 설정에 붙여넣기",
        copy: "복사",
        download: "다운로드",
        advancedSettings: "고급 설정",
        hideAdvanced: "고급 설정 숨기기",
        showAdvanced: "고급 설정 보기",
        delete: "삭제",
        duplicate: "복제",
        drag: "드래그하여 이동",
        emptyTitle: "프로바이더가 없습니다",
        emptyDesc: "프로바이더를 추가하여 시작하세요.",
        copied: "클립보드에 복사되었습니다",
        copyFailed: "복사 실패",
        invalidJSON: "유효하지 않은 JSON",
        validationError: "일부 필드에 오류가 있습니다",
        hintProviderName: "RisuAI에 표시될 이름",
        hintApiKey: "API 키 (선택)",
        hintModel: "라우터 모델 ID",
        hintBudget: "최소 1024",
        hintStyle: "생각 블록의 시각적 표현 방식",
        hintCustomBody: "{{model}}, {{max_tokens}}, {{messages}} 플레이스홀더",
        errRequired: "필수 필드",
        errMinValue: "최소: ",
        errMaxValue: "최대: ",
        errApiKeyFormat: "잘못된 형식 (fw-로 시작)",
        nSelected: "개 선택",
        deleteSelected: "선택 삭제",
        duplicateSelected: "선택 복제",
        setModel: "모델 설정",
        setFormat: "형식 설정",
        toggleThinking: "사고 모드 전환",
        bulkApplied: "적용됨",
        importJSON: "가져오기",
        countLabel: "개",
    },
    en: {
        addProvider: "Add Provider",
        clearAll: "Clear All",
        provider: "Provider",
        providerName: "Provider Name",
        apiKey: "API Key",
        model: "Model",
        baseUrl: "Base URL",
        apiFormat: "API Format",
        enableThinking: "CoT",
        thinkingBudget: "CoT Budget",
        thinkingDisplay: "API CoT",
        showThinkingOutput: "Chat CoT",
        thinkingStyle: "CoT Style",
        optEnabled: "Enabled",
        optDisabled: "Disabled",
        optShow: "Show",
        optHide: "Hidden",
        thinkingOpen: "Custom Open Tag",
        thinkingClose: "Custom Close Tag",
        customBody: "Custom Body",
        generatedConfig: "Generated Config",
        outputHint: "Paste into RisuAI Hanabi plugin config",
        copy: "Copy",
        download: "Download",
        advancedSettings: "Advanced",
        hideAdvanced: "Hide Advanced",
        showAdvanced: "Show Advanced",
        delete: "Delete",
        duplicate: "Duplicate",
        drag: "Drag to move",
        emptyTitle: "No Providers",
        emptyDesc: "Add a provider to get started.",
        copied: "Copied",
        copyFailed: "Copy failed",
        invalidJSON: "Invalid JSON",
        validationError: "Some fields have errors",
        hintProviderName: "Display name in RisuAI",
        hintApiKey: "API key (optional)",
        hintModel: "Router model ID",
        hintBudget: "Min 1024",
        hintStyle: "Visual style of thinking blocks",
        hintCustomBody: "{{model}}, {{max_tokens}}, {{messages}}",
        errRequired: "Required",
        errMinValue: "Min: ",
        errMaxValue: "Max: ",
        errApiKeyFormat: "Should start with fw-",
        nSelected: " selected",
        deleteSelected: "Delete Selected",
        duplicateSelected: "Duplicate Selected",
        setModel: "Set Model",
        setFormat: "Set Format",
        toggleThinking: "Toggle Thinking",
        bulkApplied: "Applied",
        importJSON: "Import",
        countLabel: "",
    },
    ja: {
        addProvider: "プロバイダー追加",
        clearAll: "すべて削除",
        provider: "プロバイダー",
        providerName: "プロバイダー名",
        apiKey: "APIキー",
        model: "モデル",
        baseUrl: "ベースURL",
        apiFormat: "API形式",
        enableThinking: "CoT",
        thinkingBudget: "CoTトークン予算",
        thinkingDisplay: "API CoT",
        showThinkingOutput: "チャットCoT",
        thinkingStyle: "CoTスタイル",
        optEnabled: "有効",
        optDisabled: "無効",
        optShow: "表示",
        optHide: "非表示",
        thinkingOpen: "カスタム開始タグ",
        thinkingClose: "カスタム終了タグ",
        customBody: "カスタム本文",
        generatedConfig: "生成された設定",
        outputHint: "RisuAI Hanabiプラグイン設定に貼り付け",
        copy: "コピー",
        download: "ダウンロード",
        advancedSettings: "詳細設定",
        hideAdvanced: "詳細を隠す",
        showAdvanced: "詳細を表示",
        delete: "削除",
        duplicate: "複製",
        drag: "ドラッグして移動",
        emptyTitle: "プロバイダーがありません",
        emptyDesc: "プロバイダーを追加してください。",
        copied: "コピーしました",
        copyFailed: "コピー失敗",
        invalidJSON: "無効なJSON",
        validationError: "エラーがあります",
        hintProviderName: "RisuAIに表示される名前",
        hintApiKey: "APIキー（任意）",
        hintModel: "ルーターモデルID",
        hintBudget: "最小1024",
        hintStyle: "思考ブロックの視覚スタイル",
        hintCustomBody: "{{model}}, {{max_tokens}}, {{messages}}",
        errRequired: "必須",
        errMinValue: "最小: ",
        errMaxValue: "最大: ",
        errApiKeyFormat: "fw-で始まる必要があります",
        nSelected: "個選択",
        deleteSelected: "選択削除",
        duplicateSelected: "選択複製",
        setModel: "モデル設定",
        setFormat: "形式設定",
        toggleThinking: "思考モード切替",
        bulkApplied: "適用済み",
        importJSON: "インポート",
        countLabel: "個",
    },
};

const MODEL_OPTIONS = [
    "accounts/fireworks/routers/glm-5-fast",
    "accounts/fireworks/routers/glm-5",
    "accounts/fireworks/routers/kimi-k2p5-fast",
    "accounts/fireworks/routers/kimi-k2p5-turbo",
    "accounts/fireworks/routers/kimi-k2p5",
    "accounts/fireworks/routers/deepseek-r1",
];

const FORMAT_OPTIONS = ["anthropic", "openai", "gemini"];

let currentLang = "ko", providerCount = 0, draggedElement = null;
const selectedCards = new Set();

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('hanabi-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(theme);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('hanabi-theme', theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    showToast(newTheme === 'light' ? 'Light mode' : 'Dark mode', 'info');
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('hanabi-theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

function debounce(fn, ms) {
    let t;
    return (...a) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...a), ms);
    };
}

function escapeHtml(s) {
    if (!s) return "";
    return String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function t(k) {
    return (i18n[currentLang] && i18n[currentLang][k]) || k;
}

let _syncing = false;
const syncLive = debounce(() => {
    if (!_syncing) syncJSON();
}, 150);

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    setupLanguageSelector();
    setupKeyboardShortcuts();
    applyButtonLabels();
    populateBulkModelSelect();
    populateBulkFormatSelect();
    addProvider();
    document.getElementById("providers-container").addEventListener("input", syncLive);
    document.getElementById("providers-container").addEventListener("change", syncLive);
    const jo = document.getElementById("json-output");
    const jh = document.getElementById("json-highlight");
    const jw = jo && jo.closest(".json-wrap");
    if (jh && jo && jw) {
        const activateEditor = () => {
            jw.classList.add("editing");
            jo.focus();
        };
        jh.addEventListener("click", activateEditor);
        jh.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                activateEditor();
            }
        });
        jo.addEventListener("blur", () => {
            jw.classList.remove("editing");
            syncJSON();
        });
    }
});

function applyButtonLabels() {
    const full = (id, ic, txt) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = ic + " " + escapeHtml(txt);
    };
    const icon = (id, ic) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = ic;
    };
    full("btn-add", IC.plus, t("addProvider"));
    icon("btn-clear", IC.trash);
    icon("btn-import", IC.paste);
    icon("btn-copy", IC.copy);
    icon("btn-download", IC.download);
    icon("btn-dup-selected", IC.duplicate);
    icon("btn-del-selected", IC.trash);
    icon("btn-toggle-thinking", IC.thinking);
    updateProviderCountLabel();
}

function populateBulkModelSelect() {
    const sel = document.getElementById("bulk-model");
    if (!sel) return;
    sel.innerHTML = '<option value="" disabled selected>' + escapeHtml(t("setModel")) + "</option>" +
        MODEL_OPTIONS.map(m => '<option value="' + escapeHtml(m) + '">' + escapeHtml(m.split("/").pop()) + "</option>").join("");
}

function populateBulkFormatSelect() {
    const sel = document.getElementById("bulk-format");
    if (!sel) return;
    sel.innerHTML = '<option value="" disabled selected>' + escapeHtml(t("setFormat")) + "</option>" +
        FORMAT_OPTIONS.map(f => '<option value="' + escapeHtml(f) + '">' + escapeHtml(f) + "</option>").join("");
}

function setupLanguageSelector() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.dataset.lang) setLanguage(btn.dataset.lang);
        });
    });
}

function setLanguage(lang) {
    if (!i18n[lang]) return;
    currentLang = lang;
    document.querySelectorAll(".lang-btn").forEach((btn) => {
        const active = btn.dataset.lang === lang;
        btn.classList.toggle("active", active);
        btn.setAttribute("aria-pressed", active);
    });
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const k = el.dataset.i18n;
        if (i18n[lang][k]) el.textContent = i18n[lang][k];
    });
    document.documentElement.dir = ["ar", "he"].includes(lang) ? "rtl" : "ltr";
    applyButtonLabels();
    populateBulkModelSelect();
    populateBulkFormatSelect();
    updateSelectionBar();
}

function setupKeyboardShortcuts() {
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") clearToasts();
        if ((e.ctrlKey || e.metaKey) && e.key === "a" && e.target === document.body) {
            e.preventDefault();
            selectAll();
        }
    });
}

function toggleCardSelection(cardId, checked) {
    if (checked) selectedCards.add(cardId);
    else selectedCards.delete(cardId);
    const card = document.getElementById(cardId);
    if (card) card.classList.toggle("selected", checked);
    updateSelectionBar();
    updateMasterCheckState();
}

function toggleMasterCheck(checked) {
    if (checked) selectAll();
    else deselectAll();
}

function updateMasterCheckState() {
    const mc = document.getElementById("master-check");
    if (!mc) return;
    const total = document.querySelectorAll(".provider-card").length;
    mc.checked = total > 0 && selectedCards.size === total;
    mc.indeterminate = selectedCards.size > 0 && selectedCards.size < total;
}

function updateProviderCountLabel() {
    const el = document.getElementById("provider-count-label");
    if (!el) return;
    const n = document.querySelectorAll(".provider-card").length;
    if (currentLang === "en") {
        el.textContent = n + " provider" + (n !== 1 ? "s" : "");
    } else {
        el.textContent = n + t("countLabel") + " " + t("provider");
    }
}

function selectAll() {
    document.querySelectorAll(".provider-card").forEach((card) => {
        const cb = card.querySelector(".provider-check");
        if (cb) cb.checked = true;
        selectedCards.add(card.id);
        card.classList.add("selected");
    });
    updateSelectionBar();
    updateMasterCheckState();
}

function deselectAll() {
    document.querySelectorAll(".provider-card").forEach((card) => {
        const cb = card.querySelector(".provider-check");
        if (cb) cb.checked = false;
        card.classList.remove("selected");
    });
    selectedCards.clear();
    updateSelectionBar();
    updateMasterCheckState();
}

function updateSelectionBar() {
    const bar = document.getElementById("selection-bar"), count = document.getElementById("selection-count");
    if (!bar || !count) return;
    bar.classList.toggle("visible", selectedCards.size > 0);
    count.textContent = selectedCards.size + t("nSelected");
}

function getProviderData(card) {
    const data = {};
    card.querySelectorAll("[data-field]").forEach((f) => {
        if (f.type === "checkbox") data[f.dataset.field] = f.checked ? "true" : "false";
        else if (f.hasAttribute("contenteditable")) data[f.dataset.field] = f.textContent.trim();
        else data[f.dataset.field] = f.value;
    });
    return data;
}

function deleteSelected() {
    if (selectedCards.size === 0) return;
    if (!confirm(t("deleteSelected") + "?")) return;
    selectedCards.forEach((id) => {
        const c = document.getElementById(id);
        if (c) c.remove();
    });
    selectedCards.clear();
    updateSelectionBar();
    updateProviderNumbers();
    if (document.querySelectorAll(".provider-card").length === 0) showEmptyState();
    syncJSON();
}

function duplicateSelected() {
    if (selectedCards.size === 0) return;
    const toAdd = [];
    selectedCards.forEach((id) => {
        const c = document.getElementById(id);
        if (c) toAdd.push(getProviderData(c));
    });
    toAdd.forEach((d) => addProvider(d));
}

function bulkSetModel(value) {
    if (!value || selectedCards.size === 0) return;
    selectedCards.forEach((id) => {
        const card = document.getElementById(id);
        if (card) {
            const sel = card.querySelector('[data-field="model"]');
            if (sel) sel.value = value;
        }
    });
    document.getElementById("bulk-model").selectedIndex = 0;
    syncJSON();
    showToast(t("bulkApplied"), "success");
}

function bulkSetFormat(value) {
    if (!value || selectedCards.size === 0) return;
    selectedCards.forEach((id) => {
        const card = document.getElementById(id);
        if (card) {
            const sel = card.querySelector('[data-field="api_format"]');
            if (sel) sel.value = value;
        }
    });
    document.getElementById("bulk-format").selectedIndex = 0;
    syncJSON();
    showToast(t("bulkApplied"), "success");
}

function bulkToggleThinking() {
    if (selectedCards.size === 0) return;
    selectedCards.forEach((id) => {
        const card = document.getElementById(id);
        if (card) {
            const sel = card.querySelector('[data-field="enable_thinking"]');
            if (sel) sel.value = sel.value === "true" ? "false" : "true";
        }
    });
    syncJSON();
    showToast(t("bulkApplied"), "success");
}

function showEmptyState() {
    const c = document.getElementById("providers-container");
    if (!c) return;
    c.innerHTML = '<div class="empty-state" role="status"><div class="empty-state-title" data-i18n="emptyTitle">' +
        escapeHtml(t("emptyTitle")) + '</div><p class="empty-state-desc" data-i18n="emptyDesc">' +
        escapeHtml(t("emptyDesc")) + '</p><button class="btn-accent" onclick="addProvider()">' +
        IC.plus + " " + escapeHtml(t("addProvider")) + "</button></div>";
}

function addProvider(data) {
    const container = document.getElementById("providers-container");
    if (!container) return;
    const empty = container.querySelector(".empty-state");
    if (empty) empty.remove();
    providerCount++;
    const idx = providerCount;
    const d = data || {};
    if (!d.provider_name) d.provider_name = t("provider") + " " + idx;
    const card = document.createElement("div");
    card.className = "provider-card";
    card.id = "provider-" + idx;
    card.setAttribute("role", "article");
    card.setAttribute("aria-label", t("provider") + " " + idx);
    card.draggable = true;
    card.innerHTML = createProviderHTML(idx, d);
    setupDragAndDrop(card);
    setupAdvancedToggle(card);
    setupValidation(card);
    container.appendChild(card);
    requestAnimationFrame(() => {
        const inp = card.querySelector('input[type="text"]');
        if (inp) inp.focus();
    });
    syncJSON();
}

function createProviderHTML(idx, d) {
    return '<div class="provider-header">' +
        '<input type="checkbox" class="provider-check" onchange="toggleCardSelection(\'provider-' + idx + '\', this.checked)" aria-label="Select">' +
        '<span class="provider-title"><span class="provider-number">' + idx + '</span> <span class="provider-name truncate" contenteditable="true" role="textbox" aria-label="' + escapeHtml(t("providerName")) + '" spellcheck="false" data-field="provider_name" data-idx="' + idx + '">' +
        escapeHtml(d.provider_name || t("provider") + " " + idx) + '</span><button type="button" class="btn-edit" onclick="this.previousElementSibling.focus()" title="Rename">' + IC.pen + '</button></span>' +
        '<div class="provider-actions">' +
        '<button type="button" class="drag-handle" title="' + escapeHtml(t("drag")) + '" aria-label="' + escapeHtml(t("drag")) + '">' + IC.grip + "</button>" +
        '<button type="button" onclick="duplicateProvider(' + idx + ')" title="' + escapeHtml(t("duplicate")) + '">' + IC.duplicate + "</button>" +
        '<button type="button" onclick="deleteProvider(' + idx + ')" title="' + escapeHtml(t("delete")) + '">' + IC.x + "</button>" +
        "</div></div>" +
        '<div class="form-grid">' +
        formGroup(idx, "api_key", t("apiKey"), "text", d.api_key, false, "fw-xxx...", t("hintApiKey")) +
        formGroupDatalist(idx, "model", t("model"), MODEL_OPTIONS, d.model || MODEL_OPTIONS[0], t("hintModel")) +
        formGroupSelect(idx, "api_format", t("apiFormat"), FORMAT_OPTIONS, d.api_format || "anthropic", false) +
        formGroup(idx, "base_url", t("baseUrl"), "text", d.base_url || "https://api.fireworks.ai/inference", false) +
        "</div>" +
        '<div class="advanced-toggle" onclick="toggleAdvanced(' + idx + ')" role="button" tabindex="0" aria-expanded="false" aria-controls="advanced-' + idx + '">' +
        "<span data-toggle-text>" + escapeHtml(t("showAdvanced")) + "</span>" +
        '<span class="advanced-toggle-icon" aria-hidden="true">' + IC.chevron + "</span>" +
        "</div>" +
        '<div class="advanced-fields" id="advanced-' + idx + '" role="region" aria-label="' + escapeHtml(t("advancedSettings")) + '"><div class="advanced-fields-inner"><div class="form-grid">' +
        formGroupBool(idx, "enable_thinking", t("enableThinking"), d.enable_thinking !== "false" ? "true" : "false", t("optEnabled"), t("optDisabled")) +
        formGroup(idx, "thinking_budget", t("thinkingBudget"), "number", d.thinking_budget || "8192", false, "", t("hintBudget")) +
        formGroupBool(idx, "thinking_display", t("thinkingDisplay"), d.thinking_display === "true" ? "true" : "false", t("optHide"), t("optShow")) +
        formGroupBool(idx, "show_thinking_output", t("showThinkingOutput"), d.show_thinking_output !== "false" ? "true" : "false", t("optShow"), t("optHide")) +
        formGroupSelect(idx, "thinking_style", t("thinkingStyle"), ["default", "minimal", "raw", "custom"], d.thinking_style, false, t("hintStyle")) +
        '<div class="form-group full-width"><label for="thinking-open-' + idx + '">' + escapeHtml(t("thinkingOpen")) + '</label><textarea id="thinking-open-' + idx + '" name="thinking_open" rows="2" data-field="thinking_open">' + escapeHtml(d.thinking_open || "") + "</textarea></div>" +
        '<div class="form-group full-width"><label for="thinking-close-' + idx + '">' + escapeHtml(t("thinkingClose")) + '</label><textarea id="thinking-close-' + idx + '" name="thinking_close" rows="2" data-field="thinking_close">' + escapeHtml(d.thinking_close || "") + "</textarea></div>" +
        '<div class="form-group full-width"><label for="custom-body-' + idx + '">' + escapeHtml(t("customBody")) + '</label><textarea id="custom-body-' + idx + '" name="custom_body" rows="5" data-field="custom_body" placeholder=\'{"model":"{{model}}","messages":{{messages}}}\'>' + escapeHtml(d.custom_body || "") + '</textarea><span class="hint">' + escapeHtml(t("hintCustomBody")) + "</span></div>" +
        "</div></div></div>";
}

function formGroup(idx, field, label, type, value, required, placeholder, hint, maxlen) {
    const id = field.replace(/_/g, "-") + "-" + idx;
    let h = '<div class="form-group"><label for="' + id + '">' + escapeHtml(label) + "</label>";
    h += '<input type="' + type + '" id="' + id + '" name="' + field + '" value="' + escapeHtml(value || "") + '"' +
        (placeholder ? ' placeholder="' + escapeHtml(placeholder) + '"' : "") +
        (required ? " required" : "") +
        (maxlen ? ' maxlength="' + maxlen + '"' : "") +
        (type === "number" ? ' min="1024" max="128000" step="1024"' : "") +
        ' data-field="' + field + '">';
    if (hint) h += '<span class="hint">' + escapeHtml(hint) + "</span>";
    if (maxlen) h += '<span class="char-counter" id="counter-' + id + '">0/' + maxlen + "</span>";
    return h + "</div>";
}

function formGroupSelect(idx, field, label, options, selected, required, hint) {
    const id = field.replace(/_/g, "-") + "-" + idx;
    let h = '<div class="form-group"><label for="' + id + '">' + escapeHtml(label) + '</label><select id="' + id + '" name="' + field + '"' +
        (required ? " required" : "") +
        ' data-field="' + field + '">';
    options.forEach((o) => {
        h += '<option value="' + escapeHtml(o) + '"' + (selected === o ? " selected" : "") + ">" + escapeHtml(o) + "</option>";
    });
    h += "</select>";
    if (hint) h += '<span class="hint">' + escapeHtml(hint) + "</span>";
    return h + "</div>";
}

function formGroupDatalist(idx, field, label, options, value, hint) {
    const id = field.replace(/_/g, "-") + "-" + idx;
    const listId = "dl-" + field + "-" + idx;
    let h = '<div class="form-group"><label for="' + id + '">' + escapeHtml(label) + "</label>";
    h += '<input type="text" id="' + id + '" name="' + field + '" list="' + listId + '" value="' + escapeHtml(value || "") + '"' +
        (hint ? ' placeholder="' + escapeHtml(hint) + '"' : "") +
        ' data-field="' + field + '" autocomplete="off">';
    h += '<datalist id="' + listId + '">';
    options.forEach((o) => {
        h += '<option value="' + escapeHtml(o) + '">';
    });
    h += "</datalist>";
    if (hint) h += '<span class="hint">' + escapeHtml(hint) + "</span>";
    return h + "</div>";
}

function formGroupBool(idx, field, label, value, trueLabel, falseLabel) {
    const id = field.replace(/_/g, "-") + "-" + idx;
    return '<div class="form-group"><label for="' + id + '">' + escapeHtml(label) + '</label>' +
        '<select id="' + id + '" name="' + field + '" data-field="' + field + '">' +
        '<option value="true"' + (value === "true" ? " selected" : "") + '>' + escapeHtml(trueLabel) + '</option>' +
        '<option value="false"' + (value !== "true" ? " selected" : "") + '>' + escapeHtml(falseLabel) + '</option>' +
        '</select></div>';
}

function checkboxGroup(idx, field, label, checked) {
    return '<div class="form-group"><label class="checkbox-wrapper"><input type="checkbox" id="' + field.replace(/_/g, "-") + "-" + idx + '" name="' + field + '"' + (checked ? " checked" : "") + ' data-field="' + field + '"><span>' + escapeHtml(label) + "</span></label></div>";
}

function setupDragAndDrop(card) {
    card.addEventListener("dragstart", (e) => {
        draggedElement = card;
        card.classList.add("dragging");
        e.dataTransfer.effectAllowed = "move";
    });
    card.addEventListener("dragend", () => {
        card.classList.remove("dragging");
        draggedElement = null;
        updateProviderNumbers();
    });
    card.addEventListener("dragover", (e) => {
        e.preventDefault();
        if (!draggedElement || draggedElement === card) return;
        const c = document.getElementById("providers-container");
        if (!c) return;
        const cards = [...c.querySelectorAll(".provider-card")];
        if (cards.indexOf(draggedElement) < cards.indexOf(card))
            card.after(draggedElement);
        else card.before(draggedElement);
    });
    const handle = card.querySelector(".drag-handle");
    if (handle) {
        handle.addEventListener("keydown", (e) => {
            if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
            e.preventDefault();
            const c = document.getElementById("providers-container");
            if (!c) return;
            const sibling = e.key === "ArrowUp" ? card.previousElementSibling : card.nextElementSibling;
            if (!sibling || !sibling.classList.contains("provider-card")) return;
            if (e.key === "ArrowUp") c.insertBefore(card, sibling);
            else c.insertBefore(card, sibling.nextSibling);
            updateProviderNumbers();
            syncJSON();
            handle.focus();
        });
    }
}

function setupAdvancedToggle(card) {
    const tog = card.querySelector(".advanced-toggle");
    if (!tog) return;
    tog.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            tog.click();
        }
    });
}

function setupValidation(card) {
    const nameInp = card.querySelector('[name="provider_name"]');
    if (nameInp) {
        const ctr = card.querySelector('[id^="counter-"]');
        const update = () => {
            if (!ctr) return;
            const l = nameInp.value.length;
            ctr.textContent = l + "/100";
            ctr.classList.toggle("warning", l > 80);
            ctr.classList.toggle("error", l > 100);
        };
        nameInp.addEventListener("input", update);
        update();
    }
    const dv = debounce((f) => validateField(f), 300);
    card.querySelectorAll("input, select, textarea").forEach((inp) => {
        inp.addEventListener("blur", () => validateField(inp));
        inp.addEventListener("input", () => {
            clearFieldError(inp);
            dv(inp);
        });
    });
}

function validateField(f) {
    const g = f.closest(".form-group");
    if (!g) return true;
    let err = null;
    if (f.hasAttribute("required") && !f.value.trim()) err = t("errRequired");
    if (f.type === "number" && f.value) {
        const mn = parseInt(f.min), mx = parseInt(f.max), v = parseInt(f.value);
        if (!isNaN(mn) && v < mn) err = t("errMinValue") + mn;
        if (!isNaN(mx) && v > mx) err = t("errMaxValue") + mx;
    }
    if (f.name === "api_key" && f.value && !f.value.match(/^fw-[A-Za-z0-9_-]+$/)) err = t("errApiKeyFormat");
    clearFieldError(f);
    if (err) {
        const el = document.createElement("span");
        el.className = "field-error";
        el.setAttribute("role", "alert");
        el.textContent = err;
        f.parentNode.appendChild(el);
        f.setAttribute("aria-invalid", "true");
        return false;
    }
    f.setAttribute("aria-invalid", "false");
    return true;
}

function clearFieldError(f) {
    const g = f.closest(".form-group");
    if (g) {
        const e = g.querySelector(".field-error");
        if (e) e.remove();
    }
    f.removeAttribute("aria-invalid");
}

function toggleAdvanced(idx) {
    const fields = document.getElementById("advanced-" + idx);
    if (!fields) return;
    const tog = fields.previousElementSibling;
    if (!tog) return;
    const expanded = fields.classList.toggle("show");
    tog.setAttribute("aria-expanded", expanded);
    const txt = tog.querySelector("[data-toggle-text]");
    if (txt) txt.textContent = expanded ? t("hideAdvanced") : t("showAdvanced");
}

function deleteProvider(idx) {
    const card = document.getElementById("provider-" + idx);
    if (!card || !confirm(t("delete") + "?")) return;
    selectedCards.delete(card.id);
    card.remove();
    updateProviderNumbers();
    updateSelectionBar();
    if (document.querySelectorAll(".provider-card").length === 0) showEmptyState();
    syncJSON();
}

function duplicateProvider(idx) {
    const card = document.getElementById("provider-" + idx);
    if (!card) return;
    addProvider(getProviderData(card));
}

function updateProviderNumbers() {
    const cards = document.querySelectorAll(".provider-card");
    cards.forEach((card, i) => {
        const num = i + 1;
        const numEl = card.querySelector(".provider-number");
        if (numEl) numEl.textContent = num;
        card.id = "provider-" + num;
        card.setAttribute("aria-label", t("provider") + " " + num);
        const del = card.querySelector('[onclick^="deleteProvider"]');
        if (del) del.setAttribute("onclick", "deleteProvider(" + num + ")");
        const dup = card.querySelector('[onclick^="duplicateProvider"]');
        if (dup) dup.setAttribute("onclick", "duplicateProvider(" + num + ")");
        const adv = card.querySelector(".advanced-toggle");
        if (adv) {
            adv.setAttribute("onclick", "toggleAdvanced(" + num + ")");
            adv.setAttribute("aria-controls", "advanced-" + num);
        }
        const af = card.querySelector(".advanced-fields");
        if (af) af.id = "advanced-" + num;
        const cb = card.querySelector(".provider-check");
        if (cb) cb.setAttribute("onchange", "toggleCardSelection('provider-" + num + "', this.checked)");
    });
    providerCount = cards.length;
    const newSelected = new Set();
    cards.forEach((card) => {
        if (card.classList.contains("selected")) newSelected.add(card.id);
    });
    selectedCards.clear();
    newSelected.forEach((id) => selectedCards.add(id));
    updateSelectionBar();
}

function clearAll() {
    const cards = document.querySelectorAll(".provider-card");
    if (cards.length === 0) return;
    if (!confirm(t("clearAll") + "?")) return;
    cards.forEach((c) => c.remove());
    selectedCards.clear();
    updateSelectionBar();
    showEmptyState();
    syncJSON();
}

function syncJSON() {
    updateProviderCountLabel();
    updateMasterCheckState();
    const cards = document.querySelectorAll(".provider-card");
    const out = document.getElementById("json-output");
    const vs = document.getElementById("validation-status");
    if (!out) return;
    if (cards.length === 0) {
        _syncing = true;
        out.value = "[]";
        if (vs) {
            vs.className = "output-validation";
            vs.textContent = "";
        }
        _syncing = false;
        highlightJSON("[]");
        return;
    }
    const configs = [];
    cards.forEach((card) => {
        const cfg = {};
        card.querySelectorAll("[data-field]").forEach((f) => {
            const k = f.dataset.field;
            var v;
            if (f.type === "checkbox") v = f.checked ? "true" : "false";
            else if (f.hasAttribute("contenteditable")) v = (f.textContent || "").trim();
            else v = (f.value || "").trim();
            if (v || f.type === "checkbox") cfg[k] = v;
        });
        configs.push(cfg);
    });
    _syncing = true;
    out.value = JSON.stringify(configs, null, 2);
    if (vs) {
        vs.className = "output-validation valid";
        if (currentLang === "en")
            vs.textContent = configs.length + " provider" + (configs.length !== 1 ? "s" : "");
        else
            vs.textContent = configs.length + t("countLabel") + " " + t("provider");
    }
    _syncing = false;
    highlightJSON(out.value);
}

function highlightJSON(str) {
    var el = document.getElementById("json-highlight");
    if (!el) return;
    if (!str) { el.textContent = ""; return; }
    var out = "";
    var i = 0;
    var s = str;
    while (i < s.length) {
        var ch = s[i];
        if (ch === '"') {
            var j = i + 1;
            while (j < s.length && s[j] !== '"') { if (s[j] === '\\') j++; j++; }
            j++;
            var tok = s.slice(i, j);
            var safe = tok.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
            var rest = s.slice(j);
            if (/^\s*:/.test(rest)) {
                out += '<span class="jk">' + safe + '</span>';
            } else {
                out += '<span class="js">' + safe + '</span>';
            }
            i = j;
        } else if (ch === '-' || (ch >= '0' && ch <= '9')) {
            var m = s.slice(i).match(/^-?\d+(\.\d+)?([eE][+-]?\d+)?/);
            if (m) {
                out += '<span class="jn">' + m[0] + '</span>';
                i += m[0].length;
            } else { out += ch; i++; }
        } else if (s.slice(i,i+4) === 'true') { out += '<span class="jb">true</span>'; i += 4; }
        else if (s.slice(i,i+5) === 'false') { out += '<span class="jb">false</span>'; i += 5; }
        else if (s.slice(i,i+4) === 'null') { out += '<span class="jb">null</span>'; i += 4; }
        else if ('{}[],'.indexOf(ch) !== -1) { out += '<span class="jp">' + ch + '</span>'; i++; }
        else if (ch === '<') { out += '&lt;'; i++; }
        else if (ch === '>') { out += '&gt;'; i++; }
        else if (ch === '&') { out += '&amp;'; i++; }
        else { out += ch; i++; }
    }
    el.innerHTML = out;
}

function importJSON() {
    const out = document.getElementById("json-output");
    if (!out) return;
    const raw = out.value.trim();
    if (!raw) return;
    let parsed;
    try {
        parsed = JSON.parse(raw);
    } catch (e) {
        showToast(t("invalidJSON"), "error");
        const vs = document.getElementById("validation-status");
        if (vs) {
            vs.className = "output-validation invalid";
            vs.textContent = "Invalid JSON";
        }
        return;
    }
    if (!Array.isArray(parsed)) {
        showToast(t("invalidJSON"), "error");
        return;
    }
    document.querySelectorAll(".provider-card").forEach((c) => c.remove());
    selectedCards.clear();
    providerCount = 0;
    parsed.forEach((d) => addProvider(d));
    updateSelectionBar();
    showToast(parsed.length + " imported", "success");
}

async function copyToClipboard() {
    const txt = document.getElementById("json-output").value;
    if (!txt) return;
    try {
        await navigator.clipboard.writeText(txt);
        showToast(t("copied"), "success");
    } catch {
        const ta = document.createElement("textarea");
        ta.value = txt;
        ta.style.cssText = "position:fixed;opacity:0;pointer-events:none";
        document.body.appendChild(ta);
        ta.select();
        try {
            document.execCommand("copy");
            showToast(t("copied"), "success");
        } catch {
            showToast(t("copyFailed"), "error");
        }
        document.body.removeChild(ta);
    }
}

function downloadJSON() {
    const txt = document.getElementById("json-output").value;
    if (!txt) return;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([txt], { type: "application/json" }));
    a.download = "hanabi-config-" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function loadExample() {
    const existing = document.querySelectorAll(".provider-card");
    if (existing.length > 0 && !confirm(t("clearAll") + "?")) return;
    existing.forEach((c) => c.remove());
    selectedCards.clear();
    providerCount = 0;
    [
        {
            provider_name: "GLM-Full",
            api_key: "fw-your-key",
            model: "accounts/fireworks/routers/glm-5-fast",
            api_format: "anthropic",
            enable_thinking: "true",
            thinking_budget: "16384",
            show_thinking_output: "true",
            thinking_style: "default",
        },
        {
            provider_name: "Kimi-Fast",
            api_key: "fw-your-key",
            model: "accounts/fireworks/routers/kimi-k2p5-fast",
            api_format: "anthropic",
            enable_thinking: "false",
            show_thinking_output: "false",
            thinking_style: "minimal",
        },
        {
            provider_name: "DeepSeek-R1",
            api_key: "fw-your-key",
            model: "accounts/fireworks/routers/deepseek-r1",
            api_format: "openai",
            enable_thinking: "true",
            thinking_display: "true",
            thinking_style: "raw",
        },
    ].forEach((d) => addProvider(d));
    updateSelectionBar();
}

function showToast(msg, type) {
    const c = document.getElementById("toast-container");
    if (!c) return;
    const t = document.createElement("div");
    t.className = "toast " + (type || "info");
    t.textContent = msg;
    t.setAttribute("role", "status");
    c.appendChild(t);
    setTimeout(() => {
        t.classList.add("removing");
        t.addEventListener("transitionend", () => t.remove(), { once: true });
        setTimeout(() => t.remove(), 300);
    }, 2200);
}

function clearToasts() {
    const c = document.getElementById("toast-container");
    if (c) c.innerHTML = "";
}
