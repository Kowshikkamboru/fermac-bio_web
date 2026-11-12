"use client";

import React, { useState } from "react";
import Link from "next/link";

export interface ProductItem {
  id: string;
  name: string;
  badge: string;
  commercialStatus: string;
  chemicalName: string;
  casNo: string;
  formula: string;
  therapeuticCategory: string;
  pharmacopeia: string[];
  particleSizeOptions: string[];
  overview: string;
  applications: string[];
  formulations: string[];
  keyStrengths: string[];
  marketContext: string;
  specifications: { [key: string]: string };
}

const products: ProductItem[] = [
  {
    id: "fusidic-acid",
    name: "Fusidic Acid",
    badge: "Commercial Jun 2026",
    commercialStatus: "In Commercial Production — Validated with Indian Formulators",
    chemicalName: "(3α,4α,8α,9β,11α,13α,14β,16β,17Z)-16-(Acetyloxy)-3,11-dihydroxy-29-nordammara-17(20),24-dien-21-oic acid",
    casNo: "6990-06-3",
    formula: "C₃₁H₄₈O₆",
    therapeuticCategory: "Fusidane-class Steroid Antibiotic (Narrow-Spectrum / Anti-Staphylococcal)",
    pharmacopeia: ["EP", "BP", "USP", "IP"],
    particleSizeOptions: [
      "Standard Crystalline Powder",
      "Micronized (D90 < 10 µm)",
      "Ultra-Fine Micronized (D90 < 5 µm)",
      "Custom Sieve Cut on Request",
    ],
    overview:
      "Fusidic Acid is a steroid-structured, narrow-spectrum bacteriostatic antibiotic belonging to the fusidane family. It works by blocking elongation factor G (EF-G) on the bacterial ribosome, preventing bacterial protein synthesis. It possesses potent targeted efficacy against Gram-positive bacteria, particularly Methicillin-Resistant Staphylococcus aureus (MRSA). Highly stewardship-friendly with steady global clinical demand across dermatological and ophthalmic formulations.",
    applications: [
      "Dermatological bacterial infections (impetigo, folliculitis, infected eczema)",
      "Ophthalmic bacterial infections (conjunctivitis, blepharitis, keratitis)",
      "Systemic bone & joint infections (osteomyelitis, septic arthritis)",
      "Wound care, surgical incisions, post-operative dressings & burns",
    ],
    formulations: [
      "Ophthalmic creams & viscous eye drops (1% w/w)",
      "Topical gels & creams (2% w/w)",
      "Dermatological ointments",
      "Specialty combination topical therapies (with corticosteroids)",
    ],
    keyStrengths: [
      "First domestic producer in India — substituting 100% imported volume (~6.9 tons p.a.)",
      "Available in multiple particle-size specifications (D90 < 10 µm and < 5 µm)",
      "Custom micronization with tight particle-size distribution (PSD) for dermal absorption",
      "High microbial purity with strict chromatographic control on related substances",
      "Commercial validation batches approved and accepted by premier Indian formulators",
    ],
    marketContext:
      "Global demand ~78 metric tons p.a. (US$ 42M market by 2030). India is the #4 global consumer with zero prior domestic manufacturing. Fermac Bio targets ~21,600 kg peak annual volume.",
    specifications: {
      Appearance: "White or almost white crystalline powder",
      Solubility: "Practically insoluble in water, freely soluble in ethanol (96%)",
      Assay: "97.5% – 101.0% (anhydrous basis)",
      "Related Substances": "Conforms to EP/BP monographs (HPLC)",
      "Heavy Metals": "≤ 10 ppm",
      Water: "≤ 1.5%",
      "Specific Optical Rotation": "-19.0° to -21.0°",
    },
  },
  {
    id: "sodium-fusidate",
    name: "Sodium Fusidate",
    badge: "Commercial Jun 2026",
    commercialStatus: "In Commercial Production — High-Yield Downstream Crystallization",
    chemicalName: "Sodium (3α,4α,8α,9β,11α,13α,14β,16β,17Z)-16-(acetyloxy)-3,11-dihydroxy-29-nordammara-17(20),24-dien-21-oate",
    casNo: "751-94-0",
    formula: "C₃₁H₄₇NaO₆",
    therapeuticCategory: "Water-Soluble Fusidane Antibiotic Salt",
    pharmacopeia: ["EP", "BP", "IP"],
    particleSizeOptions: [
      "Standard Crystalline Powder",
      "Fine Milled Powder",
      "High-Compressibility Granular Cut",
      "Custom Specification on Request",
    ],
    overview:
      "Sodium Fusidate is the water-soluble sodium salt of Fusidic Acid possessing identical antibacterial potency. Its superior aqueous solubility makes it uniquely suitable for a wider spectrum of pharmaceutical dosage forms, including oral solid dosages (film-coated tablets), sterile impregnated dressings, and versatile topical formulations.",
    applications: [
      "Oral systemic treatment for Staphylococcal skin, tissue, and bone infections",
      "Chronic and acute osteomyelitis infections",
      "Infected surgical wounds and incisions",
      "Topical antibacterial gauze dressings and sterile tulle",
    ],
    formulations: [
      "Film-coated tablets (250 mg & 500 mg)",
      "Topical ointments (2% w/w)",
      "Sterile impregnated tulle dressings",
      "Oral suspensions and liquid formulations",
    ],
    keyStrengths: [
      "High water solubility allowing versatile formulation matrices and oral bioavailability",
      "Optimized flowability and compressibility for automated tablet compression",
      "Batch-to-batch consistency guaranteed via automated downstream crystallization",
      "Compliant with international pharmacopoeial EP and BP monographs",
    ],
    marketContext:
      "Essential component of multi-route anti-staphylococcal therapy; manufactured under the same high-titer fermentation platform as Fusidic Acid.",
    specifications: {
      Appearance: "White or almost white hygroscopic crystalline powder",
      Solubility: "Freely soluble in water and ethanol (96%)",
      Assay: "97.5% – 101.5% (anhydrous substance)",
      pH: "7.5 – 9.0 (1.25% w/v aqueous solution)",
      "Related Substances": "Conforms to EP/BP monographs",
      Water: "≤ 2.0%",
    },
  },
  {
    id: "daptomycin",
    name: "Daptomycin",
    badge: "Commercial Oct 2027",
    commercialStatus: "Process Developed & Scaled — Plant Pilot Batches Scheduled",
    chemicalName:
      "N-(1-Oxodecyl)-L-tryptophyl-D-asparaginyl-L-α-aspartyl-L-threonylglycyl-L-ornithyl-L-α-aspartyl-D-alanyl-L-α-aspartylglycyl-D-seryl-(3R)-3-methyl-L-α-glutamyl-α-(2-aminophenyl)-α-oxo-L-alanine (13→4)-lactone",
    casNo: "103060-53-3",
    formula: "C₇₂H₁₀₁N₁₇O₂₆",
    therapeuticCategory: "WHO Critically-Important Antimicrobial / Last-Resort Injectable Lipopeptide",
    pharmacopeia: ["USP", "EP", "IP"],
    particleSizeOptions: [
      "Sterile Lyophilization Grade",
      "Ultra-Pure Injectable Bulk",
      "High-Purity Micronized Powder",
      "Custom Sterile Specification",
    ],
    overview:
      "Daptomycin is a cyclic lipopeptide antibiotic listed as a critically important antimicrobial by the World Health Organization (WHO). It serves as a vital last-resort injectable therapy for severe, life-threatening Gram-positive infections including Methicillin-Resistant Staphylococcus aureus (MRSA) and Vancomycin-Resistant Enterococci (VRE). Daptomycin binds to bacterial membranes in a calcium-dependent manner, causing rapid membrane depolarization, cessation of macromolecular synthesis, and bacterial death without cell lysis.",
    applications: [
      "Complicated skin and skin structure infections (cSSSI)",
      "Staphylococcus aureus bloodstream infections (bacteremia)",
      "Right-sided infective endocarditis caused by Staphylococcus aureus",
      "Severe hospital-acquired infections (ICUs and surgical wards)",
    ],
    formulations: [
      "Sterile lyophilized powder for IV injection / infusion (350 mg & 500 mg vials)",
      "Reconstitutable parenteral hospital formulations",
      "Specialty critical-care anti-infective formulations",
    ],
    keyStrengths: [
      "Highest-value fermentation API (> US$ 12,000/kg) with extreme technical barriers to entry",
      "Substitutes 100% imported volume for Indian formulators who lead global finished-dose supply",
      "In-house strain mutagenesis and DSP downstream crystallization yielding > 95% injectable purity",
      "Projected peak production volume of ~2,040 kg p.a. contributing ~54% of FY33 revenues",
    ],
    marketContext:
      "Global demand ~5–6 metric tons p.a. (> US$ 100M API value). Supply concentrated worldwide in only 2–3 producers (Xellia, Zhejiang Hisun). Block B downstream dedicated suites operational by Dec 2026.",
    specifications: {
      Appearance: "Pale yellow to light brown hygroscopic powder",
      Solubility: "Freely soluble in water and 0.9% sodium chloride",
      Assay: "≥ 95.0% to 102.0% (HPLC, anhydrous basis)",
      "Single Max Impurity": "≤ 1.0% (EP/USP monograph compliance)",
      "Bacterial Endotoxins": "≤ 0.25 EU/mg (sterile injectable grade)",
      Water: "≤ 6.0%",
    },
  },
  {
    id: "teicoplanin",
    name: "Teicoplanin",
    badge: "Launch FY29 (Oct 2028)",
    commercialStatus: "Pipeline Development — 2 Dedicated 20 KL Fermenters in Block B",
    chemicalName:
      "Teicoplanin complex (A2-1, A2-2, A2-3, A2-4, A2-5 and A3-1 lipoglycopeptides)",
    casNo: "61036-62-2",
    formula: "Lipoglycopeptide Multi-Component Complex",
    therapeuticCategory: "WHO Critically-Important Glycopeptide Antibiotic (Renal-Safe Profile)",
    pharmacopeia: ["EP", "BP", "IP"],
    particleSizeOptions: [
      "Injectable-Grade Sterile Bulk",
      "Parenteral Crystalline Powder",
      "High-Potency Bio-Assayed Cut",
      "Custom Monograph Specification",
    ],
    overview:
      "Teicoplanin is a WHO critically-important injectable glycopeptide antibiotic used in intensive care units and surgical departments to treat severe Gram-positive bacterial infections, including MRSA and Enterococcus faecalis. It acts by inhibiting bacterial cell wall peptidoglycan synthesis. Teicoplanin is widely favored for renally-compromised patients due to its significantly lower nephrotoxicity and ototoxicity compared to first-generation glycopeptides, alongside a prolonged half-life that permits convenient once-daily dosing.",
    applications: [
      "Severe Gram-positive bloodstream, bone, and joint infections",
      "Hospital-acquired pneumonia & ventilator-associated pneumonia",
      "Infectious endocarditis and complicated urinary tract infections",
      "Preferred first-line therapy in renal-impaired patients requiring glycopeptides",
    ],
    formulations: [
      "Powder for solution for IV / IM injection or infusion (200 mg & 400 mg vials)",
      "Hospital critical-care parenteral formulations",
      "Dual-use outpatient and inpatient injectable therapies",
    ],
    keyStrengths: [
      "High-value anti-infective (> US$ 4,000/kg) with expanding US$ 820M global market by 2033",
      "Superior renal safety profile with lower adverse incident rate vs vancomycin",
      "Integrated downstream processing to hold ~80% gross margins at commercial scale",
      "Two dedicated 20 KL fermenters scheduled for commissioning in Block B",
    ],
    marketContext:
      "Global market growing from US$ 500M (2023) to US$ 820M (2033, ~6% CAGR). Global supply historically concentrated in Europe (Sanofi, Xellia) and China (Hisun). Fermac Bio targets ~2,808 kg peak volume.",
    specifications: {
      Appearance: "White to yellowish crystalline powder",
      Solubility: "Soluble in water, practically insoluble in ethanol (96%)",
      Assay: "≥ 900 IU/mg (microbiological assay / HPLC)",
      "Component Ratio": "Conforms to EP monograph for A2 and A3 component distributions",
      "Bacterial Endotoxins": "≤ 0.8 EU/mg (injectable grade)",
      Water: "≤ 15.0%",
    },
  },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState<string>("fusidic-acid");

  const currentProduct = products.find((p) => p.id === activeTab) || products[0];

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-b from-[#002F3C] via-[#003847] to-[#004859] text-white pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00BEDB_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-5">
            <span className="w-2 h-2 rounded-full bg-[#00BEDB] animate-pulse" />
            India&rsquo;s 1st Domestic Manufacturer • 3 Critical Anti-Infective APIs
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Fermentation-Based <span className="text-[#00BEDB]">API Portfolio</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            Commercializing three vital anti-infectives previously 100% imported into India: <strong>Fusidic Acid</strong>, <strong>Daptomycin</strong>, and <strong>Teicoplanin</strong>. Manufactured to EP, BP, and USP pharmacopeias with precision micronization and injectable-grade purity.
          </p>
        </div>
      </section>

      {/* Product Selection Tabs */}
      <section className="bg-gray-50 border-b border-gray-200 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start sm:justify-center overflow-x-auto no-scrollbar -mb-px space-x-2 sm:space-x-4 py-2">
            {products.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveTab(p.id)}
                className={`py-3 px-4 sm:px-6 text-xs sm:text-sm md:text-base font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 rounded-t-xl ${
                  activeTab === p.id
                    ? "border-[#00BEDB] text-[#002F3C] bg-white shadow-xs"
                    : "border-transparent text-gray-500 hover:text-[#002F3C] hover:border-gray-300"
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${activeTab === p.id ? "bg-[#00BEDB]" : "bg-gray-300"}`} />
                <span>{p.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium hidden md:inline-block ${
                  activeTab === p.id ? "bg-cyan-100 text-[#002F3C]" : "bg-gray-100 text-gray-600"
                }`}>
                  {p.badge}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Product Detail View */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left 2 Cols: Comprehensive Overview & Technical Data */}
          <div className="lg:col-span-2 space-y-10">
            {/* Header Box */}
            <div className="bg-[#E9F6F8] rounded-2xl p-8 border border-cyan-100 shadow-2xs">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#002F3C] text-cyan-300 uppercase tracking-wider mb-2">
                    {currentProduct.badge}
                  </span>
                  <h2 className="text-3xl font-extrabold text-[#002F3C]">
                    {currentProduct.name}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentProduct.pharmacopeia.map((std) => (
                    <span
                      key={std}
                      className="px-2.5 py-1 text-xs font-bold rounded-md bg-[#002F3C] text-white"
                    >
                      {std} Grade
                    </span>
                  ))}
                </div>
              </div>

              {/* Commercial Status Callout */}
              <div className="mb-4 p-3 rounded-xl bg-white/80 border border-cyan-200/80 text-xs text-[#002F3C] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Status: {currentProduct.commercialStatus}</span>
              </div>

              <p className="text-xs sm:text-sm font-mono text-cyan-900 mb-4 break-words">
                CAS No: <strong>{currentProduct.casNo}</strong> | Molecular Formula: <strong>{currentProduct.formula}</strong>
              </p>

              <div className="text-xs text-gray-500 mb-3 font-semibold uppercase tracking-wider">
                Therapeutic Class: {currentProduct.therapeuticCategory}
              </div>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-normal">
                {currentProduct.overview}
              </p>
            </div>

            {/* Market & Import Substitution Context */}
            <div className="bg-gradient-to-r from-cyan-900/5 via-cyan-900/10 to-transparent rounded-2xl p-6 border border-cyan-200/60">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#002F3C] text-cyan-300 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#002F3C] uppercase tracking-wider mb-1">
                    Market Opportunity &amp; Import Substitution
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {currentProduct.marketContext}
                  </p>
                </div>
              </div>
            </div>

            {/* Particle Size & Physical Form Focus */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-2xs">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 text-[#002F3C] flex items-center justify-center shrink-0 border border-cyan-200">
                  <svg className="w-6 h-6 text-[#002F3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#002F3C]">
                    Particle-Size Engineering &amp; Physical Specifications
                  </h3>
                  <p className="text-xs text-gray-500">
                    Tailored physical cuts for dermal permeation, ophthalmic suspension, or sterile lyophilization
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentProduct.particleSizeOptions.map((opt, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-800"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#00BEDB] shrink-0" />
                    <span>{opt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications & Formulations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-2xs">
                <h4 className="text-lg font-bold text-[#002F3C] mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Therapeutic Applications
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600">
                  {currentProduct.applications.map((app, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold shrink-0">✓</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-2xs">
                <h4 className="text-lg font-bold text-[#002F3C] mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00BEDB] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  Suitable Dosage Forms
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600">
                  {currentProduct.formulations.map((form, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#00BEDB] font-bold shrink-0">✓</span>
                      <span>{form}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Competitive Strengths */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-2xs">
              <h4 className="text-lg font-bold text-[#002F3C] mb-4">
                Key Technical &amp; Operational Strengths
              </h4>
              <div className="space-y-2.5">
                {currentProduct.keyStrengths.map((str, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                    <span className="text-[#00BEDB] font-bold mt-0.5">▸</span>
                    <span>{str}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-2xs">
              <h3 className="text-xl font-bold text-[#002F3C] mb-4">
                Typical Pharmacopeial Specifications ({currentProduct.pharmacopeia.join(" / ")})
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <tbody>
                    {Object.entries(currentProduct.specifications).map(([key, val], idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-gray-50/70" : "bg-white"}
                      >
                        <td className="py-3 px-4 font-semibold text-gray-800 border-b border-gray-200 w-1/3 text-xs sm:text-sm">
                          {key}
                        </td>
                        <td className="py-3 px-4 text-gray-600 border-b border-gray-200 font-mono text-xs sm:text-sm">
                          {val}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Col: Commercial Action & Fermac Bio Value Proposition */}
          <div className="space-y-6">
            {/* Quick Action Card */}
            <div className="bg-gradient-to-br from-[#002F3C] to-[#004859] rounded-2xl p-7 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-2">Request Specification &amp; Samples</h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Connect with our technical sales team for Certificate of Analysis (CoA), custom particle sizing, and regulatory DMF/CEP dossiers.
              </p>

              <div className="space-y-3">
                <Link
                  href={`/contact?product=${encodeURIComponent(currentProduct.name)}&action=request-spec`}
                  className="block w-full py-3.5 px-4 rounded-xl bg-[#00BEDB] hover:bg-[#00aebd] text-[#002F3C] font-bold text-center transition-colors shadow-md text-sm"
                >
                  Request Technical Spec Sheet
                </Link>

                <Link
                  href={`/contact?product=${encodeURIComponent(currentProduct.name)}&action=sample-request`}
                  className="block w-full py-3.5 px-4 rounded-xl border border-white/60 hover:bg-white hover:text-[#002F3C] text-white font-bold text-center transition-colors text-sm"
                >
                  Request Commercial Sample
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-cyan-800/80 text-xs text-gray-300 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#00BEDB]">✓</span> WHO-cGMP &amp; Global Regulatory Conformance
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00BEDB]">✓</span> Custom Micronization &amp; Particle Sieve Profiles
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00BEDB]">✓</span> Backed by 340 kL+ Bioreactor Infrastructure
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00BEDB]">✓</span> 100% Zero Liquid Discharge (ZLD) Facility
                </div>
              </div>
            </div>

            {/* Why Fermac Bio Box */}
            <div className="bg-[#E9F6F8] rounded-2xl p-7 border border-cyan-100">
              <h4 className="text-lg font-bold text-[#002F3C] mb-3">
                The Fermac Bio Advantage
              </h4>
              <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                India&rsquo;s first dedicated fermentation anti-infective manufacturer. Our integrated bioprocessing plant at Shivampet (Medak) combines high-yield proprietary strains with automated downstream purification to hold ~80% gross margins while replacing 100% of imported demand.
              </p>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00BEDB]" />
                  Controlled particle size distribution (D90 &lt; 10 µm)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00BEDB]" />
                  Stringent microbial limit controls &amp; endotoxin testing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00BEDB]" />
                  Strategic distribution alliance with Fleming Laboratories
                </li>
              </ul>
            </div>

            {/* Contact Support Hotline */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
              <p className="text-xs text-gray-500 mb-1">Direct Technical &amp; Commercial Inquiries</p>
              <p className="text-base font-bold text-[#002F3C]">sales@fermacbio.in</p>
              <p className="text-xs text-gray-400 mt-1">Response within 24 business hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fermac Bio Manufacturer Statement Section */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#002F3C] mb-4">
            India&rsquo;s First Domestic Anti-Infective Fermentation Platform
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
            With ~INR 660 Mn invested in our state-of-the-art facility at Shivampet, Medak, Fermac Bio stands as India’s first domestic manufacturer for three critical fermentation-based APIs: Fusidic Acid, Daptomycin, and Teicoplanin.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
            Combining over 25 years of founding fermentation mastery with strategic investor partnerships like Fleming Laboratories, we deliver superior purity, dependable supply security, and customized particle engineering for global formulation leaders.
          </p>
          <div className="inline-block px-6 py-2.5 rounded-full bg-cyan-100 text-[#002F3C] font-semibold text-xs sm:text-sm tracking-wide">
            Fermac Bio — Purity. Precision. Biotechnological Self-Reliance.
          </div>
        </div>
      </section>
    </div>
  );
}
