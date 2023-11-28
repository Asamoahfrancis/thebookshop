import Footer from "../ui/footer/page";
import Navbar from "../ui/navbar/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-[#F0F0FA] max-w-[1444px] mx-auto text-black">
      <Navbar />
      {children}
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
