import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "WeHire | AI 기반 의료 전문직 채용 플랫폼",
  description: "전국 104,664개 병원 전수 조사 완료. AI가 주도하는 채용 혁신의 시작. 치과위생사, 간호사 등 의료 전문직을 위한 맞춤 매칭 서비스.",
  keywords: ["WeHire", "위하이어", "치과위생사", "채용", "AI 채용", "의료 채용", "병원 채용"],
  openGraph: {
    title: "WeHire | AI 기반 의료 전문직 채용 플랫폼",
    description: "전국 104,664개 병원 전수 조사 완료. AI가 주도하는 채용 혁신의 시작.",
    type: "website",
    locale: "ko_KR",
  },
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
