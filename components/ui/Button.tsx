import { ArrowRight } from "lucide-react";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  showArrow?: boolean;
};

export default function Button({
  children,
  type = "button",
  variant = "primary",
  fullWidth = true,
  showArrow = true,
}: ButtonProps) {
  const baseClasses = `
    flex items-center justify-center gap-3
    h-[60px]
    rounded-[12px]
    px-[18px]
    text-[16px]
    font-medium
    transition-all
    duration-200
    active:scale-[0.98]
  `;

  const variants = {
    primary: `
      bg-[#00836C]
      text-white
      hover:bg-[#006F5D]
      shadow-[0px_4px_12px_rgba(0,131,108,0.20)]
    `,
    secondary: `
      border
      border-[#00836C]
      bg-white
      text-[#00836C]
      hover:bg-[#F4FBF9]
    `,
  };

  return (
    <button
      type={type}
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
      `}
    >
      <span>{children}</span>

      {showArrow && <ArrowRight size={24} strokeWidth={2.2} />}
    </button>
  );
}