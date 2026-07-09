import { CalendarDays, Plus } from "lucide-react";

type HeroSectionProps = {
  onAddProspect: () => void;
};

export default function HeroSection({
  onAddProspect,
}: HeroSectionProps) {
  return (
    <div className="rounded-[20px] bg-white p-10 shadow-[0_4px_20px_rgba(0,66,55,0.06)]">
      <div className="flex flex-col">

        {/* Heading */}
        <h1 className="text-[60px] font-medium leading-[1.02] tracking-[-2px] text-[#004237]">
          Good morning, Raman!
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-[22px] leading-8 text-[#004237]">
          Here&pos;s the overview for today.
        </p>

        {/* Actions */}
        <div className="mt-10 flex items-center gap-4">

          {/* Date */}
          <div className="flex h-[60px] w-[220px] items-center justify-center gap-3 rounded-2xl bg-[#D8F3EF]">
            <CalendarDays
              size={18}
              className="text-[#004237]"
            />

            <span className="text-[16px] font-medium text-[#004237]">
              27 Jun 2026, Sat
            </span>
          </div>

          {/* Add Prospect */}
          <button
            onClick={onAddProspect}
            className="
              flex
              h-[60px]
              w-[220px]
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-[#00836C]
              text-[18px]
              font-medium
              text-white
              transition-all
              duration-200
              hover:bg-[#006B59]
            "
          >
            <Plus size={20} />

            Add Prospect
          </button>

        </div>

      </div>
    </div>
  );
}