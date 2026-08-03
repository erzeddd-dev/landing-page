import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://olahdata.me"),
  title: "Jasa Olah Data Penelitian",
  description: "Terkendala Olah Data Penelitian? Biar kami yang urus datanya. Layanan olah data SPSS, EViews, Ekonometrika, Penyusunan Makalah, dan Parafrase.",
  openGraph: {
    title: "Jasa Olah Data Penelitian",
    description: "Terkendala Olah Data Penelitian? Biar kami yang urus datanya. Layanan olah data SPSS, EViews, Ekonometrika, Penyusunan Makalah, dan Parafrase.",
    url: "https://olahdata.me",
    siteName: "Uji Data",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://olahdata.me/og-image.png?v=20260804",
        width: 1200,
        height: 630,
        alt: "Uji Data - Jasa Olah Data Penelitian",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Olah Data Penelitian",
    description: "Layanan olah data SPSS, EViews, Ekonometrika, Penyusunan Makalah, dan Parafrase.",
    images: ["https://olahdata.me/og-image.png?v=20260804"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${outfit.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased min-h-screen selection:bg-brand-primary selection:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
