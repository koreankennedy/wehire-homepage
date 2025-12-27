import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "WeHire 개인정보처리방침",
};

export default function PrivacyPage() {
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
            개인정보처리방침
          </h1>
          <p className="text-[#6B7280] mb-8">최종 수정일: 2026년 1월 1일</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <p className="text-[#6B7280] leading-relaxed">
                WeHire(이하 &quot;회사&quot;)는 이용자의 개인정보를 중요시하며, 「개인정보 보호법」 등 관련 법령을 준수하고 있습니다. 회사는 개인정보처리방침을 통해 이용자가 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보 보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#1A2B45] mb-4">
                제1조 (수집하는 개인정보 항목)
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다:
              </p>
              <div className="bg-[#F8F9FA] rounded-xl p-4 mb-4">
                <h3 className="font-semibold text-[#1A2B45] mb-2">필수 수집 항목</h3>
                <ul className="list-disc list-inside text-[#6B7280] space-y-1">
                  <li>이메일 주소</li>
                </ul>
              </div>
              <div className="bg-[#F8F9FA] rounded-xl p-4">
                <h3 className="font-semibold text-[#1A2B45] mb-2">선택 수집 항목</h3>
                <ul className="list-disc list-inside text-[#6B7280] space-y-1">
                  <li>이름</li>
                  <li>전화번호</li>
                  <li>가입 유형 (구직자/구인처)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#1A2B45] mb-4">
                제2조 (개인정보의 수집 및 이용 목적)
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                회사는 수집한 개인정보를 다음의 목적을 위해 이용합니다:
              </p>
              <ul className="list-disc list-inside text-[#6B7280] space-y-2">
                <li>서비스 제공 및 운영</li>
                <li>서비스 오픈 안내 및 마케팅 정보 제공</li>
                <li>이용자 문의 응대 및 고객 지원</li>
                <li>서비스 개선 및 신규 서비스 개발</li>
                <li>이용자 식별 및 본인 확인</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#1A2B45] mb-4">
                제3조 (개인정보의 보유 및 이용 기간)
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                회사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관련 법령에 의해 보존할 필요가 있는 경우 아래와 같이 관련 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다:
              </p>
              <ul className="list-disc list-inside text-[#6B7280] space-y-2">
                <li>계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)</li>
                <li>대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래법)</li>
                <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래법)</li>
                <li>웹사이트 방문 기록: 3개월 (통신비밀보호법)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#1A2B45] mb-4">
                제4조 (개인정보의 제3자 제공)
              </h2>
              <p className="text-[#6B7280] leading-relaxed">
                회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다:
              </p>
              <ul className="list-disc list-inside text-[#6B7280] space-y-2 mt-2">
                <li>이용자가 사전에 동의한 경우</li>
                <li>법령의 규정에 의하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#1A2B45] mb-4">
                제5조 (개인정보의 파기)
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                회사는 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
              </p>
              <ul className="list-disc list-inside text-[#6B7280] space-y-2">
                <li>전자적 파일 형태: 복구 및 재생이 불가능한 방법으로 파기</li>
                <li>종이 문서 형태: 분쇄기로 분쇄하거나 소각</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#1A2B45] mb-4">
                제6조 (이용자의 권리와 행사 방법)
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                이용자는 언제든지 다음과 같은 개인정보 보호 관련 권리를 행사할 수 있습니다:
              </p>
              <ul className="list-disc list-inside text-[#6B7280] space-y-2">
                <li>개인정보 열람 요구</li>
                <li>오류 등이 있을 경우 정정 요구</li>
                <li>삭제 요구</li>
                <li>처리 정지 요구</li>
              </ul>
              <p className="text-[#6B7280] leading-relaxed mt-4">
                위 권리 행사는 회사에 대해 서면, 전자우편 등을 통하여 하실 수 있으며, 회사는 이에 대해 지체 없이 조치하겠습니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#1A2B45] mb-4">
                제7조 (개인정보의 안전성 확보 조치)
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:
              </p>
              <ul className="list-disc list-inside text-[#6B7280] space-y-2">
                <li>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육</li>
                <li>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 보안프로그램 설치</li>
                <li>물리적 조치: 전산실, 자료보관실 등의 접근 통제</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#1A2B45] mb-4">
                제8조 (개인정보 보호책임자)
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다:
              </p>
              <div className="bg-[#F8F9FA] rounded-xl p-4">
                <p className="text-[#1A2B45] font-semibold">개인정보 보호책임자</p>
                <ul className="text-[#6B7280] mt-2 space-y-1">
                  <li>성명: 한선우</li>
                  <li>직책: 대표</li>
                  <li>연락처: 010-7931-8589</li>
                  <li>이메일: sun@fordentistry.ai</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-[#1A2B45] mb-4">
                제9조 (개인정보처리방침의 변경)
              </h2>
              <p className="text-[#6B7280] leading-relaxed">
                본 개인정보처리방침은 법령, 정책 또는 보안기술의 변경에 따라 내용의 추가, 삭제 및 수정이 있을 수 있으며, 변경 시에는 시행일 최소 7일 전부터 서비스 내 공지사항을 통해 공지할 것입니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1A2B45] mb-4">
                부칙
              </h2>
              <p className="text-[#6B7280] leading-relaxed">
                본 개인정보처리방침은 2026년 1월 1일부터 시행됩니다.
              </p>
            </section>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8 text-center text-[#6B7280]">
          <p>
            개인정보 관련 문의사항이 있으시면{" "}
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
