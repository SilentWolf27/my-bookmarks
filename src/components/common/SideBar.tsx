"use client";

import { signOut } from "@/actions/auth/signOut";
import { LogoutOutlined, PlusOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";

export function SideBar() {
  const pathame = usePathname();

  const isAuthPath = pathame.includes("/auth");

  return (
    <aside
      className={`${
        isAuthPath ? "hidden" : "block"
      } min-w-[300px] w-[18%] max-w-[420px] px-6 py-8 bg-background text-primary-font flex flex-col justify-between`}>
      <article>
        <div className="flex justify-between items-center">
          <h1 className="text-left font-bold text-lg">My Bookmarks</h1>
          <button
            type="button"
            className="bg-zinc-300 w-7 h-6 text-primary-font hover:bg-zinc-400 transition-[background-color] duration-250 rounded-sm">
            <PlusOutlined className="text-sm" />
          </button>
        </div>
      </article>
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
