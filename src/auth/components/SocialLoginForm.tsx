import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  action?: () => void;
}

export function SocialLoginForm({ children, action }: Props) {
  return (
    <form action={action}>
      <button
        type="submit"
        className="w-full flex justify-center items-center gap-2 border border-zinc-300 rounded-md py-2 px-4 cursor-pointer hover:bg-zinc-50 transition-[background-color] duration-200">
        {children}
      </button>
    </form>
  );
}
