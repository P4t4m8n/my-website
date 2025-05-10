import Footer from "@/components/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-screen h-full relative overflow-hidden">
      {children}
      <Footer />
    </main>
  );
}
