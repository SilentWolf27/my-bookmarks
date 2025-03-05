'use client';

import { Collection } from "@/collections/interfaces/Collections";
import CollectionsNav from "@/collections/components/CollectionsNav";
import { UserAccount } from "./UserAccount";

interface SidebarContentProps {
  collections: Collection[];
  isOpen: boolean;
}

export function SidebarContent({ collections, isOpen }: SidebarContentProps) {
  return (
    <aside className={`fixed md:relative min-w-[280px] w-[85%] md:w-[18%] max-w-[360px] h-full flex flex-col bg-white border-r border-gray-100 
      transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out
      z-40 shadow-lg md:shadow-none left-0`}>
      <CollectionsNav collections={collections} />
      <UserAccount />
    </aside>
  );
} 