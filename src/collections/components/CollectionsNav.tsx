"use client";

import CollectionNavItem from "./CollectionNavItem";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Collection } from "../interfaces/Collections";
import {
  FormEventHandler,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

interface Props {
  collections: Collection[];
}

export default function CollectionsNav({ collections }: Props) {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const newCollectionInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isAdding) {
      newCollectionInputRef.current?.focus();
    }
  }, [isAdding]);

  const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key == "Escape") setIsAdding(false);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newCollectionName = formData.get("newCollection");

    if (!newCollectionName) return setIsAdding(false);

    setIsLoading(true);
    console.log(newCollectionName);
    setIsLoading(false);
  };

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
        {isAdding ? (
          <li>
            <form
              className="flex items-center justify-between font-medium text-primary-font hover:bg-gray-200 transition-[background-color] duration-250 text-sm overflow-hidden text-nowrap text-ellipsis whitespace-nowrap group bg-gray-200 relative"
              onSubmit={handleSubmit}>
              {isLoading ? (
                <LoadingOutlined className="text-xs absolute left-4" />
              ) : (
                <PlusOutlined className="text-xs absolute left-4" />
              )}
              <input
                ref={newCollectionInputRef}
                type="text"
                name="newCollection"
                className="w-full h- full  px-10 py-1 flex items-center gap-2 bg-transparent"
                placeholder="Nueva colección"
                onKeyUp={handleKeyUp}
              />
            </form>
          </li>
        ) : null}
        {collections.map((collection) => (
          <CollectionNavItem key={collection.id} collection={collection} />
        ))}
      </ul>
    </>
  );
}
