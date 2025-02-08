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
}

export default function CollectionNavItem({ collection }: Props) {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = currentPath === `/colecciones/${collection.id}`;
  return (
    <li
      className={`flex items-center justify-between font-medium text-primary-font hover:bg-gray-200 transition-[background-color] duration-250 text-sm overflow-hidden text-nowrap text-ellipsis whitespace-nowrap group ${
        isActive ? "bg-gray-200" : ""
      }`}>
      <Link
        href={`/colecciones/${collection.id}`}
        className="w-full h- full  px-4 py-1 flex items-center gap-2">
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
    </li>
  );
}
