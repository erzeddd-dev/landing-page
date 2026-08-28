import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import { CategoryTabProvider } from "@/context/CategoryTabContext";
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
  // Tab browser + fallback; Discord/X title utama = openGraph.title / twitter.title
  title: {
    default: "Nomor #1 di #zonauang",
    template: "%s · OlahData",
  },
  description:
    "Jasa olah data kuantitatif & ekonometrika. Paket Basic 250rb · Ngebut 450rb · Lulus Aman 750rb. SPSS, EViews, STATA, SmartPLS, parafrase, proofreading, jurnal.",
  openGraph: {
    // Discord: baris biru (title) di embed
    title: "Nomor #1 di #zonauang",
    description:
      "Basic 250rb · Ngebut 450rb · Lulus Aman 750rb. SPSS, EViews, STATA, SmartPLS · parafrase & jurnal.",
    url: "https://olahdata.me",
    siteName: "OlahData",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://olahdata.me/og-image.png?v=20260806d",
        width: 1200,
        height: 630,
        alt: "OlahData price list: Basic 250rb, Ngebut 450rb, Lulus Aman 750rb",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomor #1 di #zonauang",
    description:
      "Basic 250rb · Ngebut 450rb · Lulus Aman 750rb. SPSS, EViews, STATA, SmartPLS · parafrase & jurnal.",
    images: ["https://olahdata.me/og-image.png?v=20260806d"],
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
        <CategoryTabProvider>
          <Navbar />
          {children}
        </CategoryTabProvider>
      </body>
    </html>
  );
}
