import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SustainabilitySection from "@/components/SustainabilitySection";

export const metadata = {
  title: "Sustainability | FERMAC BIO - Responsible Manufacturing",
  description:
    "Learn about Fermac Bio's sustainability commitments: Health & Safety, Zero Liquid Discharge (ZLD) water management, Waste-to-Value initiatives, and green belt biodiversity.",
};

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <SustainabilitySection />
      </main>
      <Footer />
    </div>
  );
}
