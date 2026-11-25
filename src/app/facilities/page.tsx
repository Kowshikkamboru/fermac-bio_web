import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import InfrastructureMarketSection from "@/components/InfrastructureMarketSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Manufacturing Infrastructure | FERMAC BIO - 25,000 sq. m. Biomanufacturing Campus",
  description:
    "Explore Fermac Bio's 5-acre, 25,000 sq. m. integrated biomanufacturing campus near Hyderabad in Medak District: 6 × 33 KL Block A fermenters (3 operational), SCADA automation, Pharma Block with ANFDs, GMP Warehouse & Cold Room, Utilities, and 100% Zero Liquid Discharge (Bio-ETP, RO, MEE, ATFD).",
};

export default function FacilitiesPage() {
  const fermentationCapabilities = [
    "Integrated manufacturing block equipped with advanced cell culture lab, fermentation, and downstream processing facilities designed for efficient, scalable, and compliant manufacturing.",
    "State-of-the-art Culture Laboratory with modern biosafety infrastructure, microbial preservation systems, and specialized equipment for handling, inoculum preparation, and process development.",
    "Comprehensive fermentation seed train, supported by dedicated feed preparation systems, enabling seamless scale-up from laboratory cultures to commercial production with minimal contamination risks.",
    "Downstream Processing (DSP) section equipped with advanced continuous biomass decantation, extraction, concentration, and efficient solvent recovery systems for high yields.",
    "Automation of process controls (SCADA) and material handling, minimizing human interference.",
  ];

  const utilitiesList = [
    "Oil-free compressed air compressors",
    "Chillers and brine chillers",
    "Cooling towers",
    "Steam boilers",
    "Vacuum systems",
    "Process water systems",
    "1000 kVA diesel generator for uninterrupted power supply",
    "Fully integrated utility distribution and monitoring systems",
  ];

  const utilityPhotos = [
    {
      label: "AIR COMPRESSORS",
      src: "/images/deck/air-compressors.jpg",
      alt: "Oil-free compressed air compressors",
    },
    {
      label: "CHILLERS",
      src: "/images/WhatsApp Image 2026-10-23 at 9.53.36 AM (2).jpeg",
      alt: "Industrial chillers and brine chillers",
    },
    {
      label: "STEAM BOILERS",
      src: "/images/WhatsApp Image 2026-10-23 at 9.53.37 AM.jpeg",
      alt: "Industrial steam boilers",
    },
    {
      label: "COOLING TOWERS",
      src: "/images/deck/cooling-towers.jpg",
      alt: "Plant cooling towers",
    },
    {
      label: "DG SET",
      src: "/images/WhatsApp Image 2026-10-23 at 9.53.38 AM (2).jpeg",
      alt: "1000 kVA diesel generator set",
    },
  ];

  const zldPhotos = [
    {
      label: "RO PLANT",
      src: "/images/WhatsApp Image 2026-10-23 at 9.53.18 AM (1).jpeg",
      alt: "Reverse Osmosis (RO) water recovery plant",
    },
    {
      label: "BIO ETP",
      src: "/images/WhatsApp Image 2026-10-23 at 9.53.18 AM.jpeg",
      alt: "Biological Effluent Treatment Plant (Bio-ETP)",
    },
    {
      label: "MEE PLANT",
      src: "/images/WhatsApp Image 2026-10-23 at 9.53.19 AM.jpeg",
      alt: "Multiple Effect Evaporator (MEE) system",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* Hero Section with Slide 7 Campus Panorama */}
        <section className="relative bg-[#02111d] text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-25 pointer-events-none">
            <Image
              src="/images/deck/facility-panorama.jpg"
              alt="FERMAC Bio Biomanufacturing Campus Panorama"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#02111d]/90 via-[#002F3C]/85 to-[#002F3C] pointer-events-none" />

          <div className="max-w-5xl mx-auto text-center relative z-10 pt-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-[#00BEDB] animate-pulse" />
              Medak District near Hyderabad • 5-Acre Integrated Campus
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Facility &amp; <span className="text-[#00BEDB]">Capability</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
              A 25,000 sq. m. integrated biomanufacturing facility (Block A operational; second block planned for expansion) featuring 6 × 33 KL production fermenters, comprehensive utilities, GMP warehousing, and 100% Zero Liquid Discharge.
            </p>
          </div>
        </section>

        {/* Slide 7 Facility Fast-Facts Ribbon */}
        <section className="bg-white border-b border-gray-100 py-10 relative z-20 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5 text-center">
              <div className="p-4 rounded-2xl bg-[#E9F6F8] border border-cyan-100">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#002F3C]">25,000 sq. m.</div>
                <div className="text-xs text-gray-600 font-semibold mt-1">Integrated Facility</div>
                <div className="text-[11px] text-gray-500">Block A Operational</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#E9F6F8] border border-cyan-100">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#00BEDB]">6 × 33 KL</div>
                <div className="text-xs text-gray-600 font-semibold mt-1">Block A Fermenters</div>
                <div className="text-[11px] text-gray-500">350 KL Scalable Site</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#E9F6F8] border border-cyan-100">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">3</div>
                <div className="text-xs text-gray-600 font-semibold mt-1">Operational Fermenters</div>
                <div className="text-[11px] text-gray-500">3 Planned for Expansion</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#E9F6F8] border border-cyan-100">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#002F3C]">5 Acres</div>
                <div className="text-xs text-gray-600 font-semibold mt-1">Campus Site</div>
                <div className="text-[11px] text-gray-500">Medak Dist., Hyderabad</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#E9F6F8] border border-cyan-100 col-span-2 md:col-span-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">100% ZLD</div>
                <div className="text-xs text-gray-600 font-semibold mt-1">Zero Liquid Discharge</div>
                <div className="text-[11px] text-gray-500">Bio-ETP · RO · MEE · ATFD</div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure & Market Opportunity Section */}
        <InfrastructureMarketSection showInfrastructureLink={false} />

        {/* Slide 8: Fermentation & Culture Lab */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="text-xs font-bold text-[#00BEDB] uppercase tracking-[0.2em]">
                Facility • Upstream &amp; Downstream
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#002F3C] tracking-tight">
                Fermentation &amp; Culture Lab
              </h2>
              <ul className="space-y-3.5 pt-2">
                {fermentationCapabilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                    <span className="w-6 h-6 rounded-full bg-[#001a24] text-[#00BEDB] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 gap-5">
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-gray-200 group">
                <Image
                  src="/images/deck/fermentation-battery.jpg"
                  alt="Fermentation Battery at FERMAC Bio"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#02111d]/90 text-white border border-white/15">
                    Fermentation Battery
                  </span>
                </div>
              </div>

              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-gray-200 group">
                <Image
                  src="/images/WhatsApp Image 2026-11-11 at 2.08.46 PM (1).jpeg"
                  alt="Culture Lab with Incubator Shakers and Biosafety Systems"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#02111d]/90 text-white border border-white/15">
                    Culture Lab
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 9: Pharma Block & ANFD */}
        <section className="py-16 sm:py-20 bg-[#fbfcfd] border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="text-xs font-bold text-[#00BEDB] uppercase tracking-[0.2em]">
                  Facility • Classified Finishing
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#002F3C] tracking-tight">
                  Pharma Block
                </h2>
                <p className="text-base text-gray-600 leading-relaxed font-light">
                  The Pharma Block is equipped with dedicated process equipment designed for crystallization, filtration, drying, and powder processing.
                </p>
                <p className="text-base text-gray-600 leading-relaxed font-light">
                  The facility houses dedicated crystallizers and Agitated Nutsche Filter Dryers (ANFDs) in a classified area to support efficient product isolation and powder processing.
                </p>

                <div className="pt-2">
                  <div className="text-xs font-bold text-[#002F3C] uppercase tracking-wider mb-3">
                    Process Capabilities
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["Crystallization", "Filtration", "Drying", "Powder processing"].map((cap) => (
                      <div
                        key={cap}
                        className="px-4 py-3 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm font-bold text-[#002F3C] text-center shadow-2xs"
                      >
                        {cap}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="relative h-60 rounded-2xl overflow-hidden shadow-md border border-gray-200 group">
                  <Image
                    src="/images/deck/pharma-block.jpg"
                    alt="FERMAC Bio Pharma Block Facility"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#02111d]/90 text-white border border-white/15">
                      Pharma Block
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-md border border-gray-200 group">
                    <Image
                      src="/images/deck/crystallizer.jpg"
                      alt="Classified Crystallizer Suite"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#02111d]/90 text-white border border-white/15">
                        Crystallizer
                      </span>
                    </div>
                  </div>

                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-md border border-gray-200 group">
                    <Image
                      src="/images/WhatsApp Image 2026-11-11 at 2.08.48 PM (1).jpeg"
                      alt="Agitated Nutsche Filter Dryer (ANFD)"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#02111d]/90 text-white border border-white/15">
                        ANFD
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 10: Warehouse & Cold Room */}
        <section className="py-16 sm:py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div className="text-xs font-bold text-[#00BEDB] uppercase tracking-[0.2em]">
                  Facility • Storage &amp; Handling
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#002F3C] tracking-tight">
                  GMP Warehouse &amp; Cold Room
                </h2>
                <p className="text-base text-gray-600 leading-relaxed font-light">
                  A modern GMP-compliant warehouse with dedicated ambient and cold storage facilities, ensuring the safe handling, storage, and distribution of raw materials, intermediates, and APIs.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                  {[
                    "GMP-compliant",
                    "Ambient storage",
                    "Cold storage",
                    "Raw materials",
                    "Intermediates",
                    "APIs",
                  ].map((tag) => (
                    <div
                      key={tag}
                      className="px-3 py-2.5 rounded-xl bg-[#fbfcfd] border border-gray-200 text-xs font-bold text-[#002F3C] text-center"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-8 space-y-4">
                  <div className="relative h-56 rounded-2xl overflow-hidden shadow-md border border-gray-200 group">
                    <Image
                      src="/images/WhatsApp Image 2026-11-11 at 1.59.24 PM.jpeg"
                      alt="GMP-Compliant Ambient Warehouse Storage"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#02111d]/90 text-white border border-white/15">
                        GMP Warehouse Interior
                      </span>
                    </div>
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-md border border-gray-200 group">
                    <Image
                      src="/images/WhatsApp Image 2026-10-23 at 9.53.43 AM.jpeg"
                      alt="Warehouse Block Exterior"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#02111d]/90 text-white border border-white/15">
                        Warehouse Facility
                      </span>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4 relative h-72 sm:h-full min-h-[280px] rounded-2xl overflow-hidden shadow-md border border-gray-200 group">
                  <Image
                    src="/images/deck/cold-room.jpg"
                    alt="Temperature-Controlled Cold Room"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#02111d]/90 text-white border border-white/15">
                      Cold Room
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 11: Utilities (All 5 Labeled Photos + 8 Capabilities) */}
        <section className="py-16 sm:py-20 bg-[#fbfcfd] border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <div className="text-xs font-bold text-[#00BEDB] uppercase tracking-[0.2em] mb-2">
                Facility • Continuous Plant Support
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#002F3C] tracking-tight mb-3">
                Utilities Infrastructure
              </h2>
              <p className="text-base text-gray-600 leading-relaxed font-light">
                Manufacturing is supported by a robust utility infrastructure designed to ensure reliable, efficient, and uninterrupted operations.
              </p>
            </div>

            {/* 5 Labeled Utility Photos (Slide 11) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
              {utilityPhotos.map((photo) => (
                <div
                  key={photo.label}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xs group"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                    <div className="absolute bottom-2.5 left-2.5">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#02111d]/90 text-white border border-white/15">
                        {photo.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 8 Utility Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {utilitiesList.map((util, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-gray-200 flex items-start gap-3 shadow-2xs"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00BEDB] mt-2 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-[#002F3C] leading-snug">
                    {util}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Slide 12: Effluent Treatment (ZLD) */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-[0.2em]">
                  Facility • Sustainability
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#002F3C] tracking-tight">
                  Effluent Treatment (ZLD)
                </h2>
                <p className="text-base text-gray-600 leading-relaxed font-light">
                  Fermac is committed to environmentally responsible manufacturing through a comprehensive Zero Liquid Discharge (ZLD) system equipped with a Biological Effluent Treatment Plant (Bio-ETP), RO system, Multiple Effect Evaporator (MEE), and Agitated Thin Film Dryer (ATFD) to treat, recover, and reuse water.
                </p>

                {/* Treatment Train */}
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    Treatment Train
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {["Bio-ETP", "RO system", "MEE", "ATFD", "Recover & reuse"].map((step, idx, arr) => (
                      <React.Fragment key={step}>
                        <span className="px-3.5 py-2 rounded-xl bg-[#E9F6F8] border border-cyan-200 text-xs font-bold text-[#002F3C]">
                          {step}
                        </span>
                        {idx < arr.length - 1 && (
                          <span className="text-[#00BEDB] font-bold">&rarr;</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  This integrated system minimizes environmental impact, conserves water resources, ensures compliance with environmental regulations, and supports sustainable pharmaceutical manufacturing.
                </p>
              </div>

              {/* 3 Labeled ZLD Photos (Slide 12) */}
              <div className="lg:col-span-6 grid grid-cols-12 gap-4">
                <div className="col-span-7 space-y-4">
                  {zldPhotos.slice(0, 2).map((photo) => (
                    <div
                      key={photo.label}
                      className="relative h-52 rounded-2xl overflow-hidden shadow-md border border-gray-200 group"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 60vw, 30vw"
                      />
                      <div className="absolute bottom-3 left-3">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#02111d]/90 text-white border border-white/15">
                          {photo.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="col-span-5 relative h-full min-h-[260px] rounded-2xl overflow-hidden shadow-md border border-gray-200 group">
                  <Image
                    src={zldPhotos[2].src}
                    alt={zldPhotos[2].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 40vw, 20vw"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[#02111d]/90 text-white border border-white/15">
                      {zldPhotos[2].label}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Plant Inspection & Audit CTA */}
            <div className="mt-16 bg-gradient-to-r from-[#002F3C] to-[#004859] rounded-2xl p-10 sm:p-14 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                  Schedule a Technical Audit or Facility Tour
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  We welcome regulatory audits and technical vendor assessments by pharmaceutical qualification teams. Contact our plant team to coordinate an on-site walkthrough in Medak District.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link
                  href="/rnd/pics"
                  className="whitespace-nowrap px-6 py-4 rounded-xl border border-white/30 hover:bg-white/10 text-white font-semibold text-sm transition-colors"
                >
                  View Full Gallery
                </Link>
                <Link
                  href="/contact"
                  className="whitespace-nowrap px-8 py-4 rounded-xl bg-[#00BEDB] hover:bg-[#00aebd] text-[#002F3C] font-bold text-sm shadow-lg transition-transform hover:scale-105"
                >
                  Contact Facility QA Team &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
