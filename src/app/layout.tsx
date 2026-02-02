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
  themeColor: "#060606",
  manifest: "/manifest.json",
  icons: [
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/webicon.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/webicon.png" },
    { rel: "icon", type: "image/png", sizes: "96x96", url: "/webicon.png" },
    { rel: "icon", type: "image/png", sizes: "192x192", url: "/webicon.png" },
    { rel: "apple-touch-icon", sizes: "57x57", url: "/webicon.png" },
    { rel: "apple-touch-icon", sizes: "60x60", url: "/webicon.png" },
    { rel: "apple-touch-icon", sizes: "72x72", url: "/webicon.png" },
    { rel: "apple-touch-icon", sizes: "76x76", url: "/webicon.png" },
    { rel: "apple-touch-icon", sizes: "114x114", url: "/webicon.png" },
    { rel: "apple-touch-icon", sizes: "120x120", url: "/webicon.png" },
    { rel: "apple-touch-icon", sizes: "144x144", url: "/webicon.png" },
    { rel: "apple-touch-icon", sizes: "152x152", url: "/webicon.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/webicon.png" },
  ],
  other: {
    "msapplication-TileColor": "#060606",
    "msapplication-TileImage": "/webicon.png",
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
        url: "/Logo.png",
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
    images: ["/Logo.png"],
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
