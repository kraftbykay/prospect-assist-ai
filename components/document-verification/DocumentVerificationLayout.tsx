import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

import DocumentVerificationContent from "./DocumentVerificationContent";

export default function DocumentVerificationLayout() {
  return (
    <main className="flex h-screen overflow-hidden bg-[#F8FAF9]">
      <DashboardSidebar />

      <section className="flex flex-1 flex-col">
        <DashboardHeader />

        <DocumentVerificationContent />
      </section>
    </main>
  );
}