function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <span className="text-[14px] text-[#004237]">{label}</span>

      <span className="text-[14px] font-medium text-[#00836C]">
        {value}
      </span>
    </div>
  );
}

export default function ProgressCard() {
  return (
    <div className="rounded-[20px] border border-[#E6ECE9] bg-white p-6">

      <div className="flex items-center justify-between">

        <h3 className="font-semibold text-[#004237]">
          Onboarding Progress
        </h3>

        <span className="font-semibold text-[#00836C]">
          65%
        </span>

      </div>

      <div className="mt-4 h-2 rounded-full bg-[#D9E5E2]">
        <div className="h-2 w-[65%] rounded-full bg-[#00836C]" />
      </div>

      <hr className="my-6 border-[#E6ECE9]" />

      <div className="mb-6">

        <div className="mb-4 flex items-center justify-between">

          <h4 className="font-semibold text-[#004237]">
            Information Captured
          </h4>

          <button className="text-[#00836C]">
            Edit
          </button>

        </div>

        <InfoRow label="Full Name" value="Kabir Khan" />
        <InfoRow label="Mobile Number" value="+91 91234 87650" />
        <InfoRow label="Interested In" value="Home Loan" />
        <InfoRow label="Source" value="Walk-in" />
        <InfoRow label="Date of Birth" value="15 Mar 1990" />
        <InfoRow label="Employment Type" value="Salaried" />
        <InfoRow label="Monthly Income" value="₹80,000" />

      </div>

      <hr className="my-6 border-[#E6ECE9]" />

      <div>

        <h4 className="mb-4 font-semibold text-[#004237]">
          Pending Information
        </h4>

        <ul className="space-y-3 text-[14px] text-[#004237]">
          <li>PAN Number</li>
          <li>Aadhaar Number</li>
          <li>Current Address</li>
          <li>Work Details</li>
          <li>Existing Loans</li>
          <li>Preferred Loan Amount</li>
        </ul>

      </div>

    </div>
  );
}