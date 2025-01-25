"use client";

import { usePathname } from "next/navigation";

export function SideBar() {
  const pathame = usePathname();

  const isAuthPath = pathame.includes("/auth");

  return (
    <aside className={`${isAuthPath ? "hidden" : "block"}`}>
      <h1>My Bookmarks</h1>
    </aside>
  );
}
