"use client";

import Link from "next/link";
import React from "react";
import BiotechHeroCanvas from "./BiotechHeroCanvas";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#00171F] via-[#002631] to-[#003442] text-white pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden min-h-[90vh] lg:min-h-[96vh] flex items-center">
      {/* 1. Full-Bleed Animated 3D DNA & Biotech Background Canvas (Preserved) */}
      <BiotechHeroCanvas />

      {/* 2. Ambient Gradient Light Filters (Enhances text contrast while letting 3D DNA canvas glow) */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/2 right-0 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#00171F]/95 via-[#00171F]/70 to-transparent pointer-events-none z-0 lg:max-w-[75%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Narrative Column */}
          <div className="lg:col-span-8 text-left">
            {/* Trust Eyebrows: Manufacturer Positioning & Strategic Alliance */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-400/40 text-cyan-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00BEDB] animate-pulse" />
                Premier Fermentation API Manufacturer
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-gray-200 text-[11px] font-medium tracking-wide backdrop-blur-md">
                <span>In Strategic Alliance with</span>
                <strong className="text-white font-semibold">Fleming Laboratories Ltd</strong>
              </div>
            </div>

            {/* Main Headline: Fleming Labs inspired Brand Showcase & Authority */}
            <h1
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] mb-6 drop-shadow-md"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              World-Class Microbial{" "}
              <span className="text-[#00BEDB] drop-shadow-[0_0_28px_rgba(0,190,219,0.45)]">
                Fermentation API
              </span>{" "}
              Manufacturer
            </h1>

            {/* Subheading: Concrete Value Proposition as a Primary Manufacturer */}
            <p
              className="text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed font-normal mb-8 max-w-2xl drop-shadow-xs"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              India&rsquo;s dedicated primary manufacturer of high-purity fermentation APIs. We engineer and manufacture <strong className="text-white font-semibold">Fusidic Acid, Sodium Fusidate, Daptomycin, and Teicoplanin</strong> in our 340 kL+ campus at Shivampet, Medak &mdash; delivering WHO-cGMP compliance, pharmacopeial excellence (EP / BP / USP), and tailored particle micronization for world-leading pharmaceutical formulators.
            </p>

            {/* Action Buttons: High-Converting CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-9">
              <Link
                href="/products"
                className="px-8 py-4 rounded-xl bg-[#00BEDB] hover:bg-[#00aebd] text-[#002F3C] text-sm sm:text-base font-bold tracking-wide shadow-xl shadow-cyan-950/40 transition-all hover:scale-105 text-center cursor-pointer"
              >
                Explore Manufactured APIs &rarr;
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 text-sm sm:text-base font-semibold tracking-wide backdrop-blur-md transition-all hover:scale-105 text-center cursor-pointer shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Schedule cGMP Facility Audit
              </Link>
              <Link
                href="/facilities"
                className="px-6 py-4 rounded-xl text-gray-300 hover:text-white text-sm sm:text-base font-medium tracking-wide transition-colors text-center cursor-pointer underline-offset-4 hover:underline"
              >
                Inspect Infrastructure &rarr;
              </Link>
            </div>

            {/* Quality Accreditations Line (Fleming Labs Trust Markers) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-200 mb-8">
              <div className="flex items-center gap-2 font-medium bg-black/40 px-3.5 py-1.5 rounded-lg border border-white/15 backdrop-blur-xs shadow-xs">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>WHO-cGMP / Schedule M Facility</span>
              </div>
              <div className="flex items-center gap-2 font-medium bg-black/40 px-3.5 py-1.5 rounded-lg border border-white/15 backdrop-blur-xs shadow-xs">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>EP / BP / USP Pharmacopeial Purity</span>
              </div>
              <div className="flex items-center gap-2 font-medium bg-black/40 px-3.5 py-1.5 rounded-lg border border-white/15 backdrop-blur-xs shadow-xs">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>100% Zero Liquid Discharge (ZLD)</span>
              </div>
              <div className="flex items-center gap-2 font-medium bg-black/40 px-3.5 py-1.5 rounded-lg border border-white/15 backdrop-blur-xs shadow-xs">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>Complete DMF / Tech Package Readiness</span>
              </div>
            </div>

            {/* Live Manufacturer Proof & Specifications Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/20 max-w-3xl">
              <div className="p-3.5 rounded-2xl bg-[#001D26]/75 border border-cyan-500/30 backdrop-blur-md hover:border-cyan-400/50 transition-colors">
                <div className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Manufacturer Scale</div>
                <div className="text-xs sm:text-sm font-bold text-cyan-300 mt-0.5 truncate">340 kL+ Capacity</div>
                <div className="text-[10px] text-gray-400 mt-0.5">3 × 33 KL Operational</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#001D26]/75 border border-cyan-500/30 backdrop-blur-md hover:border-cyan-400/50 transition-colors">
                <div className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Pharmacopeial Assay</div>
                <div className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5 truncate">&ge; 99.5% HPLC Grade</div>
                <div className="text-[10px] text-gray-400 mt-0.5">Batch-to-Batch Quality</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#001D26]/75 border border-cyan-500/30 backdrop-blur-md hover:border-cyan-400/50 transition-colors">
                <div className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Particle Engineering</div>
                <div className="text-xs sm:text-sm font-bold text-cyan-300 mt-0.5 truncate">D90 &lt; 10 µm Ready</div>
                <div className="text-[10px] text-gray-400 mt-0.5">Jet-Milled Micronization</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#001D26]/75 border border-cyan-500/30 backdrop-blur-md hover:border-cyan-400/50 transition-colors">
                <div className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">National Impact</div>
                <div className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5 truncate">100% Indigenous</div>
                <div className="text-[10px] text-gray-400 mt-0.5">Import Substitution</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
