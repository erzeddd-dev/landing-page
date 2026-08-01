'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'Apakah kerahasiaan data saya terjamin?',
    answer: 'Sangat terjamin. Kami memiliki kebijakan privasi ketat. Semua data penelitian, judul penelitian, dan identitas klien akan dihapus secara permanen setelah proyek selesai dan di-ACC.'
  },
  {
    question: 'Berapa lama proses pengerjaannya?',
    answer: 'Waktu pengerjaan standar adalah 3-7 hari kerja tergantung tingkat kesulitan. Kami juga menyediakan layanan paket "Ngebut" untuk pengerjaan 1-2 hari (dengan biaya tambahan).'
  },
  {
    question: 'Apakah ada garansi revisi jika disalahkan dosen?',
    answer: 'Tentu! Kami memberikan garansi revisi gratis sampai di-ACC oleh dosen pembimbing Anda, selama revisi tidak menyimpang dari judul dan kesepakatan awal.'
  },
  {
    question: 'Bagaimana sistem pembayarannya?',
    answer: 'Pembayaran dilakukan secara bertahap. Anda cukup membayar DP sebesar 50% di awal sebagai tanda jadi, dan pelunasan dibayarkan setelah draft final selesai kami kerjakan.'
  },
  {
    question: 'Aplikasi olah data apa saja yang dikuasai?',
    answer: 'Tim ahli kami menguasai berbagai aplikasi statistik dan ekonometrika seperti SPSS, EViews, PLS, SmartPLS, Amos, STATA, hingga R-Studio.'
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pertanyaan Seputar <span className="text-brand-accent">Layanan Kami</span>
          </h2>
          <p className="text-gray-400">
            Temukan jawaban untuk pertanyaan yang paling sering ditanyakan oleh mahasiswa.
          </p>
        </motion.div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-medium text-lg pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-brand-primary transition-transform duration-300 flex-shrink-0 ${activeIndex === idx ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-white/5 pt-4 mt-1">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
