import CollectionHeaderSkeleton from "@/collections/components/skeleton/CollectionHeaderSkeleton";
import BookmarkCardSkeleton from "@/bookmarks/components/skeleton/BookmarkCardSkeleton";

export default function CollectionLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <CollectionHeaderSkeleton />

      <main className="max-w-[1440px] mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex justify-end items-center gap-2">
              <div className="h-8 w-[300px] bg-gray-100 rounded-md animate-pulse" />
              <div className="h-8 w-[100px] bg-gray-100 rounded-md animate-pulse" />
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5">
              {[...Array(6)].map((_, i) => (
                <BookmarkCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
