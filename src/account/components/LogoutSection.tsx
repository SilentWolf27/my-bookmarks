import { signOut } from "@/auth/actions/signOut";
import { LogoutOutlined } from "@ant-design/icons";

export default function LogoutSection() {
  return (
    <div className="flex items-center justify-end">
      <form action={signOut}>
        <button
          type="submit"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition-colors">
          <LogoutOutlined className="text-base" />
          Cerrar sesión
        </button>
      </form>
    </div>
  );
} 