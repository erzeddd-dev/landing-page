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
  title: "Jasa Olah Data Penelitian Premium",
  description: "Terkendala Olah Data Penelitian? Biar kami yang urus datanya. Layanan premium olah data SPSS, EViews, Ekonometrika, Penyusunan Makalah, dan Parafrase.",
  openGraph: {
    title: "Jasa Olah Data Penelitian Premium",
    description: "Terkendala Olah Data Penelitian? Biar kami yang urus datanya. Layanan premium olah data SPSS, EViews, Ekonometrika, Penyusunan Makalah, dan Parafrase.",
    url: "https://jasadata.com",
    siteName: "Jasa Olah Data Premium",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Olah Data Penelitian Premium",
    description: "Layanan premium olah data SPSS, EViews, Ekonometrika, Penyusunan Makalah, dan Parafrase.",
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
