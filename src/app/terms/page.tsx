import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | FERMAC BIO Private Limited",
  description: "Terms and conditions governing the use of Fermac Bio Private Limited's corporate website, API product documentation, and commercial inquiries.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* Header Hero */}
        <section className="relative bg-gradient-to-b from-[#002F3C] via-[#003847] to-[#004859] text-white pt-36 pb-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00BEDB_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-5">
              Corporate Governance & Agreements
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Terms of <span className="text-[#00BEDB]">Service</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
              Please read these terms carefully before accessing the corporate web portal or submitting technical inquiries to Fermac Bio Private Limited.
            </p>
          </div>
        </section>

        {/* Content Body */}
        <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-8 leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#002F3C] mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, or utilizing the website of Fermac Bio Private Limited (&quot;Fermac Bio&quot;, &quot;we&quot;, &quot;us&quot;), you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service. If you do not agree to these terms, you should immediately cease use of this portal.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#002F3C] mb-3">2. B2B Information & No Medical Advice</h2>
            <p>
              The content provided on this website—including active pharmaceutical ingredient specifications, monograph conformance (EP, BP, USP), and bioprocess capabilities—is intended exclusively for qualified pharmaceutical formulators, chemical engineers, healthcare professionals, and commercial procurement teams.
            </p>
            <p className="mt-2 text-amber-800 bg-amber-50 p-4 rounded-xl border border-amber-200">
              <strong>Notice:</strong> Nothing on this website constitutes medical advice, clinical diagnosis, or a recommendation for individual consumer treatment. All therapeutic applications must be evaluated by licensed medical practitioners and executed in compliance with national pharmaceutical regulations.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#002F3C] mb-3">3. Technical Data & Monograph Specifications</h2>
            <p>
              While Fermac Bio exercises rigorous quality control to ensure that all information on this portal accurately reflects our manufacturing tolerances and cGMP certifications, product specifications (including particle-size curves, impurity limits, and assay ranges) are subject to formal confirmation via signed Certificate of Analysis (CoA) or mutual Quality Agreement.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#002F3C] mb-3">4. Intellectual Property & Proprietary Rights</h2>
            <p>
              All trademarks, trade names, logos, bioprocess schematics, molecular graphics, and textual copy appearing on this site are the exclusive proprietary assets of Fermac Bio Private Limited or its alliance partners. Reproduction, distribution, or unauthorized extraction without written authorization is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#002F3C] mb-3">5. Commercial Inquiries & Supply Agreements</h2>
            <p>
              Submissions through our technical inquiry forms or quotation requests do not establish a binding commercial contract. Binding commitments for API supply, batch reservations, or custom micronization arise solely upon execution of a formal Purchase Order accepted in writing and governed by our standard Commercial Supply Agreement.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#002F3C] mb-3">6. Governing Law & Jurisdiction</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the Republic of India. Any disputes arising in connection with this website or our commercial services shall be subject to the exclusive jurisdiction of the competent courts in Hyderabad, Telangana, India.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
            <Link href="/" className="text-xs font-bold text-[#002F3C] hover:text-[#00BEDB]">
              &larr; Return to Home
            </Link>
            <Link href="/cookies" className="text-xs font-bold text-[#002F3C] hover:text-[#00BEDB]">
              Cookie Policy &rarr;
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
