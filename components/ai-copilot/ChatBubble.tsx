type ChatBubbleProps = {
  type: "ai" | "user";
  title?: string;
  message: string;
};

export default function ChatBubble({
  type,
  title,
  message,
}: ChatBubbleProps) {
  const isAI = type === "ai";

  return (
    <div className={`flex ${isAI ? "justify-start" : "justify-end"}`}>
      <div
        className={`
          max-w-[70%]
          rounded-[18px]
          px-5
          py-4
          ${
            isAI
              ? "bg-[#DDF7F2] text-[#004237]"
              : "bg-[#FFF1E2] text-[#004237]"
          }
        `}
      >
        {title && (
          <p className="mb-1 text-[16px] font-semibold">
            {title}
          </p>
        )}

        <p className="text-[16px] leading-7">
          {message}
        </p>
      </div>
    </div>
  );
}