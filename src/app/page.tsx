import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import MetricRibbon from '@/components/MetricRibbon';
import AboutIntro from '@/components/AboutIntro';
import Features from '@/components/Features';
import IndustryEvolutionSection from '@/components/IndustryEvolutionSection';
import InfrastructureMarketSection from '@/components/InfrastructureMarketSection';
import TrustSection from '@/components/TrustSection';
import Partners from '@/components/Partners';
import ProductsIntro from '@/components/ProductsIntro';
import CustomManufacturing from '@/components/CustomManufacturing';
import Footer from '@/components/Footer';

export const metadata = {
  title: "FERMAC BIO | World-Class Fermentation API Manufacturer",
  description:
    "Focused on premium-grade fermentation-based Active Pharmaceutical Ingredients: Fusidic Acid, Sodium Fusidate, Daptomycin, and Teicoplanin (FB-03). 25,000 sq. m. integrated biomanufacturing campus near Hyderabad in Medak District.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {/* 1. Brand Showcase Hero */}
        <Hero />

        {/* 2. Key Scale & Infrastructure Ribbon */}
        <MetricRibbon />

        {/* 3. Company Overview, Purpose & Why FERMAC Bio */}
        <AboutIntro isStandalonePage={false} />

        {/* 4. Key Drivers of FERMAC Bio */}
        <Features />

        {/* 5. Industry Evolution & Why Fermentation */}
        <IndustryEvolutionSection />

        {/* 6. Manufacturing Infrastructure & Market Opportunity */}
        <InfrastructureMarketSection showInfrastructureLink={true} />

        {/* 7. Strategic Advantage & Supply Reliability */}
        <TrustSection />

        {/* 8. Strong Technology Backbone: Bransun Labs + Fleming Laboratories Limited */}
        <Partners />

        {/* 9. Core API Molecule Portfolio */}
        <ProductsIntro />

        {/* 10. Modular Fermentation & Custom Manufacturing */}
        <CustomManufacturing />
      </main>
      <Footer />
    </div>
  );
}
