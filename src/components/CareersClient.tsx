"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  category: "all" | "upstream" | "downstream" | "quality" | "engineering";
  location: string;
  experience: string;
  type: string;
  tags: string[];
  badgeColor: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
}

const jobPositions: JobPosition[] = [
  {
    id: "fermentation-engineer",
    title: "Senior Fermentation / Bioprocess Engineer",
    department: "Upstream Fermentation",
    category: "upstream",
    location: "Shivampet Campus, Medak (Telangana)",
    experience: "3–8 Years",
    type: "Full-Time • On-Site",
    tags: ["33 KL Fermenters", "PAT Telemetry", "Fed-Batch Kinetics", "SIP / CIP"],
    badgeColor: "bg-[#004e5d] text-white border-transparent shadow-xs",
    summary:
      "Lead day-to-day upstream bioprocess operations across 50 L seed vessels and 33 KL commercial production fermenters, executing precise nutrient feeding cascades and PAT monitoring for microbial secondary metabolites.",
    responsibilities: [
      "Operate and optimize pilot and commercial-scale stirred tank bioreactors (up to 33 KL capacity).",
      "Monitor bioprocess kinetics: dissolved oxygen (DO), pH, agitation speed, carbon/nitrogen feeding, and off-gas telemetry.",
      "Execute sterile media preparation, continuous in-situ sterilization (SIP), and clean-in-place (CIP) protocols.",
      "Troubleshoot bioprocess deviations and scale-up parameters in collaboration with R&D strain development teams.",
    ],
    qualifications: [
      "B.Tech / M.Tech in Biotechnology, Biochemical Engineering, or M.Sc. in Microbiology / Industrial Biotechnology.",
      "Hands-on experience in commercial fermentation facilities under cGMP standards.",
      "Sound understanding of bacterial/fungal physiology and secondary metabolite kinetics.",
    ],
  },
  {
    id: "downstream-specialist",
    title: "Downstream Isolation & Purification Executive",
    department: "Downstream Bioprocessing",
    category: "downstream",
    location: "Shivampet Campus, Medak (Telangana)",
    experience: "2–6 Years",
    type: "Full-Time • On-Site",
    tags: ["ANFD Filtration", "Disc-Stack Centrifuges", "Solvent Extraction", "Micronization"],
    badgeColor: "bg-[#065f46] text-white border-transparent shadow-xs",
    summary:
      "Execute downstream extraction, crystallization, and isolation processes for high-potency antibiotics (Fusidic Acid / Sodium Fusidate / Daptomycin), ensuring maximum recovery yields and pharmacopeial purity.",
    responsibilities: [
      "Supervise cell harvesting, disc-stack centrifugation, and solvent extraction suites.",
      "Operate automated crystallization vessels, Agitated Nutsche Filter Dryers (ANFD), and vacuum shelf dryers.",
      "Perform precision jet milling and particle size reduction to meet micronized product specifications (D90 < 10 µm).",
      "Maintain closed-loop solvent recovery units in accordance with strict ZLD safety guidelines.",
    ],
    qualifications: [
      "B.Sc / M.Sc in Chemistry, Chemical Engineering, or Pharmaceutical Sciences.",
      "Demonstrated track record in API downstream processing, crystallization, and cleanroom solvent handling.",
    ],
  },
  {
    id: "qc-analyst",
    title: "Quality Control Analyst (HPLC / GC)",
    department: "Quality Control (QC)",
    category: "quality",
    location: "Shivampet Campus, Medak (Telangana)",
    experience: "2–5 Years",
    type: "Full-Time • On-Site",
    tags: ["HPLC Chromatography", "GC Purity", "EP / USP Monograph", "21 CFR Part 11"],
    badgeColor: "bg-[#1e40af] text-white border-transparent shadow-xs",
    summary:
      "Perform instrumental analysis and release testing for in-process samples, finished fermentation APIs, and raw materials conforming strictly to EP, BP, USP, and IP monographs.",
    responsibilities: [
      "Perform chromatographic assay and purity profiling using High-Performance Liquid Chromatography (HPLC) and Gas Chromatography (GC).",
      "Execute microbiological assays, bacterial endotoxin testing (LAL), and sterility verifications.",
      "Perform accelerated stability testing and maintain detailed OOS/OOT investigation records.",
      "Participate in analytical method validation, calibration of analytical balances, spectrophotometers, and dissolution apparatus.",
    ],
    qualifications: [
      "M.Sc in Analytical Chemistry, Organic Chemistry, or B.Pharm / M.Pharm.",
      "Thorough knowledge of pharmacopeial testing methods and Data Integrity (21 CFR Part 11) guidelines.",
    ],
  },
  {
    id: "qa-lead",
    title: "Quality Assurance & cGMP Compliance Lead",
    department: "Quality Assurance (QA)",
    category: "quality",
    location: "Corporate Office (Dundigal) / Shivampet Campus",
    experience: "5–10 Years",
    type: "Full-Time",
    tags: ["WHO-cGMP", "QMS Governance", "Schedule M", "Audit Readiness"],
    badgeColor: "bg-[#6b21a8] text-white border-transparent shadow-xs",
    summary:
      "Champion quality management systems, batch release governance, change control, and regulatory audit readiness aligned with WHO-cGMP, Schedule M, and global regulatory standards.",
    responsibilities: [
      "Review and approve Batch Manufacturing Records (BMR) and Batch Packaging Records (BPR).",
      "Manage plant Quality Management Systems (QMS), Deviations, CAPA, Change Controls, and Risk Assessments.",
      "Lead internal self-inspections and prepare the facility for regulatory, customer, and WHO-cGMP audits.",
      "Support Drug Master File (DMF) technical compilation and customer regulatory qualification dossiers.",
    ],
    qualifications: [
      "B.Pharm / M.Pharm or Master's in Chemistry / Life Sciences.",
      "Proven leadership in QA roles at USFDA or WHO-cGMP certified bulk drug manufacturing facilities.",
    ],
  },
  {
    id: "utility-engineer",
    title: "Plant Utilities & Maintenance Engineer",
    department: "Engineering & Utilities",
    category: "engineering",
    location: "Shivampet Campus, Medak (Telangana)",
    experience: "4–9 Years",
    type: "Full-Time • On-Site",
    tags: ["High-Pressure Boilers", "Oil-Free Compressors", "MEE / ATFD", "100% ZLD"],
    badgeColor: "bg-[#9a3412] text-white border-transparent shadow-xs",
    summary:
      "Oversee critical continuous utilities powering 25,000 sq. m. fermentation operations, including high-pressure boilers, oil-free air compressors, chilling systems, and 100% Zero Liquid Discharge (ZLD) effluent loops.",
    responsibilities: [
      "Maintain continuous operation of high-pressure multi-fuel boilers and clean steam generation.",
      "Operate 100% oil-free screw air compressors delivering sterile compressed air for continuous aeration.",
      "Supervise Zero Liquid Discharge (ZLD) systems including Multi-Effect Evaporators (MEE) and ATFDs.",
      "Execute preventive maintenance schedules and manage PLC/SCADA instrumentation calibration.",
    ],
    qualifications: [
      "B.Tech / Diploma in Mechanical or Electrical & Instrumentation Engineering.",
      "Demonstrated experience in bulk active pharmaceutical ingredient (API) or bioprocess utility loops.",
    ],
  },
];

const perksList = [
  {
    title: "Competitive Compensation & Incentives",
    description: "Industry-leading salary structures with milestone-driven annual performance bonuses and appraisal cycles.",
    icon: (
      <svg className="w-5 h-5 text-[#00BEDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "AC Campus Shuttle Transit",
    description: "Comfortable company-operated executive bus shuttles connecting major Hyderabad metro pickup nodes to Shivampet.",
    icon: (
      <svg className="w-5 h-5 text-[#00BEDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Comprehensive Family Healthcare",
    description: "Group medical, term life, and accident insurance coverage safeguarding team members and dependent family.",
    icon: (
      <svg className="w-5 h-5 text-[#00BEDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Subsidized Campus Dining",
    description: "In-house hygienic dining center offering freshly cooked breakfast, lunch, and round-the-clock shift refreshments.",
    icon: (
      <svg className="w-5 h-5 text-[#00BEDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "350 KL Mega-Scale Bioprocessing",
    description: "Gain rare hands-on mastery operating 33 KL fermenters, automated ANFDs, and SCADA/PAT analytics in a commercial plant.",
    icon: (
      <svg className="w-5 h-5 text-[#00BEDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Continuous cGMP & Regulatory Training",
    description: "Structured learning on WHO-cGMP, Schedule M, Data Integrity (21 CFR Part 11), and global regulatory dossiers.",
    icon: (
      <svg className="w-5 h-5 text-[#00BEDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const hiringSteps = [
  {
    step: "01",
    title: "Application & Profile Screening",
    description: "Our talent acquisition team and technical panel review your CV within 48–72 hours of submission.",
  },
  {
    step: "02",
    title: "Technical Domain Assessment",
    description: "A focused technical discussion with bioprocess or department leads evaluating technical and cGMP competencies.",
  },
  {
    step: "03",
    title: "Campus Visit & Facility Tour",
    description: "Experience our state-of-the-art Shivampet biomanufacturing campus or Corporate Headquarters in Dundigal.",
  },
  {
    step: "04",
    title: "Formal Offer & Onboarding",
    description: "Transparent compensation proposal, medical checkups, and structured induction into our high-performance team.",
  },
];

const faqs = [
  {
    q: "Where are the positions located?",
    a: "Core manufacturing, QC, bioprocess engineering, and utilities positions are based at our Shivampet Campus (Medak District, Telangana). Corporate governance, commercial strategy, and select QA roles are located at our Dundigal Corporate Headquarters (Hyderabad).",
  },
  {
    q: "Is daily transportation provided to the Shivampet manufacturing campus?",
    a: "Yes. Fermac Bio operates air-conditioned staff shuttles along designated arterial pickup routes connecting Hyderabad (including JNTU, Kukatpally, Miyapur, and Dundigal) to the Shivampet facility.",
  },
  {
    q: "What shift schedules operate at the fermentation plant?",
    a: "Since microbial fermentation requires 24/7 continuous process monitoring, operational engineering and QC teams operate on structured rotational shifts with planned rest days and shift allowances. General administration and R&D functions operate on standard business day schedules.",
  },
  {
    q: "Can freshers or entry-level candidates apply?",
    a: "Yes! While active senior listings highlight specific experience levels, we frequently induct high-potential graduates (B.Tech Biotechnology, M.Sc Microbiology, B.Pharm) into our Bioprocess Apprenticeship & Trainee Engineer programs.",
  },
  {
    q: "How can I apply if my specific role is not currently listed?",
    a: "You can submit an open profile through our Talent Pool submission form below or email your resume directly to careers@fermacbio.in. Our team indexes candidate resumes for upcoming scale-up expansions.",
  },
];

export default function CareersClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Slide-over Job Details Drawer State (replaces clumsy inline accordion)
  const [selectedJobForDetails, setSelectedJobForDetails] = useState<JobPosition | null>(null);

  // Application Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRole, setModalRole] = useState<string>("General Application");
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Application Form State
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    currentCompany: "",
    noticePeriod: "30 Days",
    preferredLocation: "Shivampet Plant (Medak)",
    coverNote: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // Lock body scroll when drawer or modal is open
  useEffect(() => {
    if (selectedJobForDetails || isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedJobForDetails, isModalOpen]);

  // Close overlays on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isModalOpen) {
          setIsModalOpen(false);
        } else if (selectedJobForDetails) {
          setSelectedJobForDetails(null);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, selectedJobForDetails]);

  const openApplicationModal = (roleTitle: string) => {
    setModalRole(roleTitle);
    setSubmittedRef(null);
    setFormError(null);
    setIsModalOpen(true);
  };

  const copyEmailToClipboard = (email: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formState.fullName.trim() || !formState.email.trim() || !formState.phone.trim()) {
      setFormError("Please fill in your name, email, and phone number.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formState,
          role: modalRole,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmittedRef(data.referenceId || "FB-CONFIRMED");
      } else {
        setFormError(data.error || "Submission failed. Please email careers@fermacbio.in directly.");
      }
    } catch {
      setFormError("Network connection issue. Please send your resume to careers@fermacbio.in.");
    } finally {
      setSubmitting(false);
    }
  };

  // Filtered jobs logic
  const filteredJobs = useMemo(() => {
    return jobPositions.filter((job) => {
      const matchesCategory =
        selectedCategory === "all" ||
        (selectedCategory === "upstream" && job.category === "upstream") ||
        (selectedCategory === "downstream" && job.category === "downstream") ||
        (selectedCategory === "quality" && job.category === "quality") ||
        (selectedCategory === "engineering" && job.category === "engineering");

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.department.toLowerCase().includes(q) ||
        job.summary.toLowerCase().includes(q) ||
        job.tags.some((t) => t.toLowerCase().includes(q)) ||
        job.responsibilities.some((r) => r.toLowerCase().includes(q)) ||
        job.qualifications.some((qv) => qv.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-white">
      {/* 1. Header Banner */}
      <section className="relative bg-gradient-to-b from-[#002F3C] via-[#003847] to-[#004859] text-white pt-36 pb-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00BEDB_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-5">
            <span className="w-2 h-2 rounded-full bg-[#00BEDB] animate-pulse" />
            Talent &amp; Career Opportunities &bull; Hyderabad &amp; Medak
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Build The Future Of <span className="text-[#00BEDB]">Biomanufacturing</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light mb-8">
            Join India&rsquo;s pioneer in microbial fermentation APIs. We combine world-class bioprocess science with a state-of-the-art 25,000 sq. m. integrated facility to manufacture lifesaving anti-infectives with purpose and precision.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#openings"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00BEDB] hover:bg-[#00aebd] text-[#002F3C] text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              <span>Explore Open Roles</span>
              <span>&darr;</span>
            </a>
            <button
              onClick={() => openApplicationModal("General Application")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/20 backdrop-blur-xs transition-all cursor-pointer"
            >
              <span>Submit General CV</span>
              <span>&rarr;</span>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto pt-8 border-t border-cyan-900/60">
            <div className="text-center p-3 rounded-xl bg-white/[0.04] border border-white/5">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#00BEDB]">25,000 m²</div>
              <div className="text-xs text-gray-300 mt-1">Integrated Biomanufacturing</div>
            </div>
            <div className="text-center p-3 rounded-xl bg-white/[0.04] border border-white/5">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#00BEDB]">100%</div>
              <div className="text-xs text-gray-300 mt-1">Zero Liquid Discharge</div>
            </div>
            <div className="text-center p-3 rounded-xl bg-white/[0.04] border border-white/5">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#00BEDB]">WHO-cGMP</div>
              <div className="text-xs text-gray-300 mt-1">Quality Standards</div>
            </div>
            <div className="text-center p-3 rounded-xl bg-white/[0.04] border border-white/5">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#00BEDB]">25+ Yrs</div>
              <div className="text-xs text-gray-300 mt-1">Scientific Leadership</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Perks & Benefits (EVP) */}
      <section className="py-16 sm:py-20 bg-gray-50/80 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00BEDB] bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
              Why Work With Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002F3C] mt-3">
              Comprehensive Benefits For Scientific Minds
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-3">
              We empower our scientists, engineers, and operational staff with an exceptional work environment, modern amenities, and boundless growth opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perksList.map((perk, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs hover:shadow-md hover:border-cyan-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mb-4 group-hover:bg-[#00BEDB] group-hover:text-white transition-colors">
                    {perk.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#002F3C] mb-2">{perk.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Open Positions with Refined Card Hover & Relocated Bottom Action Placement */}
      <section id="openings" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100/70 px-3 py-1 rounded-full border border-cyan-200">
            Current Opportunities
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002F3C] mt-3">
            Explore Open Positions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Click on any position to view full specifications, requirements, and responsibilities.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="bg-gray-50/80 p-4 sm:p-5 rounded-2xl border border-gray-200/80 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Department Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {[
              { id: "all", label: "All Roles", count: jobPositions.length },
              { id: "upstream", label: "Fermentation", count: 1 },
              { id: "downstream", label: "Downstream", count: 1 },
              { id: "quality", label: "QC & QA", count: 2 },
              { id: "engineering", label: "Utilities", count: 1 },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === tab.id
                    ? "bg-[#002F3C] text-white shadow-xs border border-[#002F3C]"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-300 shadow-2xs"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    selectedCategory === tab.id
                      ? "bg-[#00BEDB] text-[#002F3C]"
                      : "bg-slate-200 text-slate-800"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search roles, skills, HPLC..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 text-gray-800 placeholder-gray-400 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold p-1"
                aria-label="Clear search"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-5 px-1">
          <span>
            Showing <strong className="text-gray-900">{filteredJobs.length}</strong> positions
            {selectedCategory !== "all" && ` in ${selectedCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>
          {(selectedCategory !== "all" || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="text-[#00BEDB] hover:underline font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Jobs List */}
        {filteredJobs.length === 0 ? (
          <div className="text-center py-12 px-4 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
            <p className="text-base font-semibold text-gray-700">No matching positions found</p>
            <p className="text-xs text-gray-500 mt-1 mb-4">
              Try adjusting your search criteria or submit a general application.
            </p>
            <button
              onClick={() => openApplicationModal("General Application")}
              className="px-5 py-2 rounded-xl bg-[#00BEDB] hover:bg-[#00aebd] text-[#002F3C] text-xs font-bold shadow-xs cursor-pointer"
            >
              Submit General Application
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="relative bg-white rounded-2xl border border-gray-200/90 hover:border-cyan-400/70 p-6 sm:p-7 shadow-2xs hover:shadow-xl hover:shadow-cyan-950/5 transition-all duration-300 ease-out hover:-translate-y-1 overflow-hidden group border-l-4 border-l-transparent hover:border-l-[#00BEDB]"
              >
                {/* Top Section: Badges & Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${job.badgeColor}`}
                    >
                      {job.department}
                    </span>
                    <span className="text-[11px] font-bold text-slate-800 bg-slate-100 border border-slate-300 px-3 py-1 rounded-full shadow-2xs">
                      {job.type}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-950 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-full shadow-2xs">
                      Exp: {job.experience}
                    </span>
                  </div>

                  {/* Prominent active status pill */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-300 text-[11px] font-bold shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    Actively Hiring
                  </span>
                </div>

                {/* Job Title */}
                <h3
                  onClick={() => setSelectedJobForDetails(job)}
                  className="text-xl sm:text-2xl font-bold text-[#002F3C] group-hover:text-cyan-900 transition-colors cursor-pointer inline-block"
                >
                  {job.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 mt-1.5">
                  <svg className="w-4 h-4 text-cyan-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{job.location}</span>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed max-w-4xl">
                  {job.summary}
                </p>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2 mt-3.5">
                  {job.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold bg-cyan-50 text-cyan-950 border border-cyan-300 px-2.5 py-1 rounded-md shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Action Placement: Clean, Balanced Dedicated Footer Bar */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs font-semibold text-slate-600 flex items-center gap-2">
                    <span>Includes 4 responsibilities &bull; 3 core requirements</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedJobForDetails(job)}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border-2 border-slate-300 hover:border-[#002F3C] bg-white hover:bg-slate-50 text-xs font-bold text-slate-800 hover:text-[#002F3C] transition-all cursor-pointer shadow-xs"
                    >
                      <span>View Details</span>
                      <span className="text-cyan-700 font-bold group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                    </button>

                    <button
                      onClick={() => openApplicationModal(job.title)}
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#002F3C] hover:bg-[#00BEDB] hover:text-[#002F3C] text-white text-xs sm:text-sm font-bold transition-all shadow-xs hover:shadow-md cursor-pointer"
                    >
                      <span>Apply Now</span>
                      <span>&rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Slide-Over Job Details Drawer (Replaces inline show/hide accordion) */}
      {selectedJobForDetails && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop click to dismiss */}
          <div
            className="absolute inset-0"
            onClick={() => setSelectedJobForDetails(null)}
            aria-label="Close drawer"
          />

          {/* Drawer Content */}
          <div className="relative z-10 bg-white w-full max-w-2xl h-full shadow-2xl flex flex-col overflow-hidden animate-slide-left">
            {/* Drawer Header */}
            <div className="p-6 sm:p-7 border-b border-gray-100 bg-gray-50/70 shrink-0">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${selectedJobForDetails.badgeColor}`}
                  >
                    {selectedJobForDetails.department}
                  </span>
                  <span className="text-[11px] font-bold text-slate-800 bg-white border border-slate-300 px-3 py-1 rounded-full shadow-2xs">
                    {selectedJobForDetails.type}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-950 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-full shadow-2xs">
                    Exp: {selectedJobForDetails.experience}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedJobForDetails(null)}
                  className="w-9 h-9 rounded-full bg-white hover:bg-gray-200 border border-gray-200 text-gray-500 hover:text-gray-800 flex items-center justify-center text-lg font-bold transition-colors cursor-pointer shadow-2xs"
                  aria-label="Close details"
                >
                  &times;
                </button>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-[#002F3C] leading-tight">
                {selectedJobForDetails.title}
              </h2>

              <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-2">
                <svg className="w-4 h-4 text-cyan-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{selectedJobForDetails.location}</span>
              </div>
            </div>

            {/* Drawer Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
              {/* Role Overview */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-800 mb-2">
                  Role Overview
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  {selectedJobForDetails.summary}
                </p>
              </div>

              {/* Technologies / Methodologies */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2.5">
                  Core Technologies &amp; Methodologies
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {selectedJobForDetails.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold bg-cyan-50 text-cyan-900 border border-cyan-200 px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Responsibilities */}
              <div className="bg-gray-50/80 rounded-2xl p-5 border border-gray-200/80">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#002F3C] mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00BEDB]" />
                  Key Responsibilities
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                  {selectedJobForDetails.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00BEDB] mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Qualifications */}
              <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Desired Qualifications &amp; Skills
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                  {selectedJobForDetails.qualifications.map((qual, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Campus Highlights Note */}
              <div className="p-4 rounded-xl bg-cyan-50/60 border border-cyan-100 text-xs text-cyan-950 flex items-start gap-3">
                <span className="text-lg">🌿</span>
                <div className="leading-relaxed">
                  <strong>Workplace Standard:</strong> This position operates under strict WHO-cGMP guidelines within our 100% Zero Liquid Discharge campus, with dedicated executive shuttle connectivity from Hyderabad.
                </div>
              </div>
            </div>

            {/* Sticky Drawer Footer */}
            <div className="p-4 sm:p-6 bg-white border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <button
                onClick={() => setSelectedJobForDetails(null)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-100 text-xs font-semibold text-gray-700 transition-colors cursor-pointer"
              >
                Close Details
              </button>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={`mailto:careers@fermacbio.in?subject=Application%20for%20${encodeURIComponent(
                    selectedJobForDetails.title
                  )}`}
                  className="px-3.5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold transition-colors"
                >
                  Email Resume
                </a>

                <button
                  onClick={() => {
                    const role = selectedJobForDetails.title;
                    setSelectedJobForDetails(null);
                    openApplicationModal(role);
                  }}
                  className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-[#002F3C] hover:bg-[#00BEDB] hover:text-[#002F3C] text-white text-xs sm:text-sm font-bold transition-all shadow-md cursor-pointer"
                >
                  Apply for this Role &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. 4-Step Transparent Hiring Journey */}
      <section className="py-16 bg-[#002F3C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-400/30">
              Candidate Experience
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
              Our 4-Step Selection Process
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">
              A transparent, timely, and respectful evaluation designed to help you discover how your science aligns with our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white/[0.04] p-6 rounded-2xl border border-white/10 relative hover:border-cyan-400/40 transition-all"
              >
                <div className="text-3xl font-extrabold text-[#00BEDB] font-mono mb-2">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQs Accordion */}
      <section className="py-16 sm:py-20 bg-gray-50/80 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00BEDB] bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#002F3C] mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200/80 overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-sm text-[#002F3C] hover:text-[#00BEDB] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-cyan-600 text-lg font-mono shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Redesigned Direct Application & Talent Pool Section */}
      <section id="apply" className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#002b36] via-[#003644] to-[#00222b] rounded-3xl p-8 sm:p-12 text-white border border-cyan-500/30 shadow-xl relative overflow-hidden">
            {/* Ambient cyan glow */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Mission & Actions */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-400/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
                  Talent Network &bull; General Inquiries
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                  Don&rsquo;t See Your Exact Role? Join Our Talent Community
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                  We are continuously expanding our upstream, downstream, and QC teams. Submit your profile directly, and our scientific recruiters will reach out as matching vacancies open.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => openApplicationModal("General Application")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00BEDB] hover:bg-[#00aebd] text-[#002F3C] text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
                  >
                    <span>Submit General CV</span>
                    <span>&rarr;</span>
                  </button>

                  <button
                    onClick={() => copyEmailToClipboard("careers@fermacbio.in")}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-all cursor-pointer"
                  >
                    <span>{copiedEmail ? "Copied Email!" : "Copy careers@fermacbio.in"}</span>
                    <span>{copiedEmail ? "✓" : "📋"}</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Submission Guidelines Card */}
              <div className="lg:col-span-5 bg-white/[0.06] backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/15">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#00BEDB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Direct Email Guidelines</span>
                </h3>

                <div className="space-y-3 text-xs text-gray-200">
                  <div>
                    <span className="text-gray-400 block text-[11px]">Primary Email:</span>
                    <a href="mailto:careers@fermacbio.in" className="text-cyan-300 hover:underline font-mono font-medium">
                      careers@fermacbio.in
                    </a>
                  </div>

                  <div>
                    <span className="text-gray-400 block text-[11px]">Subject Format:</span>
                    <div className="font-mono bg-black/40 px-2.5 py-1 rounded text-cyan-200 text-[11px] mt-0.5 border border-white/10">
                      Application: [Role / Dept] - [Your Full Name]
                    </div>
                  </div>

                  <div>
                    <span className="text-gray-400 block text-[11px]">Required Details:</span>
                    <span className="text-[11px] text-gray-300">
                      Updated PDF CV, current CTC, expected CTC, notice period, and preferred location.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Interactive Application Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-200">
                Application Form
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#002F3C] mt-2">
                Apply for {modalRole}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Fill in your candidate summary below. Our talent team will follow up directly.
              </p>
            </div>

            {submittedRef ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ✓
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">Application Submitted!</h4>
                <p className="text-xs text-gray-600 mb-4">
                  Thank you, <strong className="text-gray-900">{formState.fullName}</strong>. Your profile for{" "}
                  <strong>{modalRole}</strong> has been received.
                </p>
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 font-mono text-xs text-cyan-800 mb-6">
                  Reference ID: <strong>{submittedRef}</strong>
                </div>

                <div className="p-4 bg-cyan-50 rounded-xl text-left border border-cyan-100 text-xs text-cyan-900 mb-6">
                  <strong>Important Next Step:</strong> Please email your updated PDF resume to{" "}
                  <a href={`mailto:careers@fermacbio.in?subject=Resume%20for%20${encodeURIComponent(modalRole)}%20-%20Ref%3A%20${submittedRef}`} className="underline font-bold">
                    careers@fermacbio.in
                  </a>{" "}
                  mentioning reference ID <strong>{submittedRef}</strong>.
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full py-2.5 rounded-xl bg-[#002F3C] text-white text-xs font-bold hover:bg-[#00BEDB] hover:text-[#002F3C] transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {formError && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                    {formError}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.fullName}
                    onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                    placeholder="e.g. Dr. Ramesh Rao"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="ramesh@example.com"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Total Experience
                    </label>
                    <input
                      type="text"
                      value={formState.experience}
                      onChange={(e) => setFormState({ ...formState, experience: e.target.value })}
                      placeholder="e.g. 4.5 Years"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Notice Period
                    </label>
                    <select
                      value={formState.noticePeriod}
                      onChange={(e) => setFormState({ ...formState, noticePeriod: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none bg-white text-gray-700"
                    >
                      <option value="Immediate">Immediate Joiner</option>
                      <option value="15 Days">15 Days</option>
                      <option value="30 Days">30 Days</option>
                      <option value="60 Days">60 Days</option>
                      <option value="90 Days">90 Days</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Current Company &amp; Designation
                  </label>
                  <input
                    type="text"
                    value={formState.currentCompany}
                    onChange={(e) => setFormState({ ...formState, currentCompany: e.target.value })}
                    placeholder="e.g. Executive QC at Pharma Ltd"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Preferred Campus Location
                  </label>
                  <select
                    value={formState.preferredLocation}
                    onChange={(e) => setFormState({ ...formState, preferredLocation: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none bg-white text-gray-700"
                  >
                    <option value="Shivampet Plant (Medak)">Shivampet Manufacturing Campus, Medak</option>
                    <option value="Dundigal HQ (Hyderabad)">Dundigal Corporate Office, Hyderabad</option>
                    <option value="Flexible">Open to Either Location</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Key Skills / Note for Hiring Panel
                  </label>
                  <textarea
                    rows={2}
                    value={formState.coverNote}
                    onChange={(e) => setFormState({ ...formState, coverNote: e.target.value })}
                    placeholder="Mention primary instruments or techniques (e.g. HPLC, 33 KL bioreactors, ANFD, cGMP)..."
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 rounded-xl bg-[#00BEDB] hover:bg-[#00aebd] text-[#002F3C] text-sm font-bold shadow-md transition-all cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? "Submitting Application..." : "Submit Application &rarr;"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
