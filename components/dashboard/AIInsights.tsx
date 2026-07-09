import InsightCard from "./InsightCard";

export default function AIInsights() {
  return (
    <section>

      {/* Heading */}

      <h2 className="text-[24px] font-normal leading-8 text-[#202020]">
        AI Insights
      </h2>

      {/* Cards */}

      <div className="mt-10 space-y-8">

        <InsightCard
          title="High Priority Prospect"
          titleColor="#38A312"
          description="Amit Sharma has uploaded all required documents. Recommended next action: Schedule eligibility discussion."
        />

        <InsightCard
          title="Recommendation"
          titleColor="#FF8A00"
          description="3 prospects are eligible for Premium Savings Account. Explore & recommend relevant products."
        />

        <InsightCard
          title="Risk Alert"
          titleColor="#FF4D4F"
          description="2 prospects have not responded in the last 7 days. Consider a follow up text or message."
        />

      </div>

      {/* Footer */}

      <div className="mt-10 flex justify-end">

        <button
          className="
            text-[16px]
            font-semibold
            text-[#4A4A57]
            transition-colors
            hover:text-[#00836C]
          "
        >
          View all
        </button>

      </div>

    </section>
  );
}