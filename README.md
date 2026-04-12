# Hanabi (花火)

FireworksAI -> *Fireworks* -> **花火** !!

RisuAI 멀티 프로바이더 라우팅 플러그인 + CoT/Thinking 블록 지원

## v2.1.0 (2026-04-13)

### 새 기능
- **개별 프로바이더 공유**: 각 프로바이더 카드에 공유 버튼 추가
  - API 키 포함/제외 옵션 (아카라이브 크레딧 공유용)
  - `HNB1:` 형식 공유 코드 생성
- **통합 데이터 파일**: `models.json` + `presets.json` → `data.json`으로 통합
  - 단일 소스로 프로바이더 메타데이터 관리
  - 외부 JSON 파일 로드 후 폴백
  - 동적 모델 목록 API 지원 (OpenRouter, Anthropic, OpenAI, Gemini 등)
- **일일 캐싱**: 프로바이더 모델 API 응답 24시간 localStorage 캐싱
- **커스텀 프리셋**: 모든 프로바이더에 커스텀 프리셋 추가 (직접 모델 ID 입력용)

### 업데이트된 모델
- **Ollama Cloud**: GLM-5.1, MiniMax M2.7, Gemma 4, Qwen3.5, KIMI K2.5, DeepSeek V3.2, Devstral 2 등
- **NanoGPT**: GLM-5.1 TEE, Grok 4.20, Qwen 3.6 Plus, Gemma 4 31B TEE 등

### 파일 구조
```
hanabi/
├── index.html      # WebUI
├── style.css       # 스타일 (다크/라이트 테마, 보더 없음)
├── app.js          # WebUI 로직
├── data.json       # 통합 프로바이더 데이터 (모델 + 프리셋)
└── src/main.js     # RisuAI 플러그인
```

## 라이선스

AGPL v3.0
