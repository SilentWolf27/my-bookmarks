"use client";

import Link from "next/link";
import { Collection } from "../interfaces/Collections";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  FolderOpenOutlined,
  FolderOutlined,
} from "@ant-design/icons";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Props {
  collection: Collection;
  currentPath: string;
}

export default function CollectionNavItem({ collection, currentPath }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const isActive = currentPath === `/colecciones/${collection.id}`;
  return (
    <li className="flex flex-col  text-primary-font text-sm whitespace-nowrap">
      <article
        className={`w-full flex items-center justify-between hover:bg-gray-200 transition-[background-color] duration-250 font-medium group ${
          isActive ? "bg-gray-200" : ""
        }`}>
        <Link
          href={`/colecciones/${collection.id}`}
          className="w-full h- full  px-4 py-1 flex items-center gap-2 text-nowrap overflow-hidden text-ellipsis">
          {isActive ? (
            <FolderOpenOutlined className="text-lg" />
          ) : (
            <FolderOutlined className="text-lg" />
          )}
          {collection.name}
        </Link>
        <button
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-350 ease-in-out py-1 px-3 text-sm"
          onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <CaretUpOutlined /> : <CaretDownOutlined />}
        </button>
      </article>

      {isOpen && <ul></ul>}
    </li>
  );
}
