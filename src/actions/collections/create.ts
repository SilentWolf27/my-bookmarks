"use server";

import { buildErrorFromSupabase } from "@/libs/error/supabase";
import { CollectionFormValues } from "@/schemas/collections/create";
import { createClient } from "@/utils/supabase/server";

interface CreateCollectionResponse {
  error: Error | null;
}

export async function createCollection(
  data: CollectionFormValues
): Promise<CreateCollectionResponse> {
  try {
    const supabase = await createClient();
    const { error } = await supabase.from("collections").insert({
      ...data,
    });

    if (error) return { error: buildErrorFromSupabase(error) };

    return { error: null };
  } catch (error) {
    return {
      error: new Error(
        "Ocurrió un error inesperado. Por favor, intenta de nuevo"
      ),
    };
  }
}
