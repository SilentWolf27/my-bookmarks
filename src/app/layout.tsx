import { SideBar } from "@/components/common/SideBar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="w-dvh h-dvh">
        <div className="flex h-full w-full flex-col md:flex-row">
          <SideBar />
          <main className="w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
