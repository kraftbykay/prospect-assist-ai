"use client";

import {
  User,
  Sparkles,
  ShieldCheck,
  Landmark,
  CheckCircle2,
} from "lucide-react";

import { useRouter } from "next/navigation";

import Button from "@/components/ui/Button";

export default function ProspectSummary() {
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
              Prospect Created Successfully
            </p>

          </div>

        </div>

      </div>

      {/* AI Confidence */}

      <div className="rounded-[24px] border border-[#E6ECE9] bg-white p-6">

        <div className="mb-6 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <Sparkles
              size={18}
              className="text-[#00836C]"
            />

            <span className="font-semibold text-[#004237]">
              AI Confidence
            </span>

          </div>

          <span className="text-[24px] font-semibold text-[#00836C]">
            96%
          </span>

        </div>

        <div className="h-2 rounded-full bg-[#D9E5E2]">
          <div className="h-2 w-[96%] rounded-full bg-[#00836C]" />
        </div>

        <div className="mt-8 space-y-6">

          <Metric
            icon={<Landmark size={18} />}
            label="Recommended Product"
            value="Home Loan"
          />

          <Metric
            icon={<ShieldCheck size={18} />}
            label="Risk Category"
            value="Low Risk"
          />

          <Metric
            icon={<CheckCircle2 size={18} />}
            label="Prospect Status"
            value="Created"
          />

          <Metric
            icon={<User size={18} />}
            label="Assigned RM"
            value="Relationship Manager"
          />

        </div>

      </div>

      {/* CTA */}

      <div className="rounded-[24px] bg-[#FFF1E2] p-6">

        <h2 className="text-[22px] font-semibold text-[#004237]">
          Next Step
        </h2>

        <p className="mt-4 text-[16px] leading-8 text-[#004237]">
          The customer has been successfully added to the CRM.
          The Relationship Manager can now continue the
          engagement journey.
        </p>

        <div className="mt-8">

          <Button
            onClick={() => router.push("/")}
          >
            Finish Onboarding
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

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EBF8F6] text-[#00836C]">
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