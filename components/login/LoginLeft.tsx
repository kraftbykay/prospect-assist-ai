import LoginLogo from "./LoginLogo";
import LoginIllustration from "./LoginIllustration";

export default function LoginLeft() {
  return (
    <section className="flex items-center justify-center bg-[#F8FAF9]">
      <div className="w-full max-w-[760px] px-12">

        {/* Logo */}
        <div className="mt-10">
          <LoginLogo />
        </div>

        {/* Content */}
        <div className="mt-24">

          <h1
            className="
              text-[72px]
              font-bold
              leading-[78px]
              tracking-[-1px]
              text-[#00836C]
            "
          >
            ProspectAssist AI
          </h1>

          <h2
            className="
              mt-5
              text-[24px]
              font-medium
              leading-[32px]
              text-[#004237]
            "
          >
            AI-Powered Relationship Manager Copilot
          </h2>

          <p
            className="
              mt-6
              max-w-[640px]
              text-[18px]
              leading-[30px]
              text-[#666666]
            "
          >
            Streamline customer onboarding, automate document verification,
            and receive AI-powered product recommendations—all from one
            intelligent workspace.
          </p>

          {/* Illustration */}
          <div className="mt-16 scale-90 origin-left">
            <LoginIllustration />
          </div>

        </div>

      </div>
    </section>
  );
}