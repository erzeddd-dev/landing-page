"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Paket Basic",
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
  const getWhatsAppLink = (packageName: string) => {
    const text = encodeURIComponent(`Halo kak, saya tertarik dengan ${packageName}. Boleh konsultasi detailnya?`);
    return `https://wa.me/6285713071197?text=${text}`;
  };

  return (
    <section id="harga" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
          Investasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Kelulusan</span> Anda
        </h2>
        <p className="text-text-muted max-w-2xl mx-auto">
          Pilih paket yang sesuai dengan kebutuhan dan deadline Anda. Transparan, tanpa biaya tersembunyi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {tiers.map((tier, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`relative p-8 rounded-3xl border backdrop-blur-xl ${
              tier.highlight
                ? "bg-gradient-to-b from-brand-primary/20 to-brand-secondary/10 border-brand-secondary/50 shadow-[0_0_30px_rgba(255,0,127,0.15)] md:-translate-y-4"
                : "bg-glass border-glass-border hover:bg-glass-hover"
            } transition-colors`}
          >
            {tier.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-full text-xs font-bold text-white shadow-lg">
                {tier.badge}
              </div>
            )}
            
            <h3 className="text-2xl font-heading font-semibold mb-2">{tier.name}</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold">{tier.price}</span>
            </div>
            <p className="text-sm text-text-muted mb-8 min-h-[40px]">{tier.description}</p>
            
            <ul className="space-y-4 mb-8">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className={`w-5 h-5 shrink-0 ${tier.highlight ? "text-brand-secondary" : "text-brand-primary"}`} />
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
        ))}
      </div>
    </section>
  );
}
