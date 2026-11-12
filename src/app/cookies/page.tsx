import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | FERMAC BIO Private Limited",
  description: "Learn about the cookies and local storage mechanisms used by Fermac Bio Private Limited to optimize web performance and user experience.",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* Header Hero */}
        <section className="relative bg-gradient-to-b from-[#002F3C] via-[#003847] to-[#004859] text-white pt-36 pb-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00BEDB_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-5">
              Privacy & Preferences
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Cookie <span className="text-[#00BEDB]">Policy</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
              Transparent disclosure on how Fermac Bio utilizes cookies and browser storage to optimize site functionality.
            </p>
          </div>
        </section>

        {/* Content Body */}
        <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-8 leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#002F3C] mb-3">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device by websites that you visit. They are widely used to make websites work efficiently, store user preferences, and provide aggregated analytics to site administrators.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#002F3C] mb-3">2. How Fermac Bio Uses Cookies</h2>
            <p className="mb-3">We use cookies and localStorage exclusively for functional and technical optimization:</p>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <h3 className="font-bold text-[#002F3C] text-sm">Essential & Functional Storage</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Enables core website operations such as remembering your cookie consent decisions (<span className="font-mono text-cyan-700">fermac_cookie_consent</span>) and custom microscope cursor preferences.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <h3 className="font-bold text-[#002F3C] text-sm">Performance & Analytics</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Helps us understand aggregated traffic patterns, page load speeds, and geographic distribution of commercial inquiries to improve user experience.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#002F3C] mb-3">3. Managing Your Cookie Choices</h2>
            <p>
              You can modify your cookie settings or clear stored cookies at any time via your browser settings. Disabling essential cookies may impair certain interactive features of our website.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
            <Link href="/" className="text-xs font-bold text-[#002F3C] hover:text-[#00BEDB]">
              &larr; Return to Home
            </Link>
            <Link href="/privacy" className="text-xs font-bold text-[#002F3C] hover:text-[#00BEDB]">
              Privacy Policy &rarr;
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
