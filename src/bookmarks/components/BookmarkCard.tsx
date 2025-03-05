"use client";

import Image from "next/image";
import { Bookmark } from "../interfaces";
import {
  EditOutlined,
  ExportOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { setFavorite } from "../actions/setFavorite";
import { useState } from "react";

interface Props {
  bookmark: Bookmark;
}

export default function BookmarkCard({ bookmark }: Props) {
  const [isFavorite, setIsFavorite] = useState(bookmark.is_favorite);

  const handleSetFavorite = async () => {
    await setFavorite(bookmark.id, !isFavorite);
    setIsFavorite(!isFavorite);
  };

  return (
    <article className="flex flex-col relative rounded-lg overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="w-full aspect-[21/9] bg-gray-50 relative">
        {bookmark.image ? (
          <Image
            src={`bookmarks/${bookmark.image}`}
            alt={bookmark.title || bookmark.url}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
            priority={true}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <ExportOutlined className="text-4xl text-gray-300" />
          </div>
        )}
      </div>

      <div className="p-4">
        <p className="text-sm font-medium text-gray-900 truncate">
          {bookmark.title || bookmark.url}
        </p>
        {bookmark.description && (
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
            {bookmark.description}
          </p>
        )}
      </div>

      <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-200">
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-end gap-2">
          <Link
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 hover:bg-white transition-colors"
            href={`/colecciones/${bookmark.collection_id}/marcadores/${bookmark.id}/editar`}>
            <EditOutlined className="text-gray-600" />
          </Link>
          <button
            className={`w-8 h-8 flex items-center justify-center rounded-full bg-white/90 hover:bg-white transition-colors ${
              isFavorite ? "text-amber-400" : "text-gray-600"
            }`}
            onClick={handleSetFavorite}>
            {isFavorite ? <StarFilled /> : <StarOutlined />}
          </button>
          <Link
            href={bookmark.url}
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 hover:bg-white transition-colors"
            target="_blank">
            <ExportOutlined className="text-gray-600" />
          </Link>
        </div>
      </div>
    </article>
  );
}
