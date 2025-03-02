"use client";

import Searchbar from "@/components/Searchbar/Searchbars";
import { Bookmark } from "../interfaces";
import FastCreateBookmarkButton from "../components/FastCreateBookmarkButton";
import BookmarkCard from "../components/BookmarkCard";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Collection } from "@/collections/interfaces/Collections";

interface Props {
  bookmarks: Bookmark[];
  collection: Collection;
}

export default function BookmarksDashboard({ bookmarks, collection }: Props) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();

  const handleSearch = (search: string) => {
    setSearchTerm(search);
  };

  const handleBookmarkCreated = () => {
    router.refresh();
  };

  const filteredBookmarks = searchTerm
    ? bookmarks.filter((bookmark) =>
        bookmark.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : bookmarks;

  return (
    <>
      <section className="flex justify-end items-center gap-2">
        <Searchbar
          className="w-full max-w-[300px] py-1 px-3 rounded-md bg-white"
          onChange={handleSearch}
        />
        <FastCreateBookmarkButton
          collection={collection}
          onSuccess={handleBookmarkCreated}
        />
      </section>

      {filteredBookmarks.length > 0 ? (
        <section className="w-full mt-12 grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5">
          {filteredBookmarks.map((bookmark) => (
            <BookmarkCard key={bookmark.id} bookmark={bookmark} />
          ))}
        </section>
      ) : (
        <section className="w-full mt-20 text-lg text-gray-600 text-center ">
          {searchTerm ? (
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
