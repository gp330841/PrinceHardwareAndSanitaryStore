import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SHOP_INFO } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1e40af",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${SHOP_INFO.name} | ${SHOP_INFO.tagline}`,
    template: `%s | ${SHOP_INFO.name}`,
  },
  description: SHOP_INFO.description,
  keywords: [
    "hardware store",
    "sanitary store",
    "sanitary fittings",
    "bathroom fixtures",
    "pipes and fittings",
    "plumbing supplies",
    "electrical supplies",
    "paints",
    "tiles",
    SHOP_INFO.name,
    SHOP_INFO.address.city,
    SHOP_INFO.address.state,
  ],
  authors: [{ name: SHOP_INFO.name }],
  creator: SHOP_INFO.name,
  publisher: SHOP_INFO.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: `${SHOP_INFO.name} | ${SHOP_INFO.tagline}`,
    description: SHOP_INFO.description,
    type: "website",
    locale: "en_IN",
    siteName: SHOP_INFO.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SHOP_INFO.name} | ${SHOP_INFO.tagline}`,
    description: SHOP_INFO.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${inter.className} antialiased min-h-screen flex flex-col bg-white text-slate-900 selection:bg-orange-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
