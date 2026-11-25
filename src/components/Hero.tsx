"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import BiotechHeroCanvas from "./BiotechHeroCanvas";

export default function Hero() {
  return (
    <section className="relative bg-[#02111d] text-white overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Full-bleed animated canvas background */}
      <BiotechHeroCanvas />

      {/* Left-side gradient so text stays readable, right side stays open for logo + animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#02111d] via-[#02111d]/90 to-transparent pointer-events-none z-0" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#02111d] to-transparent pointer-events-none z-0" />

      {/* ── Main two-column layout ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── LEFT COLUMN: Authority & Positioning (7 cols on lg) ── */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Mobile-only brand badge so brand is visible on small screens */}
            <div className="lg:hidden mb-6 flex items-center gap-3">
              <Image
                src="/logo/fermac-mark.svg"
                alt="FERMAC BIO"
                width={36}
                height={54}
                className="w-8 h-12 object-contain"
              />
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-white font-black text-2xl tracking-tight" style={{ fontFamily: "Inter, sans-serif" }}>
                    FERMAC
                  </span>
                  <span className="text-[#00BEDB] font-black text-2xl tracking-tight" style={{ fontFamily: "Inter, sans-serif" }}>
                    BIO
                  </span>
                </div>
                <p className="text-gray-400 text-[9px] font-medium tracking-[0.25em] uppercase">
                  Miracles of Microbes
                </p>
              </div>
            </div>

            {/* Alliance badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-[#00BEDB] shrink-0" />
              <span className="text-[#00BEDB] text-xs font-semibold tracking-[0.18em] uppercase">
                In Strategic Alliance with Fleming Laboratories Ltd
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-white font-bold leading-[1.15] mb-6"
              style={{ fontSize: "clamp(1.85rem, 3.8vw, 3.1rem)", fontFamily: "Inter, sans-serif" }}
            >
              India&rsquo;s Premier{" "}
              <span className="text-[#00BEDB] drop-shadow-[0_0_30px_rgba(0,190,219,0.3)]">
                Microbial Fermentation
              </span>
              <br />
              API Manufacturer
            </h1>

            {/* Sub-copy */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 max-w-xl font-light">
              WHO-cGMP certified manufacturer of{" "}
              <strong className="text-white font-medium">Fusidic Acid, Sodium Fusidate, Daptomycin</strong>{" "}
              and <strong className="text-white font-medium">Teicoplanin</strong> — engineered at our
              340 kL+ biomanufacturing campus in Shivampet, Medak. EP / BP / USP pharmacopeial grade with 100% Zero Liquid Discharge.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#00BEDB] hover:bg-[#00a8c8] text-[#001a24] text-sm font-bold tracking-wide transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,190,219,0.35)]"
              >
                View API Portfolio
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-white/25 hover:border-white/50 text-white text-sm font-semibold tracking-wide transition-all duration-200 hover:bg-white/5"
              >
                Schedule Facility Audit
              </Link>
            </div>
          </div>

          {/* ── RIGHT COLUMN: High-Precision Pharmaceutical Brand Showcase ── */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center select-none pointer-events-none">
            <div className="relative flex flex-col items-center justify-center">

              {/* 1. Precision Cleanroom Optical Reticle (Soft, surgical & whisper-clean) */}
              <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] xl:w-[420px] h-[360px] xl:h-[420px] pointer-events-none">
                {/* Soft optical contrast vignette */}
                <div className="absolute inset-6 rounded-full bg-gradient-to-b from-[#021b2d]/60 via-[#011422]/30 to-transparent backdrop-blur-sm" />

                {/* Outer precision hairline ring */}
                <div className="absolute inset-0 rounded-full border border-white/[0.08]" />

                {/* Inner technical dashed ring */}
                <div className="absolute inset-8 rounded-full border border-dashed border-cyan-400/15" />

                {/* Cardinal precision crosshair ticks */}
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-px bg-cyan-400/40" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-px bg-cyan-400/40" />
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-px bg-cyan-400/40" />
                <span className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-px bg-cyan-400/40" />
              </div>

              {/* 2. Pure vector logo mark: razor-sharp, balanced scale */}
              <div className="relative z-10 w-36 xl:w-44 h-50 xl:h-60 flex items-center justify-center drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]">
                <Image
                  src="/logo/fermac-mark.svg"
                  alt="FERMAC BIO Logo Mark"
                  width={210}
                  height={300}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              {/* 3. Brand name & Tagline directly beneath logo */}
              <div className="relative z-10 mt-6 text-center flex flex-col items-center">
                <div className="flex items-baseline justify-center gap-3">
                  <span
                    className="text-white font-black tracking-tight text-4xl xl:text-5xl"
                    style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.03em" }}
                  >
                    FERMAC
                  </span>
                  <span
                    className="font-black tracking-tight text-4xl xl:text-5xl text-[#00BEDB]"
                    style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.03em" }}
                  >
                    BIO
                  </span>
                </div>

                {/* Refined clean tagline pill badge */}
                <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00BEDB]" />
                  <span
                    className="text-gray-300 text-[11px] xl:text-xs font-semibold tracking-[0.24em] uppercase"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Miracles of Microbes
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Redesigned & Reduced Minimalist Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 select-none pointer-events-none opacity-50 hover:opacity-90 transition-opacity">
        <span
          className="text-white/40 text-[8px] font-semibold tracking-[0.28em] uppercase"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          SCROLL
        </span>
        {/* Sleek micro mouse capsule */}
        <div className="w-3.5 h-5.5 rounded-full border border-white/30 flex items-start justify-center p-0.5">
          <div className="w-0.5 h-1.5 rounded-full bg-[#00BEDB] animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
