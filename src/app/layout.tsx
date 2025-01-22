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
        className={`${inter.className} bg-gradient-to-br from-gray-50 via-white to-gray-100 
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen 
        transition-colors duration-300`}
      >
        <div className="relative">
          <PageLoading />
          <div className="sticky top-0 z-50">
            <Navbar />
          </div>
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 relative">
            <div className="absolute inset-0 bg-grid-gray-200 dark:bg-grid-gray-700 bg-opacity-30 dark:bg-opacity-30" />
            <div className="relative">
              {children}
            </div>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}