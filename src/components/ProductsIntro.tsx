import Link from 'next/link';
import React from 'react';

export default function ProductsIntro() {
  const portfolio = [
    {
      name: "Fusidic Acid & Sodium Fusidate",
      casNo: "6990-06-3 / 751-94-0",
      category: "Narrow-Spectrum Anti-Staphylococcal (EF-G Inhibitor)",
      statusBadge: "Commercial Jun 2026",
      statusColor: "bg-[#002F3C] text-cyan-300",
      grades: ["EP", "BP", "USP", "IP"],
      description:
        "Potent narrow-spectrum antibiotic targeted against Gram-positive bacteria including MRSA. Available as micronized crystalline acid (D90 < 10 µm) and water-soluble sodium salt for ophthalmic, topical, and oral formulations.",
      highlights: [
        "First domestic producer in India",
        "Commercial batches validated with Indian formulators",
        "Micronized D90 < 10 µm & ultra-fine < 5 µm",
        "~21,600 kg peak annual capacity",
      ],
      linkText: "Explore Fusidic Acid & Specs",
    },
    {
      name: "Daptomycin",
      casNo: "103060-53-3",
      category: "WHO Critically Important / Last-Resort Injectable Lipopeptide",
      statusBadge: "Commercial Oct 2027",
      statusColor: "bg-emerald-900 text-emerald-300",
      grades: ["USP", "EP", "IP"],
      description:
        "Last-resort bactericidal cyclic lipopeptide for severe Gram-positive infections (MRSA, VRE, bacteremia, endocarditis). Binds calcium-dependently to membranes causing rapid depolarization without cellular lysis.",
      highlights: [
        "Process developed & scaled in-house",
        "Highest-value molecule (> US$ 12,000/kg)",
        "Sterile lyophilization & injectable-grade bulk",
        "~2,040 kg peak annual capacity",
      ],
      linkText: "Explore Daptomycin Details",
    },
    {
      name: "Teicoplanin",
      casNo: "61036-62-2",
      category: "WHO Critically Important / Glycopeptide (Renal-Safe Profile)",
      statusBadge: "Launch FY29 (Oct 2028)",
      statusColor: "bg-indigo-950 text-indigo-300",
      grades: ["EP", "BP", "IP"],
      description:
        "Parenteral glycopeptide antibiotic for severe Gram-positive hospital infections. Preferred for renally compromised patients due to significantly lower nephrotoxicity vs vancomycin, with once-daily dosing.",
      highlights: [
        "Dedicated 20 KL fermenters in Block B",
        "Integrated downstream holding ~80% gross margin",
        "US$ 820M expanding global market",
        "~2,808 kg peak annual capacity",
      ],
      linkText: "Explore Teicoplanin Pipeline",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50/50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-[#002F3C] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00BEDB] animate-pulse" />
            Core API Platform
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002F3C] tracking-tight">
            Three Critical <span className="text-[#00BEDB]">Fermentation Anti-Infectives</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto">
            India currently imports 100% of these three lifesaving APIs. Fermac Bio enters as the nation&rsquo;s first domestic manufacturer, supplying global-standard bulk active ingredients to world-leading formulators.
          </p>
        </div>

        {/* 3 Core Molecules Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto items-stretch">
          {portfolio.map((prod, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/90 shadow-xs hover:shadow-xl hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header status bar */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${prod.statusColor}`}>
                    {prod.statusBadge}
                  </span>
                  <div className="flex items-center gap-1">
                    {prod.grades.map((g) => (
                      <span key={g} className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-gray-100 text-gray-700">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#002F3C] group-hover:text-[#00BEDB] transition-colors mb-1.5">
                  {prod.name}
                </h3>
                <p className="text-[11px] text-cyan-800 font-mono mb-2">CAS: {prod.casNo}</p>
                <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-4">
                  {prod.category}
                </div>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {prod.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 mb-6 pt-4 border-t border-gray-100">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    Manufacturing &amp; Commercial Focus:
                  </div>
                  {prod.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-700">
                      <span className="text-[#00BEDB] font-bold mt-0.5 shrink-0">✓</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#002F3C] hover:bg-[#003d4f] text-white font-semibold text-xs sm:text-sm transition-colors shadow-xs group-hover:bg-[#00BEDB] group-hover:text-[#002F3C]"
              >
                <span>{prod.linkText}</span>
                <span>&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
