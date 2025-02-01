"use server";

import { buildErrorFromSupabase } from "@/supabase/errors/supabase";
import { CollectionFormValues } from "@/collections/schemas/create";
import { createClient } from "@/supabase/clients/server";

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
