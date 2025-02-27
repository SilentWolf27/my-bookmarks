import { buildErrorFromSupabase } from "@/supabase/errors/supabase";
import { SupabaseClient } from "@supabase/supabase-js";
import { Bookmark } from "../interfaces";

export async function getOne(id: string, supabase: SupabaseClient): Promise<Bookmark> {
    const { data, error } = await supabase
        .from("bookmarks")
        .select("*")
        .eq("id", id)
        .single();

    if (error) throw buildErrorFromSupabase(error);

    if (!data) throw new Error("Bookmark not found");

    return data;
}
