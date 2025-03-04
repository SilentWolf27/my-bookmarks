import Link from "next/link";
import { ArrowLeftOutlined, FolderOutlined } from "@ant-design/icons";
import { Bookmark } from "../interfaces";
import { Collection } from "@/collections/interfaces/Collections";

interface Props {
  bookmark: Bookmark;
  collection: Collection;
}

export default function EditBookmarkHeader({ bookmark, collection }: Props) {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 py-4">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FolderOutlined className="mr-1" />
          <span>{collection.name}</span>
          <span className="text-gray-400">/</span>
          <span
            className="text-gray-900 font-medium truncate max-w-[200px]"
            title={bookmark.title}>
            {bookmark.title}
          </span>
        </div>

        <Link
          href={`/colecciones/${collection.id}`}
          className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors">
          <ArrowLeftOutlined className="mr-1" />
          Volver
        </Link>
      </div>
    </header>
  );
}
