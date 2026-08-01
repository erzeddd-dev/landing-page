"use client";

import { motion } from "framer-motion";
import { BarChart3, Calculator, BookOpen, FileText } from "lucide-react";

const services = [
  {
    title: "Olah Data SPSS",
    description: "Analisis deskriptif, uji asumsi klasik, regresi, dan uji hipotesis dengan output yang mudah dipahami.",
    icon: BarChart3,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Ekonometrika & EViews",
    description: "Pengolahan data time series, panel data, dan analisis ekonometrika kompleks secara presisi.",
    icon: Calculator,
    color: "from-brand-secondary to-pink-500",
  },
  {
    title: "Penyusunan Makalah",
    description: "Penyusunan makalah terstruktur, sistematis, dan bebas plagiarisme sesuai standar akademik.",
    icon: BookOpen,
    color: "from-brand-primary to-purple-600",
  },
  {
    title: "Parafrase & Turnitin",
    description: "Menurunkan persentase plagiarisme dengan teknik parafrase manual yang menjaga konteks asli.",
    icon: FileText,
    color: "from-brand-accent to-teal-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServiceCatalog() {
  return (
    <section id="layanan" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
          Layanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-accent">Profesional</span> Kami
        </h2>
        <p className="text-text-muted max-w-2xl mx-auto">
          Berbagai solusi akademik yang dirancang untuk mempercepat kelulusan Anda. Dikerjakan oleh praktisi berpengalaman.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative p-6 rounded-2xl bg-glass border border-glass-border backdrop-blur-md overflow-hidden group transition-all"
            >
              {/* Background Glow on Hover */}
              <div className={`absolute -inset-2 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl blur-xl`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.color} shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
