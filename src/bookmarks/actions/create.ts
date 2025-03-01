"use server";

import { createClient } from "@/supabase/clients/server";
import { buildErrorFromSupabase } from "@/supabase/errors/supabase";
import { extractOpenGraphMetadata } from "@/utils/opengraph/extractMetadata";
import { CreateBookmarkFormValues } from "../schemas";
import { uploadFile } from "@/supabase/storage/standardUpload";

function generateRandomFileName(extension: string) {
  return `${Math.random().toString(36).substring(2, 15)}.${extension}`;
}

async function uploadImageFromUrl(imageUrl: string, supabase: any) {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) return null;

    const blob = await response.blob();
    const file = new File(
      [blob],
      generateRandomFileName(blob.type.split("/")[1]),
      { type: blob.type }
    );

    const { path } = await uploadFile(
      {
        file,
        path: "cover-images",
        bucketName: "bookmarks",
        options: {
          contentType: blob.type,
        },
      },
      supabase
    );

    return path;
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
}

export async function createBookmark(data: CreateBookmarkFormValues) {
  if (!data.url || !data.url.startsWith("http")) throw new Error("Invalid URL");

  const metadata = await extractOpenGraphMetadata(data.url);
  const supabase = await createClient();

  let imagePath = null;
  if (metadata.image)
    imagePath = await uploadImageFromUrl(metadata.image, supabase);

  const { error } = await supabase.from("bookmarks").insert({
    url: data.url,
    title: metadata.title,
    image: imagePath,
    collection_id: data.collectionId,
  });

  if (error) buildErrorFromSupabase(error);
}
