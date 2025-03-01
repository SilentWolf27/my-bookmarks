import { SupabaseClient } from "@supabase/supabase-js";
import { buildErrorFromSupabase } from "../errors/supabase";

interface UploadOptions {
  file: File;
  path: string;
  bucketName: string;
  options?: {
    cacheControl?: string;
    contentType?: string;
    upsert?: boolean;
  };
}

export async function uploadFile(
  {
    file,
    path = "",
    bucketName,
    options = { cacheControl: "3600", upsert: false },
  }: UploadOptions,
  supabase: SupabaseClient
) {
  const filePath = path ? `${path}/${file.name}` : file.name;

  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(filePath, file, {
      ...options,
    });

  if (error) throw buildErrorFromSupabase(error);

  return data;
}
