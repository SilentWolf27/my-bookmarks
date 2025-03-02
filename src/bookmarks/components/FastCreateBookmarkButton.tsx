"use client";

import {
  CaretDownOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useRef, useState } from "react";
import { createBookmark } from "../actions/create";
import Dropdown from "@/components/Dropdown/Dropdown";
import DropdownItem from "@/components/Dropdown/DropdownItem";
import { useClickOutside } from "@/hooks/useClickOutside";
import { createCollection } from "@/collections/actions/create";
import { Collection } from "@/collections/interfaces/Collections";

interface Props {
  collection: Collection;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

type Action = "bookmark" | "collection";

export default function FastCreateBookmarkButton({
  collection,
  onSuccess,
  onError,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [action, setAction] = useState<Action>("bookmark");
  const formRef = useRef<HTMLFormElement>(null);

  useClickOutside({
    ref: formRef,
    handler: () => setIsOpen(false),
    events: ["mousedown"],
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const input = formData.get("input") as string;
    setIsLoading(true);
    setIsOpen(false);
    try {
      if (action === "bookmark")
        await createBookmark({ url: input, collectionId: collection.id });
      else await createCollection({ name: input, parentId: collection.id });
      onSuccess?.();
    } catch (error) {
      onError?.(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const selectCollectionAction = () => {
    setAction("collection");
    setIsOpen(true);
  };

  const selectBookmarkAction = () => {
    setAction("bookmark");
    setIsOpen(true);
  };

  return (
    <div className="relative">
      <div className="flex gap-1">
        <button
          id="fast-create-bookmark-button"
          className="bg-blue-600 text-sm text-white rounded-l-md flex items-center gap-2 px-2 py-1 cursor-pointer min-h-7"
          onClick={selectBookmarkAction}>
          {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
          Nuevo
        </button>

        <Dropdown
          trigger={
            <button className="bg-blue-600 text-xs text-white rounded-r-md flex items-center gap-2 px-1 py-1 cursor-pointer min-h-7">
              <CaretDownOutlined />
            </button>
          }
          placement="bottom-right">
          {collection.parentId === null && (
            <DropdownItem onClick={selectCollectionAction}>
              Agregar colección
            </DropdownItem>
          )}
        </Dropdown>
      </div>

      {isOpen && (
        <form
          ref={formRef}
          className="absolute top-[calc(100%+10px)] right-0 bg-white rounded-xs z-10"
          onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={
              action === "bookmark" ? "URL" : "Nombre de la colección"
            }
            name="input"
            autoFocus
            className="outline-blue-500 text-sm px-2 py-1"
            autoComplete="off"
          />
        </form>
      )}
    </div>
  );
}
