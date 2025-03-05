import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Header({ children, className = "" }: Props) {
  return (
    <header
      className={`sticky top-0 z-10 bg-white border-b border-gray-200 py-4 ${className}`}>
      {children}
    </header>
  );
}
