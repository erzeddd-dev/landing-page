"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function SmartWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const text = encodeURIComponent("Halo kak, saya butuh bantuan untuk olah data penelitian saya. Bisa dibantu?");
  const waLink = `https://wa.me/6285713071197?text=${text}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0,
        y: isVisible ? 0 : 50 
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 pointer-events-auto"
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.4)] transition-transform hover:scale-110 active:scale-95"
      >
        <div className="absolute inset-0 rounded-full border-2 border-white/20" />
        <MessageCircle className="w-7 h-7 text-white drop-shadow-sm" />
        
        {/* Pulse effect rings */}
        <span className="absolute w-full h-full rounded-full bg-green-500 opacity-20 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <span className="absolute w-full h-full rounded-full bg-green-400 opacity-20 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]" />
      </a>
    </motion.div>
  );
}
