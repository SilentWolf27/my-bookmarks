"use client";

import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { FormEventHandler } from "react";

interface Props {
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
  className?: string;
}

const baseInputStyles = "w-full py-1 px-3 rounded-md bg-white border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors text-base";

export default function Searchbar({
  placeholder = "Buscar",
  onChange,
  value = "",
  className,
}: Props) {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchValue = formData.get("search") as string;
    onChange?.(searchValue);
  };

  const handleClear = () => {
    onChange?.("");
  };

  return (
    <form className="relative w-full flex justify-end" onSubmit={handleSubmit}>
      <input
        className={`${baseInputStyles} ${className}`}
        type="text"
        name="search"
        placeholder={placeholder}
        defaultValue={value}
      />

      <div className="absolute right-2 top-0 bottom-0 flex items-center gap-1">
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
            <CloseOutlined />
          </button>
        )}
        <button
          type="submit"
          className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
          <SearchOutlined />
        </button>
      </div>
    </form>
  );
}
