import Header from "@/components/Header/Header";
import { FolderOutlined } from "@ant-design/icons";

export default function EditBookmarkLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FolderOutlined className="mr-1" />
            <div className="w-32 h-4 bg-gray-200 rounded animate-pulse" />
            <span className="text-gray-400">/</span>
            <div className="w-48 h-4 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <div className="w-16 h-4 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </Header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <section className="p-6">
            <div className="w-full aspect-[21/9] bg-gray-100 rounded-lg animate-pulse" />
          </section>

          <section className="p-6">
            <div className="space-y-4">
              <div className="h-10 bg-gray-100 rounded animate-pulse" />
              <div className="h-10 bg-gray-100 rounded animate-pulse" />
              <div className="h-32 bg-gray-100 rounded animate-pulse" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 