"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface Partner {
  id: string;
  name: string;
  category: "manufacturing" | "formulation" | "distribution";
  categoryLabel: string;
  countryCode: string;
  location: string;
  tenure: string;
  relationship: string;
  description: string;
  collaborationScope: string;
  keyDeliverables: string[];
  logoEmblem: React.ReactNode;
}

const partnersData: Partner[] = [
  {
    id: "fleming-labs",
    name: "Fleming Laboratories Limited",
    category: "manufacturing",
    categoryLabel: "Commercial Biomanufacturing & Distribution",
    countryCode: "IN",
    location: "Telangana, India",
    tenure: "Strategic Investor & Partner (20+ Years Track Record)",
    relationship: "Corporate Investment, Global Distribution & Market Access",
    description:
      "Established API manufacturer with over 20 years of global distribution, regulatory, and market access reach. Fleming invests alongside founders, anchoring commercial scaling and international customer alliances.",
    collaborationScope:
      "Global finished-dose formulator outreach, international regulatory filings (EU/US), co-investment in plant infrastructure, and commercial market access.",
    keyDeliverables: [
      "Global Distribution Reach",
      "Regulatory Filings Support",
      "Co-Investment & Strategy",
      "Commercial Scale-Up",
    ],
    logoEmblem: (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#064E3B] to-[#047857] p-2 flex items-center justify-center text-white shrink-0 shadow-xs border border-emerald-500/20">
        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
          <path d="M12 24l4-8V8h0v8l4 8H12z" stroke="#34D399" strokeWidth="2" strokeLinejoin="round" />
          <path d="M10 8h12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <circle cx="16" cy="20" r="2.5" fill="#A7F3D0" />
        </svg>
      </div>
    ),
  },
  {
    id: "bransun-labs",
    name: "Bransun Labs LLP",
    category: "formulation",
    categoryLabel: "Formulation & Clinical R&D",
    countryCode: "IN",
    location: "Hyderabad, India",
    tenure: "Strategic R&D Partner (Founded 2019)",
    relationship: "Downstream Co-Development & Analytical Validation",
    description:
      "Founded in 2019 by Suneel Kumar Battula to advance bioprocess innovation. Adds R&D depth, microbial strain development, process optimization, downstream crystallization, and analytical method validation.",
    collaborationScope:
      "Strain improvement, secondary metabolite process optimization, HPLC/GC method validation, and downstream isolation development.",
    keyDeliverables: [
      "Strain Improvement & Kinetics",
      "HPLC/GC Analytical Validation",
      "Downstream Crystallization",
      "Process Know-How Transfer",
    ],
    logoEmblem: (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#002F3C] to-[#004859] p-2 flex items-center justify-center text-white shrink-0 shadow-xs border border-cyan-500/20">
        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
          <circle cx="16" cy="16" r="13" stroke="#00BEDB" strokeWidth="2" strokeDasharray="3 2" />
          <path d="M11 16h10M16 11v10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <circle cx="16" cy="16" r="4" fill="#00BEDB" />
        </svg>
      </div>
    ),
  },
  {
    id: "novagen-therapeutics",
    name: "Novagen Therapeutics AG",
    category: "distribution",
    categoryLabel: "European Regulatory & Hospital Healthcare Alliances",
    countryCode: "CH",
    location: "Basel, Switzerland",
    tenure: "European Partner Since 2017",
    relationship: "EU-GMP Dossier Filings & Hospital Network",
    description:
      "Exclusive European regulatory and distribution partner ensuring stringent conformance with European Pharmacopoeia (EP) monographs and authorized hospital procurement networks.",
    collaborationScope:
      "EU-GMP regulatory filings, CEP certification coordination, and GDP-certified cold-chain export across European territories.",
    keyDeliverables: [
      "EU-GMP Monograph Alignment",
      "CEP Dossier Support",
      "Hospital Formulary Access",
      "GDP Validated Logistics",
    ],
    logoEmblem: (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#334155] p-2 flex items-center justify-center text-white shrink-0 shadow-xs border border-blue-500/20">
        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
          <polygon points="16,6 26,11 26,21 16,26 6,21 6,11" stroke="#60A5FA" strokeWidth="2" strokeLinejoin="round" />
          <path d="M16 11v10M11 16h10" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>
    ),
  },
  {
    id: "synthoferment",
    name: "SynthoFerment Systems GmbH",
    category: "manufacturing",
    categoryLabel: "Bioprocess Automation & Sensors",
    countryCode: "DE",
    location: "Munich, Germany",
    tenure: "Technology Partner Since 2016",
    relationship: "PAT Telemetry & Process Analytics",
    description:
      "Advanced biotechnology instrumentation partner providing digital process analytical technology (PAT), inline biomass telemetry, and automated dissolved oxygen control.",
    collaborationScope:
      "Smart bioreactor automation, sensor calibration protocols, and real-time kinetic telemetry integration.",
    keyDeliverables: [
      "Continuous PAT Sensors",
      "Automated Dosing Loops",
      "Biomass Telemetry",
      "Digital Batch Records",
    ],
    logoEmblem: (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#451A03] to-[#78350F] p-2 flex items-center justify-center text-white shrink-0 shadow-xs border border-amber-500/20">
        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
          <circle cx="16" cy="16" r="10" stroke="#FBBF24" strokeWidth="2" />
          <circle cx="16" cy="16" r="4" stroke="#FFFFFF" strokeWidth="1.5" />
          <path d="M16 6v4M16 22v4M6 16h4M22 16h4" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    ),
  },
  {
    id: "apex-pharma",
    name: "Apex Global Pharma Distribution",
    category: "distribution",
    categoryLabel: "Cold-Chain Logistics & Trade Clearance",
    countryCode: "SG",
    location: "Singapore",
    tenure: "Distribution Partner Since 2020",
    relationship: "Asia-Pacific Gateway & Trade Clearance",
    description:
      "Specialized healthcare logistics partner ensuring temperature-validated sea and air freight, customs regulatory adherence, and inventory fulfillment across Southeast Asia.",
    collaborationScope:
      "WHO-GDP compliant cold-chain shipping, international customs brokerage, and buffer inventory management.",
    keyDeliverables: [
      "WHO-GDP Certified Hub",
      "Asia-Pacific Network",
      "Temperature Loggers",
      "Rapid Customs Clearances",
    ],
    logoEmblem: (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#134E4A] to-[#115E59] p-2 flex items-center justify-center text-white shrink-0 shadow-xs border border-teal-500/20">
        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
          <circle cx="16" cy="16" r="11" stroke="#2DD4BF" strokeWidth="2" />
          <ellipse cx="16" cy="16" rx="5" ry="11" stroke="#FFFFFF" strokeWidth="1.5" />
          <path d="M6 16h20" stroke="#5EEAD4" strokeWidth="1.5" />
        </svg>
      </div>
    ),
  },
  {
    id: "zenith-analytical",
    name: "Zenith Bio-Analytical Ltd",
    category: "formulation",
    categoryLabel: "Formulation & Clinical R&D",
    countryCode: "UK",
    location: "Cambridge, United Kingdom",
    tenure: "Research Partner Since 2019",
    relationship: "Bio-Equivalence & Particle Characterization",
    description:
      "Specialized contract research organization providing high-resolution particle size distribution (PSD), in-vitro dissolution kinetics, and impurity degradation profiles.",
    collaborationScope:
      "Advanced laser diffraction testing, solid-state polymorphism characterization, and regulatory stability dossiers for international filings.",
    keyDeliverables: [
      "Laser Diffraction PSD",
      "Polymorphism Studies",
      "Dissolution Kinetics",
      "Stability Profiling",
    ],
    logoEmblem: (
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#1E1B4B] to-[#312E81] p-2 flex items-center justify-center text-white shrink-0 shadow-xs border border-indigo-500/20">
        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
          <circle cx="16" cy="16" r="12" stroke="#818CF8" strokeWidth="2" strokeDasharray="4 2" />
          <path d="M12 16l3 3 5-6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="16" cy="16" r="3" fill="#6366F1" />
        </svg>
      </div>
    ),
  },
];

type CategoryFilter = "all" | "manufacturing" | "formulation" | "distribution";

export default function Partners() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  // Swipe support refs
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const filteredPartners =
    activeCategory === "all"
      ? partnersData
      : partnersData.filter((p) => p.category === activeCategory);

  // Responsive items-per-page detection
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, filteredPartners.length - visibleCards);

  // Reset index when category tab changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Keep index within bounds if window resizes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  // Autoplay carousel every 5.5s (pauses on hover)
  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPartner(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <section id="partners" className="py-16 sm:py-20 bg-gray-50/60 border-b border-gray-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-[#002F3C] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00BEDB] animate-pulse" />
            Global Industry Alliances
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002F3C] tracking-tight mb-3">
            Our Strategic <span className="text-[#00BEDB]">Partners</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Collaborating with leading pharmaceutical laboratories, industrial fermentation facilities, and certified distributors to deliver world-class active pharmaceutical ingredients globally.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {[
              { id: "all", label: "All Alliances" },
              { id: "manufacturing", label: "Manufacturing Alliances" },
              { id: "formulation", label: "Formulation & Clinical R&D" },
              { id: "distribution", label: "Global Distribution" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id as CategoryFilter)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === tab.id
                    ? "bg-[#002F3C] text-white shadow-sm"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-cyan-400 hover:text-[#00BEDB]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative px-2 sm:px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Floating Left Navigation Arrow Button */}
          {filteredPartners.length > visibleCards && (
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200/90 shadow-md flex items-center justify-center text-[#002F3C] transition-all duration-200 ${
                currentIndex === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-[#002F3C] hover:text-white hover:border-[#002F3C] hover:scale-105 cursor-pointer"
              }`}
              aria-label="Previous partner slide"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Carousel Overflow Viewport */}
          <div
            className="overflow-hidden py-3"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Sliding Track */}
            <div
              className="flex -mx-3 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {filteredPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  {/* Square Card (aspect-square with equal height and width) */}
                  <div
                    onClick={() => setSelectedPartner(partner)}
                    className="aspect-square min-h-[390px] w-full bg-white rounded-3xl p-5 sm:p-6 border border-gray-200/90 shadow-xs hover:shadow-xl hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative cursor-pointer"
                  >
                    {/* Ambient subtle glow on card hover */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100/40 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                    {/* 1. Header: Emblem + Location & Tenure */}
                    <div className="relative z-10 flex items-start justify-between gap-2">
                      <div className="transition-transform duration-300 group-hover:scale-105">
                        {partner.logoEmblem}
                      </div>
                      <div className="flex flex-col items-end gap-1 text-right">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wide uppercase bg-cyan-50 text-[#002F3C] border border-cyan-100">
                          <span className="font-mono text-cyan-700">[{partner.countryCode}]</span>
                          <span className="truncate max-w-[130px]">{partner.location}</span>
                        </span>
                        <span className="text-[10px] sm:text-[11px] text-gray-400 font-medium">
                          {partner.tenure}
                        </span>
                      </div>
                    </div>

                    {/* 2. Core Body: Name, Role, Narrative, and Responsive Scope */}
                    <div className="relative z-10 my-auto py-1">
                      <h3 className="text-base sm:text-lg font-extrabold text-[#002F3C] group-hover:text-[#00BEDB] transition-colors leading-tight line-clamp-1">
                        {partner.name}
                      </h3>
                      <p className="text-xs font-semibold text-cyan-800 line-clamp-1 mt-0.5">
                        {partner.relationship}
                      </p>

                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mt-1.5 font-normal">
                        {partner.description}
                      </p>

                      {/* Responsive Scope Box: fully visible, never clipped */}
                      <div
                        className="mt-2.5 p-2.5 sm:p-3 rounded-2xl bg-[#F0F9FB] border border-cyan-100/80 group-hover:border-cyan-300 transition-colors"
                        title={partner.collaborationScope}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00BEDB]" />
                            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#002F3C]">
                              Alliance Scope
                            </span>
                          </div>
                          <span className="text-[9px] sm:text-[10px] font-semibold text-cyan-800 bg-white/90 px-1.5 py-0.5 rounded border border-cyan-100 shrink-0">
                            Core Focus
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-gray-700 leading-relaxed font-normal">
                          {partner.collaborationScope}
                        </p>
                      </div>
                    </div>

                    {/* 3. Footer: Deliverables & Details CTA */}
                    <div className="relative z-10 pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 flex-1 min-w-0 overflow-hidden">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#E9F6F8] text-[#002F3C] border border-cyan-100/70 truncate max-w-[120px] sm:max-w-[140px]">
                          {partner.keyDeliverables[0]}
                        </span>
                        {partner.keyDeliverables[1] && (
                          <span className="hidden sm:inline-block px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#E9F6F8] text-[#002F3C] border border-cyan-100/70 truncate max-w-[120px] sm:max-w-[140px]">
                            {partner.keyDeliverables[1]}
                          </span>
                        )}
                        <span className="px-1.5 py-0.5 rounded-md text-[10px] font-medium text-gray-500 bg-gray-100 shrink-0">
                          +{partner.keyDeliverables.length - 2 > 0 ? partner.keyDeliverables.length - 2 : 1}
                        </span>
                      </div>

                      <span className="shrink-0 text-xs font-bold text-[#002F3C] group-hover:text-[#00BEDB] flex items-center gap-1 transition-colors">
                        <span>Details</span>
                        <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Right Navigation Arrow Button */}
          {filteredPartners.length > visibleCards && (
            <button
              type="button"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200/90 shadow-md flex items-center justify-center text-[#002F3C] transition-all duration-200 ${
                currentIndex >= maxIndex
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-[#002F3C] hover:text-white hover:border-[#002F3C] hover:scale-105 cursor-pointer"
              }`}
              aria-label="Next partner slide"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Pagination Indicators & Slide Controls */}
          {filteredPartners.length > visibleCards && (
            <div className="flex items-center justify-center gap-2 mt-7">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? "w-8 bg-[#00BEDB]"
                      : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide page ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Strategic Alliance Call-To-Action Banner */}
        <div className="mt-12 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-2xl space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00BEDB]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00BEDB]" />
              Global Partner Network
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#002F3C]">
              Interested in a Research or Commercial Manufacturing Alliance?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We collaborate with international pharmaceutical formulation developers, global healthcare networks, and clinical research institutions worldwide.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-[#002F3C] hover:bg-[#003B4C] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
          >
            Initiate Alliance Dialogue &rarr;
          </Link>
        </div>

      </div>

      {/* Alliance Details Modal */}
      {selectedPartner && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001820]/60 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setSelectedPartner(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative max-h-[90vh] overflow-y-auto animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedPartner(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4 mb-5 pr-8">
              {selectedPartner.logoEmblem}
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-cyan-50 text-[#002F3C] border border-cyan-100 mb-1">
                  [{selectedPartner.countryCode}] {selectedPartner.location}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#002F3C] leading-snug">
                  {selectedPartner.name}
                </h3>
                <p className="text-xs font-semibold text-[#00BEDB] mt-0.5">
                  {selectedPartner.tenure}
                </p>
              </div>
            </div>

            {/* Relationship / Role */}
            <div className="mb-4">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                Alliance Focus & Specialization
              </h4>
              <p className="text-sm font-bold text-[#002F3C]">
                {selectedPartner.relationship}
              </p>
            </div>

            {/* Full Narrative Overview */}
            <div className="mb-4">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                Alliance Overview
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                {selectedPartner.description}
              </p>
            </div>

            {/* Full Collaboration Scope Box */}
            <div className="mb-5 p-3.5 rounded-2xl bg-cyan-50/50 border-l-3 border-[#00BEDB]">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#002F3C] mb-1">
                Collaboration Scope
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {selectedPartner.collaborationScope}
              </p>
            </div>

            {/* Technical Deliverables Tags */}
            <div className="mb-6">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                Technical Focus Areas & Deliverables
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedPartner.keyDeliverables.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#E9F6F8] text-[#002F3C] border border-cyan-100"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Action Footer */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setSelectedPartner(null)}
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Close
              </button>
              <Link
                href={`/contact?partner=${selectedPartner.id}`}
                onClick={() => setSelectedPartner(null)}
                className="px-5 py-2.5 rounded-xl bg-[#002F3C] hover:bg-[#003B4C] text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
              >
                Initiate Dialogue &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
