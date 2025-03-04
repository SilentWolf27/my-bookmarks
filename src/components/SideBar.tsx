import { signOut } from "@/auth/actions/signOut";
import { LogoutOutlined } from "@ant-design/icons";
import CollectionsNav from "../collections/components/CollectionsNav";

import { createClient } from "@/supabase/clients/server";
import { getCollections } from "@/collections/api/getCollections";

export async function SideBar() {
  const supabase = await createClient();
  const collections = await getCollections(supabase);

  return (
    <aside className="min-w-[280px] w-[18%] max-w-[360px] h-full flex flex-col bg-white border-r border-gray-100">
      <CollectionsNav collections={collections} />
      <div className="mt-auto p-4 border-t border-gray-100">
        <form action={signOut}>
          <button
            type="submit"
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-colors">
            <LogoutOutlined />
            Cerrar sesión
          </button>
        </form>
      </div>
    </aside>
  );
}
