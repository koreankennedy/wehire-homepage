"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Mail, Phone, Building2, Briefcase, RefreshCw, Download, ArrowLeft, Lock, LogOut } from "lucide-react";
import Link from "next/link";

interface WaitlistEntry {
  id: number;
  email: string;
  phone: string | null;
  name: string | null;
  user_type: string | null;
  created_at: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<"all" | "seeker" | "employer">("all");

  // Check authentication on page load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/admin/auth");
        const data = await response.json();
        setIsAuthenticated(data.authenticated);
      } catch {
        setIsAuthenticated(false);
      } finally {
        setIsCheckingAuth(false);
      }
    };
    checkAuth();
  }, []);

  // Fetch entries when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchEntries();
    }
  }, [isAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setIsLoggingIn(true);

    try {
      const response = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true);
        setPassword("");
      } else {
        setLoginError(data.error || "로그인에 실패했습니다.");
      }
    } catch {
      setLoginError("로그인 중 오류가 발생했습니다.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    setIsAuthenticated(false);
    setEntries([]);
  };

  const fetchEntries = async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch("/api/admin/waitlist");
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      setEntries(data.data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "데이터를 불러오는데 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const filteredEntries = entries.filter((entry) => {
    if (filter === "all") return true;
    return entry.user_type === filter;
  });

  const downloadCSV = () => {
    const headers = ["ID", "이름", "이메일", "전화번호", "유형", "등록일시"];
    const rows = filteredEntries.map((entry) => [
      entry.id,
      entry.name || "-",
      entry.email,
      entry.phone || "-",
      entry.user_type === "seeker" ? "구직자" : entry.user_type === "employer" ? "구인처" : "-",
      new Date(entry.created_at).toLocaleString("ko-KR"),
    ]);

    const csvContent =
      "\uFEFF" +
      [headers, ...rows].map((row) => row.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `wehire_waitlist_${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
  };

  const stats = {
    total: entries.length,
    seekers: entries.filter((e) => e.user_type === "seeker").length,
    employers: entries.filter((e) => e.user_type === "employer").length,
  };

  // Loading state
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-[#1A2B45] flex items-center justify-center">
        <div className="text-white">로딩 중...</div>
      </div>
    );
  }

  // Login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1A2B45] to-[#2a3b55] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#1A2B45] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-[#1A2B45]">Admin Login</h1>
            <p className="text-[#6B7280] mt-2">관리자 비밀번호를 입력하세요</p>
          </div>

          <form onSubmit={handleLogin}>
            {loginError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm text-center">
                {loginError}
              </div>
            )}

            <div className="mb-6">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1A2B45] focus:border-transparent text-center text-lg tracking-widest"
              />
            </div>

            <button
              type="submit"
              disabled={isLoggingIn || !password}
              className="w-full py-3 bg-[#1A2B45] text-white font-medium rounded-xl hover:bg-[#2a3b55] transition-colors disabled:opacity-50"
            >
              {isLoggingIn ? "로그인 중..." : "로그인"}
            </button>
          </form>

          <Link
            href="/"
            className="block text-center mt-6 text-[#6B7280] hover:text-[#1A2B45] text-sm"
          >
            홈으로 돌아가기
          </Link>
        </motion.div>
      </div>
    );
  }

  // Admin dashboard
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-[#6B7280] hover:text-[#1A2B45]">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-[#1A2B45]">WeHire Admin</h1>
                <p className="text-sm text-[#6B7280]">사전등록 관리</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={fetchEntries}
                disabled={isLoading}
                className="flex items-center gap-2 px-4 py-2 text-[#6B7280] hover:text-[#1A2B45] hover:bg-gray-100 rounded-lg transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
                새로고침
              </button>
              <button
                onClick={downloadCSV}
                disabled={entries.length === 0}
                className="flex items-center gap-2 px-4 py-2 bg-[#1A2B45] text-white rounded-lg hover:bg-[#2a3b55] transition-colors disabled:opacity-50"
              >
                <Download className="w-4 h-4" />
                CSV 다운로드
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                로그아웃
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#48CBB0]/10 rounded-xl">
                <Users className="w-6 h-6 text-[#48CBB0]" />
              </div>
              <div>
                <p className="text-sm text-[#6B7280]">총 등록</p>
                <p className="text-2xl font-bold text-[#1A2B45]">{stats.total}명</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#48CBB0]/10 rounded-xl">
                <Briefcase className="w-6 h-6 text-[#48CBB0]" />
              </div>
              <div>
                <p className="text-sm text-[#6B7280]">구직자</p>
                <p className="text-2xl font-bold text-[#48CBB0]">{stats.seekers}명</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#1A2B45]/10 rounded-xl">
                <Building2 className="w-6 h-6 text-[#1A2B45]" />
              </div>
              <div>
                <p className="text-sm text-[#6B7280]">구인처</p>
                <p className="text-2xl font-bold text-[#1A2B45]">{stats.employers}명</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          {[
            { key: "all", label: "전체" },
            { key: "seeker", label: "구직자" },
            { key: "employer", label: "구인처" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as typeof filter)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === tab.key
                  ? "bg-[#1A2B45] text-white"
                  : "bg-white text-[#6B7280] hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-xl shadow-sm overflow-hidden"
        >
          {error ? (
            <div className="p-8 text-center text-red-500">{error}</div>
          ) : isLoading ? (
            <div className="p-8 text-center text-[#6B7280]">로딩 중...</div>
          ) : filteredEntries.length === 0 ? (
            <div className="p-8 text-center text-[#6B7280]">등록된 데이터가 없습니다.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#F8F9FA] border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                      이름
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                      이메일
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                      전화번호
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                      유형
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                      등록일시
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredEntries.map((entry, index) => (
                    <motion.tr
                      key={entry.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-[#F8F9FA]"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
                        {entry.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-medium text-[#1A2B45]">
                          {entry.name || "-"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-[#6B7280]" />
                          <span className="text-sm text-[#1A2B45]">{entry.email}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-[#6B7280]" />
                          <span className="text-sm text-[#6B7280]">{entry.phone || "-"}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {entry.user_type === "seeker" ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[#48CBB0]/10 text-[#48CBB0]">
                            <Briefcase className="w-3 h-3" />
                            구직자
                          </span>
                        ) : entry.user_type === "employer" ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[#1A2B45]/10 text-[#1A2B45]">
                            <Building2 className="w-3 h-3" />
                            구인처
                          </span>
                        ) : (
                          <span className="text-sm text-[#6B7280]">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B7280]">
                        {new Date(entry.created_at).toLocaleString("ko-KR")}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
