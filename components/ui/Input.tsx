"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type InputProps = {
  title: string;
  placeholder: string;
  type?: "text" | "password" | "email";
};

export default function Input({
  title,
  placeholder,
  type = "text",
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="w-full">
      <div
        className="
          relative
          h-[56px]
          rounded-t-[4px]
          border-b
          border-[#004237]
          bg-[#EBF8F6]
          px-4
        "
      >
        {/* Field Title */}
        <label
          className="
            absolute
            left-4
            top-[8px]
            text-[12px]
            font-medium
            leading-4
            tracking-[0.2px]
            text-[#004237]
            pointer-events-none
          "
        >
          {title}
        </label>

        {/* Input */}
        <input
          type={
            isPassword
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          placeholder={placeholder}
          className="
            absolute
            left-4
            right-12
            bottom-[8px]
            bg-transparent
            border-none
            outline-none

            text-[12px]
            font-normal
            leading-4
            tracking-[0.2px]

            text-[#004237]
            placeholder:text-[#004237]
            placeholder:font-normal
          "
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-[#004237]
              transition-colors
              hover:text-[#00836C]
            "
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        )}
      </div>
    </div>
  );
}