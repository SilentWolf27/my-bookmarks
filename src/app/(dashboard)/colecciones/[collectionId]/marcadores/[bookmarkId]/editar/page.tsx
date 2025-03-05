import EditBookmarkForm from "@/bookmarks/components/EditBookmarkForm";
import EditBookmarkImage from "@/bookmarks/components/EditBookmarkImage";
import { getOne } from "@/bookmarks/api/getOne";
import { createClient } from "@/supabase/clients/server";
import { getCollection } from "@/collections/api/getOne";
import Header from "@/components/Header/Header";
import Link from "next/link";
import { ArrowLeftOutlined, FolderOutlined } from "@ant-design/icons";

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
      <Header>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-sm text-gray-600 min-w-0">
            <FolderOutlined className="mr-1 flex-shrink-0" />
            <span className="truncate max-w-[120px] md:max-w-[200px] lg:max-w-[300px]" title={collection.name}>{collection.name}</span>
            <span className="text-gray-400 flex-shrink-0">/</span>
            <span
              className="text-gray-900 font-medium truncate max-w-[120px] md:max-w-[200px] flex-shrink-0"
              title={bookmark.title}>
              {bookmark.title}
            </span>
          </div>

          <Link
            href={`/colecciones/${collection.id}`}
            className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors flex-shrink-0 ml-2">
            <ArrowLeftOutlined className="mr-1" />
            Volver
          </Link>
        </div>
      </Header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <section className="p-6">
            <EditBookmarkImage
              imageUrl={bookmark.image}
              title={bookmark.title}
            />
          </section>

          <section className="p-6">
            <EditBookmarkForm bookmark={bookmark} />
          </section>
        </div>
      </main>
    </div>
  );
}
