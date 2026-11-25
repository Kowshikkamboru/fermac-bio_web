"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const bransunPoints = [
  "Operates a state-of-the-art R&D facility focused on high-end, fermentation-based APIs.",
  "Strong capabilities in strain development, process optimization, and scale-up for complex APIs.",
  "Successfully introduced several novel, first-time-in-India APIs.",
  "World-class infrastructure supports large-scale fermentation and downstream processing with full regulatory compliance.",
  "Led by industry veterans with deep expertise across the pharma value chain—from R&D to commercial manufacturing.",
];

const flemingPoints = [
  "Fleming Laboratories leads operations, commercialization, and market outreach.",
  "Fleming brings 20+ years of global experience in API manufacturing and distribution.",
  "The partnership gives FERMAC immediate access to Fleming's extensive client network in regulated and semi-regulated markets.",
  "Fleming's infrastructure and regulatory expertise enables faster, more efficient product launches.",
  "The collaboration blends innovation with proven execution, enhancing scalability and investor value.",
];

export default function Partners() {
  return (
    <section
      id="partners"
      className="py-20 sm:py-28 bg-gray-50/70 border-b border-gray-100 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header (Slide 13) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-[#002F3C] text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00BEDB] animate-pulse" />
            Strong Technology Backbone • 50:50 Joint Venture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#001a24] tracking-tight mb-4">
            Where <span className="text-[#00BEDB]">Technical Mastery</span> Meets{" "}
            Operational Excellence
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            FERMAC Bio was created through a strategic 50:50 partnership uniting{" "}
            <strong className="font-semibold text-[#001a24]">Bransun Labs</strong> and{" "}
            <strong className="font-semibold text-[#001a24]">
              Fleming Laboratories Limited
            </strong>{" "}
            — combining fermentation R&amp;D depth with over 20 years of global API
            commercialization and manufacturing execution.
          </p>
        </div>

        {/* Slide 13 Visual Convergence Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_210px_minmax(0,1fr)] gap-6 lg:gap-4 items-center">
          {/* LEFT CARD: Bransun Labs */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-cyan-300 transition-all duration-300 h-full flex flex-col justify-between">
            <div>
              {/* Bransun Logo & Role */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-gray-100">
                {/* Crisp vector recreation of the Bransun Labs emblem */}
                <div className="inline-flex flex-col items-center justify-center px-6 py-2.5 rounded-full bg-[#09204D] border-2 border-[#C8D4E6] shadow-xs w-fit">
                  <span
                    className="text-white font-bold tracking-wider text-base leading-tight"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    BRANSUN LABS
                  </span>
                  <span className="text-cyan-200 text-[10px] italic tracking-wide">
                    Miracles of Microbe
                  </span>
                </div>

                <div className="flex flex-col sm:items-end">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-50 text-[#002F3C] border border-cyan-200 w-fit">
                    50% Founding Partner
                  </span>
                  <span className="text-xs font-semibold text-[#00BEDB] mt-1">
                    R&amp;D &amp; Technical Mastery
                  </span>
                </div>
              </div>

              {/* 5 Points from Slide 13 */}
              <ul className="space-y-3.5">
                {bransunPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#00BEDB]/12 text-[#002F3C] font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-gray-400 font-medium">Focus</span>
              <span className="font-bold text-[#002F3C]">
                Strain Development &amp; Bioprocess Scale-Up
              </span>
            </div>
          </div>

          {/* CENTER HUB: Partnership Convergence -> FERMAC Bio */}
          <div className="flex flex-col items-center justify-center py-4 lg:py-0">
            {/* Desktop Horizontal Bridge Indicators + Center Emblem */}
            <div className="flex lg:flex-col items-center justify-center gap-4 w-full">
              {/* Left / Top Contribution Badge (Microscope = R&D) */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-cyan-200/80 shadow-xs">
                <svg
                  className="w-5 h-5 text-[#00BEDB] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.7}
                    d="M9 3h6m-5 0v5.172a2 2 0 01-.586 1.414l-4.414 4.414A2 2 0 004.414 17.414V19a2 2 0 002 2h11.172a2 2 0 002-2v-1.586a2 2 0 00-.586-1.414l-4.414-4.414A2 2 0 0114 8.172V3"
                  />
                </svg>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#002F3C]">
                  R&amp;D Depth
                </span>
              </div>

              {/* Center Medallion */}
              <div className="relative flex flex-col items-center">
                {/* Connecting lines on large screens */}
                <div className="hidden lg:block w-px h-5 bg-gradient-to-b from-[#00BEDB] to-[#001a24]" />

                <div className="w-40 h-40 rounded-full bg-[#02111d] border-4 border-[#00BEDB]/40 shadow-2xl flex flex-col items-center justify-center p-4 text-center relative">
                  <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-300 mb-1.5">
                    Miracles of Microbes
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Image
                      src="/logo/LOGO.png"
                      alt="FERMAC Bio"
                      width={34}
                      height={34}
                      className="rounded-full"
                    />
                    <div className="text-left leading-none">
                      <div className="text-white font-black text-base tracking-tight">
                        FERMAC
                      </div>
                      <div className="text-[#00BEDB] font-black text-base tracking-tight">
                        BIO
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-[9px] font-bold text-white uppercase tracking-wider">
                    50% + 50% JV
                  </div>
                </div>

                <div className="hidden lg:block w-px h-5 bg-gradient-to-t from-emerald-500 to-[#001a24]" />
              </div>

              {/* Right / Bottom Contribution Badge (Gears = Operations & Commercial) */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-emerald-200/80 shadow-xs">
                <svg
                  className="w-5 h-5 text-emerald-600 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.7}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.7}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#002F3C]">
                  Global Scale
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT CARD: Fleming Laboratories Limited */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 h-full flex flex-col justify-between">
            <div>
              {/* Fleming Logo & Role */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo/fleming-labs.png"
                    alt="Fleming Laboratories Limited"
                    width={96}
                    height={79}
                    className="h-12 w-auto object-contain"
                  />
                </div>

                <div className="flex flex-col sm:items-end">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 w-fit">
                    50% Founding Partner
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 mt-1">
                    Operations &amp; Global Execution
                  </span>
                </div>
              </div>

              {/* 5 Points from Slide 13 */}
              <ul className="space-y-3.5">
                {flemingPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/12 text-emerald-800 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-gray-400 font-medium">Focus</span>
              <span className="font-bold text-[#002F3C]">
                20+ Years API Manufacturing &amp; Distribution
              </span>
            </div>
          </div>
        </div>

        {/* Joint Venture Summary Strip */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-gray-200/80 text-center">
            <div className="text-xs font-bold uppercase tracking-wider text-[#00BEDB] mb-1">
              Bransun Labs (50%)
            </div>
            <div className="text-sm font-semibold text-[#001a24]">
              Strain Development, Process R&amp;D &amp; Tech Transfer
            </div>
          </div>
          <div className="bg-[#02111d] rounded-2xl p-5 border border-cyan-500/30 text-center text-white">
            <div className="text-xs font-bold uppercase tracking-wider text-[#00BEDB] mb-1">
              FERMAC Bio (100% JV)
            </div>
            <div className="text-sm font-semibold">
              Innovation Blended with Proven Commercial Execution
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-gray-200/80 text-center">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">
              Fleming Laboratories Ltd (50%)
            </div>
            <div className="text-sm font-semibold text-[#001a24]">
              Global Client Network, Regulatory &amp; Market Launch
            </div>
          </div>
        </div>

        {/* Strategic Alliance Call-To-Action Banner */}
        <div className="mt-10 bg-[#001a24] p-8 sm:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="h-px w-6 bg-[#00BEDB]" />
              <span className="text-[#00BEDB] text-xs font-semibold tracking-[0.2em] uppercase">
                Global Partner Network
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Interested in a Research or Commercial Manufacturing Alliance?
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              We collaborate with international pharmaceutical formulation developers,
              global healthcare networks, and clinical research institutions worldwide.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-7 py-3.5 bg-[#00BEDB] hover:bg-[#00a8c8] text-[#001a24] font-bold text-sm tracking-wide transition-colors"
          >
            Initiate Alliance Dialogue &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
