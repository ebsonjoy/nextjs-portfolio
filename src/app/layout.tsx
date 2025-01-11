
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'
import PageLoading from '@/components/ui/PageLoading'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={inter.className}
      >
        <PageLoading />
        <Navbar/>
        {children}
        <Footer/>
        <ScrollToTop />
      </body>
    </html>
  );
}
