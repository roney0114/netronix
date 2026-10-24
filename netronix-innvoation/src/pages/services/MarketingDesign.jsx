import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaBullhorn,
  FaSearch,
  FaShareAlt,
  FaChartLine,
  FaObjectGroup,
  FaTrademark,
  FaChevronDown,
  FaGlobe,
  FaTools,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaPalette,
  FaUserCheck,
  FaBookOpen,
  FaFileAlt,
  FaAd,
} from "react-icons/fa";
import { useQuoteModal } from "../../context/QuoteContext";
import ParticleBackground from "../../components/ui/ParticleBackground";
import TiltCard from "../../components/ui/TiltCard";

const designMarketingServices = [
  {
    icon: FaObjectGroup,
    title: "UI/UX Design",
    badge: "User Experience",
    desc: "Design intuitive and visually appealing interfaces for websites and applications.",
    highlights: [
      "User-friendly website interfaces",
      "Interactive mobile app layouts",
      "Visual hierarchy & clarity",
      "Seamless user navigation",
    ],
  },
  {
    icon: FaUserCheck,
    title: "User Research & Usability Testing",
    badge: "Audience Insights",
    desc: "Understand user needs and identify opportunities to improve usability.",
    highlights: [
      "Target user behavior analysis",
      "Usability testing sessions",
      "Friction point identification",
      "Actionable UX recommendations",
    ],
  },
  {
    icon: FaTrademark,
    title: "Branding & Logo Design",
    badge: "Brand Identity",
    desc: "Create distinctive logos and professional brand identities.",
    highlights: [
      "Custom memorable logo design",
      "Brand identity concepts",
      "Visual style exploration",
      "Professional brand positioning",
    ],
  },
  {
    icon: FaBookOpen,
    title: "Brand Identity Guidelines",
    badge: "Brand Standards",
    desc: "Define brand colors, typography, logo usage and visual standards.",
    highlights: [
      "Color palette specifications",
      "Typography rules & hierarchies",
      "Correct logo usage guidelines",
      "Consistent visual standard assets",
    ],
  },
  {
    icon: FaPalette,
    title: "Graphic Design",
    badge: "Creative Assets",
    desc: "Create engaging graphics for digital platforms and print materials.",
    highlights: [
      "Digital marketing graphics",
      "Print-ready visual layouts",
      "Compelling promotional imagery",
      "High-resolution asset exports",
    ],
  },
  {
    icon: FaShareAlt,
    title: "Social Media Design",
    badge: "Social Creatives",
    desc: "Design attractive social posts, stories, banners and promotional creatives.",
    highlights: [
      "Platform-optimized post designs",
      "Engaging story templates",
      "Cover & banner graphics",
      "Cohesive social media feeds",
    ],
  },
  {
    icon: FaFileAlt,
    title: "Brochure & Print Design",
    badge: "Print Media",
    desc: "Produce brochures, flyers, business cards and catalogs.",
    highlights: [
      "Professional corporate brochures",
      "Eye-catching promotional flyers",
      "Business card design layouts",
      "Multi-page product catalogs",
    ],
  },
  {
    icon: FaChartLine,
    title: "Digital Marketing Strategy",
    badge: "Marketing Plan",
    desc: "Develop a digital marketing plan aligned with business objectives.",
    highlights: [
      "Comprehensive growth roadmaps",
      "Audience channel alignment",
      "Campaign objective definition",
      "Performance metric tracking",
    ],
  },
  {
    icon: FaSearch,
    title: "Search Engine Optimization (SEO)",
    badge: "Organic Growth",
    desc: "Improve organic search visibility and website discoverability.",
    highlights: [
      "Keyword research & targeting",
      "On-page content optimization",
      "Technical SEO improvements",
      "Organic traffic growth tracking",
    ],
  },
  {
    icon: FaTools,
    title: "Social Media Management",
    badge: "Community Presence",
    desc: "Plan content, manage publishing and maintain audience engagement.",
    highlights: [
      "Structured content calendars",
      "Regular publishing schedules",
      "Audience interaction support",
      "Community growth tracking",
    ],
  },
  {
    icon: FaBullhorn,
    title: "Social Media Marketing",
    badge: "Campaign Reach",
    desc: "Promote products and services through strategic social campaigns.",
    highlights: [
      "Targeted campaign creation",
      "Audience reach optimization",
      "Promotional offer messaging",
      "Campaign performance reviews",
    ],
  },
  {
    icon: FaAd,
    title: "Google Ads Management",
    badge: "Paid Search",
    desc: "Run targeted Google advertising campaigns to attract potential customers.",
    highlights: [
      "Search keyword ad campaigns",
      "Budget & bid optimization",
      "High-converting landing paths",
      "ROI & conversion tracking",
    ],
  },
  {
    icon: FaLaptopCode,
    title: "Meta Ads Management",
    badge: "Social Advertising",
    desc: "Create and optimize Facebook and Instagram advertising campaigns.",
    highlights: [
      "Custom audience targeting",
      "Visual ad creative testing",
      "Campaign scaling & optimization",
      "Detailed performance reporting",
    ],
  },
];

const creativeTools = [
  {
    name: "Figma",
    role: "UI/UX & Prototyping",
    color: "text-amber-400",
  },
  {
    name: "Adobe Illustrator",
    role: "Logo & Brand Design",
    color: "text-amber-400",
  },
  {
    name: "Adobe Photoshop",
    role: "Graphic Design",
    color: "text-amber-400",
  },
  {
    name: "Google Search Console",
    role: "SEO & Visibility",
    color: "text-amber-400",
  },
  {
    name: "Google Ads",
    role: "Paid Search Campaigns",
    color: "text-amber-400",
  },
  {
    name: "Meta Business Suite",
    role: "Social & Ad Management",
    color: "text-amber-400",
  },
  {
    name: "Google Analytics 4",
    role: "Traffic & Conversions",
    color: "text-amber-400",
  },
  {
    name: "Canva Pro",
    role: "Rapid Social Creatives",
    color: "text-amber-400",
  },
];

const creativeWorkflow = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "Understand your brand identity, business goals, target audience, and project scope to build a focused roadmap.",
  },
  {
    step: "02",
    title: "Design & Concept Creation",
    desc: "Develop intuitive UI/UX wireframes, distinct branding guidelines, and high-impact visual marketing assets.",
  },
  {
    step: "03",
    title: "Implementation & Campaigns",
    desc: "Launch targeted SEO strategies, social campaigns, and paid advertisements across chosen digital channels.",
  },
  {
    step: "04",
    title: "Analyze & Optimize",
    desc: "Review engagement analytics, conversion performance, and search data to drive ongoing improvements.",
  },
];

const faqs = [
  {
    q: "What is included in your UI/UX design service?",
    a: "Our UI/UX design service covers user-friendly website interfaces, interactive mobile app layouts, visual hierarchies, and seamless navigation flows built to enhance user satisfaction.",
  },
  {
    q: "Do you create complete brand identity guidelines?",
    a: "Yes. We define brand colors, typography scales, logo usage rules, and comprehensive visual standards so your brand remains consistent across all platforms.",
  },
  {
    q: "What types of graphic design assets do you provide?",
    a: "We produce a wide variety of assets including digital marketing graphics, social media posts, stories, banners, brochures, flyers, business cards, and catalogs.",
  },
  {
    q: "How do your digital marketing and paid ad services work?",
    a: "We build tailored digital marketing strategies, manage social media presences, and run targeted Google and Meta advertising campaigns to attract and convert potential customers.",
  },
  {
    q: "Can SEO and digital advertising be run together?",
    a: "Yes. Combining organic SEO with targeted Google and Meta ads allows you to build long-term search visibility while driving immediate qualified traffic.",
  },
  {
    q: "How do we get started with a project?",
    a: "You can click on any consultation button or request a quote directly. We will review your requirements and schedule a discussion to align on your goals.",
  },
];

export default function MarketingDesign() {
  const { openQuoteModal } = useQuoteModal();
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-[#070B16] text-white min-h-screen pt-24 selection:bg-[#FF9112] selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <ParticleBackground />
        </div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[380px] bg-gradient-to-tr from-amber-500/20 via-[#FF9112]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 font-semibold text-xs sm:text-sm mb-6 transition group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>All Services</span>
          </Link>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              UI/UX, Branding & Digital Marketing
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Build a Recognizable Brand &{" "}
              <span className="bg-gradient-to-r from-amber-400 via-[#FF9112] to-amber-200 bg-clip-text text-transparent">
                Reach More Customers Online
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Build a recognizable brand, create better digital experiences and reach more customers online. From UI/UX design and professional branding to social media management and performance advertising, we elevate your digital footprint.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => openQuoteModal("UI/UX, Branding & Digital Marketing", "UI/UX & Digital Marketing")}
                className="px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF9112] to-[#E57D06] shadow-lg shadow-[#FF9112]/25 hover:shadow-[#FF9112]/40 hover:scale-[1.02] transition-all cursor-pointer"
              >
                Let's Discuss This Service
              </button>
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-[#0D1424] border border-white/10 hover:border-white/20 hover:text-white transition-all"
              >
                Request a Proposal →
              </Link>
            </div>
          </div>

          {/* Service Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-white/10">
            <div className="p-4 rounded-2xl bg-[#0D1424]/60 border border-white/5">
              <div className="text-2xl sm:text-3xl font-black text-amber-400">
                14 Services
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Comprehensive Digital Solutions
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-[#0D1424]/60 border border-white/5">
              <div className="text-2xl sm:text-3xl font-black text-amber-400">
                User-Centric
              </div>
              <div className="text-xs text-slate-400 mt-1">
                UI/UX & Usability Testing
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-[#0D1424]/60 border border-white/5">
              <div className="text-2xl sm:text-3xl font-black text-amber-400">
                Brand Impact
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Logos & Guidelines
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-[#0D1424]/60 border border-white/5">
              <div className="text-2xl sm:text-3xl font-black text-white">
                Growth Driven
              </div>
              <div className="text-xs text-slate-400 mt-1">
                SEO & Paid Ads Management
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Design Better Experiences. Grow Online.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Explore our full suite of UI/UX, branding, graphic design, and digital marketing services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designMarketingServices.map((item, index) => {
              const Icon = item.icon;

              return (
                <TiltCard
                  key={item.title}
                  className={`rounded-3xl bg-[#0D1424]/80 border ${
                    index === 0
                      ? "border-amber-500/50 shadow-lg shadow-amber-500/5"
                      : "border-white/10"
                  } hover:border-amber-500/40 transition-all p-7 flex flex-col justify-between`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#070B16] border border-white/10 flex items-center justify-center text-amber-400 text-xl mb-5 shadow-lg">
                      <Icon />
                    </div>

                    <div className="text-[10px] uppercase tracking-wider font-bold text-amber-400 mb-2">
                      {item.badge}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                      {item.desc}
                    </p>
                  </div>

                  <div>
                    <ul className="space-y-2 pt-4 border-t border-white/5 mb-6">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-2 text-xs text-slate-300"
                        >
                          <FaCheckCircle className="text-amber-400 shrink-0 text-[11px]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => openQuoteModal(item.title, "UI/UX & Digital Marketing")}
                      className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition cursor-pointer"
                    >
                      <span>Let's Discuss</span>
                      <span>→</span>
                    </button>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Toolset */}
      <section className="py-16 bg-[#0B1120]/60 border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Design & Marketing Toolkit
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Industry-standard tools we use to craft stunning visuals, manage campaigns, and track growth.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3">
            {creativeTools.map((tool) => (
              <div
                key={tool.name}
                className="p-3.5 rounded-2xl bg-[#070B16] border border-white/5 text-center hover:border-white/20 transition-all"
              >
                <div className={`font-bold text-sm ${tool.color}`}>
                  {tool.name}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  {tool.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">
              Our Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              From Concept to Brand Growth
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              A structured approach ensuring high-quality design execution and impactful digital campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {creativeWorkflow.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-3xl bg-[#0D1424]/60 border border-white/10 relative hover:border-amber-500/30 transition-all"
              >
                <div className="text-3xl font-black text-amber-400/40 mb-4">
                  {item.step}
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-[#090E1B] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Common questions about our UI/UX design, branding, and digital marketing services.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-white/10 bg-[#0D1424] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-bold text-white cursor-pointer hover:text-amber-400 transition"
                  >
                    <span>{faq.q}</span>
                    <FaChevronDown
                      className={`text-xs text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-amber-400" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#0D1424] via-[#070B16] to-[#0D1424] border border-white/10 p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-4xl font-black text-white">
                Ready to Elevate Your Digital Presence?
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Let's discuss how our UI/UX design, branding, and digital marketing services can help you reach more customers.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => openQuoteModal("UI/UX, Branding & Digital Marketing", "UI/UX & Digital Marketing")}
                  className="px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#FF9112] to-[#E57D06] shadow-lg shadow-[#FF9112]/25 hover:shadow-[#FF9112]/40 transition-all cursor-pointer"
                >
                  Let's Discuss This Service
                </button>
                <Link
                  to="/contact"
                  className="px-8 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-[#0D1424] border border-white/10 hover:border-amber-400 hover:text-white transition-all"
                >
                  Contact Our Team →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}