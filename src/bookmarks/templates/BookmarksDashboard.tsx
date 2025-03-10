"use client";

import { Bookmark } from "../interfaces";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Collection } from "@/collections/interfaces/Collections";
import BookmarksToolbar from "../components/BookmarksToolbar";
import BookmarksGrid from "../components/BookmarksGrid";
import EmptyState from "../components/EmptyState";

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
      <BookmarksToolbar
        onSearch={handleSearch}
        searchTerm={searchTerm}
        collection={collection}
        onBookmarkCreated={handleBookmarkCreated}
      />

      {filteredBookmarks.length > 0 ? (
        <BookmarksGrid bookmarks={filteredBookmarks} />
      ) : (
        <EmptyState searchTerm={searchTerm} />
      )}
    </>
  );
}
