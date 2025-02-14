import { SupabaseClient } from "@supabase/supabase-js";
import { buildErrorFromSupabase } from "@/supabase/errors/supabase";
import { Bookmark } from "../interfaces";

interface bookmarkFilters {
  search?: string;
  collectionId?: string;
}

export async function queryBookmarks(
  supabase: SupabaseClient,
  filters: bookmarkFilters = {}
): Promise<Bookmark[]> {
  const query = supabase
    .from("bookmarks")
    .select("id, title, url, description, collection_id");

  if (filters.collectionId) query.eq("collection_id", filters.collectionId);
  if (filters.search) query.like("title", `%${filters.search}%`);

  const { data, error } = await query.returns<Bookmark[]>();

  if (error) buildErrorFromSupabase(error);

  if (!data) return [];
  return data;
}
