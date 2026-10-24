import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLaptopCode,
  FaArrowLeft,
  FaCheckCircle,
  FaDatabase,
  FaRobot,
  FaLock,
  FaCogs,
  FaChartLine,
  FaChevronDown,
  FaBoxes,
  FaFileInvoiceDollar,
  FaGraduationCap,
  FaUsers,
  FaUserTie,
  FaCode,
  FaClipboardList,
} from "react-icons/fa";
import { useQuoteModal } from "../../context/QuoteContext";
import ParticleBackground from "../../components/ui/ParticleBackground";
import TiltCard from "../../components/ui/TiltCard";

const solutions = [
  {
    icon: FaLaptopCode,
    title: "Custom Software Development",
    desc: "Develop software around your organization's specific requirements, processes, and goals.",
    features: ["Tailored business logic", "Custom user interfaces", "System integrations", "Scalable architecture"],
  },
  {
    icon: FaCogs,
    title: "ERP System Development",
    desc: "Connect business operations, resources, inventory, and reporting in one coordinated system.",
    features: ["Centralized business data", "Finance and operations modules", "Inventory visibility", "Management reports"],
  },
  {
    icon: FaGraduationCap,
    title: "School & College Management System",
    desc: "Manage student records, attendance, fees, examinations, and results in one organized platform.",
    features: ["Student and guardian records", "Attendance and fee tracking", "Exam and result management", "Notices and reports"],
  },
  {
    icon: FaBoxes,
    title: "Inventory Management System",
    desc: "Track products, stock levels, suppliers, purchases, and sales with clear inventory records.",
    features: ["Stock movement tracking", "Supplier and purchase records", "Low-stock alerts", "Inventory reports"],
  },
  {
    icon: FaFileInvoiceDollar,
    title: "POS & Billing Software",
    desc: "Manage sales, invoices, receipts, and daily transaction records for retail and service businesses.",
    features: ["Fast billing workflows", "Invoice and receipt generation", "Daily sales summaries", "Product and tax settings"],
  },
  {
    icon: FaUsers,
    title: "CRM Development",
    desc: "Organize customer information, leads, communication history, and sales activities in one place.",
    features: ["Customer and lead records", "Sales pipeline tracking", "Follow-up reminders", "Customer activity reports"],
  },
  {
    icon: FaUserTie,
    title: "HR & Payroll Software",
    desc: "Simplify employee records, attendance, leave requests, and payroll processes.",
    features: ["Employee profiles", "Attendance and leave tracking", "Payroll calculations", "Payslips and reports"],
  },
  {
    icon: FaDatabase,
    title: "Database Design & Development",
    desc: "Create structured databases that support reliable storage, efficient retrieval, and data integrity.",
    features: ["Data modeling and schema design", "Query and index optimization", "Backup and recovery planning", "Access control"],
  },
  {
    icon: FaRobot,
    title: "Business Workflow Automation",
    desc: "Automate repetitive tasks and approval processes to improve productivity and reduce manual work.",
    features: ["Task and approval automation", "Scheduled reports", "Form and data processing", "API-based integrations"],
  },
];

const techStack = [
  { name: "Node.js", role: "Backend services", color: "text-teal-400" },
  { name: "Python", role: "Automation and data", color: "text-amber-400" },
  { name: "React", role: "Web interfaces", color: "text-cyan-400" },
  { name: "Electron", role: "Desktop apps", color: "text-orange-400" },
  { name: "PostgreSQL", role: "Relational database", color: "text-teal-400" },
  { name: "MySQL", role: "Structured data", color: "text-orange-400" },
  { name: "SQLite", role: "Local storage", color: "text-cyan-400" },
  { name: "REST APIs", role: "System integration", color: "text-white" },
];

const workflow = [
  {
    step: "01",
    title: "Understand Your Requirements",
    desc: "We review your current processes, pain points, users, and goals to define what the software needs to do.",
  },
  {
    step: "02",
    title: "Plan the System",
    desc: "We map the workflows, database structure, permissions, screens, and integrations before implementation.",
  },
  {
    step: "03",
    title: "Build & Validate",
    desc: "We develop the system in manageable stages and test key workflows with feedback from the people who will use it.",
  },
  {
    step: "04",
    title: "Deploy & Improve",
    desc: "We help deploy the software, onboard users, migrate approved data, and plan maintenance and future improvements.",
  },
];

const faqs = [
  {
    q: "Can you build software specifically for our organization?",
    a: "Yes. We start with your requirements and design a solution around your processes, user roles, reports, and integrations rather than forcing your team into a generic workflow.",
  },
  {
    q: "Can you migrate data from Excel or an older system?",
    a: "Yes. We can assess available spreadsheets or legacy data, clean and map the records, and plan a controlled migration with validation and backups.",
  },
  {
    q: "Can different employees have different access permissions?",
    a: "Yes. We can define role-based permissions so employees only access the records and actions required for their responsibilities.",
  },
  {
    q: "Can the system integrate with other software?",
    a: "Where supported interfaces are available, we can connect your system with other applications, payment services, reporting tools, or existing databases.",
  },
  {
    q: "Do you provide support after deployment?",
    a: "We can discuss a support plan for troubleshooting, updates, backups, performance reviews, and feature improvements based on your needs.",
  },
];

export default function SoftwareDevelopment() {
  const { openQuoteModal } = useQuoteModal();
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-[#070B16] pt-24 text-white selection:bg-[#1C9773] selection:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10 pb-20 pt-12">
        <div className="pointer-events-none absolute inset-0">
          <ParticleBackground />
        </div>
        <div className="pointer-events-none absolute left-1/2 top-1/4 h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#FF9112]/20 via-[#1C9773]/10 to-transparent blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="group mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-[#FF9112] sm:text-sm"
          >
            <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
            <span>All Services</span>
          </Link>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF9112]/30 bg-[#FF9112]/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
              Custom Software Solutions
            </div>
            <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Software That Fits Your{" "}
              <span className="bg-gradient-to-r from-[#FF9112] via-[#FFA73E] to-[#1C9773] bg-clip-text text-transparent">
                Business Workflow
              </span>
            </h1>
            <p className="text-base font-normal leading-relaxed text-slate-300 sm:text-lg">
              We build custom software and management systems that streamline business processes, organize information, and help your team work more efficiently.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => openQuoteModal("Software Development", "Web & Software Development")}
                className="cursor-pointer rounded-xl bg-gradient-to-r from-[#FF9112] to-[#E57D06] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#FF9112]/25 transition-all hover:scale-[1.02] hover:shadow-[#FF9112]/40"
              >
                Discuss Your Software Project
              </button>
              <Link
                to="/contact"
                className="rounded-xl border border-white/10 bg-[#0D1424] px-8 py-3.5 text-sm font-bold text-slate-200 transition-all hover:border-white/20 hover:text-white"
              >
                Contact Our Team →
              </Link>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-white/10 pt-10 md:grid-cols-4">
            {[
              { value: "9", label: "Software Service Areas", color: "text-amber-400" },
              { value: "Custom", label: "Built Around Your Needs", color: "text-teal-400" },
              { value: "RBAC", label: "Role-Based Access Options", color: "text-white" },
              { value: "Scalable", label: "Designed for Growth", color: "text-amber-400" },
            ].map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/5 bg-[#0D1424]/60 p-4">
                <div className={`text-2xl font-black sm:text-3xl ${metric.color}`}>{metric.value}</div>
                <div className="mt-1 text-xs text-slate-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nine Services */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl space-y-3 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF9112]">What We Develop</span>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Our Software Development Services
            </h2>
            <p className="text-sm text-slate-400 sm:text-base">
              Practical software solutions designed to reduce repetitive work, improve record keeping, and make everyday operations easier to manage.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item, index) => {
              const Icon = item.icon;
              return (
                <TiltCard
                  key={item.title}
                  className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0D1424]/80 p-7 transition-all hover:border-[#FF9112]/40"
                >
                  <div>
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#070B16] text-xl text-[#FF9112] shadow-lg">
                        <Icon />
                      </div>
                      <span className="text-sm font-black tracking-widest text-amber-400/40">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                    <p className="mb-5 text-xs leading-relaxed text-slate-400 sm:text-sm">{item.desc}</p>
                  </div>

                  <ul className="space-y-2 border-t border-white/5 pt-4">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs text-slate-300">
                        <FaCheckCircle className="mt-0.5 shrink-0 text-[11px] text-[#FF9112]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => openQuoteModal(item.title, "Web & Software Development")}
                    className="mt-6 inline-flex w-fit cursor-pointer items-center gap-2 text-sm font-bold text-amber-400 transition hover:text-teal-400"
                  >
                    Let's Discuss <span aria-hidden="true">→</span>
                  </button>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative border-y border-white/10 bg-[#0B1120]/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <h3 className="text-xl font-black text-white sm:text-2xl">A Reliable Technical Foundation</h3>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">
              We select technologies to suit the project's features, data, deployment, and support requirements.
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
            <span className="text-xs font-bold uppercase tracking-widest text-[#1C9773]">Our Process</span>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              From Requirements to Reliable Software
            </h2>
            <p className="text-sm text-slate-400 sm:text-base">
              We work in clear stages so your team can review progress and validate important features along the way.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-white/10 bg-[#0D1424]/60 p-6 transition-all hover:border-[#FF9112]/30"
              >
                <div className="mb-4 text-3xl font-black text-amber-400/30">{item.step}</div>
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
            <p className="mt-2 text-xs text-slate-400 sm:text-sm">
              Common questions about custom software and management systems.
            </p>
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
                    className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left text-sm font-bold text-white transition hover:text-amber-400 sm:text-base"
                  >
                    <span>{faq.q}</span>
                    <FaChevronDown
                      className={`shrink-0 text-xs text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-amber-400" : ""}`}
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
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#FF9112]/10 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-2xl space-y-4">
              <h3 className="text-2xl font-black text-white sm:text-4xl">
                Ready to Improve the Way Your Business Works?
              </h3>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                Tell us about your current workflow and the challenges you want to solve. We'll help plan a custom software solution that fits your organization.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => openQuoteModal("Software Development", "Web & Software Development")}
                  className="cursor-pointer rounded-xl bg-gradient-to-r from-[#FF9112] to-[#E57D06] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#FF9112]/25 transition-all hover:shadow-[#FF9112]/40"
                >
                  Request a Software Quote
                </button>
                <Link
                  to="/contact"
                  className="rounded-xl border border-white/10 bg-[#0D1424] px-8 py-3.5 text-sm font-bold text-slate-200 transition-all hover:border-amber-400 hover:text-white"
                >
                  Talk to Our Team →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
