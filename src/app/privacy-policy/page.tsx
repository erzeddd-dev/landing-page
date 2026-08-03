import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Uji Data',
  description: 'Kebijakan Privasi layanan Uji Data.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background overflow-hidden flex flex-col pt-28">
      <div className="container mx-auto px-6 py-12 flex-grow max-w-4xl">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Beranda
        </Link>
        
        <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Privacy Policy (Kebijakan Privasi)</h1>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Pengumpulan Data</h2>
              <p>Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami, termasuk namun tidak terbatas pada nama, alamat email, nomor telepon, dan data/dokumen yang diperlukan untuk pengerjaan tugas akademik Anda.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Penggunaan Data</h2>
              <p>Data yang Anda berikan hanya akan digunakan untuk keperluan penyelesaian pesanan Anda (analisis, olah data, atau bimbingan akademik). Kami tidak akan menjual, menyewakan, atau mendistribusikan data Anda kepada pihak ketiga mana pun.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Keamanan & Kerahasiaan</h2>
              <p>Kerahasiaan penelitian dan identitas Anda adalah prioritas utama kami. Setelah proyek dinyatakan selesai dan disetujui, semua data mentah, hasil olah data, dan draf makalah/penelitian Anda akan kami hapus secara permanen dari sistem kami dalam kurun waktu 30 hari.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Perubahan Kebijakan</h2>
              <p>Kami berhak untuk mengubah Kebijakan Privasi ini kapan saja. Setiap perubahan akan diperbarui di halaman ini. Kami menyarankan Anda untuk meninjau halaman ini secara berkala.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Kontak</h2>
              <p>Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini, silakan hubungi kami melalui email di <a href="mailto:info.mrazizi@gmail.com" className="text-brand-primary hover:underline">info.mrazizi@gmail.com</a>.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
