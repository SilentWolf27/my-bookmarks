"use client";

import CollectionNavItem from "./CollectionNavItem";
import { HomeOutlined, PlusOutlined } from "@ant-design/icons";
import { Collection } from "../interfaces/Collections";
import { useState } from "react";
import { NewCollectionInput } from "./NewCollectionInput";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  collections: Collection[];
}

export default function CollectionsNav({ collections }: Props) {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const currentPath = usePathname();

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold text-gray-900">My Bookmarks</h1>
          <button
            className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
            onClick={() => setIsAdding(true)}>
            <PlusOutlined className="text-gray-600" />
          </button>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-2">
        <ul className="space-y-1">
          <li>
            <Link
              href="/inicio"
              className={`flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-colors ${
                currentPath === "/inicio" ? "bg-gray-50 text-gray-900" : ""
              }`}>
              <HomeOutlined className="text-base" />
              <span>Inicio</span>
            </Link>
          </li>

          {isAdding && (
            <li className="px-4">
              <NewCollectionInput onClose={() => setIsAdding(false)} />
            </li>
          )}

          {collections.map((collection) => (
            <CollectionNavItem
              key={collection.id}
              collection={collection}
              currentPath={currentPath}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}
