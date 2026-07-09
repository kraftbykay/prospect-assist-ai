"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

export default function Modal({
  open,
  onClose,
  title,
  children,
}: ModalProps) {
  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/35
        backdrop-blur-sm
        p-10
      "
    >
      <div
        className="
          flex
          max-h-[92vh]
          w-full
          max-w-[980px]
          flex-col
          overflow-hidden
          rounded-[28px]
          bg-white
          shadow-[0_24px_80px_rgba(0,0,0,0.18)]
        "
      >
        {/* Header */}

        <div className="flex items-center justify-between px-12 pt-12">

          <h2 className="text-[56px] font-normal leading-none text-[#00836C]">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              transition
              hover:bg-[#F5F7F6]
            "
          >
            <X
              size={28}
              className="text-[#004237]"
            />
          </button>

        </div>

        {/* Body */}

        <div className="mt-10 flex-1 overflow-y-auto px-12">
          {children}
        </div>

      </div>
    </div>
  );
}