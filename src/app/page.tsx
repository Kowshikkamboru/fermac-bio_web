import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import MetricRibbon from '@/components/MetricRibbon';
import Features from '@/components/Features';
import TrustSection from '@/components/TrustSection';
import Partners from '@/components/Partners';
import ProductsIntro from '@/components/ProductsIntro';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <MetricRibbon />
        <Features />
        <TrustSection />
        <Partners />
        <ProductsIntro />
      </main>
      <Footer />
    </div>
  );
}
