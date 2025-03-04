"use client";

import Searchbar from "@/components/Searchbar/Searchbars";
import { Bookmark } from "../interfaces";
import BookmarkCard from "../components/BookmarkCard";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Collection } from "@/collections/interfaces/Collections";
import FastCreateBookmarkButton from "../components/FastCreate/FastCreateBookmarkButton";

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

  const filteredBookmarks = useMemo(() => {
    if (!searchTerm) return bookmarks;

    const searchLower = searchTerm.toLowerCase();
    return bookmarks.filter((bookmark) => {
      const searchableFields = [
        bookmark.title,
        bookmark.url,
        bookmark.description,
      ].filter((field): field is string => field !== null);

      return searchableFields.some((field) =>
        field.toLowerCase().includes(searchLower)
      );
    });
  }, [bookmarks, searchTerm]);

  return (
    <>
      <section className="flex justify-end items-center gap-2">
        <Searchbar
          className="w-full max-w-[300px]"
          onChange={handleSearch}
          value={searchTerm}
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
        <section className="w-full mt-20 text-lg text-gray-600 text-center">
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
