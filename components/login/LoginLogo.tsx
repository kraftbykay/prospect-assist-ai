import Image from "next/image";

export default function LoginLogo() {
  return (
    <div className="mb-20">
      <Image
        src="/images/Logo.svg"
        alt="IDBI Bank"
        width={260}
        height={70}
        priority
        className="h-auto"
      />
    </div>
  );
}