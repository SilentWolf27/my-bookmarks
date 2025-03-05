import { createClient } from "@/supabase/clients/server";
import { getCollections } from "@/collections/api/getCollections";
import { SidebarClient } from "./SidebarClient";

export async function Sidebar() {
  const supabase = await createClient();
  const collections = await getCollections(supabase);

  return <SidebarClient collections={collections} />;
} 