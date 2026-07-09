"use client";

import Image from "next/image";

type ManagerCardProps = {
  name: string;
  avatar: string;
};

export default function ManagerCard({
  name,
  avatar,
}: ManagerCardProps) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-5
        rounded-[18px]
        bg-white
        px-6
        py-4
        shadow-[0_4px_12px_rgba(0,0,0,0.08)]
      "
    >
      <Image
        src={avatar}
        alt={name}
        width={48}
        height={48}
        className="rounded-full object-cover"
      />

      <span
        className="
          text-[20px]
          font-medium
          text-[#004237]
        "
      >
        {name}
      </span>
    </div>
  );
}