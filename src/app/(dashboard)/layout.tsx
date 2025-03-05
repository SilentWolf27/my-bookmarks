import { Sidebar } from "@/components/Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex h-full w-full flex-col md:flex-row">
        <Sidebar />
        <main className="w-full">{children}</main>
      </div>
    </>
  );
}
