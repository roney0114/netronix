import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaArrowLeft,
  FaCheckCircle,
  FaGlobe,
  FaShoppingCart,
  FaRocket,
  FaShieldAlt,
  FaDatabase,
  FaChevronDown,
  FaLayerGroup,
  FaMobileAlt,
  FaLaptopCode,
  FaBriefcase,
  FaBullseye,
  FaTools,
} from "react-icons/fa";
import { useQuoteModal } from "../../context/QuoteContext";
import ParticleBackground from "../../components/ui/ParticleBackground";
import TiltCard from "../../components/ui/TiltCard";

const services = [
  {
    icon: FaCode,
    title: "Website Development",
    desc: "Build modern, responsive websites tailored to your business goals, audience, and brand identity.",
    highlights: ["Responsive layouts", "Custom functionality", "Modern UI/UX", "Cross-browser compatibility"],
  },
  {
    icon: FaBriefcase,
    title: "Business & Corporate Websites",
    desc: "Establish a professional online presence for companies, institutions, and organizations.",
    highlights: ["Company profile pages", "Service and team sections", "Contact and inquiry forms", "Brand-focused design"],
  },
  {
    icon: FaShoppingCart,
    title: "E-commerce Development",
    desc: "Create online stores with product catalogs, shopping carts, checkout flows, and payment integration.",
    highlights: ["Product and inventory tools", "Shopping cart and checkout", "eSewa and Khalti integration", "Order management"],
  },
  {
    icon: FaBullseye,
    title: "Landing Page Development",
    desc: "Design focused landing pages for products, campaigns, promotions, and lead generation.",
    highlights: ["Clear calls to action", "Conversion-focused layouts", "Campaign tracking support", "Fast loading"],
  },
  {
    icon: FaGlobe,
    title: "Portfolio Website Development",
    desc: "Showcase professional work, skills, projects, and achievements with a polished personal website.",
    highlights: ["Project galleries", "Skills and experience", "Personal branding", "Contact integration"],
  },
  {
    icon: FaLaptopCode,
    title: "Web Application Development",
    desc: "Develop interactive web-based tools and platforms for business operations and online services.",
    highlights: ["Interactive dashboards", "User authentication", "Database integration", "Custom workflows"],
  },
  {
    icon: FaDatabase,
    title: "CMS Development",
    desc: "Build content-managed websites that are easy for your team to update, publish, and maintain.",
    highlights: ["Easy content editing", "Blog and news management", "Media library", "Admin access controls"],
  },
  {
    icon: FaLayerGroup,
    title: "Website Redesign",
    desc: "Modernize outdated websites with improved visual design, usability, accessibility, and performance.",
    highlights: ["Modern visual refresh", "Mobile usability improvements", "Content structure updates", "SEO-friendly migration"],
  },
  {
    icon: FaTools,
    title: "Website Maintenance & Optimization",
    desc: "Keep your website secure, up to date, fast, and reliable with ongoing technical care.",
    highlights: ["Updates and bug fixes", "Speed optimization", "Backup and security checks", "Content updates"],
  },
];

const techStack = [
  { name: "React", role: "Interactive interfaces", color: "text-teal-400" },
  { name: "Next.js", role: "Full-stack web apps", color: "text-white" },
  { name: "Vite", role: "Modern build tooling", color: "text-amber-400" },
  { name: "Tailwind CSS", role: "Responsive styling", color: "text-cyan-400" },
  { name: "Node.js", role: "Backend runtime", color: "text-teal-400" },
  { name: "Express", role: "API development", color: "text-orange-400" },
  { name: "PostgreSQL", role: "Relational data", color: "text-cyan-400" },
  { name: "MongoDB", role: "Document database", color: "text-amber-400" },
];

const workflow = [
  {
    step: "01",
    title: "Discover & Plan",
    desc: "We discuss your goals, audience, required features, content, budget, and timeline before defining a clear project scope.",
  },
  {
    step: "02",
    title: "Design & Prototype",
    desc: "We plan the site structure and create a visual direction that keeps the experience intuitive, consistent, and responsive.",
  },
  {
    step: "03",
    title: "Develop & Test",
    desc: "We build maintainable features and test responsiveness, forms, navigation, browser compatibility, and core functionality.",
  },
  {
    step: "04",
    title: "Launch & Support",
    desc: "We prepare deployment, connect your domain, configure essential security, and provide guidance for ongoing maintenance.",
  },
];

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "The timeline depends on the size and features of the project. A simple business or portfolio website may take a few weeks, while e-commerce sites and custom web applications generally require more planning and development time.",
  },
  {
    q: "Will my website work on mobile phones and tablets?",
    a: "Yes. We design responsive layouts for mobile phones, tablets, laptops, and desktop screens, and test key pages and interactions across common screen sizes.",
  },
  {
    q: "Can you integrate eSewa or Khalti into an online store?",
    a: "Yes. Where the merchant account and gateway requirements are met, we can help integrate Nepali payment options such as eSewa and Khalti, along with other supported payment providers.",
  },
  {
    q: "Can you redesign or maintain my existing website?",
    a: "Yes. We can review your current website, identify design or performance issues, improve its structure, and provide maintenance such as updates, backups, troubleshooting, and content changes.",
  },
  {
    q: "Will I be able to update website content myself?",
    a: "If your project needs frequent content updates, we can include a content management system or admin dashboard so authorized users can manage pages, posts, images, or products.",
  },
];

export default function WebDevelopment() {
  const { openQuoteModal } = useQuoteModal();
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-[#070B16] pt-24 text-white selection:bg-[#1C9773] selection:text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 pb-20 pt-12">
        <div className="pointer-events-none absolute inset-0">
          <ParticleBackground />
        </div>
        <div className="pointer-events-none absolute left-1/2 top-1/4 h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#1C9773]/20 via-[#FF9112]/10 to-transparent blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="group mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-[#1C9773] sm:text-sm"
          >
            <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
            <span>All Services</span>
          </Link>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1C9773]/30 bg-[#1C9773]/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-teal-400" />
              Web Development Services
            </div>
            <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Modern Websites Built for{" "}
              <span className="bg-gradient-to-r from-[#1C9773] via-[#22B58A] to-[#FF9112] bg-clip-text text-transparent">
                Your Next Stage of Growth
              </span>
            </h1>
            <p className="text-base font-normal leading-relaxed text-slate-300 sm:text-lg">
              We create modern, responsive, and high-performance websites for businesses, institutions, and individuals—from business websites and online stores to custom web applications.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => openQuoteModal("Web Development", "Web & Software Development")}
                className="cursor-pointer rounded-xl bg-gradient-to-r from-[#1C9773] to-[#15795C] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1C9773]/25 transition-all hover:scale-[1.02] hover:shadow-[#1C9773]/40"
              >
                Get a Website Quote
              </button>
              <Link
                to="/portfolio"
                className="rounded-xl border border-white/10 bg-[#0D1424] px-8 py-3.5 text-sm font-bold text-slate-200 transition-all hover:border-white/20 hover:text-white"
              >
                View Our Projects →
              </Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-white/10 pt-10 md:grid-cols-4">
            {[
              { value: "9", label: "Web Development Services", color: "text-teal-400" },
              { value: "100%", label: "Responsive-first Approach", color: "text-[#FF9112]" },
              { value: "SEO", label: "Search-friendly Structure", color: "text-white" },
              { value: "Ongoing", label: "Support Available", color: "text-teal-400" },
            ].map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/5 bg-[#0D1424]/60 p-4">
                <div className={`text-2xl font-black sm:text-3xl ${metric.color}`}>{metric.value}</div>
                <div className="mt-1 text-xs text-slate-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nine services */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl space-y-3 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1C9773]">What We Offer</span>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Our Web Development Services
            </h2>
            <p className="text-sm text-slate-400 sm:text-base">
              Choose the service that fits your goals. Each solution is planned around your audience, content, functionality, and future growth.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((item, index) => {
              const Icon = item.icon;
              return (
                <TiltCard
                  key={item.title}
                  className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0D1424]/80 p-7 transition-all hover:border-[#1C9773]/40"
                >
                  <div>
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#070B16] text-xl text-[#1C9773] shadow-lg">
                        <Icon />
                      </div>
                      <span className="text-sm font-black tracking-widest text-teal-400/40">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                    <p className="mb-5 text-xs leading-relaxed text-slate-400 sm:text-sm">{item.desc}</p>
                  </div>
                  <ul className="space-y-2 border-t border-white/5 pt-4">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-xs text-slate-300">
                        <FaCheckCircle className="mt-0.5 shrink-0 text-[11px] text-[#1C9773]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => openQuoteModal(item.title, "Web & Software Development")}
                    className="mt-6 inline-flex w-fit cursor-pointer items-center gap-2 text-sm font-bold text-teal-400 transition hover:text-orange-400"
                  >
                    Let's Discuss <span aria-hidden="true">→</span>
                  </button>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology stack */}
      <section className="relative border-y border-white/10 bg-[#0B1120]/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <h3 className="text-xl font-black text-white sm:text-2xl">Technology for Modern Websites</h3>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">
              We choose suitable, maintainable tools based on the needs of each project.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="rounded-2xl border border-white/5 bg-[#070B16] p-3.5 text-center transition-all hover:border-white/20"
              >
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
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF9112]">How We Work</span>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              From First Idea to Website Launch
            </h2>
            <p className="text-sm text-slate-400 sm:text-base">
              A clear process helps keep your project organized, tested, and aligned with your goals.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="relative rounded-3xl border border-white/10 bg-[#0D1424]/60 p-6 transition-all hover:border-[#1C9773]/30"
              >
                <div className="mb-4 text-3xl font-black text-teal-400/30">{item.step}</div>
                <h4 className="mb-2 text-base font-bold text-white">{item.title}</h4>
                <p className="text-xs leading-relaxed text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-white/10 bg-[#090E1B] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-black text-white sm:text-3xl">Frequently Asked Questions</h3>
            <p className="mt-2 text-xs text-slate-400 sm:text-sm">Helpful answers before starting your website project.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q} className="overflow-hidden rounded-2xl border border-white/10 bg-[#0D1424] transition-colors">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left text-sm font-bold text-white transition hover:text-teal-400 sm:text-base"
                  >
                    <span>{faq.q}</span>
                    <FaChevronDown
                      className={`shrink-0 text-xs text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-teal-400" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-white/5 px-5 pb-5 pt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                      {faq.a}
                    </div>
                  )}
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
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#1C9773]/10 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-2xl space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-400/20 bg-teal-400/10 text-xl text-teal-400">
                <FaMobileAlt />
              </div>
              <h3 className="text-2xl font-black text-white sm:text-4xl">
                Ready to Build Your Website?
              </h3>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                Tell us what you want to achieve. We’ll help you choose the right website solution, plan the features, and provide a project quotation.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => openQuoteModal("Web Development", "Web & Software Development")}
                  className="cursor-pointer rounded-xl bg-gradient-to-r from-[#FF9112] to-[#E57D06] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#FF9112]/25 transition-all hover:shadow-[#FF9112]/40"
                >
                  Request a Quotation
                </button>
                <Link
                  to="/contact"
                  className="rounded-xl border border-white/10 bg-[#0D1424] px-8 py-3.5 text-sm font-bold text-slate-200 transition-all hover:border-teal-400 hover:text-white"
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
