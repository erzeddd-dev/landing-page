import Footer from "@/components/Footer";
import SmartWhatsApp from "@/components/SmartWhatsApp";
import PricelistPanel from "@/components/PricelistPanel";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col pt-32">
      <div className="max-w-2xl mx-auto px-6 pb-16 w-full flex-grow">
        <PricelistPanel />
      </div>
      <Footer />
      <SmartWhatsApp />
    </main>
  );
}
