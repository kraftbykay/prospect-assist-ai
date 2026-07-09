export default function CustomerInfo() {
  return (
    <div className="rounded-[20px] border border-[#E6ECE9] bg-white p-6">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#00836C] text-[20px] font-semibold text-white">
          KK
        </div>

        <div>
          <h2 className="text-[20px] font-semibold text-[#004237]">
            Kabir Khan
          </h2>

          <p className="mt-1 text-[15px] text-[#5A6A66]">
            +91 91234 87650
          </p>
        </div>
      </div>
    </div>
  );
}