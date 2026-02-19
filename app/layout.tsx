import React from "react";
import type { Metadata } from "next";
import { Rubik, Noto_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import SmoothScroll from "@/components/shared/smooth-scroll";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import Chatbot from "@/components/Chatbot";

const _rubik = Rubik({ subsets: ["latin"] });
const _notoSans = Noto_Sans({ subsets: ["latin"] });

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://hydtech.co.id";

export const metadata: Metadata = {
  // Basic Metadata
  title: {
    default: "Halcom - IT Infrastructure Specialist Solutions",
    template: "%s | Halcom",
  },
  description: "Halcom provides comprehensive IT Infrastructure solutions with expert certified teams and 20+ years of experience serving enterprise clients since 2003.",
  keywords: ["IT Infrastructure", "IT Solutions", "Data Center", "Network Solutions", "Cloud Services", "IT Consulting", "Enterprise IT", "Halcom", "Indonesia"],
  authors: [{ name: "Halcom", url: baseUrl }],
  creator: "Halcom",
  publisher: "Halcom",

  // Canonical URL
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },

  // Open Graph (untuk Facebook, LinkedIn, dll)
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: baseUrl,
    siteName: "Halcom",
    title: "Halcom - IT Infrastructure Specialist Solutions",
    description: "Halcom provides comprehensive IT Infrastructure solutions with expert certified teams and 20+ years of experience serving enterprise clients since 2003.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Halcom - IT Infrastructure Specialist",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Halcom - IT Infrastructure Specialist Solutions",
    description: "Halcom provides comprehensive IT Infrastructure solutions with expert certified teams and 20+ years of experience.",
    images: ["/assets/og-image.png"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/images/halcom-icon.png", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },

  // Verification (uncomment dan isi jika sudah punya)
  // verification: {
  //   google: "google-site-verification-code",
  //   yandex: "yandex-verification-code",
  // },

  // Category
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <div className="relative flex min-h-dvh flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Analytics />
          <SmoothScroll />
          <ScrollToTop />
          <Chatbot />
          <Footer />
        </div>
      </body>
    </html>
  );
}
