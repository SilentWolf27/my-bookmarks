"use client";

import Searchbar from "@/components/Searchbar/Searchbars";
import { Bookmark } from "../interfaces";
import FastCreateBookmarkButton from "./FastCreateBookmarkButton";

interface Props {
  bookmarks: Bookmark[];
  collectionId?: string;
}

export default function BookmarksDashboard({ bookmarks, collectionId }: Props) {
  const handleSearch = (search: string) => {};

  return (
    <>
      <div className="flex justify-end items-center gap-2">
        <Searchbar
          className="w-[300px] py-1 px-3 rounded-md bg-white"
          onChange={handleSearch}
        />
        <FastCreateBookmarkButton collectionId={collectionId} />
      </div>
    </>
  );
}
