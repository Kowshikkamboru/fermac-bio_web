"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [infraDropdown, setInfraDropdown] = useState(false);
  const [mobileInfraOpen, setMobileInfraOpen] = useState(false);

  const pathname = usePathname();
  const infraTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close mobile drawer on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
    setMobileInfraOpen(false);
  }

  const handleInfraEnter = () => {
    if (infraTimeoutRef.current) clearTimeout(infraTimeoutRef.current);
    setInfraDropdown(true);
  };

  const handleInfraLeave = () => {
    infraTimeoutRef.current = setTimeout(() => {
      setInfraDropdown(false);
    }, 180);
  };

  const isHomeActive = pathname === "/";
  const isInfraActive = pathname.startsWith("/facilities") || pathname.startsWith("/rnd");
  const isProductsActive = pathname.startsWith("/products");
  const isContactActive = pathname.startsWith("/contact");

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

          {/* Desktop Center Navigation Links (Reduced to 4 core items) */}
          <div className="hidden lg:flex items-center justify-center space-x-7 xl:space-x-10">
            {/* 1. HOME (Combines Home & About Us) */}
            <Link
              href="/"
              className={`text-sm xl:text-[15px] font-semibold tracking-wider transition-colors duration-200 py-1 ${
                isHomeActive ? "text-[#00BEDB] border-b-2 border-[#00BEDB]" : "text-[#484848] hover:text-[#002F3C]"
              }`}
            >
              HOME
            </Link>

            {/* 2. INFRASTRUCTURE (Main menu redirects to /facilities, sub-menu redirects to /rnd/api) */}
            <div
              className="relative py-2 group"
              onMouseEnter={handleInfraEnter}
              onMouseLeave={handleInfraLeave}
            >
              <div className="flex items-center gap-1">
                <Link
                  href="/facilities"
                  className={`text-sm xl:text-[15px] font-semibold tracking-wider transition-colors duration-200 py-1 ${
                    isInfraActive ? "text-[#00BEDB] border-b-2 border-[#00BEDB]" : "text-[#484848] hover:text-[#002F3C]"
                  }`}
                >
                  INFRASTRUCTURE
                </Link>
                <button
                  type="button"
                  onClick={() => setInfraDropdown((prev) => !prev)}
                  className="p-1 text-[#484848] hover:text-[#002F3C] cursor-pointer focus:outline-none"
                  aria-label="Toggle Infrastructure sub menu"
                  aria-expanded={infraDropdown}
                >
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      infraDropdown ? "rotate-180 text-[#00BEDB]" : "group-hover:rotate-180 group-hover:text-[#00BEDB]"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Infrastructure Dropdown Menu (Advanced R&D sub menu) */}
              <div
                className={`absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 py-2.5 z-50 transition-all duration-200 ${
                  infraDropdown ? "block" : "hidden group-hover:block"
                }`}
                onMouseEnter={handleInfraEnter}
                onMouseLeave={handleInfraLeave}
              >
                {/* Main: Manufacturing Facilities */}
                <Link
                  href="/facilities"
                  onClick={() => setInfraDropdown(false)}
                  className="flex items-start gap-3 px-4 py-3 text-xs sm:text-sm text-gray-700 hover:bg-cyan-50/80 hover:text-[#002F3C] transition-colors group/item"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-100/70 text-[#002F3C] flex items-center justify-center shrink-0 group-hover/item:bg-[#00BEDB] group-hover/item:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 group-hover/item:text-[#002F3C] flex items-center gap-1.5">
                      Manufacturing Facilities
                      <span className="text-[10px] uppercase font-bold text-cyan-700 bg-cyan-100/70 px-1.5 py-0.5 rounded">340 kL+</span>
                    </div>
                    <div className="text-[11px] text-gray-500 mt-0.5">Bioreactor cascades, cleanrooms & ANFD suites</div>
                  </div>
                </Link>

                <div className="h-px bg-gray-100 my-1 mx-3" />

                {/* Sub Menu: Advanced R&D (Redirects to /rnd/api) */}
                <Link
                  href="/rnd/api"
                  onClick={() => setInfraDropdown(false)}
                  className="flex items-start gap-3 px-4 py-3 text-xs sm:text-sm text-gray-700 hover:bg-cyan-50/80 hover:text-[#002F3C] transition-colors group/item"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-100/70 text-[#002F3C] flex items-center justify-center shrink-0 group-hover/item:bg-[#00BEDB] group-hover/item:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 group-hover/item:text-[#002F3C] flex items-center gap-1.5">
                      Advanced R&amp;D
                      <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">Sub Menu</span>
                    </div>
                    <div className="text-[11px] text-gray-500 mt-0.5">Strain selection, bioprocess kinetics & analytical testing</div>
                  </div>
                </Link>

                {/* Facility & Lab PICS */}
                <Link
                  href="/rnd/pics"
                  onClick={() => setInfraDropdown(false)}
                  className="flex items-start gap-3 px-4 py-3 text-xs sm:text-sm text-gray-700 hover:bg-cyan-50/80 hover:text-[#002F3C] transition-colors group/item"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-100/70 text-[#002F3C] flex items-center justify-center shrink-0 group-hover/item:bg-[#00BEDB] group-hover/item:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 group-hover/item:text-[#002F3C]">Facility &amp; Lab PICS</div>
                    <div className="text-[11px] text-gray-500 mt-0.5">Interactive plant, cleanroom & lab photo tour</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* 3. PRODUCTS */}
            <Link
              href="/products"
              className={`text-sm xl:text-[15px] font-semibold tracking-wider transition-colors duration-200 py-1 ${
                isProductsActive ? "text-[#00BEDB] border-b-2 border-[#00BEDB]" : "text-[#484848] hover:text-[#002F3C]"
              }`}
            >
              PRODUCTS
            </Link>

            {/* 4. CONTACT US */}
            <Link
              href="/contact"
              className={`text-sm xl:text-[15px] font-semibold tracking-wider transition-colors duration-200 py-1 ${
                isContactActive ? "text-[#00BEDB] border-b-2 border-[#00BEDB]" : "text-[#484848] hover:text-[#002F3C]"
              }`}
            >
              CONTACT US
            </Link>
          </div>

          {/* Right Action: Highlighted Contact / Audit Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className={`px-5 py-2.5 rounded-xl text-white font-semibold text-sm tracking-wide shadow-sm hover:shadow-md transition-all hover:scale-105 ${
                isContactActive
                  ? "bg-[#002F3C] ring-2 ring-[#00BEDB]"
                  : "bg-[#00BEDB] hover:bg-[#00aebd]"
              }`}
            >
              SCHEDULE AUDIT
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

      {/* Mobile Drawer Menu (4 items matching desktop) */}
      {open && (
        <div className="lg:hidden bg-white w-full border-t border-gray-100 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            {/* 1. Mobile Home */}
            <Link
              href="/"
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                isHomeActive ? "bg-cyan-50 text-[#00BEDB]" : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              HOME
            </Link>

            {/* 2. Mobile Infrastructure (Main redirects to /facilities, sub menu redirects to /rnd/api) */}
            <div className="border border-gray-100 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2.5 bg-gray-50/50">
                <Link
                  href="/facilities"
                  className={`flex-1 text-base font-semibold ${
                    isInfraActive ? "text-[#00BEDB]" : "text-gray-800"
                  }`}
                >
                  INFRASTRUCTURE
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileInfraOpen((prev) => !prev)}
                  className="p-2 text-gray-500 hover:text-[#00BEDB]"
                  aria-label="Toggle Infrastructure sub menu"
                >
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${mobileInfraOpen ? "rotate-180 text-[#00BEDB]" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {mobileInfraOpen && (
                <div className="pl-4 pr-3 py-2 space-y-1.5 bg-white border-t border-gray-100">
                  <Link
                    href="/facilities"
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-[#00BEDB] rounded-lg hover:bg-gray-50 font-medium"
                  >
                    Manufacturing Facilities (340 kL+)
                  </Link>
                  <Link
                    href="/rnd/api"
                    className="flex items-center justify-between px-3 py-2 text-sm text-gray-900 hover:text-[#00BEDB] rounded-lg bg-cyan-50/50 font-semibold"
                  >
                    <span>Advanced R&amp;D</span>
                    <span className="text-[10px] text-emerald-700 bg-emerald-100/80 px-1.5 py-0.5 rounded font-bold">Sub Menu</span>
                  </Link>
                  <Link
                    href="/rnd/pics"
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-[#00BEDB] rounded-lg hover:bg-gray-50 font-medium"
                  >
                    Facility &amp; Lab PICS (Photo Tour)
                  </Link>
                </div>
              )}
            </div>

            {/* 3. Mobile Products */}
            <Link
              href="/products"
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                isProductsActive ? "bg-cyan-50 text-[#00BEDB]" : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              PRODUCTS
            </Link>

            {/* 4. Mobile Contact Us */}
            <Link
              href="/contact"
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                isContactActive ? "bg-cyan-50 text-[#00BEDB]" : "text-gray-800 hover:bg-gray-50"
              }`}
            >
              CONTACT US
            </Link>

            {/* Mobile Action Button */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="block text-center px-4 py-3 rounded-xl bg-[#00BEDB] text-white font-bold text-base shadow-md hover:bg-[#00aebd] transition-colors"
              >
                SCHEDULE FACILITY AUDIT
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
