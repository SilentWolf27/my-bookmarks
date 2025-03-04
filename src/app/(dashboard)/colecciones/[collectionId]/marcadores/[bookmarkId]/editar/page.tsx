import EditBookmarkForm from "@/bookmarks/components/EditBookmarkForm";
import EditBookmarkImage from "@/bookmarks/components/EditBookmarkImage";
import { getOne } from "@/bookmarks/api/getOne";
import { createClient } from "@/supabase/clients/server";
import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons";

interface Props {
  params: Promise<{ bookmarkId: string; collectionId: string }>;
}

export default async function EditBookmarkPage({ params }: Props) {
  const { bookmarkId, collectionId } = await params;

  const supabase = await createClient();
  const bookmark = await getOne(bookmarkId as string, supabase);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link 
            href={`/colecciones/${collectionId}`}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeftOutlined className="mr-2" />
            <span>Volver a la colección</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <article className="divide-gray-100">
            <section className="p-6">
              <EditBookmarkImage imageUrl={bookmark.image} title={bookmark.title} />
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
