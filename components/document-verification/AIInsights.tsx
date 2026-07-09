import {
  Brain,
  TrendingUp,
  ShieldCheck,
  BadgeIndianRupee,
} from "lucide-react";

export default function AIInsights() {
  return (
    <div className="rounded-[20px] border border-[#E6ECE9] bg-white p-8">

      {/* Header */}

      <div className="mb-8 flex items-center gap-3">

        <Brain
          size={26}
          className="text-[#00836C]"
        />

        <h2 className="text-[24px] font-semibold text-[#00836C]">
          AI Insights
        </h2>

      </div>

      <hr className="mb-8 border-[#E6ECE9]" />

      <div className="grid grid-cols-2 gap-5">

        <InsightCard
          icon={
            <BadgeIndianRupee
              size={26}
              className="text-[#00836C]"
            />
          }
          title="Eligible Loan Amount"
          value="₹42 Lakhs"
          description="Estimated eligibility based on verified income."
        />

        <InsightCard
          icon={
            <TrendingUp
              size={26}
              className="text-[#00836C]"
            />
          }
          title="Repayment Capacity"
          value="Strong"
          description="Debt-to-income ratio is within recommended limits."
        />

        <InsightCard
          icon={
            <ShieldCheck
              size={26}
              className="text-[#00836C]"
            />
          }
          title="Risk Category"
          value="Low Risk"
          description="Stable employment and good financial history."
        />

        <InsightCard
          icon={
            <Brain
              size={26}
              className="text-[#00836C]"
            />
          }
          title="AI Recommendation"
          value="Home Loan"
          description="Highest confidence recommendation for this customer."
        />

      </div>

    </div>
  );
}

type InsightCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
};

function InsightCard({
  icon,
  title,
  value,
  description,
}: InsightCardProps) {
  return (
    <div className="rounded-[18px] border border-[#E6ECE9] bg-[#FBFCFC] p-6">

      <div className="mb-5">
        {icon}
      </div>

      <p className="text-[15px] text-[#6B7A76]">
        {title}
      </p>

      <h3 className="mt-2 text-[22px] font-semibold text-[#004237]">
        {value}
      </h3>

      <p className="mt-4 text-[15px] leading-6 text-[#6B7A76]">
        {description}
      </p>

    </div>
  );
}