"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const TOOLS = ["SPSS", "EViews", "STATA", "SmartPLS"];

export default function Hero() {
  const waLink = () => {
    const text = encodeURIComponent(
      "Halo, saya ingin konsultasi layanan olah data penelitian. Boleh dibantu?"
    );
    return `https://wa.me/6285713071197?text=${text}`;
  };

  return (
    <section className="relative pt-32 pb-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-8">
            {TOOLS.map((t) => (
              <span
                key={t}
                className="text-xs font-semibold tracking-wide px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-white/70"
              >
                {t}
              </span>
            ))}
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.25rem] font-bold tracking-tight leading-[1.1] mb-5">
            Jasa olah data{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
              kuantitatif &amp; ekonometrika
            </span>
          </h1>

          <p className="text-text-muted text-base md:text-lg max-w-xl mx-auto mb-9 leading-relaxed">
            SPSS, EViews, STATA, SmartPLS. Plus parafrase, proofreading, dan
            naskah jurnal. Mulai dari Rp 250rb.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Konsultasi via WA
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <Link
              href="/pricelist"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-white/12 text-sm font-medium text-white/80 hover:text-white hover:border-white/25 hover:bg-white/[0.03] transition-colors"
            >
              Lihat harga
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
