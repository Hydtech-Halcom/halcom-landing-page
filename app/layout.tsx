import React from "react";
import type { Metadata } from "next";
import { Rubik, Noto_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import SmoothScroll from "@/components/shared/smooth-scroll";
import { ScrollToTop } from "@/components/shared/scroll-to-top";

const _rubik = Rubik({ subsets: ["latin"] });
const _notoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Halcom - IT Infrastructure Specialist Solutions",
  description:
    "Halcom provides comprehensive IT Infrastructure solutions with expert certified teams and 20+ years of experience serving enterprise clients since 2003.",
  generator: "v0.app",
  icons: {
    icon: [
      // {
      //   url: '/icon-light-32x32.png',
      //   media: '(prefers-color-scheme: light)',
      // },
      // {
      //   url: '/icon-dark-32x32.png',
      //   media: '(prefers-color-scheme: dark)',
      // },
      // {
      //   url: '/icon.svg',
      //   type: 'image/svg+xml',
      // },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        <Header />
        {children}
        <Analytics />
        <SmoothScroll />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
