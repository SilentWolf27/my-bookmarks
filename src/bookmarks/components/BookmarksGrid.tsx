import { Bookmark } from "../interfaces";
import BookmarkCard from "./BookmarkCard";

interface Props {
  bookmarks: Bookmark[];
}

export default function BookmarksGrid({ bookmarks }: Props) {
  return (
    <section className="w-full mt-12 grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5">
      {bookmarks.map((bookmark) => (
        <BookmarkCard key={bookmark.id} bookmark={bookmark} />
      ))}
    </section>
  );
} 