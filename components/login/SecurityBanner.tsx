import { ShieldCheck } from "lucide-react";

export default function SecurityBanner() {
  return (
    <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#FFF2E8] px-4 py-3 text-sm font-medium text-[#0F3F37]">
      <ShieldCheck size={18} className="text-[#008A73]" />
      <span>Your data is protected with bank-grade security</span>
    </div>
  );
}