import { FolderOutlined } from "@ant-design/icons";
import { Collection } from "../interfaces/Collections";

interface Props {
  collection: Collection;
}

export default function CollectionHeader({ collection }: Props) {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 py-4">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FolderOutlined className="mr-1" />
          <span className="text-gray-900 font-medium">{collection.name}</span>
        </div>
        {collection.description && (
          <p className="mt-1 text-sm text-gray-500">{collection.description}</p>
        )}
      </div>
    </header>
  );
} 