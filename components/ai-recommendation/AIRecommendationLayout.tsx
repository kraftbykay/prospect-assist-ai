import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

import AIRecommendationContent from "./AIRecommendationContent";

export default function AIRecommendationLayout() {
  return (
    <main className="flex h-screen overflow-hidden bg-[#F8FAF9]">
      <DashboardSidebar />

      <section className="flex flex-1 flex-col">
        <DashboardHeader />

        <AIRecommendationContent />
      </section>
    </main>
  );
}