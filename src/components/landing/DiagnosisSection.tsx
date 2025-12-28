"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { User, Building2, Heart, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const diagnosisSteps = [
  {
    id: 1,
    icon: User,
    title: "나의 DNA 진단",
    subtitle: "나는 어떤 유형일까?",
    description: "25문항으로 당신의 직장 스타일을 분석합니다",
    color: "#48CBB0",
    // 나의 좌표
    myPosition: { x: 60, y: 35 },
    showHospital: false,
    showMatch: false,
  },
  {
    id: 2,
    icon: Building2,
    title: "현재 병원과 비교",
    subtitle: "왜 맞지 않았을까?",
    description: "현재/과거 병원과의 갭을 데이터로 분석합니다",
    color: "#EF4444",
    // 나의 좌표 + 병원 좌표
    myPosition: { x: 60, y: 35 },
    hospitalPosition: { x: 25, y: 70 },
    showHospital: true,
    showMatch: false,
    gapAnalysis: {
      items: ["워라밸 불일치", "성장 기회 부족", "급여 기대치 차이"],
    },
  },
  {
    id: 3,
    icon: Heart,
    title: "맞춤 병원 매칭",
    subtitle: "나와 딱 맞는 병원은?",
    description: "90% 이상 일치하는 소울메이트 병원을 찾습니다",
    color: "#D4AF37",
    // 나의 좌표 + 매칭 병원 좌표 (가까움)
    myPosition: { x: 60, y: 35 },
    matchPosition: { x: 65, y: 30 },
    showHospital: false,
    showMatch: true,
    matchScore: 94,
  },
];

export default function DiagnosisSection() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = diagnosisSteps[activeStep];

  return (
    <section
      id="seeker"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(#1A2B45 1px, transparent 1px),
              linear-gradient(90deg, #1A2B45 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-[#48CBB0]/10 text-[#1A2B45] rounded-full text-sm font-medium mb-4">
            구직자를 위한 AI 진단
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2B45] mb-4">
            나를 알면, <span className="text-[#48CBB0]">병원이 보인다</span>
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            3단계 AI 진단으로 나와 병원의 궁합을 정확히 분석하고,
            <br className="hidden md:block" />
            완벽히 맞는 병원을 찾아드립니다.
          </p>
        </motion.div>

        {/* Step Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-[#F8F9FA] rounded-2xl p-2 gap-2">
            {diagnosisSteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`flex items-center gap-2 px-3 md:px-6 py-3 rounded-xl font-medium transition-all ${
                  activeStep === index
                    ? "bg-white text-[#1A2B45] shadow-md"
                    : "text-[#6B7280] hover:text-[#1A2B45]"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    activeStep === index
                      ? "bg-[#48CBB0] text-white"
                      : "bg-[#E5E7EB] text-[#6B7280]"
                  }`}
                >
                  {step.id}
                </span>
                <span className="text-xs md:text-sm whitespace-nowrap">{step.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Matrix Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-[#F8F9FA] to-white rounded-3xl p-6 shadow-lg border border-gray-100">
              {/* Axis Lines */}
              <div className="absolute inset-6 flex items-center justify-center">
                <div className="w-full h-[2px] bg-gradient-to-r from-[#1A2B45]/10 via-[#1A2B45]/30 to-[#1A2B45]/10" />
              </div>
              <div className="absolute inset-6 flex items-center justify-center">
                <div className="h-full w-[2px] bg-gradient-to-b from-[#1A2B45]/10 via-[#1A2B45]/30 to-[#1A2B45]/10" />
              </div>

              {/* Quadrant Labels */}
              <div className="absolute top-8 left-8 text-xs text-[#6B7280] font-medium">
                워라밸 중시
              </div>
              <div className="absolute top-8 right-8 text-xs text-[#6B7280] font-medium">
                성장 중시
              </div>
              <div className="absolute bottom-8 left-8 text-xs text-[#6B7280] font-medium">
                안정 중시
              </div>
              <div className="absolute bottom-8 right-8 text-xs text-[#6B7280] font-medium">
                수익 중시
              </div>

              {/* Axis Labels */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] text-[#9CA3AF] uppercase tracking-wider">
                나의 성향
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-[#9CA3AF] uppercase tracking-wider">
                병원 문화
              </div>

              <AnimatePresence mode="wait">
                {/* My Position - Always visible */}
                <motion.div
                  key={`my-${activeStep}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="absolute"
                  style={{
                    left: `calc(${currentStep.myPosition.x}% - 20px)`,
                    top: `calc(${currentStep.myPosition.y}% - 20px)`,
                  }}
                >
                  <div className="relative">
                    <div className="w-10 h-10 bg-[#48CBB0] rounded-full flex items-center justify-center shadow-lg">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-[#48CBB0]">
                      나
                    </div>
                    <div className="absolute inset-0 bg-[#48CBB0] rounded-full animate-ping opacity-20" />
                  </div>
                </motion.div>

                {/* Hospital Position - Step 2 */}
                {currentStep.showHospital && currentStep.hospitalPosition && (
                  <motion.div
                    key="hospital"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                    className="absolute"
                    style={{
                      left: `calc(${currentStep.hospitalPosition.x}% - 20px)`,
                      top: `calc(${currentStep.hospitalPosition.y}% - 20px)`,
                    }}
                  >
                    <div className="relative">
                      <div className="w-10 h-10 bg-[#EF4444] rounded-full flex items-center justify-center shadow-lg">
                        <Building2 className="w-5 h-5 text-white" />
                      </div>
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-[#EF4444]">
                        현재 병원
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Gap Line - Step 2 */}
                {currentStep.showHospital && currentStep.hospitalPosition && (
                  <motion.svg
                    key="gap-line"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    exit={{ pathLength: 0, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{ padding: "24px" }}
                  >
                    <motion.line
                      x1={`${currentStep.myPosition.x}%`}
                      y1={`${currentStep.myPosition.y}%`}
                      x2={`${currentStep.hospitalPosition.x}%`}
                      y2={`${currentStep.hospitalPosition.y}%`}
                      stroke="#EF4444"
                      strokeWidth="2"
                      strokeDasharray="8 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                  </motion.svg>
                )}

                {/* Match Position - Step 3 */}
                {currentStep.showMatch && currentStep.matchPosition && (
                  <motion.div
                    key="match"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                    className="absolute"
                    style={{
                      left: `calc(${currentStep.matchPosition.x}% - 20px)`,
                      top: `calc(${currentStep.matchPosition.y}% - 20px)`,
                    }}
                  >
                    <div className="relative">
                      <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg">
                        <Heart className="w-5 h-5 text-white" />
                      </div>
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-[#D4AF37]">
                        매칭 병원
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Match Connection - Step 3 */}
                {currentStep.showMatch && currentStep.matchPosition && (
                  <motion.div
                    key="match-circle"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.2 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="absolute rounded-full border-4 border-[#D4AF37]"
                    style={{
                      left: `calc(${(currentStep.myPosition.x + currentStep.matchPosition.x) / 2}% - 60px)`,
                      top: `calc(${(currentStep.myPosition.y + currentStep.matchPosition.y) / 2}% - 60px)`,
                      width: "120px",
                      height: "120px",
                    }}
                  />
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right: Step Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step Badge */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
                  style={{
                    backgroundColor: currentStep.color + "15",
                    color: currentStep.color,
                  }}
                >
                  <currentStep.icon className="w-4 h-4" />
                  STEP {currentStep.id}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-[#1A2B45] mb-2">
                  {currentStep.title}
                </h3>
                <p
                  className="text-xl font-medium mb-4"
                  style={{ color: currentStep.color }}
                >
                  &ldquo;{currentStep.subtitle}&rdquo;
                </p>
                <p className="text-[#6B7280] mb-6">{currentStep.description}</p>

                {/* Step-specific content */}
                {activeStep === 0 && (
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 p-3 bg-[#F8F9FA] rounded-xl">
                      <div className="w-8 h-8 bg-[#48CBB0]/20 rounded-lg flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#48CBB0]" />
                      </div>
                      <span className="text-[#1A2B45]">워라밸 vs 성장 성향 분석</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#F8F9FA] rounded-xl">
                      <div className="w-8 h-8 bg-[#48CBB0]/20 rounded-lg flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#48CBB0]" />
                      </div>
                      <span className="text-[#1A2B45]">수익 vs 안정 우선순위 파악</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#F8F9FA] rounded-xl">
                      <div className="w-8 h-8 bg-[#48CBB0]/20 rounded-lg flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#48CBB0]" />
                      </div>
                      <span className="text-[#1A2B45]">나만의 직장 DNA 좌표 생성</span>
                    </div>
                  </div>
                )}

                {activeStep === 1 && currentStep.gapAnalysis && (
                  <div className="space-y-3 mb-6">
                    <p className="text-sm text-[#6B7280] mb-2">불일치 분석 결과</p>
                    {currentStep.gapAnalysis.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 bg-red-50 rounded-xl"
                      >
                        <div className="w-8 h-8 bg-[#EF4444]/20 rounded-lg flex items-center justify-center">
                          <span className="text-[#EF4444] text-sm font-bold">!</span>
                        </div>
                        <span className="text-[#1A2B45]">{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeStep === 2 && currentStep.matchScore && (
                  <div className="mb-6">
                    <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#D4AF37]/5 rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[#6B7280]">매칭 점수</span>
                        <span className="text-3xl font-bold text-[#D4AF37]">
                          {currentStep.matchScore}%
                        </span>
                      </div>
                      <div className="w-full bg-[#E5E7EB] rounded-full h-3">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${currentStep.matchScore}%` }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] h-3 rounded-full"
                        />
                      </div>
                      <p className="text-sm text-[#6B7280] mt-3">
                        상위 <span className="font-bold text-[#D4AF37]">1%</span> 궁합의 병원을 찾았습니다!
                      </p>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center gap-4">
                  {activeStep < diagnosisSteps.length - 1 ? (
                    <button
                      onClick={() => setActiveStep(activeStep + 1)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A2B45] text-white font-medium rounded-xl hover:bg-[#2a3b55] transition-colors"
                    >
                      다음 단계
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      href="/waitlist"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-white font-medium rounded-xl hover:bg-[#C9A432] transition-colors"
                    >
                      지금 진단받기
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                  {activeStep > 0 && (
                    <button
                      onClick={() => setActiveStep(activeStep - 1)}
                      className="px-6 py-3 text-[#6B7280] font-medium hover:text-[#1A2B45] transition-colors"
                    >
                      이전
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 pt-12 border-t border-gray-100"
        >
          <p className="text-[#6B7280] mb-4">
            3분이면 충분합니다. 무료로 나의 직장 DNA를 확인해보세요.
          </p>
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#48CBB0] text-white font-medium rounded-xl hover:bg-[#3bb89d] transition-colors group"
          >
            무료 DNA 진단 시작하기
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
