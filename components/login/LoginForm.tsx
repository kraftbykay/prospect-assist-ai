"use client";

import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function LoginForm() {
  const router = useRouter();

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // TODO: Replace with real authentication later.
    router.push("/dashboard");
  }

  return (
    <form
      onSubmit={handleLogin}
      className="space-y-6"
    >
      <Input
        title="Employee ID / Email"
        placeholder="Enter your employee ID or email"
        type="text"
      />

      <Input
        title="Password"
        placeholder="Enter your password"
        type="password"
      />

      <div className="flex justify-end">
        <button
          type="button"
          className="text-[14px] font-medium text-[#00836C] hover:underline"
        >
          Forgot Password?
        </button>
      </div>

      <Button
        type="submit"
        variant="primary"
      >
        Log In
      </Button>

      <Button
        type="button"
        variant="secondary"
      >
        Continue with IDBI SSO
      </Button>
    </form>
  );
}