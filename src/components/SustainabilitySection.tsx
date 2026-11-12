import React from "react";
import Link from "next/link";

export default function SustainabilitySection() {
  const pillars = [
    {
      id: "hsw",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Health, Safety & Well-being",
      subtitle: "Protecting our people through proactive risk mitigation",
      content:
        "The health, safety, and well-being of our people are among our highest priorities. We believe that a safe and healthy workplace enables our employees to perform at their best while contributing to better solutions and sustainable growth.",
      points: [
        "Workplaces equipped with high-standard safety systems & protective equipment",
        "Risk Assessment Programs including periodic audits of machinery, systems, and processes",
        "Integrated Process Safety Management (PSM) incorporating industrial hygiene & exposure reduction",
        "Continuous monitoring and improvement of workplace ergonomic & environmental standards",
      ],
      tag: "Zero-Incident Culture",
    },
    {
      id: "training",
      icon: (
        <svg className="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      title: "Safety Awareness & Training",
      subtitle: "Empowering every employee as a safety champion",
      content:
        "We believe that awareness and knowledge are the first steps towards preventing workplace incidents. Our comprehensive training programs cover occupational health and safety, environmental practices, first aid, emergency preparedness, and specialized areas relevant to bioprocess operations.",
      points: [
        "Regular campaigns around World Environment Week & World Water Week",
        "National Safety Week observances and emergency evacuation drills",
        "Certified first aid and chemical hazard response training",
        "Active employee participation in cultivating an accident-free environment",
      ],
      tag: "Continuous Learning",
    },
    {
      id: "water",
      icon: (
        <svg className="w-6 h-6 text-[#00BEDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Water Conservation & ZLD Systems",
      subtitle: "Zero Liquid Discharge & circular water recycling",
      content:
        "Water is an indispensable resource in fermentation, and its responsible management is central to our sustainability efforts. We have invested in Zero Liquid Discharge (ZLD) systems across our manufacturing units to treat and recycle wastewater while eliminating untreated liquid discharge.",
      points: [
        "Zero Liquid Discharge (ZLD) technology recycling 100% of process effluents",
        "Advanced multi-effect evaporators (MEE) & reverse osmosis (RO) purification",
        "Extensive campus rainwater harvesting infrastructure replenishing groundwater tables",
        "Continuous reduction in specific fresh-water intake per kilogram of API produced",
      ],
      tag: "100% ZLD Mandate",
    },
    {
      id: "waste",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Waste Management & Waste-to-Value",
      subtitle: "Resource recovery and circular bioprocessing",
      content:
        "Our approach to waste management goes beyond compliance with applicable local and international guidelines. We focus on waste segregation, waste minimization, responsible handling, and resource recovery across our fermentation and chemical operations.",
      points: [
        "Waste-to-Value initiatives led by our Process Development Groups (PDG)",
        "Pilot projects identifying pathways to convert spent biomass and waste streams into useful by-products",
        "Strict segregation of hazardous vs non-hazardous streams at the generation source",
        "Collaborations with authorized recycling partners for circular material reuse",
      ],
      tag: "Circular Economy",
    },
    {
      id: "greenbelt",
      icon: (
        <svg className="w-6 h-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Green Belt & Biodiversity",
      subtitle: "Preserving local ecosystems and expanding green cover",
      content:
        "We recognize the importance of preserving and enhancing the natural environment around our manufacturing sites. Fermac Bio maintains dense green belts around its facilities and regularly conducts tree plantation initiatives to support local ecological diversity.",
      points: [
        "Dedicated native tree plantation drives across our manufacturing campus perimeter",
        "Preservation of indigenous flora and bird habitats around fermentation units",
        "Continuous monitoring of ambient air quality and noise control buffers",
        "Landscaped green spaces creating an inspiring, environmentally harmonious workplace",
      ],
      tag: "Ecological Stewardship",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-b from-[#002F3C] via-[#003847] to-[#004859] text-white pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-400/50 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Environmental, Social & Governance (ESG)
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Sustainability at <span className="text-[#00BEDB]">Fermac Bio</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            At Fermac Bio, sustainability is an integral part of the way we operate and grow. We are committed to responsible manufacturing practices that protect our people, conserve natural resources, minimize environmental impact, and create long-term value for our stakeholders and communities.
          </p>

          <div className="mt-8 inline-block px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-200 font-semibold text-sm">
            Fermac Bio — Responsible Manufacturing. Sustainable Future.
          </div>
        </div>
      </section>

      {/* Sustainability Pillars Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all duration-300 ${
                index % 2 === 0 ? "bg-white" : "bg-[#F4FAF8]"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left 5 Cols: Title, Icon, Subtitle */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-gray-200 flex items-center justify-center shrink-0">
                      {pillar.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#002F3C] text-cyan-300">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#002F3C] tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-sm font-medium text-emerald-700">
                    {pillar.subtitle}
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed pt-2">
                    {pillar.content}
                  </p>
                </div>

                {/* Right 7 Cols: Specific Initiatives & Bullet Checklist */}
                <div className="lg:col-span-7 bg-white/80 rounded-xl p-6 border border-gray-100 space-y-3">
                  <div className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2">
                    Key Measures & Outcomes:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pillar.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-3 rounded-lg bg-gray-50 border border-gray-100 text-xs sm:text-sm text-gray-700 flex items-start gap-2.5"
                      >
                        <span className="text-emerald-500 font-bold shrink-0">✓</span>
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Statement Card */}
        <div className="mt-20 bg-gradient-to-br from-[#002F3C] to-[#004859] rounded-2xl p-10 sm:p-14 text-white shadow-xl text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-4xl">🌱</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Our Continuous Sustainability Journey
            </h2>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-light">
              By investing in people, safety, water conservation, waste reduction, resource efficiency, and environmental protection, we strive to build responsible manufacturing operations that support both business growth and a healthier future.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/facilities"
                className="px-8 py-3.5 rounded-xl bg-[#00BEDB] hover:bg-[#00aebd] text-white font-bold text-sm shadow-lg transition-transform hover:scale-105"
              >
                Tour Our Facilities
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl border border-white hover:bg-white hover:text-[#002F3C] text-white font-bold text-sm transition-colors"
              >
                Contact Our ESG Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
