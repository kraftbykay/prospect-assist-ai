import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function LoginForm() {
  return (
    <form className="mt-10 flex flex-col gap-6">

      <Input
        title="Employee ID / Email"
        placeholder="Enter your employee ID or email"
      />

      <Input
        title="Password"
        type="password"
        placeholder="Enter your password"
      />

      <div className="-mt-2 flex justify-end">
        <button
          type="button"
          className="
            text-[14px]
            font-medium
            text-[#00836C]
            transition-colors
            hover:underline
          "
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

      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-[#D9E5E2]" />

        <span className="text-[14px] text-[#7A8C88]">
          OR
        </span>

        <div className="h-px flex-1 bg-[#D9E5E2]" />
      </div>

      <Button
        variant="secondary"
        showArrow={false}
      >
        Continue with IDBI SSO
      </Button>

    </form>
  );
}