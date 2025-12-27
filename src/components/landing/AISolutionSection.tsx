"use client";

import { motion } from "framer-motion";
import { Bot, MessageSquare, Video, FileText, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AISolutionSection() {
  return (
    <section id="ai-solution" className="py-20 md:py-32 bg-[#1A2B45] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#48CBB0]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
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
          <span className="inline-block px-4 py-2 bg-white/10 text-[#48CBB0] rounded-full text-sm font-medium mb-4">
            구인처 전용
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            검증은 신중하게,
            <br />
            <span className="text-[#48CBB0]">채용은 빠르게</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            인터뷰에 쏟던 에너지를 진료 매출로 돌리세요.
            <br />
            AI가 24시간 쉬지 않고 원장님의 눈과 귀가 되어 검증된 인재만 모셔옵니다.
          </p>
        </motion.div>

        {/* AI Dashboard Preview */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* AI Interview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#48CBB0]/20 rounded-xl">
                <Bot className="w-6 h-6 text-[#48CBB0]" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AI 인터뷰</h3>
                <p className="text-sm text-gray-400">채팅 & 화상 면접 자동화</p>
              </div>
            </div>

            {/* Chat Preview */}
            <div className="bg-[#0D1520] rounded-xl p-4 mb-4">
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-2"
                >
                  <div className="w-8 h-8 bg-[#48CBB0] rounded-full flex items-center justify-center text-xs font-bold">
                    AI
                  </div>
                  <div className="bg-white/10 rounded-lg rounded-tl-none p-3 max-w-[80%]">
                    <p className="text-sm">이전 직장에서 가장 보람찼던 경험은 무엇인가요?</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-2 justify-end"
                >
                  <div className="bg-[#48CBB0] rounded-lg rounded-tr-none p-3 max-w-[80%]">
                    <p className="text-sm">소아 환자분들과 신뢰를 쌓아가며...</p>
                  </div>
                </motion.div>
              </div>

              {/* Waveform Animation */}
              <motion.div
                className="mt-4 flex items-center justify-center gap-1 h-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-[#48CBB0] rounded-full"
                    animate={{
                      height: [8, 20 + Math.random() * 12, 8],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.05,
                    }}
                  />
                ))}
              </motion.div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MessageSquare className="w-4 h-4" />
                채팅 면접
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Video className="w-4 h-4" />
                화상 면접
              </div>
            </div>
          </motion.div>

          {/* AI Branding */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#D4AF37]/20 rounded-xl">
                  <FileText className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">AI 채용 브랜딩</h3>
                  <p className="text-sm text-gray-400">콘텐츠 자동 생성 & 배포</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-[#D4AF37] text-white text-xs font-bold rounded-full">
                매주 자동 발행
              </span>
            </div>

            {/* Content Cards Stack */}
            <div className="bg-[#0D1520] rounded-xl p-4 mb-4">
              <div className="space-y-3">
                {/* 블로그 카드 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white/10 rounded-lg p-3 flex gap-3"
                >
                  <div className="w-16 h-12 bg-[#48CBB0]/30 rounded flex items-center justify-center shrink-0">
                    <span className="text-lg">📝</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded">블로그</span>
                      <span className="text-[10px] text-gray-500">네이버 블로그</span>
                    </div>
                    <p className="text-xs text-white truncate">&ldquo;강남 OO치과, 워라밸 좋은 병원 TOP5&rdquo;</p>
                  </div>
                </motion.div>

                {/* 기사 카드 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/10 rounded-lg p-3 flex gap-3"
                >
                  <div className="w-16 h-12 bg-[#D4AF37]/30 rounded flex items-center justify-center shrink-0">
                    <span className="text-lg">📰</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] px-1.5 py-0.5 bg-yellow-500/20 text-yellow-400 rounded">기사</span>
                      <span className="text-[10px] text-gray-500">보도자료</span>
                    </div>
                    <p className="text-xs text-white truncate">&ldquo;OO치과, 직원 복지 강화로 이직률 5% 달성&rdquo;</p>
                  </div>
                </motion.div>

                {/* SNS 카드 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/10 rounded-lg p-3 flex gap-3"
                >
                  <div className="w-16 h-12 bg-pink-500/30 rounded flex items-center justify-center shrink-0">
                    <span className="text-lg">📱</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] px-1.5 py-0.5 bg-pink-500/20 text-pink-400 rounded">SNS</span>
                      <span className="text-[10px] text-gray-500">인스타그램</span>
                    </div>
                    <p className="text-xs text-white truncate">&ldquo;우리 병원 하루 일과 브이로그 🦷✨&rdquo;</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">
                네이버 리뷰 + 내부 데이터 기반 자동 생성
              </p>
              <div className="flex items-center gap-1 text-[#D4AF37]">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-medium">AI 작성</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#48CBB0] mb-2">88%</div>
            <p className="text-gray-400">채용 비용 절감</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">120시간</div>
            <p className="text-gray-400">연간 면접 시간 절약</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
            <p className="text-gray-400">AI 인터뷰 가동</p>
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1A2B45] font-medium rounded-xl hover:bg-gray-100 transition-colors group"
          >
            시스템 도입 문의하기
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
