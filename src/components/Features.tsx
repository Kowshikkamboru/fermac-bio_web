"use client";

import React from "react";
import Link from "next/link";

export default function Features() {
  const pillars = [
    {
      id: "fermentation",
      badge: "Industrial Scale",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Precision Fermentation & Scale-Up",
      description:
        "High-density microbial bioprocesses engineered for high antibiotic yield, precision parameter monitoring, and continuous sterile air utility loops.",
      specs: ["Automated Bioreactors", "Dissolved Oxygen Control", "Sterile Media Loops"],
      link: "/facilities",
    },
    {
      id: "quality",
      badge: "Regulatory Compliance",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Pharmacopeial Purity & cGMP Assurance",
      description:
        "Stringent Quality Management Systems ensuring full adherence to EP, BP, and USP pharmacopeias with exhaustive analytical HPLC/GC release testing.",
      specs: ["EP / BP / USP Grades", "DMF / CEP Dossiers", "Batch Traceability"],
      link: "/rnd/api",
    },
    {
      id: "micronization",
      badge: "Tailored Physical Specs",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Jet-Milled Particle Micronization",
      description:
        "Specialized particle engineering producing ultra-fine micronized Fusidic Acid suitable for high-bioavailability ophthalmic ointments and dermal creams.",
      specs: ["Controlled D90 < 10 µm", "Ophthalmic & Dermal", "Custom Milling Profiles"],
      link: "/products",
    },
    {
      id: "sustainability",
      badge: "ESG & Eco Stewardship",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Zero Liquid Discharge (ZLD) Sustainability",
      description:
        "100% industrial wastewater recycling through multi-effect evaporators and RO membranes, converting biological fermentation by-products into agricultural value.",
      specs: ["100% Water Recovery", "Waste-to-Value Cycles", "Green Belt Campus"],
      link: "/sustainability",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50/70 border-b border-gray-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-[#002F3C] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00BEDB] animate-pulse" />
            Core Scientific Pillars
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002F3C] tracking-tight mb-3">
            Pioneering <span className="text-[#00BEDB]">Biotechnology</span> Manufacturing
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Fermac Bio stands at the forefront of biotechnology innovation, specializing in high-purity fermentation APIs engineered to meet exacting international pharmaceutical standards.
          </p>
        </div>

        {/* Pillars Grid: Equal-Height Responsive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="h-full min-h-[380px] w-full bg-white rounded-3xl border border-gray-200/90 p-5 sm:p-6 shadow-xs hover:shadow-xl hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Subtle ambient hover glow */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-100/30 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500 overflow-hidden" />

              {/* 1. Header: Icon + Badge (Full Badge, Never Truncated) */}
              <div className="relative z-10 flex items-start justify-between gap-2 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-[#E9F6F8] text-[#002F3C] group-hover:bg-[#002F3C] group-hover:text-cyan-300 transition-colors duration-200 flex items-center justify-center border border-cyan-100 shrink-0 shadow-2xs">
                  {pillar.icon}
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-[#002F3C] group-hover:bg-cyan-50 group-hover:text-[#002F3C] transition-colors border border-gray-200/60 text-right leading-none">
                  {pillar.badge}
                </span>
              </div>

              {/* 2. Body: Title, Full Description, and Responsive Specifications */}
              <div className="relative z-10 flex-1 flex flex-col justify-between py-1">
                <div>
                  <h3 className="text-base font-extrabold text-[#002F3C] group-hover:text-[#00BEDB] transition-colors leading-snug mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed font-normal mb-3">
                    {pillar.description}
                  </p>
                </div>

                {/* Responsive Specifications / Scope Box */}
                <div className="mt-auto p-2.5 sm:p-3 rounded-2xl bg-[#F0F9FB] border border-cyan-100/80 group-hover:border-cyan-200 transition-colors">
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00BEDB]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#002F3C]">
                      Technical Specifications
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.specs.map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-medium bg-white text-[#002F3C] border border-cyan-200/70 shadow-2xs"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Footer: Learn more link (Always Visible with Ample Spacing) */}
              <div className="relative z-10 pt-3 mt-3 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href={pillar.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002F3C] group-hover:text-[#00BEDB] transition-colors"
                >
                  <span>Learn more</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
                <Link
                  href={pillar.link}
                  className="w-7 h-7 rounded-full bg-cyan-50 text-[#002F3C] group-hover:bg-[#002F3C] group-hover:text-cyan-300 flex items-center justify-center transition-colors text-xs font-bold shadow-2xs"
                  aria-label={`Learn more about ${pillar.title}`}
                >
                  &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
