export default function BookmarkCardSkeleton() {
  return (
    <div className="flex flex-col relative rounded-lg overflow-hidden bg-white border border-gray-100">
      <div className="w-full aspect-[21/9] bg-gray-100 animate-pulse" />

      <div className="p-4">
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse mb-2" />
        <div className="h-3 w-1/2 bg-gray-200 rounded animate-pulse" />
      </div>

      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-end gap-2">
          <div className="w-8 h-8 bg-white/90 rounded-full animate-pulse" />
          <div className="w-8 h-8 bg-white/90 rounded-full animate-pulse" />
          <div className="w-8 h-8 bg-white/90 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
} 