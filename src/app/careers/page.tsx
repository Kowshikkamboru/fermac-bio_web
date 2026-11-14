import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CareersClient from "@/components/CareersClient";

export const metadata = {
  title: "Careers | FERMAC BIO - Join India's Premier Fermentation API Manufacturer",
  description:
    "Explore career opportunities in microbial biotechnology, industrial fermentation engineering, downstream purification, quality control (QC), and cGMP biomanufacturing at Fermac Bio.",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <CareersClient />
      </main>
      <Footer />
    </div>
  );
}
