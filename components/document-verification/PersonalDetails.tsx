export default function PersonalDetails() {
  return (
    <div className="rounded-[20px] border border-[#E6ECE9] bg-white p-8">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-[24px] font-semibold text-[#00836C]">
          Personal Details
        </h2>

        <button className="text-[16px] font-medium text-[#00836C]">
          Edit
        </button>

      </div>

      <hr className="mb-8 border-[#E6ECE9]" />

      <div className="grid grid-cols-2 gap-x-20 gap-y-8">

        <DetailItem
          label="Full Name"
          value="Kabir Khan"
        />

        <DetailItem
          label="Gender"
          value="Male"
        />

        <DetailItem
          label="Date of Birth"
          value="15 March 1990"
        />

        <DetailItem
          label="Marital Status"
          value="Married"
        />

        <DetailItem
          label="PAN Number"
          value="ABCDE1234F"
        />

        <DetailItem
          label="Aadhaar Number"
          value="XXXX XXXX 4582"
        />

        <DetailItem
          label="Mobile Number"
          value="+91 91234 87650"
        />

        <DetailItem
          label="Email"
          value="kabir.khan@email.com"
        />

      </div>

      <div className="mt-10">

        <DetailItem
          label="Current Address"
          value="B-204, Green Park Residency, Sector 45, Gurugram, Haryana - 122003"
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