"use server";

import { buildErrorFromSupabase } from "@/supabase/errors/supabase";
import { CreateCollectionFormValues } from "@/collections/schemas";
import { createClient } from "@/supabase/clients/server";
import { revalidatePath } from "next/cache";

interface CreateCollectionResponse {
  error: Error | null;
}

export async function createCollection(
  data: CreateCollectionFormValues
): Promise<CreateCollectionResponse | void> {
  try {
    const supabase = await createClient();
    const { error } = await supabase.from("collections").insert({
      ...data,
    });

    if (error) return { error: buildErrorFromSupabase(error) };

    return revalidatePath("/", "layout");
  } catch (error) {
    return {
      error: new Error(
        "Ocurrió un error inesperado. Por favor, intenta de nuevo"
      ),
    };
  }
}
