"use client";

import { useState } from "react";

import Card from "@/components/ui/Card";

import HeroSection from "./HeroSection";
import DailyBrief from "./DailyBrief";
import KPICard from "./KPICard";
import ProspectPipeline from "./ProspectPipeline";
import AIInsights from "./AIInsights";
import AddProspectModal from "./AddProspectModal";

export default function DashboardContent() {
  const [isAddProspectOpen, setIsAddProspectOpen] = useState(false);

  return (
    <>
      <main className="flex-1 overflow-y-auto bg-[#F8FAF9] px-8 py-8">
        <div className="mx-auto max-w-[1600px]">

          {/* Hero + AI Daily Brief */}

          <div className="grid grid-cols-[2.2fr_1fr] gap-8 items-stretch">

            <HeroSection
              onAddProspect={() => setIsAddProspectOpen(true)}
            />

            <Card className="flex h-full flex-col p-8">
              <DailyBrief />
            </Card>

          </div>

          {/* KPI */}

          <div className="mt-8 grid grid-cols-4 gap-5">

            <KPICard
              title="Total Prospects"
              value="132"
              subtitle="+12 today"
              subtitleColor="#2FA52B"
            />

            <KPICard
              title="Active Onboarding"
              value="28"
              subtitle="Currently in progress"
              subtitleColor="#FF8A00"
            />

            <KPICard
              title="Pending Follow-ups"
              value="16"
              subtitle="Needs attention"
              subtitleColor="#FF4D4F"
            />

            <KPICard
              title="Today's conversions"
              value="8"
              subtitle="Successful onboarding"
              subtitleColor="#2FA52B"
            />

          </div>

          {/* Pipeline */}

          <div className="mt-8">

            <Card className="p-8">
              <ProspectPipeline />
            </Card>

          </div>

          {/* AI Insights */}

          <div className="mt-8">

            <Card className="p-8">
              <AIInsights />
            </Card>

          </div>

        </div>
      </main>

      <AddProspectModal
        open={isAddProspectOpen}
        onClose={() => setIsAddProspectOpen(false)}
      />
    </>
  );
}