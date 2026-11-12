"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { facilityImages, FacilityImage } from "@/data/facilityImages";

export default function RndPicsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeImage, setActiveImage] = useState<FacilityImage | null>(null);

  const filteredImages =
    selectedCategory === "all"
      ? facilityImages
      : facilityImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* Header */}
        <section className="relative bg-gradient-to-b from-[#002F3C] via-[#003847] to-[#004859] text-white pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00BEDB_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-[#00BEDB] animate-pulse" />
              Advanced R&D • Infrastructure Gallery
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Facility & Lab <span className="text-[#00BEDB]">PICS</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
              Take a visual tour through our analytical testing laboratories, automated fermentation cascades, sterile cleanrooms, and industrial utility infrastructure.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-20 z-20 backdrop-blur-md bg-gray-50/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                { id: "all", label: "All Photos" },
                { id: "fermentation", label: "Fermentation Bioreactors" },
                { id: "lab", label: "Analytical & QC Lab" },
                { id: "cleanroom", label: "Cleanrooms & Biosafety" },
                { id: "utilities", label: "Utilities & Boilers" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    selectedCategory === tab.id
                      ? "bg-[#002F3C] text-white shadow-md shadow-cyan-950/20 scale-105"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-cyan-400 hover:text-[#00BEDB]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Image Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((img) => (
              <div
                key={img.id}
                onClick={() => setActiveImage(img)}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:border-cyan-300 transition-all duration-300 flex flex-col cursor-pointer"
              >
                <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#002F3C]/90 text-cyan-300 backdrop-blur-sm">
                      {img.categoryLabel}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-white/90 text-[#002F3C] text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      🔍 Click to Enlarge
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-[#002F3C] group-hover:text-[#00BEDB] transition-colors mb-2">
                      {img.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {img.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] font-medium text-cyan-800 flex items-center gap-1">
                    <span>Fermac Bio Manufacturing Campus</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick R&D Navigation Link */}
          <div className="mt-16 text-center">
            <Link
              href="/rnd/api"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#002F3C] hover:bg-[#004859] text-white font-semibold text-sm transition-colors shadow-md"
            >
              ← Explore Detailed API R&D Capabilities
            </Link>
          </div>
        </section>

        {/* Modal Lightbox */}
        {activeImage && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#002F3C] text-white rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/30 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors text-xl font-bold cursor-pointer"
                aria-label="Close image modal"
              >
                ✕
              </button>

              {/* Image Preview */}
              <div className="relative w-full h-[65vh] bg-black/50">
                <Image
                  src={activeImage.src}
                  alt={activeImage.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 85vw"
                  priority
                />
              </div>

              {/* Image Caption & Details */}
              <div className="p-6 bg-[#002F3C] border-t border-cyan-900/50">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">
                    {activeImage.title}
                  </h3>
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-[#00BEDB] text-[#002F3C]">
                    {activeImage.categoryLabel}
                  </span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {activeImage.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
