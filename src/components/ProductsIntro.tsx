import Link from 'next/link';
import React from 'react';

export default function ProductsIntro() {
  const portfolio = [
    {
      name: "Fusidic Acid & Sodium Fusidate",
      casNo: "6990-06-3 / 751-94-0",
      category: "Narrow-Spectrum Anti-Staphylococcal",
      statusBadge: "Commercial Jun 2026",
      statusClass: "text-[#00BEDB] bg-[#00BEDB]/10",
      grades: ["EP", "BP", "USP", "IP"],
      description:
        "Potent narrow-spectrum antibiotic targeted against Gram-positive bacteria including MRSA. Available as micronized crystalline acid (D90 < 10 µm) and water-soluble sodium salt.",
      highlights: [
        "First domestic producer in India",
        "Commercial batches validated",
        "Micronized D90 < 10 µm",
        "~21,600 kg peak annual capacity",
      ],
    },
    {
      name: "Daptomycin",
      casNo: "103060-53-3",
      category: "WHO Critically Important — Last-Resort Injectable",
      statusBadge: "Commercial Oct 2027",
      statusClass: "text-emerald-500 bg-emerald-500/10",
      grades: ["USP", "EP", "IP"],
      description:
        "Last-resort bactericidal cyclic lipopeptide for severe Gram-positive infections (MRSA, VRE, bacteremia). Highest-value molecule in our portfolio.",
      highlights: [
        "Process developed & scaled in-house",
        "Value > US$12,000/kg",
        "Sterile lyophilization grade",
        "~2,040 kg peak annual capacity",
      ],
    },
    {
      name: "Teicoplanin",
      casNo: "61036-62-2",
      category: "WHO Critically Important — Glycopeptide",
      statusBadge: "Launch FY29 (Oct 2028)",
      statusClass: "text-indigo-400 bg-indigo-400/10",
      grades: ["EP", "BP", "IP"],
      description:
        "Parenteral glycopeptide for severe Gram-positive hospital infections. Preferred for renally compromised patients, with once-daily dosing advantage.",
      highlights: [
        "Dedicated 20 KL fermenters",
        "~80% gross margin potential",
        "US$820M expanding global market",
        "~2,808 kg peak annual capacity",
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#f9fafb] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#00BEDB]" />
            <span className="text-[#00BEDB] text-xs font-semibold tracking-[0.2em] uppercase">
              API Portfolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#001a24] tracking-tight leading-tight mb-4">
            Three Critical
            <br />
            <span className="text-[#00BEDB]">Fermentation Anti-Infectives</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            India currently imports 100% of these lifesaving APIs. Fermac Bio enters as the
            nation&rsquo;s first domestic manufacturer delivering global-standard bulk active
            pharmaceutical ingredients.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
          {portfolio.map((prod, idx) => (
            <div
              key={idx}
              className="bg-white p-8 flex flex-col group hover:bg-[#001a24] transition-colors duration-300"
            >
              {/* Status + grades */}
              <div className="flex items-center justify-between gap-2 mb-6">
                <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 ${prod.statusClass}`}>
                  {prod.statusBadge}
                </span>
                <div className="flex items-center gap-1">
                  {prod.grades.map((g) => (
                    <span key={g} className="px-1.5 py-0.5 text-[10px] font-bold bg-gray-100 text-gray-600 group-hover:bg-white/10 group-hover:text-gray-300 transition-colors">
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#001a24] group-hover:text-white transition-colors leading-tight mb-1">
                {prod.name}
              </h3>
              <p className="text-[11px] font-mono text-gray-400 group-hover:text-gray-500 mb-1 transition-colors">
                CAS: {prod.casNo}
              </p>
              <div className="text-[11px] font-semibold text-gray-400 group-hover:text-gray-500 uppercase tracking-wide mb-5 transition-colors">
                {prod.category}
              </div>

              <p className="text-sm text-gray-500 group-hover:text-gray-400 leading-relaxed mb-6 flex-1 transition-colors">
                {prod.description}
              </p>

              {/* Highlights */}
              <div className="space-y-1.5 mb-8 pt-5 border-t border-gray-100 group-hover:border-white/10 transition-colors">
                {prod.highlights.map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2">
                    <span className="text-[#00BEDB] text-xs mt-0.5 shrink-0">—</span>
                    <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">{hl}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00BEDB] transition-colors"
              >
                View full monograph
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex items-center justify-between flex-wrap gap-4 py-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need a custom formulation? We offer tailored manufacturing services.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 bg-[#001a24] hover:bg-[#002a38] text-white text-sm font-bold tracking-wide transition-colors"
          >
            Request Product Dossier →
          </Link>
        </div>

      </div>
    </section>
  );
}
