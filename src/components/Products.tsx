"use client";

import React from "react";
import Link from "next/link";

interface ProductDetails {
  id: string;
  name: string;
  categoryBadge: string;
  commercialStatus: string;
  statusColor: string;
  whatIsIt: string;
  capabilities: string[];
  capacity: string;
  capacitySubtext: string;
  speciality: string;
  qualityGrade: string[];
  puritySpec: string;
  regulatoryApproval: string;
  regulatorySubtext: string;
  suitableDosageForms: string[];
}

const productList: ProductDetails[] = [
  {
    id: "fusidic-acid",
    name: "Fusidic Acid",
    categoryBadge: "Skin & Soft-Tissue Anti-Staphylococcal API",
    commercialStatus: "Commercial API Platform",
    statusColor: "bg-[#002F3C] text-cyan-300 border-cyan-400/30",
    whatIsIt:
      "Fusidic Acid is a potent narrow-spectrum antibiotic manufactured via microbial fermentation. It specifically targets Gram-positive bacteria, especially Methicillin-Resistant Staphylococcus aureus (MRSA), for skin and soft-tissue, ophthalmic, and surgical wound infections without promoting cross-resistance to other major antibiotic classes.",
    capabilities: [
      "In-house microbial strain development and high-titer fermentation bioprocessing",
      "Automated feeding cascades in commercial 33 KL bioreactors at Shivampet campus",
      "Closed-system downstream crystallization and solvent purification",
      "Precision jet-milling producing fine and ultra-fine micronized grades",
    ],
    capacity: "~21,600 kg Peak Annual Capacity",
    capacitySubtext:
      "Serving global demand (~90 MT p.a.) and India's import volume (~14 MT p.a. incl. Sodium Fusidate), in a segment with very few global producers (Leo Pharma, Ercros, Zhejiang Yongning).",
    speciality:
      "Engineered particle micronization: Standard crystalline, Micronized (D90 < 10 µm), and Ultra-Fine (D90 < 5 µm) cuts designed for enhanced skin permeation and smooth ophthalmic suspensions.",
    qualityGrade: ["EP (European)", "BP (British)", "USP (United States)", "IP (Indian)"],
    puritySpec: "≥ 99.5% HPLC Assay Purity (Pharmacopeial Grade)",
    regulatoryApproval:
      "WHO-cGMP & Schedule M compliant manufacturing facility. Commercial validation batches approved with leading Indian formulators.",
    regulatorySubtext:
      "Drug Master File (DMF) open-part and technical dossier ready for qualification and regulatory submission.",
    suitableDosageForms: [
      "Topical Creams & Ointments (2% w/w)",
      "Ophthalmic Suspensions & Eye Drops (1% w/w)",
      "Wound Care & Burn Dressings",
      "Combination Formulations with Corticosteroids",
    ],
  },
  {
    id: "sodium-fusidate",
    name: "Sodium Fusidate",
    categoryBadge: "Water-Soluble Antibiotic Salt API",
    commercialStatus: "Commercial API Platform",
    statusColor: "bg-cyan-950 text-cyan-300 border-cyan-400/30",
    whatIsIt:
      "Sodium Fusidate is the freely water-soluble sodium salt of Fusidic Acid. While retaining identical bactericidal power against MRSA and Staphylococcal infections, its high water solubility makes it ideal for oral tablets, hospital solutions, and sterile impregnated antibacterial wound dressings.",
    capabilities: [
      "Integrated salt-conversion and controlled reactive crystallization suites",
      "Dedicated cleanroom filtration and vacuum drying systems",
      "Automated particle sizing with optimized bulk density for tablet compression",
      "Validated chromatographic in-process quality controls and trace analysis",
    ],
    capacity: "Integrated on Block A Fermentation Platform",
    capacitySubtext:
      "Manufactured in dedicated downstream processing suites with multi-ton scalable batch output.",
    speciality:
      "High aqueous solubility and superior powder compressibility for automated high-speed oral tablet manufacturing and sterile gauze/tulle dressing impregnation.",
    qualityGrade: ["EP (European)", "BP (British)", "IP (Indian)"],
    puritySpec: "97.5% – 101.5% Assay (Anhydrous Basis)",
    regulatoryApproval:
      "Manufactured under WHO-cGMP standards. Complete technical data packages available for formulation partners.",
    regulatorySubtext:
      "Technical packages compiled under ICH guidelines for domestic and international regulatory filings.",
    suitableDosageForms: [
      "Oral Film-Coated Tablets (250 mg & 500 mg)",
      "Sterile Impregnated Gauze & Tulle Dressings",
      "Topical Antibacterial Formulations",
      "Oral Liquid Suspensions",
    ],
  },
  {
    id: "daptomycin",
    name: "Daptomycin",
    categoryBadge: "WHO Critically-Important Injectable Lipopeptide API",
    commercialStatus: "Sterile Injectable Grade",
    statusColor: "bg-emerald-950 text-emerald-300 border-emerald-400/30",
    whatIsIt:
      "Daptomycin is an essential cyclic lipopeptide antibiotic listed as a critically important antimicrobial by the World Health Organization (WHO). It is a vital last-resort hospital injectable therapy for severe Gram-positive infections including MRSA bacteremia, right-sided endocarditis, and complicated skin and soft tissue infections.",
    capabilities: [
      "Proprietary high-potency Streptomyces strain mutagenesis and bioprocess kinetics",
      "Precision decanoic acid precursor feeding controls during fermentation",
      "Advanced chromatography purification yielding high-purity injectable grade",
      "Sterile lyophilization bulk handling with ultra-low bacterial endotoxin controls",
    ],
    capacity: "~2,040 kg Peak Annual Capacity",
    capacitySubtext:
      "Addressing India's domestic hospital import requirement (~5 MT p.a.) in a specialized segment served by very few global producers (Xellia, Zhejiang Hisun).",
    speciality:
      "Rapid bactericidal action through membrane depolarization without cellular lysis. Ultra-pure injectable grade engineered specifically for sterile parenteral vial lyophilization.",
    qualityGrade: ["USP (United States)", "EP (European)", "IP (Indian)"],
    puritySpec: "≥ 95.0% HPLC Assay (Injectable Grade, Single Max Impurity ≤ 1.0%)",
    regulatoryApproval:
      "Process scaled and validated at pilot scale. Block B commercial facility commissioning underway.",
    regulatorySubtext:
      "CEP and USFDA-aligned DMF documentation in active preparation for global regulatory submissions.",
    suitableDosageForms: [
      "Sterile Lyophilized Powder for IV Infusion (350 mg & 500 mg Vials)",
      "Hospital Intensive Care Unit (ICU) Injectable Formulations",
      "Parenteral Critical-Care Reconstitutable Solutions",
    ],
  },
  {
    id: "teicoplanin",
    name: "Teicoplanin (FB-03)",
    categoryBadge: "Injectable Glycopeptide — Renal-Safe Profile",
    commercialStatus: "Specialty Glycopeptide Pipeline",
    statusColor: "bg-indigo-950 text-indigo-300 border-indigo-400/30",
    whatIsIt:
      "Teicoplanin (FB-03) is a WHO critically important parenteral glycopeptide antibiotic used in hospital intensive care units to treat severe Gram-positive bacterial infections. It is clinically favored for renally compromised patients due to its lower nephrotoxicity compared to vancomycin, with the convenience of once-daily dosing.",
    capabilities: [
      "Dedicated fermentation trains engineered specifically for lipoglycopeptide yields",
      "Proprietary isolation methods maintaining natural A2 and A3 component distribution",
      "Closed-loop downstream separation ensuring consistent pharmacopeial purity",
      "Strict microbiological assay testing and chromatographic profile validation",
    ],
    capacity: "Scalable Block B Expansion",
    capacitySubtext:
      "Engineered to address hospital demand in an underserved global glycopeptide market with very few primary fermentation producers.",
    speciality:
      "Favorable renal safety profile with prolonged half-life, engineered with exact component ratio distribution conforming strictly to harmonized EP monographs.",
    qualityGrade: ["EP (European)", "BP (British)", "IP (Indian)"],
    puritySpec: "≥ 900 IU/mg Microbiological / HPLC Assay (Parenteral Grade)",
    regulatoryApproval:
      "Laboratory process development complete; pilot scale-up scheduled for Block B.",
    regulatorySubtext:
      "Pre-formulation documentation and initial regulatory packages being prepared for regulatory agency review.",
    suitableDosageForms: [
      "Powder for Solution for IV / IM Injection (200 mg & 400 mg Vials)",
      "Hospital Critical-Care Parenteral Solutions",
      "Dual-Use Outpatient and Inpatient Infusions",
    ],
  },
];

export default function Products() {
  return (
    <div className="bg-white">
      {/* 1. Header Banner */}
      <section className="relative bg-gradient-to-b from-[#002F3C] via-[#003847] to-[#004859] text-white pt-36 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00BEDB_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-5">
            <span className="w-2 h-2 rounded-full bg-[#00BEDB] animate-pulse" />
            Manufactured in India • 25,000 sq. m. Biomanufacturing Campus
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
            Our Manufactured <span className="text-[#00BEDB]">API Products</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            India&rsquo;s dedicated primary manufacturer for critical fermentation-derived Active Pharmaceutical Ingredients (APIs). Manufactured to global pharmacopeias (EP, BP, USP) with in-house particle micronization and WHO-cGMP compliance.
          </p>

          {/* Quick Stats Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mt-10 text-left">
            <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs">
              <div className="text-[11px] text-cyan-300 uppercase tracking-wider font-semibold">Annual Peak Volume</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-0.5">26,000+ kg</div>
              <div className="text-[11px] text-gray-300">Across API Portfolio</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs">
              <div className="text-[11px] text-cyan-300 uppercase tracking-wider font-semibold">Purity Standard</div>
              <div className="text-xl sm:text-2xl font-black text-emerald-400 mt-0.5">&ge; 99.5%</div>
              <div className="text-[11px] text-gray-300">Harmonized EP / BP / USP</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs">
              <div className="text-[11px] text-cyan-300 uppercase tracking-wider font-semibold">Micronization</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-0.5">&lt; 10 µm</div>
              <div className="text-[11px] text-gray-300">D90 Particle Sizing</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs">
              <div className="text-[11px] text-cyan-300 uppercase tracking-wider font-semibold">Self-Reliance</div>
              <div className="text-xl sm:text-2xl font-black text-[#00BEDB] mt-0.5">100%</div>
              <div className="text-[11px] text-gray-300">Domestic Manufacturer</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Single-Page Quick Jump Bar */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-30 shadow-xs py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider shrink-0 hidden sm:inline-block">
              Jump to Product:
            </span>
            <div className="flex items-center gap-2 sm:gap-3">
              {productList.map((prod) => (
                <a
                  key={prod.id}
                  href={`#${prod.id}`}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 hover:bg-cyan-50 hover:text-[#002F3C] text-gray-700 transition-colors whitespace-nowrap border border-gray-200/70"
                >
                  {prod.name}
                </a>
              ))}
            </div>
            <Link
              href="/contact"
              className="text-xs font-bold text-[#002F3C] hover:text-[#00BEDB] shrink-0 hidden md:inline-flex items-center gap-1"
            >
              Request Specs &amp; Samples &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 3. All Products on a Single Page */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {productList.map((prod, index) => (
          <div
            key={prod.id}
            id={prod.id}
            className="scroll-mt-36 rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            {/* Top Product Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <span className="text-xs font-bold text-[#00BEDB] font-mono uppercase tracking-wider">
                    Product 0{index + 1}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${prod.statusColor}`}>
                    {prod.commercialStatus}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                    {prod.categoryBadge}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#002F3C] tracking-tight">
                  {prod.name}
                </h2>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  href={`/contact?product=${encodeURIComponent(prod.name)}&action=spec-sheet`}
                  className="px-5 py-2.5 rounded-xl bg-[#00BEDB] hover:bg-[#00aebd] text-[#002F3C] font-bold text-xs sm:text-sm shadow-xs transition-transform hover:scale-105"
                >
                  Request Technical Spec Sheet
                </Link>
                <Link
                  href={`/contact?product=${encodeURIComponent(prod.name)}&action=sample`}
                  className="px-5 py-2.5 rounded-xl border border-gray-300 hover:border-[#002F3C] text-[#002F3C] font-semibold text-xs sm:text-sm hover:bg-gray-50 transition-colors"
                >
                  Request Sample
                </Link>
              </div>
            </div>

            {/* Core Overview: What is the Product? */}
            <div className="py-6 border-b border-gray-100">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
                What is {prod.name}?
              </h3>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-normal">
                {prod.whatIsIt}
              </p>
            </div>

            {/* Key Information Grid: Capabilities, Capacity, Speciality, Quality Grade, Regulatory */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 border-b border-gray-100">
              {/* 1. Our Capabilities */}
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-gray-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 text-[#002F3C] flex items-center justify-center font-bold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-[#002F3C]">Our Capabilities</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  {prod.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#00BEDB] font-bold mt-0.5">•</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2. Manufacturing Capacity */}
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-gray-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 text-[#002F3C] flex items-center justify-center font-bold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-[#002F3C]">Manufacturing Capacity</h4>
                <div className="text-lg font-extrabold text-[#002F3C]">{prod.capacity}</div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {prod.capacitySubtext}
                </p>
                <div className="pt-2 border-t border-gray-200 text-xs text-gray-500 font-medium">
                  25,000 sq. m. integrated campus infrastructure with 6 × 33 KL Block A fermenters in Shivampet, Medak.
                </div>
              </div>

              {/* 3. Speciality & Particle Engineering */}
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-gray-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 text-[#002F3C] flex items-center justify-center font-bold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-[#002F3C]">Speciality &amp; Particle Sizing</h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {prod.speciality}
                </p>
                <div className="pt-2 border-t border-gray-200">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
                    Suitable Dosage Forms:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {prod.suitableDosageForms.map((df, i) => (
                      <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-white border border-gray-200 text-gray-700">
                        {df}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4. Quality Grade */}
              <div className="p-5 rounded-2xl bg-[#E9F6F8] border border-cyan-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#002F3C] text-cyan-300 flex items-center justify-center font-bold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-[#002F3C]">Quality Grade &amp; Monographs</h4>
                <div className="flex flex-wrap gap-1.5">
                  {prod.qualityGrade.map((g, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs font-bold rounded-lg bg-[#002F3C] text-white">
                      {g}
                    </span>
                  ))}
                </div>
                <div className="text-xs sm:text-sm font-bold text-cyan-900 mt-2">
                  Assay Standard: {prod.puritySpec}
                </div>
                <p className="text-xs text-gray-600">
                  Strict batch-to-batch chromatographic impurity profiling, microbiological assay testing, and heavy metal controls under ICH guidelines.
                </p>
              </div>

              {/* 5. Regulatory Approval & Dossier Status */}
              <div className="p-5 rounded-2xl bg-[#E9F6F8] border border-cyan-100 space-y-3 md:col-span-2">
                <div className="w-10 h-10 rounded-xl bg-[#002F3C] text-cyan-300 flex items-center justify-center font-bold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-[#002F3C]">Regulatory Approval &amp; Filings</h4>
                <p className="text-xs sm:text-sm font-semibold text-gray-800">
                  {prod.regulatoryApproval}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {prod.regulatorySubtext}
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs text-gray-600">
                  <span className="px-2 py-1 rounded bg-white border border-cyan-200 font-medium">✓ WHO-cGMP Standard</span>
                  <span className="px-2 py-1 rounded bg-white border border-cyan-200 font-medium">✓ Schedule M Compliant</span>
                  <span className="px-2 py-1 rounded bg-white border border-cyan-200 font-medium">✓ Open-Part DMF Ready</span>
                  <span className="px-2 py-1 rounded bg-white border border-cyan-200 font-medium">✓ 100% Zero Liquid Discharge</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 4. Bottom Commercial Audit & Supply Inquiry Banner */}
      <section className="bg-gradient-to-r from-[#002F3C] to-[#004859] py-16 text-white border-t border-cyan-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            Technical Specification &amp; Plant Qualification
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Ready to Qualify Fermac Bio as Your Primary API Manufacturer?
          </h2>
          <p className="text-sm sm:text-base text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
            We provide prospective pharmaceutical formulation partners with Certificate of Analysis (CoA), open-part technical dossiers, and commercial validation sample quantities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact?action=audit"
              className="px-8 py-3.5 rounded-xl bg-[#00BEDB] hover:bg-[#00aebd] text-[#002F3C] font-bold text-sm shadow-lg transition-transform hover:scale-105"
            >
              Schedule Facility Audit &amp; Technical Meeting
            </Link>
            <Link
              href="/facilities"
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-xs transition-colors"
            >
              Tour Manufacturing Infrastructure (25,000 sq. m.)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
