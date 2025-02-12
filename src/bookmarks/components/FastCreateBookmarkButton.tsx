"use client";

import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { createBookmark } from "../actions/create";

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
      <button
        id="fast-create-bookmark-button"
        className="bg-blue-500 text-sm text-white rounded-md flex items-center gap-2 px-2 py-1"
        onClick={() => setIsOpen(!isOpen)}>
        Nuevo
        {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
      </button>

      {isOpen && (
        <form
          className="absolute top-[calc(100%+10px)] right-0 bg-white rounded-sm"
          onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="URL"
            name="url"
            autoFocus
            className="outline-blue-500 text-sm px-2 py-1"
          />
        </form>
      )}
    </div>
  );
}
