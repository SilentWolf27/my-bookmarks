"use client";

import Link from "next/link";
import { Collection } from "../interfaces/Collections";
import {
  CaretDownOutlined,
  DownOutlined,
  FolderOpenOutlined,
  FolderOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { usePathname } from "next/navigation";

interface Props {
  collection: Collection;
}

export default function CollectionNavItem({ collection }: Props) {
  const currentPath = usePathname();

  const isActive = currentPath.startsWith(`/colecciones/${collection.id}`);
  return (
    <li
      className={`flex items-center justify-between font-medium text-primary-font hover:bg-gray-200 rounded-md transition-[background-color] duration-250 text-sm overflow-hidden text-nowrap text-ellipsis whitespace-nowrap group ${
        isActive ? "bg-blue-200" : ""
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
      <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-350 ease-in-out py-1 px-3">
        <CaretDownOutlined className="text-sm" />
      </button>
    </li>
  );
}
