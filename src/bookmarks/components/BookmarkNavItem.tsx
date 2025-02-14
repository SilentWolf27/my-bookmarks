import Link from "next/link";
import { Bookmark } from "../interfaces";

interface Props {
  bookmark: Bookmark;
  className?: string;
}

export default function BookmarkNavItem({ bookmark, className }: Props) {
  return (
    <Link
      href={`/colecciones/${bookmark.collection_id}/marcadores/${bookmark.id}`}
      className={`w-full text-sm font-normal hover:bg-gray-200 transition-[background-color] duration-250 overflow-hidden max-w-full whitespace-nowrap text-ellipsis ${className}`}>
      {bookmark.title || bookmark.url}
    </Link>
  );
}
