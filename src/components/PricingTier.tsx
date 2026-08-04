"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Shield, Clock } from "lucide-react";

const tiers = [
  {
    name: "Paket Basic", shortLabel: "Basic", price: "250k",
    description: "Cocok untuk mahasiswa dengan waktu pengerjaan santai.",
    Icon: Clock,
    topBar: "from-indigo-400 to-cyan-400",
    iconBg: "bg-indigo-500/20", iconColor: "text-indigo-300",
    checkBg: "bg-indigo-500/20", checkColor: "text-indigo-300",
    cardBg: "from-indigo-900/60 via-indigo-900/30 to-slate-900/80",
    border: "border-indigo-500/30",
    btnClass: "bg-indigo-500/20 border border-indigo-400/40 text-indigo-200 hover:bg-indigo-500/30",
    features: ["Pengerjaan 5-7 Hari Kerja","Olah Data Deskriptif","Uji Asumsi Klasik","Free Konsultasi 1x"],
    buttonText: "Pilih Basic",
  },
  {
    name: "Paket Ngebut", shortLabel: "Ngebut", price: "450k",
    description: "Solusi cepat untuk deadline yang sudah di depan mata.",
    Icon: Zap, badge: "Best Value",
    topBar: "from-brand-primary via-brand-secondary to-brand-accent",
    iconBg: "bg-pink-500/20", iconColor: "text-pink-300",
    checkBg: "bg-pink-500/20", checkColor: "text-pink-300",
    cardBg: "from-pink-900/60 via-purple-900/40 to-slate-900/80",
    border: "border-pink-500/40",
    btnClass: "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-[0_4px_24px_rgba(255,0,127,0.4)]",
    features: ["Pengerjaan 1-3 Hari Kerja","Semua Fitur Basic","Regresi & Uji Hipotesis","Free Revisi 2x","Prioritas Pengerjaan"],
    buttonText: "Pilih Ngebut",
  },
  {
    name: "Paket Lulus Aman", shortLabel: "Lulus Aman", price: "750k",
    description: "Pendampingan penuh sampai ACC dosen pembimbing.",
    Icon: Shield,
    topBar: "from-emerald-400 to-teal-400",
    iconBg: "bg-emerald-500/20", iconColor: "text-emerald-300",
    checkBg: "bg-emerald-500/20", checkColor: "text-emerald-300",
    cardBg: "from-emerald-900/60 via-teal-900/30 to-slate-900/80",
    border: "border-emerald-500/30",
    btnClass: "bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 hover:bg-emerald-500/30",
    features: ["Semua Fitur Ngebut","Pendampingan Sidang","Bantuan Parafrase (Max 20%)","Free Revisi Unlimited","Garansi Akurasi 100%"],
    buttonText: "Pilih Lulus Aman",
  },
];

// Fan positions: like holding cards in hand (spread left/right)
const fan = (offset: number) => {
  const s = Math.sign(offset);
  const a = Math.abs(offset);
  if (a === 0) return { x: 0,       rotate: 0,      scale: 1,    opacity: 1,    z: 30 };
  if (a === 1) return { x: s * 190, rotate: s * 11, scale: 0.86, opacity: 0.62, z: 20 };
  if (a === 2) return { x: s * 310, rotate: s * 20, scale: 0.74, opacity: 0.28, z: 10 };
  return null;
};

const CARD_W = 300;

export default function PricingTier() {
  const [active, setActive] = useState(1);
  const tx = useRef<number | null>(null);
  const ty = useRef<number | null>(null);

  const goTo = useCallback((i: number) => {
    if (i >= 0 && i < tiers.length) setActive(i);
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    tx.current = e.touches[0].clientX;
    ty.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (tx.current === null || ty.current === null) return;
    const dx = e.changedTouches[0].clientX - tx.current;
    const dy = e.changedTouches[0].clientY - ty.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40)
      dx < 0 ? goTo(active + 1) : goTo(active - 1);
    tx.current = null; ty.current = null;
  };

  const waLink = (name: string) =>
    `https://wa.me/6285713071197?text=${encodeURIComponent(`Halo kak, saya tertarik dengan ${name}. Boleh konsultasi detailnya?`)}`;

  return (
    <section id="harga" className="py-24 overflow-hidden">
      {/* Heading */}
      <div className="px-6 max-w-md mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold mb-4"
        >
          Investasi{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
            Kelulusan
          </span>{" "}
          Anda
        </motion.h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Pilih paket yang sesuai dengan kebutuhan dan deadline Anda. Transparan, tanpa biaya tersembunyi.
        </p>
      </div>

      {/* Tab pills */}
      <div className="flex items-center justify-center gap-2 mb-12 px-6 flex-wrap">
        {tiers.map((t, i) => (
          <button
            key={i} onClick={() => goTo(i)}
            className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
              i === active
                ? t.badge
                  ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white border-transparent shadow-[0_0_20px_rgba(255,0,127,0.4)]"
                  : "bg-white/15 text-white border-white/30 shadow-md"
                : "bg-transparent text-white/50 border-white/10 hover:text-white hover:border-white/25"
            }`}
          >
            {t.shortLabel}
            {t.badge && i !== active && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-gradient-to-r from-brand-secondary to-brand-accent text-white text-[8px] font-bold flex items-center justify-center">★</span>
            )}
          </button>
        ))}
      </div>

      {/* Fan card deck — full width, cards centered via left:50% */}
      <div
        className="relative w-full"
        style={{ height: 510 }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {tiers.map((tier, i) => {
          const offset = i - active;
          const f = fan(offset);
          if (!f) return null;
          const isActive = offset === 0;
          const TierIcon = tier.Icon;

          return (
            <motion.div
              key={tier.name}
              animate={{ x: f.x, rotate: f.rotate, scale: f.scale, opacity: f.opacity }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              onClick={() => !isActive && goTo(i)}
              className={`absolute top-0 rounded-3xl border backdrop-blur-xl overflow-hidden bg-gradient-to-b ${tier.cardBg} ${tier.border} ${!isActive ? "cursor-pointer" : ""}`}
              style={{
                width: CARD_W,
                left: "50%",
                marginLeft: -(CARD_W / 2),
                zIndex: f.z,
                transformOrigin: "50% 85%",
              }}
            >
              {/* Top accent bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${tier.topBar}`} />

              <div className="p-7">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex-1 min-w-0 pr-3">
                    {tier.badge && (
                      <span className="inline-flex items-center gap-1 mb-2 px-3 py-0.5 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-full text-[11px] font-bold text-white">
                        ★ {tier.badge}
                      </span>
                    )}
                    <h3 className="text-lg font-heading font-bold text-white leading-tight">{tier.name}</h3>
                    <p className="text-xs text-white/50 mt-1 leading-relaxed">{tier.description}</p>
                  </div>
                  <div className={`w-11 h-11 rounded-2xl ${tier.iconBg} flex items-center justify-center shrink-0`}>
                    <TierIcon className={`w-5 h-5 ${tier.iconColor}`} />
                  </div>
                </div>

                {/* Price */}
                <div className="mb-5 pb-5 border-b border-white/10">
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-semibold mb-0.5">Mulai dari</p>
                  <p className="text-4xl font-extrabold text-white tracking-tight">Rp {tier.price}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {tier.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full ${tier.checkBg} flex items-center justify-center shrink-0`}>
                        <Check className={`w-3 h-3 ${tier.checkColor}`} />
                      </div>
                      <span className="text-sm text-white/75">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={isActive ? waLink(tier.name) : "#"}
                  target={isActive ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  onClick={(e) => !isActive && e.preventDefault()}
                  className={`block w-full py-3.5 text-center rounded-2xl font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] ${tier.btnClass}`}
                >
                  {tier.buttonText}
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {tiers.map((_, i) => (
          <button
            key={i} onClick={() => goTo(i)} aria-label={`Pilih ${tiers[i].shortLabel}`}
            className={`transition-all duration-300 rounded-full ${
              i === active
                ? "w-8 h-2 bg-gradient-to-r from-brand-primary to-brand-secondary"
                : "w-2 h-2 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
      <p className="text-center text-white/30 text-xs mt-3">Geser atau klik tab untuk berpindah paket</p>
    </section>
  );
}
