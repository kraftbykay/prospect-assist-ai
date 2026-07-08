import Image from "next/image";

export default function LoginIllustration() {
  return (
    <div className="mt-16 flex justify-center">
      <Image
        src="/images/Illustration.svg"
        alt="ProspectAssist AI Illustration"
        width={700}
        height={520}
        priority
        className="h-auto w-full max-w-[700px]"
      />
    </div>
  );
}