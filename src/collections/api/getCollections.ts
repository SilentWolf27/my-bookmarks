import { Collection } from "@/collections/interfaces/Collections";
import { buildErrorFromSupabase } from "@/supabase/errors/supabase";
import { SupabaseClient } from "@supabase/supabase-js";

export async function getCollections(
  supabase: SupabaseClient
): Promise<Collection[]> {
  const { data, error } = await supabase
    .from("collections")
    .select("id, name, description, parentId:parent_id, bookmarks(id, title, url, collection_id)")
    .is("deleted_at", null)
    .returns<Collection[]>();

  if (error) throw buildErrorFromSupabase(error.code);

  return groupCollections(data);
}

function groupCollections(collections: Collection[]): Collection[] {
  const collectionMap = createCollectionMap(collections);
  return buildCollectionHierarchy(collections, collectionMap);
}

function createCollectionMap(collections: Collection[]): Map<string, Collection> {
  const map = new Map<string, Collection>();
  
  for (const collection of collections) {
    map.set(collection.id, { ...collection, collections: [] });
  }
  
  return map;
}

function buildCollectionHierarchy(
  collections: Collection[], 
  collectionMap: Map<string, Collection>
): Collection[] {
  const rootCollections: Collection[] = [];

  for (const collection of collections) {
    const mappedCollection = collectionMap.get(collection.id)!;
    const isRoot = collection.parentId === null;
    const parent = collection.parentId ? collectionMap.get(collection.parentId) : null;

    if (isRoot || !parent) {
      rootCollections.push(mappedCollection);
      continue;
    }

    parent.collections ??= [];
    parent.collections.push(mappedCollection);
  }

  return rootCollections;
}
