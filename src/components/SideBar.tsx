import { signOut } from "@/auth/actions/signOut";
import { LogoutOutlined, PlusOutlined } from "@ant-design/icons";
import Link from "next/link";
import CollectionsNav from "../collections/components/CollectionsNav";
import { Suspense } from "react";
import CollectionsNavSkeleton from "@/collections/components/CollectionsNavSkeleton";

export async function SideBar() {
  return (
    <aside className="min-w-[300px] w-[18%] max-w-[420px] px-6 py-8 bg-background text-primary-font flex flex-col justify-start max-h-dvh overflow-hidden">
      <article>
        <div className="flex justify-between items-center">
          <h1 className="text-left font-bold text-lg">My Bookmarks</h1>
          <Link
            href={"/nuevo"}
            className="flex justify-center items-center bg-zinc-300 px-2 h-6 text-primary-font hover:bg-zinc-400 transition-[background-color] duration-250 rounded-sm">
            <PlusOutlined className="text-sm" />
          </Link>
        </div>
      </article>

      <Suspense fallback={<CollectionsNavSkeleton />}>
        <CollectionsNav />
      </Suspense>
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
