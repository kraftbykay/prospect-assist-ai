import ChatSection from "./ChatSection";
import CustomerPanel from "./CustomerPanel";

export default function AICopilotContent() {
  return (
    <div className="flex-1 overflow-y-auto bg-[#F8FAF9] p-8">
      <div className="mx-auto flex max-w-[1600px] gap-8">

        <div className="flex-1">
          <ChatSection />
        </div>

        <div className="w-[360px] shrink-0">
          <CustomerPanel />
        </div>

      </div>
    </div>
  );
}