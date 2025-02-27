"use client";

import Link from "next/link";
import { Collection } from "../interfaces/Collections";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  FolderOpenOutlined,
  FolderOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import BookmarkNavItem from "../../bookmarks/components/BookmarkNavItem";
interface Props {
  collection: Collection;
  currentPath: string;
  isChild?: boolean;
}

export default function CollectionNavItem({
  collection,
  currentPath,
  isChild = false,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const isActive = currentPath === `/colecciones/${collection.id}`;
  return (
    <li className="flex flex-col  text-primary-font text-sm whitespace-nowrap">
      <article
        className={`w-full flex items-center justify-between hover:bg-gray-200 transition-[background-color] duration-250 font-medium group ${
          isActive ? "bg-gray-200" : ""
        }`}>
        <Link
          onClick={() => setIsOpen(true)}
          href={`/colecciones/${collection.id}`}
          className={`w-full h- full  px-4 py-1 flex items-center gap-2 text-nowrap overflow-hidden text-ellipsis ${
            isChild ? "pl-10" : ""
          }`}>
          {isActive ? (
            <FolderOpenOutlined className="text-lg" />
          ) : (
            <FolderOutlined className="text-lg" />
          )}
          {collection.name}
        </Link>
        <button
          className="cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-350 ease-in-out py-1 px-3 text-sm"
          onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <CaretUpOutlined /> : <CaretDownOutlined />}
        </button>
      </article>

      {isOpen && (
        <ul className="flex flex-col gap-1 py-1">
          {collection.collections.map((collection) => (
            <CollectionNavItem
              key={collection.id}
              collection={collection}
              currentPath={currentPath}
              isChild={true}
            />
          ))}
          {/* {collection.bookmarks.map((bookmark) => (
            <BookmarkNavItem
              key={bookmark.id}
              bookmark={bookmark}
              className={`pr-3 ${isChild ? "pl-17" : "pl-10"}`}
            />
          ))} */}
        </ul>
      )}
    </li>
  );
}
