const tabs = [
  "All (132)",
  "New (28)",
  "In Progress (28)",
  "Documents Pending (36)",
  "Follow-ups (16)",
];

export default function PipelineTabs() {
  return (
    <div className="mt-8 flex gap-5">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`
            h-[56px]
            rounded-2xl
            border
            px-8
            text-[16px]
            font-medium
            transition-all
            ${
              index === 0
                ? "border-[#004237] bg-[#004237] text-white"
                : "border-[#E8ECEA] bg-white text-[#004237] hover:bg-[#F8FAF9]"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}