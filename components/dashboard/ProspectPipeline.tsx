import PipelineTabs from "./PipelineTabs";
import PipelineRow from "./PipelineRow";

export default function ProspectPipeline() {
  return (
    <section className="w-full">

      {/* Header */}
      <h2 className="text-[24px] font-normal leading-[32px] text-[#202020]">
        Prospect Pipeline
      </h2>

      {/* Tabs */}
      <PipelineTabs />

      {/* Rows */}
      <div className="mt-10">

        <PipelineRow
          name="Amit Sharma"
          product="Home Loan"
          date="25 June 2026, 10:45 AM"
          status="Documents Pending"
          priority="High"
        />

        <PipelineRow
          name="Priya Reddy"
          product="Personal Loan"
          date="18 June 2026, 03:30 PM"
          status="In Progress"
          priority="Medium"
        />

        <PipelineRow
          name="Rahul Kapoor"
          product="Savings Account"
          date="28 June 2026, 11:00 AM"
          status="New"
          priority="Low"
        />

      </div>

      {/* Footer */}
      <div className="flex justify-end pt-8">

        <button
          className="
            text-[16px]
            font-semibold
            text-[#4A4A57]
            transition-colors
            duration-200
            hover:text-[#00836C]
          "
        >
          View all prospects
        </button>

      </div>

    </section>
  );
}