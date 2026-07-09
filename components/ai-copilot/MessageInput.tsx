"use client";

import { SendHorizontal } from "lucide-react";

export default function MessageInput() {
  return (
    <div className="mt-10">
      <div
        className="
          flex
          items-center
          gap-4
          rounded-full
          border
          border-[#D9E5E2]
          bg-white
          px-6
          py-4
        "
      >
        <input
          type="text"
          placeholder="Type your response..."
          className="
            flex-1
            border-none
            bg-transparent
            outline-none

            text-[16px]
            text-[#004237]

            placeholder:text-[#7A8A87]
          "
        />

        <button
          type="button"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-[#00836C]
            transition
            hover:bg-[#006B59]
          "
        >
          <SendHorizontal
            size={20}
            className="text-white"
          />
        </button>
      </div>

      <p
        className="
          mt-4
          text-center
          text-[14px]
          text-[#6B7A76]
        "
      >
        AI Copilot can make mistakes. Please verify critical information.
      </p>
    </div>
  );
}