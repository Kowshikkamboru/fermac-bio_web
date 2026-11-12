import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Leading-Edge Facilities | FERMAC BIO - Bioprocess Infrastructure",
  description:
    "Explore Fermac Bio's world-class biomanufacturing campus at Shivampet, Medak: 340 kL+ bioreactor capacity, 20,000 sq. meter production block, sterile cleanrooms, downstream crystallization, and 100% Zero Liquid Discharge (ZLD).",
};

export default function FacilitiesPage() {
  const facilityHighlights = [
    {
      title: "Commercial Fermentation Suites (Blocks A & B)",
      description:
        "Multi-stage bioreactor trains from 50-liter seed vessels to 33 KL, 40 KL, and 20 KL commercial production fermenters constructed from 316L pharmaceutical-grade stainless steel with automated CIP/SIP loops and continuous PAT monitoring.",
      image: "/images/WhatsApp Image 2026-10-23 at 9.53.22 AM (1).jpeg",
      specs: [
        "3 × 33 KL Commissioned in Block A",
        "Expanding to 340 kL+ Total Capacity",
        "Automated Bioreactor Cascades",
        "Clean-in-Place (CIP) & Sterilize-in-Place (SIP)",
      ],
    },
    {
      title: "Sterile Cleanrooms & Biosafety Inoculum Suites",
      description:
        "ISO Class 7 and Class 8 cleanroom environments with positive pressure cascades, terminal HEPA filtration (99.97% efficiency at 0.3 µm), and Class II biosafety cabinets dedicated to high-density microbial strain propagation.",
      image: "/images/WhatsApp Image 2026-10-23 at 9.53.20 AM.jpeg",
      specs: [
        "ISO Class 7 & 8 Cleanrooms",
        "HEPA Terminal Air Filtration",
        "Class II Type A2 Biosafety Hoods",
        "Differential Pressure Cascade Airlocks",
      ],
    },
    {
      title: "Pharma Block: Downstream Isolation, Crystallizers & ANFDs",
      description:
        "Dedicated crystallization, vacuum distillation, and Agitated Nutsche Filter Dryers (ANFDs) enabling rigorous control over crystal habit, bulk density, and ultra-fine jet micronization (D90 < 10 µm) for topical and injectable APIs.",
      image: "/images/WhatsApp Image 2026-10-23 at 9.53.26 AM.jpeg",
      specs: [
        "Automated Crystallizers & Distillation",
        "Agitated Nutsche Filter Dryers (ANFDs)",
        "Precision Jet Milling (D90 < 10 µm)",
        "Closed-Loop Solvent Recovery Units",
      ],
    },
    {
      title: "Analytical Testing & cGMP Quality Control Laboratories",
      description:
        "Fully equipped quality control, microbiology, and process science laboratories performing raw material testing, in-process HPLC/GC controls, stability testing under ICH guidelines, and finished API batch release assays.",
      image: "/images/WhatsApp Image 2026-10-23 at 9.53.21 AM.jpeg",
      specs: [
        "Validated HPLC & GC Systems",
        "Impurity Profiling & Monograph Assays",
        "Microbial Limit Isolators",
        "ICH Stability Climatic Chambers",
      ],
    },
    {
      title: "Continuous Heavy Utilities & 1,000 kVA Power Back-Up",
      description:
        "Heavy-duty utility installations including 1,000 kVA standby diesel generator sets, industrial multi-ton steam boilers, oil-free rotary screw sterile air compressors, brine chillers, and chilled water loops ensuring 24/7 uninterrupted operation.",
      image: "/images/WhatsApp Image 2026-10-23 at 9.53.37 AM.jpeg",
      specs: [
        "1,000 kVA Standby Diesel Generator",
        "Multi-Ton Industrial Steam Boilers",
        "Oil-Free Sterile Compressed Air",
        "Brine Chillers & Cooling Towers",
      ],
    },
    {
      title: "100% Zero Liquid Discharge (ZLD) Effluent Treatment",
      description:
        "Sustainable biological effluent treatment plant (Bio-ETP) equipped with Multiple Effect Evaporators (MEE), reverse osmosis (RO) membranes, and biological digesters that recycle 100% of process water back into operations with zero discharge to the environment.",
      image: "/images/WhatsApp Image 2026-10-23 at 9.53.36 AM.jpeg",
      specs: [
        "100% Process Water Recovery",
        "Multiple Effect Evaporators (MEE)",
        "RO Membrane Desalination Loops",
        "Zero Liquid Discharge to Ecosystem",
      ],
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
              Shivampet, Medak (Telangana) • ~5 Acres Campus
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Leading-Edge <span className="text-[#00BEDB]">Facilities</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
              Purpose-built for high-titer microbial fermentation, sterile downstream processing, and cGMP compliance — engineered to supply India&rsquo;s first domestic anti-infective APIs to global pharmaceutical markets.
            </p>
          </div>
        </section>

        {/* Plant Fast-Facts Architecture Ribbon */}
        <section className="bg-white border-b border-gray-100 py-10 relative z-20 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              <div className="p-4 rounded-2xl bg-[#E9F6F8] border border-cyan-100">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#002F3C]">~5 Acres</div>
                <div className="text-xs text-gray-600 font-semibold mt-1">Industrial Campus</div>
                <div className="text-[11px] text-gray-500">Shivampet, Medak</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#E9F6F8] border border-cyan-100">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#00BEDB]">20,000 m²</div>
                <div className="text-xs text-gray-600 font-semibold mt-1">Production Block</div>
                <div className="text-[11px] text-gray-500">Blocks A &amp; B</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#E9F6F8] border border-cyan-100">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">340 kL+</div>
                <div className="text-xs text-gray-600 font-semibold mt-1">Ultimate Capacity</div>
                <div className="text-[11px] text-gray-500">3 × 33 KL Operational</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#E9F6F8] border border-cyan-100">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#002F3C]">1,000 kVA</div>
                <div className="text-xs text-gray-600 font-semibold mt-1">Standby DG Set</div>
                <div className="text-[11px] text-gray-500">24/7 Continuous Power</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#E9F6F8] border border-cyan-100 col-span-2 md:col-span-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">100% ZLD</div>
                <div className="text-xs text-gray-600 font-semibold mt-1">Zero Liquid Discharge</div>
                <div className="text-[11px] text-gray-500">Bio-ETP with MEE &amp; RO</div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Overview Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {facilityHighlights.map((fac, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 ${
                  idx % 2 === 0 ? "bg-white" : "bg-[#F4FAF8]"
                }`}
              >
                {/* Image Col (5 cols) */}
                <div
                  className={`lg:col-span-5 relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-md border border-gray-200 group ${
                    idx % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={fac.image}
                    alt={fac.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#002F3C]/90 text-cyan-300 backdrop-blur-sm">
                      cGMP Facility
                    </span>
                  </div>
                </div>

                {/* Content Col (7 cols) */}
                <div
                  className={`lg:col-span-7 space-y-5 ${
                    idx % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="text-xs font-bold text-[#00BEDB] uppercase tracking-wider">
                    Infrastructure Highlight 0{idx + 1}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#002F3C] tracking-tight">
                    {fac.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {fac.description}
                  </p>

                  <div className="pt-2">
                    <div className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2.5">
                      Technical Highlights:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {fac.specs.map((spec, sIdx) => (
                        <div
                          key={sIdx}
                          className="px-3 py-2 rounded-lg bg-white border border-gray-200 text-xs font-medium text-gray-800 flex items-center gap-2 shadow-2xs"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00BEDB]" />
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Plant Inspection & Audit CTA */}
          <div className="mt-20 bg-gradient-to-r from-[#002F3C] to-[#004859] rounded-2xl p-10 sm:p-14 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                Schedule a Technical Audit or Facility Tour
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                We welcome regulatory audits and technical vendor assessments by pharmaceutical qualification teams. Contact our plant leadership to coordinate an on-site walkthrough at Shivampet, Medak.
              </p>
            </div>
            <Link
              href="/contact"
              className="whitespace-nowrap px-8 py-4 rounded-xl bg-[#00BEDB] hover:bg-[#00aebd] text-[#002F3C] font-bold text-sm shadow-lg transition-transform hover:scale-105"
            >
              Contact Facility QA Team &rarr;
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
