import type { Metadata } from "next";
import { Tinos } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
const tinos = Tinos({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "medig+",
  description: "A medtech application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={tinos.className}>
        <header className="h-[10vh]  block">
          {/* Contains Fixed NavBar Component only */}
          <Navbar />
        </header>
        <main>
          {/* All the Pages are Rendered Here  */}
          {children}
        </main>
        <footer >
          {/* Contains Footer Component only */}
          <Footer />
        </footer>
      </body>
    </html>
  );
}
