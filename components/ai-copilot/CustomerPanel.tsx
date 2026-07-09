import Button from "@/components/ui/Button";

import CustomerInfo from "./CustomerInfo";
import ProgressCard from "./ProgressCard";
import InsightPanel from "./InsightPanel";

export default function CustomerPanel() {
  return (
    <div className="flex flex-col gap-6">

      <Button
        variant="secondary"
        fullWidth
      >
        End Conversation
      </Button>

      <CustomerInfo />

      <ProgressCard />

      <InsightPanel />

    </div>
  );
}