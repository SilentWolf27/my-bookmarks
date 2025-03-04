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
    <li className="flex flex-col">
      <div className="flex items-center">
        <Link
          onClick={() => setIsOpen(true)}
          href={`/colecciones/${collection.id}`}
          className={`flex-1 flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-colors ${
            isActive ? "bg-gray-50 text-gray-900" : ""
          } ${isChild ? "pl-10" : ""}`}>
          {isActive ? (
            <FolderOpenOutlined className="text-base" />
          ) : (
            <FolderOutlined className="text-base" />
          )}
          <span className="truncate">{collection.name}</span>
        </Link>

        {collection.collections.length > 0 && (
          <button
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
            onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <CaretUpOutlined /> : <CaretDownOutlined />}
          </button>
        )}
      </div>

      {isOpen && collection.collections.length > 0 && (
        <ul className="mt-1 space-y-1">
          {collection.collections.map((collection) => (
            <CollectionNavItem
              key={collection.id}
              collection={collection}
              currentPath={currentPath}
              isChild={true}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
