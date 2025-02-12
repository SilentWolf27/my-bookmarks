"use client";

import { PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { createBookmark } from "../actions/create";

export default function FastCreateBookmarkButton() {
  const [isOpen, setIsOpen] = useState(false);

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
    await createBookmark(url);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        id="fast-create-bookmark-button"
        className="bg-blue-500 text-sm text-white rounded-md flex items-center gap-2 px-2 py-1"
        onClick={() => setIsOpen(!isOpen)}>
        Nuevo
        <PlusOutlined />
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
