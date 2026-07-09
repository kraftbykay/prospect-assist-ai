import {
  CheckCircle2,
  Sparkles,
  FileCheck2,
  BrainCircuit,
  Clock3,
} from "lucide-react";

export default function SuccessCard() {
  return (
    <div className="space-y-8">

      {/* Page Header */}

      <div>

        <h1 className="text-[38px] font-semibold text-[#004237]">
          AI Prospect Created
        </h1>

        <p className="mt-3 text-[18px] text-[#6B7A76]">
          AI has successfully completed the customer onboarding journey.
        </p>

      </div>

      {/* Hero Banner */}

      <div className="rounded-[24px] bg-[#DDF7F2] p-8">

        <div className="flex items-start justify-between">

          <div className="flex items-start gap-6">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">

              <CheckCircle2
                size={42}
                className="text-[#00836C]"
              />

            </div>

            <div>

              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2">

                <Sparkles
                  size={16}
                  className="text-[#00836C]"
                />

                <span className="text-sm font-semibold text-[#00836C]">
                  AI COMPLETED
                </span>

              </div>

              <h2 className="text-[32px] font-semibold text-[#004237]">
                Prospect Successfully Created
              </h2>

              <p className="mt-3 max-w-[720px] text-[17px] leading-8 text-[#004237]">
                The customer profile has been created, documents verified,
                AI analysis completed and the recommended banking product
                has been successfully generated.
              </p>

            </div>

          </div>

          <div className="rounded-[20px] bg-white px-8 py-6 text-center">

            <p className="text-sm text-[#6B7A76]">
              AI Confidence
            </p>

            <h2 className="mt-2 text-[44px] font-semibold text-[#00836C]">
              96%
            </h2>

          </div>

        </div>

      </div>

      {/* Prospect Summary */}

      <div className="rounded-[24px] border border-[#E6ECE9] bg-white p-8">

        <div className="mb-8 flex items-center gap-3">

          <BrainCircuit
            size={24}
            className="text-[#00836C]"
          />

          <h2 className="text-[26px] font-semibold text-[#004237]">
            Prospect Summary
          </h2>

        </div>

        <div className="grid grid-cols-2 gap-x-20 gap-y-8">

          <Item
            label="Prospect ID"
            value="PR240621"
          />

          <Item
            label="Customer"
            value="Kabir Khan"
          />

          <Item
            label="Recommended Product"
            value="Home Loan"
          />

          <Item
            label="Eligible Amount"
            value="₹42 Lakhs"
          />

          <Item
            label="Risk Category"
            value="Low Risk"
          />

          <Item
            label="Created By"
            value="AI Copilot"
          />

        </div>

      </div>

      {/* AI Workflow */}

      <div className="rounded-[24px] border border-[#E6ECE9] bg-white p-8">

        <div className="mb-8 flex items-center gap-3">

          <Clock3
            size={24}
            className="text-[#00836C]"
          />

          <h2 className="text-[26px] font-semibold text-[#004237]">
            AI Workflow Timeline
          </h2>

        </div>

        <div className="space-y-6">

          <Timeline
            time="10:42 AM"
            title="Customer Profile Created"
          />

          <Timeline
            time="10:43 AM"
            title="Identity Documents Verified"
          />

          <Timeline
            time="10:44 AM"
            title="Eligibility Assessment Completed"
          />

          <Timeline
            time="10:45 AM"
            title="Product Recommendation Generated"
          />

          <Timeline
            time="10:46 AM"
            title="Prospect Saved to CRM"
          />

        </div>

      </div>

      {/* Outputs */}

      <div className="rounded-[24px] border border-[#E6ECE9] bg-white p-8">

        <div className="mb-8 flex items-center gap-3">

          <FileCheck2
            size={24}
            className="text-[#00836C]"
          />

          <h2 className="text-[26px] font-semibold text-[#004237]">
            Generated Outputs
          </h2>

        </div>

        <div className="grid grid-cols-2 gap-5">

          <Output text="Customer Profile" />

          <Output text="Verified Documents" />

          <Output text="Risk Assessment" />

          <Output text="AI Recommendation" />

          <Output text="CRM Prospect" />

          <Output text="Relationship Manager Assignment" />

        </div>

      </div>

    </div>
  );
}

function Item({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-[15px] text-[#6B7A76]">
        {label}
      </p>

      <h3 className="mt-2 text-[22px] font-semibold text-[#004237]">
        {value}
      </h3>
    </div>
  );
}

function Timeline({
  time,
  title,
}: {
  time: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-5">

      <div className="w-[90px] text-sm font-medium text-[#00836C]">
        {time}
      </div>

      <CheckCircle2
        size={20}
        className="text-[#00836C]"
      />

      <span className="text-[17px] text-[#004237]">
        {title}
      </span>

    </div>
  );
}

function Output({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-[#F8FAF9] p-5">

      <CheckCircle2
        size={20}
        className="text-[#00836C]"
      />

      <span className="font-medium text-[#004237]">
        {text}
      </span>

    </div>
  );
}