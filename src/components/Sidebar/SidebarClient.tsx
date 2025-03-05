"use client";

import { useState, ReactNode } from "react";
import { MobileMenuButton } from "./MobileMenuButton";
import { MobileOverlay } from "./MobileOverlay";

interface SidebarClientProps {
  children: ReactNode;
}

export function SidebarClient({ children }: SidebarClientProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MobileMenuButton onClick={() => setIsOpen(!isOpen)} />
      <aside
        className={`fixed md:relative min-w-[280px] w-[85%] md:w-[18%] max-w-[360px] h-full flex flex-col bg-white border-r border-gray-100 
      transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300 ease-in-out
      z-40 shadow-lg md:shadow-none left-0`}>
        {children}
      </aside>
      <MobileOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
