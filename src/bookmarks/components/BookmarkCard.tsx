import Image from "next/image";
import { Bookmark } from "../interfaces";

interface Props {
  bookmark: Bookmark;
}

export default function BookmarkCard({ bookmark }: Props) {
  return (
    <article className="flex gap-4 flex-col relative rounded-sm overflow-hidden bg-white text-primary-font">
      <div className="w-full h-[120px] bg-gray-900/10">
        {bookmark.image && (
          <Image
            src={bookmark.image}
            alt={bookmark.title}
            width={100}
            height={100}
          />
        )}
      </div>
      <div className="px-2 pb-5">
        <h3 className="text-sm font-semibold">{bookmark.title}</h3>
      </div>
    </article>
  );
}
