import React from "react";

const timelineStages = [
  {
    period: "1990 – 2020",
    title: "Chemical Synthetic APIs",
    flow: "Europe & China → India",
    description:
      "Migration of chemical synthetic APIs from Europe and China to India occurred over three decades.",
    highlight: false,
  },
  {
    period: "Underway Now",
    title: "Biosynthetic APIs",
    flow: "Europe & China → India",
    description:
      "The next wave of migration has begun, with biosynthetic and fermentation APIs shifting toward India.",
    highlight: false,
  },
  {
    period: "Next 2 – 3 Decades",
    title: "India: Biosynthetic API Leader",
    flow: "Global Fermentation Hub",
    description:
      "Sustained migration positions India as a global leader in biosynthetic APIs, specifically fermentation-based products.",
    highlight: false,
  },
  {
    period: "FERMAC BIO",
    title: "Pole Position",
    flow: "First-Mover Advantage",
    description:
      "FERMAC Bio is positioned at the forefront to capture this structural industry evolution.",
    highlight: true,
  },
];

const fermentationReasons = [
  {
    title: "Efficiency, Sustainability & Cost-Effectiveness",
    description:
      "Fermentation is the cornerstone of complex API manufacturing—delivering high stereochemical precision, sustainability, and scalability.",
  },
  {
    title: "Evolution Beyond Chemical APIs",
    description:
      "Intensifying competition and a narrowing pipeline of off-patent synthetic APIs are shifting industry focus toward complex biosynthetic molecules.",
  },
  {
    title: "Shifting Geo-Political Landscape",
    description:
      "Global concentration in fermentation-based APIs and changing supply dynamics create a strategic opportunity for reliable alternate suppliers in India.",
  },
];

export default function IndustryEvolutionSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#02111d] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#00BEDB]" />
            <span className="text-[#00BEDB] text-xs font-semibold tracking-[0.2em] uppercase">
              Industry Evolution
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
            Evolution of the API Industry &amp;{" "}
            <span className="text-[#00BEDB]">Why Fermentation?</span>
          </h2>
          <p className="text-gray-300 text-base leading-relaxed font-light">
            Following the global shift of synthetic APIs to India, biosynthetic fermentation APIs represent the next multi-decade manufacturing wave.
          </p>
        </div>

        {/* 4-Step Industry Migration Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {timelineStages.map((stage) => (
            <div
              key={stage.period}
              className={`rounded-2xl p-6 border flex flex-col justify-between transition-all ${
                stage.highlight
                  ? "bg-gradient-to-br from-[#00BEDB]/20 to-[#003B4C] border-[#00BEDB]/50 shadow-xl"
                  : "bg-white/[0.04] border-white/10 hover:border-white/25"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      stage.highlight
                        ? "bg-[#00BEDB] text-[#001a24]"
                        : "bg-white/10 text-[#00BEDB]"
                    }`}
                  >
                    {stage.period}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {stage.title}
                </h3>
                <div className="text-xs font-semibold text-cyan-300 mb-3">
                  {stage.flow}
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Fermentation? 3 Pillars */}
        <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-7 sm:p-9">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00BEDB]" />
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#00BEDB]">
              Why Fermentation?
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fermentationReasons.map((reason, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#001a24]/80 border border-white/10"
              >
                <div className="text-xs font-mono font-bold text-[#00BEDB] mb-2">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {reason.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
