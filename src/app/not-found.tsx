import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-dark flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-9xl font-bold text-white/10 mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Halaman Tidak Ditemukan
      </h2>
      <p className="text-gray-400 max-w-md mb-8">
        Maaf, halaman yang Anda cari mungkin telah dipindahkan atau tidak pernah ada.
      </p>
      
      <Link 
        href="/"
        className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-brand-primary/90 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Kembali ke Beranda
      </Link>
    </main>
  );
}
