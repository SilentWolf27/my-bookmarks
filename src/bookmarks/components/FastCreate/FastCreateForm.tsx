"use client";

import { ReactNode } from "react";

interface Props {
  isOpen: boolean;
  title: string;
  icon: ReactNode;
  placeholder: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  formRef: React.RefObject<HTMLFormElement | null>;
}

export default function FastCreateForm({
  isOpen,
  title,
  icon,
  placeholder,
  onSubmit,
  formRef,
}: Props) {
  if (!isOpen) return null;

  return (
    <form
      ref={formRef}
      className="absolute top-[calc(100%+10px)] right-0 bg-white rounded-lg shadow-lg border border-gray-200 z-10 w-64"
      onSubmit={onSubmit}>
      <div className="p-3">
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        </div>
        <input
          type="text"
          placeholder={placeholder}
          name="input"
          className="w-full outline-blue-500 text-sm px-2 py-1.5 border border-gray-200 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          autoComplete="off"
          autoFocus
        />
      </div>
    </form>
  );
}
