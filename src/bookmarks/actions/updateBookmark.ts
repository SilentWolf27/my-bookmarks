'use server'

import { createClient } from "@/supabase/clients/server"
import { EditBookmarkFormValues } from "../schemas"
import { buildErrorFromSupabase } from "@/supabase/errors/supabase";
import { redirect } from "next/navigation";

interface UpdateBookmarkResponse {
    error: Error | null;
}

export async function updateBookmark(bookmarkId: string, data: EditBookmarkFormValues): Promise<UpdateBookmarkResponse> {
    const supabase = await createClient();

    const { error } = await supabase
        .from("bookmarks")
        .update(data)
        .eq("id", bookmarkId)

    if (error) return { error: buildErrorFromSupabase(error) }

    redirect(`/inicio`);
} 