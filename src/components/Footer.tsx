import { Mail, ArrowUpRight } from "lucide-react";

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-black/50 border-t border-white/10 pt-14 pb-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-brand-primary/5 blur-[150px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-heading font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-3">
              OlahData
            </h3>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed text-sm">
              Bantuan olah data penelitian (kuantitatif &amp; ekonometrika),
              plus parafrase, proofreading, dan naskah jurnal. Transparan,
              terukur, dan siap dibahas.
            </p>
            <div className="flex gap-3">
              <a
                href="https://youtube.com/@ujidata"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@ujidata?_r=1&_t=ZS-98WWByy5SeQ"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <TiktokIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:info.mrazizi@gmail.com"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-base mb-4 text-white">Layanan</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#layanan"
                  className="text-gray-400 hover:text-brand-accent transition-colors inline-flex items-center gap-1"
                >
                  SPSS &amp; kuantitatif <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  className="text-gray-400 hover:text-brand-accent transition-colors inline-flex items-center gap-1"
                >
                  Ekonometrika <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  className="text-gray-400 hover:text-brand-accent transition-colors inline-flex items-center gap-1"
                >
                  SmartPLS / SEM <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="#harga"
                  className="text-gray-400 hover:text-brand-accent transition-colors inline-flex items-center gap-1"
                >
                  Paket &amp; harga <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-base mb-4 text-white">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400">
                WhatsApp
                <br />
                <a
                  href="https://wa.me/6285713071197"
                  className="text-white hover:text-brand-accent transition-colors"
                >
                  +62 857-1307-1197
                </a>
              </li>
              <li className="text-gray-400">
                Email
                <br />
                <a
                  href="mailto:info.mrazizi@gmail.com"
                  className="text-white hover:text-brand-primary transition-colors"
                >
                  info.mrazizi@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                Jam operasional
                <br />
                <span className="text-white">Setiap hari · 08:00-22:00 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} OlahData · olahdata.me
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="/privacy-policy"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
