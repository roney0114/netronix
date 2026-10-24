import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaShieldAlt,
  FaLock,
  FaUserSecret,
  FaFileContract,
  FaCookieBite,
  FaServer,
  FaRegCheckCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGlobe,
  FaBalanceScale,
  FaChild,
  FaExclamationTriangle,
  FaHistory,
  FaSearch,
  FaArrowUp,
  FaCheckDouble,
  FaUserShield,
} from "react-icons/fa";
import ParticleBackground from "../components/ui/ParticleBackground";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("intro");
  const [searchQuery, setSearchQuery] = useState("");

  const sections = [
    { id: "intro", title: "1. Introduction", icon: FaShieldAlt, tag: "Scope" },
    { id: "collect", title: "2. Information We Collect", icon: FaUserSecret, tag: "Data" },
    { id: "use", title: "3. How We Use Information", icon: FaFileContract, tag: "Purpose" },
    { id: "forms", title: "4. Contact Forms & Inquiries", icon: FaEnvelope, tag: "Forms" },
    { id: "cookies", title: "5. Cookies & Technologies", icon: FaCookieBite, tag: "Web" },
    { id: "thirdparty", title: "6. Third-Party Services", icon: FaServer, tag: "Vendors" },
    { id: "security", title: "7. Data Security", icon: FaLock, tag: "Encryption" },
    { id: "retention", title: "8. Data Retention", icon: FaHistory, tag: "Timeline" },
    { id: "sharing", title: "9. Sharing of Information", icon: FaFileContract, tag: "Disclosure" },
    { id: "clientdata", title: "10. Client & Project Data", icon: FaServer, tag: "Projects" },
    { id: "confidentiality", title: "11. Confidentiality", icon: FaLock, tag: "NDA" },
    { id: "rights", title: "12. Privacy Rights (Act 2075)", icon: FaBalanceScale, tag: "Rights" },
    { id: "children", title: "13. Children's Privacy", icon: FaChild, tag: "Protection" },
    { id: "transfers", title: "14. International Transfers", icon: FaGlobe, tag: "Global" },
    { id: "links", title: "15. External Links", icon: FaGlobe, tag: "Links" },
    { id: "breaches", title: "16. Security Incidents", icon: FaExclamationTriangle, tag: "Incidents" },
    { id: "changes", title: "17. Policy Changes", icon: FaHistory, tag: "Updates" },
    { id: "contact", title: "18. Contact Us", icon: FaEnvelope, tag: "Support" },
  ];

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
            <FaUserShield className="text-base text-teal-400" />
            Official Privacy & Security Portal
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Privacy Policy <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#FF9112] via-amber-400 to-[#1C9773] bg-clip-text text-transparent">
              & Data Governance
            </span>
          </h1>

          <p className="text-slate-300 text-base md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed font-normal">
            At Netronix Innovation, we respect your privacy and enforce strict technical safeguards to protect your data under applicable laws, including Nepal's <strong className="text-white">Privacy Act, 2075</strong>.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-lg">
              <div className="text-2xl font-extrabold text-teal-400">100%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Confidentiality SLA</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-lg">
              <div className="text-2xl font-extrabold text-[#FF9112]">Act 2075</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Nepal Privacy Compliant</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-lg">
              <div className="text-2xl font-extrabold text-cyan-400">256-Bit</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Enterprise Encryption</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-lg">
              <div className="text-2xl font-extrabold text-pink-400">Zero</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">Third-Party Data Selling</div>
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
                Policy Navigation
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
                placeholder="Filter clauses (e.g. cookies, NDA)..."
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
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center justify-between cursor-pointer ${isActive
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
                    <FaShieldAlt className="text-xl" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-white">1. Introduction</h2>
                </div>
                <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-mono font-semibold">
                  Official Scope
                </span>
              </div>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Welcome to Netronix Innovation. At Netronix Innovation, we respect your privacy and are committed to protecting the personal information you share with us.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                This Privacy Policy explains how Netronix Innovation ("Netronix Innovation," "we," "us," or "our") collects, uses, stores, protects, and manages information when you:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                <li className="p-3.5 bg-slate-950/60 border border-slate-800 rounded-xl flex items-center gap-2.5 shadow-md">
                  <FaRegCheckCircle className="text-[#FF9112] shrink-0" /> Visit our corporate website
                </li>
                <li className="p-3.5 bg-slate-950/60 border border-slate-800 rounded-xl flex items-center gap-2.5 shadow-md">
                  <FaRegCheckCircle className="text-[#FF9112] shrink-0" /> Contact us through inquiry forms
                </li>
                <li className="p-3.5 bg-slate-950/60 border border-slate-800 rounded-xl flex items-center gap-2.5 shadow-md">
                  <FaRegCheckCircle className="text-[#FF9112] shrink-0" /> Request technical quotations
                </li>
                <li className="p-3.5 bg-slate-950/60 border border-slate-800 rounded-xl flex items-center gap-2.5 shadow-md">
                  <FaRegCheckCircle className="text-[#FF9112] shrink-0" /> Communicate with our team
                </li>
                <li className="p-3.5 bg-slate-950/60 border border-slate-800 rounded-xl flex items-center gap-2.5 shadow-md">
                  <FaRegCheckCircle className="text-[#FF9112] shrink-0" /> Use services provided by us
                </li>
                <li className="p-3.5 bg-slate-950/60 border border-slate-800 rounded-xl flex items-center gap-2.5 shadow-md">
                  <FaRegCheckCircle className="text-[#FF9112] shrink-0" /> Submit inquiry requests
                </li>
              </ul>
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 to-slate-950 border border-amber-500/30 text-amber-300 text-xs md:text-sm leading-relaxed mt-4 shadow-lg">
                <strong>Legal Compliance Notice:</strong> We handle personal information responsibly and in accordance with applicable laws and regulations of Nepal, including the <strong>Privacy Act, 2075</strong>. By using our website or providing information to us, you acknowledge the practices described in this Privacy Policy.
              </div>
            </section>

            {/* Section 2: Information We Collect */}
            <section id="collect" className="space-y-5 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-[#FF9112]">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#FF9112]">
                    <FaUserSecret className="text-xl" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-white">2. Information We Collect</h2>
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-[#FF9112] text-xs font-mono font-semibold">
                  Data Scope
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                We collect information that you voluntarily provide when interacting with Netronix Innovation.
              </p>

              <div className="space-y-3">
                <h3 className="text-sm font-bold text-[#1C9773] uppercase tracking-wider">Personal Information</h3>
                <p className="text-slate-400 text-xs leading-relaxed">Depending on the service or interaction, we may collect:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-slate-300">
                  {["Full name", "Company/Organization", "Work email address", "Phone number", "Location address", "Website/Social media", "Service requirements", "Project specifications", "Billing information"].map((item, idx) => (
                    <div key={idx} className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl font-medium shadow-sm">
                      • {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-3">
                <h3 className="text-sm font-bold text-[#FF9112] uppercase tracking-wider">Technical Information</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  When you visit our website, certain technical information may be automatically collected, depending on hosting, analytics, security, and infrastructure:
                </p>
                <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-2xl text-xs text-slate-400 leading-relaxed font-mono">
                  IP address, browser type, device type, operating system, pages visited, geographic information, referring URL, date/time stamp, and website interaction metrics.
                </div>
              </div>
            </section>

            {/* Section 3: How We Use Information */}
            <section id="use" className="space-y-5 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-cyan-400">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <FaFileContract className="text-xl" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-white">3. How We Use Your Information</h2>
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold">
                  Purpose & Purpose
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Netronix Innovation uses collected information for legitimate business and operational purposes:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 bg-slate-950/60 border border-slate-800 rounded-2xl space-y-2 hover:border-[#1C9773]/40 transition">
                  <h4 className="text-sm font-bold text-[#1C9773]">Providing Our Services</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Respond to inquiries, understand project specifications, provide quotations, deliver requested engineering services, provide technical support, and maintain client relationships.
                  </p>
                </div>

                <div className="p-5 bg-slate-950/60 border border-slate-800 rounded-2xl space-y-2 hover:border-[#FF9112]/40 transition">
                  <h4 className="text-sm font-bold text-[#FF9112]">Improving Our Services</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Enhance website capabilities, improve service quality, identify technical problems, optimize user experience, and develop new digital solutions.
                  </p>
                </div>

                <div className="p-5 bg-slate-950/60 border border-slate-800 rounded-2xl space-y-2 hover:border-cyan-500/40 transition">
                  <h4 className="text-sm font-bold text-cyan-400">Security & Integrity</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Detect suspicious activity, prevent unauthorized system access, protect our infrastructure, investigate security incidents, and maintain database integrity.
                  </p>
                </div>

                <div className="p-5 bg-slate-950/60 border border-slate-800 rounded-2xl space-y-2 hover:border-pink-500/40 transition">
                  <h4 className="text-sm font-bold text-pink-400">Legal & Regulatory</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Comply with applicable Nepalese laws, legal processes, regulatory filings, court mandates, or lawful government requests.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Contact Forms & Inquiries */}
            <section id="forms" className="space-y-4 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="flex items-center gap-3 text-pink-400">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
                  <FaEnvelope className="text-xl" />
                </div>
                <h2 className="text-2xl font-extrabold text-white">4. Contact Forms and Inquiries</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                If you submit information through our contact or inquiry forms, we collect your name, email address, phone number, company name, service requirements, and message details.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                We use this information strictly to respond to your inquiry and communicate regarding your requested services. We do not use contact information for unrelated marketing purposes without your permission.
              </p>
            </section>

            {/* Section 5: Cookies and Similar Technologies */}
            <section id="cookies" className="space-y-4 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="flex items-center gap-3 text-amber-400">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <FaCookieBite className="text-xl" />
                </div>
                <h2 className="text-2xl font-extrabold text-white">5. Cookies and Similar Technologies</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our website may use cookies or similar technologies to improve functionality, security, performance, and user experience.
              </p>
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-2xl text-xs text-slate-400 leading-relaxed">
                Cookies help us remember preferences, analyze web traffic, maintain secure sessions, and deliver seamless interactions. You can configure your browser to block or delete cookies; however, disabling certain cookies may affect some website functionality.
              </div>
            </section>

            {/* Section 6: Third-Party Services */}
            <section id="thirdparty" className="space-y-4 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="flex items-center gap-3 text-[#1C9773]">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <FaServer className="text-xl" />
                </div>
                <h2 className="text-2xl font-extrabold text-white">6. Third-Party Services</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Netronix Innovation may use trusted third-party service providers for website hosting, cloud infrastructure, domain management, email delivery, analytics, security monitoring, and customer support.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                These third parties process information according to their respective privacy policies and contractual security mandates.
              </p>
            </section>

            {/* Section 7: Data Security */}
            <section id="security" className="space-y-5 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-emerald-400">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <FaLock className="text-xl" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-white">7. Data Security</h2>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-semibold">
                  256-Bit Protection
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                We take technical and organizational measures to protect personal information against unauthorized access, misuse, alteration, disclosure, loss, or destruction.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300">
                {["Access controls", "Secure auth", "Encryption", "Cloud hosting", "Regular updates", "Security audits", "Backup procedures", "Restricted access"].map((sec, idx) => (
                  <div key={idx} className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl text-center font-medium shadow-sm">
                    🔒 {sec}
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Data Retention */}
            <section id="retention" className="space-y-4 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="flex items-center gap-3 text-purple-400">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <FaHistory className="text-xl" />
                </div>
                <h2 className="text-2xl font-extrabold text-white">8. Data Retention</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including fulfilling contracted services, maintaining business records, resolving disputes, and meeting legal requirements.
              </p>
            </section>

            {/* Section 9: Sharing of Information */}
            <section id="sharing" className="space-y-4 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="flex items-center gap-3 text-[#FF9112]">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#FF9112]">
                  <FaFileContract className="text-xl" />
                </div>
                <h2 className="text-2xl font-extrabold text-white">9. Sharing of Information</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Netronix Innovation does not sell or rent your personal information as a general business practice. We may share information strictly when necessary with trusted Service Providers, Professional Advisors, Legal Authorities (under lawful court orders), or as part of a Corporate Restructuring.
              </p>
            </section>

            {/* Section 10 & 11: Client Data & Confidentiality */}
            <section id="confidentiality" className="space-y-4 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="flex items-center gap-3 text-cyan-400">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <FaLock className="text-xl" />
                </div>
                <h2 className="text-2xl font-extrabold text-white">10 & 11. Client Project Data & Confidentiality</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                When you hire Netronix Innovation for software development, web applications, cloud hosting, IT support, or networking, you may share sensitive business documentation, source code, credentials, customer lists, or proprietary specifications.
              </p>
              <div className="p-5 bg-slate-950/80 border border-slate-800 rounded-2xl text-xs md:text-sm text-slate-300 leading-relaxed space-y-2 shadow-lg">
                <p className="font-bold text-[#FF9112] flex items-center gap-2">
                  <FaCheckDouble /> Non-Disclosure Guarantee:
                </p>
                <p className="text-slate-400 text-xs">
                  We treat all project assets, codebases, credentials, and technical documentation with strict confidentiality, protected by formal Non-Disclosure Agreements (NDAs) where appropriate.
                </p>
              </div>
            </section>

            {/* Section 12: Your Privacy Rights (Nepal Privacy Act 2075) */}
            <section id="rights" className="space-y-5 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-indigo-400">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <FaBalanceScale className="text-xl" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-white">12. Your Privacy Rights (Nepal Privacy Act, 2075)</h2>
                </div>
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono font-semibold">
                  Nepal Legal Framework
                </span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Subject to Nepal's <strong>Privacy Act, 2075</strong>, you have rights regarding your personal information:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl flex items-center gap-2">
                  <FaRegCheckCircle className="text-indigo-400 shrink-0" /> Right to know data usage
                </div>
                <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl flex items-center gap-2">
                  <FaRegCheckCircle className="text-indigo-400 shrink-0" /> Right to request data access
                </div>
                <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl flex items-center gap-2">
                  <FaRegCheckCircle className="text-indigo-400 shrink-0" /> Right to request data correction
                </div>
                <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl flex items-center gap-2">
                  <FaRegCheckCircle className="text-indigo-400 shrink-0" /> Right to request deletion
                </div>
              </div>
            </section>

            {/* Section 13-17: Additional Declarations */}
            <section id="changes" className="space-y-6 border-b border-slate-800/80 pb-10 scroll-mt-28">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white text-[#1C9773]">13. Children's Privacy</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Our services are intended for businesses and professionals. We do not knowingly collect personal information from children.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-white text-[#FF9112]">14. International Data Transfers</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Some cloud, analytics, or hosting infrastructure providers we use may operate servers outside Nepal. We ensure appropriate safeguards exist for all data transfers.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-white text-cyan-400">15 & 16. External Links & Security Incidents</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We maintain active incident management policies. In the event of a security incident affecting your data, we will assess, contain, investigate, and provide notifications in compliance with applicable law.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-white text-pink-400">17. Changes to This Privacy Policy</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We may update this Privacy Policy periodically. Any revisions will be published on this page with an updated date stamp.
                </p>
              </div>
            </section>

            {/* Section 18: Contact Us */}
            <section id="contact" className="space-y-6 scroll-mt-28">
              <div className="flex items-center gap-3 text-[#FF9112]">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#FF9112]">
                  <FaEnvelope className="text-xl" />
                </div>
                <h2 className="text-2xl font-extrabold text-white">18. Contact Us & Privacy Inquiries</h2>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                If you have questions, concerns, or requests regarding this Privacy Policy or the way Netronix Innovation handles personal information, please reach out to us:
              </p>

              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <FaShieldAlt className="text-[#1C9773]" /> Netronix Innovation — Privacy Compliance Team
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
                <div className="pt-2 text-xs text-slate-400">
                  For privacy-related inquiries, please include <strong>"Privacy Inquiry"</strong> in the subject line of your email.
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

      {/* Full-Width "Your Privacy Matters" Bottom Callout Banner */}
      <section className="max-w-7xl mx-auto px-6 pb-20 pt-4">
        <div className="bg-gradient-to-r from-slate-900 via-[#0A1A2F] to-slate-950 border border-teal-500/40 rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-2xl text-center group">
          {/* Ambient Radial Background Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1C9773]/15 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF9112]/15 blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-teal-500/40 text-teal-400 text-xs md:text-sm font-semibold uppercase tracking-wider shadow-lg backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
              100% Data Protection & Security Commitment
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Your Privacy <span className="bg-gradient-to-r from-[#FF9112] via-amber-400 to-[#1C9773] bg-clip-text text-transparent">Matters</span>
            </h2>

            <p className="text-slate-300 text-base md:text-xl font-medium leading-relaxed">
              Your information. Your trust. Our responsibility.
            </p>

            <div className="inline-block px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#FF9112]/20 via-[#1C9773]/20 to-[#FF9112]/20 border border-[#FF9112]/40 text-[#FF9112] font-extrabold text-base md:text-lg tracking-wider">
              Innovate. Connect. Transform.
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:contact@netronixinnovation.com?subject=Privacy%20Inquiry"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#1C9773] to-[#15795C] hover:from-[#15795C] hover:to-[#1C9773] text-white font-bold text-sm md:text-base transition duration-300 shadow-xl shadow-teal-500/20 flex items-center gap-2 hover:scale-105 cursor-pointer"
              >
                <FaEnvelope /> Contact Compliance Team
              </a>

              <Link
                to="/services"
                className="px-8 py-4 rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-sm md:text-base transition backdrop-blur-md"
              >
                Explore Service Portal →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
