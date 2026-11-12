import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Contact Us | FERMAC BIO - Commercial & Technical Facility Inquiries",
  description:
    "Connect with Fermac Bio: headquarters in Dommara Pochampally, Dundigal, and manufacturing campus at Shivampet, Medak (Telangana). Inquire about Fusidic Acid, Daptomycin, and Teicoplanin API supply, technical dossiers, and facility audits.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
