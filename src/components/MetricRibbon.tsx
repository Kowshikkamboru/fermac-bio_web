"use client";

import React from "react";

export default function MetricRibbon() {
  const metrics = [
    {
      num: "01",
      value: "25,000 sq. m.",
      label: "Integrated Facility",
      sub: "5-acre campus near Hyderabad in Medak District; Block A operational, second block planned for expansion.",
    },
    {
      num: "02",
      value: "6 × 33 KL",
      label: "Block A Fermenters",
      sub: "3 production fermenters currently operational and 3 planned for capacity expansion (350 KL scalable site).",
    },
    {
      num: "03",
      value: "SCADA + DSP",
      label: "Automated Bioprocessing",
      sub: "Integrated cell culture lab, seed train, continuous downstream processing, and ANFD isolation suites.",
    },
    {
      num: "04",
      value: "100% ZLD",
      label: "Zero Liquid Discharge",
      sub: "Bio-ETP, RO system, MEE & ATFD — comprehensive water treatment, recovery, and reuse.",
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
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold text-gray-300 tracking-wider">
                    {m.num}
                  </span>
                  <span className="w-5 h-0.5 bg-[#00BEDB]" />
                </div>

                <div className="text-3xl lg:text-4xl font-black text-[#001a24] tracking-tight leading-none mb-2">
                  {m.value}
                </div>

                <div className="text-xs font-bold text-[#00BEDB] uppercase tracking-[0.14em] mb-3">
                  {m.label}
                </div>
              </div>

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
