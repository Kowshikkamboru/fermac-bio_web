"use client";

import Link from "next/link";
import React from "react";
import BiotechHeroCanvas from "./BiotechHeroCanvas";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#00171F] via-[#002631] to-[#003442] text-white pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden min-h-[85vh] lg:min-h-[92vh] flex items-center">
      {/* 1. Full-Bleed Animated 3D DNA & Biotech Background Canvas */}
      <BiotechHeroCanvas />

      {/* 2. Ambient Gradient Light Filters (Enhances text contrast while letting DNA glow) */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#00171F]/90 via-[#00171F]/50 to-transparent pointer-events-none z-0 lg:max-w-[70%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Narrative Column (8 cols on desktop to give ample room for animated DNA on the right) */}
          <div className="lg:col-span-8 text-left">
            {/* Category Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-5 backdrop-blur-xs shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#00BEDB] animate-pulse" />
              Microbial Fermentation &amp; API Synthesis
            </div>

            {/* Main Headline */}
            <h1
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.12] mb-6 drop-shadow-sm"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Powering The Future Of{" "}
              <span className="text-[#00BEDB] drop-shadow-[0_0_25px_rgba(0,190,219,0.4)]">Biotechnology</span>
              <br />
              With Precision &amp; Purpose
            </h1>

            {/* Subheading / Value Proposition */}
            <p
              className="text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed font-normal mb-8 max-w-2xl drop-shadow-xs"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              India&rsquo;s specialized manufacturer of high-purity fermentation APIs. We develop and commercialize Fusidic Acid and Sodium Fusidate, backed by multi-scale bioreactor infrastructure, strict cGMP compliance, and custom particle-size micronization.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-9">
              <Link
                href="/products"
                className="px-8 py-4 rounded-xl bg-[#00BEDB] hover:bg-[#00aebd] text-white text-sm sm:text-base font-bold tracking-wide shadow-xl shadow-cyan-950/40 transition-all hover:scale-105 text-center cursor-pointer"
              >
                Explore Products &amp; Specs &rarr;
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm sm:text-base font-semibold tracking-wide backdrop-blur-md transition-all hover:scale-105 text-center cursor-pointer shadow-lg"
              >
                Schedule Facility Audit
              </Link>
            </div>

            {/* Quality Accreditations Line */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-300 mb-8">
              <div className="flex items-center gap-2 font-medium bg-black/20 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-xs">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>WHO-cGMP Standard</span>
              </div>
              <div className="flex items-center gap-2 font-medium bg-black/20 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-xs">
                <span className="text-cyan-400 font-bold">✓</span>
                <span>EP / BP / USP Purity</span>
              </div>
              <div className="flex items-center gap-2 font-medium bg-black/20 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-xs">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>100% Zero Liquid Discharge</span>
              </div>
            </div>

            {/* Live Technical Specs Chips (Horizontal Glass Strip) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/15 max-w-3xl">
              <div className="p-3 rounded-2xl bg-[#001D26]/60 border border-cyan-500/20 backdrop-blur-md hover:border-cyan-400/40 transition-colors">
                <div className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">API Target</div>
                <div className="text-xs sm:text-sm font-bold text-cyan-300 mt-0.5 truncate">Fusidic Acid / Na Salt</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#001D26]/60 border border-cyan-500/20 backdrop-blur-md hover:border-cyan-400/40 transition-colors">
                <div className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Assay Purity</div>
                <div className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5 truncate">&ge; 99.5% HPLC Grade</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#001D26]/60 border border-cyan-500/20 backdrop-blur-md hover:border-cyan-400/40 transition-colors">
                <div className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Micronization</div>
                <div className="text-xs sm:text-sm font-bold text-cyan-300 mt-0.5 truncate">D90 &lt; 10 µm Ready</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#001D26]/60 border border-cyan-500/20 backdrop-blur-md hover:border-cyan-400/40 transition-colors">
                <div className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Effluent Treatment</div>
                <div className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5 truncate">100% ZLD Recycled</div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
