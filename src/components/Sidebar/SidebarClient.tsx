'use client';

import { useState } from "react";
import { Collection } from "@/collections/interfaces/Collections";
import { MobileMenuButton } from "./MobileMenuButton";
import { MobileOverlay } from "./MobileOverlay";
import { SidebarContent } from "./SidebarContent";

interface SidebarClientProps {
  collections: Collection[];
}

export function SidebarClient({ collections }: SidebarClientProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MobileMenuButton onClick={() => setIsOpen(!isOpen)} />
      <SidebarContent collections={collections} isOpen={isOpen} />
      <MobileOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
} 