import { SupabaseClient } from "@supabase/supabase-js";
import { buildErrorFromSupabase } from "@/supabase/errors/supabase";
import { Collection } from "../interfaces/Collections";

export async function getCollection(
  id: string,
  supabase: SupabaseClient
): Promise<Collection> {
  const { data, error } = await supabase
    .from("collections")
    .select("id, name, description")
    .eq("id", id)
    .maybeSingle()
    .overrideTypes<Collection, { merge: false }>();

  if (error) buildErrorFromSupabase(error);

  if (!data) throw new Error("Collection not found");

  return data;
}
