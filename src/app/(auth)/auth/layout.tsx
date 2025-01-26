export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full h-full text-base flex flex-col justify-center items-center text-primary-font">
      {children}
    </main>
  );
}
