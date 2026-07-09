type InsightCardProps = {
  title: string;
  description: string;
  titleColor: string;
};

export default function InsightCard({
  title,
  description,
  titleColor,
}: InsightCardProps) {
  return (
    <div
      className="
        rounded-[20px]
        bg-[#D8F3EF]
        px-8
        py-7
      "
    >
      <h3
        className="text-[18px] font-semibold leading-7"
        style={{ color: titleColor }}
      >
        {title}
      </h3>

      <p className="mt-2 text-[18px] font-semibold leading-8 text-[#004237]">
        {description}
      </p>
    </div>
  );
}