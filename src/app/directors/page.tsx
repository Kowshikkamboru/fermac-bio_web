import Navigation from "@/components/Navigation";
import DirectorsGrid from "@/components/DirectorsGrid";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Leadership & Governance | FERMAC BIO - Board & Management Team",
  description:
    "Meet Fermac Bio's Board of Directors and Key Management Team guiding global fermentation API research, manufacturing operations, cGMP compliance, and commercial alliances.",
};

export default function DirectorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        {/* Header Hero */}
        <section className="relative bg-gradient-to-b from-[#002F3C] via-[#003847] to-[#004859] text-white pt-36 pb-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00BEDB_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-[#00BEDB] animate-pulse" />
              Corporate Governance & Operating Leadership
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Leadership <span className="text-[#00BEDB]">& Governance</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light mb-8">
              Our Board of Directors provides strategic governance and global vision, while our Key Management Team executes operational excellence across bioprocess manufacturing, R&D, and cGMP compliance.
            </p>

            {/* Quick Filter Links */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#board-of-directors"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/20 backdrop-blur-xs transition-all hover:scale-105"
              >
                <svg className="w-4 h-4 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
                Board of Directors
              </a>
              <a
                href="#key-management-team"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 text-xs sm:text-sm font-semibold border border-cyan-400/30 backdrop-blur-xs transition-all hover:scale-105"
              >
                <svg className="w-4 h-4 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Key Management Team
              </a>
            </div>
          </div>
        </section>

        {/* Separated Team & Board Grid */}
        <DirectorsGrid />

        {/* Leadership Statement Banner */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#E9F6F8] to-[#d8f2f6] rounded-3xl p-8 sm:p-14 border border-cyan-200/70 text-center shadow-sm">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#173233] mb-4">
              <span className="text-[#00BEDB]">Leadership</span> That Delivers
            </h2>
            <p className="text-base sm:text-xl text-[#373737] font-medium max-w-4xl mx-auto leading-relaxed">
              Our directors and executive leaders combine deep technical knowledge, commercial acumen, and international networks — enabling Fermac Bio to translate scientific biotechnology excellence into dependable, scalable commercial manufacturing.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
