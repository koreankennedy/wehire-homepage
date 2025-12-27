"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Mail, Phone, User, Building2, Briefcase, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    userType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "등록 중 오류가 발생했습니다.");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "등록 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1A2B45] to-[#2a3b55]">
        <Header />
        <div className="min-h-screen flex items-center justify-center px-4 pt-16 md:pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 bg-[#48CBB0] rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-2xl font-bold text-[#1A2B45] mb-3">
            사전등록이 완료되었습니다!
          </h1>
          <p className="text-[#6B7280] mb-6">
            서비스 오픈 시 입력하신 연락처로
            <br />
            가장 먼저 안내해 드리겠습니다.
          </p>
          <div className="bg-[#F8F9FA] rounded-xl p-4 mb-6">
            <p className="text-sm text-[#6B7280]">등록 정보</p>
            <p className="font-medium text-[#1A2B45]">{formData.email}</p>
            {formData.phone && (
              <p className="text-sm text-[#6B7280]">{formData.phone}</p>
            )}
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#48CBB0] hover:text-[#3bb89d] font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            홈으로 돌아가기
          </Link>
        </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A2B45] to-[#2a3b55]">
      <Header />
      <div className="min-h-screen flex items-center justify-center px-4 py-12 pt-24 md:pt-28">
      <div className="max-w-4xl w-full">

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-white/90 text-sm">Coming Soon</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              서비스 준비 중입니다
            </h1>
            <p className="text-lg text-white/70 mb-8">
              WeHire가 더 나은 서비스로 찾아뵙겠습니다.
              <br />
              사전등록 하시면 오픈 시 가장 먼저 안내해 드립니다.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#48CBB0]/20 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4 text-[#48CBB0]" />
                </div>
                <div>
                  <p className="text-white font-medium">얼리버드 혜택</p>
                  <p className="text-white/60 text-sm">사전등록 고객에게 특별 혜택 제공</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#48CBB0]/20 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4 text-[#48CBB0]" />
                </div>
                <div>
                  <p className="text-white font-medium">우선 안내</p>
                  <p className="text-white/60 text-sm">서비스 오픈 즉시 알림 발송</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#48CBB0]/20 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4 text-[#48CBB0]" />
                </div>
                <div>
                  <p className="text-white font-medium">무료 체험</p>
                  <p className="text-white/60 text-sm">프리미엄 기능 무료 체험 기회</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl"
            >
              <h2 className="text-xl font-bold text-[#1A2B45] mb-6">
                사전등록 신청
              </h2>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                  {error}
                </div>
              )}

              {/* User Type Selection */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-[#1A2B45] mb-2">
                  가입 유형
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, userType: "seeker" })}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      formData.userType === "seeker"
                        ? "border-[#48CBB0] bg-[#48CBB0]/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Briefcase className={`w-6 h-6 mx-auto mb-2 ${
                      formData.userType === "seeker" ? "text-[#48CBB0]" : "text-[#6B7280]"
                    }`} />
                    <p className={`text-sm font-medium ${
                      formData.userType === "seeker" ? "text-[#48CBB0]" : "text-[#1A2B45]"
                    }`}>
                      구직자
                    </p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, userType: "employer" })}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      formData.userType === "employer"
                        ? "border-[#1A2B45] bg-[#1A2B45]/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Building2 className={`w-6 h-6 mx-auto mb-2 ${
                      formData.userType === "employer" ? "text-[#1A2B45]" : "text-[#6B7280]"
                    }`} />
                    <p className={`text-sm font-medium ${
                      formData.userType === "employer" ? "text-[#1A2B45]" : "text-[#1A2B45]"
                    }`}>
                      구인처 (병원)
                    </p>
                  </button>
                </div>
              </div>

              {/* Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#1A2B45] mb-2">
                  이름 (선택)
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="홍길동"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#48CBB0] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#1A2B45] mb-2">
                  이메일 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@email.com"
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#48CBB0] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#1A2B45] mb-2">
                  전화번호 (선택)
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="010-1234-5678"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#48CBB0] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !formData.email}
                className="w-full py-4 bg-[#1A2B45] text-white font-medium rounded-xl hover:bg-[#2a3b55] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "등록 중..." : "사전등록 신청하기"}
              </button>

              <p className="text-xs text-[#6B7280] text-center mt-4">
                입력하신 정보는 서비스 안내 목적으로만 사용됩니다.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
      </div>
    </div>
  );
}
