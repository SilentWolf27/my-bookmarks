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
      className={`w-full text-sm font-normal hover:bg-gray-200 transition-[background-color] duration-250 ${className}`}>
      <h1>{bookmark.title || bookmark.url}</h1>
    </Link>
  );
}
