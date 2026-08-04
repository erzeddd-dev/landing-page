"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

const tiers = [
  {
    name: "Paket Basic",
    shortLabel: "Basic",
    price: "Mulai Rp 250k",
    description: "Cocok untuk mahasiswa dengan waktu pengerjaan santai.",
    features: [
      "Pengerjaan 5-7 Hari Kerja",
      "Olah Data Deskriptif",
      "Uji Asumsi Klasik",
      "Free Konsultasi 1x",
    ],
    highlight: false,
    buttonText: "Pilih Basic",
  },
  {
    name: "Paket Ngebut",
    shortLabel: "Ngebut",
    price: "Mulai Rp 450k",
    description: "Solusi cepat untuk *deadline* yang sudah di depan mata.",
    features: [
      "Pengerjaan 1-3 Hari Kerja",
      "Semua Fitur Basic",
      "Regresi & Uji Hipotesis",
      "Free Revisi 2x",
      "Prioritas Pengerjaan",
    ],
    highlight: true,
    buttonText: "Pilih Ngebut",
    badge: "Best Value",
  },
  {
    name: "Paket Lulus Aman",
    shortLabel: "Lulus Aman",
    price: "Mulai Rp 750k",
    description: "Pendampingan penuh sampai ACC dosen pembimbing.",
    features: [
      "Semua Fitur Ngebut",
      "Pendampingan Sidang",
      "Bantuan Parafrase (Max 20%)",
      "Free Revisi Unlimited",
      "Garansi Akurasi 100%",
    ],
    highlight: false,
    buttonText: "Pilih Lulus Aman",
  },
];

export default function PricingTier() {
  const [activeIndex, setActiveIndex] = useState(1); // default ke "Best Value"
  const [direction, setDirection] = useState(0); // -1 = ke kiri, 1 = ke kanan
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const getWhatsAppLink = (packageName: string) => {
    const text = encodeURIComponent(
      `Halo kak, saya tertarik dengan ${packageName}. Boleh konsultasi detailnya?`
    );
    return `https://wa.me/6285713071197?text=${text}`;
  };

  const goTo = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex]
  );

  const goNext = () => {
    if (activeIndex < tiers.length - 1) goTo(activeIndex + 1);
  };

  const goPrev = () => {
    if (activeIndex > 0) goTo(activeIndex - 1);
  };

  // Touch / swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    // hanya proses swipe horizontal
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const tier = tiers[activeIndex];

  return (
    <section id="harga" className="py-24 px-6 max-w-2xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold mb-4"
        >
          Investasi{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
            Kelulusan
          </span>{" "}
          Anda
        </motion.h2>
        <p className="text-text-muted max-w-xl mx-auto">
          Pilih paket yang sesuai dengan kebutuhan dan deadline Anda.
          Transparan, tanpa biaya tersembunyi.
        </p>
      </div>

      {/* Tab Indicators */}
      <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
        {tiers.map((t, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
              i === activeIndex
                ? t.highlight
                  ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white border-transparent shadow-[0_0_16px_rgba(255,0,127,0.35)]"
                  : "bg-white/15 text-white border-white/30 shadow-md"
                : "bg-transparent text-text-muted border-white/10 hover:border-white/25 hover:text-white"
            }`}
          >
            {t.shortLabel}
            {t.badge && i !== activeIndex && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-brand-secondary to-brand-accent text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                ★
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Carousel Container */}
      <div
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className={`relative p-8 rounded-3xl border backdrop-blur-xl ${
              tier.highlight
                ? "bg-gradient-to-b from-brand-primary/20 to-brand-secondary/10 border-brand-secondary/50 shadow-[0_0_40px_rgba(255,0,127,0.18)]"
                : "bg-glass border-glass-border"
            }`}
          >
            {/* Badge */}
            {tier.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-full text-xs font-bold text-white shadow-lg whitespace-nowrap">
                {tier.badge}
              </div>
            )}

            {/* Card content */}
            <h3 className="text-2xl font-heading font-semibold mb-2">
              {tier.name}
            </h3>
            <div className="mb-4">
              <span className="text-3xl font-bold">{tier.price}</span>
            </div>
            <p className="text-sm text-text-muted mb-8">{tier.description}</p>

            <ul className="space-y-4 mb-8">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check
                    className={`w-5 h-5 shrink-0 ${
                      tier.highlight
                        ? "text-brand-secondary"
                        : "text-brand-primary"
                    }`}
                  />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={getWhatsAppLink(tier.name)}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full py-3 px-6 text-center rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 ${
                tier.highlight
                  ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              {tier.buttonText}
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Arrow Buttons */}
        <button
          onClick={goPrev}
          disabled={activeIndex === 0}
          aria-label="Paket sebelumnya"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-9 h-9 flex items-center justify-center rounded-full bg-glass border border-glass-border text-white shadow-md transition-all hover:bg-white/20 disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={goNext}
          disabled={activeIndex === tiers.length - 1}
          aria-label="Paket berikutnya"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-9 h-9 flex items-center justify-center rounded-full bg-glass border border-glass-border text-white shadow-md transition-all hover:bg-white/20 disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {tiers.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Pilih ${tiers[i].shortLabel}`}
            className={`transition-all duration-300 rounded-full ${
              i === activeIndex
                ? "w-6 h-2 bg-gradient-to-r from-brand-primary to-brand-secondary"
                : "w-2 h-2 bg-white/25 hover:bg-white/45"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
