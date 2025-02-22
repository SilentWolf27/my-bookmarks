import BookMarkEditForm from "@/bookmarks/templates/BookMarkEditForm";
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
      <BookMarkEditForm bookmark={bookmark} />
    </div>
  );
}
