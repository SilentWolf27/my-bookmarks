import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  action?: () => void;
}

export function SocialLoginForm({ children }: Props) {
  return (
    <form>
      <button
        type="submit"
        className="w-full  flex justify-center items-center gap-2 border border-zinc-300 rounded-md py-2 px-4">
        {children}
      </button>
    </form>
  );
}
