import { queryBookmarks } from "@/bookmarks/api/queryBookmarks";
import BookmarksDashboard from "@/bookmarks/templates/BookmarksDashboard";
import { getCollection } from "@/collections/api/getOne";
import { createClient } from "@/supabase/clients/server";
import CollectionHeader from "@/collections/components/CollectionHeader";

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
    <div className="min-h-screen bg-gray-50">
      <CollectionHeader collection={collection} />

      <main className="max-w-[1440px] mx-auto px-4 py-8 h-full w-full">
        <section className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden h-full w-full p-6">
          <BookmarksDashboard bookmarks={bookmarks} collection={collection} />
        </section>
      </main>
    </div>
  );
}
