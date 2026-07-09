import Image from "next/image";
import {
  Bell,
  ChevronDown,
  CircleHelp,
  Menu,
  Search,
} from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="flex h-[96px] items-center justify-between border-b border-[#E8ECEA] bg-white px-8">

      {/* Left */}
      <div className="relative w-[560px]">

        <Menu
          size={22}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-[#004237]"
        />

        <Search
          size={20}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-[#004237]"
        />

        <input
          type="text"
          placeholder="Search"
          className="
            h-[48px]
            w-full
            rounded-full
            border-none
            bg-[#F4F5F9]
            pl-14
            pr-14
            text-[16px]
            text-[#004237]
            outline-none
            placeholder:text-[#7A8A87]
          "
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-8">

        <button className="text-[#004237] transition hover:opacity-70">
          <Bell size={24} strokeWidth={1.8} />
        </button>

        <button className="text-[#004237] transition hover:opacity-70">
          <CircleHelp size={24} strokeWidth={1.8} />
        </button>

        <div className="h-10 w-px bg-[#E8ECEA]" />

        {/* Profile */}

        <button className="flex items-center gap-4">

          <Image
            src="/images/avatar.png"
            alt="Raman Joshi"
            width={44}
            height={44}
            className="rounded-full object-cover"
          />

          <div className="text-left leading-tight">

            <p className="text-[18px] font-semibold text-[#004237]">
              Raman Joshi
            </p>

            <p className="mt-1 text-[14px] text-[#7A8A87]">
              Relationship Manager
            </p>

          </div>

          <ChevronDown
            size={18}
            className="text-[#7A8A87]"
          />

        </button>

      </div>

    </header>
  );
}