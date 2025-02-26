"use client";

import {
  CaretDownOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { createBookmark } from "../actions/create";
import Dropdown from "@/components/Dropdown/Dropdown";
import DropdownItem from "@/components/Dropdown/DropdownItem";

interface Props {
  collectionId?: string;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export default function FastCreateBookmarkButton({
  collectionId,
  onSuccess,
  onError,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleClickOutside = (event: MouseEvent) => {
    if (event.target instanceof HTMLElement) {
      if (!event.target.closest("#fast-create-bookmark-button")) {
        setIsOpen(false);
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const url = formData.get("url") as string;
    setIsLoading(true);
    setIsOpen(false);
    try {
      await createBookmark(url, collectionId);
      onSuccess?.();
    } catch (error) {
      onError?.(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <div className="flex gap-1">
        <button
          id="fast-create-bookmark-button"
          className="bg-blue-600 text-sm text-white rounded-l-md flex items-center gap-2 px-2 py-1 cursor-pointer min-h-7"
          onClick={() => setIsOpen(!isOpen)}>
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
          <DropdownItem onClick={() => console.log("Opción 1")}>
            Importar desde archivo
          </DropdownItem>
        </Dropdown>
      </div>

      {isOpen && (
        <form
          className="absolute top-[calc(100%+10px)] right-0 bg-white rounded-xs z-10"
          onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="URL"
            name="url"
            autoFocus
            className="outline-blue-500 text-sm px-2 py-1"
            autoComplete="off"
          />
        </form>
      )}
    </div>
  );
}
