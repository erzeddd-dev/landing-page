"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  LineChart,
  Network,
  FileText,
  SpellCheck,
  BookOpen,
} from "lucide-react";

const services = [
  {
    title: "Olah Data SPSS",
    description:
      "Deskriptif, validitas-reliabilitas, asumsi klasik, regresi, uji hipotesis. Output rapi + ringkasan interpretasi.",
    icon: BarChart3,
    accent: "text-sky-400",
    ring: "from-sky-500/20 to-indigo-500/10",
  },
  {
    title: "Ekonometrika",
    description:
      "Panel, time series, model ekonometrika (EViews / STATA). Cocok data sekunder & riset ekonomi.",
    icon: LineChart,
    accent: "text-pink-400",
    ring: "from-pink-500/20 to-fuchsia-500/10",
  },
  {
    title: "SmartPLS & SEM",
    description:
      "Outer/inner model, mediasi-moderasi, path analysis sesuai template jurusan.",
    icon: Network,
    accent: "text-emerald-400",
    ring: "from-emerald-500/20 to-teal-500/10",
  },
  {
    title: "Parafrase",
    description:
      "Perapihan naskah agar lebih natural dan similarity terkendali, tanpa ubah makna.",
    icon: FileText,
    accent: "text-violet-400",
    ring: "from-violet-500/20 to-purple-500/10",
  },
  {
    title: "Proofreading",
    description:
      "Ejaan, tata bahasa, konsistensi istilah, dan keterbacaan bab hasil.",
    icon: SpellCheck,
    accent: "text-amber-400",
    ring: "from-amber-500/20 to-orange-500/10",
  },
  {
    title: "Naskah Jurnal",
    description:
      "Susun / rapih artikel sesuai template (IMRaD, sitasi, tabel-gambar).",
    icon: BookOpen,
    accent: "text-cyan-300",
    ring: "from-cyan-500/20 to-brand-accent/10",
  },
];

export default function ServiceCatalog() {
  return (
    <section id="layanan" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 max-w-lg mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            Layanan
          </h2>
          <p className="text-text-muted text-sm md:text-base">
            Inti di kuantitatif &amp; ekonometrika. Ditambah dukungan naskah.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                className="ui-card ui-card-hover p-5 md:p-6"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.ring} border border-white/[0.06] flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-5 h-5 ${s.accent}`} />
                </div>
                <h3 className="font-heading font-semibold text-base mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
