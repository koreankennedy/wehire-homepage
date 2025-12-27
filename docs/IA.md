# WeHire 정보 구조 (Information Architecture)

## 1. 서비스 개요

### 기본 정보
- **서비스명:** WeHire (위하이어)
- **서비스 유형:** AI 기반 치과/의료 전문직 채용 플랫폼
- **핵심 메시지:** "전국 104,664개 병원 데이터 기반 AI 채용 혁신"

### 타겟 사용자
| 유형 | 대상 | 주요 니즈 |
|------|------|----------|
| 구직자 (Seeker) | 치과위생사, 간호사 등 의료 전문직 | 맞춤형 병원 검색, 근무 조건 비교 |
| 구인처 (Employer) | 치과/의료 병원 | AI 기반 인재 매칭, 채용 비용 절감 |

---

## 2. 사이트맵

```
WeHire Homepage
│
├── / (메인 랜딩 페이지)
│   ├── #services ─── Hero Section (서비스 소개)
│   ├── #seeker ───── Diagnosis Section (구직자)
│   ├── #employer ─── Matching Workflow Section (구인처)
│   └── #ai-solution ─ AI Solution Section (AI 솔루션)
│
├── /waitlist (사전등록 페이지)
│   ├── 등록 폼
│   └── 등록 완료 화면
│
├── /admin (어드민 대시보드) [비밀번호 보호]
│   ├── 로그인 화면
│   └── 대시보드
│       ├── 통계 카드
│       ├── 필터 탭
│       └── 등록 목록 테이블
│
└── /api (API 엔드포인트)
    ├── /api/waitlist ─────── POST: 사전등록
    └── /api/admin
        ├── /auth ─────────── POST: 로그인
        │                     GET: 인증 확인
        │                     DELETE: 로그아웃
        └── /waitlist ─────── GET: 목록 조회
```

---

## 3. 페이지별 상세 구조

### 3.1 메인 랜딩 페이지 (/)

| 섹션 | ID | 컴포넌트 | 설명 |
|------|-----|---------|------|
| Hero | #services | HeroSection | 서비스 소개, 구직자/구인처 분기점 |
| 진단 | #seeker | DiagnosisSection | 구직자 DNA 진단 여정 소개 |
| 슈퍼 프로필 | - | SuperProfileSection | 병원 정보 미리보기 |
| 매칭 워크플로우 | #employer | MatchingWorkflowSection | 구인처 AI 매칭 프로세스 |
| AI 솔루션 | #ai-solution | AISolutionSection | AI 인터뷰, 채용 브랜딩 |

### 3.2 사전등록 페이지 (/waitlist)

| 상태 | 화면 | 설명 |
|------|------|------|
| 초기 | 등록 폼 | 유형 선택, 이름, 이메일, 전화번호 입력 |
| 완료 | 확인 화면 | 등록 완료 메시지, 홈 이동 버튼 |

### 3.3 어드민 페이지 (/admin)

| 상태 | 화면 | 설명 |
|------|------|------|
| 미인증 | 로그인 폼 | 비밀번호 입력 |
| 인증됨 | 대시보드 | 통계, 필터, 테이블, CSV 다운로드 |

---

## 4. 네비게이션 구조

### 4.1 Header (GNB)

```
┌─────────────────────────────────────────────────────────────┐
│  WeHire    서비스 소개 │ 구직자 │ 구인처 │ AI솔루션   [로그인] [시작하기] │
└─────────────────────────────────────────────────────────────┘
```

| 메뉴 | 링크 | 설명 |
|------|------|------|
| 서비스 소개 | /#services | Hero Section으로 스크롤 |
| 구직자 | /#seeker | Diagnosis Section으로 스크롤 |
| 구인처 | /#employer | Matching Workflow Section으로 스크롤 |
| AI 솔루션 | /#ai-solution | AI Solution Section으로 스크롤 |
| 로그인 | /waitlist | 사전등록 페이지 |
| 시작하기 | /waitlist | 사전등록 페이지 |

### 4.2 Footer

```
┌─────────────────────────────────────────────────────────────┐
│  WeHire                                                     │
│  AI 기반 치과/의료 전문직 채용 플랫폼                            │
│                                                             │
│  서비스        고객지원        법적고지                         │
│  서비스 소개    문의하기        이용약관                         │
│  구직자        FAQ            개인정보처리방침                   │
│  구인처                                                      │
│                                                             │
│  © 2024 WeHire. All rights reserved.                        │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. 사용자 흐름 (User Flow)

### 5.1 구직자 플로우

```
[메인 페이지 방문]
       │
       ▼
[Hero Section - 구직자 카드 확인]
       │
       ▼
[DNA 진단하기 CTA 클릭]
       │
       ▼
[사전등록 페이지]
       │
       ├─→ [구직자 선택]
       │
       ▼
[이메일/정보 입력]
       │
       ▼
[등록 완료]
```

### 5.2 구인처 플로우

```
[메인 페이지 방문]
       │
       ▼
[Hero Section - 구인처 카드 확인]
       │
       ▼
[인재 검색하기 CTA 클릭]
       │
       ▼
[사전등록 페이지]
       │
       ├─→ [구인처 선택]
       │
       ▼
[이메일/정보 입력]
       │
       ▼
[등록 완료]
```

### 5.3 어드민 플로우

```
[/admin 접근]
       │
       ▼
[인증 확인]
       │
       ├─ 미인증 ─→ [로그인 화면] ─→ [비밀번호 입력] ─→ [인증]
       │                                                │
       ▼                                                │
[대시보드 표시] ←───────────────────────────────────────┘
       │
       ├─→ [통계 확인]
       ├─→ [필터링]
       ├─→ [CSV 다운로드]
       └─→ [로그아웃]
```

---

## 6. URL 구조

| URL | 메서드 | 설명 | 인증 |
|-----|--------|------|------|
| `/` | GET | 메인 랜딩 페이지 | - |
| `/waitlist` | GET | 사전등록 페이지 | - |
| `/admin` | GET | 어드민 대시보드 | 필요 |
| `/api/waitlist` | POST | 사전등록 API | - |
| `/api/admin/auth` | POST | 로그인 | - |
| `/api/admin/auth` | GET | 인증 확인 | - |
| `/api/admin/auth` | DELETE | 로그아웃 | - |
| `/api/admin/waitlist` | GET | 등록 목록 조회 | 필요 |

---

## 7. 데이터 구조

### 7.1 Waitlist Entry

```typescript
interface WaitlistEntry {
  id: number;
  email: string;           // 필수
  phone: string | null;    // 선택
  name: string | null;     // 선택
  user_type: 'seeker' | 'employer' | null;
  created_at: string;      // ISO 8601
}
```

### 7.2 Database Schema

```sql
CREATE TABLE waitlist (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(50),
  name VARCHAR(100),
  user_type VARCHAR(20),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## 8. 향후 확장 계획

### Phase 2 예정 페이지
```
├── /seeker
│   ├── /diagnosis ─── DNA 진단 테스트
│   └── /hospitals ─── 병원 검색/필터링
│
├── /employer
│   ├── /matching ──── 인재 매칭/검색
│   ├── /interview ─── AI 인터뷰 관리
│   └── /calculator ── 이별 비용 계산기
│
└── /auth
    ├── /login ─────── 로그인
    └── /register ──── 회원가입
```
