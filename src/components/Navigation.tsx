"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [rndDropdown, setRndDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [mobileRndOpen, setMobileRndOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const pathname = usePathname();
  const rndTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close mobile drawer on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
    setMobileRndOpen(false);
    setMobileAboutOpen(false);
  }

  const handleRndEnter = () => {
    if (rndTimeoutRef.current) clearTimeout(rndTimeoutRef.current);
    setRndDropdown(true);
  };

  const handleRndLeave = () => {
    rndTimeoutRef.current = setTimeout(() => {
      setRndDropdown(false);
    }, 180);
  };

  const handleAboutEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
    setAboutDropdown(true);
  };

  const handleAboutLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setAboutDropdown(false);
    }, 180);
  };

  const isRndActive = pathname.startsWith("/rnd");
  const isAboutActive = pathname === "/about" || pathname === "/directors";
  const isProductsActive = pathname.startsWith("/products");
  const isFacilitiesActive = pathname.startsWith("/facilities");
  const isSustainabilityActive = pathname.startsWith("/sustainability");
  const isContactActive = pathname.startsWith("/contact");
  const isHomeActive = pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-11 h-11 flex items-center justify-center mr-2 relative">
                <Image
                  src="/logo/LOGO.png"
                  alt="FERMAC BIO logo"
                  width={42}
                  height={42}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight">
                <div className="flex items-center gap-1">
                  <span
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: 1 }}
                    className="text-[#002F3C]"
                  >
                    FERMAC
                  </span>
                  <span
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: 1 }}
                    className="text-[#00BEDB]"
                  >
                    BIO
                  </span>
                </div>
                <span
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "11px", lineHeight: 1.2 }}
                  className="text-gray-500 mt-1"
                >
                  Miracles of Microbes
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Center Navigation Links */}
          <div className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8">
            {/* 1. Home */}
            <Link
              href="/"
              className={`text-sm xl:text-[15px] font-semibold tracking-wider transition-colors duration-200 py-1 ${
                isHomeActive ? "text-[#00BEDB] border-b-2 border-[#00BEDB]" : "text-[#484848] hover:text-[#002F3C]"
              }`}
            >
              HOME
            </Link>

            {/* 2. About Us Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <button
                type="button"
                className={`text-sm xl:text-[15px] font-semibold tracking-wider flex items-center gap-1 transition-colors duration-200 py-1 cursor-pointer ${
                  isAboutActive ? "text-[#00BEDB] border-b-2 border-[#00BEDB]" : "text-[#484848] hover:text-[#002F3C]"
                }`}
                aria-expanded={aboutDropdown}
              >
                ABOUT US
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdown ? "rotate-180 text-[#00BEDB]" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* About Us Dropdown Panel */}
              {aboutDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in z-50">
                  <Link
                    href="/about"
                    className="flex items-start gap-2.5 px-4 py-2.5 text-xs sm:text-sm text-gray-700 hover:bg-cyan-50 hover:text-[#002F3C] transition-colors"
                  >
                    <svg className="w-4 h-4 mt-0.5 text-[#00BEDB] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">Company Overview</div>
                      <div className="text-[11px] text-gray-500">Our mission, journey & milestones</div>
                    </div>
                  </Link>
                  <div className="h-px bg-gray-100 my-1 mx-3" />
                  <Link
                    href="/directors?tab=board"
                    className="flex items-start gap-2.5 px-4 py-2.5 text-xs sm:text-sm text-gray-700 hover:bg-cyan-50 hover:text-[#002F3C] transition-colors"
                  >
                    <svg className="w-4 h-4 mt-0.5 text-[#00BEDB] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">Board of Directors</div>
                      <div className="text-[11px] text-gray-500">Strategic governance & oversight</div>
                    </div>
                  </Link>
                  <Link
                    href="/directors?tab=management"
                    className="flex items-start gap-2.5 px-4 py-2.5 text-xs sm:text-sm text-gray-700 hover:bg-cyan-50 hover:text-[#002F3C] transition-colors"
                  >
                    <svg className="w-4 h-4 mt-0.5 text-[#00BEDB] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">Key Management Team</div>
                      <div className="text-[11px] text-gray-500">Operations, R&D & cGMP quality</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* 3. Products */}
            <Link
              href="/products"
              className={`text-sm xl:text-[15px] font-semibold tracking-wider transition-colors duration-200 py-1 ${
                isProductsActive ? "text-[#00BEDB] border-b-2 border-[#00BEDB]" : "text-[#484848] hover:text-[#002F3C]"
              }`}
            >
              PRODUCTS
            </Link>

            {/* 4. Advanced R&D Dropdown (Biocon style) */}
            <div
              className="relative py-2"
              onMouseEnter={handleRndEnter}
              onMouseLeave={handleRndLeave}
            >
              <button
                type="button"
                className={`text-sm xl:text-[15px] font-semibold tracking-wider flex items-center gap-1 transition-colors duration-200 py-1 cursor-pointer ${
                  isRndActive ? "text-[#00BEDB] border-b-2 border-[#00BEDB]" : "text-[#484848] hover:text-[#002F3C]"
                }`}
                aria-expanded={rndDropdown}
              >
                ADVANCED R&D
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${rndDropdown ? "rotate-180 text-[#00BEDB]" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Advanced R&D Dropdown Menu */}
              {rndDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in z-50">
                  <Link
                    href="/rnd/api"
                    className="flex items-start gap-3 px-4 py-3 text-xs sm:text-sm text-gray-700 hover:bg-cyan-50 hover:text-[#002F3C] transition-colors"
                  >
                    <svg className="w-5 h-5 mt-0.5 text-[#00BEDB] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">API R&D</div>
                      <div className="text-[11px] text-gray-500">Strain selection, kinetics & micronization</div>
                    </div>
                  </Link>

                  <div className="h-px bg-gray-100 my-1 mx-3" />

                  <Link
                    href="/rnd/pics"
                    className="flex items-start gap-3 px-4 py-3 text-xs sm:text-sm text-gray-700 hover:bg-cyan-50 hover:text-[#002F3C] transition-colors"
                  >
                    <svg className="w-5 h-5 mt-0.5 text-[#00BEDB] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <div className="font-semibold text-gray-900">Facility & Lab PICS</div>
                      <div className="text-[11px] text-gray-500">Interactive photo gallery & lab tour</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* 5. Leading Edge Facilities */}
            <Link
              href="/facilities"
              className={`text-sm xl:text-[15px] font-semibold tracking-wider transition-colors duration-200 py-1 ${
                isFacilitiesActive ? "text-[#00BEDB] border-b-2 border-[#00BEDB]" : "text-[#484848] hover:text-[#002F3C]"
              }`}
            >
              FACILITIES
            </Link>

            {/* 6. Sustainability */}
            <Link
              href="/sustainability"
              className={`text-sm xl:text-[15px] font-semibold tracking-wider transition-colors duration-200 py-1 ${
                isSustainabilityActive ? "text-[#00BEDB] border-b-2 border-[#00BEDB]" : "text-[#484848] hover:text-[#002F3C]"
              }`}
            >
              SUSTAINABILITY
            </Link>
          </div>

          {/* Right Action: Contact Us Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className={`px-5 py-2.5 rounded-lg text-white font-semibold text-sm tracking-wide shadow-sm hover:shadow-md transition-all hover:scale-105 ${
                isContactActive
                  ? "bg-[#002F3C] ring-2 ring-[#00BEDB]"
                  : "bg-[#00BEDB] hover:bg-[#00aebd]"
              }`}
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile menu toggle button */}
          <div className="lg:hidden flex items-center">
            <button
              aria-label="Toggle navigation menu"
              onClick={() => setOpen((s) => !s)}
              className="p-2 rounded-lg text-[#002F3C] hover:bg-gray-100 transition-colors"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="lg:hidden bg-white w-full border-t border-gray-100 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/"
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                isHomeActive ? "bg-cyan-50 text-[#00BEDB]" : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              HOME
            </Link>

            {/* Mobile About Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileAboutOpen((prev) => !prev)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold text-gray-800 hover:bg-gray-50"
              >
                <span>ABOUT US</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileAboutOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-gray-50/70 rounded-lg">
                  <Link
                    href="/about"
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-[#00BEDB]"
                  >
                    Company Overview
                  </Link>
                  <Link
                    href="/directors?tab=board"
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-[#00BEDB]"
                  >
                    Board of Directors
                  </Link>
                  <Link
                    href="/directors?tab=management"
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-[#00BEDB]"
                  >
                    Key Management Team
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Products */}
            <Link
              href="/products"
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                isProductsActive ? "bg-cyan-50 text-[#00BEDB]" : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              PRODUCTS (Fusidic Acid & Sodium Fusidate)
            </Link>

            {/* Mobile Advanced R&D Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileRndOpen((prev) => !prev)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold text-gray-800 hover:bg-gray-50"
              >
                <span>ADVANCED R&D</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileRndOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileRndOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-gray-50/70 rounded-lg">
                  <Link
                    href="/rnd/api"
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-[#00BEDB]"
                  >
                    API Research & Development
                  </Link>
                  <Link
                    href="/rnd/pics"
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-[#00BEDB]"
                  >
                    Facility & Lab PICS (Photo Tour)
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Leading Edge Facilities */}
            <Link
              href="/facilities"
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                isFacilitiesActive ? "bg-cyan-50 text-[#00BEDB]" : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              LEADING EDGE FACILITIES
            </Link>

            {/* Mobile Sustainability */}
            <Link
              href="/sustainability"
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                isSustainabilityActive ? "bg-cyan-50 text-[#00BEDB]" : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              SUSTAINABILITY
            </Link>

            {/* Mobile Contact */}
            <Link
              href="/contact"
              className="block mt-4 text-center px-4 py-3 rounded-xl bg-[#00BEDB] text-white font-bold text-base shadow-md"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
