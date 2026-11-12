"use client";

import React from "react";
import Link from "next/link";

export default function TrustSection() {
  const certifications = [
    { label: "cGMP Certified", sub: "Schedule M / WHO-GMP Standards" },
    { label: "EP / BP / USP", sub: "Harmonized Pharmacopeias" },
    { label: "100% ZLD", sub: "Bio-ETP with MEE & RO" },
    { label: "ISO 9001 / 14001", sub: "Quality & EHS Compliance" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Narrative Column (7 cols) */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-[#002F3C] text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00BEDB] animate-pulse" />
              Global Healthcare Reliability
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002F3C] tracking-tight mb-4">
              Trusted by Healthcare Leaders <span className="text-[#00BEDB]">Worldwide</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
              Founded in 2022 by fermentation scientists Suneel Kumar Battula and Baby Rani Polavarapu, each with over 25 years of specialized biotechnology and bioprocess expertise, Fermac Bio is India&rsquo;s first domestic manufacturer for three critical fermentation-based APIs: Fusidic Acid, Daptomycin, and Teicoplanin.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
              Our 5-acre biomanufacturing campus at Shivampet, Medak operates under strict cGMP protocols, providing complete batch documentation, impurity profiling, Certificate of Analysis (CoA), and tailored micronization specifications.
            </p>

            {/* Certifications Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7">
              {certifications.map((c, i) => (
                <div key={i} className="p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="text-xs font-bold text-[#002F3C]">{c.label}</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">{c.sub}</div>
                </div>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/rnd/api"
                className="px-5 py-2.5 rounded-lg bg-[#002F3C] hover:bg-[#003B4C] text-white text-xs sm:text-sm font-bold shadow-sm transition-all hover:scale-105"
              >
                Inspect Technical Capabilities &rarr;
              </Link>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-lg bg-white hover:bg-gray-50 text-[#002F3C] border border-gray-300 text-xs sm:text-sm font-semibold transition-all hover:scale-105"
              >
                Request Audit &amp; Samples
              </Link>
            </div>
          </div>

          {/* Right Metrics Grid Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {/* Stat 1 */}
              <div className="bg-[#F8FAFC] p-5 sm:p-6 rounded-2xl border border-gray-200 shadow-xs hover:border-cyan-400 transition-all">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#002F3C] mb-1">
                  25+
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-800">Years Experience</div>
                <p className="text-[11px] text-gray-500 mt-1 leading-normal">
                  Founding scientists leading fermentation development &amp; commercial scaling.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="bg-[#F8FAFC] p-5 sm:p-6 rounded-2xl border border-gray-200 shadow-xs hover:border-cyan-400 transition-all">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#00BEDB] mb-1">
                  340 kL+
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-800">Design Capacity</div>
                <p className="text-[11px] text-gray-500 mt-1 leading-normal">
                  3 × 33 KL commissioned, expanding across Blocks A &amp; B in Shivampet.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="bg-[#F8FAFC] p-5 sm:p-6 rounded-2xl border border-gray-200 shadow-xs hover:border-cyan-400 transition-all">
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 mb-1">
                  &lt;10 µm
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-800">Micronized D90</div>
                <p className="text-[11px] text-gray-500 mt-1 leading-normal">
                  Controlled particle-size distribution specifically engineered for ophthalmic ointments.
                </p>
              </div>

              {/* Stat 4 */}
              <div className="bg-[#F8FAFC] p-5 sm:p-6 rounded-2xl border border-gray-200 shadow-xs hover:border-cyan-400 transition-all">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#002F3C] mb-1">
                  100%
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-800">Zero Liquid Discharge</div>
                <p className="text-[11px] text-gray-500 mt-1 leading-normal">
                  Bio-ETP with Multiple Effect Evaporator &amp; RO membrane water recycling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
