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
    <>
      <article className="mb-4 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-left font-bold text-lg">My Bookmarks</h1>
          <button
            className="flex justify-center items-center bg-zinc-300 px-2 h-6 text-primary-font hover:bg-zinc-400 transition-[background-color] duration-250 rounded-xs"
            onClick={() => setIsAdding(true)}>
            <PlusOutlined className="text-sm" />
          </button>
        </div>
      </article>
      <ul className="h-full max-h-full overflow-y-auto flex flex-col gap-1">
        <li
          className={`flex items-center justify-between font-medium text-primary-font hover:bg-gray-200 transition-[background-color] duration-250 text-sm overflow-hidden text-nowrap text-ellipsis whitespace-nowrap group hover:text-primary-font ${
            currentPath === "/inicio" ? "bg-gray-200" : ""
          }`}>
          <Link
            href="/inicio"
            className="w-full h- full  px-4 py-1 flex items-center gap-2">
            <HomeOutlined className="text-lg" />
            <span>Inicio</span>
          </Link>
        </li>

        {isAdding && (
          <li>
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
    </>
  );
}
