import { queryBookmarks } from "@/bookmarks/api/queryBookmarks";
import BookmarksDashboard from "@/bookmarks/components/BookmarksDashboard";
import { getCollection } from "@/collections/api/getOne";
import { createClient } from "@/supabase/clients/server";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function CollectionPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();

  const [collection, bookmarks] = await Promise.all([
    getCollection(id, supabase),
    queryBookmarks(supabase, { collectionId: id }),
  ]);

  return (
    <section className="p-8">
      <article className="mb-8">
        <h2 className="text-lg font-bold"> {collection.name} </h2>
        <p className="text-sm text-gray-500"> {collection.description} </p>
      </article>

      <BookmarksDashboard bookmarks={bookmarks} />
    </section>
  );
}
