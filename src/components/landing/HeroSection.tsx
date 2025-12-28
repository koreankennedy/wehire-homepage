"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Building2, Sparkles } from "lucide-react";
import Link from "next/link";
import StatsCounter from "@/components/ui/StatsCounter";
import RadarChart from "@/components/ui/RadarChart";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] bg-gradient-to-b from-white to-[#F8F9FA] overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#48CBB0]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#1A2B45]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#48CBB0]/10 text-[#1A2B45] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-[#48CBB0]" />
            AI가 주도하는 채용 혁신
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2B45] mb-6 leading-tight">
            채용의 모든 과정,
            <br />
            <span className="text-[#48CBB0]">AI로 주도하는</span> 혁신의 시작
          </h1>

          <p className="text-lg md:text-xl text-[#6B7280] max-w-3xl mx-auto mb-4">
            전국{" "}
            <span className="font-bold text-[#1A2B45] text-2xl md:text-3xl">
              <StatsCounter end={104664} suffix="개" className="tabular-nums" />
            </span>{" "}
            병원 전수 조사 완료
          </p>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            치과위생사, 간호사 등 의료 전문직을 위한 맞춤 매칭 서비스
          </p>
        </motion.div>

        {/* Split Path Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Seeker Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
          >
            {/* Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#48CBB0]" />

            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#48CBB0]/10 rounded-xl">
                <Users className="w-6 h-6 text-[#48CBB0]" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#1A2B45] mb-1">구직자</h2>
                <p className="text-sm text-[#6B7280]">나에게 맞는 병원 찾기</p>
              </div>
            </div>

            {/* DNA Chart Preview */}
            <div className="mb-6 flex justify-center">
              <RadarChart variant="seeker" />
            </div>

            <p className="text-[#6B7280] mb-6 text-sm leading-relaxed">
              내가 원하는 <span className="font-semibold text-[#1A2B45]">100가지</span> 보상 조건을 맞춤 매칭하는 국내 유일 플랫폼.
              더 이상 카페나 커뮤니티를 헤매지 마세요.
            </p>

            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2 w-full justify-center py-3 bg-[#48CBB0] text-white font-medium rounded-xl hover:bg-[#3bb89d] transition-colors group"
            >
              DNA 진단하기
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Employer Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
          >
            {/* Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#1A2B45]" />

            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#1A2B45]/10 rounded-xl">
                <Building2 className="w-6 h-6 text-[#1A2B45]" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#1A2B45] mb-1">구인처</h2>
                <p className="text-sm text-[#6B7280]">AI로 완벽한 인재 찾기</p>
              </div>
            </div>

            {/* Stats Preview */}
            <div className="mb-6 flex justify-center">
              <RadarChart variant="employer" />
            </div>

            <p className="text-[#6B7280] mb-6 text-sm leading-relaxed">
              연간 채용 비용 <span className="font-semibold text-[#1A2B45]">1,500만 원</span>, 면접에 뺏긴 시간 <span className="font-semibold text-[#1A2B45]">120시간</span>.
              위하이어 AI가 <span className="font-semibold text-[#D4AF37]">88%</span> 이상 즉시 되찾아 드립니다.
            </p>

            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2 w-full justify-center py-3 bg-[#1A2B45] text-white font-medium rounded-xl hover:bg-[#2a3b55] transition-colors group"
            >
              인재 검색하기
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
