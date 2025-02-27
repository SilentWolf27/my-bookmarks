import EditBookmarkForm from "@/bookmarks/components/EditBookmarkForm";
import EditBookmarkImage from "@/bookmarks/components/EditBookmarkImage";
import { getOne } from "@/bookmarks/api/getOne";
import { createClient } from "@/supabase/clients/server";

interface Props {
  params: Promise<{ bookmarkId: string }>;
}

export default async function EditBookmarkPage({ params }: Props) {
  const { bookmarkId } = await params;

  const supabase = await createClient();
  const bookmark = await getOne(bookmarkId as string, supabase);

  return (
    <div className="w-full h-full max-w-3xl mx-auto py-8">
      <article className="w-full h-full flex flex-col gap-3 text-primary-font">
        <EditBookmarkImage imageUrl={bookmark.image} title={bookmark.title} />
        <EditBookmarkForm bookmark={bookmark} />
      </article>
    </div>
  );
}
