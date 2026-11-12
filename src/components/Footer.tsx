import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#002F3C] text-white pt-14 pb-8 border-t border-cyan-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 items-start">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="mr-3">
                <Image
                  src="/logo/footer logo 1.svg"
                  alt="FERMAC BIO"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <span className="text-white text-xl font-bold leading-tight">FERMAC</span>
                  <span className="text-cyan-400 text-xl font-bold leading-tight">BIO</span>
                </div>
                <span className="text-gray-300 text-xs mt-1">Miracles of Microbes</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4 leading-normal">
              India&rsquo;s first domestic manufacturer of three critical fermentation-based anti-infective APIs: Fusidic Acid, Daptomycin, and Teicoplanin.
            </p>
            <div className="flex space-x-3 mt-2">
              <a
                href="#"
                className="w-10 h-10 bg-teal-800 hover:bg-teal-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Image
                  src="/icons/mage_linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-teal-800 hover:bg-teal-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Image
                  src="/icons/icon-park-outline_twitter.svg"
                  alt="X / Twitter"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-teal-800 hover:bg-teal-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Image
                  src="/icons/ri_instagram-fill.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>

          {/* Combined Links: Company + Products (single grid column) */}
          <div className="col-span-1">
            <div className="flex flex-col md:flex-row md:space-x-8 items-start">
              <div className="md:w-1/2">
                <h3 className="font-bold text-sm md:text-lg mb-4">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</Link>
                  </li>
                  <li>
                    <Link href="/directors?tab=board" className="text-gray-300 hover:text-cyan-400 transition-colors">Board of Directors</Link>
                  </li>
                  <li>
                    <Link href="/directors?tab=management" className="text-gray-300 hover:text-cyan-400 transition-colors">Key Management Team</Link>
                  </li>
                  <li>
                    <Link href="/facilities" className="text-gray-300 hover:text-cyan-400 transition-colors">Facilities</Link>
                  </li>
                  <li>
                    <Link href="/sustainability" className="text-gray-300 hover:text-cyan-400 transition-colors">Sustainability (ESG)</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0">
                <h3 className="font-bold text-sm md:text-lg mb-4">API Portfolio</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/products" className="text-gray-300 hover:text-cyan-400 transition-colors">Fusidic Acid / Na Salt</Link>
                  </li>
                  <li>
                    <Link href="/products" className="text-gray-300 hover:text-cyan-400 transition-colors">Daptomycin (Oct 2027)</Link>
                  </li>
                  <li>
                    <Link href="/products" className="text-gray-300 hover:text-cyan-400 transition-colors">Teicoplanin (FY29 Launch)</Link>
                  </li>
                  <li>
                    <Link href="/rnd/api" className="text-gray-300 hover:text-cyan-400 transition-colors">Advanced API R&amp;D</Link>
                  </li>
                  <li>
                    <Link href="/rnd/pics" className="text-gray-300 hover:text-cyan-400 transition-colors">Lab &amp; Plant PICS</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Contact Info (3rd column) */}
          <div className="col-span-1">
            <h3 className="font-bold text-sm md:text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <div className="w-5 h-5 mr-3 mt-1 flex-shrink-0">
                  <Image
                    src="/icons/ic_baseline-phone.svg"
                    alt="phone"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="text-sm">
                  Executive: <a href="tel:+919849499027" className="text-cyan-300 hover:underline">+91 98494 99027</a><br />
                  Operations: <a href="tel:+919666000728" className="text-cyan-300 hover:underline">+91 96660 00728</a><br />
                  Office: <a href="tel:+914024242999" className="hover:underline">+91 40 2424 2999</a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mr-3 mt-1 flex-shrink-0">
                  <Image
                    src="/icons/ic_twotone-email.svg"
                    alt="email"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="text-sm">
                  Commercial: <a href="mailto:sales@fermacbio.in" className="text-cyan-300 hover:underline">sales@fermacbio.in</a><br />
                  General: <a href="mailto:info@fermacbio.in" className="hover:underline">info@fermacbio.in</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Locations (4th column) */}
          <div className="col-span-1">
            <h3 className="font-bold text-sm md:text-lg mb-4 tracking-wide">Locations</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <div className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-cyan-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div className="text-xs md:text-sm">
                  <div className="font-semibold text-white mb-1">Corporate Headquarters</div>
                  <a href="https://maps.app.goo.gl/7VTSratuc3JnYiNV6" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors block">Plot No: 08, 1st Floor, Dommara Pochampally, Dundigal Village, Dundigal - Gandimaisamma - 500 043, Telangana</a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-cyan-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div className="text-xs md:text-sm">
                  <div className="font-semibold text-white mb-1">Factory &amp; Works</div>
                  <a href="https://maps.app.goo.gl/bxL38GxmpFgtziTH8" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors block">Survey No. 273 &amp; 274, Usirikapally Village, Shivampet Mandal, Medak(Dt), Telangana, India, 502334</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-teal-800/80 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-400 gap-4">
            <p>© {new Date().getFullYear()} Fermac Bio Private Limited. All Rights Reserved.</p>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
