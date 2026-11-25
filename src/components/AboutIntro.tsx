import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AboutIntroProps {
  isStandalonePage?: boolean;
}

export default function AboutIntro({ isStandalonePage = false }: AboutIntroProps) {
  const companyOverviewHighlights = [
    {
      num: "01",
      title: "Unique First-in-India Product Pipeline",
      description:
        "FERMAC Bio is defined by its unique product pipeline of specialty antibiotic APIs—first-of-its-kind primary fermentation manufacturing in India.",
    },
    {
      num: "02",
      title: "High-Value Fermentation APIs & Cutting-Edge R&D",
      description:
        "Dedicated to developing and manufacturing fermentation-based high-value APIs through a cutting-edge research facility introducing novel APIs for the first time in the country.",
    },
    {
      num: "03",
      title: "Bransun Labs & Fleming Laboratories Partnership",
      description:
        "Formed through a 50:50 alliance uniting Bransun Labs’ fermentation R&D depth and Fleming Laboratories Limited’s 20+ years of global API manufacturing and market reach.",
    },
  ];

  const whyFermacPillars = [
    {
      num: "01",
      title: "People",
      points: [
        "Visionary leadership with proven professional track record",
        "Highly experienced operations team excelling in managing fermentation & downstream operations",
      ],
    },
    {
      num: "02",
      title: "Products",
      points: [
        "Unique pipeline of high-value, niche antibiotics",
        "First manufacturer in India for the selected APIs",
        "Capacity creation & regulatory filings for global market reach",
        "Existing access to a large global customer base",
      ],
    },
    {
      num: "03",
      title: "Technology",
      points: [
        "End-to-end development facilities for upstream and downstream",
        "Experience with diverse strains and continuous process improvement",
        "High-end purification technologies & innovative process engineering",
      ],
    },
    {
      num: "04",
      title: "Facility",
      points: [
        "State-of-the-art facility for advanced fermentation and downstream processing systems",
        "Designed to meet global standards of quality and regulatory compliance",
        "Fully integrated R&D facility to develop and commercialize niche APIs",
      ],
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
              Biotechnology-Driven Fermentation Enterprise • Medak, India
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
              About <span className="text-[#00BEDB]">FERMAC BIO</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light mb-8">
              A biotechnology-driven fermentation enterprise producing specialty antibiotic APIs with a cutting-edge research center and a 25,000 sq. m. global-scale manufacturing facility.
            </p>
          </div>
        </section>
      )}

      {/* 2. Company Overview Section (Slide 2) */}
      <section className="py-20 lg:py-28 bg-[#fbfcfd] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left 7 Columns: Company Overview */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-[#00BEDB]" />
                <span className="text-[#00BEDB] text-xs font-bold tracking-[0.2em] uppercase">
                  Company Overview
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#001a24] tracking-tight leading-tight mb-6">
                Biotechnology-Driven Fermentation Enterprise
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 font-light">
                <strong className="text-[#001a24] font-medium">FERMAC Bio</strong> produces specialty antibiotic APIs at our 5-acre, 25,000 sq. m. integrated biomanufacturing campus near Hyderabad in Medak District. Combining biotech and chemical engineering expertise with a cutting-edge research facility and state-of-the-art fermentation blocks, we deliver fermentation-based high-value APIs at global scale.
              </p>

              <div className="space-y-5 mb-10 pt-6 border-t border-gray-200/80">
                {companyOverviewHighlights.map((item) => (
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

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/facilities"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#00BEDB] hover:bg-[#00a8c8] text-[#001a24] text-sm font-bold tracking-wide transition-all shadow-xs hover:shadow-md"
                >
                  Explore 25,000 sq. m. Campus
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-300 hover:border-gray-500 text-[#001a24] text-sm font-semibold tracking-wide transition-all hover:bg-gray-50"
                >
                  View API Portfolio
                </Link>
              </div>
            </div>

            {/* Right 5 Columns: Real Campus Image from PPT Slide 2 */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-slate-900 group">
                <Image
                  src="/images/deck/company-campus.jpg"
                  alt="FERMAC Bio Biomanufacturing Campus in Medak District"
                  width={733}
                  height={960}
                  className="object-cover w-full h-[460px] group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02111d]/90 via-transparent to-transparent flex flex-col justify-end p-7">
                  <span className="text-[#00BEDB] text-[10px] font-bold uppercase tracking-wider mb-1.5">
                    Biomanufacturing Campus • Shivampet, Medak
                  </span>
                  <div className="text-white text-base font-bold leading-snug">
                    25,000 sq. m. Integrated Fermentation Facility
                  </div>
                  <div className="text-gray-300 text-xs font-light mt-1">
                    6 × 33 KL Block A fermenters (3 operational) with 100% Zero Liquid Discharge.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Purpose: Vision & Mission (Slide 3) */}
      <section className="py-20 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 5 Columns: Petri Dish Culture Photo from Slide 3 */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-slate-900 group">
                <Image
                  src="/images/deck/purpose-culture.jpg"
                  alt="FERMAC Bio Microbial Culture Research and Strain Selection"
                  width={1202}
                  height={1933}
                  className="object-cover w-full h-[430px] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02111d]/85 via-transparent to-transparent flex flex-col justify-end p-6">
                  <span className="text-[#00BEDB] text-[10px] font-bold uppercase tracking-wider mb-1">
                    Purpose • Miracles of Microbe
                  </span>
                  <div className="text-white text-base font-bold">
                    Science, Innovation &amp; Environmental Stewardship
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Vision, Mission & BY */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#002F3C] text-xs font-bold uppercase tracking-wider mb-3">
                  Purpose
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-[#001a24] tracking-tight">
                  Vision &amp; Mission
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-[#fbfcfd] rounded-2xl p-6 border border-gray-200/80">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#00BEDB] mb-2">
                    Vision
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">
                    To leverage our expertise in biotechnology to build an innovative, globally recognized company that delivers high-quality products and services, enriching lives and advancing healthcare worldwide.
                  </p>
                </div>

                <div className="bg-[#fbfcfd] rounded-2xl p-6 border border-gray-200/80">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#00BEDB] mb-2">
                    Mission
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">
                    Our mission is to deliver safe and affordable fermentation-based specialty APIs, helping people across the globe live healthier lives.
                  </p>
                </div>
              </div>

              <div className="bg-[#001a24] text-white rounded-2xl p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-[#00BEDB] mb-4">
                  Guided By
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    "Fostering a culture of creativity and innovation",
                    "Working deeply on processes to achieve cost leadership on identified products",
                    "Prioritizing safety, health and environment in all our activities",
                  ].map((principle, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/[0.05] border border-white/10">
                      <span className="text-xs font-mono font-bold text-[#00BEDB] block mb-1.5">
                        0{idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light">
                        {principle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why FERMAC Bio? 4 Pillars (Slide 4) */}
      <section className="py-16 lg:py-20 bg-[#fbfcfd] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[#002F3C] text-xs font-bold uppercase tracking-wider mb-3">
              Company Pillars
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-[#001a24] tracking-tight">
              Why FERMAC Bio?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyFermacPillars.map((pillar) => (
              <div
                key={pillar.num}
                className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-2xs hover:shadow-lg hover:border-cyan-200 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-[#001a24] text-[#00BEDB] font-mono text-xs font-bold">
                    {pillar.num}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#001a24] mb-3">
                  {pillar.title}
                </h4>
                <ul className="space-y-2">
                  {pillar.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00BEDB] mt-2 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Strategic Alliance & Governance Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-r from-[#02111d] via-[#031d2e] to-[#02111d] rounded-3xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl border border-white/10">
            <div className="max-w-2xl space-y-3 text-center lg:text-left">
              <span className="px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-[#00BEDB] text-xs font-semibold uppercase tracking-wider inline-block">
                50:50 Strategic Partnership • Founding Alliance
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Formed by Bransun Labs &amp; Fleming Laboratories Limited
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                Blending Bransun Labs&rsquo; strain development, process optimization, and R&amp;D depth with Fleming Laboratories&rsquo; 20+ years of global API manufacturing, regulatory expertise, and international customer network.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#00BEDB] hover:bg-[#00a8c8] text-[#001a24] text-sm font-bold tracking-wide transition-all shadow-sm"
              >
                Explore API Portfolio →
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
