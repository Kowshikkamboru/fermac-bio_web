"use client";

import React from "react";
import Link from "next/link";

export default function Features() {
  const pillars = [
    {
      id: "fermentation",
      number: "01",
      title: "Precision Fermentation & Scale-Up",
      description:
        "High-density microbial bioprocesses engineered for maximum antibiotic yield, with precision parameter monitoring and continuous sterile air utility loops across our 340 kL+ campus.",
      specs: ["Automated Bioreactors", "Dissolved Oxygen Control", "Sterile Media Loops"],
      link: "/facilities",
    },
    {
      id: "quality",
      number: "02",
      title: "Pharmacopeial Purity & cGMP Assurance",
      description:
        "Stringent Quality Management Systems ensuring full adherence to EP, BP, and USP pharmacopeias with exhaustive analytical HPLC/GC release testing across every batch.",
      specs: ["EP / BP / USP Grades", "DMF / CEP Dossiers", "Batch Traceability"],
      link: "/rnd/api",
    },
    {
      id: "micronization",
      number: "03",
      title: "Jet-Milled Particle Micronization",
      description:
        "Specialized particle engineering producing ultra-fine micronized Fusidic Acid suitable for high-bioavailability ophthalmic ointments and dermal creams.",
      specs: ["Controlled D90 < 10 µm", "Ophthalmic & Dermal", "Custom Milling Profiles"],
      link: "/products",
    },
    {
      id: "sustainability",
      number: "04",
      title: "Zero Liquid Discharge Sustainability",
      description:
        "100% industrial wastewater recycling through multi-effect evaporators and RO membranes, converting biological fermentation by-products into agricultural value.",
      specs: ["100% Water Recovery", "Waste-to-Value Cycles", "Green Belt Campus"],
      link: "/sustainability",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#f9fafb] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#00BEDB]" />
            <span className="text-[#00BEDB] text-xs font-semibold tracking-[0.2em] uppercase">
              Core Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#001a24] tracking-tight leading-tight mb-4">
            Pioneering Biotechnology
            <br />
            <span className="text-[#00BEDB]">Manufacturing</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Fermac Bio specializes in high-purity fermentation APIs engineered to meet
            exacting international pharmaceutical standards.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white p-8 flex flex-col group hover:bg-[#001a24] transition-colors duration-300"
            >
              {/* Number */}
              <span className="text-xs font-mono font-bold text-gray-300 group-hover:text-[#00BEDB]/40 mb-6 block transition-colors">
                {pillar.number}
              </span>

              {/* Title */}
              <h3 className="text-base font-bold text-[#001a24] group-hover:text-white transition-colors leading-snug mb-3">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-500 group-hover:text-gray-400 leading-relaxed transition-colors mb-6 flex-1">
                {pillar.description}
              </p>

              {/* Specs */}
              <div className="space-y-1.5 mb-6">
                {pillar.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#00BEDB] shrink-0" />
                    <span className="text-[11px] text-gray-400 group-hover:text-gray-400 font-medium">{spec}</span>
                  </div>
                ))}
              </div>

              {/* Link */}
              <Link
                href={pillar.link}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00BEDB] group-hover:text-[#00BEDB] transition-colors"
              >
                Learn more
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
