import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Bookmarks",
  description:
    "My Bookmarks es una aplicación web para organizar y guardar rápidamente tus enlaces favoritos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="w-dvw h-dvh bg-background text-primary-font">{children}</body>
    </html>
  );
}
