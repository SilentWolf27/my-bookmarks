import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Header({ children, className = "" }: Props) {
  return (
    <header className={`sticky top-0 z-10 bg-white border-b border-gray-200 py-4 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 md:px-4 pr-16 md:pr-4">
        {children}
      </div>
    </header>
  );
} 