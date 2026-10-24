import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaMobileAlt,
  FaArrowLeft,
  FaCheckCircle,
  FaApple,
  FaAndroid,
  FaRocket,
  FaBell,
  FaShieldAlt,
  FaCreditCard,
  FaChevronDown,
  FaSyncAlt,
  FaLayerGroup,
  FaBriefcase,
  FaShoppingCart,
  FaCode,
  FaCloudUploadAlt,
} from "react-icons/fa";
import { useQuoteModal } from "../../context/QuoteContext";
import ParticleBackground from "../../components/ui/ParticleBackground";
import TiltCard from "../../components/ui/TiltCard";

const mobileServices = [
  {
    icon: FaAndroid,
    title: "Android App Development",
    desc: "Build Android applications tailored to your users and business needs.",
    details: "Create useful, responsive Android apps for phones and supported devices, with a focus on performance, usability, and maintainable code.",
    highlights: ["Kotlin-based native development", "Responsive layouts across devices", "Secure data handling", "Testing and performance tuning"],
  },
  {
    icon: FaApple,
    title: "iOS App Development",
    desc: "Develop applications for iPhone and other supported Apple devices.",
    details: "Deliver polished iOS experiences that follow Apple platform conventions and support reliable, intuitive interactions.",
    highlights: ["Swift and native iOS features", "Apple Human Interface Guidelines", "Device and OS compatibility", "Accessibility-minded interfaces"],
  },
  {
    icon: FaLayerGroup,
    title: "Cross-Platform App Development",
    desc: "Build applications for multiple platforms with shared code where appropriate.",
    details: "Use frameworks such as React Native or Flutter when a shared codebase makes sense for your product, schedule, and budget.",
    highlights: ["React Native and Flutter options", "Shared business logic", "Platform-specific features when needed", "Consistent user experience"],
  },
  {
    icon: FaShoppingCart,
    title: "E-commerce Mobile Apps",
    desc: "Let customers browse products, place orders and track purchases.",
    details: "Make shopping convenient with product discovery, secure checkout flows, order updates, and customer account features.",
    highlights: ["Product catalogue and search", "Cart and checkout flows", "Order status and purchase history", "Payment gateway integration"],
  },
  {
    icon: FaBriefcase,
    title: "Business & Enterprise Apps",
    desc: "Develop mobile tools for internal operations and business services.",
    details: "Equip teams with mobile workflows for field operations, approvals, reporting, customer service, and business information.",
    highlights: ["Role-based access", "Forms and workflow tools", "Reports and dashboards", "Integration with business systems"],
  },
  {
    icon: FaMobileAlt,
    title: "UI Implementation for Mobile Apps",
    desc: "Convert interface designs into polished, functional mobile screens.",
    details: "Turn wireframes and visual designs into usable screens with consistent spacing, clear navigation, and accessible interactions.",
    highlights: ["Design-to-code implementation", "Reusable UI components", "Responsive layouts", "Transitions and interaction states"],
  },
  {
    icon: FaCode,
    title: "API & Backend Integration",
    desc: "Connect applications with databases, servers and third-party services.",
    details: "Connect mobile experiences to secure APIs and backend systems so data can be exchanged reliably and efficiently.",
    highlights: ["REST API integration", "Authentication and session handling", "Database-backed features", "Error and loading state handling"],
  },
  {
    icon: FaBell,
    title: "Push Notifications & App Integrations",
    desc: "Add notifications and useful integrations to improve engagement.",
    details: "Help users stay informed with relevant notifications and connect your app to the tools and services your business uses.",
    highlights: ["Firebase Cloud Messaging", "Apple Push Notification service", "Deep links and app links", "Third-party service integrations"],
  },
  {
    icon: FaCloudUploadAlt,
    title: "App Publishing & Maintenance",
    desc: "Assist with store submissions, updates, troubleshooting and ongoing improvements.",
    details: "Prepare releases for app stores and help maintain your application with updates, issue resolution, and post-launch improvements.",
    highlights: ["Google Play and App Store submission support", "Release and version management", "Bug fixes and compatibility updates", "Ongoing performance improvements"],
  },
];

const mobileTech = [
  { name: "React Native", role: "Cross-platform framework", color: "text-teal-400" },
  { name: "Flutter", role: "Cross-platform UI", color: "text-cyan-400" },
  { name: "Kotlin", role: "Native Android", color: "text-violet-400" },
  { name: "Swift", role: "Native iOS", color: "text-amber-400" },
  { name: "Expo", role: "Mobile development tools", color: "text-white" },
  { name: "Firebase", role: "Backend and notifications", color: "text-orange-400" },
  { name: "REST APIs", role: "Service integration", color: "text-teal-300" },
  { name: "Git", role: "Version control", color: "text-rose-400" },
];

const mobileWorkflow = [
  {
    step: "01",
    title: "Discovery & Planning",
    desc: "We discuss your audience, goals, required features, target platforms, and project priorities.",
  },
  {
    step: "02",
    title: "UI/UX Design",
    desc: "We map the user journey and prepare screen layouts that make common tasks clear and easy.",
  },
  {
    step: "03",
    title: "Development & Testing",
    desc: "We build the app in manageable stages and test core flows across supported devices and conditions.",
  },
  {
    step: "04",
    title: "Launch & Improvement",
    desc: "We support store preparation, release, feedback review, maintenance, and future enhancements.",
  },
];

const faqs = [
  {
    q: "Can you build an app for both Android and iOS?",
    a: "Yes. We can develop native Android and iOS applications or use a cross-platform framework such as React Native or Flutter. The right approach depends on your features, performance needs, budget, and timeline.",
  },
  {
    q: "Can my mobile app connect to my existing website or software?",
    a: "Yes. Where suitable APIs are available, the app can connect to your website, database-backed services, payment providers, or business software. We assess security and integration requirements during planning.",
  },
  {
    q: "Do you help publish apps to Google Play and the Apple App Store?",
    a: "We can help prepare builds, store listings, screenshots, required policy information, and submissions. Final approval is determined by each store and cannot be guaranteed.",
  },
  {
    q: "Can you maintain the app after it launches?",
    a: "Yes. Maintenance can include bug fixes, compatibility updates, dependency updates, performance improvements, and feature enhancements based on your needs.",
  },
];

export default function MobileApp() {
  const { openQuoteModal } = useQuoteModal();
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-[#070B16] pt-24 text-white selection:bg-[#1C9773] selection:text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 pb-20 pt-12">
        <div className="pointer-events-none absolute inset-0"><ParticleBackground /></div>
        <div className="pointer-events-none absolute left-1/2 top-1/4 h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#1C9773]/20 via-[#FF9112]/15 to-transparent blur-[140px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="group mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-teal-400 sm:text-sm">
            <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
            <span>All Services</span>
          </Link>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1C9773]/30 bg-[#1C9773]/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-teal-400" />
              Mobile App Development
            </div>
            <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Mobile Experiences,{" "}
              <span className="bg-gradient-to-r from-[#1C9773] via-[#22B58A] to-[#FF9112] bg-clip-text text-transparent">
                Built Around Your Users
              </span>
            </h1>
            <p className="text-base font-normal leading-relaxed text-slate-300 sm:text-lg">
              Turn your idea into a practical mobile experience. We build Android, iOS, and cross-platform apps that help customers connect with your business and help teams work smarter.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button type="button" onClick={() => openQuoteModal("Mobile App Development", "Mobile App")} className="cursor-pointer rounded-xl bg-gradient-to-r from-[#1C9773] to-[#15795C] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1C9773]/25 transition-all hover:scale-[1.02] hover:shadow-[#1C9773]/40">
                Request Mobile App Quote
              </button>
              <Link to="/contact" className="rounded-xl border border-white/10 bg-[#0D1424] px-8 py-3.5 text-sm font-bold text-slate-200 transition-all hover:border-white/20 hover:text-white">
                Book a Discovery Session →
              </Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-white/10 pt-10 md:grid-cols-4">
            {[
              { value: "Android", label: "Native App Development", color: "text-teal-400" },
              { value: "iOS", label: "Apple Device Experiences", color: "text-white" },
              { value: "Cross-platform", label: "Shared-Code Options", color: "text-[#1C9773]" },
              { value: "End-to-end", label: "From Idea to Maintenance", color: "text-[#FF9112]" },
            ].map((metric) => (
              <div key={metric.value} className="rounded-2xl border border-white/5 bg-[#0D1424]/60 p-4">
                <div className={`text-xl font-black sm:text-2xl ${metric.color}`}>{metric.value}</div>
                <div className="mt-1 text-xs text-slate-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl space-y-3 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1C9773]">What We Build</span>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Mobile Solutions for Real-World Needs</h2>
            <p className="text-sm text-slate-400 sm:text-base">From the first interface to integrations and ongoing support, explore our mobile application services.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mobileServices.map((item) => {
              const Icon = item.icon;
              return (
                <TiltCard key={item.title} className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0D1424]/80 p-7 transition-all hover:border-[#1C9773]/40">
                  <div>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#070B16] text-xl text-[#1C9773] shadow-lg"><Icon /></div>
                    <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                    <p className="mb-3 text-xs leading-relaxed text-slate-300 sm:text-sm">{item.desc}</p>
                    <p className="mb-5 text-xs leading-relaxed text-slate-400">{item.details}</p>
                  </div>
                  <div>
                    <ul className="space-y-2 border-t border-white/5 pt-4">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-xs text-slate-300">
                          <FaCheckCircle className="mt-0.5 shrink-0 text-[11px] text-[#1C9773]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <button type="button" onClick={() => openQuoteModal(item.title, "Mobile App")} className="mt-6 inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-teal-400 transition hover:text-orange-400">
                      Let's Discuss <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="relative border-y border-white/10 bg-[#0B1120]/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <h3 className="text-xl font-black text-white sm:text-2xl">Mobile Technology Ecosystem</h3>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">Technology choices based on your product and requirements.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {mobileTech.map((tech) => (
              <div key={tech.name} className="rounded-2xl border border-white/5 bg-[#070B16] p-3.5 text-center transition-all hover:border-white/20">
                <div className={`text-sm font-bold ${tech.color}`}>{tech.name}</div>
                <div className="mt-0.5 truncate text-[10px] text-slate-500">{tech.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl space-y-3 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF9112]">Our Process</span>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">From Idea to App Launch</h2>
            <p className="text-sm text-slate-400 sm:text-base">A collaborative process designed to keep the project clear, testable, and focused on your goals.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {mobileWorkflow.map((item) => (
              <div key={item.step} className="relative rounded-3xl border border-white/10 bg-[#0D1424]/60 p-6 transition-all hover:border-[#1C9773]/30">
                <div className="mb-4 text-3xl font-black text-teal-400/30">{item.step}</div>
                <h4 className="mb-2 text-base font-bold text-white">{item.title}</h4>
                <p className="text-xs leading-relaxed text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 bg-[#090E1B] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-black text-white sm:text-3xl">Frequently Asked Questions</h3>
            <p className="mt-2 text-xs text-slate-400 sm:text-sm">Answers to common mobile app development questions.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q} className="overflow-hidden rounded-2xl border border-white/10 bg-[#0D1424] transition-colors">
                  <button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? -1 : index)} className="flex w-full cursor-pointer items-center justify-between p-5 text-left text-sm font-bold text-white transition hover:text-teal-400 sm:text-base">
                    <span>{faq.q}</span>
                    <FaChevronDown className={`ml-4 shrink-0 text-xs text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-teal-400" : ""}`} />
                  </button>
                  {isOpen && <div className="border-t border-white/5 px-5 pb-5 pt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#0D1424] via-[#070B16] to-[#0D1424] p-8 text-center shadow-2xl sm:p-14">
            <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full bg-[#1C9773]/10 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-2xl space-y-4">
              <h3 className="text-2xl font-black text-white sm:text-4xl">Have a Mobile App Idea?</h3>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">Tell us what you want to build. We’ll help you plan the right platform, features, integrations, and next steps.</p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button type="button" onClick={() => openQuoteModal("Mobile App Development", "Mobile App")} className="cursor-pointer rounded-xl bg-gradient-to-r from-[#FF9112] to-[#E57D06] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#FF9112]/25 transition-all hover:shadow-[#FF9112]/40">
                  Request a Mobile App Quote
                </button>
                <Link to="/contact" className="rounded-xl border border-white/10 bg-[#0D1424] px-8 py-3.5 text-sm font-bold text-slate-200 transition-all hover:border-teal-400 hover:text-white">
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
