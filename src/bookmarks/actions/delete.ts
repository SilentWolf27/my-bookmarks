"use server";

import { createClient } from "@/supabase/clients/server";
import { buildErrorFromSupabase } from "@/supabase/errors/supabase";
import { redirect } from "next/navigation";

interface DeleteBookmarkResponse {
  error: Error | null;
}

export async function deleteBookmark(
  bookmarkId: string,
  collectionId: string | null
): Promise<DeleteBookmarkResponse> {
  const supabase = await createClient();

  const { error } = await supabase
    .from("bookmarks")
    .update({ deleted_at: new Date().toISOString() })
    .eq("id", bookmarkId)
    .is("deleted_at", null);

  if (error) return { error: buildErrorFromSupabase(error) };

  if (collectionId) redirect(`/colecciones/${collectionId}`);

  redirect(`/inicio`);
}
