import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import DashboardContent from "./DashboardContent";

export default function DashboardLayout() {
  return (
    <main className="flex h-screen overflow-hidden bg-[#F8FAF9]">
      <DashboardSidebar />

      <section className="flex flex-1 flex-col">
        <DashboardHeader />

        <DashboardContent />
      </section>
    </main>
  );
}