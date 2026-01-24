import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'
import SmoothScroll from "@/components/ui/SmoothScroll";
import GlobalBackground from "@/components/layout/GlobalBackground";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Ebson Joy | Portfolio",
  description: "Next.js Portfolio of Ebson Joy",
  icons: {
    icon: "/images/Ebson-Joy.jpg",
    shortcut: "/images/Ebson-Joy.jpg",
    apple: "/images/Ebson-Joy.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} min-h-screen transition-colors duration-300 text-gray-100`}
      >
        <SmoothScroll>
          <div className="relative">
            <GlobalBackground />
            <div className="sticky top-0 z-50">
              <Navbar />
            </div>
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 relative">
              <div className="relative">
                {children}
              </div>
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}