type Priority = "High" | "Medium" | "Low";

type PriorityBadgeProps = {
  priority: Priority;
};

const badgeStyles = {
  High: {
    border: "border-[#FF5A5A]",
    bg: "bg-[#FFF8F8]",
    text: "text-[#FF4D4F]",
  },

  Medium: {
    border: "border-[#FF9F43]",
    bg: "bg-[#FFF9F2]",
    text: "text-[#FF8A00]",
  },

  Low: {
    border: "border-[#52C41A]",
    bg: "bg-[#F6FFF2]",
    text: "text-[#389E0D]",
  },
};

export default function PriorityBadge({
  priority,
}: PriorityBadgeProps) {
  const style = badgeStyles[priority];

  return (
    <div
      className={`
        inline-flex
        h-[44px]
        min-w-[170px]
        items-center
        justify-center
        rounded-full
        border
        px-6
        whitespace-nowrap
        ${style.border}
        ${style.bg}
      `}
    >
      <span
        className={`
          text-[16px]
          font-medium
          leading-none
          ${style.text}
        `}
      >
        {priority} Priority
      </span>
    </div>
  );
}