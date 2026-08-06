"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Basic",
    price: "250rb",
    blurb: "Deadline longgar, analisis standar.",
    features: [
      "Estimasi 5-7 hari kerja",
      "Deskriptif & asumsi klasik",
      "Konsultasi 1× via WA",
    ],
    cta: "Pilih Basic",
    featured: false,
  },
  {
    name: "Ngebut",
    price: "450rb",
    blurb: "Deadline ketat, prioritas antrian.",
    features: [
      "Estimasi 1-3 hari kerja",
      "Semua di Basic",
      "Regresi & uji hipotesis",
      "Revisi 2× sesuai brief",
    ],
    cta: "Pilih Ngebut",
    featured: true,
    badge: "Paling dipilih",
  },
  {
    name: "Lulus Aman",
    price: "750rb",
    blurb: "Lebih lengkap, siap dibahas.",
    features: [
      "Semua di Ngebut",
      "Pendampingan interpretasi",
      "Parafrase ringan (scope disepakati)",
      "Revisi lanjutan sesuai brief",
    ],
    cta: "Pilih Lulus Aman",
    featured: false,
  },
];

export default function PricingTier() {
  const wa = (name: string) =>
    `https://wa.me/6285713071197?text=${encodeURIComponent(
      `Halo, saya tertarik Paket ${name}. Boleh konsultasi detail & estimasi?`
    )}`;

  return (
    <section id="harga" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 max-w-lg mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            Paket &amp; harga
          </h2>
          <p className="text-text-muted text-sm md:text-base">
            Harga mulai dari paket. Kompleksitas data menyesuaikan setelah brief
            singkat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-stretch">
          {tiers.map((tier, i) => (
            <motion.article
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className={`relative flex flex-col rounded-2xl p-6 md:p-7 ${
                tier.featured
                  ? "border border-brand-secondary/40 bg-gradient-to-b from-brand-secondary/15 via-brand-primary/10 to-white/[0.02] shadow-[0_0_40px_rgba(255,0,127,0.12)] md:-mt-1 md:mb-1 md:scale-[1.02]"
                  : "ui-card"
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-brand-secondary to-brand-primary text-white whitespace-nowrap">
                  {tier.badge}
                </span>
              )}

              <p className="text-sm font-semibold text-white/90 mb-1">
                {tier.name}
              </p>
              <p className="text-xs text-text-muted mb-5">{tier.blurb}</p>

              <div className="mb-6">
                <p className="text-[11px] uppercase tracking-widest text-white/35 font-semibold mb-1">
                  Mulai dari
                </p>
                <p className="font-heading text-4xl md:text-[2.75rem] font-extrabold tracking-tight">
                  Rp {tier.price}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                    <span
                      className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        tier.featured
                          ? "bg-brand-secondary/20 text-pink-300"
                          : "bg-white/8 text-white/50"
                      }`}
                    >
                      <Check className="w-3 h-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={wa(tier.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all active:scale-[0.98] ${
                  tier.featured
                    ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:opacity-95"
                    : "bg-white/[0.06] border border-white/10 text-white hover:bg-white/[0.1]"
                }`}
              >
                {tier.cta}
              </a>
            </motion.article>
          ))}
        </div>

        <p className="text-center text-white/30 text-xs mt-6">
          Harga final menyesuaikan kompleksitas setelah brief
        </p>
      </div>
    </section>
  );
}
