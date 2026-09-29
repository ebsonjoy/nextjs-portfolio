import { Metadata } from "next";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ebson Joy | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in Next.js, React, Node.js, NestJS, TypeScript, and scalable web applications.",
  keywords: [
    "Ebson Joy",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "NestJS Developer",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "MongoDB",
    "Web Development",
    "Software Engineer",
  ],
  authors: [{ name: "Ebson Joy" }],
  creator: "Ebson Joy",
  metadataBase: new URL("https://www.ebson.online"),
  alternates: {
    canonical: "https://www.ebson.online/",
  },
  icons: {
    icon: "/images/Ebson-Joy.jpg",
    shortcut: "/images/Ebson-Joy.jpg",
    apple: "/images/Ebson-Joy.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ebson.online/",
    title: "Ebson Joy | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Next.js, React, Node.js, NestJS, TypeScript, and scalable web applications.",
    siteName: "Ebson Joy Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ebson Joy - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebson Joy | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Next.js, React, Node.js, NestJS, TypeScript, and scalable web applications.",
    images: ["/opengraph-image.png"],
    creator: "@ebsonjoy",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-background text-text-primary antialiased">
        <div className="relative flex flex-col min-h-screen">
          <Navbar />
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
