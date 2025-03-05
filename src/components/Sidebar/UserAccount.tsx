import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

export function UserAccount() {
  return (
    <div className="mt-auto p-4 border-t border-gray-100">
      <Link
        href="/cuenta"
        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-colors">
        <UserOutlined />
        Mi cuenta
      </Link>
    </div>
  );
} 