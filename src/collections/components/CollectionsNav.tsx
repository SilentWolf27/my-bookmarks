import { createClient } from "@/supabase/clients/server";
import { getCollections } from "../api/getCollections";
import CollectionNavItem from "./CollectionNavItem";

export default async function CollectionsNav() {
  const supabase = await createClient();
  const collections = await getCollections(supabase);

  return (
    <div className="h-full max-h-full overflow-y-auto">
      {collections.map((collection) => (
        <CollectionNavItem key={collection.id} collection={collection} />
      ))}
    </div>
  );
}
