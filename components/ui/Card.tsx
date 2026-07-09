type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-[20px]
        bg-white
        shadow-[0_4px_20px_rgba(0,66,55,0.08)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}