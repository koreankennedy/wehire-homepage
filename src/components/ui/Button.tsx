"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200",
          // Variants
          {
            "bg-[#1A2B45] text-white hover:bg-[#2a3b55]": variant === "primary",
            "bg-[#48CBB0] text-white hover:bg-[#3bb89d]": variant === "secondary",
            "border-2 border-[#1A2B45] text-[#1A2B45] hover:bg-[#1A2B45] hover:text-white": variant === "outline",
            "text-[#1A2B45] hover:bg-gray-100": variant === "ghost",
          },
          // Sizes
          {
            "px-3 py-1.5 text-sm": size === "sm",
            "px-5 py-2.5 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
