"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#001318] text-white pt-14 pb-10 border-t border-white/10 overflow-hidden">
      {/* Subtle top edge highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-4xl h-px bg-gradient-to-r from-transparent via-[#00BEDB]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 items-start pb-12">
          {/* Column 1: Brand & Identity (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center group">
              <div className="mr-3 shrink-0">
                <Image
                  src="/logo/footer logo 1.svg"
                  alt="FERMAC BIO"
                  width={42}
                  height={42}
                  className="transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1.5">
                  <span className="text-white text-xl font-bold tracking-wide">FERMAC</span>
                  <span className="text-[#00BEDB] text-xl font-bold tracking-wide">BIO</span>
                </div>
                <span className="text-gray-400 text-xs font-medium tracking-wide">Miracles of Microbes</span>
              </div>
            </Link>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              India&rsquo;s dedicated domestic manufacturer of three critical fermentation-based anti-infective APIs: Fusidic Acid, Daptomycin, and Teicoplanin. Dedicated to national self-reliance and global healthcare standards.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-2.5 pt-1">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-[#00BEDB] text-gray-400 hover:text-[#00222b] rounded-lg border border-white/10 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <Image src="/icons/mage_linkedin.svg" alt="LinkedIn" width={18} height={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-[#00BEDB] text-gray-400 hover:text-[#00222b] rounded-lg border border-white/10 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                aria-label="X / Twitter"
              >
                <Image src="/icons/icon-park-outline_twitter.svg" alt="X / Twitter" width={18} height={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-[#00BEDB] text-gray-400 hover:text-[#00222b] rounded-lg border border-white/10 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <Image src="/icons/ri_instagram-fill.svg" alt="Instagram" width={18} height={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Company Navigation (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/90 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="text-gray-400 hover:text-white transition-colors inline-block">
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group">
                  <span>Careers</span>
                  <span className="text-[10px] font-semibold text-[#00BEDB] bg-[#00BEDB]/10 border border-[#00BEDB]/30 px-1.5 py-0.5 rounded leading-none">
                    Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-400 hover:text-white transition-colors inline-block">
                  Sustainability (ESG)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: API Pipeline (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/90 mb-4">
              API Pipeline
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/products#fusidic-acid" className="text-gray-400 hover:text-white transition-colors inline-block">
                  Fusidic Acid / Sodium
                </Link>
              </li>
              <li>
                <Link href="/products#daptomycin" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2">
                  <span>Daptomycin</span>
                
                </Link>
              </li>
              <li>
                <Link href="/products#teicoplanin" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2">
                  <span>Teicoplanin</span>
                  
                </Link>
              </li>
              <li>
                <Link href="/rnd/api" className="text-gray-400 hover:text-white transition-colors inline-block">
                  Advanced API R&amp;D
                </Link>
              </li>
              <li>
                <Link href="/rnd/pics" className="text-gray-400 hover:text-white transition-colors inline-block">
                  Lab &amp; Plant Gallery
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[#00BEDB] hover:text-cyan-300 transition-colors inline-flex items-center gap-1 font-medium pt-1">
                  <span>All Monographs</span>
                  <span>&rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Locations (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/90 mb-4">
              Connect &amp; Locations
            </h3>

            {/* Direct Contact */}
            <div className="space-y-2 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-md bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#00BEDB] mt-0.5">
                  <Image src="/icons/ic_baseline-phone.svg" alt="phone" width={13} height={13} />
                </div>
                <div className="text-xs leading-relaxed">
                  <div className="text-gray-400">Office: <a href="tel:+914024242999" className="text-gray-200 hover:text-[#00BEDB] transition-colors font-mono">+91 40 2424 2999</a></div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-md bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#00BEDB] mt-0.5">
                  <Image src="/icons/ic_twotone-email.svg" alt="email" width={13} height={13} />
                </div>
                <div className="text-xs leading-relaxed">
                  <div className="text-gray-400">Inquiries: <a href="mailto:info@fermacbio.in" className="text-gray-200 hover:text-[#00BEDB] transition-colors">info@fermacbio.in</a></div>
                  <div className="text-gray-400">Sales: <a href="mailto:sales@fermacbio.in" className="text-gray-200 hover:text-[#00BEDB] transition-colors">sales@fermacbio.in</a></div>
                </div>
              </div>
            </div>

            {/* Addresses */}
            <div className="pt-2 border-t border-white/10 space-y-3">
              <div>
                <div className="flex items-center justify-between text-xs font-medium text-white mb-0.5">
                  <span>Corporate HQ</span>
                  <a
                    href="https://maps.app.goo.gl/7VTSratuc3JnYiNV6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#00BEDB] hover:underline inline-flex items-center gap-0.5 font-normal"
                  >
                    <span>Maps</span>
                    <span>&rarr;</span>
                  </a>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Plot 08, 1st Fl, Dundigal, Hyderabad - 500 043
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-medium text-white mb-0.5">
                  <span>Manufacturing Facility</span>
                  <a
                    href="https://maps.app.goo.gl/bxL38GxmpFgtziTH8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#00BEDB] hover:underline inline-flex items-center gap-0.5 font-normal"
                  >
                    <span>Maps</span>
                    <span>&rarr;</span>
                  </a>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Sy. 273 &amp; 274, Shivampet, Medak - 502 334
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Clean & Minimal */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
            <p className="text-center sm:text-left">
              &copy; {new Date().getFullYear()} Fermac Bio Private Limited. All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
             
            
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
