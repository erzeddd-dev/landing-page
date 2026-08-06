"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Budi S.",
    major: "Manajemen",
    review:
      "Olah data SPSS rapi, penjelasan output gampang diikuti. Lebih percaya diri saat bimbingan Bab 4.",
    initial: "B",
  },
  {
    name: "Siti A.",
    major: "Ilmu Komunikasi",
    review:
      "Parafrase dan proofreading bikin naskah lebih natural. Komunikasi cepat, revisi sesuai request.",
    initial: "S",
  },
  {
    name: "Andi P.",
    major: "Ekonomi",
    review:
      "Butuh panel data + EViews. Proses transparan dari brief sampai file final. Cocok deadline ketat.",
    initial: "A",
  },
  {
    name: "Rina A.",
    major: "Akuntansi",
    review:
      "Model error dibenahi plus catatan cara baca hasil. Membantu banget persiapan sidang.",
    initial: "R",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 max-w-lg mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            Testimoni
          </h2>
          <p className="text-text-muted text-sm md:text-base">
            Ringkas dari klien yang sudah dibantu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {REVIEWS.map((r, i) => (
            <motion.blockquote
              key={r.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              className="ui-card p-5 md:p-6 flex flex-col"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-3.5 h-3.5 fill-amber-400/90 text-amber-400/90"
                  />
                ))}
              </div>
              <p className="text-sm text-white/75 leading-relaxed flex-1 mb-5">
                &ldquo;{r.review}&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center text-sm font-semibold text-white/90">
                  {r.initial}
                </div>
                <div>
                  <cite className="not-italic text-sm font-semibold text-white">
                    {r.name}
                  </cite>
                  <p className="text-xs text-text-muted">{r.major}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
