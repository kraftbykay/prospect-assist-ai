import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";
import SecurityBanner from "./SecurityBanner";

export default function LoginCard() {
  return (
    <section className="flex items-center justify-center">
      <div
        className="
          w-[540px]
          rounded-[20px]
          bg-white
          p-[40px]
          shadow-[0_4px_20px_rgba(0,66,55,0.08)]
        "
      >
        <LoginHeader />

        <div className="mt-10">
          <LoginForm />
        </div>

        <div className="mt-8">
          <SecurityBanner />
        </div>
      </div>
    </section>
  );
}