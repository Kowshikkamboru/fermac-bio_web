"use client";

import React from "react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [infraDropdown, setInfraDropdown] = useState(false);
  const [mobileInfraOpen, setMobileInfraOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const infraTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
    setMobileInfraOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleInfraEnter = () => {
    if (infraTimeoutRef.current) clearTimeout(infraTimeoutRef.current);
    setInfraDropdown(true);
  };

  const handleInfraLeave = () => {
    infraTimeoutRef.current = setTimeout(() => setInfraDropdown(false), 180);
  };

  const isHomeActive = pathname === "/";
  const isInfraActive = pathname.startsWith("/facilities") || pathname.startsWith("/rnd");
  const isProductsActive = pathname.startsWith("/products");
  const isContactActive = pathname.startsWith("/contact");
  const isOnHeroPage = pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled || !isOnHeroPage
          ? "bg-white/98 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src="/logo/LOGO.png"
                alt="FERMAC BIO"
                width={40}
                height={40}
                className="rounded-full object-cover"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight">
              <div className="flex items-baseline gap-1">
                <span
                  className={`font-black tracking-tight text-xl transition-colors ${
                    scrolled || !isOnHeroPage ? "text-[#001a24]" : "text-white"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  FERMAC
                </span>
                <span className="font-black tracking-tight text-xl text-[#00BEDB]" style={{ fontFamily: "Inter, sans-serif" }}>
                  BIO
                </span>
              </div>
              <span
                className={`text-[10px] font-medium tracking-[0.15em] uppercase transition-colors ${
                  scrolled || !isOnHeroPage ? "text-gray-400" : "text-white/50"
                }`}
              >
                Miracles of Microbes
              </span>
            </div>
          </Link>

          {/* Desktop nav links: Home, Infrastructure, Products, Contact Us */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                isHomeActive
                  ? "text-[#00BEDB]"
                  : scrolled || !isOnHeroPage
                  ? "text-gray-600 hover:text-[#001a24]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Home
            </Link>

            {/* Infrastructure dropdown */}
            <div className="relative" onMouseEnter={handleInfraEnter} onMouseLeave={handleInfraLeave}>
              <div className="flex items-center gap-1">
                <Link
                  href="/facilities"
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isInfraActive
                      ? "text-[#00BEDB]"
                      : scrolled || !isOnHeroPage
                      ? "text-gray-600 hover:text-[#001a24]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  Infrastructure
                </Link>
                <button
                  type="button"
                  onClick={() => setInfraDropdown((prev) => !prev)}
                  className={`p-0.5 transition-colors ${
                    scrolled || !isOnHeroPage ? "text-gray-500" : "text-white/60"
                  }`}
                  aria-label="Toggle Infrastructure submenu"
                >
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${infraDropdown ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <div
                className={`absolute top-full left-0 mt-2 w-68 bg-white border border-gray-100 shadow-xl z-50 transition-all duration-200 ${
                  infraDropdown ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
                onMouseEnter={handleInfraEnter}
                onMouseLeave={handleInfraLeave}
              >
                {[
                  { href: "/facilities", label: "Manufacturing Facilities", sub: "25,000 sq. m. Campus · 6 × 33 KL Fermenters" },
                  { href: "/rnd/api", label: "Advanced R&D", sub: "Strain selection · Bioprocess kinetics" },
                  { href: "/rnd/pics", label: "Facility Gallery", sub: "Plant · Cleanroom · Lab photo tour" },
                ].map((item, i, arr) => (
                  <React.Fragment key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setInfraDropdown(false)}
                      className="flex flex-col px-5 py-3.5 hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-sm font-semibold text-gray-900">{item.label}</span>
                      <span className="text-xs text-gray-500 mt-0.5">{item.sub}</span>
                    </Link>
                    {i < arr.length - 1 && <div className="h-px bg-gray-100" />}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <Link
              href="/products"
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                isProductsActive
                  ? "text-[#00BEDB]"
                  : scrolled || !isOnHeroPage
                  ? "text-gray-600 hover:text-[#001a24]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Products
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                isContactActive
                  ? "text-[#00BEDB]"
                  : scrolled || !isOnHeroPage
                  ? "text-gray-600 hover:text-[#001a24]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-[#00BEDB] hover:bg-[#00a8c8] text-[#001a24] text-sm font-bold tracking-wide transition-all duration-200"
            >
              Schedule Audit
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen((s) => !s)}
            className={`lg:hidden p-2 transition-colors ${
              scrolled || !isOnHeroPage ? "text-[#001a24]" : "text-white"
            }`}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-6 py-5 space-y-1">
            <Link href="/" className={`block px-3 py-2.5 text-sm font-medium ${isHomeActive ? "text-[#00BEDB]" : "text-gray-800 hover:text-[#001a24]"}`}>
              Home
            </Link>

            <div>
              <div className="flex items-center justify-between px-3 py-2.5">
                <Link href="/facilities" className={`text-sm font-medium ${isInfraActive ? "text-[#00BEDB]" : "text-gray-800"}`}>
                  Infrastructure
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileInfraOpen((p) => !p)}
                  className="p-1 text-gray-500"
                >
                  <svg className={`w-4 h-4 transition-transform ${mobileInfraOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {mobileInfraOpen && (
                <div className="pl-6 pb-2 space-y-1 ml-3 border-l border-[#00BEDB]/20">
                  <Link href="/facilities" className="block px-3 py-2 text-sm text-gray-600">Manufacturing Facilities</Link>
                  <Link href="/rnd/api" className="block px-3 py-2 text-sm text-gray-600">Advanced R&D</Link>
                  <Link href="/rnd/pics" className="block px-3 py-2 text-sm text-gray-600">Facility Gallery</Link>
                </div>
              )}
            </div>

            <Link href="/products" className={`block px-3 py-2.5 text-sm font-medium ${isProductsActive ? "text-[#00BEDB]" : "text-gray-800"}`}>
              Products
            </Link>
            <Link href="/contact" className={`block px-3 py-2.5 text-sm font-medium ${isContactActive ? "text-[#00BEDB]" : "text-gray-800"}`}>
              Contact Us
            </Link>

            <div className="pt-3">
              <Link href="/contact" className="block text-center px-4 py-3 bg-[#00BEDB] text-[#001a24] text-sm font-bold tracking-wide">
                Schedule Facility Audit
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
