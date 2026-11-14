import Navigation from "@/components/Navigation";
import AboutIntro from "@/components/AboutIntro";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | FERMAC BIO - Microbial Biotechnology & Fermentation API Manufacturer",
  description:
    "Learn about Fermac Bio Private Limited: established in 2022 by fermentation scientists Suneel Kumar Battula and Baby Rani Polavarapu to manufacture critical fermentation APIs (Fusidic Acid, Daptomycin, Teicoplanin) in India.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <AboutIntro isStandalonePage={true} />
      </main>
      <Footer />
    </div>
  );
}
