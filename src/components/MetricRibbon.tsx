"use client";

import React from "react";

export default function MetricRibbon() {
  const metrics = [
    {
      num: "01",
      value: "340 kL+",
      label: "Fermentation Scale",
      sub: "3 × 33 KL commissioned in Phase 1, expanding to 340 kL+ campus scale.",
    },
    {
      num: "02",
      value: "1st in India",
      label: "Import Substitution",
      sub: "Primary domestic manufacturer for Fusidic Acid, Daptomycin & Teicoplanin.",
    },
    {
      num: "03",
      value: "25+ Years",
      label: "Founding Expertise",
      sub: "Veteran fermentation scientists leading bioprocess kinetics and commercial scaling.",
    },
    {
      num: "04",
      value: "100% ZLD",
      label: "Zero Liquid Discharge",
      sub: "Bio-ETP with MEE & RO membranes — 100% industrial process water recycled.",
    },
  ];

  return (
    <section className="bg-white border-b border-gray-100 py-16 lg:py-20 relative z-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-gray-100">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between ${
                idx > 0 ? "pt-8 sm:pt-0 lg:pl-8" : ""
              }`}
            >
              <div>
                {/* Minimalist index & cyan hairline accent */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold text-gray-300 tracking-wider">
                    {m.num}
                  </span>
                  <span className="w-5 h-0.5 bg-[#00BEDB]" />
                </div>

                {/* Bold authoritative stat */}
                <div className="text-4xl lg:text-5xl font-black text-[#001a24] tracking-tight leading-none mb-2">
                  {m.value}
                </div>

                {/* Cyan label */}
                <div className="text-xs font-bold text-[#00BEDB] uppercase tracking-[0.14em] mb-3">
                  {m.label}
                </div>
              </div>

              {/* Clean description */}
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                {m.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
