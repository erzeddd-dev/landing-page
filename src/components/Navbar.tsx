"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? "bg-black/40 backdrop-blur-md border-b border-glass-border shadow-lg py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <div className="relative h-10 w-48 sm:h-12 sm:w-56 cursor-pointer">
            <Image
              src="/logo.svg"
              alt="Jasa Olah Data Pro Logo"
              fill
              className="object-contain object-left drop-shadow-md"
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#layanan" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Layanan</a>
          <a href="#harga" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Harga</a>
          <a href="#faq" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">FAQ</a>
        </nav>

        <a
          href="https://wa.me/6285713071197?text=Halo%20kak%2C%20saya%20mau%20konsultasi%20jasa%20olah%20data"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-semibold transition-all hover:scale-105"
        >
          Konsultasi WA
        </a>
      </div>
    </motion.header>
  );
}
