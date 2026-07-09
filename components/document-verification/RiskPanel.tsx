"use client";

import {
  ShieldCheck,
  TrendingUp,
  BadgeIndianRupee,
  Brain,
  CheckCircle2,
} from "lucide-react";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

export default function RiskPanel() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-6">

      {/* AI Risk & Eligibility */}

      <div className="rounded-[20px] border border-[#E6ECE9] bg-white p-6">

        <div className="mb-6 flex items-center gap-3">

          <ShieldCheck
            size={26}
            className="text-[#00836C]"
          />

          <h2 className="text-[22px] font-semibold text-[#004237]">
            AI Risk & Eligibility
          </h2>

        </div>

        <div className="rounded-[16px] bg-[#EBF8F6] p-5">

          <p className="text-[14px] text-[#5A6A66]">
            Overall Risk
          </p>

          <h3 className="mt-2 text-[30px] font-semibold text-[#00836C]">
            Low Risk
          </h3>

          <div className="mt-5 h-2 rounded-full bg-[#D8E2DF]">

            <div className="h-2 w-[92%] rounded-full bg-[#00836C]" />

          </div>

          <p className="mt-3 text-[15px] text-[#004237]">
            AI Confidence • 96%
          </p>

        </div>

        <div className="mt-8 space-y-5">

          <Metric
            icon={<BadgeIndianRupee size={20} />}
            label="Eligible Amount"
            value="₹42 Lakhs"
          />

          <Metric
            icon={<TrendingUp size={20} />}
            label="Estimated EMI"
            value="₹31,870"
          />

          <Metric
            icon={<Brain size={20} />}
            label="Recommended Product"
            value="Home Loan"
          />

        </div>

      </div>

      {/* AI Strengths */}

      <div className="rounded-[20px] border border-[#E6ECE9] bg-white p-6">

        <h2 className="mb-6 text-[22px] font-semibold text-[#004237]">
          AI Observations
        </h2>

        <div className="space-y-5">

          <Strength text="Stable salaried employment." />

          <Strength text="Strong repayment capacity." />

          <Strength text="Healthy debt-to-income ratio." />

          <Strength text="All mandatory KYC documents verified." />

        </div>

      </div>

      {/* CTA */}

      <div className="rounded-[20px] bg-[#FFF1E2] p-6">

        <h2 className="text-[22px] font-semibold text-[#004237]">
          Next Best Action
        </h2>

        <p className="mt-4 text-[16px] leading-7 text-[#004237]">
          AI has completed customer profiling and verification.
          Generate personalized banking recommendations to
          proceed with the application.
        </p>

        <div className="mt-8">

          <Button
            onClick={() => router.push("/ai-recommendation")}
          >
            Generate AI Recommendation
          </Button>

        </div>

      </div>

    </div>
  );
}

type MetricProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

function Metric({
  icon,
  label,
  value,
}: MetricProps) {
  return (
    <div className="flex items-center gap-4">

      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EBF8F6] text-[#00836C]">
        {icon}
      </div>

      <div className="flex-1">

        <p className="text-[14px] text-[#6B7A76]">
          {label}
        </p>

        <p className="mt-1 text-[18px] font-semibold text-[#004237]">
          {value}
        </p>

      </div>

    </div>
  );
}

function Strength({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">

      <CheckCircle2
        size={18}
        className="mt-1 text-[#00836C]"
      />

      <p className="leading-7 text-[#004237]">
        {text}
      </p>

    </div>
  );
}