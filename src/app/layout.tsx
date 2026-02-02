import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://nhsfukdharmafest.vercel.app";

export const metadata: Metadata = {
  title: "DharmaFest 2026 | NHSF (UK)",
  description:
    "DharmaFest 2026 — Your Story, On Stage. National showcase for culture and identity through the creative arts.",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/logo-nobg.png",
    apple: "/logo-nobg.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "DharmaFest 2026",
    title: "DharmaFest 2026 | NHSF (UK)",
    description:
      "DharmaFest 2026 — Your Story, On Stage. National showcase for culture and identity through the creative arts.",
    images: [
      {
        url: "/logo-nobg.png",
        width: 1200,
        height: 630,
        alt: "DharmaFest – Your Story, On Stage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DharmaFest 2026 | NHSF (UK)",
    description:
      "DharmaFest 2026 — Your Story, On Stage. National showcase for culture and identity through the creative arts.",
    images: ["/logo-nobg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
