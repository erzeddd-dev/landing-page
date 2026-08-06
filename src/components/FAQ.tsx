"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "Layanan ini mencakup apa saja?",
    answer:
      "Fokus: olah data kuantitatif & ekonometrika (SPSS, EViews, STATA, SmartPLS/SEM). Pendukung: parafrase, proofreading, dan naskah jurnal. Detail cakupan disepakati setelah brief (data, model, deadline).",
  },
  {
    question: "Berapa lama pengerjaan?",
    answer:
      "Basic sekitar 5-7 hari kerja, Ngebut 1-3 hari kerja, tergantung antrean dan kompleksitas. Estimasi final dikonfirmasi sebelum mulai.",
  },
  {
    question: "Bagaimana sistem revisi?",
    answer:
      "Revisi mengikuti paket dan brief awal. Perubahan besar di luar kesepakatan (ganti model total, dll.) dibahas sebagai penyesuaian ruang lingkup.",
  },
  {
    question: "Bagaimana pembayaran?",
    answer:
      "Umumnya DP di awal, pelunasan setelah draft sesuai brief. Rincian disampaikan di WhatsApp sebelum pengerjaan.",
  },
  {
    question: "Apakah data saya aman?",
    answer:
      "Ya. File dan identitas dipakai hanya untuk proyek Anda. Tidak dibagikan ke pihak lain.",
  },
  {
    question: "Siapa yang bertanggung jawab atas karya akhir?",
    answer:
      "Anda sebagai penulis/peneliti. Kami bantu analisis teknis dan perapihan naskah. Memahami dan mempertanggungjawabkan hasil di bimbingan/sidang tetap di sisi klien.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 px-6 pb-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            FAQ
          </h2>
          <p className="text-text-muted text-sm md:text-base">
            Pertanyaan yang paling sering muncul.
          </p>
        </div>

        <div className="space-y-2">
          {FAQS.map((faq, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={faq.question}
                className="ui-card overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left"
                >
                  <span className="text-sm md:text-base font-medium text-white/90">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-white/40 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                    >
                      <p className="px-5 pb-4 text-sm text-text-muted leading-relaxed border-t border-white/[0.05] pt-3">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
