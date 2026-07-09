type KpiCardProps = {
  title: string;
  value: string;
  subtitle: string;
  subtitleColor: string;
};

export default function KpiCard({
  title,
  value,
  subtitle,
  subtitleColor,
}: KpiCardProps) {
  return (
    <div
      className="
        flex
        h-[150px]
        flex-col
        justify-between
        rounded-[20px]
        shadow-[0_4px_16px_rgba(0,66,55,0.06)]
        bg-white
        p-6
        shadow-[0_2px_8px_rgba(0,66,55,0.04)]
      "
    >
      {/* Title */}
      <p className="text-[14px] font-medium leading-5 text-[#5F7370]">
        {title}
      </p>

      {/* Value */}
      <h2 className="text-[48px] font-medium leading-none text-[#004237]">
        {value}
      </h2>

      {/* Subtitle */}
      <p
        className="text-[14px] font-medium leading-5"
        style={{ color: subtitleColor }}
      >
        {subtitle}
      </p>
    </div>
  );
}