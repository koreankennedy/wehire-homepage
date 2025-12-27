import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A2B45] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                We<span className="text-[#48CBB0]">Hire</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              전국 104,664개 병원 데이터 기반 AI 채용 혁신.
              치과위생사, 간호사 등 의료 전문직을 위한 맞춤 매칭 서비스.
            </p>
            <p className="text-sm text-gray-500">
              서울특별시 강남구 역삼로 19길 25
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-[#48CBB0]">서비스</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#seeker" className="hover:text-white transition-colors">
                  구직자 서비스
                </Link>
              </li>
              <li>
                <Link href="#employer" className="hover:text-white transition-colors">
                  구인처 서비스
                </Link>
              </li>
              <li>
                <Link href="#ai-solution" className="hover:text-white transition-colors">
                  AI 솔루션
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-white transition-colors">
                  요금제
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-[#48CBB0]">고객지원</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  문의하기
                </Link>
              </li>
              <li>
                <a href="tel:010-7931-8589" className="hover:text-white transition-colors">
                  010-7931-8589
                </a>
              </li>
              <li>
                <a href="mailto:sun@fordentistry.ai" className="hover:text-white transition-colors">
                  sun@fordentistry.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; 2025 WeHire. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="/terms" className="hover:text-white transition-colors">
                이용약관
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                개인정보처리방침
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
