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

  const pillars = [
    {
      num: "01",
      title: "Import-Substitution Opportunity",
      points: [
        "India imports around 70% of APIs from China and the EU, leaving Indian formulators exposed to supply chain risks.",
        "Government schemes like Production Linked Incentive (PLI) and “Atmanirbhar Bharat” promote local production of critical APIs.",
        "Early domestic entry into niche fermentation APIs establishes FERMAC as a key local supplier.",
      ],
    },
    {
      num: "02",
      title: "Strong Technical Background",
      points: [
        "Brainchild of Biotech and Chemical engineers each with 25+ years of specialized experience.",
        "Collaborations with Bransun Labs and Fleming Labs provide cutting-edge technology, strain improvement, and process optimization.",
        "Strong process engineering and scale-up capabilities move molecules from lab to commercial scale efficiently.",
      ],
    },
    {
      num: "03",
      title: "Scalable and Diverse Platform",
      points: [
        "Core fermentation technology is modular and transferable across other high-value APIs, enabling horizontal scaling.",
        "Same infrastructure supports forward integration into finished dosages or contract manufacturing for global clients.",
        "Platform can be leveraged for adjacent segments including enzymes, probiotics, and veterinary APIs.",
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">

          {/* Left narrative: Supply Chain Reliability & Quality */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#00BEDB]" />
              <span className="text-[#00BEDB] text-xs font-semibold tracking-[0.2em] uppercase">
                Strategic Advantage &amp; Reliability
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#001a24] tracking-tight leading-tight mb-6">
              Resilient Domestic Supply,{" "}
              <span className="text-[#00BEDB]">Global Quality</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              With India importing around 70% of its APIs from China and the EU, domestic formulators face persistent supply chain risks. Aligned with Production Linked Incentive (PLI) and &ldquo;Atmanirbhar Bharat&rdquo; initiatives, FERMAC Bio&rsquo;s early entry into niche fermentation APIs establishes a dependable domestic supply pillar.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              Our Medak District campus operates under strict cGMP protocols, providing complete batch documentation, impurity profiling, Certificate of Analysis (CoA), and tailored micronization specifications.
            </p>

            {/* Certifications */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {certifications.map((c, i) => (
                <div key={i} className="border border-gray-200 p-4 rounded-xl bg-[#fbfcfd]">
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
                Request Audit &amp; Samples
              </Link>
            </div>
          </div>

          {/* Right 7 Cols: Slide 18 First 3 Strategic Pillars */}
          <div className="lg:col-span-7 space-y-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="p-6 sm:p-7 rounded-2xl bg-[#fbfcfd] border border-gray-200/90 hover:border-cyan-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#001a24] text-[#00BEDB] font-mono text-xs font-bold">
                    {pillar.num}
                  </span>
                  <h3 className="text-lg font-bold text-[#001a24]">
                    {pillar.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {pillar.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00BEDB] mt-2 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
