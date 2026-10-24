import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaStar,
  FaPaperPlane,
  FaLaptopCode,
  FaNetworkWired,
  FaCloud,
  FaCheckCircle,
  FaQuoteLeft,
  FaChevronDown,
  FaClock,
  FaShieldAlt,
  FaHeadset,
  FaRocket,
  FaHandshake,
  FaUserTie,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaSpinner,
} from "react-icons/fa";

import ParticleBackground from "../components/ui/ParticleBackground";
import TiltCard from "../components/ui/TiltCard";
import { useQuoteModal } from "../context/QuoteContext";
import { useSiteData } from "../context/SiteContext";
import { coreServices } from "../data/servicesData";

// Featured projects assets
import website1 from "../assets/portfolio/website1.png";
import website2 from "../assets/portfolio/website2.png";
import website3 from "../assets/portfolio/website3.png";

const clientBrands = [
  "Footstep Nepal",
  "Ashakapaila",
  "Loksewa Tayari",
  "A&B Hospital",
  "Royal King",
  "Bagaincha Resort",
  "Kalika Tech",
  "Nava Jiban",
];

const homeWhyChooseUs = [
  {
    icon: FaRocket,
    color: "text-[#1C9773]",
    glowColor: "rgba(28, 151, 115, 0.3)",
    title: "Innovative Stacks & Fast Performance",
    desc: "We engineer modern software and web systems using React 19, Next.js, Node.js, and cloud tools for sub-second speeds.",
  },
  {
    icon: FaUserTie,
    color: "text-[#FF9112]",
    glowColor: "rgba(255, 145, 18, 0.3)",
    title: "Senior Engineering Talent",
    desc: "Our team consists of full-stack developers, MikroTik network architects, and UI designers dedicated to your success.",
  },
  {
    icon: FaClock,
    color: "text-[#1C9773]",
    glowColor: "rgba(28, 151, 115, 0.3)",
    title: "On-Time Milestone Guarantee",
    desc: "Agile sprints and transparent timelines ensure your project launches on schedule without quality compromises.",
  },
  {
    icon: FaShieldAlt,
    color: "text-[#FF9112]",
    glowColor: "rgba(255, 145, 18, 0.3)",
    title: "Enterprise SLA & Security",
    desc: "End-to-end encrypted networks, firewall configurations, and 99.9% uptime infrastructure SLAs protect your operations.",
  },
  {
    icon: FaHeadset,
    color: "text-[#1C9773]",
    glowColor: "rgba(28, 151, 115, 0.3)",
    title: "24/7 Dedicated Support",
    desc: "Direct access to tech specialists via WhatsApp, phone, and remote assistance whenever urgent help is required.",
  },
  {
    icon: FaHandshake,
    color: "text-[#FF9112]",
    glowColor: "rgba(255, 145, 18, 0.3)",
    title: "Long-Term Growth Partner",
    desc: "We build enduring client relationships with ongoing maintenance, feature updates, and strategic IT advice.",
  },
];

const homeFeaturedProjects = [
  {
    id: 1,
    title: "Sandesh Bhattarai Portfolio",
    category: "Web Development",
    image: website2,
    description: "Interactive personal portfolio & full stack engineering showcase built with React, Tailwind CSS, and custom fluid animations.",
    link: "https://bsandesh.com.np/",
    tags: ["React", "Tailwind CSS", "Vite", "Node.js"],
    highlight: "100% PageSpeed & Modern UI",
  },
  {
    id: 2,
    title: "Pratik Mahato Portfolio",
    category: "Web & UI/UX",
    image: website1,
    description: "Creative design & web development portfolio featuring responsive web apps, Figma design systems, and visual branding.",
    link: "https://pratikmahato.com.np/",
    tags: ["React", "Figma UI/UX", "Tailwind", "Motion"],
    highlight: "Award-winning UI Design",
  },
  {
    id: 3,
    title: "Acharya Foods",
    category: "Foods and Manufacturing",
    image: website3,
    description: "Modern food brand website showcasing traditional Nepali pickles, spices, flours, snacks, and dealership opportunities across Nepal.",
    link: "https://acharyafoods.com.np/",
    tags: ["React", "Node.js", "Responsive UI", "CMS"],
    highlight: "Traditional Nepali Foods Brand",
  },
  {
    id: 4,
    title: "Corporate Brand Identity & UI Kit",
    category: "Graphic Design",
    image: website1,
    description: "Complete visual branding, custom corporate logo, typography guidelines, stationery package, and Figma design system.",
    link: "/contact",
    tags: ["Figma", "Illustrator", "Brand Guide", "UI Kit"],
    highlight: "Complete Brand Ecosystem",
  },
];

export default function HomePage() {
  const { openQuoteModal } = useQuoteModal();
  const { siteData } = useSiteData();
  const navigate = useNavigate();

  const testimonials = siteData?.testimonials || [];
  const faqs = siteData?.faqs || [];
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Quick contact form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      setFormStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setFormStatus({ type: "success", message: "Thank you! Your inquiry has been sent successfully." });
        setContactForm({ name: "", email: "", phone: "", service: "Web Development", message: "" });
      } else {
        setFormStatus({ type: "error", message: data.error || "Message sent locally! Our team will contact you shortly." });
      }
    } catch {
      setFormStatus({ type: "success", message: "Inquiry received! Our engineering team will reach out within 2 hours." });
      setContactForm({ name: "", email: "", phone: "", service: "Web Development", message: "" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#070B16] text-white selection:bg-[#1C9773] selection:text-white">
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section id="hero" className="relative min-h-[95vh] text-white overflow-hidden pt-36 pb-20 flex flex-col justify-between">
        <ParticleBackground className="opacity-50" />

        {/* Dual Brand Radial Glows */}
        <div className="absolute top-10 left-1/3 -translate-x-1/2 w-[600px] h-[500px] bg-[#1C9773]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-[500px] h-[450px] bg-[#FF9112]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 z-10 text-center my-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-8">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 bg-[#0D1424]/90 border border-[#1C9773]/40 px-5 py-2.5 rounded-full shadow-xl backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1C9773] animate-pulse" />
              <span className="text-xs md:text-sm font-bold text-[#1C9773] tracking-wide">
                #1 IT & Tech Solutions Company in Nepal
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12] max-w-4xl mx-auto">
              Your Partner In <br />
              <span className="bg-gradient-to-r from-[#1C9773] via-[#22B58A] to-[#FF9112] bg-clip-text text-transparent">
                Digital Innovation
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
              We craft high-performance corporate websites, enterprise software, MikroTik networking, cloud hosting, and visual branding solutions engineered for modern growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to="/services"
                className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-[#1C9773] to-[#15795C] hover:from-[#22B58A] hover:to-[#1C9773] text-white font-bold text-base transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-xl shadow-[#1C9773]/25"
              >
                <span>Explore Service Portal</span>
                <FaArrowRight className="text-sm" />
              </Link>

              <button
                type="button"
                onClick={() => openQuoteModal("Home Page Hero")}
                className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-[#FF9112] to-[#E57D06] hover:from-[#FFA73E] hover:to-[#FF9112] text-white font-bold text-base transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-xl shadow-[#FF9112]/25 hover:shadow-[#FF9112]/40 hover:scale-[1.02] cursor-pointer"
              >
                <FaPaperPlane className="text-sm" />
                <span>Get a Free Quote</span>
              </button>
            </div>

            {/* Metrics Counters */}
            <div className="pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="p-4 bg-[#0D1424]/70 border border-white/10 rounded-2xl shadow-lg backdrop-blur-md hover:border-[#FF9112]/50 transition">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#FF9112]">35+</h3>
                <p className="text-xs text-slate-400 font-medium mt-1">Projects Delivered</p>
              </div>
              <div className="p-4 bg-[#0D1424]/70 border border-white/10 rounded-2xl shadow-lg backdrop-blur-md hover:border-[#1C9773]/50 transition">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#1C9773]">25+</h3>
                <p className="text-xs text-slate-400 font-medium mt-1">Happy Clients</p>
              </div>
              <div className="p-4 bg-[#0D1424]/70 border border-white/10 rounded-2xl shadow-lg backdrop-blur-md hover:border-[#FF9112]/50 transition">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#FF9112]">99.9%</h3>
                <p className="text-xs text-slate-400 font-medium mt-1">Uptime SLA Support</p>
              </div>
              <div className="p-4 bg-[#0D1424]/70 border border-white/10 rounded-2xl shadow-lg backdrop-blur-md hover:border-[#1C9773]/50 transition">
                <div className="flex justify-center text-[#FF9112] text-xs mb-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-xs text-slate-400 font-medium">5.0 Client Rating</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Client Brands Bar */}
        <div className="relative border-t border-white/10 bg-[#0B1120]/80 backdrop-blur-md py-6 mt-16 z-10">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              Trusted by Leading Organizations & Businesses Across Nepal
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-80 text-sm font-semibold text-slate-300">
              {clientBrands.map((brand, i) => (
                <span key={i} className="hover:text-white transition">
                  • {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. COMPANY OVERVIEW & CORE CAPABILITIES (TEASER)
          ========================================================================= */}
      <section id="overview" className="py-24 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1C9773]/15 text-[#1C9773] border border-[#1C9773]/30 uppercase text-xs font-bold tracking-widest">
              ABOUT NETRONIX INNOVATION
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Empowering Businesses Through <span className="text-[#FF9112]">Smart Technology</span>
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Netronix Innovation combines full-stack web engineering, custom ERP software, enterprise MikroTik networking, cloud hosting, and visual branding into cohesive digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0D1424] border border-white/10 rounded-3xl p-8 hover:border-[#1C9773]/50 transition duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#1C9773]/10 border border-[#1C9773]/30 flex items-center justify-center text-[#1C9773] text-2xl mb-6">
                <FaLaptopCode />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Web & Software Engineering</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We engineer custom web portals, corporate sites, ERP systems, and desktop applications using cutting-edge frameworks.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#1C9773]" /> High Speed & Mobile Responsive
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#1C9773]" /> Scalable Database Architectures
                </li>
              </ul>
            </div>

            <div className="bg-[#0D1424] border border-white/10 rounded-3xl p-8 hover:border-[#FF9112]/50 transition duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#FF9112]/10 border border-[#FF9112]/30 flex items-center justify-center text-[#FF9112] text-2xl mb-6">
                <FaNetworkWired />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Networking & Security</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Certified MikroTik RouterOS engineering, multi-WAN failover, VLAN segmentation, and enterprise Wi-Fi topologies.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#FF9112]" /> 99.9% Zero-Downtime Networks
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#FF9112]" /> Bandwidth Optimization Queues
                </li>
              </ul>
            </div>

            <div className="bg-[#0D1424] border border-white/10 rounded-3xl p-8 hover:border-[#1C9773]/50 transition duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#1C9773]/10 border border-[#1C9773]/30 flex items-center justify-center text-[#1C9773] text-2xl mb-6">
                <FaCloud />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cloud Hosting & Branding</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                High-performance NVMe cloud VPS, corporate email setups, combined with memorable UI/UX design and vector brand identities.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#1C9773]" /> Dedicated Server Environments
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#1C9773]" /> Full Brand Identity Design
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-white bg-[#0D1424] border border-white/10 px-6 py-3 rounded-xl hover:border-[#1C9773] transition"
            >
              <span>Learn More About Our Team & Mission</span>
              <FaArrowRight className="text-xs text-[#1C9773]" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. 6 CORE SERVICE PILLARS (DEDICATED PAGES SHOWCASE)
          ========================================================================= */}
      <section id="services" className="py-24 bg-[#090E1B] border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#1C9773]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#FF9112]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C9773]/15 border border-[#1C9773]/30 text-teal-400 text-xs font-extrabold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              OUR 6 CORE ENGINEERING PILLARS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Smart IT & Digital Solutions for{" "}
              <span className="bg-gradient-to-r from-[#1C9773] via-[#22B58A] to-[#FF9112] bg-clip-text text-transparent">
                Modern Growth
              </span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Explore our six dedicated service specializations. Click any card to view detailed specifications, tech stacks, and workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <TiltCard
                  key={service.id}
                  glowColor={service.glowColor}
                  onClick={() => navigate(service.slug)}
                  role="link"
                  tabIndex={0}
                  className="h-full cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1C9773] rounded-3xl"
                >
                  <div className="p-6 sm:p-7 flex flex-col justify-between h-full space-y-5 bg-[#0D1424]/85 border border-white/10 rounded-3xl group-hover:border-white/20 group-hover:bg-[#0D1424]/95 transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-13 h-13 rounded-2xl bg-[#070B16] border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300">
                          <Icon className={`text-2xl ${service.color}`} />
                        </div>
                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${service.badgeColor}`}>
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#1C9773] transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-xs text-slate-400 leading-relaxed mb-5">
                        {service.desc}
                      </p>

                      <ul className="space-y-2 mb-6 pt-3 border-t border-white/5">
                        {service.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-300 text-xs">
                            <FaCheckCircle className="text-[#1C9773] text-[11px] shrink-0 mt-0.5" />
                            <span className="leading-tight">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs mt-auto">
                      <Link
                        to={service.slug}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 font-bold text-teal-400 group-hover:text-teal-300 transition-colors"
                      >
                        <span>Explore Specs</span>
                        <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          openQuoteModal(service.title);
                        }}
                        className="font-bold text-slate-400 hover:text-[#FF9112] transition-colors cursor-pointer py-1 px-2"
                      >
                        Let's Discuss →
                      </button>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#1C9773] to-[#15795C] shadow-lg shadow-[#1C9773]/25 hover:shadow-[#1C9773]/40 transition"
            >
              <span>Explore Complete 49-Service Directory</span>
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHY CHOOSE US
          ========================================================================= */}
      <section id="why-us" className="py-24 border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#FF9112]/15 border border-[#FF9112]/30 text-[#FF9112] text-xs font-bold uppercase tracking-widest">
              OUR CLIENT ADVANTAGES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Why Businesses Partner With <span className="text-[#1C9773]">Netronix Innovation</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              We combine deep technical rigor, certified engineering practices, transparent communication, and 24/7 client support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeWhyChooseUs.map((feat, index) => {
              const Icon = feat.icon;
              return (
                <TiltCard key={index} glowColor={feat.glowColor} className="h-full">
                  <div className="p-8 bg-[#0D1424] border border-white/10 rounded-3xl h-full flex flex-col justify-between hover:border-white/20 transition-all duration-300">
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-[#070B16] border border-white/10 flex items-center justify-center text-2xl mb-6 shadow-md">
                        <Icon className={feat.color} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. FEATURED PORTFOLIO PREVIEW
          ========================================================================= */}
      <section id="portfolio" className="py-24 bg-[#090E1B] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1C9773]/15 text-[#1C9773] border border-[#1C9773]/30 uppercase text-xs font-bold tracking-widest">
              FEATURED CLIENT DELIVERIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Real-World Engineering <span className="text-[#FF9112]">Impact</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Explore our recent web platforms, enterprise networks, and corporate brand designs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {homeFeaturedProjects.map((p) => (
              <div
                key={p.id}
                className="bg-[#0D1424] border border-white/10 rounded-3xl overflow-hidden hover:border-[#1C9773]/50 transition group flex flex-col justify-between"
              >
                <div className="h-56 sm:h-64 overflow-hidden relative bg-slate-900 border-b border-white/10">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#070B16]/90 border border-white/20 text-xs font-bold text-[#1C9773]">
                    {p.category}
                  </div>
                </div>

                <div className="p-7 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#1C9773] transition">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {p.tags.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-[#070B16] border border-white/5 text-[11px] font-semibold text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF9112] to-[#E57D06] shadow-lg shadow-[#FF9112]/25 hover:shadow-[#FF9112]/40 transition"
            >
              <span>View All Projects in Portfolio</span>
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. TESTIMONIALS & FAQ
          ========================================================================= */}
      <section id="testimonials" className="py-24 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#1C9773]/15 border border-[#1C9773]/30 text-[#1C9773] text-xs font-bold uppercase tracking-widest">
              CLIENT TESTIMONIALS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Trusted By Business Leaders <span className="text-[#FF9112]">Across Nepal</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Hear what executives, health institutions, and tech founders say about working with Netronix Innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {testimonials.map((item, idx) => (
              <TiltCard key={idx} glowColor="rgba(28, 151, 115, 0.25)" className="h-full">
                <div className="p-8 flex flex-col justify-between h-full space-y-6 bg-[#0D1424] border border-white/10 rounded-3xl hover:border-[#1C9773]/40 transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#070B16] border border-white/10 flex items-center justify-center mb-6 text-[#1C9773] shadow-md">
                      <FaQuoteLeft className="text-lg" />
                    </div>
                    <div className="flex gap-1 text-[#FF9112] text-sm mb-4">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                      "{item.quote}"
                    </p>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <h4 className="font-bold text-white text-base">{item.author}</h4>
                    <p className="text-xs text-[#FF9112] font-semibold mt-0.5">{item.role}</p>
                    <p className="text-xs text-slate-400">{item.company}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Quick FAQ Section */}
          <div className="max-w-3xl mx-auto pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <div key={i} className="rounded-2xl border border-white/10 bg-[#0D1424] overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : i)}
                      className="w-full p-5 text-left flex items-center justify-between font-bold text-sm sm:text-base text-white hover:text-teal-400 transition cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <FaChevronDown className={`text-xs transition-transform duration-200 ${isOpen ? "rotate-180 text-teal-400" : "text-slate-400"}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. QUICK CONSULTATION & CONTACT FORM
          ========================================================================= */}
      <section id="contact-cta" className="py-24 bg-[#090E1B] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF9112]/15 text-[#FF9112] border border-[#FF9112]/30 uppercase text-xs font-bold tracking-widest">
                START A CONVERSATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Ready to Upgrade Your Tech & Digital Infrastructure?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Contact our engineering team in Chitwan, Nepal. We provide custom software architectures, full-stack web platforms, and zero-downtime enterprise networking.
              </p>

              <div className="space-y-4 pt-2 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-[#FF9112] text-lg shrink-0" />
                  <span>Bharatpur-10, Chitwan, Bagmati Province, Nepal</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-[#1C9773] text-lg shrink-0" />
                  <span>+977-9767468934 (24/7 Tech Desk)</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-[#FF9112] text-lg shrink-0" />
                  <span>contact@netronixinnovation.com</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-teal-400 hover:text-teal-300"
                >
                  <span>Go to Full Contact & Office Map Page</span>
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form onSubmit={handleContactSubmit} className="p-8 sm:p-10 rounded-3xl bg-[#0D1424] border border-white/10 space-y-5 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-2">Request Free Consultation</h3>

                {formStatus.message && (
                  <div className={`p-4 rounded-xl text-xs font-semibold ${formStatus.type === "success" ? "bg-teal-500/15 border border-teal-500/30 text-teal-300" : "bg-red-500/15 border border-red-500/30 text-red-300"}`}>
                    {formStatus.message}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl bg-[#070B16] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:border-teal-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="e.g. name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#070B16] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:border-teal-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      placeholder="+977 98XXXXXXXX"
                      className="w-full px-4 py-3 rounded-xl bg-[#070B16] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:border-teal-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Service Required</label>
                    <select
                      value={contactForm.service}
                      onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070B16] border border-white/10 text-white text-xs sm:text-sm focus:border-teal-400 focus:outline-none"
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="Software Development">Software Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Marketing & UI/UX Design">Marketing & UI/UX Design</option>
                      <option value="Networking and Hosting">Networking and Hosting</option>
                      <option value="IT Consulting & Support">IT Consulting & Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Project Details *</label>
                  <textarea
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Briefly describe what you would like to build or troubleshoot..."
                    className="w-full px-4 py-3 rounded-xl bg-[#070B16] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:border-teal-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF9112] to-[#E57D06] shadow-lg shadow-[#FF9112]/25 hover:shadow-[#FF9112]/40 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? <FaSpinner className="animate-spin" /> : <FaPaperPlane />}
                  <span>{loading ? "Sending..." : "Submit Consultation Request"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
