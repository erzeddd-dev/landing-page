export type PriceItem = {
  name: string;
  price: string;
  note?: string;
  featured?: boolean;
};

export type PriceCategory = {
  id: string;
  label: string;
  items: PriceItem[];
};

export const CATEGORIES: PriceCategory[] = [
  {
    id: "skripsi",
    label: "Skripsi",
    items: [
      { name: "Proposal Skripsi", price: "750rb", note: "Bab 1–3, 5–7 hari kerja" },
      { name: "Olah Data — Basic", price: "250rb", note: "5–7 hari kerja" },
      { name: "Olah Data — Ngebut", price: "450rb", note: "1–3 hari kerja", featured: true },
      { name: "Olah Data — Lulus Aman", price: "750rb", note: "+ pendampingan interpretasi" },
    ],
  },
  {
    id: "tesis",
    label: "Tesis",
    items: [
      { name: "Proposal Tesis", price: "1.500.000", note: "Bab 1–3 + gap research" },
      { name: "Olah Data — Basic", price: "250rb", note: "5–7 hari kerja" },
      { name: "Olah Data — Ngebut", price: "450rb", note: "1–3 hari kerja", featured: true },
      { name: "Olah Data — Lulus Aman", price: "750rb", note: "+ pendampingan interpretasi" },
    ],
  },
  {
    id: "disertasi",
    label: "Disertasi",
    items: [
      { name: "Proposal Disertasi", price: "3.500.000", note: "Novelty & state of the art" },
      { name: "Olah Data — Basic", price: "250rb", note: "5–7 hari kerja" },
      { name: "Olah Data — Ngebut", price: "450rb", note: "1–3 hari kerja", featured: true },
      { name: "Olah Data — Lulus Aman", price: "750rb", note: "+ pendampingan interpretasi" },
    ],
  },
  {
    id: "jurnal",
    label: "Jurnal",
    items: [
      { name: "Naskah Jurnal", price: "300rb", note: "Format IMRaD" },
      { name: "Parafrase", price: "150rb", note: "Similarity terkendali" },
      { name: "Proofreading", price: "100rb", note: "Ejaan & tata bahasa" },
    ],
  },
  {
    id: "lainnya",
    label: "Lainnya",
    items: [
      { name: "SPSS", price: "250rb", note: "Deskriptif, regresi, uji hipotesis" },
      { name: "EViews / STATA", price: "350rb", note: "Panel data & time series" },
      { name: "SmartPLS & SEM", price: "500rb", note: "Outer/inner model, mediasi" },
      { name: "Landing Page", price: "1.500.000", note: "1 halaman + form + WA" },
      { name: "Company Profile", price: "2.500.000", note: "5–8 halaman + CMS + hosting 1th" },
      { name: "Company Profile Pro", price: "4.000.000", note: "10–15 halaman + SEO dasar" },
      { name: "E-Modul Interaktif", price: "1.500.000", note: "10–20 halaman + kuis" },
      { name: "E-Modul Premium", price: "2.500.000", note: "+ animasi & desain custom" },
      { name: "Website Pembelajaran", price: "3.500.000", note: "Materi + kuis + progress" },
      { name: "Website Pembelajaran Pro", price: "5.000.000", note: "Multi-kelas + sertifikat" },
    ],
  },
];
