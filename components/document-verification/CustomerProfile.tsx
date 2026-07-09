import PersonalDetails from "./PersonalDetails";
import FinancialProfile from "./FinancialProfile";
import DocumentsVerified from "./DocumentsVerified";
import AIInsights from "./AIInsights";
import MissingInformation from "./MissingInformation";

export default function CustomerProfile() {
  return (
    <div className="space-y-8">

      {/* Page Header */}

      <div className="flex items-center gap-5">

        <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9E5E2] bg-white text-xl text-[#004237]">
          ←
        </button>

        <div>

          <h1 className="text-[34px] font-semibold text-[#004237]">
            Customer Profile & AI Analysis
          </h1>

          <p className="mt-1 text-[16px] text-[#6B7A76]">
            Review customer information, AI insights and profile completeness.
          </p>

        </div>

      </div>

      <PersonalDetails />

      <FinancialProfile />

      <DocumentsVerified />

      <AIInsights />

      <MissingInformation />

    </div>
  );
}