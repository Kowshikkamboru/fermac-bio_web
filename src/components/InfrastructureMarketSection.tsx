import React from "react";
import Link from "next/link";

interface InfrastructureMarketSectionProps {
  showInfrastructureLink?: boolean;
}

const infrastructurePoints = [
  {
    num: "01",
    label: "Integrated Campus & Production Block",
    highlight: "5 Acres · 25,000 sq. m. Facility",
    description:
      "5-acre site near Hyderabad in Medak District featuring a 25,000 sq. m. integrated manufacturing facility—Block A operational, with a second block planned for expansion.",
  },
  {
    num: "02",
    label: "Fermentation Capacity",
    highlight: "6 × 33 KL Block A · 350 KL Scalable Site",
    description:
      "Block A houses six 33 KL production fermenters (3 currently operational and 3 planned for capacity expansion) within a 350 KL scalable fermentation campus.",
  },
  {
    num: "03",
    label: "Scalable Architecture & Support Systems",
    highlight: "Future Capacity Expansion Ready",
    description:
      "Designed for scalability with comprehensive utilities, GMP warehousing, and infrastructure to support future capacity expansion.",
  },
];

export default function InfrastructureMarketSection({
  showInfrastructureLink = true,
}: InfrastructureMarketSectionProps) {
  return (
    <section
      id="infrastructure-opportunity"
      className="py-20 sm:py-24 bg-[#fbfcfd] border-b border-gray-100 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left 7 Cols: Infrastructure (Slide 4 — Points 1, 3 & 4) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#00BEDB]" />
                <span className="text-[#00BEDB] text-xs font-semibold tracking-[0.2em] uppercase">
                  Campus &amp; Operations
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#001a24] tracking-tight">
                  Manufacturing <span className="text-[#00BEDB]">Infrastructure</span>
                </h2>
                <span className="px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#002F3C] text-[11px] font-bold uppercase tracking-wider">
                  Medak District • Hyderabad
                </span>
              </div>

              <div className="space-y-5">
                {infrastructurePoints.map((pt) => (
                  <div
                    key={pt.num}
                    className="p-5 rounded-2xl bg-[#fbfcfd] border border-gray-100 hover:border-cyan-200 transition-colors flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#001a24] text-[#00BEDB] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      {pt.num}
                    </div>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-bold text-[#001a24]">
                          {pt.label}
                        </h3>
                        <span className="text-[11px] font-semibold text-[#00BEDB] bg-[#00BEDB]/10 px-2.5 py-0.5 rounded-full">
                          {pt.highlight}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed font-light">
                        {pt.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {showInfrastructureLink && (
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between gap-4 flex-wrap">
                <span className="text-xs text-gray-500">
                  Explore cleanrooms, downstream suites &amp; utility systems
                </span>
                <Link
                  href="/facilities"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00BEDB] hover:text-[#009cb5] transition-colors"
                >
                  Explore Full Infrastructure
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            )}
          </div>

          {/* Right 5 Cols: Market Opportunity (Slide 4 — Point 4 Only) */}
          <div className="lg:col-span-5 bg-[#001a24] text-white rounded-3xl p-8 sm:p-10 border border-white/10 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[#00BEDB]/10 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#00BEDB]" />
                <span className="text-[#00BEDB] text-xs font-semibold tracking-[0.2em] uppercase">
                  Strategic Focus
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                Market <span className="text-[#00BEDB]">Opportunity</span>
              </h2>

              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 mb-6">
                <div className="w-11 h-11 rounded-xl bg-[#00BEDB]/15 border border-[#00BEDB]/30 flex items-center justify-center text-[#00BEDB] mb-5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>

                <p className="text-lg sm:text-xl font-semibold text-white leading-relaxed">
                  FERMAC targets market demand by focusing on{" "}
                  <span className="text-[#00BEDB]">
                    premium-grade fermentation-based APIs
                  </span>
                  .
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-xs font-bold text-[#00BEDB] uppercase tracking-wider mb-1">
                    API Grade
                  </div>
                  <div className="text-sm font-semibold text-white">
                    EP / BP / USP / IP
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-xs font-bold text-[#00BEDB] uppercase tracking-wider mb-1">
                    Core Focus
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Fermentation APIs
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00BEDB] hover:bg-[#00a8c8] text-[#001a24] text-xs sm:text-sm font-bold tracking-wide transition-colors"
              >
                Explore API Portfolio
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="text-xs font-semibold text-gray-300 hover:text-white transition-colors"
              >
                Partner With Us &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
