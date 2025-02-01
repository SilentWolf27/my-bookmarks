import { Collection } from "@/collections/interfaces/Collections";
import { buildErrorFromSupabase } from "@/libs/error/supabase";
import { SupabaseClient } from "@supabase/supabase-js";

export async function getCollections(
  supabase: SupabaseClient
): Promise<Collection[]> {
  const { data, error } = await supabase
    .from("collections")
    .select("id, name, description")
    .eq("is_archived", false)
    .returns<Collection[]>();

  if (error) throw buildErrorFromSupabase(error);

  return data;
}
