"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CategoryTabs from "@/components/CategoryTabs";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0814]/90 backdrop-blur-sm border-b border-white/[0.06]">
      <div className="max-w-2xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="relative h-8 w-36 shrink-0">
          <Image
            src="/logo.svg"
            alt="OlahData"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <a
          href="https://wa.me/6285713071197?text=Halo%2C%20saya%20mau%20konsultasi%20jasa%20olah%20data"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex px-4 py-1.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors shrink-0"
        >
          Konsultasi WA
        </a>
      </div>

      {isHome && (
        <div className="max-w-2xl mx-auto px-4 pb-3">
          <CategoryTabs />
        </div>
      )}
    </header>
  );
}
