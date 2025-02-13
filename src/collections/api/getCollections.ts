import { Collection } from "@/collections/interfaces/Collections";
import { buildErrorFromSupabase } from "@/supabase/errors/supabase";
import { SupabaseClient } from "@supabase/supabase-js";

export async function getCollections(
  supabase: SupabaseClient
): Promise<Collection[]> {
  const { data, error } = await supabase
    .from("collections")
    .select("id, name, description, bookmarks(id, title, url)")
    .is("deleted_at", null)
    .returns<Collection[]>();

  if (error) throw buildErrorFromSupabase(error.code);

  return data;
}