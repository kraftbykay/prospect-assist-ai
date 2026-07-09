import SuccessCard from "./SuccessCard";
import ProspectSummary from "./ProspectSummary";

export default function AIProspectCreationContent() {
  return (
    <div className="flex-1 overflow-y-auto bg-[#F8FAF9] p-8">

      <div className="mx-auto flex max-w-[1600px] gap-8">

        <div className="flex-1">
          <SuccessCard />
        </div>

        <div className="w-[360px] shrink-0">
          <ProspectSummary />
        </div>

      </div>

    </div>
  );
}