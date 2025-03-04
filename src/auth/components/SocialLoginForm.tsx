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
        className="w-full flex justify-center items-center gap-2 border border-gray-200 rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
        {children}
      </button>
    </form>
  );
}
