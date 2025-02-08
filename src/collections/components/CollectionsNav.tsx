"use client";

import CollectionNavItem from "./CollectionNavItem";
import { PlusOutlined } from "@ant-design/icons";
import { Collection } from "../interfaces/Collections";
import { useEffect, useRef, useState } from "react";
import { NewCollectionInput } from "./NewCollectionInput";

interface Props {
  collections: Collection[];
}

export default function CollectionsNav({ collections }: Props) {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const newCollectionInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isAdding) newCollectionInputRef.current?.focus();
  }, [isAdding]);

  return (
    <>
      <article className="mb-4 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-left font-bold text-lg">My Bookmarks</h1>
          <button
            className="flex justify-center items-center bg-zinc-300 px-2 h-6 text-primary-font hover:bg-zinc-400 transition-[background-color] duration-250 rounded-sm"
            onClick={() => setIsAdding(true)}>
            <PlusOutlined className="text-sm" />
          </button>
        </div>
      </article>
      <ul className="h-full max-h-full overflow-y-auto flex flex-col gap-1">
        {isAdding && (
          <li>
            <NewCollectionInput
              onClose={() => setIsAdding(false)}
              ref={newCollectionInputRef}
            />
          </li>
        )}
        {collections.map((collection) => (
          <CollectionNavItem key={collection.id} collection={collection} />
        ))}
      </ul>
    </>
  );
}
