import { ChevronRight } from "lucide-react";
import PriorityBadge from "./PriorityBadge";

type PipelineRowProps = {
  name: string;
  product: string;
  date: string;
  status: string;
  priority: "High" | "Medium" | "Low";
};

export default function PipelineRow({
  name,
  product,
  date,
  status,
  priority,
}: PipelineRowProps) {
  return (
    <div
      className="
        grid
        grid-cols-[260px_380px_220px_40px]
        items-center
        gap-8
        border-b
        border-[#E8ECEA]
        py-8
      "
    >
      {/* Customer */}
      <div className="min-w-0">
        <h3 className="text-[18px] font-normal leading-[28px] text-[#004237]">
          {name}
        </h3>

        <p className="mt-2 text-[18px] font-semibold leading-[28px] text-[#00836C]">
          {product}
        </p>
      </div>

      {/* Date & Status */}
      <div className="min-w-0">
        <p className="text-[18px] font-medium leading-[28px] text-[#4A4A57]">
          {date}
        </p>

        <p className="mt-2 text-[18px] font-semibold leading-[28px] text-[#00836C]">
          {status}
        </p>
      </div>

      {/* Priority */}
      <div className="flex justify-center">
        <PriorityBadge priority={priority} />
      </div>

      {/* Arrow */}
      <button
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          text-[#202020]
          transition-transform
          duration-200
          hover:translate-x-1
        "
      >
        <ChevronRight size={32} strokeWidth={2.4} />
      </button>
    </div>
  );
}