import { queryBookmarks } from "@/bookmarks/api/queryBookmarks";
import BookmarksDashboard from "@/bookmarks/templates/BookmarksDashboard";
import { getCollection } from "@/collections/api/getOne";
import { createClient } from "@/supabase/clients/server";
import Header from "@/components/Header/Header";
import { FolderOutlined } from "@ant-design/icons";

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
      <Header>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FolderOutlined className="mr-1" />
          <span className="text-gray-900 font-medium">{collection.name}</span>
        </div>
        {collection.description && (
          <p className="mt-1 text-sm text-gray-500">{collection.description}</p>
        )}
      </Header>

      <main className="max-w-[1440px] mx-auto px-4 py-8 h-full w-full">
        <section className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden h-full w-full p-6">
          <BookmarksDashboard bookmarks={bookmarks} collection={collection} />
        </section>
      </main>
    </div>
  );
}
