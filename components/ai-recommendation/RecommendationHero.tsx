"use client";

import { ArrowRight, CheckCircle2, Home, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RecommendationHero() {
  const router = useRouter();

  return (
    <div className="rounded-[24px] border border-[#E6ECE9] bg-white p-8">

      {/* Header */}

      <div className="flex items-start justify-between">

        <div className="flex items-start gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-[20px] bg-[#EBF8F6]">

            <Home
              size={38}
              className="text-[#00836C]"
            />

          </div>

          <div>

            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#EBF8F6] px-4 py-2">

              <Sparkles
                size={16}
                className="text-[#00836C]"
              />

              <span className="text-[14px] font-semibold text-[#00836C]">
                AI BEST MATCH
              </span>

            </div>

            <h1 className="text-[38px] font-semibold text-[#004237]">
              Home Loan
            </h1>

            <p className="mt-2 text-[17px] text-[#6B7A76]">
              Recommended based on the customer&apos;s verified profile,
              repayment capacity and financial behaviour.
            </p>

          </div>

        </div>

        <div className="rounded-[18px] bg-[#DDF7F2] px-8 py-6 text-center">

          <p className="text-[14px] text-[#6B7A76]">
            AI Confidence
          </p>

          <h2 className="mt-2 text-[44px] font-semibold text-[#00836C]">
            96%
          </h2>

        </div>

      </div>

      <hr className="my-8 border-[#E6ECE9]" />

      {/* Metrics */}

      <div className="grid grid-cols-4 gap-6">

        <Metric
          label="Eligible Amount"
          value="₹42 Lakhs"
        />

        <Metric
          label="Interest Rate"
          value="8.45%"
        />

        <Metric
          label="Monthly EMI"
          value="₹36,200"
        />

        <Metric
          label="Loan Tenure"
          value="20 Years"
        />

      </div>

      <hr className="my-8 border-[#E6ECE9]" />

      {/* AI Reasons */}

      <div>

        <h2 className="mb-6 text-[24px] font-semibold text-[#004237]">
          Why did AI recommend this?
        </h2>

        <div className="grid grid-cols-2 gap-5">

          <Reason text="Stable salaried employment with consistent income." />

          <Reason text="Excellent repayment capacity and low debt-to-income ratio." />

          <Reason text="Verified KYC and financial documents." />

          <Reason text="Strong credit score and low lending risk." />

        </div>

      </div>

      <hr className="my-8 border-[#E6ECE9]" />

      <div className="flex items-center justify-between">

        <button className="font-medium text-[#00836C] hover:underline">
          View detailed AI explanation
        </button>

        <button
          onClick={() => router.push("/ai-prospect-creation")}
          className="flex items-center gap-3 rounded-xl bg-[#00836C] px-8 py-4 text-white transition hover:bg-[#006F5D]"
        >
          Generate Application

          <ArrowRight size={22} />
        </button>

      </div>

    </div>
  );
}

type MetricProps = {
  label: string;
  value: string;
};

function Metric({
  label,
  value,
}: MetricProps) {
  return (
    <div className="rounded-[18px] border border-[#EEF3F1] bg-[#FBFCFC] p-5">

      <p className="text-[14px] text-[#6B7A76]">
        {label}
      </p>

      <h3 className="mt-3 text-[28px] font-semibold text-[#004237]">
        {value}
      </h3>

    </div>
  );
}

function Reason({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-[#F8FAF9] p-4">

      <CheckCircle2
        size={20}
        className="mt-1 text-[#00836C]"
      />

      <p className="leading-7 text-[#004237]">
        {text}
      </p>

    </div>
  );
}