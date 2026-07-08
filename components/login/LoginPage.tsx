import LoginLeft from "./LoginLeft";
import LoginCard from "./LoginCard";

export default function LoginPage() {
  return (
    <main
      className="
        min-h-screen
        grid
        grid-cols-[1.15fr_0.85fr]
        bg-[#F8FAF9]
      "
    >
      <LoginLeft />
      <LoginCard />
    </main>
  );
}