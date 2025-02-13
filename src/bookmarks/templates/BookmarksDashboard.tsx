"use client";

import Searchbar from "@/components/Searchbar/Searchbars";
import { Bookmark } from "../interfaces";
import FastCreateBookmarkButton from "../components/FastCreateBookmarkButton";
import BookmarkCard from "../components/BookmarkCard";

interface Props {
  bookmarks: Bookmark[];
  collectionId?: string;
}

export default function BookmarksDashboard({ bookmarks, collectionId }: Props) {
  const handleSearch = (search: string) => {};

  return (
    <>
      <section className="flex justify-end items-center gap-2">
        <Searchbar
          className="w-full max-w-[300px] py-1 px-3 rounded-md bg-white"
          onChange={handleSearch}
        />
        <FastCreateBookmarkButton collectionId={collectionId} />
      </section>

      <section className="w-full mt-12 grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5">
        {bookmarks.map((bookmark) => (
          <BookmarkCard key={bookmark.id} bookmark={bookmark} />
        ))}
      </section>
    </>
  );
}
