"use client";

import Searchbar from "@/components/Searchbar/Searchbars";
import { Bookmark } from "../interfaces";
import FastCreateBookmarkButton from "../components/FastCreateBookmarkButton";
import BookmarkCard from "../components/BookmarkCard";
import { useState } from "react";

interface Props {
  bookmarks: Bookmark[];
  collectionId?: string;
}

export default function BookmarksDashboard({ bookmarks, collectionId }: Props) {
  const [filteredBookmarks, setFilteredBookmarks] =
    useState<Bookmark[]>(bookmarks);
  const [wasSearched, setWasSearched] = useState(false);

  const handleSearch = async (search: string) => {
    setWasSearched(true);
    const filtered = bookmarks.filter((bookmark) =>
      bookmark.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredBookmarks(filtered);
  };

  return (
    <>
      <section className="flex justify-end items-center gap-2">
        <Searchbar
          className="w-full max-w-[300px] py-1 px-3 rounded-md bg-white"
          onChange={handleSearch}
        />
        <FastCreateBookmarkButton collectionId={collectionId} />
      </section>

      {filteredBookmarks.length > 0 ? (
        <section className="w-full mt-12 grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5">
          {filteredBookmarks.map((bookmark) => (
            <BookmarkCard key={bookmark.id} bookmark={bookmark} />
          ))}
        </section>
      ) : (
        <section className="w-full mt-20 text-lg text-gray-600 text-center ">
          {wasSearched ? (
            <p>No se encontraron resultados</p>
          ) : (
            <>
              <p>Tus marcadores aparecerán aquí</p>
              <p>
                Guarda tu primer marcador y accede fácilmente a tus enlaces
                favoritos
              </p>
            </>
          )}
        </section>
      )}
    </>
  );
}
