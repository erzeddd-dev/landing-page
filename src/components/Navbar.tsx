"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#harga", label: "Harga" },
  { href: "#layanan", label: "Layanan" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => scrollToSection(href), 120);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-[#0a0814]/80 backdrop-blur-xl border-b border-white/[0.06] py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" onClick={() => setIsOpen(false)} className="relative z-10">
          <div className="relative h-9 w-40 sm:h-10 sm:w-48">
            <Image
              src="/logo.svg"
              alt="OlahData"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3.5 py-2 text-sm font-medium text-white/60 hover:text-white rounded-lg hover:bg-white/[0.04] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/6285713071197?text=Halo%2C%20saya%20mau%20konsultasi%20jasa%20olah%20data"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex px-4 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors"
        >
          Konsultasi WA
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((p) => !p)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] text-white"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-white/[0.06] bg-[#0a0814]/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-3 px-3 rounded-xl text-sm font-medium text-white/80 hover:bg-white/[0.05]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/6285713071197?text=Halo%2C%20saya%20mau%20konsultasi%20jasa%20olah%20data"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 py-3 rounded-full text-center text-sm font-semibold bg-white text-black"
              >
                Konsultasi WA
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
