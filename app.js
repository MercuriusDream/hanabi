const IC = {
  plus: '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M8 3v10M3 8h10"/></svg>',
  trash:
    '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3 5h10M5 5v8h6V5M6 3h4"/></svg>',
  copy: '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="5" width="8" height="8" rx="1"/><path d="M3 11V3h8"/></svg>',
  download:
    '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11v2h10v-2M8 3v7M5 7l3 3 3-3"/></svg>',
  grip: '<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor"><circle cx="6" cy="4" r="1.2"/><circle cx="10" cy="4" r="1.2"/><circle cx="6" cy="8" r="1.2"/><circle cx="10" cy="8" r="1.2"/><circle cx="6" cy="12" r="1.2"/><circle cx="10" cy="12" r="1.2"/></svg>',
  x: '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 4l8 8M12 4l-8 8"/></svg>',
  chevron:
    '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 6l3 3 3-3"/></svg>',
  duplicate:
    '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="5" width="8" height="8" rx="1"/><path d="M3 11V3h8"/></svg>',
  thinking:
    '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="8" cy="8" r="5.5"/><path d="M8 5v3l2 1.5"/></svg>',
  paste:
    '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 10V3M5 5.5L8 3l3 2.5"/><path d="M3 9v4h10V9"/></svg>',
  template:
    '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="5" height="5" rx="1"/><rect x="9" y="2" width="5" height="5" rx="1"/><rect x="2" y="9" width="5" height="5" rx="1"/><rect x="9" y="9" width="5" height="5" rx="1"/></svg>',
  pen: '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 1.5l3 3L5 14H2v-3L11.5 1.5z"/></svg>',
  search: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5L14 14"/></svg>',
  sparkle: '<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0l1.5 5.5L15 8l-5.5 1.5L8 15l-1.5-5.5L1 8l5.5-1.5z"/></svg>',
  bolt: '<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M9 1L3 9h4l-1 6 6-8H8l1-6z"/></svg>',
  cpu: '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="4" y="4" width="8" height="8" rx="1"/><path d="M6 1v2M10 1v2M6 13v2M10 13v2M1 6h2M1 10h2M13 6h2M13 10h2"/></svg>',
  check: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 8l3.5 4L13 4"/></svg>',
  share: '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="3" r="2"/><circle cx="12" cy="13" r="2"/><circle cx="4" cy="8" r="2"/><path d="M6 7l4-3M6 9l4 3"/></svg>',
  code: '<svg width="20" height="20" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4L1 8l4 4M11 4l4 4-4 4"/></svg>',

  // === PROVIDER BRAND LOGOS ===
  // Anthropic - Stylized 'A' with neural network hint
  logoAnthropic: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2L2 18h4l1.5-3h5l1.5 3h4L10 2zm0 5.5L12.5 13h-5L10 7.5z"/></svg>',
  // OpenAI - Abstract hexagonal aperture
  logoOpenai: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM6 10a4 4 0 018 0H6z"/><circle cx="10" cy="10" r="2"/></svg>',
  // Google/Gemini - Four-pointed star
  logoGemini: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10 1l2 7h7l-5.5 4 2 7L10 15l-5.5 4 2-7L1 8h7l2-7z"/></svg>',
  // Fireworks - Spark/flame burst
  logoFireworks: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10 1v6M10 13v6M1 10h6M13 10h6M3.5 3.5l4 4M12.5 12.5l4 4M3.5 16.5l4-4M12.5 7.5l4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/><circle cx="10" cy="10" r="2.5"/></svg>',
  // Vercel - Triangle
  logoVercel: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10 3L18 17H2L10 3z"/></svg>',
  // ZhipuAI/GLM - Chinese-inspired geometric pattern
  logoZhipu: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="11" y="3" width="6" height="6" rx="1"/><rect x="3" y="11" width="6" height="6" rx="1"/><path d="M11 11h6v6h-2v-4h-4v-2z"/></svg>',
  // OpenRouter - Network/routing paths
  logoOpenrouter: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="10" cy="10" r="3"/><circle cx="4" cy="4" r="2"/><circle cx="16" cy="4" r="2"/><circle cx="4" cy="16" r="2"/><circle cx="16" cy="16" r="2"/><path d="M5.5 5.5l2.5 2.5M14.5 5.5l-2.5 2.5M5.5 14.5l2.5-2.5M14.5 14.5l-2.5-2.5"/></svg>',
  // OpenCode - Terminal cursor with code brackets
  logoOpencode: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 6L2 10l4 4M14 6l4 4-4 4"/><rect x="8" y="8" width="4" height="6" rx="0.5" fill="currentColor" stroke="none"/></svg>',
  // Vertex AI - Cloud with neural connections
  logoVertex: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M16 11a4 4 0 00-4-4 4.5 4.5 0 00-8 2 3 3 0 000 6h11a3 3 0 001-5.83z"/><circle cx="10" cy="12" r="1.5" fill="var(--bg)"/></svg>',
  // DeepSeek - Deep/layered search
  logoDeepseek: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="9" r="5"/><path d="M13 13l4 4"/><path d="M9 6v6M6 9h6" stroke-width="1.2"/></svg>',
  // Llama - Stylized llama head
  logoLlama: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><ellipse cx="10" cy="12" rx="5" ry="6"/><ellipse cx="6" cy="5" rx="1.5" ry="3"/><ellipse cx="14" cy="5" rx="1.5" ry="3"/><circle cx="8" cy="11" r="1" fill="var(--bg)"/><circle cx="12" cy="11" r="1" fill="var(--bg)"/></svg>',
  // Qwen - Abstract Q
  logoQwen: '<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="9" r="6"/><circle cx="10" cy="9" r="3" fill="var(--bg)"/><path d="M13 12l4 5h-3l-2-3"/></svg>',
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
    selectModel: "모델 선택",
    searchModels: "모델 검색...",
    allProviders: "전체",
    flagship: "플래그십",
    fast: "고속",
    efficient: "효율",
    context: "컨텍스트",
    tokens: "토큰",
    presets: "프리셋",
    loadPreset: "프리셋 불러오기",
    presetLoaded: "프리셋이 적용되었습니다",
    customModel: "커스텀 모델",
    enterModelId: "모델 ID 입력",
    recommended: "추천",
    legacy: "레거시",
    router: "라우터",
    // Share/Import
    shareConfig: "공유",
    importShared: "가져오기",
    shareCode: "공유 코드",
    shareCopied: "공유 코드가 복사되었습니다",
    importCode: "코드 입력...",
    importSuccess: "설정을 가져왔습니다",
    importFailed: "잘못된 공유 코드입니다",
    // Sampling parameters
    samplingParams: "샘플링 파라미터",
    maxContext: "최대 컨텍스트",
    maxOutput: "최대 응답 토큰",
    temperature: "온도",
    topK: "Top K",
    topP: "Top P",
    minP: "Min P",
    topA: "Top A",
    frequencyPenalty: "빈도 패널티",
    presencePenalty: "프리센스 패널티",
    repetitionPenalty: "반복 패널티",
    hintTemp: "0.0 ~ 2.0 (창의성)",
    hintPenalty: "0.0 ~ 2.0",
    hintTopK: "0 = 비활성화",
    hintMinP: "0.0 ~ 1.0",
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
    selectModel: "Select Model",
    searchModels: "Search models...",
    allProviders: "All",
    flagship: "Flagship",
    fast: "Fast",
    efficient: "Efficient",
    context: "Context",
    tokens: "tokens",
    presets: "Presets",
    loadPreset: "Load Preset",
    presetLoaded: "Preset loaded",
    customModel: "Custom Model",
    enterModelId: "Enter model ID",
    recommended: "Recommended",
    legacy: "Legacy",
    router: "Router",
    // Share/Import
    shareConfig: "Share",
    importShared: "Import",
    shareCode: "Share Code",
    shareCopied: "Share code copied",
    importCode: "Enter code...",
    importSuccess: "Config imported",
    importFailed: "Invalid share code",
    // Sampling parameters
    samplingParams: "Sampling Parameters",
    maxContext: "Max Context",
    maxOutput: "Max Output Tokens",
    temperature: "Temperature",
    topK: "Top K",
    topP: "Top P",
    minP: "Min P",
    topA: "Top A",
    frequencyPenalty: "Frequency Penalty",
    presencePenalty: "Presence Penalty",
    repetitionPenalty: "Repetition Penalty",
    hintTemp: "0.0 - 2.0 (creativity)",
    hintPenalty: "0.0 - 2.0",
    hintTopK: "0 = disabled",
    hintMinP: "0.0 - 1.0",
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
    selectModel: "モデル選択",
    searchModels: "モデル検索...",
    allProviders: "全て",
    flagship: "フラッグシップ",
    fast: "高速",
    efficient: "効率的",
    context: "コンテキスト",
    tokens: "トークン",
    presets: "プリセット",
    loadPreset: "プリセット読込",
    presetLoaded: "プリセットを適用しました",
    customModel: "カスタムモデル",
    enterModelId: "モデルIDを入力",
    recommended: "推奨",
    legacy: "レガシー",
    router: "ルーター",
    // Share/Import
    shareConfig: "共有",
    importShared: "インポート",
    shareCode: "共有コード",
    shareCopied: "共有コードをコピーしました",
    importCode: "コードを入力...",
    importSuccess: "設定をインポートしました",
    importFailed: "無効な共有コードです",
    // Sampling parameters
    samplingParams: "サンプリングパラメータ",
    maxContext: "最大コンテキスト",
    maxOutput: "最大出力トークン",
    temperature: "温度",
    topK: "Top K",
    topP: "Top P",
    minP: "Min P",
    topA: "Top A",
    frequencyPenalty: "頻度ペナルティ",
    presencePenalty: "プレゼンスペナルティ",
    repetitionPenalty: "繰り返しペナルティ",
    hintTemp: "0.0 ~ 2.0 (創造性)",
    hintPenalty: "0.0 ~ 2.0",
    hintTopK: "0 = 無効",
    hintMinP: "0.0 ~ 1.0",
  },
};

// ============================================================================
// MODEL CATALOG - Comprehensive provider/model database (Updated April 2026)
// ============================================================================
const MODEL_CATALOG = {
  anthropic: {
    name: "Anthropic",
    color: "#d4a27a",
    baseUrl: "https://api.anthropic.com",
    models: [
      { id: "claude-opus-4-6", name: "Claude Opus 4.6", tier: "flagship", context: 1000000, output: 300000, cot: true, recommended: true },
      { id: "claude-opus-4-5", name: "Claude Opus 4.5", tier: "flagship", context: 200000, output: 128000, cot: true },
      { id: "claude-sonnet-4-6", name: "Claude Sonnet 4.6", tier: "fast", context: 200000, output: 64000, cot: true, recommended: true },
      { id: "claude-sonnet-4-5", name: "Claude Sonnet 4.5", tier: "fast", context: 200000, output: 64000, cot: true },
      { id: "claude-sonnet-4", name: "Claude Sonnet 4", tier: "fast", context: 200000, output: 64000, cot: true },
      { id: "claude-haiku-4-5", name: "Claude Haiku 4.5", tier: "efficient", context: 200000, output: 8192, cot: false, recommended: true },
      { id: "claude-opus-4-1", name: "Claude Opus 4.1", tier: "legacy", context: 200000, output: 32000, cot: true },
      { id: "claude-opus-4", name: "Claude Opus 4", tier: "legacy", context: 200000, output: 16000, cot: false },
    ],
  },
  openai: {
    name: "OpenAI",
    color: "#74aa9c",
    baseUrl: "https://api.openai.com",
    models: [
      { id: "gpt-5.4", name: "GPT-5.4", tier: "flagship", context: 1000000, output: 128000, cot: true, recommended: true },
      { id: "gpt-5.4-pro", name: "GPT-5.4 Pro", tier: "flagship", context: 1000000, output: 128000, cot: true },
      { id: "gpt-5.4-mini", name: "GPT-5.4 Mini", tier: "fast", context: 128000, output: 32000, cot: true, recommended: true },
      { id: "gpt-5.4-nano", name: "GPT-5.4 Nano", tier: "efficient", context: 128000, output: 16000, cot: false },
      { id: "gpt-5.3-chat", name: "GPT-5.3 Chat", tier: "fast", context: 128000, output: 32000, cot: true },
      { id: "gpt-5.2", name: "GPT-5.2", tier: "fast", context: 128000, output: 32000, cot: true },
      { id: "gpt-5.2-pro", name: "GPT-5.2 Pro", tier: "flagship", context: 128000, output: 64000, cot: true },
      { id: "gpt-5.1", name: "GPT-5.1", tier: "fast", context: 128000, output: 32000, cot: true },
      { id: "gpt-5.1-pro", name: "GPT-5.1 Pro", tier: "flagship", context: 128000, output: 64000, cot: true },
      { id: "gpt-5", name: "GPT-5", tier: "fast", context: 128000, output: 16000, cot: false },
      { id: "gpt-5-pro", name: "GPT-5 Pro", tier: "flagship", context: 128000, output: 32000, cot: true },
      { id: "gpt-5-mini", name: "GPT-5 Mini", tier: "efficient", context: 128000, output: 8000, cot: false },
      { id: "gpt-4.1", name: "GPT-4.1", tier: "legacy", context: 128000, output: 16000, cot: false },
      { id: "gpt-4.1-mini", name: "GPT-4.1 Mini", tier: "legacy", context: 128000, output: 8000, cot: false },
      { id: "gpt-4.1-nano", name: "GPT-4.1 Nano", tier: "legacy", context: 128000, output: 4000, cot: false },
    ],
  },
  gemini: {
    name: "Google Gemini",
    color: "#8b9dc3",
    baseUrl: "https://generativelanguage.googleapis.com",
    models: [
      { id: "gemini-3.1-pro", name: "Gemini 3.1 Pro", tier: "flagship", context: 2000000, output: 65536, cot: true, recommended: true },
      { id: "gemini-3.1-flash-lite", name: "Gemini 3.1 Flash Lite", tier: "efficient", context: 1000000, output: 32768, cot: true, recommended: true },
      { id: "gemini-3-flash", name: "Gemini 3 Flash", tier: "fast", context: 1000000, output: 65536, cot: true, recommended: true },
      { id: "gemini-2.5-pro", name: "Gemini 2.5 Pro", tier: "flagship", context: 1000000, output: 65536, cot: true },
      { id: "gemini-2.5-flash", name: "Gemini 2.5 Flash", tier: "fast", context: 1000000, output: 65536, cot: true },
      { id: "gemma-4-31b-it", name: "Gemma 4 31B", tier: "fast", context: 256000, output: 8192, cot: true },
      { id: "gemma-4-26b-a4b-it", name: "Gemma 4 26B-A4B", tier: "efficient", context: 256000, output: 8192, cot: true },
    ],
  },
  xai: {
    name: "xAI",
    color: "#1a1a1a",
    baseUrl: "https://api.x.ai",
    models: [
      { id: "grok-4.20", name: "Grok 4.20", tier: "flagship", context: 2000000, output: 128000, cot: true, recommended: true },
      { id: "grok-4.20-multi-agent", name: "Grok 4.20 Multi Agent", tier: "flagship", context: 2000000, output: 128000, cot: true },
      { id: "grok-4.1", name: "Grok 4.1", tier: "fast", context: 128000, output: 32000, cot: true, recommended: true },
      { id: "grok-4.1-fast", name: "Grok 4.1 Fast", tier: "efficient", context: 128000, output: 16000, cot: false },
      { id: "grok-4", name: "Grok 4", tier: "fast", context: 128000, output: 32000, cot: true },
      { id: "grok-4-fast", name: "Grok 4 Fast", tier: "efficient", context: 128000, output: 16000, cot: false },
    ],
  },
  deepseek: {
    name: "DeepSeek",
    color: "#0066ff",
    baseUrl: "https://api.deepseek.com",
    models: [
      { id: "deepseek-v3.2-speciale", name: "DeepSeek V3.2 Speciale", tier: "flagship", context: 164000, output: 32000, cot: true, recommended: true },
      { id: "deepseek-v3.2", name: "DeepSeek V3.2", tier: "flagship", context: 164000, output: 32000, cot: true, recommended: true },
      { id: "deepseek-v3.1", name: "DeepSeek V3.1", tier: "fast", context: 128000, output: 16000, cot: true },
      { id: "deepseek-v3", name: "DeepSeek V3", tier: "fast", context: 66000, output: 8000, cot: false },
      { id: "deepseek-r1-0528", name: "DeepSeek R1-0528", tier: "flagship", context: 128000, output: 32000, cot: true, recommended: true },
      { id: "deepseek-r1", name: "DeepSeek R1", tier: "flagship", context: 64000, output: 16000, cot: true },
    ],
  },
  moonshot: {
    name: "MoonshotAI",
    color: "#6366f1",
    baseUrl: "https://api.moonshot.ai",
    models: [
      { id: "kimi-k2.5", name: "KIMI K2.5", tier: "flagship", context: 256000, output: 32000, cot: true, recommended: true },
      { id: "kimi-k2.5-thinking", name: "KIMI K2.5 Thinking", tier: "flagship", context: 256000, output: 32000, cot: true },
      { id: "kimi-k2", name: "KIMI K2", tier: "fast", context: 128000, output: 16000, cot: true },
      { id: "kimi-k2-thinking", name: "KIMI K2 Thinking", tier: "fast", context: 128000, output: 16000, cot: true },
    ],
  },
  minimax: {
    name: "MiniMax",
    color: "#ff6b35",
    baseUrl: "https://api.minimax.io",
    models: [
      { id: "minimax-m2.7", name: "MiniMax M2.7", tier: "flagship", context: 205000, output: 32000, cot: true, recommended: true },
      { id: "minimax-m2.5", name: "MiniMax M2.5", tier: "fast", context: 200000, output: 16000, cot: true, recommended: true },
      { id: "minimax-m2.1", name: "MiniMax M2.1", tier: "fast", context: 200000, output: 16000, cot: true },
    ],
  },
  zhipu: {
    name: "ZhipuAI",
    color: "#1e40af",
    baseUrl: "https://open.bigmodel.cn/api/paas",
    models: [
      { id: "glm-5.1", name: "GLM-5.1", tier: "flagship", context: 200000, output: 131072, cot: true, recommended: true },
      { id: "glm-5", name: "GLM-5", tier: "flagship", context: 200000, output: 131072, cot: true },
      { id: "glm-5v-turbo", name: "GLM-5V Turbo", tier: "fast", context: 128000, output: 16000, cot: false },
      { id: "glm-4.7", name: "GLM-4.7", tier: "fast", context: 128000, output: 16000, cot: true, recommended: true },
      { id: "glm-4.7-flash", name: "GLM-4.7 Flash", tier: "efficient", context: 128000, output: 8000, cot: false },
      { id: "glm-4.6", name: "GLM-4.6", tier: "fast", context: 128000, output: 8000, cot: false },
    ],
  },
  fireworks: {
    name: "Fireworks",
    color: "#e07850",
    baseUrl: "https://api.fireworks.ai/inference",
    models: [
      { id: "accounts/fireworks/routers/kimi-k2p5-turbo", name: "KIMI K2.5 Turbo", tier: "router", context: 128000, output: 16000, cot: true, recommended: true },
      { id: "accounts/fireworks/routers/deepseek-r1", name: "DeepSeek R1", tier: "router", context: 64000, output: 16000, cot: true, recommended: true },
      { id: "accounts/fireworks/routers/deepseek-v3", name: "DeepSeek V3", tier: "router", context: 64000, output: 8000, cot: false },
      { id: "accounts/fireworks/routers/glm-5-fast", name: "GLM-5 Fast", tier: "router", context: 128000, output: 16000, cot: true },
      { id: "accounts/fireworks/models/llama-v3p1-405b-instruct", name: "Llama 3.1 405B", tier: "flagship", context: 128000, output: 16000, cot: false },
      { id: "accounts/fireworks/models/qwen3-coder-480b", name: "Qwen3 Coder 480B", tier: "flagship", context: 262000, output: 32000, cot: false },
    ],
  },
  openrouter: {
    name: "OpenRouter",
    color: "#6366f1",
    baseUrl: "https://openrouter.ai/api",
    models: [
      { id: "anthropic/claude-opus-4.6", name: "Claude Opus 4.6", tier: "flagship", context: 1000000, output: 128000, cot: true, recommended: true },
      { id: "anthropic/claude-sonnet-4.6", name: "Claude Sonnet 4.6", tier: "fast", context: 200000, output: 64000, cot: true, recommended: true },
      { id: "openai/gpt-5.4", name: "GPT-5.4", tier: "flagship", context: 1000000, output: 128000, cot: true },
      { id: "google/gemini-3.1-pro", name: "Gemini 3.1 Pro", tier: "flagship", context: 2000000, output: 65536, cot: true },
      { id: "x-ai/grok-4.20", name: "Grok 4.20", tier: "flagship", context: 2000000, output: 128000, cot: true },
      { id: "deepseek/deepseek-v3.2", name: "DeepSeek V3.2", tier: "fast", context: 164000, output: 32000, cot: true },
      { id: "deepseek/deepseek-r1", name: "DeepSeek R1", tier: "flagship", context: 64000, output: 16000, cot: true },
      { id: "google/gemma-4-31b-it", name: "Gemma 4 31B", tier: "fast", context: 256000, output: 8192, cot: true },
      { id: "qwen/qwen3-coder-480b", name: "Qwen3 Coder 480B", tier: "flagship", context: 262000, output: 32000, cot: false, recommended: true },
      { id: "openrouter/free", name: "Free Router", tier: "efficient", context: 128000, output: 8000, cot: false },
    ],
  },
  vercel: {
    name: "Vercel AI",
    color: "#000000",
    baseUrl: "https://api.vercel.ai",
    models: [
      { id: "anthropic/claude-opus-4.6", name: "Claude Opus 4.6", tier: "flagship", context: 1000000, output: 128000, cot: true, recommended: true },
      { id: "anthropic/claude-sonnet-4.6", name: "Claude Sonnet 4.6", tier: "fast", context: 200000, output: 64000, cot: true },
      { id: "openai/gpt-5.4", name: "GPT-5.4", tier: "flagship", context: 1000000, output: 128000, cot: true },
      { id: "google/gemini-3.1-pro", name: "Gemini 3.1 Pro", tier: "flagship", context: 2000000, output: 65536, cot: true },
      { id: "xai/grok-4.20", name: "Grok 4.20", tier: "flagship", context: 2000000, output: 128000, cot: true, recommended: true },
      { id: "xai/grok-4.1", name: "Grok 4.1", tier: "fast", context: 128000, output: 32000, cot: true },
      { id: "deepseek/deepseek-r1", name: "DeepSeek R1", tier: "flagship", context: 64000, output: 16000, cot: true },
    ],
  },
  vertex: {
    name: "Vertex AI",
    color: "#4285f4",
    baseUrl: "https://us-central1-aiplatform.googleapis.com",
    models: [
      { id: "gemini-3.1-pro", name: "Gemini 3.1 Pro", tier: "flagship", context: 2000000, output: 65536, cot: true, recommended: true },
      { id: "gemini-3-flash", name: "Gemini 3 Flash", tier: "fast", context: 1000000, output: 65536, cot: true, recommended: true },
      { id: "gemini-2.5-pro", name: "Gemini 2.5 Pro", tier: "flagship", context: 1000000, output: 65536, cot: true },
      { id: "gemini-2.5-flash", name: "Gemini 2.5 Flash", tier: "fast", context: 1000000, output: 65536, cot: true },
      { id: "claude-sonnet-4-6@latest", name: "Claude Sonnet 4.6", tier: "fast", context: 200000, output: 64000, cot: true },
      { id: "claude-opus-4-5@latest", name: "Claude Opus 4.5", tier: "flagship", context: 200000, output: 128000, cot: true },
    ],
  },
};

// Format to provider mapping for smart defaults
const FORMAT_PROVIDER_MAP = {
  anthropic: "anthropic",
  openai: "openai",
  gemini: "gemini",
};

const FORMAT_OPTIONS = ["anthropic", "openai", "gemini"];

// ============================================================================
// PRESETS - One-click configurations with detailed metadata
// ============================================================================
const PRESET_CATEGORIES = {
  anthropic: { name: "Claude", color: "#d4a27a" },
  openai: { name: "GPT", color: "#74aa9c" },
  gemini: { name: "Gemini", color: "#8b9dc3" },
  xai: { name: "Grok", color: "#1a1a1a" },
  deepseek: { name: "DeepSeek", color: "#0066ff" },
  moonshot: { name: "KIMI", color: "#6366f1" },
  minimax: { name: "MiniMax", color: "#ff6b35" },
  zhipu: { name: "GLM", color: "#1e40af" },
  fireworks: { name: "Fireworks", color: "#e07850" },
  openrouter: { name: "OpenRouter", color: "#6366f1" },
  vercel: { name: "Vercel", color: "var(--text)" },
  vertex: { name: "Vertex", color: "#4285f4" },
};

const PRESETS = [
  // === ANTHROPIC (Direct) ===
  {
    id: "claude-opus-46",
    category: "anthropic",
    name: { ko: "Claude Opus 4.6", en: "Claude Opus 4.6", ja: "Claude Opus 4.6" },
    desc: { ko: "최고 성능 + 1M 컨텍스트 + CoT", en: "Best performance + 1M context + CoT", ja: "最高性能 + 1Mコンテキスト + CoT" },
    model: "claude-opus-4-6",
    cot: true,
    context: "1M",
    config: {
      provider_name: "Claude Opus 4.6",
      model: "claude-opus-4-6",
      api_format: "anthropic",
      base_url: "https://api.anthropic.com",
      enable_thinking: "true",
      thinking_budget: "32000",
      show_thinking_output: "true",
      thinking_style: "default",
    },
  },
  {
    id: "claude-sonnet-46",
    category: "anthropic",
    name: { ko: "Claude Sonnet 4.6", en: "Claude Sonnet 4.6", ja: "Claude Sonnet 4.6" },
    desc: { ko: "균형 잡힌 성능 + CoT", en: "Balanced performance + CoT", ja: "バランスの取れた性能 + CoT" },
    model: "claude-sonnet-4-6",
    cot: true,
    context: "200K",
    config: {
      provider_name: "Claude Sonnet 4.6",
      model: "claude-sonnet-4-6",
      api_format: "anthropic",
      base_url: "https://api.anthropic.com",
      enable_thinking: "true",
      thinking_budget: "16384",
      show_thinking_output: "true",
      thinking_style: "default",
    },
  },
  {
    id: "claude-haiku-45",
    category: "anthropic",
    name: { ko: "Claude Haiku 4.5", en: "Claude Haiku 4.5", ja: "Claude Haiku 4.5" },
    desc: { ko: "최저 비용, 초고속", en: "Lowest cost, ultra-fast", ja: "最低コスト、超高速" },
    model: "claude-haiku-4-5",
    cot: false,
    context: "200K",
    config: {
      provider_name: "Claude Haiku 4.5",
      model: "claude-haiku-4-5",
      api_format: "anthropic",
      base_url: "https://api.anthropic.com",
      enable_thinking: "false",
      show_thinking_output: "false",
    },
  },

  // === OPENAI (Direct) ===
  {
    id: "gpt-54",
    category: "openai",
    name: { ko: "GPT-5.4", en: "GPT-5.4", ja: "GPT-5.4" },
    desc: { ko: "최신 플래그십, 1M 컨텍스트", en: "Latest flagship, 1M context", ja: "最新フラッグシップ、1Mコンテキスト" },
    model: "gpt-5.4",
    cot: true,
    context: "1M",
    config: {
      provider_name: "GPT-5.4",
      model: "gpt-5.4",
      api_format: "openai",
      base_url: "https://api.openai.com",
      enable_thinking: "true",
      thinking_budget: "32000",
      show_thinking_output: "true",
      thinking_style: "default",
    },
  },
  {
    id: "gpt-54-mini",
    category: "openai",
    name: { ko: "GPT-5.4 Mini", en: "GPT-5.4 Mini", ja: "GPT-5.4 Mini" },
    desc: { ko: "고속 + 저비용", en: "Fast + low cost", ja: "高速 + 低コスト" },
    model: "gpt-5.4-mini",
    cot: true,
    context: "128K",
    config: {
      provider_name: "GPT-5.4 Mini",
      model: "gpt-5.4-mini",
      api_format: "openai",
      base_url: "https://api.openai.com",
      enable_thinking: "true",
      thinking_budget: "8192",
      show_thinking_output: "true",
      thinking_style: "minimal",
    },
  },

  // === GEMINI (Direct) ===
  {
    id: "gemini-31-pro",
    category: "gemini",
    name: { ko: "Gemini 3.1 Pro", en: "Gemini 3.1 Pro", ja: "Gemini 3.1 Pro" },
    desc: { ko: "최대 2M 컨텍스트 + CoT", en: "Up to 2M context + CoT", ja: "最大2Mコンテキスト + CoT" },
    model: "gemini-3.1-pro",
    cot: true,
    context: "2M",
    config: {
      provider_name: "Gemini 3.1 Pro",
      model: "gemini-3.1-pro",
      api_format: "gemini",
      base_url: "https://generativelanguage.googleapis.com",
      enable_thinking: "true",
      thinking_budget: "16384",
      show_thinking_output: "true",
      thinking_style: "default",
    },
  },
  {
    id: "gemini-3-flash",
    category: "gemini",
    name: { ko: "Gemini 3 Flash", en: "Gemini 3 Flash", ja: "Gemini 3 Flash" },
    desc: { ko: "Pro급 추론 + Flash 속도", en: "Pro-grade reasoning + Flash speed", ja: "Pro級推論 + Flash速度" },
    model: "gemini-3-flash",
    cot: true,
    context: "1M",
    config: {
      provider_name: "Gemini 3 Flash",
      model: "gemini-3-flash",
      api_format: "gemini",
      base_url: "https://generativelanguage.googleapis.com",
      enable_thinking: "true",
      thinking_budget: "8192",
      show_thinking_output: "true",
      thinking_style: "minimal",
    },
  },
  {
    id: "gemini-31-flash-lite",
    category: "gemini",
    name: { ko: "Gemini 3.1 Flash Lite", en: "Gemini 3.1 Flash Lite", ja: "Gemini 3.1 Flash Lite" },
    desc: { ko: "최저가 + 최고속", en: "Lowest cost + fastest", ja: "最低価格 + 最高速" },
    model: "gemini-3.1-flash-lite",
    cot: true,
    context: "1M",
    config: {
      provider_name: "Gemini 3.1 Flash Lite",
      model: "gemini-3.1-flash-lite",
      api_format: "gemini",
      base_url: "https://generativelanguage.googleapis.com",
      enable_thinking: "true",
      thinking_budget: "8192",
      show_thinking_output: "true",
      thinking_style: "minimal",
    },
  },

  // === XAI GROK (Direct) ===
  {
    id: "grok-420",
    category: "xai",
    name: { ko: "Grok 4.20", en: "Grok 4.20", ja: "Grok 4.20" },
    desc: { ko: "2M 컨텍스트 + 에이전트 툴콜", en: "2M context + agent tool calls", ja: "2Mコンテキスト + エージェントツールコール" },
    model: "grok-4.20",
    cot: true,
    context: "2M",
    config: {
      provider_name: "Grok 4.20",
      model: "grok-4.20",
      api_format: "openai",
      base_url: "https://api.x.ai",
      enable_thinking: "true",
      thinking_budget: "32000",
      show_thinking_output: "true",
      thinking_style: "default",
    },
  },
  {
    id: "grok-41",
    category: "xai",
    name: { ko: "Grok 4.1", en: "Grok 4.1", ja: "Grok 4.1" },
    desc: { ko: "창의적 + 협력적 상호작용", en: "Creative + collaborative interactions", ja: "クリエイティブ + 協力的インタラクション" },
    model: "grok-4.1",
    cot: true,
    context: "128K",
    config: {
      provider_name: "Grok 4.1",
      model: "grok-4.1",
      api_format: "openai",
      base_url: "https://api.x.ai",
      enable_thinking: "true",
      thinking_budget: "16384",
      show_thinking_output: "true",
      thinking_style: "default",
    },
  },
  {
    id: "grok-41-fast",
    category: "xai",
    name: { ko: "Grok 4.1 Fast", en: "Grok 4.1 Fast", ja: "Grok 4.1 Fast" },
    desc: { ko: "저지연 응답", en: "Low-latency responses", ja: "低レイテンシ応答" },
    model: "grok-4.1-fast",
    cot: false,
    context: "128K",
    config: {
      provider_name: "Grok 4.1 Fast",
      model: "grok-4.1-fast",
      api_format: "openai",
      base_url: "https://api.x.ai",
      enable_thinking: "false",
      show_thinking_output: "false",
    },
  },

  // === DEEPSEEK (Direct) ===
  {
    id: "deepseek-v32",
    category: "deepseek",
    name: { ko: "DeepSeek V3.2", en: "DeepSeek V3.2", ja: "DeepSeek V3.2" },
    desc: { ko: "164K 컨텍스트 + 통합 추론", en: "164K context + integrated reasoning", ja: "164Kコンテキスト + 統合推論" },
    model: "deepseek-v3.2",
    cot: true,
    context: "164K",
    config: {
      provider_name: "DeepSeek V3.2",
      model: "deepseek-v3.2",
      api_format: "openai",
      base_url: "https://api.deepseek.com",
      enable_thinking: "true",
      thinking_budget: "16384",
      show_thinking_output: "true",
      thinking_style: "default",
    },
  },
  {
    id: "deepseek-r1-0528",
    category: "deepseek",
    name: { ko: "DeepSeek R1-0528", en: "DeepSeek R1-0528", ja: "DeepSeek R1-0528" },
    desc: { ko: "최신 추론 모델", en: "Latest reasoning model", ja: "最新推論モデル" },
    model: "deepseek-r1-0528",
    cot: true,
    context: "128K",
    config: {
      provider_name: "DeepSeek R1",
      model: "deepseek-r1-0528",
      api_format: "openai",
      base_url: "https://api.deepseek.com",
      enable_thinking: "true",
      thinking_display: "true",
      show_thinking_output: "true",
      thinking_style: "raw",
    },
  },

  // === MOONSHOTAI KIMI (Direct) ===
  {
    id: "kimi-k25",
    category: "moonshot",
    name: { ko: "KIMI K2.5", en: "KIMI K2.5", ja: "KIMI K2.5" },
    desc: { ko: "멀티모달 + 에이전트 스웜", en: "Multimodal + agent swarm", ja: "マルチモーダル + エージェントスウォーム" },
    model: "kimi-k2.5",
    cot: true,
    context: "256K",
    config: {
      provider_name: "KIMI K2.5",
      model: "kimi-k2.5",
      api_format: "openai",
      base_url: "https://api.moonshot.ai",
      enable_thinking: "true",
      thinking_budget: "16384",
      show_thinking_output: "true",
      thinking_style: "default",
    },
  },
  {
    id: "kimi-k25-thinking",
    category: "moonshot",
    name: { ko: "KIMI K2.5 Thinking", en: "KIMI K2.5 Thinking", ja: "KIMI K2.5 Thinking" },
    desc: { ko: "강화된 추론 모드", en: "Enhanced reasoning mode", ja: "強化推論モード" },
    model: "kimi-k2.5-thinking",
    cot: true,
    context: "256K",
    config: {
      provider_name: "KIMI K2.5 Thinking",
      model: "kimi-k2.5-thinking",
      api_format: "openai",
      base_url: "https://api.moonshot.ai",
      enable_thinking: "true",
      thinking_budget: "32000",
      show_thinking_output: "true",
      thinking_style: "default",
    },
  },

  // === MINIMAX (Direct) ===
  {
    id: "minimax-m27",
    category: "minimax",
    name: { ko: "MiniMax M2.7", en: "MiniMax M2.7", ja: "MiniMax M2.7" },
    desc: { ko: "자기 진화 에이전트 모델", en: "Self-evolving agentic model", ja: "自己進化エージェントモデル" },
    model: "minimax-m2.7",
    cot: true,
    context: "205K",
    config: {
      provider_name: "MiniMax M2.7",
      model: "minimax-m2.7",
      api_format: "openai",
      base_url: "https://api.minimax.io",
      enable_thinking: "true",
      thinking_budget: "16384",
      show_thinking_output: "true",
      thinking_style: "default",
    },
  },
  {
    id: "minimax-m25",
    category: "minimax",
    name: { ko: "MiniMax M2.5", en: "MiniMax M2.5", ja: "MiniMax M2.5" },
    desc: { ko: "100 tok/s 고속 추론", en: "100 tok/s high-speed inference", ja: "100 tok/s高速推論" },
    model: "minimax-m2.5",
    cot: true,
    context: "200K",
    config: {
      provider_name: "MiniMax M2.5",
      model: "minimax-m2.5",
      api_format: "openai",
      base_url: "https://api.minimax.io",
      enable_thinking: "true",
      thinking_budget: "8192",
      show_thinking_output: "true",
      thinking_style: "minimal",
    },
  },

  // === ZHIPUAI GLM (Direct) ===
  {
    id: "glm-51",
    category: "zhipu",
    name: { ko: "GLM-5.1", en: "GLM-5.1", ja: "GLM-5.1" },
    desc: { ko: "744B 파라미터, 오픈소스", en: "744B params, open-source", ja: "744Bパラメータ、オープンソース" },
    model: "glm-5.1",
    cot: true,
    context: "200K",
    config: {
      provider_name: "GLM-5.1",
      model: "glm-5.1",
      api_format: "openai",
      base_url: "https://open.bigmodel.cn/api/paas",
      enable_thinking: "true",
      thinking_budget: "16384",
      show_thinking_output: "true",
      thinking_style: "default",
    },
  },
  {
    id: "glm-47",
    category: "zhipu",
    name: { ko: "GLM-4.7", en: "GLM-4.7", ja: "GLM-4.7" },
    desc: { ko: "코딩 + 에이전트 특화", en: "Coding + agent specialist", ja: "コーディング + エージェント特化" },
    model: "glm-4.7",
    cot: true,
    context: "128K",
    config: {
      provider_name: "GLM-4.7",
      model: "glm-4.7",
      api_format: "openai",
      base_url: "https://open.bigmodel.cn/api/paas",
      enable_thinking: "true",
      thinking_budget: "8192",
      show_thinking_output: "true",
      thinking_style: "minimal",
    },
  },
  {
    id: "glm-47-flash",
    category: "zhipu",
    name: { ko: "GLM-4.7 Flash", en: "GLM-4.7 Flash", ja: "GLM-4.7 Flash" },
    desc: { ko: "무료, 초고속", en: "Free, ultra-fast", ja: "無料、超高速" },
    model: "glm-4.7-flash",
    cot: false,
    context: "128K",
    config: {
      provider_name: "GLM-4.7 Flash",
      model: "glm-4.7-flash",
      api_format: "openai",
      base_url: "https://open.bigmodel.cn/api/paas",
      enable_thinking: "false",
      show_thinking_output: "false",
    },
  },

  // === FIREWORKS (Routers) ===
  {
    id: "fw-kimi",
    category: "fireworks",
    name: { ko: "KIMI K2.5 Turbo (Fireworks)", en: "KIMI K2.5 Turbo (Fireworks)", ja: "KIMI K2.5 Turbo (Fireworks)" },
    desc: { ko: "고성능 라우터 + CoT", en: "High-perf router + CoT", ja: "高性能ルーター + CoT" },
    model: "accounts/fireworks/routers/kimi-k2p5-turbo",
    cot: true,
    context: "128K",
    config: {
      provider_name: "KIMI K2.5 (FW)",
      model: "accounts/fireworks/routers/kimi-k2p5-turbo",
      api_format: "anthropic",
      base_url: "https://api.fireworks.ai/inference",
      enable_thinking: "true",
      thinking_budget: "16384",
      show_thinking_output: "true",
      thinking_style: "default",
    },
  },
  {
    id: "fw-deepseek-r1",
    category: "fireworks",
    name: { ko: "DeepSeek R1 (Fireworks)", en: "DeepSeek R1 (Fireworks)", ja: "DeepSeek R1 (Fireworks)" },
    desc: { ko: "추론 특화, Raw 사고 출력", en: "Reasoning specialist, raw thoughts", ja: "推論特化、生の思考出力" },
    model: "accounts/fireworks/routers/deepseek-r1",
    cot: true,
    context: "64K",
    config: {
      provider_name: "DeepSeek R1 (FW)",
      model: "accounts/fireworks/routers/deepseek-r1",
      api_format: "openai",
      base_url: "https://api.fireworks.ai/inference",
      enable_thinking: "true",
      thinking_display: "true",
      show_thinking_output: "true",
      thinking_style: "raw",
    },
  },
  {
    id: "fw-llama405b",
    category: "fireworks",
    name: { ko: "Llama 3.1 405B (Fireworks)", en: "Llama 3.1 405B (Fireworks)", ja: "Llama 3.1 405B (Fireworks)" },
    desc: { ko: "최대 오픈소스 모델", en: "Largest open-source model", ja: "最大オープンソースモデル" },
    model: "accounts/fireworks/models/llama-v3p1-405b-instruct",
    cot: false,
    context: "128K",
    config: {
      provider_name: "Llama 405B (FW)",
      model: "accounts/fireworks/models/llama-v3p1-405b-instruct",
      api_format: "openai",
      base_url: "https://api.fireworks.ai/inference",
      enable_thinking: "false",
      show_thinking_output: "false",
    },
  },
  {
    id: "fw-glm5-fast",
    category: "fireworks",
    name: { ko: "GLM-5 Fast (Fireworks)", en: "GLM-5 Fast (Fireworks)", ja: "GLM-5 Fast (Fireworks)" },
    desc: { ko: "고속 GLM 라우터", en: "Fast GLM router", ja: "高速GLMルーター" },
    model: "accounts/fireworks/routers/glm-5-fast",
    cot: true,
    context: "128K",
    config: {
      provider_name: "GLM-5 Fast (FW)",
      model: "accounts/fireworks/routers/glm-5-fast",
      api_format: "openai",
      base_url: "https://api.fireworks.ai/inference",
      enable_thinking: "true",
      thinking_budget: "16384",
      show_thinking_output: "true",
      thinking_style: "default",
    },
  },

  // === OPENROUTER ===
  {
    id: "or-claude",
    category: "openrouter",
    name: { ko: "Claude Opus (OpenRouter)", en: "Claude Opus (OpenRouter)", ja: "Claude Opus (OpenRouter)" },
    desc: { ko: "통합 API로 Claude 접근", en: "Access Claude via unified API", ja: "統合APIでClaude接続" },
    model: "anthropic/claude-opus-4.6",
    cot: true,
    context: "1M",
    config: {
      provider_name: "Claude Opus (OR)",
      model: "anthropic/claude-opus-4.6",
      api_format: "openai",
      base_url: "https://openrouter.ai/api",
      enable_thinking: "true",
      thinking_budget: "32000",
      show_thinking_output: "true",
      thinking_style: "default",
    },
  },
  {
    id: "or-gemma4",
    category: "openrouter",
    name: { ko: "Gemma 4 31B (OpenRouter)", en: "Gemma 4 31B (OpenRouter)", ja: "Gemma 4 31B (OpenRouter)" },
    desc: { ko: "세계 3위 오픈 모델", en: "#3 open model worldwide", ja: "世界3位オープンモデル" },
    model: "google/gemma-4-31b-it",
    cot: true,
    context: "256K",
    config: {
      provider_name: "Gemma 4 31B (OR)",
      model: "google/gemma-4-31b-it",
      api_format: "openai",
      base_url: "https://openrouter.ai/api",
      enable_thinking: "true",
      thinking_budget: "8192",
      show_thinking_output: "true",
      thinking_style: "default",
    },
  },
  {
    id: "or-free",
    category: "openrouter",
    name: { ko: "Free Router (OpenRouter)", en: "Free Router (OpenRouter)", ja: "Free Router (OpenRouter)" },
    desc: { ko: "무료 모델 자동 선택", en: "Auto-select free models", ja: "無料モデル自動選択" },
    model: "openrouter/free",
    cot: false,
    context: "128K",
    config: {
      provider_name: "Free Router",
      model: "openrouter/free",
      api_format: "openai",
      base_url: "https://openrouter.ai/api",
      enable_thinking: "false",
      show_thinking_output: "false",
    },
  },

  // === VERCEL AI ===
  {
    id: "vercel-grok",
    category: "vercel",
    name: { ko: "Grok 4.20 (Vercel)", en: "Grok 4.20 (Vercel)", ja: "Grok 4.20 (Vercel)" },
    desc: { ko: "Vercel로 Grok 접근", en: "Access Grok via Vercel", ja: "VercelでGrokアクセス" },
    model: "xai/grok-4.20",
    cot: true,
    context: "2M",
    config: {
      provider_name: "Grok 4.20 (Vercel)",
      model: "xai/grok-4.20",
      api_format: "openai",
      base_url: "https://api.vercel.ai",
      enable_thinking: "true",
      thinking_budget: "32000",
      show_thinking_output: "true",
      thinking_style: "default",
    },
  },
  {
    id: "vercel-claude",
    category: "vercel",
    name: { ko: "Claude Sonnet (Vercel)", en: "Claude Sonnet (Vercel)", ja: "Claude Sonnet (Vercel)" },
    desc: { ko: "마크업 없이 Claude 사용", en: "Use Claude with no markup", ja: "マークアップなしでClaude" },
    model: "anthropic/claude-sonnet-4.6",
    cot: true,
    context: "200K",
    config: {
      provider_name: "Claude Sonnet (Vercel)",
      model: "anthropic/claude-sonnet-4.6",
      api_format: "anthropic",
      base_url: "https://api.vercel.ai",
      enable_thinking: "true",
      thinking_budget: "16384",
      show_thinking_output: "true",
      thinking_style: "default",
    },
  },

  // === VERTEX AI ===
  {
    id: "vertex-gemini",
    category: "vertex",
    name: { ko: "Gemini 3.1 Pro (Vertex)", en: "Gemini 3.1 Pro (Vertex)", ja: "Gemini 3.1 Pro (Vertex)" },
    desc: { ko: "엔터프라이즈 Gemini", en: "Enterprise Gemini", ja: "エンタープライズGemini" },
    model: "gemini-3.1-pro",
    cot: true,
    context: "2M",
    config: {
      provider_name: "Gemini Pro (Vertex)",
      model: "gemini-3.1-pro",
      api_format: "gemini",
      base_url: "https://us-central1-aiplatform.googleapis.com",
      enable_thinking: "true",
      thinking_budget: "16384",
      show_thinking_output: "true",
      thinking_style: "default",
    },
  },
  {
    id: "vertex-claude",
    category: "vertex",
    name: { ko: "Claude Sonnet (Vertex)", en: "Claude Sonnet (Vertex)", ja: "Claude Sonnet (Vertex)" },
    desc: { ko: "GCP에서 Claude 사용", en: "Claude on GCP", ja: "GCPでClaude使用" },
    model: "claude-sonnet-4-6@latest",
    cot: true,
    context: "200K",
    config: {
      provider_name: "Claude Sonnet (Vertex)",
      model: "claude-sonnet-4-6@latest",
      api_format: "anthropic",
      base_url: "https://us-central1-aiplatform.googleapis.com",
      enable_thinking: "true",
      thinking_budget: "16384",
      show_thinking_output: "true",
      thinking_style: "default",
    },
  },
];

let currentLang = "ko",
  providerCount = 0,
  draggedElement = null,
  activeModelPicker = null;
const selectedCards = new Set();

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem("hanabi-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme || (prefersDark ? "dark" : "light");
  setTheme(theme);
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("hanabi-theme", theme);
}

function toggleTheme() {
  const currentTheme =
    document.documentElement.getAttribute("data-theme") || "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
  showToast(newTheme === "light" ? "Light mode" : "Dark mode", "info");
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem("hanabi-theme")) {
      setTheme(e.matches ? "dark" : "light");
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

function tPreset(preset, field) {
  const obj = preset[field];
  if (!obj) return "";
  return obj[currentLang] || obj.en || "";
}

let _syncing = false;
const syncLive = debounce(() => {
  if (!_syncing) syncJSON();
}, 150);

// ============================================================================
// PRESETS DROPDOWN - Grid-based tool selector
// ============================================================================
let presetFilter = "all";
let presetSearch = "";

function renderPresetDropdown() {
  const dropdown = document.getElementById("preset-dropdown");
  if (!dropdown) return;

  const categories = ["all", "anthropic", "openai", "gemini", "xai", "deepseek", "moonshot", "minimax", "zhipu", "fireworks", "openrouter", "vercel", "vertex"];

  // Build tabs
  let tabsHtml = categories.map(catKey => {
    const isAll = catKey === "all";
    const cat = isAll ? { name: t("allProviders") } : PRESET_CATEGORIES[catKey];
    if (!cat) return "";
    const isActive = presetFilter === catKey;
    return `<button type="button" class="preset-tab ${isActive ? 'active' : ''}" data-cat="${catKey}" onclick="filterPresets('${catKey}')" aria-pressed="${isActive}" style="--tab-color: var(--provider-${catKey}, var(--accent))"><span>${escapeHtml(cat.name)}</span></button>`;
  }).join("");

  // Filter presets
  let filtered = PRESETS;
  if (presetFilter !== "all") {
    filtered = filtered.filter(p => p.category === presetFilter);
  }
  if (presetSearch) {
    const q = presetSearch.toLowerCase();
    filtered = filtered.filter(p =>
      tPreset(p, 'name').toLowerCase().includes(q) ||
      tPreset(p, 'desc').toLowerCase().includes(q) ||
      p.model.toLowerCase().includes(q)
    );
  }

  // Build grid
  let gridHtml = filtered.map((preset, index) => {
    const cat = PRESET_CATEGORIES[preset.category] || {};
    const modelDisplay = preset.model.length > 30 ? preset.model.slice(0, 30) + '...' : preset.model;
    return `
      <button type="button" class="preset-card" data-preset-id="${preset.id}" onclick="applyPreset('${preset.id}')" style="--i: ${index}">
        <span class="preset-card-title">${escapeHtml(tPreset(preset, 'name'))}</span>
        <span class="preset-card-model">${escapeHtml(modelDisplay)}</span>
        <div class="preset-card-meta">
          <span class="preset-card-provider" data-provider="${preset.category}">${escapeHtml(cat.name)}</span>
          <span class="preset-card-ctx">${escapeHtml(preset.context)}</span>
          ${preset.cot ? '<span class="preset-card-cot">CoT</span>' : ''}
          <span class="preset-card-format">${escapeHtml(preset.config.api_format)}</span>
        </div>
      </button>
    `;
  }).join("");

  if (filtered.length === 0) {
    gridHtml = `<div class="preset-empty">${escapeHtml(t("searchModels"))}</div>`;
  }

  dropdown.innerHTML = `
    <div class="modal-header">
      <span class="modal-title">${escapeHtml(t("presets"))}</span>
      <button type="button" class="modal-close" onclick="closePresetDropdown()" aria-label="Close">${IC.x}</button>
    </div>
    <div class="preset-header">
      <div class="preset-search">
        ${IC.search}
        <input type="text" placeholder="${escapeHtml(t("searchModels"))}" value="${escapeHtml(presetSearch)}" oninput="searchPresets(this.value)" aria-label="${escapeHtml(t("searchModels"))}">
      </div>
      <div class="preset-tabs" role="tablist">${tabsHtml}</div>
    </div>
    <div class="preset-grid">${gridHtml}</div>
  `;
}

window.togglePresetDropdown = function() {
  const dropdown = document.getElementById("preset-dropdown");
  const btn = document.getElementById("btn-preset");
  if (!dropdown) return;

  const isOpen = dropdown.classList.toggle("open");
  if (btn) btn.classList.toggle("open", isOpen);
  if (isOpen) renderPresetDropdown();
};

window.closePresetDropdown = function() {
  const dropdown = document.getElementById("preset-dropdown");
  const btn = document.getElementById("btn-preset");
  if (dropdown) dropdown.classList.remove("open");
  if (btn) btn.classList.remove("open");
};

window.applyPreset = function(presetId) {
  const preset = PRESETS.find(p => p.id === presetId);
  if (!preset) return;
  window.closePresetDropdown();
  addProvider(preset.config);
  showToast(t("presetLoaded"), "success");
};

window.filterPresets = function(cat) {
  presetFilter = cat;
  renderPresetDropdown();
};

window.searchPresets = function(q) {
  presetSearch = q;
  renderPresetDropdown();
};

// ============================================================================
// INITIALIZATION
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  setupLanguageSelector();
  setupKeyboardShortcuts();
  applyButtonLabels();
  populateBulkModelSelect();
  populateBulkFormatSelect();

  // Load saved providers from localStorage, or add empty one
  const savedConfigs = loadFromLocalStorage();
  if (savedConfigs && savedConfigs.length > 0) {
    savedConfigs.forEach(cfg => addProvider(cfg));
  } else {
    addProvider();
  }
  document
    .getElementById("providers-container")
    .addEventListener("input", syncLive);
  document
    .getElementById("providers-container")
    .addEventListener("change", syncLive);
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

  // Close dropdowns on outside click
  document.addEventListener("click", (e) => {
    // Close model picker only if clicking outside the entire wrap
    if (activeModelPicker) {
      const isInsideWrap = e.target.closest(".model-picker-wrap");
      const isInsideDropdown = e.target.closest(".model-picker-dropdown");
      if (!isInsideWrap && !isInsideDropdown) {
        closeModelPicker();
      }
    }
    if (!e.target.closest(".preset-dropdown-wrap")) {
      window.closePresetDropdown();
    }
  });

  // Close on escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (activeModelPicker) closeModelPicker();
      window.closePresetDropdown();
    }
  });
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
  full("btn-preset", IC.template, t("presets"));
  icon("btn-clear", IC.trash);
  icon("btn-import", IC.paste);
  icon("btn-import-share", IC.code);
  icon("btn-share", IC.share);
  icon("btn-copy", IC.copy);
  icon("btn-download", IC.download);
  icon("btn-dup-selected", IC.duplicate);
  icon("btn-del-selected", IC.trash);
  icon("btn-toggle-thinking", IC.thinking);
  renderPresetDropdown();
  updateProviderCountLabel();
}

function populateBulkModelSelect() {
  const sel = document.getElementById("bulk-model");
  if (!sel) return;

  // Build grouped options
  let html = '<option value="" disabled selected>' + escapeHtml(t("setModel")) + "</option>";

  Object.entries(MODEL_CATALOG).forEach(([provKey, prov]) => {
    html += '<optgroup label="' + escapeHtml(prov.name) + '">';
    prov.models.filter(m => !m.deprecated && m.recommended).forEach(m => {
      const displayName = m.name.split("/").pop();
      html += '<option value="' + escapeHtml(m.id) + '">' + escapeHtml(displayName) + '</option>';
    });
    html += '</optgroup>';
  });

  sel.innerHTML = html;
}

function populateBulkFormatSelect() {
  const sel = document.getElementById("bulk-format");
  if (!sel) return;
  sel.innerHTML =
    '<option value="" disabled selected>' +
    escapeHtml(t("setFormat")) +
    "</option>" +
    FORMAT_OPTIONS.map(
      (f) =>
        '<option value="' + escapeHtml(f) + '">' + escapeHtml(f) + "</option>",
    ).join("");
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
    if (
      (e.ctrlKey || e.metaKey) &&
      e.key === "a" &&
      e.target === document.body
    ) {
      e.preventDefault();
      selectAll();
    }
  });
}

// ============================================================================
// SELECTION & BULK OPERATIONS
// ============================================================================
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
  const bar = document.getElementById("selection-bar"),
    count = document.getElementById("selection-count");
  if (!bar || !count) return;
  bar.classList.toggle("visible", selectedCards.size > 0);
  count.textContent = selectedCards.size + t("nSelected");
}

function getProviderData(card) {
  const data = {};
  card.querySelectorAll("[data-field]").forEach((f) => {
    if (f.type === "checkbox")
      data[f.dataset.field] = f.checked ? "true" : "false";
    else if (f.hasAttribute("contenteditable"))
      data[f.dataset.field] = f.textContent.trim();
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
  if (document.querySelectorAll(".provider-card").length === 0)
    showEmptyState();
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
      const inp = card.querySelector('[data-field="model"]');
      if (inp) {
        inp.value = value;
        updateModelDisplay(card, value);
      }
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

// ============================================================================
// PROVIDER CARD MANAGEMENT
// ============================================================================
function showEmptyState() {
  const c = document.getElementById("providers-container");
  if (!c) return;
  c.innerHTML =
    '<div class="empty-state" role="status"><div class="empty-state-title" data-i18n="emptyTitle">' +
    escapeHtml(t("emptyTitle")) +
    '</div><p class="empty-state-desc" data-i18n="emptyDesc">' +
    escapeHtml(t("emptyDesc")) +
    '</p><button class="btn-accent" onclick="addProvider()">' +
    IC.plus +
    " " +
    escapeHtml(t("addProvider")) +
    "</button></div>";
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
  if (!d.model) d.model = "accounts/fireworks/routers/glm-5-fast";
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
  setupModelPicker(card);
  setupFormatSync(card);
  container.appendChild(card);
  requestAnimationFrame(() => {
    const inp = card.querySelector('[data-field="api_key"]');
    if (inp) inp.focus();
  });
  syncJSON();
}

function createProviderHTML(idx, d) {
  const modelInfo = findModelInfo(d.model);
  const modelDisplay = modelInfo ? modelInfo.name : (d.model || "").split("/").pop();
  const providerColor = modelInfo?.providerColor || "var(--accent)";

  return (
    '<div class="provider-header">' +
    '<input type="checkbox" class="provider-check" onchange="toggleCardSelection(\'provider-' +
    idx +
    '\', this.checked)" aria-label="Select">' +
    '<span class="provider-title"><span class="provider-number">' +
    idx +
    '</span> <span class="provider-name truncate" contenteditable="true" role="textbox" aria-label="' +
    escapeHtml(t("providerName")) +
    '" spellcheck="false" data-field="provider_name" data-idx="' +
    idx +
    '">' +
    escapeHtml(d.provider_name || t("provider") + " " + idx) +
    '</span><button type="button" class="btn-edit" onclick="this.previousElementSibling.focus()" title="Rename">' +
    IC.pen +
    "</button></span>" +
    '<div class="provider-actions">' +
    '<button type="button" class="drag-handle" title="' +
    escapeHtml(t("drag")) +
    '" aria-label="' +
    escapeHtml(t("drag")) +
    '">' +
    IC.grip +
    "</button>" +
    '<button type="button" onclick="duplicateProvider(' +
    idx +
    ')" title="' +
    escapeHtml(t("duplicate")) +
    '">' +
    IC.duplicate +
    "</button>" +
    '<button type="button" onclick="deleteProvider(' +
    idx +
    ')" title="' +
    escapeHtml(t("delete")) +
    '">' +
    IC.x +
    "</button>" +
    "</div></div>" +
    '<div class="form-grid">' +
    formGroup(
      idx,
      "api_key",
      t("apiKey"),
      "text",
      d.api_key,
      false,
      "fw-xxx...",
      t("hintApiKey"),
    ) +
    formGroupModelPicker(idx, d.model, modelDisplay, providerColor) +
    formGroupSelect(
      idx,
      "api_format",
      t("apiFormat"),
      FORMAT_OPTIONS,
      d.api_format || "anthropic",
      false,
    ) +
    formGroup(
      idx,
      "base_url",
      t("baseUrl"),
      "text",
      d.base_url || "https://api.fireworks.ai/inference",
      false,
    ) +
    "</div>" +
    '<div class="advanced-toggle" onclick="toggleAdvanced(' +
    idx +
    ')" role="button" tabindex="0" aria-expanded="false" aria-controls="advanced-' +
    idx +
    '">' +
    "<span data-toggle-text>" +
    escapeHtml(t("showAdvanced")) +
    "</span>" +
    '<span class="advanced-toggle-icon" aria-hidden="true">' +
    IC.chevron +
    "</span>" +
    "</div>" +
    '<div class="advanced-fields" id="advanced-' +
    idx +
    '" role="region" aria-label="' +
    escapeHtml(t("advancedSettings")) +
    '"><div class="advanced-fields-inner"><div class="form-grid">' +
    formGroupBool(
      idx,
      "enable_thinking",
      t("enableThinking"),
      d.enable_thinking !== "false" ? "true" : "false",
      t("optEnabled"),
      t("optDisabled"),
    ) +
    formGroup(
      idx,
      "thinking_budget",
      t("thinkingBudget"),
      "number",
      d.thinking_budget || "8192",
      false,
      "",
      t("hintBudget"),
    ) +
    formGroupBool(
      idx,
      "thinking_display",
      t("thinkingDisplay"),
      d.thinking_display === "true" ? "true" : "false",
      t("optHide"),
      t("optShow"),
    ) +
    formGroupBool(
      idx,
      "show_thinking_output",
      t("showThinkingOutput"),
      d.show_thinking_output !== "false" ? "true" : "false",
      t("optShow"),
      t("optHide"),
    ) +
    formGroupSelect(
      idx,
      "thinking_style",
      t("thinkingStyle"),
      ["default", "minimal", "raw", "custom"],
      d.thinking_style,
      false,
      t("hintStyle"),
    ) +
    '<div class="form-group full-width"><label for="thinking-open-' +
    idx +
    '">' +
    escapeHtml(t("thinkingOpen")) +
    '</label><textarea id="thinking-open-' +
    idx +
    '" name="thinking_open" rows="2" data-field="thinking_open">' +
    escapeHtml(d.thinking_open || "") +
    "</textarea></div>" +
    '<div class="form-group full-width"><label for="thinking-close-' +
    idx +
    '">' +
    escapeHtml(t("thinkingClose")) +
    '</label><textarea id="thinking-close-' +
    idx +
    '" name="thinking_close" rows="2" data-field="thinking_close">' +
    escapeHtml(d.thinking_close || "") +
    "</textarea></div>" +
    // Sampling parameters section
    '</div><div class="advanced-section-title">' + escapeHtml(t("samplingParams")) + '</div><div class="form-grid">' +
    formGroup(idx, "max_context", t("maxContext"), "number", d.max_context || "", false, "", "") +
    formGroup(idx, "max_output", t("maxOutput"), "number", d.max_output || "", false, "", "") +
    formGroup(idx, "temperature", t("temperature"), "number", d.temperature || "", false, "", t("hintTemp")) +
    formGroup(idx, "top_p", t("topP"), "number", d.top_p || "", false, "", t("hintMinP")) +
    formGroup(idx, "top_k", t("topK"), "number", d.top_k || "", false, "", t("hintTopK")) +
    formGroup(idx, "min_p", t("minP"), "number", d.min_p || "", false, "", t("hintMinP")) +
    formGroup(idx, "top_a", t("topA"), "number", d.top_a || "", false, "", t("hintMinP")) +
    formGroup(idx, "frequency_penalty", t("frequencyPenalty"), "number", d.frequency_penalty || "", false, "", t("hintPenalty")) +
    formGroup(idx, "presence_penalty", t("presencePenalty"), "number", d.presence_penalty || "", false, "", t("hintPenalty")) +
    formGroup(idx, "repetition_penalty", t("repetitionPenalty"), "number", d.repetition_penalty || "", false, "", t("hintPenalty")) +
    '</div><div class="form-grid">' +
    '<div class="form-group full-width"><label for="custom-body-' +
    idx +
    '">' +
    escapeHtml(t("customBody")) +
    '</label><textarea id="custom-body-' +
    idx +
    '" name="custom_body" rows="5" data-field="custom_body" placeholder=\'{"model":"{{model}}","messages":{{messages}}}\'>' +
    escapeHtml(d.custom_body || "") +
    '</textarea><span class="hint">' +
    escapeHtml(t("hintCustomBody")) +
    "</span></div>" +
    "</div></div></div>"
  );
}

// ============================================================================
// MODEL PICKER - Rich visual model selection
// ============================================================================
function formGroupModelPicker(idx, value, displayName, providerColor) {
  const id = "model-" + idx;
  return `
    <div class="form-group model-picker-wrap">
      <label for="${id}">${escapeHtml(t("model"))}</label>
      <input type="hidden" id="${id}" name="model" data-field="model" value="${escapeHtml(value || "")}">
      <button type="button" class="model-picker-trigger" onclick="openModelPicker(${idx})" aria-haspopup="listbox">
        <span class="model-picker-value" style="--provider-color: ${providerColor}">
          <span class="model-picker-dot"></span>
          <span class="model-picker-name">${escapeHtml(displayName || t("selectModel"))}</span>
        </span>
        <span class="model-picker-chevron">${IC.chevron}</span>
      </button>
      <div class="model-picker-dropdown" id="model-dropdown-${idx}" role="listbox" aria-label="${escapeHtml(t("selectModel"))}"></div>
    </div>
  `;
}

function findModelInfo(modelId) {
  if (!modelId) return null;
  for (const [provKey, prov] of Object.entries(MODEL_CATALOG)) {
    const model = prov.models.find(m => m.id === modelId);
    if (model) {
      return { ...model, provider: provKey, providerName: prov.name, providerColor: prov.color };
    }
  }
  return null;
}

function openModelPicker(idx) {
  closeModelPicker();

  const card = document.getElementById("provider-" + idx);
  if (!card) return;

  const dropdown = card.querySelector(".model-picker-dropdown");
  const trigger = card.querySelector(".model-picker-trigger");
  const currentFormat = card.querySelector('[data-field="api_format"]')?.value || "anthropic";

  if (!dropdown) return;

  activeModelPicker = { idx, dropdown, trigger };

  // Build dropdown content
  let html = `
    <div class="modal-header">
      <span class="modal-title">${escapeHtml(t("selectModel"))}</span>
      <button type="button" class="modal-close" onclick="closeModelPicker()" aria-label="Close">${IC.x}</button>
    </div>
    <div class="model-picker-header">
      <div class="model-picker-search">
        ${IC.search}
        <input type="text" placeholder="${escapeHtml(t("searchModels"))}" oninput="filterModels(${idx}, this.value)" autofocus>
      </div>
      <div class="model-picker-tabs" role="tablist">
        <button type="button" class="model-tab active" data-provider="all" onclick="filterModelsByProvider(${idx}, 'all')">${escapeHtml(t("allProviders"))}</button>
        ${Object.entries(MODEL_CATALOG).map(([key, prov]) =>
          `<button type="button" class="model-tab" data-provider="${key}" onclick="filterModelsByProvider(${idx}, '${key}')" style="--tab-color: ${prov.color}">${escapeHtml(prov.name.split(" ")[0])}</button>`
        ).join("")}
      </div>
    </div>
    <div class="model-picker-list" id="model-list-${idx}">
      ${renderModelList(idx, currentFormat)}
    </div>
    <div class="model-picker-footer">
      <div class="model-custom-input">
        <input type="text" placeholder="${escapeHtml(t("enterModelId"))}" id="custom-model-${idx}">
        <button type="button" onclick="selectCustomModel(${idx})">${escapeHtml(t("customModel"))}</button>
      </div>
    </div>
  `;

  dropdown.innerHTML = html;
  dropdown.classList.add("open");
  trigger.classList.add("open");

  // Focus search
  requestAnimationFrame(() => {
    const searchInput = dropdown.querySelector("input[type='text']");
    if (searchInput) searchInput.focus();
  });
}

function renderModelList(idx, preferredFormat, filter = "", providerFilter = "all") {
  const card = document.getElementById("provider-" + idx);
  const currentModel = card?.querySelector('[data-field="model"]')?.value || "";

  let models = [];
  const filterLower = filter.toLowerCase();

  // Sort providers: preferred format first, then others
  const providerOrder = Object.keys(MODEL_CATALOG).sort((a, b) => {
    const aMatch = FORMAT_PROVIDER_MAP[preferredFormat] === a;
    const bMatch = FORMAT_PROVIDER_MAP[preferredFormat] === b;
    if (aMatch && !bMatch) return -1;
    if (!aMatch && bMatch) return 1;
    return 0;
  });

  // Collect all models with provider info
  providerOrder.forEach(provKey => {
    if (providerFilter !== "all" && providerFilter !== provKey) return;

    const prov = MODEL_CATALOG[provKey];
    prov.models.forEach(m => {
      if (filterLower && !m.name.toLowerCase().includes(filterLower) && !m.id.toLowerCase().includes(filterLower)) {
        return;
      }
      models.push({ ...m, provKey, provName: prov.name });
    });
  });

  // Sort: recommended first, then by tier priority
  const tierOrder = { flagship: 0, fast: 1, efficient: 2, router: 3, legacy: 4 };
  models.sort((a, b) => {
    if (a.recommended && !b.recommended) return -1;
    if (!a.recommended && b.recommended) return 1;
    return (tierOrder[a.tier] || 5) - (tierOrder[b.tier] || 5);
  });

  if (models.length === 0) {
    return `<div class="model-empty">${escapeHtml(t("searchModels"))}</div>`;
  }

  // Render as card grid (matching preset dropdown style)
  let html = '<div class="model-grid">';
  models.forEach((m, index) => {
    const isSelected = m.id === currentModel;
    const contextK = m.context >= 1000000 ? (m.context / 1000000) + "M" : Math.round(m.context / 1000) + "K";
    const modelDisplay = m.id.length > 28 ? m.id.slice(0, 28) + '...' : m.id;

    html += `
      <button type="button"
        class="model-card ${isSelected ? 'selected' : ''}"
        onclick="selectModel(${idx}, '${escapeHtml(m.id)}')"
        data-model-id="${escapeHtml(m.id)}"
        style="--i: ${index}"
        role="option"
        aria-selected="${isSelected}">
        <span class="model-card-title">
          ${escapeHtml(m.name)}
          ${m.recommended ? '<span class="model-card-badge recommended">' + IC.sparkle + '</span>' : ''}
        </span>
        <span class="model-card-id">${escapeHtml(modelDisplay)}</span>
        <div class="model-card-meta">
          <span class="model-card-provider" data-provider="${m.provKey}">${escapeHtml(m.provName.split(" ")[0])}</span>
          <span class="model-card-ctx">${contextK}</span>
          ${m.cot ? '<span class="model-card-cot">CoT</span>' : ''}
        </div>
        ${isSelected ? '<span class="model-card-check">' + IC.check + '</span>' : ''}
      </button>
    `;
  });
  html += '</div>';

  return html;
}

function filterModels(idx, query) {
  const card = document.getElementById("provider-" + idx);
  const list = document.getElementById("model-list-" + idx);
  const activeTab = card?.querySelector(".model-tab.active");
  const providerFilter = activeTab?.dataset.provider || "all";
  const format = card?.querySelector('[data-field="api_format"]')?.value || "anthropic";

  if (list) {
    list.innerHTML = renderModelList(idx, format, query, providerFilter);
  }
}

function filterModelsByProvider(idx, provider) {
  const card = document.getElementById("provider-" + idx);
  const list = document.getElementById("model-list-" + idx);
  const searchInput = card?.querySelector(".model-picker-search input");
  const query = searchInput?.value || "";
  const format = card?.querySelector('[data-field="api_format"]')?.value || "anthropic";

  // Update tabs
  card?.querySelectorAll(".model-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.provider === provider);
  });

  if (list) {
    list.innerHTML = renderModelList(idx, format, query, provider);
  }
}

function selectModel(idx, modelId) {
  const card = document.getElementById("provider-" + idx);
  if (!card) return;

  const hiddenInput = card.querySelector('[data-field="model"]');
  const trigger = card.querySelector(".model-picker-trigger");

  if (hiddenInput) hiddenInput.value = modelId;

  // Update display
  updateModelDisplay(card, modelId);

  // Auto-update base_url based on model
  const modelInfo = findModelInfo(modelId);
  if (modelInfo) {
    const baseUrlInput = card.querySelector('[data-field="base_url"]');
    const prov = MODEL_CATALOG[modelInfo.provider];
    if (baseUrlInput && prov) {
      baseUrlInput.value = prov.baseUrl;
    }
  }

  closeModelPicker();
  syncJSON();
}

function selectCustomModel(idx) {
  const customInput = document.getElementById("custom-model-" + idx);
  if (!customInput || !customInput.value.trim()) return;

  selectModel(idx, customInput.value.trim());
}

function updateModelDisplay(card, modelId) {
  const trigger = card.querySelector(".model-picker-trigger");
  const modelInfo = findModelInfo(modelId);
  const displayName = modelInfo ? modelInfo.name : (modelId || "").split("/").pop();
  const providerColor = modelInfo?.providerColor || "var(--accent)";

  if (trigger) {
    const valueSpan = trigger.querySelector(".model-picker-value");
    const nameSpan = trigger.querySelector(".model-picker-name");
    if (valueSpan) valueSpan.style.setProperty("--provider-color", providerColor);
    if (nameSpan) nameSpan.textContent = displayName;
  }
}

function closeModelPicker() {
  if (!activeModelPicker) return;

  const { dropdown, trigger } = activeModelPicker;
  if (dropdown) dropdown.classList.remove("open");
  if (trigger) trigger.classList.remove("open");
  activeModelPicker = null;
}

// ============================================================================
// FORM HELPERS
// ============================================================================

// Number input attributes based on field type
function getNumberAttrs(field) {
  const decimalFields = ["temperature", "top_p", "min_p", "top_a", "frequency_penalty", "presence_penalty", "repetition_penalty"];
  const intFields = ["top_k"];
  const tokenFields = ["thinking_budget", "max_context", "max_output"];

  if (decimalFields.includes(field)) {
    return ' min="0" max="2" step="0.01"';
  }
  if (intFields.includes(field)) {
    return ' min="0" max="500" step="1"';
  }
  if (tokenFields.includes(field)) {
    return ' min="0" step="1024"';
  }
  return ' min="1024" max="128000" step="1024"';
}

function formGroup(
  idx,
  field,
  label,
  type,
  value,
  required,
  placeholder,
  hint,
  maxlen,
) {
  const id = field.replace(/_/g, "-") + "-" + idx;
  let h =
    '<div class="form-group"><label for="' +
    id +
    '">' +
    escapeHtml(label) +
    "</label>";
  h +=
    '<input type="' +
    type +
    '" id="' +
    id +
    '" name="' +
    field +
    '" value="' +
    escapeHtml(value || "") +
    '"' +
    (placeholder ? ' placeholder="' + escapeHtml(placeholder) + '"' : "") +
    (required ? " required" : "") +
    (maxlen ? ' maxlength="' + maxlen + '"' : "") +
    (type === "number" ? getNumberAttrs(field) : "") +
    ' data-field="' +
    field +
    '">';
  if (hint) h += '<span class="hint">' + escapeHtml(hint) + "</span>";
  if (maxlen)
    h +=
      '<span class="char-counter" id="counter-' +
      id +
      '">0/' +
      maxlen +
      "</span>";
  return h + "</div>";
}

function formGroupSelect(idx, field, label, options, selected, required, hint) {
  const id = field.replace(/_/g, "-") + "-" + idx;
  let h =
    '<div class="form-group"><label for="' +
    id +
    '">' +
    escapeHtml(label) +
    '</label><select id="' +
    id +
    '" name="' +
    field +
    '"' +
    (required ? " required" : "") +
    ' data-field="' +
    field +
    '">';
  options.forEach((o) => {
    h +=
      '<option value="' +
      escapeHtml(o) +
      '"' +
      (selected === o ? " selected" : "") +
      ">" +
      escapeHtml(o) +
      "</option>";
  });
  h += "</select>";
  if (hint) h += '<span class="hint">' + escapeHtml(hint) + "</span>";
  return h + "</div>";
}

function formGroupBool(idx, field, label, value, trueLabel, falseLabel) {
  const id = field.replace(/_/g, "-") + "-" + idx;
  return (
    '<div class="form-group"><label for="' +
    id +
    '">' +
    escapeHtml(label) +
    "</label>" +
    '<select id="' +
    id +
    '" name="' +
    field +
    '" data-field="' +
    field +
    '">' +
    '<option value="true"' +
    (value === "true" ? " selected" : "") +
    ">" +
    escapeHtml(trueLabel) +
    "</option>" +
    '<option value="false"' +
    (value !== "true" ? " selected" : "") +
    ">" +
    escapeHtml(falseLabel) +
    "</option>" +
    "</select></div>"
  );
}

// ============================================================================
// SETUP HELPERS
// ============================================================================
function setupModelPicker(card) {
  // Model picker is self-contained via onclick handlers
}

function setupFormatSync(card) {
  const formatSelect = card.querySelector('[data-field="api_format"]');
  if (!formatSelect) return;

  formatSelect.addEventListener("change", () => {
    const format = formatSelect.value;
    const preferredProvider = FORMAT_PROVIDER_MAP[format];

    // Suggest updating base_url
    const baseUrlInput = card.querySelector('[data-field="base_url"]');
    if (baseUrlInput && preferredProvider && MODEL_CATALOG[preferredProvider]) {
      const prov = MODEL_CATALOG[preferredProvider];
      // Only update if it's one of our known URLs
      const knownUrls = Object.values(MODEL_CATALOG).map(p => p.baseUrl);
      if (knownUrls.includes(baseUrlInput.value) || !baseUrlInput.value) {
        baseUrlInput.value = prov.baseUrl;
      }
    }
  });
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
      const sibling =
        e.key === "ArrowUp"
          ? card.previousElementSibling
          : card.nextElementSibling;
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
    const mn = parseInt(f.min),
      mx = parseInt(f.max),
      v = parseInt(f.value);
    if (!isNaN(mn) && v < mn) err = t("errMinValue") + mn;
    if (!isNaN(mx) && v > mx) err = t("errMaxValue") + mx;
  }
  if (f.name === "api_key" && f.value && !f.value.match(/^fw-[A-Za-z0-9_-]+$/))
    err = t("errApiKeyFormat");
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
  if (document.querySelectorAll(".provider-card").length === 0)
    showEmptyState();
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
    if (cb)
      cb.setAttribute(
        "onchange",
        "toggleCardSelection('provider-" + num + "', this.checked)",
      );

    // Update model picker elements
    const modelTrigger = card.querySelector(".model-picker-trigger");
    if (modelTrigger) modelTrigger.setAttribute("onclick", "openModelPicker(" + num + ")");
    const modelInput = card.querySelector('[data-field="model"]');
    if (modelInput) modelInput.id = "model-" + num;
    const modelDropdown = card.querySelector(".model-picker-dropdown");
    if (modelDropdown) modelDropdown.id = "model-dropdown-" + num;
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
  clearLocalStorage();
  syncJSON();
}

// ============================================================================
// JSON SYNC
// ============================================================================
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
      else if (f.hasAttribute("contenteditable"))
        v = (f.textContent || "").trim();
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
      vs.textContent =
        configs.length + " provider" + (configs.length !== 1 ? "s" : "");
    else
      vs.textContent = configs.length + t("countLabel") + " " + t("provider");
  }
  _syncing = false;
  highlightJSON(out.value);

  // Auto-save to localStorage
  saveToLocalStorage(configs);
}

// ============================================================================
// LOCAL STORAGE - Persist provider configs across sessions
// ============================================================================
const STORAGE_KEY = "hanabi-providers";

function saveToLocalStorage(configs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(configs));
  } catch (e) {
    // Storage full or unavailable — silently fail
  }
}

function loadFromLocalStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const configs = JSON.parse(saved);
      if (Array.isArray(configs) && configs.length > 0) {
        return configs;
      }
    }
  } catch (e) {
    // Invalid JSON or storage unavailable
  }
  return null;
}

function clearLocalStorage() {
  localStorage.removeItem(STORAGE_KEY);
}

// ============================================================================
// SHARE/IMPORT - Generate shareable config codes
// ============================================================================
function generateShareCode() {
  const out = document.getElementById("json-output");
  if (!out || !out.value || out.value === "[]") {
    showToast(t("invalidJSON"), "error");
    return;
  }
  try {
    const configs = JSON.parse(out.value);
    // Compress: remove api_key for security, encode as base64
    const safeConfigs = configs.map(cfg => {
      const copy = { ...cfg };
      delete copy.api_key; // Never share API keys
      return copy;
    });
    const json = JSON.stringify(safeConfigs);
    const encoded = btoa(unescape(encodeURIComponent(json)));
    const code = "HNB1:" + encoded; // Version prefix for future compatibility

    // Copy to clipboard
    navigator.clipboard.writeText(code).then(() => {
      showToast(t("shareCopied"), "success");
    }).catch(() => {
      // Fallback: show in prompt
      prompt(t("shareCode"), code);
    });
  } catch (e) {
    showToast(t("invalidJSON"), "error");
  }
}

function importShareCode(code) {
  if (!code) {
    code = prompt(t("importCode"));
  }
  if (!code || !code.trim()) return;

  code = code.trim();

  try {
    // Check version prefix
    if (!code.startsWith("HNB1:")) {
      showToast(t("importFailed"), "error");
      return;
    }

    const encoded = code.slice(5); // Remove "HNB1:" prefix
    const json = decodeURIComponent(escape(atob(encoded)));
    const configs = JSON.parse(json);

    if (!Array.isArray(configs) || configs.length === 0) {
      showToast(t("importFailed"), "error");
      return;
    }

    // Clear existing and add imported
    document.querySelectorAll(".provider-card").forEach(c => c.remove());
    selectedCards.clear();
    hideEmptyState();

    configs.forEach(cfg => addProvider(cfg));
    showToast(t("importSuccess"), "success");
  } catch (e) {
    showToast(t("importFailed"), "error");
  }
}

function highlightJSON(str) {
  var el = document.getElementById("json-highlight");
  if (!el) return;
  if (!str) {
    el.textContent = "";
    return;
  }
  var out = "";
  var i = 0;
  var s = str;
  while (i < s.length) {
    var ch = s[i];
    if (ch === '"') {
      var j = i + 1;
      while (j < s.length && s[j] !== '"') {
        if (s[j] === "\\") j++;
        j++;
      }
      j++;
      var tok = s.slice(i, j);
      var safe = tok
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      var rest = s.slice(j);
      if (/^\s*:/.test(rest)) {
        out += '<span class="jk">' + safe + "</span>";
      } else {
        out += '<span class="js">' + safe + "</span>";
      }
      i = j;
    } else if (ch === "-" || (ch >= "0" && ch <= "9")) {
      var m = s.slice(i).match(/^-?\d+(\.\d+)?([eE][+-]?\d+)?/);
      if (m) {
        out += '<span class="jn">' + m[0] + "</span>";
        i += m[0].length;
      } else {
        out += ch;
        i++;
      }
    } else if (s.slice(i, i + 4) === "true") {
      out += '<span class="jb">true</span>';
      i += 4;
    } else if (s.slice(i, i + 5) === "false") {
      out += '<span class="jb">false</span>';
      i += 5;
    } else if (s.slice(i, i + 4) === "null") {
      out += '<span class="jb">null</span>';
      i += 4;
    } else if ("{}[],".indexOf(ch) !== -1) {
      out += '<span class="jp">' + ch + "</span>";
      i++;
    } else if (ch === "<") {
      out += "&lt;";
      i++;
    } else if (ch === ">") {
      out += "&gt;";
      i++;
    } else if (ch === "&") {
      out += "&amp;";
      i++;
    } else {
      out += ch;
      i++;
    }
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
  a.download =
    "hanabi-config-" + new Date().toISOString().slice(0, 10) + ".json";
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

// Expose functions for inline onclick handlers
window.toggleTheme = toggleTheme;
window.addProvider = addProvider;
window.clearAll = clearAll;
window.duplicateSelected = duplicateSelected;
window.deleteSelected = deleteSelected;
window.bulkToggleThinking = bulkToggleThinking;
window.importJSON = importJSON;
window.copyToClipboard = copyToClipboard;
window.downloadJSON = downloadJSON;
window.toggleAdvanced = toggleAdvanced;
window.duplicateProvider = duplicateProvider;
window.deleteProvider = deleteProvider;
window.openModelPicker = openModelPicker;
window.filterModelsByProvider = filterModelsByProvider;
window.selectCustomModel = selectCustomModel;
window.selectModel = selectModel;
window.toggleCardSelection = toggleCardSelection;
window.filterModels = filterModels;
window.toggleMasterCheck = toggleMasterCheck;
window.bulkSetModel = bulkSetModel;
window.bulkSetFormat = bulkSetFormat;
window.generateShareCode = generateShareCode;
window.importShareCode = importShareCode;
window.closeModelPicker = closeModelPicker;
