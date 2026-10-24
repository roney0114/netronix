import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaFileContract,
  FaLaptopCode,
  FaClipboardList,
  FaMoneyBillWave,
  FaCheckCircle,
  FaClock,
  FaCopyright,
  FaShieldAlt,
  FaExclamationTriangle,
  FaLink,
  FaBalanceScale,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaSearch,
  FaArrowUp,
  FaRegCheckCircle,
} from "react-icons/fa";
import ParticleBackground from "../components/ui/ParticleBackground";

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState("intro");
  const [searchQuery, setSearchQuery] = useState("");

  const sections = [
    { id: "intro", title: "1. Introduction", icon: FaFileContract, tag: "Scope" },
    { id: "services", title: "2. Our Services", icon: FaLaptopCode, tag: "Services" },
    { id: "inquiries", title: "3. Inquiries & Proposals", icon: FaClipboardList, tag: "Quotes" },
    { id: "payments", title: "4. Pricing & Payments", icon: FaMoneyBillWave, tag: "Fees" },
    { id: "client", title: "5. Client Responsibilities", icon: FaCheckCircle, tag: "Clients" },
    { id: "delivery", title: "6. Delivery & Changes", icon: FaClock, tag: "Projects" },
    { id: "ip", title: "7. Intellectual Property", icon: FaCopyright, tag: "Ownership" },
    { id: "confidentiality", title: "8. Confidentiality & Privacy", icon: FaShieldAlt, tag: "Data" },
    { id: "acceptable", title: "9. Acceptable Use", icon: FaExclamationTriangle, tag: "Conduct" },
    { id: "thirdparty", title: "10. Third-Party Services", icon: FaLink, tag: "External" },
    { id: "liability", title: "11. Disclaimers & Liability", icon: FaBalanceScale, tag: "Limits" },
    { id: "termination", title: "12. Suspension & Termination", icon: FaExclamationTriangle, tag: "Ending" },
    { id: "law", title: "13. Governing Law & Disputes", icon: FaBalanceScale, tag: "Legal" },
    { id: "changes", title: "14. Changes to These Terms", icon: FaClock, tag: "Updates" },
    { id: "contact", title: "15. Contact Us", icon: FaEnvelope, tag: "Contact" },
  ];

  // Scroll to top on initial page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Active Section Observer on Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0.1 }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-scroll sidebar navigation to track active section
  useEffect(() => {
    const activeNavBtn = document.getElementById(`nav-${activeSection}`);
    if (activeNavBtn) {
      activeNavBtn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [activeSection]);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredSections = sections.filter(
    (sec) =>
      sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sec.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-24 bg-[#070B16] text-white min-h-screen selection:bg-[#FF9112] selection:text-black">
      {/* Header Banner - Centered Alignment */}
      <section className="relative py-16 lg:py-24 border-b border-slate-800/80 overflow-hidden bg-slate-900/60">
        <ParticleBackground className="opacity-30" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-[#1C9773]/20 via-[#FF9112]/20 to-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="mb-6 flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#FF9112] hover:text-orange-400 font-semibold text-sm transition"
            >
              <FaArrowLeft /> Back to Home
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-teal-500/40 text-teal-400 text-xs md:text-sm font-semibold uppercase tracking-wider mb-6 shadow-xl backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping" />
            <FaFileContract className="text-base text-teal-400" />
            Official Terms & Conditions Portal
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Terms of Service <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#FF9112] via-amber-400 to-[#1C9773] bg-clip-text text-transparent">
              & User Agreements
            </span>
          </h1>

          <p className="text-slate-300 text-base md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed font-normal">
            Please read these terms carefully before using the Netronix Innovation website or engaging us for digital engineering and technical services.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-lg">
              <div className="text-2xl font-extrabold text-teal-400">Clear</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Project Scope Terms</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-lg">
              <div className="text-2xl font-extrabold text-[#FF9112]">Secure</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">IP & Deliverables</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-lg">
              <div className="text-2xl font-extrabold text-cyan-400">Act 2063</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Electronic Transactions</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-lg">
              <div className="text-2xl font-extrabold text-pink-400">Fair</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Operational Policies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main 2-Column Content Layout */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* Left Sticky Sidebar Index with Search Filter */}
          <aside className="lg:col-span-4 sticky top-28 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl shadow-2xl space-y-4 hidden lg:block max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF9112]">
                Terms Navigation
              </span>
              <span className="text-[10px] text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded-full font-mono">
                Live Tracking
              </span>
            </div>

            {/* In-page Filter Search Input */}
            <div className="relative">
              <FaSearch className="absolute left-3.5 top-3 text-slate-400 text-xs" />
              <input
                type="text"
                placeholder="Filter terms (e.g. payments, IP)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 outline-none focus:border-[#FF9112] transition"
              />
            </div>

            {/* Navigation List */}
            <div className="space-y-1.5 pt-1">
              {filteredSections.map((sec) => {
                const Icon = sec.icon;
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    id={`nav-${sec.id}`}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center justify-between cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-[#1C9773] to-[#15795C] text-white shadow-lg shadow-teal-500/20 translate-x-1 font-bold"
                        : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <Icon className={`text-sm shrink-0 ${isActive ? "text-white" : "text-teal-400"}`} />
                      <span className="truncate">{sec.title}</span>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-md font-mono shrink-0 ${isActive ? "bg-white/20 text-white" : "bg-slate-950 text-slate-400"}`}>
                      {sec.tag}
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Right Detailed Document Content */}
          <main className="lg:col-span-8 space-y-12 bg-slate-900/50 border border-slate-800/80 rounded-3xl p-8 md:p-14 backdrop-blur-xl shadow-2xl relative">

            {/* Section 1: Introduction */}
            <section id="intro" className="space-y-4 pt-2 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-[#1C9773]">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                    <FaFileContract className="text-xl" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-white">1. Introduction</h2>
                </div>
                <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-mono font-semibold">
                  Scope
                </span>
              </div>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                These Terms of Service ("Terms") apply to your access to and use of the Netronix Innovation website and related online content. "Netronix Innovation," "we," "us," and "our" refer to the business operating this website. "You" means a visitor, prospective customer, or client.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                By using this website, you agree to these Terms. If you do not agree, please do not use the website. Submitting a contact or quote form is an inquiry only; it does not by itself create a client relationship or require either party to proceed with a project.
              </p>
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 to-slate-950 border border-amber-500/30 text-amber-300 text-xs md:text-sm leading-relaxed mt-4 shadow-lg">
                <strong>Agreement Hierarchy:</strong> Where a signed contract, approved proposal, statement of work, or other written agreement applies to a specific service, that document will govern the specific project to the extent it conflicts with these general website Terms.
              </div>
            </section>

            {/* Section 2: Our Services */}
            <section id="services" className="space-y-5 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-[#FF9112]">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#FF9112]">
                    <FaLaptopCode className="text-xl" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-white">2. Our Services</h2>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-[#FF9112] text-xs font-mono font-semibold">
                  Offerings
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Netronix Innovation offers professional engineering and digital transformation solutions, including:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                {[
                  "Website & web application development",
                  "Custom software engineering",
                  "Mobile application solutions",
                  "Marketing, branding & UI/UX design",
                  "Networking, hosting & infrastructure",
                  "IT consulting & technical support"
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-950/60 border border-slate-800 rounded-xl flex items-center gap-2.5 shadow-md">
                    <FaRegCheckCircle className="text-[#FF9112] shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                The precise scope, deliverables, schedule, fees, and support periods will be confirmed separately in project agreements.
              </p>
            </section>

            {/* Section 3: Inquiries & Proposals */}
            <section id="inquiries" className="space-y-4 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="flex items-center gap-3 text-cyan-400">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <FaClipboardList className="text-xl" />
                </div>
                <h2 className="text-2xl font-extrabold text-white">3. Inquiries, Quotes & Acceptance</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                You agree to provide accurate information when contacting us or requesting a quote. Estimates and proposals are subject to the assumptions stated within them.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                A project begins only after both parties have agreed to commercial terms, written approvals, or initial payments. We reserve the right to decline inquiries that are unlawful or unfeasible.
              </p>
            </section>

            {/* Section 4: Pricing & Payments */}
            <section id="payments" className="space-y-4 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="flex items-center gap-3 text-emerald-400">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <FaMoneyBillWave className="text-xl" />
                </div>
                <h2 className="text-2xl font-extrabold text-white">4. Pricing, Invoices & Payments</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Fees, payment milestones, applicable taxes, and due dates are specified in project proposals or invoices. Website estimates are non-binding until confirmed in writing.
              </p>
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-2xl text-xs text-slate-400 leading-relaxed">
                Work outside agreed project scopes requires revised estimates and approvals. Late payments or cancellations are managed per signed agreements.
              </div>
            </section>

            {/* Section 5: Client Responsibilities */}
            <section id="client" className="space-y-4 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="flex items-center gap-3 text-pink-400">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
                  <FaCheckCircle className="text-xl" />
                </div>
                <h2 className="text-2xl font-extrabold text-white">5. Client Responsibilities</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                You are responsible for supplying required content, assets, feedback, and system access in a timely manner, and ensuring you hold lawful rights to all provided materials.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl flex items-center gap-2">
                  <FaRegCheckCircle className="text-pink-400 shrink-0" /> Timely feedback & approvals
                </div>
                <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl flex items-center gap-2">
                  <FaRegCheckCircle className="text-pink-400 shrink-0" /> Accurate project requirements
                </div>
              </div>
            </section>

            {/* Section 6: Delivery & Changes */}
            <section id="delivery" className="space-y-4 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="flex items-center gap-3 text-amber-400">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <FaClock className="text-xl" />
                </div>
                <h2 className="text-2xl font-extrabold text-white">6. Delivery, Revisions & Support</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Milestones, revision rounds, and maintenance terms are set out in your service agreement. Client delays may impact delivery schedules and costs.
              </p>
            </section>

            {/* Section 7: Intellectual Property */}
            <section id="ip" className="space-y-4 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="flex items-center gap-3 text-[#1C9773]">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <FaCopyright className="text-xl" />
                </div>
                <h2 className="text-2xl font-extrabold text-white">7. Intellectual Property</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Website branding, designs, and code are owned by Netronix Innovation. Project deliverable ownership and licensing are defined in individual client agreements. Open-source or third-party libraries remain subject to their respective licenses.
              </p>
            </section>

            {/* Section 8: Confidentiality & Privacy */}
            <section id="confidentiality" className="space-y-4 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="flex items-center gap-3 text-purple-400">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <FaShieldAlt className="text-xl" />
                </div>
                <h2 className="text-2xl font-extrabold text-white">8. Confidentiality & Privacy</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Personal data submitted through our website is managed in accordance with our{" "}
                <Link to="/privacy-policy" className="text-[#FF9112] underline underline-offset-4 hover:text-amber-300 font-semibold">
                  Privacy Policy
                </Link>
                . Client project disclosures and specialized NDAs are governed by separate project contracts.
              </p>
            </section>

            {/* Section 9: Acceptable Use */}
            <section id="acceptable" className="space-y-4 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="flex items-center gap-3 text-indigo-400">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <FaExclamationTriangle className="text-xl" />
                </div>
                <h2 className="text-2xl font-extrabold text-white">9. Acceptable Use</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                You must not use our website to violate laws, infringe rights, distribute malware, attempt unauthorized access, or transmit abusive or fraudulent content.
              </p>
            </section>

            {/* Section 10: Third-Party Services */}
            <section id="thirdparty" className="space-y-4 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="flex items-center gap-3 text-cyan-400">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <FaLink className="text-xl" />
                </div>
                <h2 className="text-2xl font-extrabold text-white">10. Third-Party Services & Links</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our platform may link to third-party tools, hosting providers, or APIs governed by their own independent terms and policies. We assume no direct liability for third-party outages or changes.
              </p>
            </section>

            {/* Section 11: Disclaimers & Liability */}
            <section id="liability" className="space-y-4 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="flex items-center gap-3 text-emerald-400">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <FaBalanceScale className="text-xl" />
                </div>
                <h2 className="text-2xl font-extrabold text-white">11. Disclaimers & Liability</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Website materials are provided for general informational purposes. To the extent permitted by applicable law, we disclaim liability for indirect losses, and project liability is governed by specific client contracts.
              </p>
            </section>

            {/* Section 12: Suspension & Termination */}
            <section id="termination" className="space-y-4 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="flex items-center gap-3 text-pink-400">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
                  <FaExclamationTriangle className="text-xl" />
                </div>
                <h2 className="text-2xl font-extrabold text-white">12. Suspension & Termination</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                We may suspend or restrict website access for maintenance or security reasons. Project cancellations, refunds, and handover protocols are governed by individual agreements.
              </p>
            </section>

            {/* Section 13: Governing Law & Disputes */}
            <section id="law" className="space-y-4 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="flex items-center gap-3 text-[#FF9112]">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#FF9112]">
                  <FaBalanceScale className="text-xl" />
                </div>
                <h2 className="text-2xl font-extrabold text-white">13. Governing Law & Disputes</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                These terms are interpreted in accordance with the laws of Nepal, including relevant legislation such as the <strong className="text-white">Electronic Transactions Act, 2063</strong> and <strong className="text-white">Consumer Protection Act, 2075</strong>.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs">
                <a href="https://lawcommission.gov.np/content/13397/" target="_blank" rel="noreferrer" className="text-[#FF9112] underline underline-offset-4">
                  Electronic Transactions Act, 2063
                </a>
                <span className="text-slate-600">•</span>
                <a href="https://lawcommission.gov.np/content/12167/12167-the-consumer-protection-act-2/" target="_blank" rel="noreferrer" className="text-[#FF9112] underline underline-offset-4">
                  Consumer Protection Act, 2075
                </a>
              </div>
            </section>

            {/* Section 14: Changes to These Terms */}
            <section id="changes" className="space-y-4 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="flex items-center gap-3 text-teal-400">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <FaClock className="text-xl" />
                </div>
                <h2 className="text-2xl font-extrabold text-white">14. Changes to These Terms</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                We may revise these Terms of Service periodically. Updated versions will be published on this page with a revised date stamp.
              </p>
            </section>

            {/* Section 15: Contact Us */}
            <section id="contact" className="space-y-6 scroll-mt-28">
              <div className="flex items-center gap-3 text-[#FF9112]">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#FF9112]">
                  <FaEnvelope className="text-xl" />
                </div>
                <h2 className="text-2xl font-extrabold text-white">15. Contact Us</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                If you have any questions or inquiries regarding these Terms of Service, please reach out to us:
              </p>

              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <FaFileContract className="text-[#1C9773]" /> Netronix Innovation — Legal & Support Team
                </h4>
                <div className="grid sm:grid-cols-3 gap-4 text-xs text-slate-300 pt-2">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <FaMapMarkerAlt className="text-[#FF9112] text-base shrink-0" /> Chitwan, Nepal
                  </div>
                  <a
                    href="tel:+9779767468934"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:text-[#1C9773] transition"
                  >
                    <FaPhoneAlt className="text-[#1C9773] text-base shrink-0" /> +977-9767468934
                  </a>
                  <a
                    href="mailto:contact@netronixinnovation.com"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:text-[#FF9112] transition"
                  >
                    <FaEnvelope className="text-[#FF9112] text-base shrink-0" /> contact@netronixinnovation.com
                  </a>
                </div>
              </div>
            </section>

            {/* Back to Top Button */}
            <div className="pt-8 flex justify-center">
              <button
                onClick={scrollToTop}
                className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#FF9112] text-slate-300 hover:text-white font-semibold text-xs transition duration-300 flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <FaArrowUp /> Back to Top
              </button>
            </div>

          </main>
        </div>
      </section>

      {/* Full-Width Bottom Callout Banner */}
      <section className="max-w-7xl mx-auto px-6 pb-20 pt-4">
        <div className="bg-gradient-to-r from-slate-900 via-[#0A1A2F] to-slate-950 border border-teal-500/40 rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-2xl text-center group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1C9773]/15 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF9112]/15 blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-teal-500/40 text-teal-400 text-xs md:text-sm font-semibold uppercase tracking-wider shadow-lg backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
              Transparent Guidelines & Reliable Partnership
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Build With <span className="bg-gradient-to-r from-[#FF9112] via-amber-400 to-[#1C9773] bg-clip-text text-transparent">Netronix</span>?
            </h2>

            <p className="text-slate-300 text-base md:text-xl font-medium leading-relaxed">
              Let's create robust digital solutions tailored to your business goals.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:contact@netronixinnovation.com?subject=Project%20Inquiry"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#1C9773] to-[#15795C] hover:from-[#15795C] hover:to-[#1C9773] text-white font-bold text-sm md:text-base transition duration-300 shadow-xl shadow-teal-500/20 flex items-center gap-2 hover:scale-105 cursor-pointer"
              >
                <FaEnvelope /> Start a Project
              </a>

              <Link
                to="/privacy-policy"
                className="px-8 py-4 rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-sm md:text-base transition backdrop-blur-md"
              >
                View Privacy Policy →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}