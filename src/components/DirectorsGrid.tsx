"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export type LeadershipCategory = "board" | "management" | "all";

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  roleType: "board" | "management";
  roleBadge: string;
  departmentOrCommittee: string;
  avatarText: string;
  avatarColor: string;
  profile: string;
  careerMilestones: string[];
  expertise: string[];
  responsibilities: string;
}

const boardMembers: TeamMember[] = [
  {
    id: "suneel-kumar-battula",
    name: "Mr. Suneel Kumar Battula",
    title: "Founder, CEO & Technology Lead",
    roleType: "board",
    roleBadge: "Founder & Board of Directors",
    departmentOrCommittee: "Executive Stewardship & Technology",
    avatarText: "SK",
    avatarColor: "from-[#002F3C] to-[#004859] text-cyan-300 ring-2 ring-cyan-500/30",
    profile:
      "Fermentation technologist since 1997 with over 25 years of specialized experience developing and scaling complex fermentation APIs across leading pharma and biotech companies in India and overseas. Led the first-in-India development of Fusidic Acid and Daptomycin — two of the most technically demanding fermentation APIs previously imported in full. Founded Bransun Labs in 2019 to advance bioprocess innovation.",
    careerMilestones: [
      "25+ years in fermentation API strain engineering & industrial scaling",
      "Pioneered first-in-India development of Fusidic Acid and Daptomycin",
      "Founded Bransun Labs (2019) to advance fermentation innovation",
      "Proven track record across vitamins, statins, immunosuppressants, and antibiotics",
    ],
    expertise: [
      "Fermentation Technology & Scale-Up",
      "Secondary Metabolite Biosynthesis",
      "First-in-India API Innovation",
      "Strategic Alliances & JVs",
    ],
    responsibilities:
      "Leads overarching technology, process development, manufacturing scale-up, and commercial API production and manufacturing strategy.",
  },
  {
    id: "baby-rani-polavarapu",
    name: "Mrs. Baby Rani Polavarapu",
    title: "Co-Founder & Chief Scientific Officer (CSO)",
    roleType: "board",
    roleBadge: "Co-Founder & Board of Directors",
    departmentOrCommittee: "Scientific Affairs & R&D Stewardship",
    avatarText: "BR",
    avatarColor: "from-[#064E3B] to-[#047857] text-emerald-300 ring-2 ring-emerald-500/30",
    profile:
      "Biotechnology R&D veteran with 25+ years of distinguished experience (since 1999) leading biopharma innovation across premier biotech firms in India and internationally. Holds an M.Sc. in Biochemical Engineering and a Bachelor of Pharmacy (B.Pharm). Has developed and commercialized high-value fermentation products across vitamins, statins, immunosuppressants, and antibiotics. Expertise spans classical microbial kinetics, gene therapy, RNAi molecules, and therapeutic proteins.",
    careerMilestones: [
      "M.Sc. in Biochemical Engineering & Bachelor of Pharmacy (B.Pharm)",
      "25+ years in biopharma R&D with leading firms in India and internationally",
      "Developed & commercialized vitamins, statins, immunosuppressants, and antibiotics",
      "Deep expertise across fermentation science, RNAi, and recombinant therapeutic proteins",
    ],
    expertise: [
      "Biochemical Engineering & Process Science",
      "Microbial Strain Development",
      "Impurity Profiling & HPLC/GC Validation",
      "Recombinant Proteins & Biopharma R&D",
    ],
    responsibilities:
      "Leads microbial strain development, process science, analytical method validation, and impurity profiling.",
  },
  {
    id: "jeyamurga-prakash",
    name: "Mr. Jeyamurga Prakash",
    title: "Co-Founder & Project Lead / Director",
    roleType: "board",
    roleBadge: "Co-Founder & Board of Directors",
    departmentOrCommittee: "Operations & Project Governance",
    avatarText: "JP",
    avatarColor: "from-[#451A03] to-[#78350F] text-amber-300 ring-2 ring-amber-500/30",
    profile:
      "Senior pharmaceutical executive with an established track record in operations management, chemical plant engineering, and strategic facility expansion. Began his career as a process engineer at Sanmar Group before advancing through senior leadership roles. Served as Head of Operations at Shasun Pharmaceuticals (2010–13), overseeing multiple commercial API manufacturing sites with an emphasis on cross-functional team building and lean cost control.",
    careerMilestones: [
      "Began career as Process Engineer at Sanmar Group",
      "Served as Head of Operations at Shasun Pharmaceuticals (2010–13) over multiple API sites",
      "Extensive leadership in greenfield facility engineering and multi-ton commercial scaling",
      "Recognized for building cross-functional teams and implementing lean cost controls",
    ],
    expertise: [
      "API Site Operations & Governance",
      "Chemical & Bioprocess Engineering",
      "Lean Manufacturing & Cost Control",
      "Facility Project Execution",
    ],
    responsibilities:
      "Leads plant project execution, capital engineering, operations management, and lean manufacturing standards.",
  },
  {
    id: "b-shivakumar",
    name: "Mr. B. Shivakumar",
    title: "Co-Founder & Marketing Lead / Director",
    roleType: "board",
    roleBadge: "Co-Founder & Board of Directors",
    departmentOrCommittee: "Commercial Strategy & Global Markets",
    avatarText: "BS",
    avatarColor: "from-[#1E293B] to-[#334155] text-blue-300 ring-2 ring-blue-500/30",
    profile:
      "Seasoned pharmaceutical business leader with 30+ years of distinguished experience spanning sales, brand marketing, and international business leadership. Began career at Fourts India and Glaxo, later serving as Area Manager at Dr. Reddy's Laboratories. Holds an MBA in Marketing Management. Founded Shiva's Farma Casa in 2002, successfully pioneering API distribution and marketing alliances across Latin America and Asia.",
    careerMilestones: [
      "30+ years of pharmaceutical sales, brand marketing, and global commercial leadership",
      "Began career at Fourts India & Glaxo; Area Manager at Dr. Reddy's Laboratories",
      "Holds MBA in Marketing Management; transitioned into executive brand leadership",
      "Founded Shiva's Farma Casa (2002), pioneering extensive API trade across Latin America & Asia",
    ],
    expertise: [
      "Global Commercial Strategy",
      "International API Distribution",
      "Latin American & Asian Market Access",
      "Brand & Portfolio Management",
    ],
    responsibilities:
      "Directs commercial strategy, global pharmaceutical distribution networks, and international customer alliances.",
  },
  {
    id: "brahmaji-valiveti",
    name: "Mr. Brahmaji Valiveti",
    title: "Director, FERMAC Bio",
    roleType: "board",
    roleBadge: "Board of Directors",
    departmentOrCommittee: "Audit, Strategy & Governance",
    avatarText: "BV",
    avatarColor: "from-[#312E81] to-[#4338CA] text-indigo-300 ring-2 ring-indigo-500/30",
    profile:
      "Accomplished pharmaceutical entrepreneur with a distinguished career spanning key executive leadership roles including Chairman, CEO, and Director across prominent life sciences companies. Widely recognized for driving innovation, strategic growth, and substantial value creation across multiple ventures, with a proven track record of successful business scale-ups and corporate exits in the global pharmaceutical space.",
    careerMilestones: [
      "Extensive entrepreneurial leadership spanning Chairman, CEO, and Director roles",
      "Track record of high-value business scale-ups and corporate exits in life sciences",
      "Deep expertise in capital structuring, governance, and long-term corporate stewardship",
      "Recognized for long-standing commitment to industrial excellence and regulatory compliance",
    ],
    expertise: [
      "Corporate Governance & Fiduciary Oversight",
      "Life Sciences Business Scale-Ups",
      "Strategic Capital Allocation",
      "Global Industry Partnerships",
    ],
    responsibilities:
      "Guides corporate governance, long-term strategic growth, investor relations, and capital allocation.",
  },
];

const managementMembers: TeamMember[] = [
  {
    id: "suneel-kumar-mgmt",
    name: "Mr. Suneel Kumar Battula",
    title: "Founder, CEO & Technology Lead",
    roleType: "management",
    roleBadge: "Executive Management",
    departmentOrCommittee: "Executive Office & Bioprocess Operations",
    avatarText: "SK",
    avatarColor: "from-[#002F3C] to-[#004859] text-cyan-300 ring-2 ring-cyan-500/30",
    profile:
      "Steers executive leadership and overall manufacturing operations. Guides technological transfer from high-titer laboratory fermentation to multi-ton commercial production. Champions customer-first customization including specialized micronized particle sizing.",
    careerMilestones: [
      "25+ years in fermentation technology and commercial API manufacturing",
      "Directs multi-kiloliter fermentation runs and harvest isolation cascades",
      "Oversees technology transfer from laboratory R&D to multi-ton commercial output",
    ],
    expertise: [
      "Executive Management",
      "Technology Transfer & Scale-Up",
      "Commercial Biomanufacturing",
      "Regulatory Strategy",
    ],
    responsibilities:
      "Overarching operational management, technology transfer, and commercial execution.",
  },
  {
    id: "baby-rani-mgmt",
    name: "Mrs. Baby Rani Polavarapu",
    title: "Co-Founder & Chief Scientific Officer (CSO)",
    roleType: "management",
    roleBadge: "Executive Management",
    departmentOrCommittee: "Research & Development Center",
    avatarText: "BR",
    avatarColor: "from-[#064E3B] to-[#047857] text-emerald-300 ring-2 ring-emerald-500/30",
    profile:
      "Directs Fermac Bio's scientific research, strain improvement programs, process engineering, and analytical method development. Leads analytical validation (HPLC/GC), impurity profiling, and dossier preparation for global regulatory submissions.",
    careerMilestones: [
      "M.Sc. Biochemical Engineering, B.Pharm; 25+ years biotechnology R&D",
      "Spearheads strain mutagenesis, cryo-preservation, and media optimization",
      "Oversees ICH stability testing, impurity isolation, and CEP/DMF regulatory dossiers",
    ],
    expertise: [
      "Microbial Strain Engineering",
      "Bioprocess Science & Analytics",
      "ICH Stability Protocols",
      "Impurity Profiling (HPLC/GC)",
    ],
    responsibilities:
      "R&D strain development, analytical science, and regulatory chemistry dossiers.",
  },
  {
    id: "eswar-kumar",
    name: "Mr. Eswar Kumar",
    title: "General Manager – Operations",
    roleType: "management",
    roleBadge: "Key Management Team",
    departmentOrCommittee: "Bioprocess Operations & Commercial Plant",
    avatarText: "EK",
    avatarColor: "from-[#14532D] to-[#166534] text-green-300 ring-2 ring-green-500/30",
    profile:
      "Seasoned biotechnology professional with 25+ years of experience in pharmaceuticals and fermentation-based manufacturing. Began career in 1995 as a Quality Control Executive across prominent biotech firms in India. Served in senior management at Krebs Biochemicals & Industries Ltd until 2024, leading the expansion of fermentation-based APIs and driving strategic partnerships.",
    careerMilestones: [
      "25+ years in fermentation-based pharmaceutical and API manufacturing",
      "Began career in 1995 as QC Executive, mastering cGMP quality and bioprocess control",
      "Senior management leader at Krebs Biochemicals & Industries Ltd until 2024",
      "Spearheaded multi-kiloliter fermentation expansion for critical secondary metabolites",
    ],
    expertise: [
      "Commercial Plant Operations",
      "Fermentation Process Control",
      "cGMP Batch Execution",
      "Operations Team Leadership",
    ],
    responsibilities:
      "Day-to-day manufacturing operations, shift management, batch yield optimization, and cGMP compliance.",
  },
  {
    id: "ravi-rama-swaroop",
    name: "Mr. Ravi Rama Swaroop",
    title: "Head – Engineering & Plant Infrastructure",
    roleType: "management",
    roleBadge: "Key Management Team",
    departmentOrCommittee: "Engineering & Utilities",
    avatarText: "RS",
    avatarColor: "from-[#312E81] to-[#4338CA] text-indigo-300 ring-2 ring-indigo-500/30",
    profile:
      "Brings nearly 30 years of extensive experience in engineering maintenance, utility loops, and project execution for API manufacturing facilities. Began career in 1993 as a Maintenance Engineer, progressing to lead roles across major projects in India. Holds a Master's degree in Mechanical Engineering, with deep expertise in heavy plant infrastructure, automated boilers, oil-free air, and Zero Liquid Discharge systems.",
    careerMilestones: [
      "Holds Master's degree in Mechanical Engineering (M.Tech/M.E.)",
      "Nearly 30 years in engineering maintenance & project execution for API facilities",
      "Expertise in plant infrastructure, heavy utilities, and time-bound project delivery",
      "Supervises industrial steam boilers, chillers, clean utilities, and 100% ZLD bio-effluent loops",
    ],
    expertise: [
      "Plant Infrastructure Engineering",
      "Clean Utilities & High-Pressure Boilers",
      "Oil-Free Compressed Air & Chillers",
      "ZLD & Environmental Maintenance",
    ],
    responsibilities:
      "Continuous plant utilities supply, preventative maintenance, HVAC/cleanroom airloops, and equipment uptime.",
  },
  {
    id: "srinivasa-rao-somepalli",
    name: "Mr. Srinivasa Rao Somepalli",
    title: "Head – R&D & Technology Transfer",
    roleType: "management",
    roleBadge: "Key Management Team",
    departmentOrCommittee: "R&D & Technology Transfer",
    avatarText: "SR",
    avatarColor: "from-[#0F172A] to-[#1E293B] text-cyan-300 ring-2 ring-cyan-500/30",
    profile:
      "Biochem & Biotechnology post-graduate with 22+ years of specialized experience in fermentation-based pharmaceutical and API manufacturing. Began career as a Fermentation Executive at Krebs Biochemicals, later holding key technical roles at Natco Pharma and Bharat Biotech. Most recently served as Senior Manager at Bharat Biotech until 2022, leading fermentation R&D and scale-up initiatives.",
    careerMilestones: [
      "Post-graduate in Biochemistry & Biotechnology",
      "22+ years in fermentation-based pharmaceutical & API manufacturing",
      "Held key technical roles at Krebs Biochemicals, Natco Pharma, and Bharat Biotech",
      "Senior Manager at Bharat Biotech until 2022, driving fermentation R&D and pilot scale-up",
    ],
    expertise: [
      "Fermentation Process Scale-Up",
      "Laboratory-to-Plant Technology Transfer",
      "Microbial Inoculum Kinetics",
      "Process Optimization & Yield",
    ],
    responsibilities:
      "Directs technology transfer from R&D to commercial scale, kinetic parameter validation, and process optimization.",
  },
  {
    id: "manoj-kumar",
    name: "Mr. Manoj Kumar",
    title: "Manager – Finance & Accounts",
    roleType: "management",
    roleBadge: "Key Management Team",
    departmentOrCommittee: "Finance & Corporate Accounts",
    avatarText: "MK",
    avatarColor: "from-[#451A03] to-[#78350F] text-amber-300 ring-2 ring-amber-500/30",
    profile:
      "Finance and accounting professional with comprehensive expertise in financial planning, analysis, financial reporting, ERP accounting systems, and regulatory statutory compliance. Since 2017, has supported cross-functional financial operations with an unyielding focus on accuracy, audit coordination, and accounting standards.",
    careerMilestones: [
      "Specialized in financial planning, management reporting, and corporate governance",
      "Hands-on expertise across ERP accounting systems and advanced financial models",
      "Coordinates statutory audits, banking operations, and tax compliance",
      "Supports financial planning and corporate accounts integrity at Fermac Bio",
    ],
    expertise: [
      "Financial Planning & Analysis",
      "Statutory Audit & Tax Compliance",
      "ERP Accounting & Internal Controls",
      "Cost Accounting & Capex Monitoring",
    ],
    responsibilities:
      "Financial operations, statutory reporting, internal audit controls, and procurement accounting.",
  },
];

function MemberCard({ member }: { member: TeamMember }) {
  const isBoard = member.roleType === "board";

  return (
    <div className="bg-white rounded-3xl border border-gray-200/90 p-7 sm:p-8 shadow-xs hover:shadow-xl hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
      {/* Top subtle accent bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-1.5 ${
          isBoard
            ? "bg-gradient-to-r from-[#002F3C] via-[#00BEDB] to-[#002F3C]"
            : "bg-gradient-to-r from-teal-800 via-emerald-500 to-teal-800"
        }`}
      />

      <div className="space-y-5">
        {/* Header: Monogram Emblem + Identity */}
        <div className="flex items-start gap-4">
          <div
            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${member.avatarColor} flex items-center justify-center font-bold text-lg sm:text-xl shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300`}
          >
            {member.avatarText}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-extrabold text-lg sm:text-xl text-[#002F3C] group-hover:text-[#00BEDB] transition-colors leading-snug">
              {member.name}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-cyan-800 leading-snug mt-0.5">
              {member.title}
            </p>
            <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-gray-100 text-gray-700 border border-gray-200">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00BEDB]" />
              <span>{member.departmentOrCommittee}</span>
            </div>
          </div>
        </div>

        {/* Biography */}
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
          {member.profile}
        </p>

        {/* Career Milestones */}
        <div className="space-y-1.5 pt-3 border-t border-gray-100">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
            Career Milestones & Proven Experience:
          </div>
          {member.careerMilestones.map((m, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
              <span className="text-[#00BEDB] font-bold mt-0.5">▸</span>
              <span>{m}</span>
            </div>
          ))}
        </div>

        {/* Scope / Responsibilities Box */}
        {member.responsibilities && (
          <div className="p-3.5 rounded-xl bg-gray-50/80 border-l-3 border-[#00BEDB] text-xs text-gray-700">
            <strong className="text-[#002F3C] font-semibold">Strategic Mandate:</strong>{" "}
            {member.responsibilities}
          </div>
        )}
      </div>

      {/* Expertise Tags */}
      <div className="pt-4 mt-5 border-t border-gray-100">
        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
          Core Competencies:
        </div>
        <div className="flex flex-wrap gap-1.5">
          {member.expertise.map((exp, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#E9F6F8] text-[#002F3C] border border-cyan-100"
            >
              {exp}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function DirectorsContent() {
  const searchParams = useSearchParams();
  const queryTab = searchParams.get("tab");
  const validQueryTab: "all" | "board" | "management" | null =
    queryTab === "board" || queryTab === "management" || queryTab === "all"
      ? queryTab
      : null;

  const [selectedTab, setSelectedTab] = useState<"all" | "board" | "management" | null>(null);
  const [prevQueryTab, setPrevQueryTab] = useState(validQueryTab);

  if (prevQueryTab !== validQueryTab) {
    setPrevQueryTab(validQueryTab);
    setSelectedTab(null);
  }

  const activeTab: "all" | "board" | "management" = selectedTab ?? validQueryTab ?? "all";

  const handleTabChange = (tab: "all" | "board" | "management") => {
    setSelectedTab(tab);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (tab === "all") {
        url.searchParams.delete("tab");
      } else {
        url.searchParams.set("tab", tab);
      }
      window.history.pushState({}, "", url.toString());
    }
  };

  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Bar Derived from Official Corporate Deck */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-[#E9F6F8] rounded-2xl p-5 text-center border border-cyan-100 shadow-2xs">
            <div className="text-3xl font-extrabold text-[#002F3C]">25+ Years</div>
            <div className="text-xs text-gray-600 font-semibold mt-1">Founding Fermentation Expertise</div>
          </div>
          <div className="bg-[#E9F6F8] rounded-2xl p-5 text-center border border-cyan-100 shadow-2xs">
            <div className="text-3xl font-extrabold text-[#00BEDB]">1st in India</div>
            <div className="text-xs text-gray-600 font-semibold mt-1">Fusidic Acid & Daptomycin Scale-Up</div>
          </div>
          <div className="bg-[#E9F6F8] rounded-2xl p-5 text-center border border-cyan-100 shadow-2xs">
            <div className="text-3xl font-extrabold text-emerald-600">340 kL+</div>
            <div className="text-xs text-gray-600 font-semibold mt-1">Total Fermentation Capacity (A & B)</div>
          </div>
          <div className="bg-[#E9F6F8] rounded-2xl p-5 text-center border border-cyan-100 shadow-2xs">
            <div className="text-3xl font-extrabold text-[#002F3C]">100% ZLD</div>
            <div className="text-xs text-gray-600 font-semibold mt-1">Zero Liquid Discharge Compliant</div>
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          <button
            type="button"
            onClick={() => handleTabChange("all")}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === "all"
                ? "bg-[#002F3C] text-white shadow-md scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Leadership ({boardMembers.length + managementMembers.length})
          </button>
          <button
            type="button"
            onClick={() => handleTabChange("board")}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "board"
                ? "bg-[#00BEDB] text-white shadow-md scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
            Board of Directors ({boardMembers.length})
          </button>
          <button
            type="button"
            onClick={() => handleTabChange("management")}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "management"
                ? "bg-[#00BEDB] text-white shadow-md scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Key Management Team ({managementMembers.length})
          </button>
        </div>

        {/* Strategic Investor Spotlight: Fleming Laboratories Ltd */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#F0F9FB] to-[#E2F5F8] border border-cyan-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#002F3C] text-[#00BEDB] font-extrabold text-xl flex items-center justify-center shrink-0 shadow-sm border border-cyan-400/30">
              FL
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-100 text-[#002F3C] text-[10px] font-bold uppercase tracking-wider mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00BEDB]" />
                Strategic Investor &amp; Corporate Partner
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#002F3C]">
                Fleming Laboratories Limited
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mt-0.5">
                Established API manufacturer with 20+ years of global distribution, regulatory dossiers, and hospital market-access reach. Fleming Laboratories invests alongside the founders and provides strategic governance, global distribution channels, and commercial market access.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#002F3C] hover:bg-[#003B4C] text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
          >
            Investor Relations &rarr;
          </Link>
        </div>

        {/* VIEW 1: "ALL" OR "BOARD" -> RENDER BOARD OF DIRECTORS */}
        {(activeTab === "all" || activeTab === "board") && (
          <div id="board-of-directors" className="mb-20 scroll-mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-gray-200">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-[#002F3C] text-xs font-bold uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#00BEDB] animate-pulse" />
                  Strategic Governance &amp; Fiduciary Oversight
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002F3C]">
                  Board of Directors
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl">
                  Guiding Fermac Bio’s overarching strategic vision, long-term capital allocation, corporate stewardship, and international joint venture expansions.
                </p>
              </div>

              {activeTab === "all" && (
                <button
                  type="button"
                  onClick={() => handleTabChange("board")}
                  className="text-xs font-bold text-[#00BEDB] hover:text-[#002F3C] flex items-center gap-1 cursor-pointer"
                >
                  View Board Only &rarr;
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {boardMembers.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* VIEW 2: "ALL" OR "MANAGEMENT" -> RENDER KEY MANAGEMENT TEAM */}
        {(activeTab === "all" || activeTab === "management") && (
          <div id="key-management-team" className="scroll-mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-gray-200">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 text-xs font-bold uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Executive Operations &amp; Technical Leadership
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002F3C]">
                  Key Management Team
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl">
                  Executing day-to-day industrial operations, multi-kiloliter fermentation runs, R&amp;D strain kinetics, cGMP quality assurance, and global customer delivery.
                </p>
              </div>

              {activeTab === "all" && (
                <button
                  type="button"
                  onClick={() => handleTabChange("management")}
                  className="text-xs font-bold text-emerald-600 hover:text-[#002F3C] flex items-center gap-1 cursor-pointer"
                >
                  View Management Only &rarr;
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {managementMembers.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* Bottom Contact / Inquiries Box */}
        <div className="mt-16 p-8 rounded-3xl bg-gray-50 border border-gray-200 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-[#002F3C] mb-2">
            Interested in Commercial Collaboration or Governance Inquiries?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto mb-6">
            Our corporate affairs office facilitates investor relations, statutory regulatory disclosures, and strategic pharmaceutical partnerships.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-[#002F3C] hover:bg-[#003B4C] text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
            >
              Contact Corporate Leadership →
            </Link>
            <Link
              href="/products"
              className="px-6 py-3 rounded-xl bg-white hover:bg-gray-100 text-[#002F3C] border border-gray-300 text-xs sm:text-sm font-semibold transition-all"
            >
              Review Commercial API Portfolio
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default function DirectorsGrid() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-gray-500 text-sm">
          Loading leadership roster...
        </div>
      }
    >
      <DirectorsContent />
    </Suspense>
  );
}
