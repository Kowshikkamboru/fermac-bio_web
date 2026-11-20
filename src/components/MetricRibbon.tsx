"use client";

import React from "react";

export default function MetricRibbon() {
  const metrics = [
    {
      value: "340 kL+",
      label: "Fermentation Capacity",
      desc: "3 × 33 KL commissioned in Block A, expanding to 340 kL+ total.",
    },
    {
      value: "1st in India",
      label: "Import Substitution",
      desc: "First domestic producer for Fusidic Acid, Daptomycin & Teicoplanin.",
    },
    {
      value: "25+ Years",
      label: "Founding Expertise",
      desc: "Veteran bioprocess engineers leading technology & commercial scaling.",
    },
    {
      value: "100% ZLD",
      label: "Zero Liquid Discharge",
      desc: "Bio-ETP with MEE and RO membrane — 100% process water recycled.",
    },
  ];

  return (
    <section className="bg-white border-b border-gray-100 py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-y-0">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className={`py-8 px-6 sm:px-8 ${
                idx < metrics.length - 1
                  ? "lg:border-r border-gray-100"
                  : ""
              } ${idx >= 2 ? "border-t border-gray-100 lg:border-t-0" : ""}`}
            >
              <div className="text-3xl sm:text-4xl font-black text-[#001a24] tracking-tight leading-none mb-2">
                {m.value}
              </div>
              <div className="text-xs font-bold text-[#00BEDB] uppercase tracking-[0.12em] mb-2">
                {m.label}
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
