"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Camera, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import StatsCounter from "@/components/ui/StatsCounter";

const profileFeatures = [
  {
    icon: TrendingUp,
    title: "병원 매출",
    description: "연 매출 추이 및 성장성 그래프",
    mockData: "연 매출 12억 / 전년 대비 +15%",
  },
  {
    icon: Users,
    title: "이직률",
    description: "최근 1년 입·퇴사자 현황",
    mockData: "이직률 5% 미만 / 평균 근속 3.2년",
  },
  {
    icon: Camera,
    title: "현장 데이터",
    description: "연차 구성 및 병원 내부 실물 사진",
    mockData: "시니어 40% / 주니어 60%",
  },
];

// 월별 입사/퇴사 데이터 (12개월)
const monthlyData = [
  { month: "1월", 입사: 2, 퇴사: 1 },
  { month: "2월", 입사: 1, 퇴사: 0 },
  { month: "3월", 입사: 3, 퇴사: 1 },
  { month: "4월", 입사: 1, 퇴사: 0 },
  { month: "5월", 입사: 2, 퇴사: 0 },
  { month: "6월", 입사: 2, 퇴사: 1 },
  { month: "7월", 입사: 1, 퇴사: 0 },
  { month: "8월", 입사: 2, 퇴사: 0 },
  { month: "9월", 입사: 3, 퇴사: 1 },
  { month: "10월", 입사: 1, 퇴사: 0 },
  { month: "11월", 입사: 2, 퇴사: 0 },
  { month: "12월", 입사: 1, 퇴사: 0 },
];

export default function SuperProfileSection() {
  return (
    <section id="seeker" className="py-20 md:py-32 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#48CBB0]/10 text-[#48CBB0] rounded-full text-sm font-medium mb-4">
            구직자 전용
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2B45] mb-4">
            더 이상 카페나 커뮤니티를
            <br />
            <span className="text-[#48CBB0]">헤매지 마세요</span>
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            익명 게시판의 소문 대신 위하이어가 검증한
            <br className="hidden md:block" />
            <span className="font-semibold text-[#1A2B45]">10만개</span> 병원의 진짜 데이터를 공개합니다.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#1A2B45]">
              <StatsCounter end={104664} />
            </div>
            <p className="text-sm text-[#6B7280] mt-1">전국 병원 데이터</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#48CBB0]">
              <StatsCounter end={100} suffix="+" />
            </div>
            <p className="text-sm text-[#6B7280] mt-1">보상 조건 항목</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#1A2B45]">
              3.2<span className="text-lg">년</span>
            </div>
            <p className="text-sm text-[#6B7280] mt-1">평균 근속연수</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">
              <StatsCounter end={5} suffix="%" />
            </div>
            <p className="text-sm text-[#6B7280] mt-1">상위 병원 이직률</p>
          </div>
        </motion.div>

        {/* Phone Mockups */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {profileFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Phone Header */}
              <div className="bg-[#1A2B45] p-4 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#48CBB0]/10 rounded-lg">
                    <feature.icon className="w-5 h-5 text-[#48CBB0]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A2B45]">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-sm text-[#6B7280] mb-4">
                  {feature.description}
                </p>

                {/* Mock Chart/Data */}
                <div className="bg-[#F8F9FA] rounded-xl p-4 mb-4">
                  {feature.title === "병원 매출" && (
                    <div>
                      {/* 상위 % 뱃지 */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-[#6B7280]">규모 대비</span>
                        <span className="px-2 py-1 bg-[#D4AF37] text-white text-xs font-bold rounded-full">
                          상위 10%
                        </span>
                      </div>
                      {/* 3개년 막대 차트 */}
                      <div className="flex items-end justify-center gap-6 h-24">
                        {[
                          { year: "2022", height: 40, amount: "8.2억" },
                          { year: "2023", height: 55, amount: "10.5억" },
                          { year: "2024", height: 72, amount: "12.8억" },
                        ].map((data, i) => (
                          <div key={i} className="flex flex-col items-center">
                            <span className="text-[10px] font-semibold text-[#1A2B45] mb-1">{data.amount}</span>
                            <motion.div
                              className="w-12 bg-[#48CBB0] rounded-t"
                              initial={{ height: 0 }}
                              whileInView={{ height: data.height }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: i * 0.15 }}
                            />
                            <span className="text-[10px] text-[#6B7280] mt-1">{data.year}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {feature.title === "이직률" && (
                    <div className="space-y-2">
                      {/* 근속률 강조 배지 */}
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-bold rounded-full">
                          근속률 상위 5%
                        </span>
                        <div className="flex gap-3 text-[10px]">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-[#48CBB0] rounded-sm" />
                            <span className="text-[#6B7280]">입사</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-[#EF4444] rounded-sm" />
                            <span className="text-[#6B7280]">퇴사</span>
                          </div>
                        </div>
                      </div>
                      {/* 막대 차트 */}
                      <div className="flex items-end justify-between gap-0.5 h-16">
                        {monthlyData.map((data, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center">
                            <div className="flex gap-px items-end h-12">
                              <motion.div
                                className="w-1.5 bg-[#48CBB0] rounded-t"
                                initial={{ height: 0 }}
                                whileInView={{ height: `${data.입사 * 25}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                              />
                              <motion.div
                                className="w-1.5 bg-[#EF4444] rounded-t"
                                initial={{ height: 0 }}
                                whileInView={{ height: `${data.퇴사 * 25}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 + 0.02 }}
                              />
                            </div>
                            <span className="text-[7px] text-[#6B7280] mt-0.5">{data.month.replace("월", "")}</span>
                          </div>
                        ))}
                      </div>
                      {/* 요약 통계 */}
                      <div className="flex justify-between text-[10px] pt-1 border-t border-gray-100">
                        <span className="text-[#6B7280]">연간 입사 <span className="text-[#48CBB0] font-bold">21명</span></span>
                        <span className="text-[#6B7280]">연간 퇴사 <span className="text-[#EF4444] font-bold">4명</span></span>
                        <span className="text-[#6B7280]">이직률 <span className="text-[#1A2B45] font-bold">5%</span></span>
                      </div>
                    </div>
                  )}
                  {feature.title === "현장 데이터" && (
                    <div className="space-y-3">
                      {/* 연차 구성 */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-[#1A2B45]/10 rounded-lg py-3 flex items-center justify-center text-sm text-[#1A2B45] font-medium">
                          시니어 40%
                        </div>
                        <div className="bg-[#48CBB0]/20 rounded-lg py-3 flex items-center justify-center text-sm text-[#48CBB0] font-medium">
                          주니어 60%
                        </div>
                      </div>
                      {/* 내부 사진 갤러리 */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-[#6B7280]">병원 내부 사진</span>
                          <span className="text-xs text-[#48CBB0] font-medium">12장 +</span>
                        </div>
                        <div className="grid grid-cols-4 gap-1">
                          {[
                            "🏥", "💺", "🦷", "✨"
                          ].map((emoji, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-lg"
                            >
                              {emoji}
                            </motion.div>
                          ))}
                        </div>
                        <p className="text-[10px] text-[#6B7280] mt-2 text-center">
                          진료실, 대기실, 휴게실 등 실제 사진 공개
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-xs text-[#6B7280] flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  {feature.mockData}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

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
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#48CBB0] text-white font-medium rounded-xl hover:bg-[#3bb89d] transition-colors group"
          >
            전국 병원 데이터 탐색
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
