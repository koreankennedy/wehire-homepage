import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const siteUrl = "https://homepage-eta-dusky.vercel.app";

export const metadata: Metadata = {
  // 기본 메타데이터
  title: {
    default: "WeHire | AI 기반 의료 전문직 채용 플랫폼",
    template: "%s | WeHire",
  },
  description:
    "전국 104,664개 병원 전수 조사 완료. AI가 주도하는 채용 혁신의 시작. 치과위생사, 간호사 등 의료 전문직을 위한 맞춤 매칭 서비스.",
  keywords: [
    "WeHire",
    "위하이어",
    "치과위생사 채용",
    "간호사 채용",
    "AI 채용",
    "의료 채용",
    "병원 채용",
    "치과 채용",
    "의료 전문직",
    "채용 플랫폼",
    "AI 매칭",
    "병원 구인",
    "의료인 구직",
  ],

  // 사이트 정보
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },

  // 로봇 설정
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph
  openGraph: {
    title: "WeHire | AI 기반 의료 전문직 채용 플랫폼",
    description:
      "전국 104,664개 병원 전수 조사 완료. AI가 주도하는 채용 혁신의 시작. 치과위생사, 간호사 등 의료 전문직을 위한 맞춤 매칭 서비스.",
    url: siteUrl,
    siteName: "WeHire",
    type: "website",
    locale: "ko_KR",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "WeHire | AI 기반 의료 전문직 채용 플랫폼",
    description:
      "전국 104,664개 병원 전수 조사 완료. AI가 주도하는 채용 혁신의 시작.",
  },

  // 기타
  authors: [{ name: "WeHire" }],
  creator: "WeHire",
  publisher: "WeHire",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // 앱 메타데이터
  applicationName: "WeHire",
  category: "recruitment",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#1A2B45" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
