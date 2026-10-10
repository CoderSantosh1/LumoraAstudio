import type { Metadata } from "next";
import { Allura, Gilda_Display, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

/* Site fonts from the reference design (self-hosted by next/font at build time) */
const gildaDisplay = Gilda_Display({
  variable: "--font-gilda",
  weight: "400",
  subsets: ["latin"],
});

const allura = Allura({
  variable: "--font-allura",
  weight: "400",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
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
      className={`${gildaDisplay.variable} ${allura.variable} ${plusJakarta.variable} h-full antialiased`}
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