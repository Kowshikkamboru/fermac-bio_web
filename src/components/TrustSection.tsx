"use client";

import React from "react";
import Link from "next/link";

export default function TrustSection() {
  const certifications = [
    { label: "cGMP Certified", sub: "WHO-GMP / Schedule M" },
    { label: "EP / BP / USP", sub: "Harmonized Pharmacopeias" },
    { label: "100% ZLD", sub: "Bio-ETP · MEE · RO" },
    { label: "ISO 9001 / 14001", sub: "Quality & EHS Compliance" },
  ];

  const stats = [
    { value: "25+", label: "Years Experience", desc: "Founding scientists with deep fermentation expertise." },
    { value: "340 kL+", label: "Design Capacity", desc: "3 × 33 KL commissioned, expanding across Blocks A & B." },
    { value: "<10 µm", label: "Micronized D90", desc: "Engineered for ophthalmic and dermal formulations." },
    { value: "100%", label: "Zero Liquid Discharge", desc: "Bio-ETP with MEE & RO membrane water recycling." },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left narrative */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#00BEDB]" />
              <span className="text-[#00BEDB] text-xs font-semibold tracking-[0.2em] uppercase">
                Global Healthcare Reliability
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#001a24] tracking-tight leading-tight mb-6">
              Trusted by Healthcare
              <br />
              Leaders <span className="text-[#00BEDB]">Worldwide</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 2022 by fermentation scientists Suneel Kumar Battula and Baby Rani Polavarapu,
              each with over 25 years of specialized biotechnology expertise, Fermac Bio is India&rsquo;s
              first domestic manufacturer for three critical fermentation-based APIs.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              Our 5-acre biomanufacturing campus at Shivampet, Medak operates under strict cGMP protocols,
              providing complete batch documentation, impurity profiling, Certificate of Analysis (CoA),
              and tailored micronization specifications.
            </p>

            {/* Certifications */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {certifications.map((c, i) => (
                <div key={i} className="border border-gray-200 p-4">
                  <div className="text-sm font-bold text-[#001a24] mb-0.5">{c.label}</div>
                  <div className="text-xs text-gray-500">{c.sub}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/rnd/api"
                className="px-6 py-3 bg-[#001a24] hover:bg-[#002a38] text-white text-sm font-bold tracking-wide transition-colors"
              >
                Technical Capabilities →
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-gray-300 hover:border-[#001a24] text-[#001a24] text-sm font-semibold transition-colors"
              >
                Request Audit & Samples
              </Link>
            </div>
          </div>

          {/* Right stats */}
          <div className="grid grid-cols-2 gap-px bg-gray-200">
            {stats.map((s, i) => (
              <div key={i} className="bg-white p-7">
                <div className="text-3xl font-black text-[#001a24] mb-1">{s.value}</div>
                <div className="text-xs font-bold text-[#00BEDB] uppercase tracking-[0.12em] mb-2">{s.label}</div>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
