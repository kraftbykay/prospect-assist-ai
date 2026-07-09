import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

import AIProspectCreationContent from "./AIProspectCreationContent";

export default function AIProspectCreationLayout() {
  return (
    <main className="flex h-screen overflow-hidden bg-[#F8FAF9]">
      <DashboardSidebar />

      <section className="flex flex-1 flex-col">
        <DashboardHeader />

        <AIProspectCreationContent />
      </section>
    </main>
  );
}