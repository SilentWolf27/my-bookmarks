import Header from "@/components/Header/Header";

export default function CollectionHeaderSkeleton() {
  return (
    <Header>
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
      </div>
    </Header>
  );
} 