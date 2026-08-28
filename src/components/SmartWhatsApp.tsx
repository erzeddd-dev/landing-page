"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function SmartWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waLink = `https://wa.me/6285713071197?text=${encodeURIComponent(
    "Halo, saya ingin konsultasi olah data penelitian. Boleh dibantu?"
  )}`;

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.85,
        y: visible ? 0 : 12,
      }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/30 hover:scale-105 active:scale-95 transition-transform"
      style={{ pointerEvents: visible ? "auto" : "none" }}
      aria-label="Chat WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7" />
    </motion.a>
  );
}
