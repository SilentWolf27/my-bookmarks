"use server";

import { createClient } from "@/supabase/clients/server";
import { buildErrorFromSupabase } from "@/supabase/errors/supabase";
import { extractOpenGraphMetadata } from "@/utils/opengraph/extractMetadata";

export async function createBookmark(url: string, collectionId?: string) {
  if (!url || !url.startsWith("http")) throw new Error("Invalid URL");

  const metadata = await extractOpenGraphMetadata(url);

  const supabase = await createClient();

  const { data, error } = await supabase.from("bookmarks").insert({
    url,
    title: metadata.title,
    image: metadata.image,
    collection_id: collectionId,
  });

  if (error) buildErrorFromSupabase(error);

  return data;
}


