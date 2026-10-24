import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaChartLine,
  FaBolt,
  FaMobileAlt,
  FaGlobe,
  FaPalette,
  FaLaptopCode,
  FaArrowRight,
  FaArrowLeft,
  FaChevronRight,
  FaCheckCircle,
  FaShieldAlt,
  FaRocket,
  FaLightbulb,
  FaCogs,
  FaServer,
  FaTools,
  FaNetworkWired,
  FaPhoneAlt,
} from "react-icons/fa";

import ParticleBackground from "../components/ui/ParticleBackground";
import TiltCard from "../components/ui/TiltCard";
import { useQuoteModal } from "../context/QuoteContext";
import {
  coreServices,
  serviceCategories,
  servicesData,
  problemCards,
  workflowSteps,
} from "../data/servicesData";

export default function ServicesPage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { openQuoteModal } = useQuoteModal();

  // State for problem solver
  const [activeProblemId, setActiveProblemId] = useState(null);

  // State for 6 categories explorer
  const [selectedCategoryId, setSelectedCategoryId] = useState("web-development");

  // Active Category in Explorer
  const currentCategory =
    serviceCategories.find((cat) => cat.id === selectedCategoryId) ||
    serviceCategories[0];

  // -------------------------------------------------------------------------
  // CASE A: DYNAMIC SERVICE SPECIFICATION FALLBACK (/services/:serviceId)
  // -------------------------------------------------------------------------
  if (serviceId) {
    const spec = servicesData[serviceId] || {
      id: serviceId,
      badge: "Core Service Pillar",
      badgeColor: "bg-[#15795C]/10 text-[#1C9773] border-[#15795C]/30",
      accentColor: "text-[#1C9773]",
      title: "Engineered Technology &",
      highlightTitle: "Infrastructure Solutions",
      subtitle:
        "High-performance, secure, and business-focused technical services tailored for enterprise operations.",
      ctaText: "Request Free Quotation",
      startingPrice: "$299 / NPR 38,000",
      category: "general",
    };

    // Find if there is a matching category with all sub-services
    const matchedCategory =
      serviceCategories.find(
        (cat) =>
          cat.id === serviceId ||
          cat.slug === `/services/${serviceId}` ||
          cat.items.some((item) => item.slug.includes(serviceId))
      ) || serviceCategories[0];

    return (
      <div className="pt-24 bg-[#070B16] text-white min-h-screen selection:bg-[#1C9773] selection:text-white">
        <section className="relative pt-12 pb-20 overflow-hidden border-b border-white/10">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-[#1C9773]/15 via-[#FF9112]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#FF9112] hover:text-orange-400 font-semibold mb-6 text-sm transition group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to All Services</span>
            </Link>

            <div className="max-w-4xl space-y-4">
              <span
                className={`inline-block px-4 py-1.5 rounded-full uppercase tracking-widest text-xs font-bold border ${
                  spec.badgeColor || "bg-[#15795C]/10 text-[#1C9773] border-[#15795C]/30"
                }`}
              >
                {spec.badge}
              </span>

              <h1 className="text-3xl md:text-5xl font-black leading-tight text-white tracking-tight">
                {spec.title}{" "}
                <span className={spec.accentColor || "text-[#1C9773]"}>
                  {spec.highlightTitle}
                </span>
              </h1>

              <p className="text-slate-300 text-base md:text-xl leading-relaxed font-normal">
                {spec.subtitle}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => openQuoteModal(spec.title || "Custom Service")}
                  className="bg-gradient-to-r from-[#FF9112] to-[#E57D06] hover:from-[#FFA73E] hover:to-[#FF9112] text-white px-8 py-3.5 rounded-xl font-bold transition shadow-xl shadow-[#FF9112]/25 cursor-pointer hover:scale-[1.02]"
                >
                  {spec.ctaText || "Request Free Quotation"}
                </button>
                {spec.startingPrice && (
                  <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-300 font-medium pl-2">
                    <div>
                      <span className="text-slate-500 block text-[11px] uppercase">Starting Investment</span>
                      <span className="font-bold text-white text-base">{spec.startingPrice}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Sub-Services for this category */}
        {matchedCategory && matchedCategory.items && matchedCategory.items.length > 0 && (
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <span className="text-[#1C9773] text-xs font-bold uppercase tracking-widest">
                  Comprehensive Offerings
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  All Services in {matchedCategory.name}
                </h2>
              </div>
              <span className="text-xs font-bold text-slate-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                {matchedCategory.items.length} Specialized Capabilities
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {matchedCategory.items.map((sub, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0D1424] border border-white/10 hover:border-[#1C9773]/50 transition flex flex-col justify-between group"
                >
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-teal-400 transition mb-2">
                      {sub.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {sub.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <Link
                      to={sub.slug}
                      className="text-xs font-semibold text-teal-400 hover:text-teal-300 inline-flex items-center gap-1"
                    >
                      Learn More <FaArrowRight className="text-[10px]" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => openQuoteModal(sub.title, matchedCategory.name)}
                      className="text-xs font-bold text-[#FF9112] hover:text-amber-300 cursor-pointer"
                    >
                      Let's Discuss →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Navigation to dedicated pages */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-white mb-6">Explore Our 6 Dedicated Pillars:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreServices.map((cs) => (
              <Link
                key={cs.id}
                to={cs.slug}
                className="p-5 rounded-2xl bg-[#0D1424] border border-white/10 hover:border-[#1C9773] transition flex items-center justify-between group"
              >
                <div>
                  <div className="font-bold text-white group-hover:text-teal-400 transition">{cs.title}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{cs.badge}</div>
                </div>
                <FaArrowRight className="text-slate-500 group-hover:text-teal-400 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // -------------------------------------------------------------------------
  // CASE B: FULL SERVICES PORTAL (/services)
  // -------------------------------------------------------------------------

  return (
    <div className="pt-24 bg-[#070B16] text-white min-h-screen selection:bg-[#1C9773] selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <ParticleBackground />
        </div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[380px] bg-gradient-to-tr from-[#1C9773]/20 via-[#FF9112]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C9773]/15 border border-[#1C9773]/30 text-teal-400 text-xs font-extrabold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            NETRONIX INNOVATION • FULL SERVICES DIRECTORY
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Next-Generation Tech Solutions Built for{" "}
            <span className="bg-gradient-to-r from-[#1C9773] via-[#22B58A] to-[#FF9112] bg-clip-text text-transparent">
              High-Growth Enterprises
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto mt-5">
            Explore our 6 dedicated technology verticals spanning Website Development, Software Development, Networking, Hosting & CCTV, Mobile Application, UI/UX, Branding & Marketing, and IT Consulting & Support.
          </p>
        </div>
      </section>

      {/* 6 Dedicated Service Pillars Showcase (Matches screenshot 1:1) */}
      <section className="py-20 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[#1C9773] text-xs font-bold uppercase tracking-widest">
              Core Engineering Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Choose a Dedicated Service Specialization
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Click any of our 6 core pillars below to explore full capabilities, technical specs, workflows, and dedicated portals.
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
                  className="rounded-3xl bg-[#0D1424]/85 border border-white/10 hover:border-white/20 transition-all p-7 flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-13 h-13 rounded-2xl bg-[#070B16] border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-105 transition-all">
                        <Icon className={`text-2xl ${service.color}`} />
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${service.badgeColor}`}>
                        {service.badge}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-slate-500 mb-1">
                      {service.number}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-teal-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    <ul className="space-y-2 mb-6 pt-3 border-t border-white/5">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <FaCheckCircle className="text-[#1C9773] text-[11px] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="font-bold text-teal-400 group-hover:text-teal-300 inline-flex items-center gap-1">
                      View Dedicated Page
                      <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openQuoteModal(service.title, service.title);
                      }}
                      className="font-bold text-slate-400 hover:text-[#FF9112] transition-colors cursor-pointer py-1 px-2"
                    >
                      Let's Discuss →
                    </button>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Problem Solver */}
      <section className="py-20 bg-[#090E1B] border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-[#FF9112] text-xs font-bold uppercase tracking-widest">
              Business Problem Matcher
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              What Challenge Are You Facing?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Select your primary bottleneck below to discover our engineered solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {problemCards.map((card) => {
              const Icon = card.icon;
              const isSelected = activeProblemId === card.id;

              return (
                <div
                  key={card.id}
                  onClick={() => setActiveProblemId(isSelected ? null : card.id)}
                  className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#0E172B] border-teal-500 shadow-xl shadow-teal-500/10 ring-1 ring-teal-500/30"
                      : "bg-[#0D1424]/70 border-white/10 hover:border-white/20 hover:bg-[#0D1424]"
                  }`}
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#070B16] border border-white/10 flex items-center justify-center text-teal-400 text-lg mb-4">
                      <Icon />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">{card.title}</h4>
                    <p className="text-xs text-slate-400 mb-4">{card.subtitle}</p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <Link
                      to={card.targetSlug}
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs font-bold text-[#FF9112] hover:text-amber-300 transition inline-flex items-center gap-1"
                    >
                      {card.actionText}
                    </Link>
                    <span className="text-slate-500 text-xs">
                      {isSelected ? "▲ Hide" : "▼ Details"}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                      <div className="text-[11px] font-bold text-slate-400 uppercase">Recommended Solutions:</div>
                      {card.services.map((s, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-[#070B16] border border-white/5 text-xs">
                          <span className="font-semibold text-white">{s.title}</span>
                          <span className="text-[10px] text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded-full">{s.badge}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full 6-Pillar Directory & Catalog Explorer (69 Services) */}
      <section className="py-20 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">
              COMPLETE 6-PILLAR DIRECTORY (69 SERVICES)
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Full Services Catalog
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Browse all 69 engineering services organized across our 6 core technology pillars, with instant quote requests and dedicated service portals.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-6 min-h-[500px]">
            {/* Left Category Tabs */}
            <div className="col-span-12 lg:col-span-4 space-y-2">
              {serviceCategories.map((cat) => {
                const isActive = cat.id === selectedCategoryId;
                const CatIcon = cat.icon;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategoryId(cat.id)}
                    className={`w-full p-3.5 rounded-2xl text-left transition-all flex items-center gap-3.5 cursor-pointer border ${
                      isActive
                        ? "bg-[#0D1424] border-teal-500 text-white shadow-lg shadow-teal-500/10 ring-1 ring-teal-500/30"
                        : "bg-[#070B16] border-white/5 text-slate-300 hover:border-white/15 hover:bg-[#0D1424]/50"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-teal-400 text-base shrink-0">
                      <CatIcon />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-bold truncate">{cat.name}</span>
                        <span className="text-[10px] text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded-full font-semibold shrink-0 ml-1">
                          {cat.servicesCount || cat.items?.length} Services
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-500 truncate mt-0.5">
                        {cat.highlight.replace(/·/g, "•")}
                      </div>
                    </div>
                    <FaChevronRight className={`text-xs ${isActive ? "text-teal-400" : "text-slate-600"}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Category Items Preview */}
            <div className="col-span-12 lg:col-span-8">
              <div className="h-full bg-[#0D1424] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 mb-6 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <span>{currentCategory.name}</span>
                        <span className="text-xs font-semibold text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded-full">
                          {currentCategory.items.length} Offerings
                        </span>
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">{currentCategory.tagline}</p>
                    </div>
                    <Link
                      to={currentCategory.items[0]?.slug || "/services"}
                      className="text-xs font-bold text-teal-400 hover:text-teal-300 inline-flex items-center gap-1 self-start sm:self-auto"
                    >
                      Visit Dedicated Page <FaArrowRight className="text-[10px]" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[460px] overflow-y-auto pr-1 custom-scrollbar">
                    {currentCategory.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#070B16] border border-white/5 hover:border-teal-500/40 hover:bg-[#070B16]/90 transition group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <Link
                              to={item.slug}
                              className="text-xs sm:text-sm font-bold text-white group-hover:text-teal-400 transition"
                            >
                              {item.title}
                            </Link>
                            <button
                              type="button"
                              onClick={() => openQuoteModal(item.title, currentCategory.name)}
                              className="text-[11px] font-bold text-amber-400 hover:text-amber-300 whitespace-nowrap cursor-pointer transition hover:scale-105 shrink-0"
                            >
                              Let's Discuss →
                            </button>
                          </div>
                          <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-slate-400 text-center sm:text-left">
                    Need a custom solution in {currentCategory.name}?
                  </span>
                  <button
                    type="button"
                    onClick={() => openQuoteModal(currentCategory.name, currentCategory.name)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#FF9112] to-[#E57D06] shadow-md shadow-[#FF9112]/20 hover:scale-[1.02] transition cursor-pointer"
                  >
                    Let's Discuss This Pillar →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 4-Stage Methodology */}
      <section className="py-20 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[#1C9773] text-xs font-bold uppercase tracking-widest">
              Execution Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Our 4-Stage Delivery Blueprint
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Consistent quality and structured delivery across all six technology disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((ws, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-[#0D1424]/60 border border-white/10 relative hover:border-teal-500/30 transition-all"
              >
                <div className="text-3xl font-black text-teal-400/30 mb-4">{ws.step}</div>
                <h4 className="text-base font-bold text-white mb-2">{ws.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{ws.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF9112]/15 border border-[#FF9112]/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            Ready to Build?
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Transform Your Digital Infrastructure?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Book a complimentary technical architecture consultation with our engineering directors today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#FF9112] to-[#E57D06] shadow-xl shadow-[#FF9112]/25 hover:scale-[1.02] transition cursor-pointer text-sm"
            >
              Request Free Quotation
            </button>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl font-bold text-slate-200 bg-[#0D1424] border border-white/10 hover:border-white/20 hover:text-white transition text-sm flex items-center gap-2"
            >
              <FaPhoneAlt className="text-xs text-[#1C9773]" />
              <span>Contact Our Team</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
