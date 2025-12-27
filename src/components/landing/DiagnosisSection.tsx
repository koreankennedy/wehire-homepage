"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Clock, AlertTriangle, Heart, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

const diagnosisSteps = [
  {
    icon: AlertTriangle,
    phase: "과거",
    title: "흑역사 진단",
    description: "왜 그 병원은 힘들었을까?",
    detail: "데이터로 분석하는 충돌 보고서",
    color: "#EF4444",
    bgColor: "bg-red-50",
  },
  {
    icon: Clock,
    phase: "현재",
    title: "상태 진단",
    description: "지금 나에게 중요한 건?",
    detail: "돈 vs 시간 vs 성장, 나의 스타일 실시간 좌표",
    color: "#48CBB0",
    bgColor: "bg-[#48CBB0]/10",
  },
  {
    icon: Heart,
    phase: "미래",
    title: "스타일 매칭",
    description: "주파수 90% 이상 일치",
    detail: "소울메이트 병원 큐레이션",
    color: "#D4AF37",
    bgColor: "bg-amber-50",
  },
];

export default function DiagnosisSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="diagnosis"
      ref={containerRef}
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(#1A2B45 1px, transparent 1px),
              linear-gradient(90deg, #1A2B45 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
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
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#1A2B45]/5 text-[#1A2B45] rounded-full text-sm font-medium mb-4">
            AI 진단 여정
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2B45] mb-4">
            나를 알면, <span className="text-[#48CBB0]">병원이 보인다</span>
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            25문항 DNA 진단으로 당신만의 직장 스타일을 분석하고,
            완벽히 맞는 병원을 찾아드립니다.
          </p>
        </motion.div>

        {/* 2x2 Matrix Visualization */}
        <div className="relative mb-16">
          <motion.div
            style={{ y, opacity }}
            className="flex justify-center"
          >
            {/* Matrix Grid */}
            <div className="relative w-full max-w-lg aspect-square">
              {/* Axis Lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#1A2B45]/20 to-transparent" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-full w-[2px] bg-gradient-to-b from-transparent via-[#1A2B45]/20 to-transparent" />
              </div>

              {/* Quadrant Labels */}
              <div className="absolute top-4 left-4 text-sm text-[#6B7280]">
                워라밸 중시
              </div>
              <div className="absolute top-4 right-4 text-sm text-[#6B7280]">
                성장 중시
              </div>
              <div className="absolute bottom-4 left-4 text-sm text-[#6B7280]">
                안정 중시
              </div>
              <div className="absolute bottom-4 right-4 text-sm text-[#6B7280]">
                수익 중시
              </div>

              {/* Moving Point */}
              <motion.div
                className="absolute w-6 h-6 bg-[#48CBB0] rounded-full shadow-lg"
                animate={{
                  x: [0, 50, 30, -20, 0],
                  y: [0, -30, 40, -10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  left: "calc(50% - 12px)",
                  top: "calc(50% - 12px)",
                }}
              >
                <div className="absolute inset-0 bg-[#48CBB0] rounded-full animate-ping opacity-30" />
              </motion.div>

              {/* Target Icon */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Target className="w-32 h-32 text-[#1A2B45]/5" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Diagnosis Steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {diagnosisSteps.map((step, index) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${step.bgColor} rounded-2xl p-6 relative overflow-hidden group hover:shadow-lg transition-shadow`}
            >
              {/* Phase Badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
                style={{ backgroundColor: step.color + "20", color: step.color }}
              >
                <step.icon className="w-3 h-3" />
                {step.phase}
              </div>

              <h3 className="text-xl font-bold text-[#1A2B45] mb-2">
                {step.title}
              </h3>
              <p className="text-[#1A2B45] font-medium mb-1">
                &ldquo;{step.description}&rdquo;
              </p>
              <p className="text-sm text-[#6B7280]">{step.detail}</p>

              {/* Arrow decoration */}
              {index < diagnosisSteps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-[#1A2B45]/20" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A2B45] text-white font-medium rounded-xl hover:bg-[#2a3b55] transition-colors group"
          >
            내 충돌 보고서 받기
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-sm text-[#6B7280] mt-3">
            3분이면 충분합니다. 무료로 진단받아보세요.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
