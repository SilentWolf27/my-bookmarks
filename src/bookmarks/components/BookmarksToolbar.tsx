import Searchbar from "@/components/Searchbar/Searchbars";
import FastCreateBookmarkButton from "./FastCreate/FastCreateBookmarkButton";
import { Collection } from "@/collections/interfaces/Collections";

interface Props {
  onSearch: (value: string) => void;
  searchTerm: string;
  collection: Collection;
  onBookmarkCreated: () => void;
}

export default function BookmarksToolbar({ 
  onSearch, 
  searchTerm, 
  collection,
  onBookmarkCreated 
}: Props) {
  return (
    <section className="flex justify-end items-center gap-2">
      <Searchbar
        className="w-full max-w-[300px]"
        onChange={onSearch}
        value={searchTerm}
      />
      <FastCreateBookmarkButton
        collection={collection}
        onSuccess={onBookmarkCreated}
      />
    </section>
  );
} 