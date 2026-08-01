"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const getWhatsAppLink = () => {
    const text = encodeURIComponent("Halo kak, saya tertarik dengan layanan olah data. Boleh konsultasi?");
    return `https://wa.me/6285713071197?text=${text}`;
  };

  return (
    <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass border border-glass-border mb-8 shadow-[0_0_15px_rgba(138,43,226,0.3)] backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-brand-secondary" />
          <span className="text-sm font-medium tracking-wide text-gray-200">
            Jasa Olah Data #1 Mahasiswa
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-6 leading-[1.1]">
          Terkendala Olah Data Penelitian? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
            Biar Kami yang Urus Datanya.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
          Tinggalkan stres analisis data. Kami bantu selesaikan olah data SPSS, EViews, Ekonometrika hingga penyusunan makalah dengan hasil akurat dan terpercaya.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span>Konsultasi Gratis Sekarang</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#layanan"
            className="inline-flex items-center justify-center px-8 py-4 text-gray-300 hover:text-white transition-colors"
          >
            Lihat Layanan Kami
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative blurred blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-primary rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-brand-secondary rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none" />
    </section>
  );
}
