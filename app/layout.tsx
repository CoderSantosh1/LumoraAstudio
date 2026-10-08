import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumora Astudio | Photography & Filmmaking",
  description:
    "Lumora Astudio captures timeless moments through professional photography and filmmaking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Enables the hidden state for scroll animations before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('reveal-ready')",
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0b0a09]">
        <ScrollReveal />

        {/* Navbar - Every Page */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer - Every Page */}
        <Footer />
      </body>
    </html>
  );
}