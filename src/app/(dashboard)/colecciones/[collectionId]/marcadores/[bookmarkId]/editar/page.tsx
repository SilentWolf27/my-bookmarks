import EditBookmarkForm from "@/bookmarks/components/EditBookmarkForm";
import EditBookmarkImage from "@/bookmarks/components/EditBookmarkImage";
import EditBookmarkHeader from "@/bookmarks/components/EditBookmarkHeader";
import { getOne } from "@/bookmarks/api/getOne";
import { createClient } from "@/supabase/clients/server";
import { getCollection } from "@/collections/api/getOne";

interface Props {
  params: Promise<{ bookmarkId: string; collectionId: string }>;
}

export default async function EditBookmarkPage({ params }: Props) {
  const { bookmarkId, collectionId } = await params;
  const supabase = await createClient();

  const [bookmark, collection] = await Promise.all([
    getOne(bookmarkId as string, supabase),
    getCollection(collectionId, supabase),
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <EditBookmarkHeader bookmark={bookmark} collection={collection} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <article className="divide-gray-100">
            <section className="p-6">
              <EditBookmarkImage
                imageUrl={bookmark.image}
                title={bookmark.title}
              />
            </section>

            <section className="p-6 bg-white">
              <EditBookmarkForm bookmark={bookmark} />
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}
