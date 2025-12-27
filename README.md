# WeHire Homepage

AI 기반 치과/의료 전문직 채용 플랫폼 WeHire의 공식 홈페이지입니다.

## 프로젝트 개요

- **서비스명:** WeHire (위하이어)
- **핵심 메시지:** "전국 104,664개 병원 데이터 기반 AI 채용 혁신"
- **Production URL:** https://homepage-eta-dusky.vercel.app

### 타겟 사용자

| 유형 | 대상 | 주요 기능 |
|------|------|----------|
| 구직자 (Seeker) | 치과위생사, 간호사 등 | DNA 진단, 병원 매칭 |
| 구인처 (Employer) | 치과/의료 병원 | AI 인재 매칭, 채용 비용 절감 |

---

## 기술 스택

### Frontend
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion
- **Icons:** Lucide React

### Backend
- **API:** Next.js API Routes
- **Database:** Supabase (PostgreSQL)

### Deployment
- **Hosting:** Vercel
- **Database:** Supabase

---

## 시작하기

### 필수 요구사항
- Node.js 18+
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone <repository-url>
cd homepage

# 의존성 설치
npm install
```

### 환경변수 설정

`.env.local` 파일을 생성하고 다음 변수를 설정하세요:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Admin (선택)
ADMIN_PASSWORD=your-admin-password
```

### 개발 서버 실행

```bash
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

### 빌드

```bash
npm run build
```

---

## 프로젝트 구조

```
homepage/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx            # 메인 랜딩 페이지
│   │   ├── layout.tsx          # 루트 레이아웃
│   │   ├── globals.css         # 전역 스타일
│   │   ├── waitlist/           # 사전등록 페이지
│   │   ├── admin/              # 어드민 대시보드
│   │   └── api/                # API Routes
│   │       ├── waitlist/       # 사전등록 API
│   │       └── admin/          # 어드민 API
│   ├── components/
│   │   ├── layout/             # Header, Footer
│   │   ├── landing/            # 랜딩 페이지 섹션
│   │   └── ui/                 # 공통 UI 컴포넌트
│   └── lib/                    # 유틸리티, Supabase 클라이언트
├── docs/                       # 문서
│   ├── IA.md                   # 정보 구조
│   ├── WIREFRAME.md            # 와이어프레임
│   └── DESIGN_SYSTEM.md        # 디자인 시스템
├── public/                     # 정적 파일
└── package.json
```

---

## 페이지 구성

| 경로 | 설명 |
|------|------|
| `/` | 메인 랜딩 페이지 |
| `/waitlist` | 사전등록 페이지 |
| `/admin` | 어드민 대시보드 (비밀번호 보호) |

### 랜딩 페이지 섹션

1. **Hero Section** - 서비스 소개, 구직자/구인처 분기
2. **Diagnosis Section** - 구직자 DNA 진단 소개
3. **Super Profile Section** - 병원 슈퍼 프로필 미리보기
4. **Matching Workflow Section** - AI 매칭 프로세스 4단계
5. **AI Solution Section** - AI 인터뷰/채용 브랜딩

---

## API 엔드포인트

| 엔드포인트 | 메서드 | 설명 |
|-----------|--------|------|
| `/api/waitlist` | POST | 사전등록 |
| `/api/admin/auth` | POST | 어드민 로그인 |
| `/api/admin/auth` | GET | 인증 상태 확인 |
| `/api/admin/auth` | DELETE | 로그아웃 |
| `/api/admin/waitlist` | GET | 등록 목록 조회 |

---

## 데이터베이스

### waitlist 테이블

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

## 문서

프로젝트 상세 문서는 `/docs` 디렉토리에서 확인할 수 있습니다:

- [IA.md](docs/IA.md) - 정보 구조 (Information Architecture)
- [WIREFRAME.md](docs/WIREFRAME.md) - 와이어프레임
- [DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) - 디자인 시스템

---

## 배포

### Vercel 배포

```bash
npx vercel --prod
```

### 환경변수 (Vercel)

Vercel 대시보드에서 다음 환경변수를 설정하세요:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `ADMIN_PASSWORD`

---

## 참고 링크

- **구인자 앱 목업:** https://wehireemployer.vercel.app
- **구직자 앱 목업:** https://wehire-seeker.vercel.app

---

## 라이선스

Copyright 2024 WeHire. All rights reserved.
