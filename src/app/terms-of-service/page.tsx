import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service | Uji Data',
  description: 'Syarat dan Ketentuan layanan Uji Data.',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-brand-dark overflow-hidden flex flex-col pt-28">
      <div className="container mx-auto px-6 py-12 flex-grow max-w-4xl">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Beranda
        </Link>
        
        <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Terms of Service (Syarat & Ketentuan)</h1>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Layanan Kami</h2>
              <p>Uji Data menyediakan layanan bimbingan akademik, konsultasi, dan bantuan pengolahan data untuk mahasiswa. Layanan kami ditujukan sebagai referensi, bahan pembelajaran, dan alat bantu akademik. Kami sangat menyarankan klien untuk tetap mempelajari hasil yang kami berikan.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Sistem Pembayaran</h2>
              <p>Setiap pesanan wajib disertai dengan pembayaran Uang Muka (Down Payment/DP) sebesar minimal 50% dari total kesepakatan harga. Pelunasan wajib dibayarkan setelah draf final atau hasil olah data selesai kami kerjakan sebelum diserahkan sepenuhnya kepada Anda.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Revisi & Garansi</h2>
              <p>Kami memberikan garansi revisi gratis sampai hasil disetujui (di-ACC) oleh dosen pembimbing Anda, dengan syarat revisi tersebut tidak menyimpang dari ruang lingkup, judul, atau dataset yang telah disepakati di awal. Penambahan variabel atau perubahan judul yang signifikan akan dikenakan biaya tambahan.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Pembatalan & Pengembalian Dana (Refund)</h2>
              <p>Uang muka (DP) yang telah dibayarkan tidak dapat dikembalikan apabila pembatalan dilakukan secara sepihak oleh klien setelah proses pengerjaan dimulai. Pengembalian dana (refund) hanya berlaku jika tim kami tidak sanggup menyelesaikan pekerjaan sesuai kesepakatan awal.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Integritas Akademik</h2>
              <p>Kami menolak keras segala bentuk plagiarisme dan pemalsuan data. Semua data yang diolah adalah data yang Anda sediakan atau data sekunder dari sumber yang sah. Kami hanya membantu menyusun, memformat, dan mengolah data secara profesional sesuai standar akademik.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
