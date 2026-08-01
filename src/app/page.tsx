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
    <main className="relative min-h-screen overflow-hidden">
      <Hero />
      
      <TrustBadges />
      
      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
      
      <ServiceCatalog />
      
      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
      
      <Testimonials />

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
      
      <PricingTier />
      
      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />
      
      <FAQ />

      <SmartWhatsApp />
      
      <Footer />
    </main>
  );
}
