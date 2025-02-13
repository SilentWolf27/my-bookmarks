"use client";

import { SearchOutlined } from "@ant-design/icons";
import { FormEventHandler } from "react";

interface Props {
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
  className?: string;
}

export default function Searchbar({
  placeholder = "Buscar",
  onChange,
  value,
  className,
}: Props) {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const search = formData.get("search");

    onChange?.(search as string);
  };

  return (
    <form className="relative w-full flex justify-end" onSubmit={handleSubmit}>
      <input
        className={`${className}`}
        type="text"
        name="search"
        placeholder={placeholder}
        value={value}
      />

      <button
        className="bg-transparent border-none outline-hidden absolute right-2 top-0 bottom-0"
        type="submit">
        <SearchOutlined />
      </button>
    </form>
  );
}
