import CustomerProfile from "./CustomerProfile";
import RiskPanel from "./RiskPanel";

export default function DocumentVerificationContent() {
  return (
    <div className="flex-1 overflow-y-auto bg-[#F8FAF9] p-8">
      <div className="mx-auto flex max-w-[1600px] gap-8">

        <div className="flex-1">
          <CustomerProfile />
        </div>

        <div className="w-[360px] shrink-0">
          <RiskPanel />
        </div>

      </div>
    </div>
  );
}