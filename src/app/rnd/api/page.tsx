import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Advanced API R&D | FERMAC BIO - Innovation & Process Chemistry",
  description:
    "Explore Fermac Bio's advanced API research & development capabilities in microbial strain selection, fermentation kinetics, crystallization, and particle-size micronization.",
};

export default function ApiRndPage() {
  const capabilities = [
    {
      title: "Microbial Strain Selection & Culture Maintenance",
      description:
        "High-yielding strain isolation, selective culture revitalization, and master cell banking under cryogenic conditions to guarantee genetic stability and reproducible fermentation yields.",
      icon: (
        <svg className="w-6 h-6 text-[#00BEDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      tags: ["Master Cell Banking", "Strain Optimization", "Yield Enhancement"],
    },
    {
      title: "Fermentation Kinetics & Bioprocess Scaling",
      description:
        "Computer-controlled pilot bioreactors mapping nutrient consumption, agitation shear, oxygen transfer rates (OTR), and secondary metabolite biosynthesis profiles for commercial transfer.",
      icon: (
        <svg className="w-6 h-6 text-[#00BEDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      tags: ["Kinetic Modeling", "PAT Sensors", "Bioreactor Scaling"],
    },
    {
      title: "Downstream Isolation & Ultra-Pure Crystallization",
      description:
        "Optimized cell-harvest filtration, solvent extraction, selective crystallization, and washing protocols ensuring high chemical purity and elimination of related substances.",
      icon: (
        <svg className="w-6 h-6 text-[#00BEDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      tags: ["Solvent Recovery", "Crystallization Suites", "High Yield Purity"],
    },
    {
      title: "Particle-Size Engineering & Custom Micronization",
      description:
        "Specialized jet-milling and dry-micronization suites producing tailored particle size distributions (D90 < 10 µm and D90 < 5 µm) for specialized ophthalmic creams, gels, and lotions.",
      icon: (
        <svg className="w-6 h-6 text-[#00BEDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      tags: ["Jet Milling", "PSD Laser Analysis", "Ophthalmic Rheology"],
    },
    {
      title: "Analytical Method Validation & Quality Control",
      description:
        "Comprehensive testing using validated HPLC, GC, FTIR, UV-Vis, Karl Fischer titrators, and microbiological assays compliant with EP, BP, USP, and IP monographs.",
      icon: (
        <svg className="w-6 h-6 text-[#00BEDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      tags: ["Method Validation", "Stability Testing", "Pharmacopeia Monograph"],
    },
    {
      title: "Process Development Groups (PDG) & Waste-to-Value",
      description:
        "Cross-functional engineering and microbiology teams piloting continuous yield improvements, raw material efficiency, and green chemistry resource recovery.",
      icon: (
        <svg className="w-6 h-6 text-[#00BEDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      tags: ["Waste-to-Value", "Green Chemistry", "Resource Efficiency"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-[#002F3C] via-[#003847] to-[#004859] text-white pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00BEDB_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-[#00BEDB] animate-pulse" />
              Advanced R&D • API Research & Bioprocessing
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Science-Driven <span className="text-[#00BEDB]">API Innovation</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
              From high-producing microbial strain selection to controlled downstream crystallization and ultra-fine particle micronization, our R&D drives the future of fermentation-derived pharmaceuticals.
            </p>
          </div>
        </section>

        {/* Feature Image & Intro */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00BEDB]">
                Precision Fermentation R&D
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#002F3C] leading-tight">
                Strong Technical Background: From Lab to Commercial Scale
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                Fermac Bio is the brainchild of Biotech and Chemical engineers, each bringing <strong>25+ years of experience</strong> in microbial fermentation. Our dedicated Research &amp; Development capabilities bridge laboratory microbiology and commercial-scale API synthesis—backed by collaborations with <strong>Bransun Labs</strong> and <strong>Fleming Labs</strong> for cutting-edge technology, strain improvement, and process optimization.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                Strong in process engineering and scale-up, our team moves molecules from lab to commercial scale efficiently—specializing in complex fermentation APIs such as <strong>Fusidic Acid</strong>, <strong>Sodium Fusidate</strong>, <strong>Daptomycin</strong>, and <strong>Teicoplanin</strong> under harmonized EP, BP, USP, and IP pharmacopeial standards.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/rnd/pics"
                  className="px-6 py-3 rounded-xl bg-[#00BEDB] hover:bg-[#00aebd] text-white font-semibold text-sm transition-colors shadow-md"
                >
                  View R&D Gallery (PICS) →
                </Link>
                <Link
                  href="/products"
                  className="px-6 py-3 rounded-xl border border-[#002F3C] text-[#002F3C] hover:bg-gray-50 font-semibold text-sm transition-colors"
                >
                  Explore API Specifications
                </Link>
              </div>
            </div>

            {/* Real Lab Image */}
            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
              <Image
                src="/images/WhatsApp Image 2026-11-11 at 2.08.46 PM (1).jpeg"
                alt="Fermac Bio Culture Lab and Microbiology Research Facility"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="text-xs font-mono text-cyan-300">Biosafety &amp; Preservation</div>
                  <div className="font-bold text-lg">Culture Laboratory &amp; Process Development</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6 Core R&D Capabilities */}
        <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#002F3C] mb-4">
                Core Research Capabilities
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Integrated capabilities covering every phase of biopharmaceutical development, from strain optimization to regulatory testing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-lg hover:border-cyan-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 mb-4 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0">
                      {cap.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#002F3C] mb-3 leading-snug">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {cap.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-1.5">
                    {cap.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-gray-100 text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Secondary Photo Showcase Row */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg border border-gray-200 group">
              <Image
                src="/images/WhatsApp Image 2026-11-11 at 2.08.47 PM.jpeg"
                alt="Sterile Cleanroom Pass-Through Sterilizer"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
                <div className="text-white">
                  <div className="text-xs font-mono text-cyan-300">Biosafety &amp; Sterility</div>
                  <div className="font-bold text-base">Cleanroom Sterilization &amp; Inoculation</div>
                </div>
              </div>
            </div>

            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg border border-gray-200 group">
              <Image
                src="/images/deck/fermentation-battery.jpg"
                alt="Fermentation Battery and SCADA Automation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
                <div className="text-white">
                  <div className="text-xs font-mono text-cyan-300">SCADA Bioprocessing</div>
                  <div className="font-bold text-base">Fermentation Battery &amp; Seed Train</div>
                </div>
              </div>
            </div>

            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg border border-gray-200 group">
              <Image
                src="/images/WhatsApp Image 2026-11-11 at 2.08.48 PM (1).jpeg"
                alt="Pharma Block ANFD and Downstream Purification"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
                <div className="text-white">
                  <div className="text-xs font-mono text-cyan-300">Downstream Isolation</div>
                  <div className="font-bold text-base">Pharma Block Crystallizers &amp; ANFD</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Collaboration CTA */}
        <section className="bg-gradient-to-br from-[#002F3C] to-[#004859] py-16 text-white text-center px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Partner With Our R&D Team</h2>
            <p className="text-gray-300 text-base leading-relaxed">
              Seeking customized particle-size engineering, contract bioprocessing development, or dedicated analytical validation? Our scientists are ready to collaborate.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 rounded-xl bg-[#00BEDB] hover:bg-[#00aebd] text-white font-bold text-sm shadow-lg transition-transform hover:scale-105"
              >
                Initiate R&D Inquiry
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
