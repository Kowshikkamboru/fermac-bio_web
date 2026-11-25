import Navigation from "@/components/Navigation";
import AboutIntro from "@/components/AboutIntro";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | FERMAC BIO - Microbial Biotechnology & Fermentation API Manufacturer",
  description:
    "Learn about Fermac Bio Private Limited: a biotechnology-driven fermentation enterprise producing specialty antibiotic APIs with integrated R&D and a 25,000 sq. m. global-scale manufacturing facility.",
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
