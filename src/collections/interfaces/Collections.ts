import { Bookmark } from "@/bookmarks/interfaces";

export interface Collection {
  id: string;
  name: string;
  description: string;
  bookmarks: Bookmark[];
  parentId: string;
  collections: Collection[];
}


