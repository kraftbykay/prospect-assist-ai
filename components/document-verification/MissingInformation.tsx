import { AlertCircle } from "lucide-react";

export default function MissingInformation() {
  return (
    <div className="rounded-[20px] border border-[#E6ECE9] bg-white p-8">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <AlertCircle
            size={24}
            className="text-[#F59E0B]"
          />

          <h2 className="text-[24px] font-semibold text-[#00836C]">
            Missing Information
          </h2>

        </div>

        <span className="rounded-full bg-[#FFF7E8] px-4 py-2 text-[14px] font-medium text-[#D98C00]">
          4 Pending
        </span>

      </div>

      <hr className="mb-8 border-[#E6ECE9]" />

      <div className="space-y-4">

        <MissingRow
          title="Property Value"
          description="Required to calculate loan eligibility."
          priority="High"
        />

        <MissingRow
          title="Preferred Loan Tenure"
          description="Needed to estimate monthly EMI."
          priority="Medium"
        />

        <MissingRow
          title="Nominee Details"
          description="Required before final application."
          priority="Medium"
        />

        <MissingRow
          title="Existing Liabilities"
          description="Used for debt-to-income assessment."
          priority="High"
        />

      </div>

    </div>
  );
}

type MissingRowProps = {
  title: string;
  description: string;
  priority: string;
};

function MissingRow({
  title,
  description,
  priority,
}: MissingRowProps) {
  return (
    <div className="flex items-center justify-between rounded-[16px] border border-[#EEF3F1] p-5">

      <div>

        <h3 className="text-[17px] font-medium text-[#004237]">
          {title}
        </h3>

        <p className="mt-2 text-[15px] text-[#6B7A76]">
          {description}
        </p>

      </div>

      <div className="flex flex-col items-end gap-3">

        <span
          className={`rounded-full px-3 py-1 text-[13px] font-medium ${
            priority === "High"
              ? "bg-[#FFEAEA] text-[#D14343]"
              : "bg-[#FFF7E8] text-[#D98C00]"
          }`}
        >
          {priority}
        </span>

        <button className="rounded-lg border border-[#00836C] px-4 py-2 text-[14px] font-medium text-[#00836C] hover:bg-[#F4FBF9]">
          Complete
        </button>

      </div>

    </div>
  );
}