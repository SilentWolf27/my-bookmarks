"use client";

import Searchbar from "@/components/Searchbar/Searchbars";
import { Bookmark } from "../interfaces";
import FastCreateBookmarkButton from "./FastCreateBookmarkButton";

interface Props {
  bookmarks: Bookmark[];
}

export default function BookmarksDashboard({ bookmarks }: Props) {
  const handleSearch = (search: string) => {
    console.log(search);
  };

  return (
    <>
      <div className="flex justify-end items-center gap-2">
        <Searchbar
          className="w-[300px] py-1 px-3 rounded-md bg-white"
          onChange={handleSearch}
        />
        <FastCreateBookmarkButton />
      </div>
    </>
  );
}
