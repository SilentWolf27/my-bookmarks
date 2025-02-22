import { SideBar } from "@/components/SideBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex h-full w-full flex-col md:flex-row">
        <SideBar />
        <main className="w-full">{children}</main>
      </div>
    </>
  );
}
