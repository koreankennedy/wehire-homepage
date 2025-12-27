"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const workflowSteps = [
  {
    step: "01",
    title: "매칭 의뢰",
    description: "원하는 조건 입력",
    detail: "경력, 급여, 근무 조건 등 상세 요구사항 설정",
    emoji: "📋",
  },
  {
    step: "02",
    title: "AI 후보자 리스트업",
    description: "슈퍼 프로필 확인",
    detail: "AI 매칭 후보자의 상세 프로필 및 AI 인터뷰 요청",
    emoji: "🤖",
  },
  {
    step: "03",
    title: "AI 인터뷰 결과",
    description: "채용 의뢰",
    detail: "AI 인터뷰 분석 결과 및 리뷰 데이터 확인",
    emoji: "🎯",
  },
  {
    step: "04",
    title: "채용 확정",
    description: "전자계약 체결",
    detail: "최종 채용 확정 및 근로계약서 전자 서명",
    emoji: "✍️",
  },
];

const skippedSteps = [
  { label: "채용공고 작성", emoji: "📝" },
  { label: "서류 검토", emoji: "📑" },
  { label: "인터뷰 일정 조율", emoji: "📅" },
  { label: "연봉 협상", emoji: "💰" },
];

// 각 단계별 앱 화면 컴포넌트
const StepScreens = {
  // 1단계: 매칭 의뢰
  0: () => (
    <div className="p-4 space-y-4">
      <h4 className="font-bold text-[#1A2B45] text-sm">채용 조건 설정</h4>
      <div className="space-y-3">
        <div>
          <label className="text-xs text-[#6B7280] mb-1 block">직종</label>
          <div className="bg-[#F8F9FA] rounded-lg p-3 text-sm text-[#1A2B45]">치과위생사</div>
        </div>
        <div>
          <label className="text-xs text-[#6B7280] mb-1 block">경력</label>
          <div className="flex gap-2">
            <div className="flex-1 bg-[#48CBB0]/20 rounded-lg p-2 text-xs text-center text-[#48CBB0] font-medium border-2 border-[#48CBB0]">3년 이상</div>
            <div className="flex-1 bg-[#F8F9FA] rounded-lg p-2 text-xs text-center text-[#6B7280]">5년 이상</div>
            <div className="flex-1 bg-[#F8F9FA] rounded-lg p-2 text-xs text-center text-[#6B7280]">무관</div>
          </div>
        </div>
        <div>
          <label className="text-xs text-[#6B7280] mb-1 block">희망 연봉</label>
          <div className="bg-[#F8F9FA] rounded-lg p-3 text-sm text-[#1A2B45]">3,500만원 ~ 4,500만원</div>
        </div>
        <button className="w-full bg-[#48CBB0] text-white py-3 rounded-xl font-medium text-sm">
          AI 매칭 시작하기
        </button>
      </div>
    </div>
  ),
  // 2단계: AI 후보자 리스트업 + 슈퍼 프로필 확인 + AI 인터뷰 요청
  1: () => (
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-bold text-[#1A2B45] text-sm">AI 추천 후보자</h4>
        <span className="text-xs text-[#48CBB0]">12명 매칭</span>
      </div>
      {[
        { name: "김OO", score: 95, experience: "5년차", status: "인터뷰 요청" },
        { name: "이OO", score: 88, experience: "3년차", status: "프로필 확인" },
        { name: "박OO", score: 82, experience: "4년차", status: "대기중" },
      ].map((candidate, i) => (
        <div key={i} className="flex items-center gap-3 p-3 bg-[#F8F9FA] rounded-xl">
          <div className="w-12 h-12 bg-[#48CBB0]/20 rounded-full flex items-center justify-center text-[#48CBB0] font-bold text-sm">
            {candidate.score}점
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-medium text-[#1A2B45]">{candidate.name}</span>
              <span className="text-xs text-[#6B7280]">{candidate.experience}</span>
            </div>
            <div className="flex gap-1 mt-1">
              <span className="px-1.5 py-0.5 bg-[#48CBB0]/10 text-[#48CBB0] text-[9px] rounded">DNA분석</span>
              <span className="px-1.5 py-0.5 bg-[#1A2B45]/10 text-[#1A2B45] text-[9px] rounded">경력검증</span>
            </div>
          </div>
          <button className={`px-2 py-1.5 rounded-lg text-[10px] font-medium ${
            i === 0 ? "bg-[#48CBB0] text-white" : "bg-white border border-[#E5E7EB] text-[#6B7280]"
          }`}>
            {candidate.status}
          </button>
        </div>
      ))}
      <div className="bg-[#1A2B45]/5 rounded-xl p-3 mt-2">
        <p className="text-[10px] text-[#6B7280] text-center">
          💡 슈퍼 프로필에서 상세 경력과 DNA 진단 결과를 확인하세요
        </p>
      </div>
    </div>
  ),
  // 3단계: AI 인터뷰 결과 확인 + 리뷰 데이터 + 채용의뢰
  2: () => (
    <div className="p-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-[#1A2B45]/10 rounded-full flex items-center justify-center text-xl">
          👩‍⚕️
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-[#1A2B45] text-sm">김OO</h4>
          <p className="text-xs text-[#6B7280]">치과위생사 · 5년차</p>
        </div>
        <span className="px-2 py-1 bg-[#48CBB0] text-white text-[10px] rounded-full font-medium">인터뷰 완료</span>
      </div>

      {/* AI 인터뷰 결과 요약 */}
      <div className="bg-gradient-to-r from-[#48CBB0]/10 to-[#1A2B45]/10 rounded-xl p-3 mb-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold text-[#1A2B45]">AI 인터뷰 분석</span>
          <span className="px-1.5 py-0.5 bg-[#D4AF37] text-white text-[9px] rounded">A등급</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="text-lg font-bold text-[#48CBB0]">92</p>
            <p className="text-[9px] text-[#6B7280]">직무역량</p>
          </div>
          <div>
            <p className="text-lg font-bold text-[#1A2B45]">88</p>
            <p className="text-[9px] text-[#6B7280]">커뮤니케이션</p>
          </div>
          <div>
            <p className="text-lg font-bold text-[#D4AF37]">95</p>
            <p className="text-[9px] text-[#6B7280]">성장가능성</p>
          </div>
        </div>
      </div>

      {/* 리뷰 데이터 */}
      <div className="bg-[#F8F9FA] rounded-xl p-3 mb-3">
        <p className="text-xs font-medium text-[#1A2B45] mb-2">💬 이전 직장 리뷰</p>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-[10px] text-[#48CBB0]">★★★★★</span>
            <p className="text-[10px] text-[#6B7280]">&ldquo;환자 응대가 친절하고 업무 처리가 빠름&rdquo;</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[10px] text-[#48CBB0]">★★★★☆</span>
            <p className="text-[10px] text-[#6B7280]">&ldquo;팀워크가 좋고 책임감이 강함&rdquo;</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button className="py-2.5 border border-[#EF4444] text-[#EF4444] rounded-lg text-xs font-medium">Drop</button>
        <button className="py-2.5 bg-[#1A2B45] text-white rounded-lg text-xs font-medium">채용 의뢰</button>
      </div>
    </div>
  ),
  // 4단계: 채용 확정 + 전자계약 체결
  3: () => (
    <div className="p-4">
      <div className="text-center py-2">
        <div className="w-16 h-16 bg-[#48CBB0] rounded-full flex items-center justify-center mx-auto mb-3">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h4 className="font-bold text-[#1A2B45] text-base mb-1">채용 확정!</h4>
        <p className="text-xs text-[#6B7280] mb-3">김OO님의 채용이 확정되었습니다</p>
      </div>

      {/* 절약한 시간/비용 */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-[#48CBB0]/10 rounded-xl p-3 text-center">
          <p className="text-xs text-[#6B7280] mb-1">절약한 시간</p>
          <p className="text-lg font-bold text-[#48CBB0]">120시간</p>
        </div>
        <div className="bg-[#D4AF37]/10 rounded-xl p-3 text-center">
          <p className="text-xs text-[#6B7280] mb-1">절약한 비용</p>
          <p className="text-lg font-bold text-[#D4AF37]">742만원</p>
        </div>
      </div>

      <div className="bg-[#F8F9FA] rounded-xl p-3 mb-3 space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-[#6B7280]">입사 예정일</span>
          <span className="text-[#1A2B45] font-medium">2024.02.01</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-[#6B7280]">연봉</span>
          <span className="text-[#1A2B45] font-medium">4,200만원</span>
        </div>
      </div>

      {/* 전자계약 섹션 */}
      <div className="bg-[#1A2B45] rounded-xl p-3 mb-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white text-xs font-medium">📝 전자 근로계약서</span>
          <span className="px-1.5 py-0.5 bg-[#48CBB0] text-white text-[9px] rounded">서명 완료</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-[#48CBB0]" />
            </div>
            <span className="text-[10px] text-white/80">양측 서명 완료</span>
          </div>
          <button className="px-2 py-1 bg-white/10 text-white text-[10px] rounded">
            계약서 보기
          </button>
        </div>
      </div>

      <button className="w-full py-2.5 bg-[#48CBB0] text-white rounded-xl text-xs font-medium">
        온보딩 일정 확인하기
      </button>
    </div>
  ),
};

export default function MatchingWorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);

  const handlePrev = () => {
    setActiveStep((prev) => (prev === 0 ? workflowSteps.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev === workflowSteps.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="employer" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-[#1A2B45]/5 text-[#1A2B45] rounded-full text-sm font-medium mb-4">
            실시간 매칭 워크플로우
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2B45] mb-4">
            번거로운 과정은
            <br />
            <span className="text-[#48CBB0]">AI가 대신합니다</span>
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            채용공고 작성, 인터뷰, 연봉협상까지
            <br />
            원장님은 최종 결정만 하세요.
          </p>
        </motion.div>

        {/* Skipped Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-center text-sm text-[#6B7280] mb-4">AI가 대신하는 과정</p>
          <div className="flex flex-wrap justify-center gap-3">
            {skippedSteps.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full border border-red-100"
              >
                <span>{item.emoji}</span>
                <span className="text-sm text-red-400 line-through">{item.label}</span>
                <X className="w-4 h-4 text-red-400" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Workflow Steps - Interactive */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveStep(index)}
              onMouseEnter={() => setActiveStep(index)}
              className={`relative cursor-pointer transition-all duration-300 rounded-2xl p-5 border-2 ${
                activeStep === index
                  ? "bg-white shadow-lg border-[#48CBB0]"
                  : "bg-[#F8F9FA] border-transparent hover:bg-white hover:shadow-md"
              }`}
            >
              {/* Step Number & Emoji */}
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                  activeStep === index ? "bg-[#48CBB0] text-white" : "bg-[#1A2B45] text-white"
                }`}>
                  {step.step}
                </div>
                <span className="text-2xl">{step.emoji}</span>
              </div>

              <h3 className="text-lg font-bold text-[#1A2B45] mb-1">
                {step.title}
              </h3>
              <p className={`font-medium text-sm mb-1 ${activeStep === index ? "text-[#48CBB0]" : "text-[#6B7280]"}`}>
                {step.description}
              </p>
              <p className="text-xs text-[#6B7280]">
                {step.detail}
              </p>

              {/* Active Indicator */}
              {activeStep === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#48CBB0]"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* App Preview with Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F8F9FA] rounded-2xl p-6 md:p-8 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* App Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Phone Header */}
                <div className="bg-[#1A2B45] p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">WeHire</span>
                    <span className="text-[#48CBB0] text-xs">Employer</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                  </div>
                </div>

                {/* Dynamic Screen Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="min-h-[320px]"
                  >
                    {StepScreens[activeStep as keyof typeof StepScreens]()}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#F8F9FA] transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-[#1A2B45]" />
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {workflowSteps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        activeStep === index ? "bg-[#48CBB0] w-6" : "bg-[#D1D5DB]"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#F8F9FA] transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-[#1A2B45]" />
                </button>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-2xl font-bold text-[#1A2B45] mb-2">
                {workflowSteps[activeStep].title}
              </h3>
              <p className="text-[#48CBB0] font-medium mb-4">{workflowSteps[activeStep].description}</p>

              <ul className="space-y-3 text-[#6B7280] mb-6">
                {activeStep === 0 && (
                  <>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#48CBB0] mt-0.5 shrink-0" />
                      <span>원하는 경력, 급여 조건을 선택하세요</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#48CBB0] mt-0.5 shrink-0" />
                      <span>근무 환경, 복지 조건도 세부 설정 가능</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#48CBB0] mt-0.5 shrink-0" />
                      <span>AI가 최적의 후보자를 자동으로 매칭</span>
                    </li>
                  </>
                )}
                {activeStep === 1 && (
                  <>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#48CBB0] mt-0.5 shrink-0" />
                      <span>AI가 산출한 매칭 스코어로 한눈에 비교</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#48CBB0] mt-0.5 shrink-0" />
                      <span>슈퍼 프로필로 DNA 진단 및 경력 검증</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#48CBB0] mt-0.5 shrink-0" />
                      <span>관심 후보자에게 AI 인터뷰 요청</span>
                    </li>
                  </>
                )}
                {activeStep === 2 && (
                  <>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#48CBB0] mt-0.5 shrink-0" />
                      <span>AI 인터뷰 분석 결과 및 등급 확인</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#48CBB0] mt-0.5 shrink-0" />
                      <span>이전 직장 동료 리뷰 데이터 열람</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#48CBB0] mt-0.5 shrink-0" />
                      <span>채용 의뢰 또는 Drop 결정</span>
                    </li>
                  </>
                )}
                {activeStep === 3 && (
                  <>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#48CBB0] mt-0.5 shrink-0" />
                      <span>채용 조건 최종 확정</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#48CBB0] mt-0.5 shrink-0" />
                      <span>전자 근로계약서 자동 생성 및 서명</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#48CBB0] mt-0.5 shrink-0" />
                      <span>온보딩 일정 자동 안내</span>
                    </li>
                  </>
                )}
              </ul>

              {/* 단계별 하이라이트 박스 */}
              {activeStep === 0 && (
                <div className="p-4 bg-amber-50 rounded-xl">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-bold text-[#D4AF37] text-sm mb-1">채용 공고 작성 불필요</p>
                      <p className="text-xs text-[#6B7280]">조건만 입력하면 AI가 자동으로 매칭합니다.</p>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <p className="text-[10px] text-[#6B7280]">이 단계에서 절약</p>
                      <p className="text-xs font-bold text-[#48CBB0]">20시간 · 100만원</p>
                    </div>
                  </div>
                </div>
              )}
              {activeStep === 1 && (
                <div className="p-4 bg-[#48CBB0]/10 rounded-xl">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-bold text-[#48CBB0] text-sm mb-1">서류 검토 자동화</p>
                      <p className="text-xs text-[#6B7280]">검증된 후보자만 슈퍼 프로필로 확인하세요.</p>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <p className="text-[10px] text-[#6B7280]">이 단계에서 절약</p>
                      <p className="text-xs font-bold text-[#48CBB0]">40시간 · 200만원</p>
                    </div>
                  </div>
                </div>
              )}
              {activeStep === 2 && (
                <div className="p-4 bg-[#1A2B45]/5 rounded-xl">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-bold text-[#1A2B45] text-sm mb-1">면접 일정 조율 불필요</p>
                      <p className="text-xs text-[#6B7280]">AI가 24시간 자동으로 인터뷰를 진행합니다.</p>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <p className="text-[10px] text-[#6B7280]">이 단계에서 절약</p>
                      <p className="text-xs font-bold text-[#48CBB0]">30시간 · 250만원</p>
                    </div>
                  </div>
                </div>
              )}
              {activeStep === 3 && (
                <div className="p-4 bg-gradient-to-r from-[#48CBB0]/10 to-[#D4AF37]/10 rounded-xl">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-bold text-[#D4AF37] text-sm mb-1">연봉 협상 자동 완료</p>
                      <p className="text-xs text-[#6B7280]">전자계약까지 원스톱으로 처리됩니다.</p>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <p className="text-[10px] text-[#6B7280]">이 단계에서 절약</p>
                      <p className="text-xs font-bold text-[#D4AF37]">30시간 · 192만원</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#D4AF37]/20 flex justify-between items-center">
                    <span className="text-xs font-medium text-[#1A2B45]">총 절약 효과</span>
                    <span className="text-sm font-bold text-[#D4AF37]">120시간 · 742만원</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A2B45] text-white font-medium rounded-xl hover:bg-[#2a3b55] transition-colors group"
          >
            매칭 시뮬레이션 체험
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-sm text-[#6B7280] mt-3">
            실제 데이터로 체험해보세요. 무료입니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
