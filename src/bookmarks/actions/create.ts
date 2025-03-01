"use server";

import { createClient } from "@/supabase/clients/server";
import { buildErrorFromSupabase } from "@/supabase/errors/supabase";
import { extractOpenGraphMetadata } from "@/utils/opengraph/extractMetadata";
import { revalidatePath } from "next/cache";
import { CreateBookmarkFormValues } from "../schemas";

export async function createBookmark(data: CreateBookmarkFormValues) {
  if (!data.url || !data.url.startsWith("http")) throw new Error("Invalid URL");

  const metadata = await extractOpenGraphMetadata(data.url);
  const supabase = await createClient();

  const { error } = await supabase.from("bookmarks").insert({
    url: data.url,
    title: metadata.title,
    image: metadata.image,
    collection_id: data.collectionId,
  });

  if (error) buildErrorFromSupabase(error);

  revalidatePath("/", "layout");
}
