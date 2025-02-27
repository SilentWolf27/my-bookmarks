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
import { MouseEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
interface Props {
  bookmark: Bookmark;
}

export default function BookmarkCard({ bookmark }: Props) {
  const [isFavorite, setIsFavorite] = useState(bookmark.is_favorite);
  const router = useRouter();

  const handleSetFavorite = async () => {
    await setFavorite(bookmark.id, !isFavorite);
    setIsFavorite(!isFavorite);
  };

  return (
    <article className="flex gap-4 flex-col relative rounded-xs overflow-hidden bg-white text-primary-font group">
      <div className="w-full h-[120px] bg-gray-900/10">
        {bookmark.image && (
          <Image
            src={bookmark.image}
            alt={bookmark.title || bookmark.url}
            width={100}
            height={100}
          />
        )}
      </div>
      <div className="px-2 pb-5">
        <h3 className="text-sm font-semibold">
          {bookmark.title || bookmark.url}
        </h3>
      </div>
      <div className="absolute hidden group-hover:block inset-0 bg-black/20 py-2 px-4">
        <div className="flex gap-4 justify-end">
          <Link
            className="cursor-pointer hover:scale-125 transition-[scale] duration-350"
            href={`/colecciones/${bookmark.collection_id}/marcadores/${bookmark.id}/editar`}>
            <EditOutlined />
          </Link>
          <button
            className={`cursor-pointer hover:scale-125 transition-[scale] duration-350 ${
              isFavorite ? "text-amber-400" : ""
            }`}
            onClick={handleSetFavorite}>
            {isFavorite ? <StarFilled /> : <StarOutlined />}
          </button>
          <Link
            href={bookmark.url}
            rel="noopener noreferrer"
            className="cursor-pointer hover:scale-120 transition-[scale] duration-350"
            target="_blank">
            <ExportOutlined />
          </Link>
        </div>
      </div>
    </article>
  );
}
