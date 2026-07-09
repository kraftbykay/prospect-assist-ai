import { LucideIcon } from "lucide-react";

type SidebarItemProps = {
  icon: LucideIcon;
  label: string;
  active?: boolean;
};

export default function SidebarItem({
  icon: Icon,
  label,
  active = false,
}: SidebarItemProps) {
  return (
    <button
      className={`
        relative
        mx-4
        flex
        h-[52px]
        items-center
        gap-4
        rounded-[8px]
        px-5
        text-left
        transition-all
        duration-200

        ${
          active
            ? "bg-[#D8F3EF] text-[#004237]"
            : "text-[#004237] hover:bg-[#F3FAF8]"
        }
      `}
    >
      {active && (
        <div className="absolute left-0 top-0 h-full w-[3px] rounded-r bg-[#00836C]" />
      )}

      <Icon
        size={20}
        strokeWidth={2}
      />

      <span className="text-[15px] font-medium">
        {label}
      </span>
    </button>
  );
}