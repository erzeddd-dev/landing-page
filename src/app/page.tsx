import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import ServiceCatalog from "@/components/ServiceCatalog";
import PricingTier from "@/components/PricingTier";
import SmartWhatsApp from "@/components/SmartWhatsApp";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Hero />

      {/* Katalog ditaruh langsung setelah Hero agar customer cepat menemukan layanan */}
      <ServiceCatalog />

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

      {/* Harga dipindah setelah katalog agar alur baca: layanan → harga → sosial bukti */}
      <PricingTier />

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

      <TrustBadges />

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

      <Testimonials />

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

      <FAQ />

      <SmartWhatsApp />

      <Footer />
    </main>
  );
}
