import { Bookmark } from "lucide-react";

export default function DailyBrief() {
  return (
    <div className="flex items-start gap-5">

      <Bookmark
        size={22}
        className="mt-1 text-[#004237]"
      />

      <div className="flex-1">

        <h3 className="text-[24px] font-medium text-[#004237]">
          AI Daily Brief
        </h3>

        <p className="mt-6 text-[18px] leading-8 text-[#004237]">
          You have 16 pending follow-ups, 3 high-priority
          prospects, and 2 customers eligible for home loan
          today.
        </p>

        <button
          className="
            mt-6
            text-[18px]
            font-medium
            text-[#00836C]
            hover:underline
          "
        >
          View all insights →
        </button>

      </div>

    </div>
  );
}