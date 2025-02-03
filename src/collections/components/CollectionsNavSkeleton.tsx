export default function CollectionsNavSkeleton() {
  return (
    <div className="h-full max-h-full overflow-y-auto flex flex-col gap-4 mt-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <span className="inline-block animate-pulse bg-gray-300 rounded-md h-4 w-3/4 key={index}"></span>
      ))}
    </div>
  );
}
