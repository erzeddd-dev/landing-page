'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Budi Santoso',
    major: 'Mahasiswa Manajemen',
    review: 'Penelitian saya yang macet berbulan-bulan kelar dalam 2 minggu berkat bantuan olah data SPSS di sini. Dosen pembimbing langsung ACC tanpa banyak revisi!',
    rating: 5,
    initial: 'B',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    name: 'Siti Aisyah',
    major: 'Mahasiswa Ilmu Komunikasi',
    review: 'Gak nyangka hasilnya serapi ini. Parafrasenya natural banget, skor Turnitin langsung turun drastis di bawah 15%. Pelayanannya juga ramah banget.',
    rating: 5,
    initial: 'S',
    color: 'bg-emerald-500'
  },
  {
    id: 3,
    name: 'Andi Pratama',
    major: 'Mahasiswa Ekonomi',
    review: 'Awalnya ragu karena harganya cukup miring, tapi setelah lihat hasil Bab 4 saya, sumpah ini recommended banget buat pejuang penelitian yang lagi pusing!',
    rating: 5,
    initial: 'A',
    color: 'bg-violet-500'
  },
  {
    id: 4,
    name: 'Rina Amelia',
    major: 'Mahasiswa Akuntansi',
    review: 'Data panel saya yang error terus akhirnya bisa beres. EViews-nya dikerjain dengan sangat detail plus dikasih penjelasan cara bacanya. Sangat membantu pas sidang!',
    rating: 5,
    initial: 'R',
    color: 'bg-rose-500'
  }
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kata Mereka yang Sudah <span className="text-brand-accent">Lulus</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ratusan mahasiswa telah kami bantu untuk menyelesaikan tugas akhir mereka dengan nilai terbaik dan bebas plagiasi.
          </p>
        </motion.div>
      </div>

      {/* Testimonials Scroll Container */}
      <div className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* Helper spacer for left padding in scroll */}
        <div className="min-w-[10px] md:min-w-[calc((100vw-1200px)/2)] flex-shrink-0" />
        
        {REVIEWS.map((review, idx) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="snap-center shrink-0 w-[300px] md:w-[400px] bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl relative group hover:border-brand-primary/50 transition-colors"
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 group-hover:text-brand-primary/20 transition-colors" />
            
            <div className="flex gap-1 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            
            <p className="text-gray-300 mb-6 relative z-10 leading-relaxed">
              "{review.review}"
            </p>
            
            <div className="flex items-center gap-4 mt-auto">
              <div className={`w-12 h-12 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                {review.initial}
              </div>
              <div>
                <h4 className="font-semibold text-white">{review.name}</h4>
                <p className="text-sm text-gray-400">{review.major}</p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Helper spacer for right padding in scroll */}
        <div className="min-w-[10px] md:min-w-[calc((100vw-1200px)/2)] flex-shrink-0" />
      </div>
    </section>
  );
}
