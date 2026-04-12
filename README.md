# Hanabi (花火)

FireworksAI -> *Fireworks* -> **花火** !!

RisuAI 멀티 프로바이더 라우팅 플러그인 + CoT/Thinking 블록 지원

## 시작하기

### 1. 플러그인 설치
[소스코드](https://raw.githubusercontent.com/MercuriusDream/hanabi/refs/heads/main/src/main.js) 다운로드 → 리수 설정 > 플러그인 > 플러그인 추가 → 파일 선택

### 2. WebUI에서 설정
[Hana.bi](https://mercuriusdream.com/hanabi/) 열어서 프로바이더 설정 → 생성된 JSON 복사

### 3. 리수에 적용
리수에서 Hanabi 플러그인 클릭 → config 필드에 JSON 붙여넣기 → 채팅 봇 탭에서 프로바이더 선택

## 주요 기능

- **멀티 프로바이더** - 하나의 설정으로 여러 프로바이더 등록
- **CoT/Thinking 블록** - 생각 과정을 채팅에 표시 (Anthropic/OpenAI/Gemini 지원)
- **프리셋 시스템** - 100+ 모델 프리셋 + 커스텀 모델 지원
- **드래그 앤 드롭** - 프로바이더 카드 순서 변경
- **대량 작업** - 여러 프로바이더 한번에 수정
- **프로바이더 공유** - 공유 코드(HNB1:)로 설정 공유

## 파일 구조

```
hanabi/
├── index.html       # WebUI Config Generator
├── style.css        # 스타일 (다크/라이트 테마)
├── app.js           # WebUI 로직
├── providers.json   # 통합 프로바이더 데이터 (모델 + 프리셋 + 메타데이터)
├── src/
│   └── main.js      # RisuAI 플러그인
├── README.md        # 이 파일
└── CHANGELOG.md     # 업데이트 내역
```

## 라이선스

AGPL v3.0
