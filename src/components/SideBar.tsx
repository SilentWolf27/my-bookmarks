import { signOut } from "@/auth/actions/signOut";
import { LogoutOutlined } from "@ant-design/icons";
import CollectionsNav from "../collections/components/CollectionsNav";

import { createClient } from "@/supabase/clients/server";
import { getCollections } from "@/collections/api/getCollections";

export async function SideBar() {
  const supabase = await createClient();
  const collections = await getCollections(supabase);

  return (
    <aside className="min-w-[300px] w-[18%] max-w-[420px] py-8 text-primary-font flex flex-col justify-start max-h-dvh overflow-hidden bg-white rounded-md">
      <CollectionsNav collections={collections} />
      <form action={signOut}>
        <button
          type="submit"
          className="py-1 px-2 w-full flex gap-4 items-center font-normal text-base hover:bg-gray-200 rounded-md transition-[background-color] duration-250">
          <LogoutOutlined />
          Cerrar sesión
        </button>
      </form>
    </aside>
  );
}
