import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | FERMAC BIO Private Limited",
  description: "Fermac Bio Private Limited's privacy policy, data protection governance, and international regulatory compliance disclosures.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* Header Hero */}
        <section className="relative bg-gradient-to-b from-[#002F3C] via-[#003847] to-[#004859] text-white pt-36 pb-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00BEDB_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-5">
              Legal & Compliance Governance
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Privacy <span className="text-[#00BEDB]">Policy</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
              Last updated: October 2026. Fermac Bio Private Limited is committed to transparent data stewardship and regulatory compliance.
            </p>
          </div>
        </section>

        {/* Content Body */}
        <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-8 leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#002F3C] mb-3">1. Overview & Data Controller</h2>
            <p>
              Fermac Bio Private Limited (&quot;Fermac Bio&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects the privacy of our commercial partners, pharmaceutical clients, site visitors, and regulatory bodies. This Privacy Policy details our procedures regarding the collection, processing, storage, and protection of information obtained through our website (<span className="text-[#00BEDB] font-mono">fermacbio.in</span>) and corporate communications.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#002F3C] mb-3">2. Information We Collect</h2>
            <p className="mb-2">We collect information strictly necessary to facilitate B2B pharmaceutical commerce, technical inquiries, and cGMP compliance:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
              <li><strong>Commercial Contact Data:</strong> Name, professional title, corporate affiliation, business email address, and telephone number provided during sample requests or audit inquiries.</li>
              <li><strong>Technical Inquiries & Dossier Requests:</strong> Information regarding API specifications, batch volumes, and pharmacopeial monographs (EP, BP, USP) requested through our secure portal.</li>
              <li><strong>Automated Telemetry:</strong> Anonymized technical data such as browser type, IP address, device telemetry, and interaction metrics to optimize site performance and prevent unauthorized network intrusions.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#002F3C] mb-3">3. Purpose of Processing</h2>
            <p className="mb-2">All gathered information is processed under legitimate business interests, contract execution, or statutory legal obligations:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-600">
              <li>Processing and fulfilling commercial purchase orders, Letters of Intent (LOI), and supply agreements.</li>
              <li>Providing Certificates of Analysis (CoA), Drug Master File (DMF) excerpts, and analytical validation dossiers.</li>
              <li>Coordinating on-site cGMP audits, quality assurance visits, and regulatory reporting.</li>
              <li>Ensuring the technical security, integrity, and operational availability of our digital web infrastructure.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#002F3C] mb-3">4. Information Sharing & Third Parties</h2>
            <p>
              Fermac Bio does <strong>never sell, lease, or monetize</strong> your commercial or technical information. Data may be shared strictly on a confidential need-to-know basis with:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-600 mt-2">
              <li>Accredited statutory regulatory bodies (CDSCO, US FDA, EDQM) when required by pharmaceutical licensing laws.</li>
              <li>Contracted analytical testing and logistics partners bound by strict Non-Disclosure Agreements (NDAs).</li>
              <li>Direct affiliate manufacturing alliances (Bransun Labs, Fleming Laboratories) solely for collaborative technical execution.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#002F3C] mb-3">5. Data Security & Storage</h2>
            <p>
              We maintain industry-standard physical, technical, and administrative safeguards. All communications over our web portal use SSL/TLS encryption. Data is stored on secured servers with restricted role-based access controls to prevent unauthorized access, loss, or disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#002F3C] mb-3">6. Your Rights & Contacts</h2>
            <p>
              Subject to applicable jurisdiction and pharmaceutical record-keeping laws, you retain the right to request access to, rectification of, or erasure of your personal business data held by Fermac Bio.
            </p>
            <p className="mt-3">
              For any privacy inquiries or data protection requests, please contact our Compliance Officer at:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-gray-50 border border-gray-200">
              <p className="font-semibold text-[#002F3C]">Compliance & Data Protection Office</p>
              <p className="text-xs text-gray-600 mt-1">Fermac Bio Private Limited</p>
              <p className="text-xs text-gray-600">Plot No: 08, 1st Floor, Dommara Pochampally, Dundigal - 500 043, Telangana, India</p>
              <p className="text-xs text-cyan-700 mt-1">Email: <a href="mailto:info@fermacbio.in" className="underline">info@fermacbio.in</a> | Phone: +91 40 2424 2999</p>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
            <Link href="/" className="text-xs font-bold text-[#002F3C] hover:text-[#00BEDB]">
              &larr; Return to Home
            </Link>
            <Link href="/terms" className="text-xs font-bold text-[#002F3C] hover:text-[#00BEDB]">
              Terms of Service &rarr;
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
