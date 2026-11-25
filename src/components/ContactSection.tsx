"use client";

import React, { useState } from 'react';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ text: string; ok: boolean } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatusMessage(null);
    const newErrors: Partial<FormState> = {};
    if (!form.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!form.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!form.email.trim()) newErrors.email = 'Email address is required';
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(form.email)) newErrors.email = 'Enter a valid corporate email';
    if (!form.company.trim()) newErrors.company = 'Company / Institution is required';
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      setSubmitting(true);
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatusMessage({ text: 'Thank you. Your inquiry has been received by our commercial team.', ok: true });
        setForm({ firstName: '', lastName: '', email: '', company: '', subject: '', message: '' });
        setErrors({});
      } else {
        const errorMsg = data && typeof data === 'object' && 'error' in data && typeof (data as { error?: unknown }).error === 'string'
          ? (data as { error: string }).error
          : 'Unable to send message. Please contact us directly at info@fermacbio.in';
        setStatusMessage({ text: errorMsg, ok: false });
      }
    } catch {
      setStatusMessage({ text: 'Network connection issue. Please email info@fermacbio.in directly.', ok: false });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      {/* 1. Executive Hero Header */}
      <section className="relative bg-gradient-to-b from-[#002F3C] via-[#003847] to-[#004859] text-white pt-36 pb-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00BEDB_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-5">
            <span className="w-2 h-2 rounded-full bg-[#00BEDB] animate-pulse" />
            Global Commercial & Technical Inquiries
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Get In Touch <span className="text-[#00BEDB]">With Us</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            Whether you are sourcing high-purity Fusidic Acid / Sodium Fusidate APIs, scheduling a cGMP facility audit, or exploring contract bioprocess collaborations, our team is ready to assist.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-16 sm:py-20 bg-gray-50/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column (5 cols): Office Details, Facility, & Contacts */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Corporate HQ */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/90 shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0 text-[#002F3C]">
                    <svg className="w-5 h-5 text-[#002F3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#002F3C]">Corporate Headquarters</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed">
                      Plot No: 08, 1st Floor, Dommara Pochampally, Dundigal Village, Dundigal - Gandimaisamma - 500 043, Telangana, India.
                    </p>
                    <a
                      href="https://maps.app.goo.gl/7VTSratuc3JnYiNV6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#00BEDB] hover:underline mt-2.5"
                    >
                      <span>View on Google Maps</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Manufacturing Facility */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/90 shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-emerald-700">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#002F3C]">Factory &amp; Manufacturing Works (100% ZLD)</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed">
                      Survey No. 273 &amp; 274, Usirikapally Village, Shivampet Mandal, Medak District, Telangana, India, 502334. ~5-acre dedicated biomanufacturing campus with 20,000 sq. meter production block, 340 kL+ design capacity, and 100% Zero Liquid Discharge.
                    </p>
                    <a
                      href="https://maps.app.goo.gl/bxL38GxmpFgtziTH8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:underline mt-2.5"
                    >
                      <span>View Factory Location</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Leadership & Communications */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/90 shadow-xs space-y-4">
                {/* Executive Contacts */}
                <div className="space-y-3 pb-3 border-b border-gray-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#002F3C]">
                    Executive Leadership Contacts
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="font-bold text-gray-900">Mr. Suneel Kumar Battula</div>
                      <div className="text-[11px] text-gray-500 mb-1">Founder, CEO &amp; Technology Lead</div>
                      <div className="text-gray-700">Tel: <a href="tel:+919849499027" className="text-[#00BEDB] hover:underline font-semibold">+91 98494 99027</a></div>
                      <div className="text-gray-700">Email: <a href="mailto:Suneel@fermacbio.in" className="hover:underline">Suneel@fermacbio.in</a></div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="font-bold text-gray-900">Mr. Jeyamurga Prakash</div>
                      <div className="text-[11px] text-gray-500 mb-1">Co-Founder &amp; Project Lead</div>
                      <div className="text-gray-700">Tel: <a href="tel:+919666000728" className="text-[#00BEDB] hover:underline font-semibold">+91 96660 00728</a></div>
                      <div className="text-gray-700">Email: <a href="mailto:Prakash@fermacbio.in" className="hover:underline">Prakash@fermacbio.in</a></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 text-gray-600 border border-gray-200">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500">Corporate Office &amp; Main Line</div>
                    <div className="text-sm font-semibold text-gray-900 mt-0.5">
                      <a href="tel:+914024242999" className="hover:text-[#00BEDB] transition-colors">+91 40 2424 2999</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-3 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 text-gray-600 border border-gray-200">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500">Official Inquiries</div>
                    <div className="text-sm font-semibold text-gray-900 mt-0.5 space-y-0.5">
                      <div>Commercial: <a href="mailto:sales@fermacbio.in" className="text-[#00BEDB] hover:underline">sales@fermacbio.in</a></div>
                      <div>General: <a href="mailto:info@fermacbio.in" className="text-gray-700 hover:underline">info@fermacbio.in</a></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-3 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 text-gray-600 border border-gray-200">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500">Operating Hours</div>
                    <div className="text-xs text-gray-700 mt-0.5 leading-relaxed">
                      Monday – Friday: 9:00 AM – 6:00 PM IST<br />
                      Saturday: 9:00 AM – 1:00 PM IST
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (7 cols): Corporate Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-md">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-[#002F3C] text-xs font-bold uppercase tracking-wider mb-2">
                    Inquiry Form
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002F3C] tracking-tight">
                    Send Us a Message
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Fill out the technical inquiry details below and an authorized Fermac Bio representative will contact you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        className={`w-full rounded-xl border px-4 py-2.5 text-sm text-gray-900 outline-none transition-all ${
                          errors.firstName ? 'border-red-400 bg-red-50/30' : 'border-gray-200 bg-gray-50/50 focus:bg-white focus:border-[#00BEDB] focus:ring-2 focus:ring-[#00BEDB]/20'
                        }`}
                        placeholder="e.g. John"
                      />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        className={`w-full rounded-xl border px-4 py-2.5 text-sm text-gray-900 outline-none transition-all ${
                          errors.lastName ? 'border-red-400 bg-red-50/30' : 'border-gray-200 bg-gray-50/50 focus:bg-white focus:border-[#00BEDB] focus:ring-2 focus:ring-[#00BEDB]/20'
                        }`}
                        placeholder="e.g. Smith"
                      />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={`w-full rounded-xl border px-4 py-2.5 text-sm text-gray-900 outline-none transition-all ${
                          errors.email ? 'border-red-400 bg-red-50/30' : 'border-gray-200 bg-gray-50/50 focus:bg-white focus:border-[#00BEDB] focus:ring-2 focus:ring-[#00BEDB]/20'
                        }`}
                        placeholder="john.smith@company.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                        Company / Institution <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className={`w-full rounded-xl border px-4 py-2.5 text-sm text-gray-900 outline-none transition-all ${
                          errors.company ? 'border-red-400 bg-red-50/30' : 'border-gray-200 bg-gray-50/50 focus:bg-white focus:border-[#00BEDB] focus:ring-2 focus:ring-[#00BEDB]/20'
                        }`}
                        placeholder="Pharmaceutical Formulator Ltd"
                      />
                      {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Inquiry Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className={`w-full rounded-xl border px-4 py-2.5 text-sm text-gray-900 outline-none transition-all ${
                        errors.subject ? 'border-red-400 bg-red-50/30' : 'border-gray-200 bg-gray-50/50 focus:bg-white focus:border-[#00BEDB] focus:ring-2 focus:ring-[#00BEDB]/20'
                      }`}
                      placeholder="e.g. Fusidic Acid Micronized PSD Specification & Sample Request"
                    />
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Message & Requirements <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`w-full rounded-xl border px-4 py-3 text-sm text-gray-900 outline-none transition-all ${
                        errors.message ? 'border-red-400 bg-red-50/30' : 'border-gray-200 bg-gray-50/50 focus:bg-white focus:border-[#00BEDB] focus:ring-2 focus:ring-[#00BEDB]/20'
                      }`}
                      placeholder="Please specify dosage form, particle size requirements, batch quantities, or pharmacopeial grade..."
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#002F3C] hover:bg-[#003B4C] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {submitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Technical Inquiry</span>
                          <span>&rarr;</span>
                        </>
                      )}
                    </button>
                  </div>

                  {statusMessage && (
                    <div
                      className={`p-4 rounded-xl text-xs sm:text-sm font-medium ${
                        statusMessage.ok
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : 'bg-red-50 text-red-800 border border-red-200'
                      }`}
                    >
                      {statusMessage.text}
                    </div>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
