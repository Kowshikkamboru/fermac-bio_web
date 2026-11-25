"use client";

import React from "react";
import Link from "next/link";

export default function Features() {
  const drivers = [
    {
      id: "fermentation-apis",
      number: "01",
      title: "Fermentation Based APIs",
      description:
        "Delivering high purity, cost-efficient APIs through cutting-edge Biotechnological processes.",
      link: "/products",
      linkLabel: "Explore APIs",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.7}
            d="M9 3h6m-5 0v5.172a2 2 0 01-.586 1.414l-4.414 4.414A2 2 0 004.414 17.414V19a2 2 0 002 2h11.172a2 2 0 002-2v-1.586a2 2 0 00-.586-1.414l-4.414-4.414A2 2 0 0114 8.172V3"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M7 15h10" />
        </svg>
      ),
    },
    {
      id: "curated-portfolio",
      number: "02",
      title: "Curated Product Portfolio",
      description:
        "Focused on high-growth, niche APIs with limited competition.",
      link: "/products",
      linkLabel: "View Portfolio",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.7}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          />
        </svg>
      ),
    },
    {
      id: "technology-backbone",
      number: "03",
      title: "Strong Technology Backbone",
      description:
        "Driven by robust in-house R&D, ensuring innovation, precision, and process efficiency.",
      link: "/rnd/api",
      linkLabel: "R&D Capabilities",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.7}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "state-of-the-art-facility",
      number: "04",
      title: "State-of-the-Art Facility",
      description:
        "Built for global standard production with advanced fermentation and downstream capabilities.",
      link: "/facilities",
      linkLabel: "Tour Infrastructure",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.7}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      id: "high-calibre-team",
      number: "05",
      title: "High Calibre Team",
      description:
        "Led by seasoned professionals with 25+ years of technical and operational expertise.",
      link: "/about",
      linkLabel: "Meet Leadership",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.7}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="key-drivers" className="py-20 sm:py-28 bg-white border-b border-gray-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Sticky Header Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#00BEDB]" />
              <span className="text-[#00BEDB] text-xs font-semibold tracking-[0.2em] uppercase">
                FERMAC Bio
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#001a24] tracking-tight leading-tight mb-5">
              Key Drivers of{" "}
              <span className="text-[#00BEDB]">FERMAC Bio</span>
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-8 font-light">
              Demonstrating strong fundamentals, scalable ops, and clear growth levers in a high-demand segment.
            </p>

            <div className="p-6 rounded-2xl bg-[#fbfcfd] border border-gray-200/80 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#002F3C]">
                Five Growth Pillars
              </div>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                Every stage of FERMAC Bio&rsquo;s platform—from strain development and in-house R&amp;D to commercial bioreactors and leadership—is built for global regulatory standards.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/facilities"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#001a24] hover:bg-[#002a38] text-white text-xs font-bold tracking-wide transition-colors"
                >
                  View Infrastructure
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 hover:border-[#001a24] text-[#001a24] text-xs font-semibold transition-colors"
                >
                  API Portfolio
                </Link>
              </div>
            </div>
          </div>

          {/* Right 8 Columns: All 5 Key Drivers from Slide 7 */}
          <div className="lg:col-span-8 space-y-4">
            {drivers.map((driver) => (
              <div
                key={driver.id}
                className="group relative bg-[#fbfcfd] hover:bg-[#001a24] rounded-2xl p-6 sm:p-7 border border-gray-200/90 hover:border-[#00BEDB]/40 transition-all duration-300 shadow-2xs hover:shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                  {/* Left Icon + Connector Dot */}
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-white/10 border border-gray-200 group-hover:border-white/15 flex items-center justify-center text-[#00BEDB] transition-colors shadow-2xs">
                      {driver.icon}
                    </div>
                    <div className="hidden sm:flex items-center gap-2">
                      <span className="w-5 h-px bg-gray-300 group-hover:bg-[#00BEDB]/50 transition-colors" />
                      <span className="w-9 h-9 rounded-full bg-[#002F3C] group-hover:bg-[#00BEDB] text-white group-hover:text-[#001a24] font-mono text-xs font-bold flex items-center justify-center transition-colors">
                        {driver.number}
                      </span>
                    </div>
                  </div>

                  {/* Driver Title & Description */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 sm:hidden mb-1">
                      <span className="text-xs font-mono font-bold text-[#00BEDB]">
                        {driver.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#001a24] group-hover:text-white transition-colors mb-1">
                      {driver.title}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-300 leading-relaxed font-light transition-colors">
                      {driver.description}
                    </p>
                  </div>

                  {/* Link Arrow */}
                  <div className="shrink-0">
                    <Link
                      href={driver.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002F3C] group-hover:text-[#00BEDB] transition-colors"
                    >
                      <span>{driver.linkLabel}</span>
                      <svg
                        className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
