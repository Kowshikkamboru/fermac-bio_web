import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import MetricRibbon from '@/components/MetricRibbon';
import AboutIntro from '@/components/AboutIntro';
import Features from '@/components/Features';
import TrustSection from '@/components/TrustSection';
import Partners from '@/components/Partners';
import ProductsIntro from '@/components/ProductsIntro';
import CustomManufacturing from '@/components/CustomManufacturing';
import Footer from '@/components/Footer';

export const metadata = {
  title: "FERMAC BIO | World-Class Fermentation API Manufacturer",
  description:
    "India's dedicated primary manufacturer of microbial fermentation Active Pharmaceutical Ingredients: Fusidic Acid, Sodium Fusidate, Daptomycin, and Teicoplanin. 340 kL+ biomanufacturing campus at Shivampet, Medak with WHO-cGMP compliance.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {/* 1. Fleming Labs-inspired Trust & Brand Showcase Hero */}
        <Hero />

        {/* 2. Key Scale & Impact Ribbon */}
        <MetricRibbon />

        {/* 3. Combined About Us: Corporate Heritage, Founders, Mission & Governance */}
        <AboutIntro isStandalonePage={false} />

        {/* 4. Core Scientific & Manufacturing Pillars */}
        <Features />

        {/* 5. Trust & Pharmacopeial Quality Accreditations */}
        <TrustSection />

        {/* 6. Strategic Alliances (Fleming Laboratories & Bransun Labs) */}
        <Partners />

        {/* 7. Core API Molecule Portfolio */}
        <ProductsIntro />

        {/* 8. Custom Manufacturing Solutions */}
        <CustomManufacturing />
      </main>
      <Footer />
    </div>
  );
}
