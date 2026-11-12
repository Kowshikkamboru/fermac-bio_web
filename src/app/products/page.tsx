import Navigation from '@/components/Navigation';
import Products from '@/components/Products';
import Footer from '@/components/Footer';

export const metadata = {
  title: "API Products Portfolio | FERMAC BIO - Fusidic Acid, Daptomycin & Teicoplanin",
  description:
    "Explore Fermac Bio's anti-infective fermentation API portfolio: Fusidic Acid, Sodium Fusidate, Daptomycin, and Teicoplanin with pharmacopeial EP/BP/USP specifications and custom micronization.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Products />
      </main>
      <Footer />
    </div>
  );
}
