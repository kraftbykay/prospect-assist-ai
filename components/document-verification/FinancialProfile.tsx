export default function FinancialProfile() {
  return (
    <div className="rounded-[20px] border border-[#E6ECE9] bg-white p-8">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-[24px] font-semibold text-[#00836C]">
          Financial Profile
        </h2>

        <button className="text-[16px] font-medium text-[#00836C]">
          Edit
        </button>

      </div>

      <hr className="mb-8 border-[#E6ECE9]" />

      <div className="grid grid-cols-2 gap-x-20 gap-y-8">

        <DetailItem
          label="Employment Type"
          value="Salaried"
        />

        <DetailItem
          label="Employer"
          value="Tata Consultancy Services"
        />

        <DetailItem
          label="Designation"
          value="Senior Software Engineer"
        />

        <DetailItem
          label="Work Experience"
          value="8 Years 3 Months"
        />

        <DetailItem
          label="Monthly Income"
          value="₹80,000"
        />

        <DetailItem
          label="Annual Income"
          value="₹9,60,000"
        />

        <DetailItem
          label="Existing EMI"
          value="₹18,500"
        />

        <DetailItem
          label="Credit Score"
          value="785"
        />

      </div>

    </div>
  );
}

type DetailItemProps = {
  label: string;
  value: string;
};

function DetailItem({
  label,
  value,
}: DetailItemProps) {
  return (
    <div>

      <p className="mb-2 text-[15px] text-[#6B7A76]">
        {label}
      </p>

      <p className="text-[17px] font-medium text-[#004237]">
        {value}
      </p>

    </div>
  );
}