import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaLightbulb,
  FaShieldAlt,
  FaHeadset,
  FaDatabase,
  FaDesktop,
  FaChevronDown,
  FaHandshake,
  FaTools,
  FaLaptop,
  FaPrint,
  FaWindows,
  FaBuilding,
  FaCloud,
  FaClipboardCheck,
} from "react-icons/fa";
import { useQuoteModal } from "../../context/QuoteContext";
import ParticleBackground from "../../components/ui/ParticleBackground";
import TiltCard from "../../components/ui/TiltCard";

const consultingOfferings = [
  {
    icon: FaLightbulb,
    title: "IT Consulting & Planning",
    badge: "Strategy & Planning",
    desc: "Recommend technology solutions based on business needs and budget.",
    highlights: [
      "Technology roadmap and priorities",
      "Software and hardware selection guidance",
      "Budget-conscious recommendations",
      "IT planning for business growth",
    ],
  },
  {
    icon: FaClipboardCheck,
    title: "IT Infrastructure Assessment",
    badge: "System Audit",
    desc: "Review existing systems and identify improvement opportunities.",
    highlights: [
      "Existing system and device inventory",
      "Network and connectivity review",
      "Backup and security practice checks",
      "Prioritized improvement report",
    ],
  },
  {
    icon: FaTools,
    title: "Computer Repair & Troubleshooting",
    badge: "Hardware & Repair",
    desc: "Diagnose and resolve common desktop and laptop problems.",
    highlights: [
      "Hardware and software diagnostics",
      "Slow computer troubleshooting",
      "Startup and stability checks",
      "Repair options and next-step advice",
    ],
  },
  {
    icon: FaDesktop,
    title: "Hardware Installation & Upgrades",
    badge: "Hardware Upgrades",
    desc: "Install or upgrade RAM, storage, peripherals and computer components.",
    highlights: [
      "RAM and SSD/HDD upgrades",
      "Monitor and peripheral installation",
      "Component compatibility checks",
      "Post-upgrade testing",
    ],
  },
  {
    icon: FaLaptop,
    title: "Software Installation & Configuration",
    badge: "Software Setup",
    desc: "Install and configure operating systems and business applications.",
    highlights: [
      "Business application setup",
      "Driver and utility configuration",
      "Application settings and updates",
      "Software licensing guidance",
    ],
  },
  {
    icon: FaPrint,
    title: "Printer & Scanner Configuration",
    badge: "Office Peripherals",
    desc: "Set up printing, scanning and shared office peripherals.",
    highlights: [
      "USB, Ethernet, and Wi-Fi setup",
      "Printer drivers and test pages",
      "Shared network printing",
      "Scan-to-computer configuration",
    ],
  },
  {
    icon: FaWindows,
    title: "Operating System Installation",
    badge: "OS Setup",
    desc: "Install and configure supported operating systems and essential drivers.",
    highlights: [
      "OS installation and initial setup",
      "Driver and update configuration",
      "User accounts and system settings",
      "Data backup checks before reinstall",
    ],
  },
  {
    icon: FaDesktop,
    title: "Computer Maintenance",
    badge: "Device Care",
    desc: "Perform routine checks, cleaning and preventive maintenance.",
    highlights: [
      "Preventive maintenance checks",
      "Dust and ventilation inspection",
      "Storage and startup review",
      "Update and performance checks",
    ],
  },
  {
    icon: FaHeadset,
    title: "Remote IT Support",
    badge: "Remote Assistance",
    desc: "Resolve eligible technical problems remotely.",
    highlights: [
      "Remote troubleshooting by appointment",
      "Software and configuration assistance",
      "Guided user support",
      "Escalation advice for on-site issues",
    ],
  },
  {
    icon: FaHandshake,
    title: "On-Site IT Support",
    badge: "Field Support",
    desc: "Provide hands-on assistance at client offices and workplaces.",
    highlights: [
      "On-site diagnosis and setup",
      "Device and peripheral troubleshooting",
      "Office connectivity assistance",
      "Visit scheduling by arrangement",
    ],
  },
  {
    icon: FaDatabase,
    title: "Data Backup & Recovery Assistance",
    badge: "Data Recovery",
    desc: "Configure backups and assist with recoverable data loss incidents.",
    highlights: [
      "Local and cloud backup options",
      "Backup schedule configuration",
      "Restore checks and recovery guidance",
      "Safe handling recommendations for failed drives",
    ],
  },
  {
    icon: FaShieldAlt,
    title: "Basic Cybersecurity & Protection",
    badge: "Security Controls",
    desc: "Configure security controls and recommend practical protection measures.",
    highlights: [
      "Security updates and endpoint protection",
      "Firewall and account settings review",
      "Multi-factor authentication guidance",
      "Safe browsing and phishing awareness",
    ],
  },
  {
    icon: FaBuilding,
    title: "Office IT Setup",
    badge: "Workplace Setup",
    desc: "Configure computers, printers, internet access and essential office systems.",
    highlights: [
      "Workstation and peripheral setup",
      "Internet and Wi-Fi connection",
      "Shared printer and folder configuration",
      "Essential business software setup",
    ],
  },
  {
    icon: FaCloud,
    title: "Ongoing IT Maintenance Plans",
    badge: "Scheduled Support",
    desc: "Provide scheduled support and maintenance under an agreed service plan.",
    highlights: [
      "Scheduled system health checks",
      "Planned updates and maintenance",
      "Backup and security reviews",
      "Agreed support scope and schedule",
    ],
  },
];

const expertiseDomains = [
  { name: "IT Planning", role: "Strategy & budgets", color: "text-[#FF9112]" },
  { name: "Cybersecurity", role: "Device protection", color: "text-[#1C9773]" },
  { name: "Cloud & Backup", role: "Data protection", color: "text-amber-400" },
  { name: "Hardware Systems", role: "Repair & upgrades", color: "text-teal-400" },
  { name: "Network Support", role: "Connectivity checks", color: "text-[#FF9112]" },
  { name: "Windows / Linux", role: "Operating systems", color: "text-[#1C9773]" },
  { name: "Office Equipment", role: "Printers & scanners", color: "text-amber-400" },
  { name: "Preventive Care", role: "Planned maintenance", color: "text-white" },
];

const advisoryWorkflow = [
  {
    step: "01",
    title: "Understand the Issue",
    desc: "We discuss your goals or technical problem, gather relevant device and system details, and confirm the scope of support needed.",
  },
  {
    step: "02",
    title: "Assess & Recommend",
    desc: "We review the available information, identify likely causes or improvement areas, and explain practical options and expected costs before proceeding.",
  },
  {
    step: "03",
    title: "Implement the Solution",
    desc: "With your approval, we carry out the agreed configuration, maintenance, installation, or troubleshooting work.",
  },
  {
    step: "04",
    title: "Test & Advise",
    desc: "We check the result, explain any remaining limitations, and suggest useful maintenance steps to help prevent recurring problems.",
  },
];

const faqs = [
  {
    q: "What types of IT problems can you help with?",
    a: "We can assist with common computer, software, printer, scanner, connectivity, office setup, backup, and basic security issues. The best support method depends on the problem, device condition, and whether physical access is needed.",
  },
  {
    q: "How does remote IT support work?",
    a: "You describe the problem and arrange a support session. With your permission, a technician can use an agreed remote-support tool to diagnose and resolve eligible issues. Hardware faults and some network problems may require an on-site visit.",
  },
  {
    q: "Can you upgrade my computer instead of replacing it?",
    a: "Often, a compatible RAM or SSD upgrade or a maintenance service can improve performance. We assess the device model, current components, operating system, and intended use before recommending an upgrade; not every computer supports every component.",
  },
  {
    q: "Can you recover files from a failed hard drive?",
    a: "We can help assess the situation and review backup or recovery options, but successful recovery is not guaranteed. If a drive is making unusual noises or is physically damaged, stop using it and seek specialist data-recovery advice to reduce the risk of further damage.",
  },
  {
    q: "What is included in an ongoing maintenance plan?",
    a: "The scope is agreed in advance and may include scheduled health checks, updates, preventive maintenance, backup reviews, troubleshooting, and support visits. Included tasks, response times, and fees should be clearly documented in the service agreement.",
  },
];

export default function Consulting() {
  const { openQuoteModal } = useQuoteModal();
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-[#070B16] pt-24 text-white selection:bg-[#1C9773] selection:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10 pb-20 pt-12">
        <div className="pointer-events-none absolute inset-0">
          <ParticleBackground />
        </div>
        <div className="pointer-events-none absolute left-1/2 top-1/4 h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-amber-500/20 via-[#1C9773]/15 to-transparent blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="group mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-amber-400 sm:text-sm"
          >
            <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
            <span>All Services</span>
          </Link>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
              IT Consulting & Support
            </div>

            <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Practical Technical Assistance to Keep Computer Systems,{" "}
              <span className="bg-gradient-to-r from-amber-400 via-[#FF9112] to-[#1C9773] bg-clip-text text-transparent">
                Office Equipment & IT Infrastructure Running Smoothly
              </span>
            </h1>

            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              Practical technical assistance to keep computer systems, office equipment and IT infrastructure running smoothly. From IT planning and hardware upgrades to remote support and cybersecurity, we ensure your daily operations remain uninterrupted.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => openQuoteModal("IT Consulting & Support", "Consulting")}
                className="cursor-pointer rounded-xl bg-gradient-to-r from-[#FF9112] to-[#E57D06] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#FF9112]/25 transition-all hover:scale-[1.02] hover:shadow-[#FF9112]/40"
              >
                Let's Discuss This Service
              </button>
              <Link
                to="/contact"
                className="rounded-xl border border-white/10 bg-[#0D1424] px-8 py-3.5 text-sm font-bold text-slate-200 transition-all hover:border-white/20 hover:text-white"
              >
                Request a Proposal →
              </Link>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-white/10 pt-10 md:grid-cols-4">
            {[
              { value: "14 Services", label: "Everyday IT assistance", color: "text-amber-400" },
              { value: "Remote + On-site", label: "Flexible support options", color: "text-teal-400" },
              { value: "Security-first", label: "Practical protection", color: "text-white" },
              { value: "Planned Care", label: "Preventive maintenance", color: "text-amber-400" },
            ].map((metric) => (
              <div
                key={metric.value}
                className="rounded-2xl border border-white/5 bg-[#0D1424]/60 p-4"
              >
                <div className={`text-xl font-black sm:text-2xl ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="mt-1 text-xs text-slate-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl space-y-3 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Our Capabilities
            </span>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Complete IT Consulting & Support Solutions
            </h2>
            <p className="text-sm text-slate-400 sm:text-base">
              Technical assistance for businesses, institutions, offices, and individual
              workstations, from planning through routine maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {consultingOfferings.map((item, index) => {
              const Icon = item.icon;

              return (
                <TiltCard
                  key={item.title}
                  className={`flex flex-col justify-between rounded-3xl border ${
                    index === 0
                      ? "border-amber-500/50 shadow-lg shadow-amber-500/5"
                      : "border-white/10"
                  } bg-[#0D1424]/80 p-7 transition-all hover:border-amber-500/40`}
                >
                  <div>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#070B16] text-xl text-amber-400 shadow-lg">
                      <Icon />
                    </div>

                    <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                      {item.badge}
                    </div>

                    <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                    <p className="mb-5 text-xs leading-relaxed text-slate-400 sm:text-sm">
                      {item.desc}
                    </p>
                  </div>

                  <div>
                    <ul className="mb-6 space-y-2 border-t border-white/5 pt-4">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-2 text-xs text-slate-300"
                        >
                          <FaCheckCircle className="shrink-0 text-[11px] text-amber-400" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => openQuoteModal(item.title, "Consulting")}
                      className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 transition hover:text-amber-300 cursor-pointer"
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

      {/* Areas of Expertise */}
      <section className="relative border-y border-white/10 bg-[#0B1120]/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <h3 className="text-xl font-black sm:text-2xl">
              Areas of Technical Support
            </h3>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">
              Practical help across the technology used in everyday operations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {expertiseDomains.map((domain) => (
              <div
                key={domain.name}
                className="rounded-2xl border border-white/5 bg-[#070B16] p-3.5 text-center transition-all hover:border-white/20"
              >
                <div className={`text-sm font-bold ${domain.color}`}>{domain.name}</div>
                <div className="mt-0.5 truncate text-[10px] text-slate-500">
                  {domain.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl space-y-3 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1C9773]">
              Our Process
            </span>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              From Diagnosis to Ongoing Care
            </h2>
            <p className="text-sm text-slate-400 sm:text-base">
              A transparent support process helps set expectations and resolve issues
              in a practical, organized way.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advisoryWorkflow.map((item) => (
              <div
                key={item.step}
                className="relative rounded-3xl border border-white/10 bg-[#0D1424]/60 p-6 transition-all hover:border-amber-500/30"
              >
                <div className="mb-4 text-3xl font-black text-amber-400/40">
                  {item.step}
                </div>
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
            <h3 className="text-2xl font-black sm:text-3xl">
              Frequently Asked Questions
            </h3>
            <p className="mt-2 text-xs text-slate-400 sm:text-sm">
              Answers about IT consulting, repair, support, and maintenance.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[#0D1424] transition-colors"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full cursor-pointer items-center justify-between p-5 text-left text-sm font-bold text-white transition hover:text-amber-400 sm:text-base"
                  >
                    <span>{faq.q}</span>
                    <FaChevronDown
                      className={`ml-4 shrink-0 text-xs text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-amber-400" : ""
                      }`}
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

      {/* Bottom CTA */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#0D1424] via-[#070B16] to-[#0D1424] p-8 text-center shadow-2xl sm:p-14">
            <div className="relative z-10 mx-auto max-w-2xl space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-xl text-amber-400">
                <FaTools />
              </div>
              <h3 className="text-2xl font-black sm:text-4xl">
                Ready to Keep Your IT Infrastructure Running Smoothly?
              </h3>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                Let's discuss how our technical assistance, maintenance plans, and IT support services can support your organization.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => openQuoteModal("IT Consulting & Support", "Consulting")}
                  className="cursor-pointer rounded-xl bg-gradient-to-r from-[#FF9112] to-[#E57D06] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#FF9112]/25 transition-all hover:shadow-[#FF9112]/40"
                >
                  Let's Discuss This Service
                </button>
                <Link
                  to="/contact"
                  className="rounded-xl border border-white/10 bg-[#0D1424] px-8 py-3.5 text-sm font-bold text-slate-200 transition-all hover:border-amber-400 hover:text-white"
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