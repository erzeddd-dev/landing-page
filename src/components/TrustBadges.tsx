'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, FileCheck, Award, Clock } from 'lucide-react';

const BADGES = [
  {
    icon: ShieldCheck,
    title: '100% Kerahasiaan',
    description: 'Data dan identitas Anda aman bersama kami.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10'
  },
  {
    icon: FileCheck,
    title: 'Bebas Plagiarisme',
    description: 'Penyusunan natural, aman dari deteksi Turnitin.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    icon: Award,
    title: 'Garansi ACC',
    description: 'Revisi gratis sampai disetujui dosen pembimbing.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10'
  },
  {
    icon: Clock,
    title: 'Tepat Waktu',
    description: 'Pengerjaan disiplin sesuai tenggat waktu.',
    color: 'text-brand-primary',
    bg: 'bg-brand-primary/10'
  }
];

export default function TrustBadges() {
  return (
    <section className="py-8 relative z-10 -mt-8">
      <div className="container mx-auto px-6">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {BADGES.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 pt-6 md:pt-0 md:px-6 first:pt-0 md:first:pl-0 lg:last:pr-0"
                >
                  <div className={`w-12 h-12 rounded-full ${badge.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${badge.color}`} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{badge.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{badge.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
