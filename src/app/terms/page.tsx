import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "이용약관",
  description: "WeHire 서비스 이용약관",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#1A2B45] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          홈으로
        </Link>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A2B45] mb-2">
            이용약관
          </h1>
          <p className="text-[#6B7280] mb-8">최종 수정일: 2025년 1월 1일</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#1A2B45] mb-4">
                제1조 (목적)
              </h2>
              <p className="text-[#6B7280] leading-relaxed">
                본 약관은 WeHire(이하 &quot;회사&quot;)가 제공하는 AI 기반 의료 전문직 채용 플랫폼 서비스(이하 &quot;서비스&quot;)의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#1A2B45] mb-4">
                제2조 (정의)
              </h2>
              <ul className="list-disc list-inside text-[#6B7280] space-y-2">
                <li>&quot;서비스&quot;란 회사가 제공하는 AI 기반 채용 매칭, 인터뷰, 브랜딩 등 일체의 서비스를 말합니다.</li>
                <li>&quot;이용자&quot;란 본 약관에 따라 서비스를 이용하는 구직자 및 구인처를 말합니다.</li>
                <li>&quot;구직자&quot;란 서비스를 통해 취업을 희망하는 의료 전문직 종사자를 말합니다.</li>
                <li>&quot;구인처&quot;란 서비스를 통해 인재를 채용하고자 하는 병원, 의료기관을 말합니다.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#1A2B45] mb-4">
                제3조 (약관의 효력 및 변경)
              </h2>
              <ol className="list-decimal list-inside text-[#6B7280] space-y-2">
                <li>본 약관은 서비스를 이용하고자 하는 모든 이용자에게 적용됩니다.</li>
                <li>회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있습니다.</li>
                <li>약관이 변경되는 경우 회사는 변경 내용을 서비스 내 공지사항에 게시합니다.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#1A2B45] mb-4">
                제4조 (서비스의 제공)
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                회사는 다음과 같은 서비스를 제공합니다:
              </p>
              <ul className="list-disc list-inside text-[#6B7280] space-y-2">
                <li>AI 기반 구직자-구인처 매칭 서비스</li>
                <li>구직자 DNA 진단 및 분석 서비스</li>
                <li>병원 슈퍼 프로필 정보 제공</li>
                <li>AI 인터뷰 및 채용 브랜딩 서비스</li>
                <li>기타 회사가 정하는 서비스</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#1A2B45] mb-4">
                제5조 (이용자의 의무)
              </h2>
              <ol className="list-decimal list-inside text-[#6B7280] space-y-2">
                <li>이용자는 본 약관 및 회사가 정한 규정을 준수하여야 합니다.</li>
                <li>이용자는 정확하고 진실된 정보를 제공하여야 합니다.</li>
                <li>이용자는 서비스를 부정한 목적으로 이용하지 않아야 합니다.</li>
                <li>이용자는 타인의 권리를 침해하는 행위를 하지 않아야 합니다.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#1A2B45] mb-4">
                제6조 (회사의 의무)
              </h2>
              <ol className="list-decimal list-inside text-[#6B7280] space-y-2">
                <li>회사는 관련 법령을 준수하고, 계속적이고 안정적으로 서비스를 제공하기 위해 노력합니다.</li>
                <li>회사는 이용자의 개인정보를 보호하기 위해 개인정보처리방침을 수립하고 준수합니다.</li>
                <li>회사는 이용자로부터 제기되는 의견이나 불만이 정당하다고 인정되는 경우 적절한 조치를 취합니다.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#1A2B45] mb-4">
                제7조 (서비스 이용의 제한)
              </h2>
              <p className="text-[#6B7280] leading-relaxed">
                회사는 다음 각 호에 해당하는 경우 서비스 이용을 제한할 수 있습니다:
              </p>
              <ul className="list-disc list-inside text-[#6B7280] space-y-2 mt-2">
                <li>타인의 정보를 도용하거나 허위 정보를 등록한 경우</li>
                <li>서비스 운영을 고의로 방해한 경우</li>
                <li>법령 또는 본 약관을 위반한 경우</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#1A2B45] mb-4">
                제8조 (면책조항)
              </h2>
              <ol className="list-decimal list-inside text-[#6B7280] space-y-2">
                <li>회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 등 불가항력적인 사유로 서비스를 제공할 수 없는 경우 책임이 면제됩니다.</li>
                <li>회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대해 책임을 지지 않습니다.</li>
                <li>회사는 이용자가 서비스를 통해 얻은 정보로 인한 손해에 대해 책임을 지지 않습니다.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#1A2B45] mb-4">
                제9조 (분쟁해결)
              </h2>
              <ol className="list-decimal list-inside text-[#6B7280] space-y-2">
                <li>회사와 이용자 간에 발생한 분쟁에 관한 소송은 대한민국 법을 준거법으로 합니다.</li>
                <li>회사와 이용자 간에 발생한 분쟁에 관한 소송은 서울중앙지방법원을 전속 관할법원으로 합니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1A2B45] mb-4">
                부칙
              </h2>
              <p className="text-[#6B7280] leading-relaxed">
                본 약관은 2025년 1월 1일부터 시행됩니다.
              </p>
            </section>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8 text-center text-[#6B7280]">
          <p>
            약관에 대한 문의사항이 있으시면{" "}
            <a href="mailto:sun@fordentistry.ai" className="text-[#48CBB0] hover:underline">
              sun@fordentistry.ai
            </a>
            로 연락주세요.
          </p>
        </div>
      </div>
    </div>
  );
}
