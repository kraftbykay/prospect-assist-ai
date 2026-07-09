import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AICopilotContent from "./AICopilotContent";

export default function AICopilotLayout() {
  return (
    <main className="flex h-screen overflow-hidden bg-[#F8FAF9]">
      <DashboardSidebar />

      <section className="flex flex-1 flex-col overflow-hidden">
        <DashboardHeader />
        <AICopilotContent />
      </section>
    </main>
  );
}