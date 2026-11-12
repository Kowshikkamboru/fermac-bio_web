import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutIntro() {
  const highlights = [
    {
      num: "01",
      title: "Founding Expertise & Veteran Leadership",
      description:
        "Founded in 2022 by fermentation scientists Suneel Kumar Battula and Baby Rani Polavarapu, bringing over 25 years of specialized experience in microbial strain engineering, bioprocess kinetics, pilot scale-up, and commercial API manufacturing.",
    },
    {
      num: "02",
      title: "Advanced Research & Analytical Infrastructure",
      description:
        "Equipped with state-of-the-art laboratories for microbial strain development, high-throughput screening, media formulation optimization, downstream isolation & purification, and validated HPLC/GC analytical method development.",
    },
    {
      num: "03",
      title: "Strategic Alliances & Domestic Self-Reliance",
      description:
        "Strategic corporate investment and distribution partnership with Fleming Laboratories Ltd (20+ years of global API manufacturing and market reach) and R&D collaboration with Bransun Labs (founded 2019). Addressing India's 100% import dependence on critical anti-infectives.",
    },
  ];

  const pillars = [
    {
      title: "Our Mission",
      badge: "Purpose",
      description:
        "To manufacture and deliver highest-purity microbial fermentation APIs with uncompromising adherence to international pharmacopeias (EP, BP, USP), driving healthcare accessibility worldwide.",
      icon: (
        <svg className="w-6 h-6 text-[#00BEDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Our Vision",
      badge: "Aspiration",
      description:
        "To position Fermac Bio as India's premier biotechnology manufacturing asset for complex secondary metabolites, sterile antibiotics, and specialized micronized APIs.",
      icon: (
        <svg className="w-6 h-6 text-[#00BEDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "Core Values",
      badge: "Governance",
      description:
        "Grounded in scientific rigor, absolute cGMP compliance, customer transparency, and 100% Zero Liquid Discharge (ZLD) environmental responsibility.",
      icon: (
        <svg className="w-6 h-6 text-[#00BEDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      {/* 1. Hero Header Banner */}
      <section className="relative bg-gradient-to-b from-[#002F3C] via-[#003847] to-[#004859] text-white pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00BEDB_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-5">
            <span className="w-2 h-2 rounded-full bg-[#00BEDB] animate-pulse" />
            Established 2022 • Hyderabad, India
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            About <span className="text-[#00BEDB]">FERMAC BIO</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light mb-8">
            Fermac Bio Private Limited develops and manufactures world-class fermentation-based Active Pharmaceutical Ingredients (APIs), bringing together deep scientific domain knowledge, precision bioprocessing, and cGMP compliance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/directors"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#00BEDB] hover:bg-[#00aebd] text-[#002F3C] text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              Meet Our Leadership &amp; Board →
            </Link>
            <Link
              href="/facilities"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/20 backdrop-blur-xs transition-all"
            >
              Explore Manufacturing Facilities
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Executive Overview & Image Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 7 cols: Content & Key Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#002F3C] text-xs font-bold uppercase tracking-wider">
                Corporate Profile &amp; Capabilities
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002F3C] tracking-tight">
                Pioneering Fermentation Biotechnology in India
              </h2>

              <p className="text-base text-gray-700 leading-relaxed font-normal">
                Established in 2022 at Hyderabad, <strong className="text-[#002F3C]">Fermac Bio Private Limited</strong> was founded by fermentation scientists Suneel Kumar Battula and Baby Rani Polavarapu to develop and produce high-purity fermentation APIs domestically, addressing India&rsquo;s heavy import reliance across three vital anti-infectives: Fusidic Acid, Daptomycin, and Teicoplanin.
              </p>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Backed by ~INR 660 Mn in plant infrastructure at Shivampet, Medak and a strategic alliance with Fleming Laboratories Ltd, Fermac Bio operates an integrated bioprocessing campus spanning culture preservation, automated fermenter cascades, and high-purity downstream crystallization suites.
              </p>

              {/* 3 Numbered Pillars */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                {highlights.map((item) => (
                  <div key={item.num} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/70 border border-gray-100">
                    <span className="shrink-0 w-9 h-9 rounded-lg bg-[#002F3C] text-[#00BEDB] font-bold text-sm flex items-center justify-center font-mono">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#002F3C] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 cols: Image & Metric Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 group">
                <Image
                  src="/about.png"
                  alt="Fermac Bio R&D Laboratory"
                  width={900}
                  height={700}
                  className="object-cover w-full h-[360px] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002F3C]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                      R&amp;D &amp; Quality Control
                    </div>
                    <div className="text-lg font-bold">
                      State-of-the-Art Analytical Suites
                    </div>
                  </div>
                </div>
              </div>

              {/* Fast Fact Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#E9F6F8] border border-cyan-100 text-center">
                  <div className="text-2xl font-black text-[#002F3C]">340 kL+</div>
                  <div className="text-xs text-gray-600 mt-1 font-medium">Total Capacity (A &amp; B)</div>
                </div>
                <div className="p-4 rounded-xl bg-[#E9F6F8] border border-cyan-100 text-center">
                  <div className="text-2xl font-black text-[#002F3C]">25+ Years</div>
                  <div className="text-xs text-gray-600 mt-1 font-medium">Founding Experience</div>
                </div>
                <div className="p-4 rounded-xl bg-[#E9F6F8] border border-cyan-100 text-center">
                  <div className="text-2xl font-black text-[#002F3C]">EP / BP / USP</div>
                  <div className="text-xs text-gray-600 mt-1 font-medium">Harmonized Monographs</div>
                </div>
                <div className="p-4 rounded-xl bg-[#E9F6F8] border border-cyan-100 text-center">
                  <div className="text-2xl font-black text-[#002F3C]">100% ZLD</div>
                  <div className="text-xs text-gray-600 mt-1 font-medium">Zero Liquid Discharge</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission, Vision & Core Values */}
      <section className="py-16 sm:py-20 bg-gray-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-[#002F3C] text-xs font-bold uppercase tracking-wider mb-3">
              Strategic Foundation
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002F3C] tracking-tight">
              Mission, Vision &amp; Governance
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
              Guided by a strong commitment to global healthcare quality, ethical scientific execution, and sustainable manufacturing practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/90 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E9F6F8] flex items-center justify-center border border-cyan-100">
                      {item.icon}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#002F3C] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Strategic Governance Banner */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#002F3C] to-[#004859] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-md">
            <div className="max-w-2xl space-y-3 text-center md:text-left">
              <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider inline-block">
                Corporate Governance
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Guided by Distinguished Industry Leaders
              </h2>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light">
                Our Board of Directors and Key Management Team bring extensive experience across global pharmaceutical giants, bioprocess scale-up, and regulatory affairs.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Link
                href="/directors"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#00BEDB] hover:bg-[#00aebd] text-[#002F3C] text-sm font-bold shadow-sm transition-all"
              >
                View Leadership &amp; Directors →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/20 transition-all"
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
