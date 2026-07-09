"use client";

import { ChevronDown } from "lucide-react";

type SelectProps = {
  title: string;
  value: string;
  helperText: string;
  options?: string[];
};

export default function Select({
  title,
  value,
  helperText,
}: SelectProps) {
  return (
    <div className="w-full">
      <div
        className="
          relative
          h-[104px]
          rounded-t-[20px]
          border-b
          border-[#004237]
          bg-[#EBF8F6]
          px-8
        "
      >
        {/* Title */}
        <label
          className="
            absolute
            left-8
            top-5
            text-[18px]
            font-medium
            text-[#004237]
            pointer-events-none
          "
        >
          {title}
        </label>

        {/* Selected Value */}
        <div
          className="
            absolute
            left-8
            bottom-5
            text-[22px]
            font-normal
            text-[#004237]
          "
        >
          {value}
        </div>

        {/* Arrow */}
        <ChevronDown
          size={28}
          className="
            absolute
            right-8
            bottom-5
            text-[#202020]
          "
        />
      </div>

      {/* Supporting Text */}
      <p
        className="
          mt-3
          pl-8
          text-[16px]
          text-[#004237]
        "
      >
        {helperText}
      </p>
    </div>
  );
}