"use client";

import { usePathname } from "next/navigation";

import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";

import {
  LayoutDashboard,
  Users,
  Sparkles,
  FileText,
  BriefcaseBusiness,
  Activity,
  Settings,
} from "lucide-react";

export default function DashboardSidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      active: pathname === "/",
    },
    {
      label: "Prospects",
      icon: Users,
      active: pathname.startsWith("/prospects"),
    },
    {
      label: "AI Copilot",
      icon: Sparkles,
      active:
        pathname.startsWith("/ai-copilot") ||
        pathname.startsWith("/document-verification") ||
        pathname.startsWith("/ai-recommendation") ||
        pathname.startsWith("/application-summary") ||
        pathname.startsWith("/ai-prospect-creation"),
    },
    {
      label: "Documents",
      icon: FileText,
      active: pathname.startsWith("/documents"),
    },
    {
      label: "Products",
      icon: BriefcaseBusiness,
      active: pathname.startsWith("/products"),
    },
    {
      label: "Analytics",
      icon: Activity,
      active: pathname.startsWith("/analytics"),
    },
    {
      label: "Settings",
      icon: Settings,
      active: pathname.startsWith("/settings"),
    },
  ];

  return (
    <aside
      className="
        w-[270px]
        shrink-0
        border-r
        border-[#E6ECE9]
        bg-white
      "
    >
      <SidebarLogo />

      <nav className="mt-4 flex flex-col gap-3">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={item.active}
          />
        ))}
      </nav>
    </aside>
  );
}