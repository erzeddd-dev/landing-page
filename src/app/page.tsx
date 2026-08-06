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
      <PricingTier />
      <TrustBadges />
      <ServiceCatalog />
      <Testimonials />
      <FAQ />
      <SmartWhatsApp />
      <Footer />
    </main>
  );
}
