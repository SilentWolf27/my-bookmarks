"use server";

import { createClient } from "@/supabase/clients/server";
import { buildErrorFromSupabase } from "@/supabase/errors/supabase";

export async function setFavorite(bookmarkId: string, isFavorite: boolean): Promise<void> {
    const supabase = await createClient();

    const { error } = await supabase
        .from("bookmarks")
        .update({ is_favorite: isFavorite })
        .eq("id", bookmarkId)
        .is("deleted_at", null);

    if (error) buildErrorFromSupabase(error);
}
