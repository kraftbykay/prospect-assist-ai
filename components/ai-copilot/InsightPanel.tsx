import Button from "@/components/ui/Button";

export default function InsightPanel() {
  return (
    <div className="rounded-[20px] bg-[#FFF1E2] p-6">

      <h3 className="text-[22px] font-semibold text-[#004237]">
        AI Insight (So Far)
      </h3>

      <p className="mt-4 leading-8 text-[#004237]">
        Based on the information collected,
        Kabir may be eligible for a Home Loan
        up to ₹42 Lakhs.
      </p>

      <div className="mt-8">

        <Button
          variant="secondary"
          fullWidth
        >
          View Preliminary Insight
        </Button>

      </div>

    </div>
  );
}