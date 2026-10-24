import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLaptopCode,
  FaCode,
  FaNetworkWired,
  FaPaintBrush,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaCheckCircle,
  FaShieldAlt,
  FaLightbulb,
  FaRocket,
  FaUsers,
  FaAward,
  FaCalendarAlt,
} from "react-icons/fa";

import ParticleBackground from "../components/ui/ParticleBackground";
import { useQuoteModal } from "../context/QuoteContext";

// Team Photos
import member1 from "../assets/team/member1.png";
import member2 from "../assets/team/member2.png";
import member3 from "../assets/team/member3.png";
import member4 from "../assets/team/member4.png";

/* ==========================================================================
   1. TEAM DATASET
   ========================================================================== */
export const teamMembers = [
  {
    id: "sujan-sapkota",
    name: "Sujan Sapkota",
    role: "CRM Manager and Customer Support Manager",
    category: "Customer Support & Operations",
    badge: "Core Leadership",
    image: member1,
    icon: FaLaptopCode,
    color: "#FF9112",
    accentGlow: "rgba(255, 145, 18, 0.25)",
    bio: "Manages client relationships, company records, member information, and customer support while ensuring smooth communication and a reliable experience for every client.",
    fullDetails:
      "Sujan oversees end-to-end client communications, technical support operations, project requirement intake, and customer success pipelines at Netronix Innovation. He bridges enterprise clients with our engineering squad to guarantee seamless project tracking, swift resolution of technical inquiries, and high SLA compliance across all contracts.",
    scopeTitle: "Key Specializations & Support Scope:",
    features: [
      "Client Relationship Management & Enterprise Account Care",
      "24/7 Technical Support Coordination & Rapid SLA Escalation",
      "Discovery Consultations & Client Requirement Gathering",
      "Company Record Keeping & Project Documentation Audits",
      "Client Onboarding, Account Handover & Milestone Reviews",
      "Service Feedback Loops & Ongoing Client Satisfaction Monitoring",
    ],
    tech: [
      "Customer Support",
      "Relationship Management",
      "Problem Solving",
      "Communication",
      "CRM Systems",
      "Client Onboarding",
      "SLA Tracking",
      "Helpdesk Coordination",
    ],
    highlight: "99.4% Client Satisfaction",
    metrics: "15-Min Response SLA • 35+ Project Accounts Managed",
    experience: "4+ Years Operations & Customer Care",
    portfolioUrl: null,
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "contact@netronixinnovation.com",
  },
  {
    id: "sandesh-bhattarai",
    name: "Sandesh Bhattarai",
    role: "Full Stack Engineer",
    category: "Web & Software Engineering",
    badge: "Engineering Lead",
    image: member2,
    icon: FaCode,
    color: "#1C9773",
    accentGlow: "rgba(28, 151, 115, 0.25)",
    bio: "Expert full stack engineer crafting reactive web platforms, scalable REST APIs, database systems, and lightning-fast user interfaces with React, Node.js, and modern cloud stacks.",
    fullDetails:
      "Sandesh is a senior full stack developer specializing in responsive web architectures, modern API design, cloud server deployment, and fluid user interfaces. With deep expertise across React, Next.js, Node.js, and PostgreSQL, he architects enterprise web portals with sub-second load times, automated deployment pipelines, and bulletproof security standards.",
    scopeTitle: "Key Engineering Deliverables & Scope:",
    features: [
      "Modern Reactive Web Applications with React & Next.js",
      "Scalable RESTful & GraphQL Backend API Architecture with Node.js",
      "PostgreSQL & MongoDB Relational Database Design & Indexing",
      "Cloud Linux VPS Deployment, Nginx Reverse Proxy & SSL Hardening",
      "Fluid Micro-Animations & Responsive Styling with Tailwind CSS",
      "100% PageSpeed Performance Engineering & Technical SEO Setup",
    ],
    tech: [
      "React & Next.js",
      "Node.js & Express",
      "Database Design",
      "UI/UX Engineering",
      "PostgreSQL",
      "Tailwind CSS",
      "Linux VPS & Nginx",
      "REST APIs",
      "Docker",
      "Vite",
    ],
    highlight: "100% PageSpeed & Modern UI",
    metrics: "Sub-500ms Page Load • 35+ Web Solutions Deployed",
    experience: "5+ Years Full Stack Engineering",
    portfolioUrl: "https://bsandesh.com.np/",
    linkedin: "https://linkedin.com/in/sandesh-bhattarai-b2b384281",
    github: "https://github.com/roney0114",
    email: "contact@bsandesh.com.np",
  },
  {
    id: "nirmal-acharya",
    name: "Nirmal Acharya",
    role: "Network & Security Engineer",
    category: "Infrastructure & Cyber Defense",
    badge: "Infrastructure Lead",
    image: member3,
    icon: FaNetworkWired,
    color: "#1C9773",
    accentGlow: "rgba(28, 151, 115, 0.25)",
    bio: "Specialist in enterprise MikroTik RouterOS configurations, fiber optic backbone design, perimeter firewall rules, and zero-downtime campus network topologies across Nepal.",
    fullDetails:
      "Nirmal leads enterprise network architecture, WAN failover implementations, and perimeter defense at Netronix Innovation. Certified in MikroTik RouterOS and enterprise switching, he designs mission-critical campus networks for hospitals, educational institutions, and multi-branch commercial enterprises requiring 99.9% network reliability.",
    scopeTitle: "Key Network Infrastructure & Scope:",
    features: [
      "Enterprise MikroTik RouterOS Multi-WAN Load Balancing & Failover",
      "Multi-Floor VLAN Network Segmentation with Strict Traffic Isolation",
      "Encrypted Site-to-Site WireGuard & IPsec Corporate VPN Tunnels",
      "Perimeter Layer-7 Firewall Defense, NAT Rules & DDoS Mitigation",
      "Fiber Optic Backbone Distribution, Splicing & OTDR Testing",
      "Enterprise WiFi Deployment with Bandwidth Queuing & Captive Portals",
    ],
    tech: [
      "MikroTik RouterOS",
      "Cisco Networks",
      "Firewall & VPN",
      "Traffic Balancing",
      "VLAN / 802.1Q",
      "WireGuard & IPsec",
      "Bandwidth QoS",
      "Fiber Optic Layouts",
    ],
    highlight: "Zero-Downtime Networks",
    metrics: "99.9% Network Uptime • Sub-15ms Branch Sync",
    experience: "4+ Years Enterprise Networking",
    portfolioUrl: null,
    linkedin: "https://www.linkedin.com/in/nirmal-acharya/",
    github: "https://github.com",
    email: "support@netronixinnovation.com",
  },
  {
    id: "pratik-mahato",
    name: "Pratik Mahato",
    role: "Lead UI/UX & Graphic Designer",
    category: "Creative Direction & Brand Identity",
    badge: "Creative Lead",
    image: member4,
    icon: FaPaintBrush,
    color: "#FF9112",
    accentGlow: "rgba(255, 145, 18, 0.25)",
    bio: "Award-winning visual artisan crafting immersive brand identities, Figma design systems, motion graphics, and conversion-optimized digital user interfaces for modern web and mobile apps.",
    fullDetails:
      "Pratik spearheads visual design, corporate identity systems, and user experience architecture at Netronix Innovation. Blending psychology with modern typographic theory, he produces distinctive brand identities, scalable Figma design systems, and conversion-focused web layouts for enterprise clients and digital startups.",
    scopeTitle: "Key Creative Design & Service Scope:",
    features: [
      "Atomic Figma UI/UX Component Libraries & Design Systems",
      "Complete Corporate Brand Identity Kits (Logo, Typography & Palette)",
      "High-Fidelity Interactive Web & Mobile App Prototypes",
      "Conversion-Centered Landing Page Layouts & User Flow Wireframing",
      "Vector Graphics, Marketing Collaterals & Motion Assets",
      "Print Media Packaging, Corporate Stationery & Brochure Design",
    ],
    tech: [
      "Figma UI/UX",
      "Brand Identity",
      "Motion Design",
      "Graphic Design",
      "Design Systems",
      "Adobe Illustrator",
      "Photoshop",
      "Interactive Prototyping",
    ],
    highlight: "Award-Winning UI/UX System",
    metrics: "40+ Brand Books Crafted • High-Fidelity UI Kits",
    experience: "4+ Years Visual & UI/UX Design",
    portfolioUrl: "https://pratikmahato.com.np/",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "contact@pratikmahato.com.np",
  },
];

const culturePillars = [
  {
    icon: FaCode,
    title: "Engineering Rigor",
    desc: "We write clean, modular, and well-documented code designed to scale without technical debt.",
    color: "from-[#1C9773]/20 to-[#1C9773]/5",
    border: "border-[#1C9773]/30",
    text: "text-[#1C9773]",
  },
  {
    icon: FaShieldAlt,
    title: "Security by Default",
    desc: "From encrypted database backends to enterprise MikroTik firewall policies, security is baked into our DNA.",
    color: "from-[#FF9112]/20 to-[#FF9112]/5",
    border: "border-[#FF9112]/30",
    text: "text-[#FF9112]",
  },
  {
    icon: FaLightbulb,
    title: "Innovation Focused",
    desc: "We stay ahead of modern web frameworks, AI integration, and networking technologies to keep clients ahead.",
    color: "from-[#1C9773]/20 to-[#1C9773]/5",
    border: "border-[#1C9773]/30",
    text: "text-[#1C9773]",
  },
  {
    icon: FaUsers,
    title: "Client Synergy",
    desc: "Direct engineer-to-client collaboration with transparent sprint demos and zero technical middlemen.",
    color: "from-[#FF9112]/20 to-[#FF9112]/5",
    border: "border-[#FF9112]/30",
    text: "text-[#FF9112]",
  },
];

const teamStats = [
  { value: "4", label: "Core Technical Specialists", icon: FaUsers },
  { value: "35+", label: "Digital Solutions Delivered", icon: FaRocket },
  { value: "100%", label: "In-House Engineering", icon: FaCheckCircle },
  { value: "24/7", label: "Technical Support Readiness", icon: FaShieldAlt },
];

/* ==========================================================================
   2. TEAM MEMBER MODAL COMPONENT
   ========================================================================== */
export function TeamMemberModal({ member, onClose }) {
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    if (!member) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [member, onClose]);

  if (!member) return null;

  const Icon = member.icon;
  const firstName = member.name.split(" ")[0];

  return (
    <div
      className="fixed inset-0 z-50 bg-[#070B16]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Detailed profile for ${member.name}`}
    >
      <div
        className="bg-[#0D1424] border border-white/10 rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative text-left text-white animate-fadeIn my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-2xl bg-[#070B16]/80 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition cursor-pointer backdrop-blur-md shadow-lg"
          aria-label="Close modal"
        >
          <FaTimes className="text-base" />
        </button>

        {/* Top Hero Banner with Photo */}
        <div className="relative overflow-hidden h-72 sm:h-80 bg-[#070B16] rounded-t-3xl">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top filter brightness-105"
          />

          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1424] via-[#0D1424]/40 to-transparent" />

          {/* Floating Badges */}
          <div className="absolute top-5 left-5 flex flex-wrap items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-[#070B16]/85 backdrop-blur-md text-[#1C9773] border border-[#1C9773]/40 text-xs font-bold uppercase tracking-wider shadow-md">
              {member.category}
            </span>
            {member.badge && (
              <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#FF9112] to-[#E57D06] text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-[#FF9112]/30">
                {member.badge}
              </span>
            )}
          </div>

          {/* Bottom Bar on Photo */}
          <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-[#070B16]/90 border border-white/15 flex items-center justify-center text-white shadow-md">
                <Icon className="text-lg text-[#FF9112]" />
              </div>
              <div>
                <div className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                  <FaCalendarAlt className="text-[10px] text-[#1C9773]" />
                  <span>{member.experience}</span>
                </div>
                <div className="text-xs font-bold text-[#1C9773] flex items-center gap-1.5">
                  <FaAward className="text-[10px]" />
                  <span>{member.highlight}</span>
                </div>
              </div>
            </div>

            {member.portfolioUrl && (
              <a
                href={member.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-[#FF9112] text-white text-xs font-bold transition flex items-center gap-1.5 backdrop-blur-md border border-white/20 shadow-lg"
              >
                <span>Live Portfolio</span>
                <FaExternalLinkAlt className="text-[10px]" />
              </a>
            )}
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Header Info */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {member.name}
            </h3>
            <p className="text-sm font-bold text-[#FF9112] mt-0.5 uppercase tracking-wide">
              {member.role}
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
              {member.fullDetails || member.bio}
            </p>
          </div>

          {/* Deliverables / Scope of Work */}
          {member.features && member.features.length > 0 && (
            <div className="bg-[#070B16] rounded-2xl p-5 sm:p-6 border border-white/10 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#1C9773] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1C9773] animate-pulse" />
                {member.scopeTitle || "Key Deliverables & Responsibilities"}
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2.5 pt-1">
                {member.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-slate-300"
                  >
                    <FaCheckCircle className="text-[#1C9773] text-sm shrink-0 mt-0.5" />
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack & Core Competencies */}
          {member.tech && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                Core Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-slate-200 font-semibold hover:border-[#1C9773]/50 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Metrics Callout */}
          {member.metrics && (
            <div className="p-4 rounded-xl bg-[#1C9773]/10 border border-[#1C9773]/25 flex items-center justify-between text-xs sm:text-sm text-slate-200">
              <span className="text-[#1C9773] font-bold">Track Record:</span>
              <span className="font-semibold text-white">{member.metrics}</span>
            </div>
          )}

          {/* Footer Bar: Social Links & CTA */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#070B16] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#FF9112] hover:border-[#FF9112] transition text-sm"
                  title="LinkedIn Profile"
                >
                  <FaLinkedinIn />
                </a>
              )}
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#070B16] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#FF9112] hover:border-[#FF9112] transition text-sm"
                  title="GitHub Profile"
                >
                  <FaGithub />
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="w-9 h-9 rounded-xl bg-[#070B16] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#1C9773] hover:border-[#1C9773] transition text-sm"
                  title="Direct Email"
                >
                  <FaEnvelope />
                </a>
              )}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-slate-300 text-xs font-bold transition cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  openQuoteModal(`Consultation with ${member.name} (${member.role})`);
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FF9112] to-[#E57D06] hover:from-[#FFA73E] hover:to-[#FF9112] text-white font-extrabold text-xs transition shadow-lg shadow-[#FF9112]/25 cursor-pointer"
              >
                Consult with {firstName} 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   3. REUSABLE TEAM SECTION COMPONENT
   ========================================================================== */
export function Team({ showBackLink = false }) {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section
      id="team"
      className={`bg-[#070B16] text-white py-24 border-t border-slate-800/80 relative overflow-hidden ${
        showBackLink ? "pt-28" : ""
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#1C9773]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF9112]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {showBackLink && (
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#FF9112] hover:text-orange-400 font-semibold text-sm transition"
            >
              <FaArrowLeft /> Back to Home
            </Link>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#15795C]/10 text-[#1C9773] border border-[#15795C]/30 uppercase text-xs font-semibold tracking-widest">
            Our Dedicated Team
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white">
            The Experts Behind <span className="text-[#FF9112]">Netronix Innovation</span>
          </h2>

          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            Our passionate engineers, designers, and network specialists unite to create technology solutions that empower your growth. Hover or tap any specialist to explore details and deliverables.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <div
                key={member.id || index}
                className="group bg-[#0D1424] rounded-3xl overflow-hidden border border-white/10 hover:border-[#FF9112]/50 transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(0,0,0,0.7)]"
              >
                <div>
                  {/* Photo with hover overlay */}
                  <div
                    className="relative overflow-hidden h-72 bg-[#070B16] cursor-pointer"
                    onClick={() => setSelectedMember(member)}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-500 filter group-hover:brightness-105 group-hover:scale-105"
                    />

                    {/* Top badge */}
                    <div className="absolute top-3.5 left-3.5 z-10 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#070B16]/85 backdrop-blur-md text-[#1C9773] border border-[#1C9773]/40 text-[11px] font-extrabold uppercase tracking-wider shadow">
                        {member.badge}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1424] via-transparent to-transparent opacity-80 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />

                    {/* Default bottom icon badge */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                      <div className="w-9 h-9 rounded-xl bg-[#070B16]/90 border border-white/10 flex items-center justify-center text-white shadow-md">
                        <Icon className="text-sm text-[#FF9112]" />
                      </div>
                    </div>

                    {/* Interactive Hover Overlay */}
                    <div className="absolute inset-0 bg-[#070B16]/85 backdrop-blur-[4px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center z-20">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-xl text-[#FF9112]" />
                      </div>
                      <h4 className="text-lg font-black text-white tracking-tight">
                        {member.name}
                      </h4>
                      <span className="text-xs text-[#1C9773] font-bold uppercase tracking-wider mb-3">
                        {member.category}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedMember(member);
                        }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-[#070B16] hover:bg-[#FF9112] hover:text-white font-extrabold text-xs shadow-xl transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 cursor-pointer"
                      >
                        <span>View Details & Scope</span>
                        <FaArrowRight className="text-[10px]" />
                      </button>
                    </div>
                  </div>

                  {/* Info block */}
                  <div className="p-6">
                    <h3
                      onClick={() => setSelectedMember(member)}
                      className="text-xl font-black text-white group-hover:text-[#FF9112] transition duration-300 cursor-pointer"
                    >
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-[#1C9773] mt-1 uppercase tracking-wider">
                      {member.role}
                    </p>
                    <p className="mt-3 text-slate-400 text-xs leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>
                  </div>
                </div>

                {/* Social Links Footer */}
                <div className="px-6 pb-6 pt-0">
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 rounded-lg bg-[#070B16] border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#FF9112] hover:text-white hover:border-[#FF9112] transition duration-200 text-xs"
                          title="LinkedIn"
                        >
                          <FaLinkedinIn />
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 rounded-lg bg-[#070B16] border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#FF9112] hover:text-white hover:border-[#FF9112] transition duration-200 text-xs"
                          title="GitHub"
                        >
                          <FaGithub />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="w-8 h-8 rounded-lg bg-[#070B16] border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#1C9773] hover:text-white hover:border-[#1C9773] transition duration-200 text-xs"
                          title="Send Email"
                        >
                          <FaEnvelope />
                        </a>
                      )}
                      {member.portfolioUrl && (
                        <a
                          href={member.portfolioUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 rounded-lg bg-[#070B16] border border-white/10 flex items-center justify-center text-[#FF9112] hover:bg-[#FF9112] hover:text-white hover:border-[#FF9112] transition duration-200 text-xs"
                          title="Live Portfolio"
                        >
                          <FaExternalLinkAlt className="text-[10px]" />
                        </a>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedMember(member)}
                      className="text-xs font-bold text-[#FF9112] hover:text-[#1C9773] transition flex items-center gap-1 cursor-pointer"
                    >
                      <span>Scope</span>
                      <FaArrowRight className="text-[9px]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <TeamMemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
}

/* ==========================================================================
   4. MAIN TEAM PAGE COMPONENT (DEFAULT EXPORT)
   ========================================================================== */
export default function TeamPage() {
  const { openQuoteModal } = useQuoteModal();
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="pt-24 bg-[#070B16] text-white min-h-screen relative overflow-hidden">
      <ParticleBackground />

      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#1C9773]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#FF9112]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-6 pb-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#FF9112] hover:text-[#FFA73E] font-semibold text-sm transition mb-6 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C9773]/10 text-[#1C9773] border border-[#1C9773]/30 uppercase text-xs font-extrabold tracking-widest">
              <FaUsers className="text-xs" />
              Leadership & Engineering Architects
            </span>

            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
              The Experts Behind <span className="text-[#FF9112]">Netronix Innovation</span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              We are a passionate team of senior software engineers, certified network architects, and UI/UX designers united to engineer technology solutions that empower your business growth.
            </p>
          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {teamStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0D1424]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-center shadow-lg hover:border-[#1C9773]/40 transition duration-300"
                >
                  <div className="w-10 h-10 mx-auto mb-2.5 rounded-xl bg-[#1C9773]/15 border border-[#1C9773]/30 flex items-center justify-center text-[#1C9773]">
                    <Icon className="text-lg" />
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1C9773]">
            Our Core Team
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Meet the Specialists
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Dedicated specialists driving each discipline of our technology consultancy. Hover or click to explore technical details and service scope.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.id || index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="group bg-[#0D1424] rounded-3xl overflow-hidden border border-white/10 hover:border-[#1C9773]/60 transition-all duration-300 shadow-2xl flex flex-col justify-between h-full hover:-translate-y-2 hover:shadow-[0_22px_45px_rgba(0,0,0,0.7)]">
                  <div>
                    {/* Member Image with Interactive Hover Overlay */}
                    <div
                      className="relative overflow-hidden h-72 bg-[#070B16] cursor-pointer"
                      onClick={() => setSelectedMember(member)}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-500 filter group-hover:brightness-105 group-hover:scale-105"
                      />

                      {/* Top floating badge */}
                      <div className="absolute top-3.5 left-3.5 z-10 flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#070B16]/85 backdrop-blur-md text-[#1C9773] border border-[#1C9773]/40 text-[11px] font-extrabold uppercase tracking-wider shadow">
                          {member.badge}
                        </span>
                      </div>

                      {/* Default subtle gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1424] via-transparent to-transparent opacity-80 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />

                      {/* Default bottom icon indicator */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                        <div className="w-9 h-9 rounded-xl bg-[#070B16]/90 border border-white/10 flex items-center justify-center text-white shadow-md">
                          <Icon className="text-sm text-[#FF9112]" />
                        </div>
                      </div>

                      <div className="absolute inset-0 bg-[#070B16]/85 backdrop-blur-[4px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center z-20">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon className="text-xl text-[#FF9112]" />
                        </div>
                        <h4 className="text-lg font-black text-white tracking-tight">
                          {member.name}
                        </h4>
                        <span className="text-xs text-[#1C9773] font-bold uppercase tracking-wider mb-3">
                          {member.category}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedMember(member);
                          }}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#070B16] hover:bg-[#FF9112] hover:text-white font-extrabold text-xs shadow-xl transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 cursor-pointer"
                        >
                          <span>View Details & Scope</span>
                          <FaArrowRight className="text-[10px]" />
                        </button>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6">
                      <h3
                        onClick={() => setSelectedMember(member)}
                        className="text-xl font-black text-white group-hover:text-[#FF9112] transition duration-300 cursor-pointer"
                      >
                        {member.name}
                      </h3>

                      <p className="text-xs font-bold text-[#1C9773] mt-1 uppercase tracking-wider">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Social / Contact Footer */}
                  <div className="px-6 pb-6 pt-0">
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="w-8 h-8 rounded-lg bg-[#070B16] border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#FF9112] hover:text-white hover:border-[#FF9112] transition duration-200 text-xs"
                            title="LinkedIn"
                          >
                            <FaLinkedinIn />
                          </a>
                        )}
                        {member.github && (
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noreferrer"
                            className="w-8 h-8 rounded-lg bg-[#070B16] border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#FF9112] hover:text-white hover:border-[#FF9112] transition duration-200 text-xs"
                            title="GitHub"
                          >
                            <FaGithub />
                          </a>
                        )}
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="w-8 h-8 rounded-lg bg-[#070B16] border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#1C9773] hover:text-white hover:border-[#1C9773] transition duration-200 text-xs"
                            title="Send Email"
                          >
                            <FaEnvelope />
                          </a>
                        )}
                        {member.portfolioUrl && (
                          <a
                            href={member.portfolioUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="w-8 h-8 rounded-lg bg-[#070B16] border border-white/10 flex items-center justify-center text-[#FF9112] hover:bg-[#FF9112] hover:text-white hover:border-[#FF9112] transition duration-200 text-xs"
                            title="Portfolio"
                          >
                            <FaExternalLinkAlt className="text-[10px]" />
                          </a>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedMember(member)}
                        className="text-xs font-bold text-[#FF9112] hover:text-[#1C9773] transition flex items-center gap-1 cursor-pointer"
                      >
                        <span>View Scope</span>
                        <FaArrowRight className="text-[9px]" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Detail Modal */}
      <TeamMemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />

      {/* Engineering Culture / Philosophy */}
      <section className="max-w-7xl mx-auto px-6 py-16 relative z-10 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1C9773]/10 text-[#1C9773] border border-[#1C9773]/30 uppercase text-xs font-extrabold tracking-widest">
            Engineering Culture
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            How Our Team <span className="text-[#1C9773]">Delivers Value</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Every line of code and network topology we construct follows strict architectural principles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {culturePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`bg-gradient-to-b ${pillar.color} rounded-2xl p-6 border ${pillar.border} backdrop-blur-xl space-y-3 shadow-lg hover:scale-[1.02] transition duration-300`}
              >
                <div className={`w-11 h-11 rounded-xl bg-[#0D1424] border border-white/10 flex items-center justify-center ${pillar.text} text-xl`}>
                  <Icon />
                </div>
                <h3 className="text-lg font-extrabold text-white">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="max-w-7xl mx-auto px-6 pb-24 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#0D1424] via-[#0A1020] to-[#0D1424] border border-white/10 p-8 md:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 space-y-5 max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF9112]/10 text-[#FF9112] border border-[#FF9112]/30 uppercase text-xs font-bold tracking-widest">
              Ready to Collaborate?
            </span>
            <h3 className="text-2xl md:text-4xl font-black text-white">
              Work Directly With Our Senior Engineers
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Have a web system to architect, enterprise network to secure, or brand identity to create? Our team is ready to deliver.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openQuoteModal()}
                className="px-8 py-3.5 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-[#FF9112] to-[#E57D06] shadow-lg shadow-[#FF9112]/30 hover:scale-[1.03] transition-all cursor-pointer"
              >
                Schedule Technical Consultation
              </button>
              <Link
                to="/portfolio"
                className="px-8 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-[#0D1424] border border-white/10 hover:border-[#1C9773] hover:text-white transition-all"
              >
                View Our Portfolio Portal →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
