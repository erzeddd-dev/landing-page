import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";
import SmartWhatsApp from "@/components/SmartWhatsApp";

export const metadata: Metadata = {
  title: "Price List",
  description:
    "Daftar harga lengkap OlahData: paket olah data SPSS, EViews, STATA, SmartPLS, parafrase, website, e-modul interaktif, dan website pembelajaran.",
  openGraph: {
    title: "Price List · OlahData",
    description:
      "Harga transparan: paket Basic 250rb · Ngebut 450rb · Lulus Aman 750rb + jasa website & e-modul.",
    url: "https://olahdata.me/pricelist",
  },
};

const WA_BASE = "https://wa.me/6285713071197?text=";

function waLink(message: string) {
  return `${WA_BASE}${encodeURIComponent(message)}`;
}

const academicPackages = [
  {
    name: "Basic",
    price: "250rb",
    desc: "Deadline longgar, analisis standar.",
    features: ["Estimasi 5–7 hari kerja", "Deskriptif & asumsi klasik", "Konsultasi 1× via WA"],
    featured: false,
  },
  {
    name: "Ngebut",
    price: "450rb",
    desc: "Deadline ketat, prioritas antrian.",
    features: [
      "Estimasi 1–3 hari kerja",
      "Semua di Basic",
      "Regresi & uji hipotesis",
      "Revisi 2× sesuai brief",
    ],
    featured: true,
    badge: "Paling dipilih",
  },
  {
    name: "Lulus Aman",
    price: "750rb",
    desc: "Lebih lengkap, siap dibahas.",
    features: [
      "Semua di Ngebut",
      "Pendampingan interpretasi",
      "Parafrase ringan (scope disepakati)",
      "Revisi lanjutan sesuai brief",
    ],
    featured: false,
  },
];

const academicServices = [
  { name: "Olah Data SPSS", price: "250rb", desc: "Deskriptif, validitas, asumsi klasik, regresi, uji hipotesis" },
  { name: "EViews / STATA", price: "350rb", desc: "Panel data, time series, model ekonometrika" },
  { name: "SmartPLS & SEM", price: "500rb", desc: "Outer/inner model, mediasi, moderasi, path analysis" },
  { name: "Parafrase", price: "150rb", desc: "Natural + similarity terkendali" },
  { name: "Proofreading", price: "100rb", desc: "Ejaan, tata bahasa, konsistensi istilah" },
  { name: "Naskah Jurnal", price: "300rb", desc: "Susun sesuai template IMRaD" },
];

const digitalServices = [
  {
    name: "Landing Page",
    price: "1.500.000",
    desc: "1 halaman profesional + form + tombol WA + mobile friendly",
  },
  {
    name: "Website Company Profile",
    price: "2.500.000",
    desc: "5–8 halaman + CMS + domain + hosting 1 tahun",
  },
  {
    name: "Website Company Profile Pro",
    price: "4.000.000",
    desc: "10–15 halaman + desain lebih custom + SEO dasar",
  },
  {
    name: "E-Modul Interaktif",
    price: "1.500.000",
    desc: "10–20 halaman interaktif (kuis + navigasi)",
  },
  {
    name: "E-Modul Interaktif Premium",
    price: "2.500.000",
    desc: "+ Animasi ringan & desain custom",
  },
  {
    name: "Website Pembelajaran / LMS",
    price: "3.500.000",
    desc: "Materi + kuis + progress siswa",
  },
  {
    name: "Website Pembelajaran Pro",
    price: "5.000.000",
    desc: "Multi-kelas + sertifikat + admin panel",
  },
];

export default function PriceListPage() {
  return (
    <main className="min-h-screen overflow-x-hidden flex flex-col pt-24">
      <div className="max-w-5xl mx-auto px-6 pb-16 flex-grow w-full">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-white/50 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Beranda
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-3">
            <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
              Price List
            </span>
          </h1>
          <p className="text-text-muted text-sm md:text-base max-w-md mx-auto">
            Harga transparan, proses jelas, hasil siap dibahas.
          </p>
        </div>

        {/* ===== Academic Packages ===== */}
        <section className="mb-14">
          <h2 className="font-heading text-xl font-semibold text-white/90 mb-1">
            Paket Olah Data
          </h2>
          <p className="text-sm text-text-muted mb-6">
            Paket utama untuk skripsi, tesis, dan penelitian kuantitatif.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {academicPackages.map((pkg) => (
              <article
                key={pkg.name}
                className={`relative flex flex-col rounded-2xl p-5 md:p-6 ${
                  pkg.featured
                    ? "border border-brand-secondary/40 bg-gradient-to-b from-brand-secondary/15 via-brand-primary/10 to-white/[0.02] shadow-[0_0_30px_rgba(255,0,127,0.1)]"
                    : "ui-card"
                }`}
              >
                {pkg.badge && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gradient-to-r from-brand-secondary to-brand-primary text-white whitespace-nowrap">
                    {pkg.badge}
                  </span>
                )}

                <p className="text-sm font-semibold text-white/90 mb-0.5">{pkg.name}</p>
                <p className="text-xs text-text-muted mb-4">{pkg.desc}</p>

                <p className="text-[10px] uppercase tracking-widest text-white/30 font-semibold mb-0.5">
                  Mulai dari
                </p>
                <p className="font-heading text-3xl font-extrabold tracking-tight mb-4">
                  Rp {pkg.price}
                </p>

                <ul className="space-y-2 mb-5 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="text-xs text-white/65 flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(`Halo, saya tertarik Paket ${pkg.name}. Boleh konsultasi detail & estimasi?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-2.5 rounded-xl text-sm font-semibold transition-all active:scale-[0.98] ${
                    pkg.featured
                      ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:opacity-95"
                      : "bg-white/[0.06] border border-white/10 text-white hover:bg-white/[0.1]"
                  }`}
                >
                  Pilih {pkg.name}
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ===== Academic Services (list) ===== */}
        <section className="mb-14">
          <h2 className="font-heading text-xl font-semibold text-white/90 mb-1">
            Layanan Satuan Akademik
          </h2>
          <p className="text-sm text-text-muted mb-5">
            Bisa dipesan terpisah sesuai kebutuhan.
          </p>

          <div className="space-y-3">
            {academicServices.map((s) => (
              <div
                key={s.name}
                className="ui-card ui-card-hover flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 md:p-5"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-white/90 text-sm">{s.name}</p>
                  <p className="text-xs text-text-muted mt-0.5">{s.desc}</p>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                  <p className="font-heading font-bold text-lg text-white">
                    Rp {s.price}
                  </p>
                  <a
                    href={waLink(`Halo, saya tertarik jasa ${s.name}. Boleh konsultasi detail & estimasi?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#25D366]/15 text-[#25D366] text-xs font-semibold hover:bg-[#25D366]/25 transition-colors border border-[#25D366]/20"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    WA
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Digital Services ===== */}
        <section className="mb-10">
          <h2 className="font-heading text-xl font-semibold text-white/90 mb-1">
            Website & Digital
          </h2>
          <p className="text-sm text-text-muted mb-5">
            Pembuatan website, e-modul interaktif, dan platform pembelajaran.
          </p>

          <div className="space-y-3">
            {digitalServices.map((s) => (
              <div
                key={s.name}
                className="ui-card ui-card-hover flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 md:p-5"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-white/90 text-sm">{s.name}</p>
                  <p className="text-xs text-text-muted mt-0.5">{s.desc}</p>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                  <p className="font-heading font-bold text-lg text-white">
                    Rp {s.price}
                  </p>
                  <a
                    href={waLink(`Halo, saya tertarik jasa ${s.name}. Boleh konsultasi detail & estimasi?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#25D366]/15 text-[#25D366] text-xs font-semibold hover:bg-[#25D366]/25 transition-colors border border-[#25D366]/20"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    WA
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Note */}
        <p className="text-center text-white/30 text-xs leading-relaxed max-w-lg mx-auto">
          Harga final menyesuaikan kompleksitas setelah brief singkat.
          <br />
          Semua paket website sudah termasuk domain + hosting 1 tahun (kecuali disebutkan lain).
          <br />
          Data & materi klien dijamin kerahasiaannya.
        </p>
      </div>

      <Footer />
      <SmartWhatsApp />
    </main>
  );
}
