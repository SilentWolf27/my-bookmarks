import { queryBookmarks } from "@/bookmarks/api/queryBookmarks";
import BookmarksDashboard from "@/bookmarks/templates/BookmarksDashboard";
import { getCollection } from "@/collections/api/getOne";
import { createClient } from "@/supabase/clients/server";

interface Props {
  params: Promise<{ collectionId: string }>;
}

export default async function CollectionPage({ params }: Props) {
  const { collectionId } = await params;
  const supabase = await createClient();

  const [collection, bookmarks] = await Promise.all([
    getCollection(collectionId, supabase),
    queryBookmarks(supabase, { collectionId }),
  ]);

  return (
    <section className="p-8 max-w-screen-2xl">
      <article className="mb-8">
        <h2 className="text-lg font-bold"> {collection.name} </h2>
        <p className="text-sm text-gray-500"> {collection.description} </p>
      </article>

      <BookmarksDashboard bookmarks={bookmarks} collection={collection} />
    </section>
  );
}
