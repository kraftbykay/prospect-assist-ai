import { CheckCircle, Eye, Upload } from "lucide-react";

export default function DocumentsVerified() {
  return (
    <div className="rounded-[20px] border border-[#E6ECE9] bg-white p-8">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-[24px] font-semibold text-[#00836C]">
          Documents Verified
        </h2>

        <span className="rounded-full bg-[#EBF8F6] px-4 py-2 text-[14px] font-medium text-[#00836C]">
          4 / 5 Verified
        </span>

      </div>

      <hr className="mb-8 border-[#E6ECE9]" />

      <div className="space-y-5">

        <DocumentRow
          name="PAN Card"
          status="Verified"
          action="View"
          verified
        />

        <DocumentRow
          name="Aadhaar Card"
          status="Verified"
          action="View"
          verified
        />

        <DocumentRow
          name="Salary Slip"
          status="Verified"
          action="View"
          verified
        />

        <DocumentRow
          name="Bank Statement"
          status="Verified"
          action="View"
          verified
        />

        <DocumentRow
          name="Property Documents"
          status="Pending"
          action="Upload"
        />

      </div>

    </div>
  );
}

type RowProps = {
  name: string;
  status: string;
  action: string;
  verified?: boolean;
};

function DocumentRow({
  name,
  status,
  action,
  verified = false,
}: RowProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-[#EEF3F1] p-4">

      <div className="flex items-center gap-4">

        {verified ? (
          <CheckCircle
            size={22}
            className="text-[#00836C]"
          />
        ) : (
          <Upload
            size={22}
            className="text-[#F59E0B]"
          />
        )}

        <div>

          <p className="font-medium text-[#004237]">
            {name}
          </p>

          <p
            className={`text-[14px] ${
              verified
                ? "text-[#00836C]"
                : "text-[#F59E0B]"
            }`}
          >
            {status}
          </p>

        </div>

      </div>

      <button className="flex items-center gap-2 rounded-lg border border-[#D9E5E2] px-4 py-2 text-[14px] font-medium text-[#004237] hover:bg-[#F8FAF9]">

        {verified ? (
          <>
            <Eye size={16} />
            {action}
          </>
        ) : (
          <>
            <Upload size={16} />
            {action}
          </>
        )}

      </button>

    </div>
  );
}