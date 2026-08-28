"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { useCategoryTab } from "@/context/CategoryTabContext";

const WA_BASE = "https://wa.me/6285713071197?text=";

function waLink(message: string) {
  return `${WA_BASE}${encodeURIComponent(message)}`;
}

const variants = {
  enter: (direction: number) => ({ x: direction >= 0 ? 24 : -24, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction >= 0 ? -24 : 24, opacity: 0 }),
};

export default function PricelistPanel() {
  const { categories, activeIndex, direction } = useCategoryTab();
  const category = categories[activeIndex];

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={category.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="space-y-2.5"
        >
          {category.items.map((item) => (
            <div
              key={item.name}
              className={`flex items-center justify-between gap-4 rounded-2xl border px-5 py-4 ${
                item.featured ? "border-white/25 bg-white/[0.04]" : "border-white/10"
              }`}
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-white">{item.name}</p>
                {item.note && (
                  <p className="text-xs text-white/45 mt-0.5">{item.note}</p>
                )}
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <p className="font-heading text-base font-semibold text-white whitespace-nowrap">
                  Rp {item.price}
                </p>
                <a
                  href={waLink(
                    `Halo, saya tertarik ${item.name} (${category.label}). Boleh konsultasi detail & estimasi?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/20 hover:bg-[#25D366]/25 transition-colors"
                  aria-label={`Tanya ${item.name} via WhatsApp`}
                >
                  <FaWhatsapp className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
