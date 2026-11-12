"use client";

import React from "react";

export default function MetricRibbon() {
  const metrics = [
    {
      value: "340 kL+",
      label: "Fermentation Capacity",
      desc: "3 × 33 KL commissioned in Block A (~100 kL), expanding to 340 kL+ total capacity.",
      accent: "text-[#002F3C]",
    },
    {
      value: "1st in India",
      label: "Import Substitution",
      desc: "First domestic producer for 3 critical fermentation APIs: Fusidic Acid, Daptomycin & Teicoplanin.",
      accent: "text-[#00BEDB]",
    },
    {
      value: "25+ Years",
      label: "Founding Experience",
      desc: "Veteran bioprocess engineers and fermentation scientists leading technology & scaling.",
      accent: "text-[#002F3C]",
    },
    {
      value: "100% ZLD",
      label: "Zero Liquid Discharge",
      desc: "Bio-ETP with Multiple Effect Evaporator (MEE) and RO recycling 100% of process water.",
      accent: "text-emerald-600",
    },
  ];

  return (
    <section className="bg-white border-b border-gray-100 py-10 sm:py-12 relative z-20 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className={`pt-4 sm:pt-0 ${idx !== 0 ? "sm:pl-8" : ""} text-left flex flex-col justify-start`}
            >
              <div className={`text-3xl sm:text-4xl font-extrabold ${m.accent} tracking-tight leading-none mb-1.5`}>
                {m.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-gray-900 mb-1">
                {m.label}
              </div>
              <p className="text-xs text-gray-500 leading-normal font-normal">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
