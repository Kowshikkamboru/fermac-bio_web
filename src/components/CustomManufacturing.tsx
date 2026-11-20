import Link from 'next/link';

export default function CustomManufacturing() {
  return (
    <section className="py-20 sm:py-28 bg-[#001a24]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left content */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#00BEDB]" />
              <span className="text-[#00BEDB] text-xs font-semibold tracking-[0.2em] uppercase">
                Custom Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
              Custom Manufacturing
              <br />
              <span className="text-[#00BEDB]">Solutions</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Beyond our core API portfolio, we offer end-to-end custom manufacturing services
              for pharmaceutical companies seeking specialized antibiotic formulations, process
              development, and scale-up partnerships.
            </p>

            <div className="space-y-3 mb-10">
              {[
                "Dedicated fermentation runs for custom molecules",
                "Downstream isolation & crystallization optimization",
                "Analytical method development & validation",
                "Regulatory dossier preparation (DMF / CEP)",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-0.5 h-4 bg-[#00BEDB] mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#00BEDB] hover:bg-[#00a8c8] text-[#001a24] text-sm font-bold tracking-wide transition-colors"
              >
                Discuss Your Requirements
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/facilities"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 hover:border-white/40 text-white text-sm font-semibold transition-colors"
              >
                View Infrastructure
              </Link>
            </div>
          </div>

          {/* Right side — simple stat block */}
          <div className="grid grid-cols-2 gap-px bg-white/10">
            {[
              { value: "340 kL+", label: "Available Capacity", desc: "Flexible bioreactor allocation for custom projects." },
              { value: "cGMP", label: "Fully Compliant", desc: "WHO-cGMP Schedule M facility for every batch." },
              { value: "EP/BP/USP", label: "Pharmacopeial", desc: "International grade APIs with full documentation." },
              { value: "100%", label: "ZLD Facility", desc: "Zero liquid discharge — sustainable manufacturing." },
            ].map((item, i) => (
              <div key={i} className="bg-[#001a24] border border-white/5 p-7">
                <div className="text-2xl font-black text-white mb-1">{item.value}</div>
                <div className="text-xs font-bold text-[#00BEDB] uppercase tracking-[0.12em] mb-2">{item.label}</div>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
