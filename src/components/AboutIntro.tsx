import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AboutIntroProps {
  isStandalonePage?: boolean;
}

export default function AboutIntro({ isStandalonePage = false }: AboutIntroProps) {
  const highlights = [
    {
      num: "01",
      title: "Primary Microbial Fermentation",
      description:
        "High-density aerobic and anaerobic fermenter cascades (3 × 33 KL commissioned in Phase 1, expanding to 340 kL+ campus scale) with automated DO, pH, and sterile nutrient feed loops.",
    },
    {
      num: "02",
      title: "Downstream Isolation & Pharmacopeial Purity",
      description:
        "Class 100,000 cleanrooms equipped for high-yield isolation, multi-stage column chromatography, and jet-milled micronization adhering strictly to EP, BP, and USP pharmacopeias.",
    },
    {
      num: "03",
      title: "Strategic Alliance with Fleming Laboratories",
      description:
        "Technical and regulatory synergy with Fleming Laboratories Ltd, providing global access to 65+ countries and eliminating India's 100% import reliance on vital anti-infectives.",
    },
  ];

  const pillars = [
    {
      title: "Our Mission",
      badge: "Purpose",
      description:
        "To manufacture and deliver highest-purity microbial fermentation APIs with uncompromising adherence to international pharmacopeias (EP, BP, USP), driving healthcare accessibility worldwide.",
      icon: (
        <svg className="w-5 h-5 text-[#00BEDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Our Vision",
      badge: "Aspiration",
      description:
        "To position Fermac Bio as India's premier biotechnology manufacturing asset for complex secondary metabolites, sterile antibiotics, and specialized micronized APIs.",
      icon: (
        <svg className="w-5 h-5 text-[#00BEDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "Core Values",
      badge: "Governance",
      description:
        "Grounded in scientific rigor, absolute cGMP compliance, customer transparency, and 100% Zero Liquid Discharge (ZLD) environmental responsibility.",
      icon: (
        <svg className="w-5 h-5 text-[#00BEDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <div id="about" className="scroll-mt-20">
      {/* 1. Standalone Header Banner (Only on dedicated /about page) */}
      {isStandalonePage && (
        <section className="relative bg-[#02111d] text-white pt-36 pb-20 px-6 sm:px-8 lg:px-12 overflow-hidden text-center">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/30 text-[#00BEDB] text-xs font-semibold uppercase tracking-wider mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00BEDB] animate-pulse" />
              Established 2022 • Hyderabad &amp; Medak, India
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
              About <span className="text-[#00BEDB]">FERMAC BIO</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light mb-8">
              Pioneering primary microbial fermentation Active Pharmaceutical Ingredients with 25+ years of founding expertise, world-class facilities, and cGMP compliance.
            </p>
          </div>
        </section>
      )}

      {/* 2. Executive Overview Section (Fleming Labs Style: Clean, Minimal, Professional) */}
      <section className="py-20 lg:py-28 bg-[#fbfcfd] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left 7 Columns: Clean narrative & Core Capabilities */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-[#00BEDB]" />
                <span className="text-[#00BEDB] text-xs font-bold tracking-[0.2em] uppercase">
                  About Fermac Bio
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001a24] tracking-tight leading-tight mb-6">
                Pioneering Fermentation Biotechnology in India
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 font-light">
                Established in 2022 by veteran fermentation scientists Suneel Kumar Battula and Baby Rani Polavarapu, <strong className="text-[#001a24] font-medium">Fermac Bio</strong> operates an advanced 340 kL+ biomanufacturing campus in Shivampet, Medak. In strategic alliance with Fleming Laboratories Ltd, we engineer high-purity APIs with 100% Zero Liquid Discharge, eliminating India&rsquo;s import dependence across vital anti-infectives.
              </p>

              {/* 3 clean hairline capability items */}
              <div className="space-y-5 mb-10 pt-6 border-t border-gray-200/80">
                {highlights.map((item) => (
                  <div key={item.num} className="flex items-start gap-4">
                    <span className="text-sm font-bold text-[#00BEDB] font-mono shrink-0 pt-0.5">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-[#001a24] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/facilities"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00BEDB] hover:bg-[#00a8c8] text-[#001a24] text-sm font-bold tracking-wide transition-all shadow-xs hover:shadow-md"
                >
                  Explore 340 kL+ Campus
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/directors"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-300 hover:border-gray-500 text-[#001a24] text-sm font-semibold tracking-wide transition-all hover:bg-gray-50"
                >
                  Leadership &amp; Governance
                </Link>
              </div>
            </div>

            {/* Right 5 Columns: Clean Framed Facility Photograph */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-slate-900 group">
                <Image
                  src="/about.png"
                  alt="Fermac Bio R&D Facility and Cleanroom Suite"
                  width={900}
                  height={700}
                  className="object-cover w-full h-[460px] group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02111d]/90 via-transparent to-transparent flex flex-col justify-end p-7">
                  <span className="text-[#00BEDB] text-[10px] font-bold uppercase tracking-wider mb-1.5">
                    Biomanufacturing Campus • Shivampet
                  </span>
                  <div className="text-white text-base font-bold leading-snug">
                    340 kL+ Bioreactor Cascades &amp; Analytical Suites
                  </div>
                  <div className="text-gray-300 text-xs font-light mt-1">
                    WHO-cGMP compliant with 100% Zero Liquid Discharge.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Strategic Foundation: Mission, Vision & Governance */}
      <section className="py-20 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#002F3C] text-xs font-bold uppercase tracking-wider mb-3">
              Strategic Foundation
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-[#001a24] tracking-tight">
              Mission, Vision &amp; Governance
            </h3>
            <p className="text-sm sm:text-base text-gray-500 mt-3 leading-relaxed font-light">
              Guided by a commitment to global healthcare quality, ethical scientific execution, and sustainable manufacturing practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="bg-[#fbfcfd] rounded-2xl p-8 border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center border border-cyan-100 group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white text-gray-500 border border-gray-100">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-[#001a24] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Strategic Alliance & Governance Banner */}
      <section className="py-16 bg-[#fbfcfd]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-r from-[#02111d] via-[#031d2e] to-[#02111d] rounded-3xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl border border-white/10">
            <div className="max-w-2xl space-y-3 text-center lg:text-left">
              <span className="px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-[#00BEDB] text-xs font-semibold uppercase tracking-wider inline-block">
                Strategic Alliance &amp; Governance
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Partnered with Fleming Laboratories Ltd
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                Leveraging Fleming Laboratories&rsquo; 25+ years of international regulatory mastery and distribution across 65+ countries worldwide to deliver domestic and global market scale.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Link
                href="/directors"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#00BEDB] hover:bg-[#00a8c8] text-[#001a24] text-sm font-bold tracking-wide transition-all shadow-sm"
              >
                Meet Leadership &amp; Board →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-white/20 hover:border-white/50 text-white text-sm font-semibold tracking-wide transition-all hover:bg-white/5"
              >
                Inquire With Corporate Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
