# WeHire 디자인 시스템 (Design System)

## 1. 개요

WeHire의 비주얼 아이덴티티와 UI 컴포넌트 가이드라인을 정의합니다.

### 디자인 원칙
- **Mobile-First:** 구직자 80% 모바일 유입 고려
- **Trust + Intelligence:** 신뢰감과 지능적 이미지 균형
- **Data-Driven:** 숫자 데이터 강조 (104,664개, 742만원 등)

---

## 2. 컬러 시스템

### 2.1 Primary Colors

| 이름 | HEX | RGB | CSS 변수 | 용도 |
|------|-----|-----|----------|------|
| Primary Navy | `#1A2B45` | rgb(26, 43, 69) | `--primary-navy` | 구인처, 주요 텍스트, CTA |
| Secondary Mint | `#48CBB0` | rgb(72, 203, 176) | `--secondary-mint` | 구직자, 강조 요소 |
| Point Gold | `#D4AF37` | rgb(212, 175, 55) | `--point-gold` | 프리미엄, 상위 1% |

### 2.2 Neutral Colors

| 이름 | HEX | RGB | CSS 변수 | 용도 |
|------|-----|-----|----------|------|
| Background | `#F8F9FA` | rgb(248, 249, 250) | `--background` | 페이지 배경 |
| White | `#FFFFFF` | rgb(255, 255, 255) | `--background-white` | 카드/컴포넌트 배경 |
| Text Dark | `#1F2937` | rgb(31, 41, 55) | `--text-dark` | 본문 텍스트 |
| Text Light | `#6B7280` | rgb(107, 114, 128) | `--text-light` | 보조 텍스트 |

### 2.3 컬러 활용 규칙

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   구직자 (Seeker) 영역                                        │
│   ─────────────────                                         │
│   Primary: #48CBB0 (Mint)                                   │
│   Accent Bar, CTA Button, Badge                             │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   구인처 (Employer) 영역                                      │
│   ─────────────────                                         │
│   Primary: #1A2B45 (Navy)                                   │
│   Accent Bar, CTA Button, Badge                             │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   프리미엄 / 강조 요소                                         │
│   ─────────────────                                         │
│   Accent: #D4AF37 (Gold)                                    │
│   "88%", "상위 1%", 특별 혜택                                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 2.4 CSS 변수 정의

```css
:root {
  /* Primary Colors */
  --primary-navy: #1A2B45;
  --secondary-mint: #48CBB0;
  --point-gold: #D4AF37;

  /* Background Colors */
  --background: #F8F9FA;
  --background-white: #FFFFFF;

  /* Text Colors */
  --text-dark: #1F2937;
  --text-light: #6B7280;
  --text-white: #FFFFFF;
}
```

---

## 3. 타이포그래피

### 3.1 폰트 패밀리

```css
font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
```

**Pretendard CDN:**
```css
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css');
```

### 3.2 폰트 스케일

| 용도 | Tailwind 클래스 | 크기 (Mobile) | 크기 (Desktop) | Weight |
|------|-----------------|---------------|----------------|--------|
| Hero Title | `text-4xl md:text-5xl lg:text-6xl` | 36px | 48px / 60px | Bold (700) |
| Section Title | `text-3xl md:text-4xl` | 30px | 36px | Bold (700) |
| Card Title | `text-xl md:text-2xl` | 20px | 24px | Bold (700) |
| Subtitle | `text-lg md:text-xl` | 18px | 20px | Medium (500) |
| Body | `text-base md:text-lg` | 16px | 18px | Regular (400) |
| Caption | `text-sm` | 14px | 14px | Regular (400) |
| Micro | `text-xs` | 12px | 12px | Medium (500) |

### 3.3 숫자 강조

숫자 데이터는 1.5배 크게, Bold 처리:

```css
.number-emphasis {
  font-weight: 700;
  font-size: 1.5em;
  color: var(--primary-navy);
}
```

**사용 예시:**
```tsx
<span className="text-2xl md:text-3xl font-bold text-[#1A2B45]">
  104,664개
</span>
```

### 3.4 그라데이션 텍스트

```css
.gradient-text {
  background: linear-gradient(135deg, #1A2B45 0%, #48CBB0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 4. 간격 시스템 (Spacing)

### 4.1 기본 간격

| 토큰 | Tailwind | 크기 | 용도 |
|------|----------|------|------|
| xs | `space-1`, `p-1` | 4px | 아이콘 내부 |
| sm | `space-2`, `p-2` | 8px | 요소 간 최소 간격 |
| md | `space-3`, `p-3` | 12px | 관련 요소 그룹 간격 |
| base | `space-4`, `p-4` | 16px | 카드 내부 패딩 |
| lg | `space-6`, `p-6` | 24px | 섹션 내 요소 간격 |
| xl | `space-8`, `p-8` | 32px | 카드 패딩 |
| 2xl | `space-12`, `py-12` | 48px | 섹션 간 간격 |
| 3xl | `space-16`, `py-16` | 64px | 대형 섹션 간격 |

### 4.2 컨테이너

```tsx
// 최대 너비 컨테이너
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* 콘텐츠 */}
</div>
```

---

## 5. 컴포넌트

### 5.1 Button

#### Primary Button (Navy)
```tsx
<button className="px-4 py-2 bg-[#1A2B45] text-white font-medium rounded-lg hover:bg-[#2a3b55] transition-colors">
  버튼 텍스트
</button>
```

#### Secondary Button (Mint)
```tsx
<button className="px-4 py-2 bg-[#48CBB0] text-white font-medium rounded-lg hover:bg-[#3bb89d] transition-colors">
  버튼 텍스트
</button>
```

#### Ghost Button
```tsx
<button className="px-4 py-2 text-[#1A2B45] font-medium hover:bg-gray-100 rounded-lg transition-colors">
  버튼 텍스트
</button>
```

#### CTA Button (Full Width)
```tsx
<button className="w-full py-3 bg-[#1A2B45] text-white font-medium rounded-xl hover:bg-[#2a3b55] transition-colors">
  버튼 텍스트
</button>
```

#### Button with Icon
```tsx
<button className="inline-flex items-center gap-2 px-4 py-2 bg-[#48CBB0] text-white font-medium rounded-lg">
  DNA 진단하기
  <ArrowRight className="w-4 h-4" />
</button>
```

### 5.2 Card

#### Basic Card
```tsx
<div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
  {/* 카드 내용 */}
</div>
```

#### Card with Accent Bar
```tsx
<div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden">
  {/* 상단 액센트 바 */}
  <div className="absolute top-0 left-0 right-0 h-1 bg-[#48CBB0]" />
  {/* 카드 내용 */}
</div>
```

#### Stats Card
```tsx
<div className="bg-white rounded-xl p-6 shadow-sm">
  <div className="flex items-center gap-4">
    <div className="p-3 bg-[#48CBB0]/10 rounded-xl">
      <Users className="w-6 h-6 text-[#48CBB0]" />
    </div>
    <div>
      <p className="text-sm text-[#6B7280]">총 등록</p>
      <p className="text-2xl font-bold text-[#1A2B45]">150명</p>
    </div>
  </div>
</div>
```

### 5.3 Input

#### Text Input
```tsx
<input
  type="text"
  placeholder="입력하세요"
  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#48CBB0] focus:border-transparent"
/>
```

#### Input with Icon
```tsx
<div className="relative">
  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
  <input
    type="email"
    placeholder="example@email.com"
    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#48CBB0] focus:border-transparent"
  />
</div>
```

### 5.4 Badge / Tag

#### Seeker Badge
```tsx
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[#48CBB0]/10 text-[#48CBB0]">
  <Briefcase className="w-3 h-3" />
  구직자
</span>
```

#### Employer Badge
```tsx
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[#1A2B45]/10 text-[#1A2B45]">
  <Building2 className="w-3 h-3" />
  구인처
</span>
```

#### Feature Tag
```tsx
<div className="inline-flex items-center gap-2 px-4 py-2 bg-[#48CBB0]/10 rounded-full">
  <Sparkles className="w-4 h-4 text-[#48CBB0]" />
  <span className="text-sm font-medium text-[#1A2B45]">AI가 주도하는 채용 혁신</span>
</div>
```

### 5.5 Table

```tsx
<table className="w-full">
  <thead className="bg-[#F8F9FA] border-b border-gray-200">
    <tr>
      <th className="px-6 py-4 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
        컬럼명
      </th>
    </tr>
  </thead>
  <tbody className="divide-y divide-gray-200">
    <tr className="hover:bg-[#F8F9FA]">
      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#1A2B45]">
        내용
      </td>
    </tr>
  </tbody>
</table>
```

---

## 6. 애니메이션

### 6.1 Framer Motion 기본 패턴

#### Fade In + Slide Up
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* 콘텐츠 */}
</motion.div>
```

#### Slide In from Left
```tsx
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  {/* 콘텐츠 */}
</motion.div>
```

#### Slide In from Right
```tsx
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
>
  {/* 콘텐츠 */}
</motion.div>
```

#### Scale In (Spring)
```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ type: "spring" }}
>
  {/* 콘텐츠 */}
</motion.div>
```

#### Stagger Children
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1 }}
>
  {/* 리스트 아이템 */}
</motion.div>
```

### 6.2 CSS Transitions

#### Hover Effect
```css
.card {
  transition: all 0.3s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

#### Button Hover
```tsx
<button className="transition-colors hover:bg-[#2a3b55]">
```

#### Icon Animation
```tsx
<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
```

### 6.3 로딩 스피너

```tsx
<RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
```

---

## 7. 반응형 디자인

### 7.1 브레이크포인트

| 브레이크포인트 | Tailwind | 크기 | 기기 |
|---------------|----------|------|------|
| Default | - | < 640px | 모바일 |
| sm | `sm:` | ≥ 640px | 소형 모바일 |
| md | `md:` | ≥ 768px | 태블릿 |
| lg | `lg:` | ≥ 1024px | 랩탑 |
| xl | `xl:` | ≥ 1280px | 데스크탑 |
| 2xl | `2xl:` | ≥ 1536px | 대형 데스크탑 |

### 7.2 반응형 패턴

#### Grid Columns
```tsx
// 1 → 2 → 3 컬럼
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
```

#### Typography
```tsx
// 모바일: 36px → 데스크탑: 60px
<h1 className="text-4xl md:text-5xl lg:text-6xl">
```

#### Spacing
```tsx
// 모바일: 48px → 데스크탑: 80px
<section className="py-12 md:py-20">
```

#### Hidden Elements
```tsx
// 모바일에서 숨김
<div className="hidden md:block">

// 데스크탑에서 숨김
<div className="md:hidden">
```

---

## 8. 아이콘

### 8.1 아이콘 라이브러리

**Lucide React** 사용

```bash
npm install lucide-react
```

### 8.2 주요 아이콘

| 아이콘 | 컴포넌트 | 용도 |
|--------|----------|------|
| 👤 | `<Users />` | 구직자, 사용자 |
| 🏢 | `<Building2 />` | 구인처, 병원 |
| 💼 | `<Briefcase />` | 구직자 배지 |
| ✉️ | `<Mail />` | 이메일 |
| 📱 | `<Phone />` | 전화번호 |
| ✨ | `<Sparkles />` | AI, 특별 기능 |
| → | `<ArrowRight />` | CTA 화살표 |
| ← | `<ArrowLeft />` | 뒤로가기 |
| ✓ | `<CheckCircle />` | 완료, 체크 |
| 🔒 | `<Lock />` | 보안, 로그인 |
| ↻ | `<RefreshCw />` | 새로고침 |
| ↓ | `<Download />` | 다운로드 |
| ☰ | `<Menu />` | 모바일 메뉴 |
| ✕ | `<X />` | 닫기 |

### 8.3 아이콘 크기

```tsx
// 소형 (버튼 내부, 배지)
<Icon className="w-3 h-3" />
<Icon className="w-4 h-4" />

// 중형 (입력 필드, 리스트)
<Icon className="w-5 h-5" />

// 대형 (카드 아이콘)
<Icon className="w-6 h-6" />

// 특대형 (히어로, 완료 화면)
<Icon className="w-8 h-8" />
<Icon className="w-10 h-10" />
```

---

## 9. 그림자 (Shadows)

| 레벨 | Tailwind | 용도 |
|------|----------|------|
| sm | `shadow-sm` | 스탯 카드, 작은 요소 |
| default | `shadow` | 일반 카드 |
| lg | `shadow-lg` | 주요 카드 |
| xl | `shadow-xl` | 호버 시 카드 |
| 2xl | `shadow-2xl` | 모달, 폼 카드 |

---

## 10. 스크롤 동작

### Smooth Scrolling

```css
html {
  scroll-behavior: smooth;
}
```

### Custom Scrollbar

```css
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #F8F9FA;
}

::-webkit-scrollbar-thumb {
  background: #6B7280;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #1A2B45;
}
```
