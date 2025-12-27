"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "서비스 소개", href: "/#services" },
  { label: "구직자", href: "/#seeker" },
  { label: "구인처", href: "/#employer" },
  { label: "AI 솔루션", href: "/#ai-solution" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#1A2B45]">
              We<span className="text-[#48CBB0]">Hire</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#6B7280] hover:text-[#1A2B45] transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/waitlist"
              className="px-4 py-2 text-[#1A2B45] font-medium hover:bg-gray-100 rounded-lg transition-colors"
            >
              로그인
            </Link>
            <Link
              href="/waitlist"
              className="px-4 py-2 bg-[#1A2B45] text-white font-medium rounded-lg hover:bg-[#2a3b55] transition-colors"
            >
              시작하기
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#1A2B45]"
            aria-label="메뉴 열기"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 transition-all duration-300",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <nav className="flex flex-col p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="py-3 text-[#6B7280] hover:text-[#1A2B45] font-medium border-b border-gray-50"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-4">
            <Link
              href="/waitlist"
              className="py-3 text-center text-[#1A2B45] font-medium border border-[#1A2B45] rounded-lg"
            >
              로그인
            </Link>
            <Link
              href="/waitlist"
              className="py-3 text-center bg-[#1A2B45] text-white font-medium rounded-lg"
            >
              시작하기
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
