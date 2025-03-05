import { createClient } from "@/supabase/clients/server";
import { getCollections } from "@/collections/api/getCollections";
import { SidebarClient } from "./SidebarClient";
import CollectionsNav from "@/collections/components/CollectionsNav";
import { UserAccount } from "./UserAccount";

export async function Sidebar() {
  const supabase = await createClient();
  const collections = await getCollections(supabase);

  return (
    <SidebarClient>
      <CollectionsNav collections={collections} />
      <UserAccount />
    </SidebarClient>
  );
}
