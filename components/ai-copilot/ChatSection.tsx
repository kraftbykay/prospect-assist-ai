"use client";
import { Circle } from "lucide-react";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/Button";

import ChatBubble from "./ChatBubble";
import MessageInput from "./MessageInput";

export default function ChatSection() {
    const router = useRouter();
  return (
    <div className="rounded-[24px] border border-[#E6ECE9] bg-white p-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-6">

          <h1 className="text-[34px] font-semibold text-[#004237]">
            AI Copilot
          </h1>

          <div className="flex items-center gap-2">

            <Circle
              size={10}
              fill="#38A700"
              stroke="#38A700"
            />

            <span className="text-[18px] font-semibold text-[#38A700]">
              Active
            </span>

          </div>

        </div>

        <Button
          variant="secondary"
          fullWidth={false}
          showArrow={false}
        >
          View Suggested Questions
        </Button>

      </div>

      <hr className="my-8 border-[#E6ECE9]" />

      {/* Conversation */}

      <div className="space-y-8">

        <ChatBubble
          type="ai"
          title="Hello Raman, I&apos;m your AI Copilot."
          message="Let&apos;s onboard Kabir Khan. I&apos;ll guide you through the process and collect the required information."
        />

        <ChatBubble
          type="ai"
          title="Let&apos;s start with basic information."
          message="What is Kabir&apos;s date of birth?"
        />

        <ChatBubble
          type="user"
          message="15 March 1990"
        />

        <ChatBubble
          type="ai"
          title="Thanks! Got it."
          message="What is Kabir&apos;s current employment type?"
        />

        <ChatBubble
          type="user"
          message="Salaried"
        />

        <ChatBubble
          type="ai"
          title="Great!"
          message="What is Kabir&apos;s monthly income in hand?"
        />

        <ChatBubble
          type="user"
          message="80,000"
        />

      </div>

      {/* Final AI Card */}

      <div className="mt-10 rounded-[20px] bg-[#DDF7F2] p-6">

        <h3 className="text-[18px] font-semibold text-[#004237]">
          Great!
        </h3>

        <p className="mt-3 leading-7 text-[#004237]">
          I&apos;ve captured the customer&apos;s basic profile.
          Let&apos;s verify the customer&apos;s documents
          before generating recommendations.
        </p>

        <div className="mt-6">

          <Button
            fullWidth={false}
              onClick={() => router.push("/document-verification")}

          >
            Continue to Document Verification
          </Button>

        </div>

      </div>

      <MessageInput />

    </div>
  );
} 