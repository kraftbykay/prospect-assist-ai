"use client";

import {
  User,
  ShieldCheck,
  BadgeCheck,
  IndianRupee,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

export default function CustomerSummary() {
  const router = useRouter();

  return (
    <div className="space-y-6">

      {/* Customer */}

      <div className="rounded-[24px] border border-[#E6ECE9] bg-white p-6">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#00836C] text-xl font-semibold text-white">
            KK
          </div>

          <div>

            <h2 className="text-[22px] font-semibold text-[#004237]">
              Kabir Khan
            </h2>

            <p className="mt-1 text-[15px] text-[#6B7A76]">
              Relationship Banking Customer
            </p>

          </div>

        </div>

      </div>

      {/* AI Score */}

      <div className="rounded-[24px] border border-[#E6ECE9] bg-white p-6">

        <div className="mb-6 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <Sparkles
              size={20}
              className="text-[#00836C]"
            />

            <h3 className="text-[20px] font-semibold text-[#004237]">
              AI Confidence
            </h3>

          </div>

          <span className="text-[22px] font-semibold text-[#00836C]">
            96%
          </span>

        </div>

        <div className="h-2 rounded-full bg-[#D9E5E2]">
          <div className="h-2 w-[96%] rounded-full bg-[#00836C]" />
        </div>

        <div className="mt-8 space-y-6">

          <Metric
            icon={<ShieldCheck size={18} />}
            label="Risk Level"
            value="Low Risk"
          />

          <Metric
            icon={<BadgeCheck size={18} />}
            label="Credit Score"
            value="785"
          />

          <Metric
            icon={<IndianRupee size={18} />}
            label="Eligible Amount"
            value="₹42 Lakhs"
          />

          <Metric
            icon={<TrendingUp size={18} />}
            label="Repayment Capacity"
            value="Strong"
          />

          <Metric
            icon={<User size={18} />}
            label="Employment"
            value="Verified"
          />

        </div>

      </div>

      {/* AI Summary */}

      <div className="rounded-[24px] bg-[#FFF1E2] p-6">

        <h2 className="text-[22px] font-semibold text-[#004237]">
          AI Recommendation Summary
        </h2>

        <p className="mt-4 text-[16px] leading-8 text-[#004237]">
          Based on customer demographics, financial profile,
          verified documents and repayment behaviour,
          AI recommends proceeding with a Home Loan as the
          primary offering while suggesting premium banking
          products for cross-selling opportunities.
        </p>

        <div className="mt-8">

          <Button
            onClick={() => router.push("/application-summary")}
          >
            Generate Application
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