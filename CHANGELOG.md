# Hanabi (花火) Changelog

## v2.1.0 (2025-04-13)

### 새 기능
- **개별 프로바이더 공유**: 각 프로바이더 카드에 공유 버튼 추가
  - API 키 포함/제외 옵션 (아카라이브 크레딧 공유용)
  - `HNB1:` 형식 공유 코드 생성
  - HTML 카드 탭 - 예쁜 카드 형태로 복사 (아카 라이브용)
- **통합 프로바이더 데이터**: `providers.json`로 통합
  - 모델 데이터 + 프리셋 + 메타데이터를 단일 파일에서 관리
  - 프리셋 선택시 base_url 자동 주입
  - 외부 JSON 파일 로드 후 폴백
- **샘플링 파라미터 지원**: 고급 설정에 추가
  - temperature, top_p, top_k, min_p, top_a
  - frequency_penalty, presence_penalty, repetition_penalty
- **코드로 가져오기**: WebUI에 공유 코드 입력 버튼 추가

### 개선사항
- 모델 선택기 UI 개선 - 검색 + 프로바이더 필터 탭 + 커스텀 입력
- 모든 프로바이더에 "커스텀" 프리셋 추가 (직접 모델 ID 입력용)
- JSON 인코딩 개선 (UTF-8 TextEncoder 사용)
- 모델 선택시 자동으로 base_url 변경
- 대량 작업 개선 (Ctrl+A 전체 선택 등)

### 추가된 모델/프리셋
- **Fireworks**: KIMI K2.5 Turbo, GLM-5 Fast, DeepSeek R1, Qwen3 235B 등
- **Anthropic**: Claude Opus/Sonnet/Haiku 4.6, 4.5, 4.1 라인업
- **OpenAI**: GPT-5.4 / 5.4-mini / 5.4-nano, o4-mini, o3, o3-mini
- **Gemini**: Gemini 3.1 Pro / Flash Lite / 3 Flash
- **OpenRouter**: Claude Opus 4.6, Gemma 4 31B, Free Router
- **Vercel AI**: Grok 4.20, Claude Sonnet 4.6
- **Vertex AI**: Gemini 3.1 Pro, Claude Sonnet 4.6
- **Ollama Cloud**: GLM-5.1, MiniMax M2.7, Gemma 4, Qwen3.5, KIMI K2.5, DeepSeek V3.2, Devstral 2 등
- **NanoGPT**: GLM-5.1 TEE, Grok 4.20, Qwen 3.6 Plus, Claude Opus 4.6, Gemma 4 31B TEE 등

---

## v2.0.0 (2025-04-10)

### 주요 변경사항
- **플러그인 API 3.0** 마이그레이션
- **멀티 프로바이더** 지원 - 하나의 설정으로 여러 프로바이더 등록
- **CoT/Thinking 블록** 지원 - 3가지 API 형식(Anthropic/OpenAI/Gemini) 대응
- **WebUI** 완전 재설계 - 카드 기반 UI, 드래그 앤 드롭, 실시간 JSON 동기화
- **프리셋 시스템** - 14개 프로바이더, 100+ 모델 프리셋
- **i18n** - 한국어/영어/일본어 지원
- **다크/라이트 테마** 지원

### 지원 프로바이더
Anthropic, OpenAI, Google Gemini, xAI Grok, MoonshotAI (KIMI), MiniMax, ZhipuAI (GLM), Fireworks, OpenRouter, Vercel AI, Vertex AI, Ollama Cloud, NanoGPT
