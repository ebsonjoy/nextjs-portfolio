import { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import SmoothScroll from '@/components/ui/SmoothScroll';
import GlobalBackground from '@/components/layout/GlobalBackground';

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ebson Joy | Full-Stack Developer (Next.js, Node.js, NestJS, Supabase)',
  description:
    'Full-Stack Developer with 2+ years of experience building scalable, secure, and high-performance web applications using Next.js, React, Node.js, NestJS, Supabase, and AWS.',
  keywords: [
    'Ebson Joy',
    'Full-Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Node.js Developer',
    'NestJS Developer',
    'TypeScript',
    'Supabase',
    'PostgreSQL',
    'MongoDB',
    'Stripe Integration',
    'WebSockets',
    'Agora RTC',
    'AWS Cloud',
    'UAE Web Developer',
    'Software Engineer India',
  ],
  authors: [{ name: 'Ebson Joy' }],
  creator: 'Ebson Joy',
  metadataBase: new URL('https://www.ebson.online'),
  icons: {
    icon: '/images/Ebson-Joy.jpg',
    shortcut: '/images/Ebson-Joy.jpg',
    apple: '/images/Ebson-Joy.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ebson.online',
    title: 'Ebson Joy | Full-Stack Developer Portfolio',
    description:
      'Full-Stack Developer with 2+ years of experience building scalable, secure, and high-performance web applications with Next.js, Node.js, NestJS, and Supabase.',
    siteName: 'Ebson Joy Portfolio',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Ebson Joy Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ebson Joy | Full-Stack Developer Portfolio',
    description:
      'Explore projects, architectures, and technical experience of Ebson Joy — Full-Stack Developer specializing in Next.js, Node.js, NestJS, Supabase, and AWS.',
    images: ['/opengraph-image.png'],
    creator: '@ebsonjoy',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark scroll-smooth ${sansFont.variable} ${monoFont.variable}`}>
      <body
        className={`${sansFont.className} min-h-screen bg-navy text-text-primary transition-colors duration-300 selection:bg-primary/30 selection:text-white antialiased`}
      >
        <SmoothScroll>
          <div className="relative">
            <GlobalBackground />
            <div className="sticky top-0 z-50">
              <Navbar />
            </div>
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 relative">
              <div className="relative">{children}</div>
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}