import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaNetworkWired,
  FaArrowLeft,
  FaCheckCircle,
  FaServer,
  FaWifi,
  FaShieldAlt,
  FaCloud,
  FaEnvelope,
  FaCamera,
  FaChevronDown,
  FaLock,
  FaHdd,
  FaGlobe,
  FaTools,
  FaRoute,
  FaVideo,
} from "react-icons/fa";
import { useQuoteModal } from "../../context/QuoteContext";
import ParticleBackground from "../../components/ui/ParticleBackground";
import TiltCard from "../../components/ui/TiltCard";

const infraCapabilities = [
  {
    icon: FaNetworkWired,
    title: "LAN Installation & Configuration",
    badge: "Wired Networks",
    desc: "Set up reliable wired networks for offices and institutions.",
    highlights: [
      "Structured CAT6 cabling setup",
      "Workstation & device linking",
      "Patch panel & port labeling",
      "End-to-end performance testing",
    ],
  },
  {
    icon: FaWifi,
    title: "Wi-Fi Installation & Optimization",
    badge: "Wireless Connectivity",
    desc: "Configure wireless networks and improve coverage and connectivity.",
    highlights: [
      "Strategic access point placement",
      "Dead zone coverage elimination",
      "Guest & staff network separation",
      "Signal interference reduction",
    ],
  },
  {
    icon: FaRoute,
    title: "Router & Switch Configuration",
    badge: "Network Devices",
    desc: "Set up network devices for reliable communication and connectivity.",
    highlights: [
      "Managed switch setup & tuning",
      "Router WAN/LAN configuration",
      "DHCP & IP address allocation",
      "Secure configuration backups",
    ],
  },
  {
    icon: FaTools,
    title: "Network Troubleshooting",
    badge: "Diagnostics & Support",
    desc: "Diagnose slow connections, outages and configuration problems.",
    highlights: [
      "Slow internet speed diagnostics",
      "Intermittent dropouts resolution",
      "IP conflict & DNS troubleshooting",
      "Faulty cable identification",
    ],
  },
  {
    icon: FaVideo,
    title: "CCTV Installation",
    badge: "Surveillance Setup",
    desc: "Install and configure surveillance cameras for homes and businesses.",
    highlights: [
      "Strategic camera positioning",
      "Indoor & outdoor placement",
      "DVR/NVR storage setup",
      "System handover & walkthrough",
    ],
  },
  {
    icon: FaCamera,
    title: "IP Camera & Remote Monitoring",
    badge: "Remote Security",
    desc: "Configure network cameras, recording and secure remote access.",
    highlights: [
      "Network IP camera integration",
      "Mobile app remote viewing setup",
      "Motion detection & alerts",
      "Secure user permissions",
    ],
  },
  {
    icon: FaCloud,
    title: "Cloud Hosting",
    badge: "Cloud Infrastructure",
    desc: "Deploy websites and applications on suitable cloud infrastructure.",
    highlights: [
      "Optimal cloud server selection",
      "Linux VPS setup & hardening",
      "App & website deployment",
      "Uptime & resource monitoring",
    ],
  },
  {
    icon: FaGlobe,
    title: "Domain Registration & Configuration",
    badge: "Domain Management",
    desc: "Help register domains and configure their DNS records.",
    highlights: [
      "Domain availability & purchase",
      "A, CNAME & TXT DNS records",
      "Nameserver pointing & linking",
      "Renewal & ownership tracking",
    ],
  },
  {
    icon: FaEnvelope,
    title: "Business Email Hosting",
    badge: "Professional Email",
    desc: "Set up professional email addresses using your company domain.",
    highlights: [
      "Custom domain email accounts",
      "MX, SPF, DKIM & DMARC setup",
      "Outlook & mobile client config",
      "Spam protection guidance",
    ],
  },
  {
    icon: FaLock,
    title: "SSL Certificate & HTTPS Setup",
    badge: "Web Security",
    desc: "Enable secure encrypted connections for your web assets and applications.",
    highlights: [
      "SSL/TLS certificate installation",
      "Automatic HTTP to HTTPS redirect",
      "Mixed content warnings fix",
      "Certificate renewal monitoring",
    ],
  },
  {
    icon: FaHdd,
    title: "Website Migration & Server Backup",
    badge: "Data Protection",
    desc: "Transfer websites securely between hosts and establish reliable backup routines.",
    highlights: [
      "Full file & database transfer",
      "Pre-migration backup snapshot",
      "DNS cutover planning",
      "Automated backup configuration",
    ],
  },
  {
    icon: FaServer,
    title: "Server Maintenance & Security",
    badge: "Infrastructure Care",
    desc: "Keep hosting environments updated, secure, and performing optimally.",
    highlights: [
      "OS & package security patches",
      "SSH & account access audits",
      "Log monitoring & disk checks",
      "Disaster recovery planning",
    ],
  },
  {
    icon: FaShieldAlt,
    title: "VLAN & Network Segmentation",
    badge: "Network Security",
    desc: "Isolate network segments to enhance security and streamline data traffic.",
    highlights: [
      "VLAN creation & mapping",
      "Guest network isolation",
      "Inter-VLAN firewall rules",
      "Traffic prioritization setup",
    ],
  },
  {
    icon: FaNetworkWired,
    title: "Network Monitoring & Maintenance",
    badge: "Ongoing Health",
    desc: "Maintain constant visibility over network nodes and prevent unexpected failures.",
    highlights: [
      "Device uptime tracking",
      "Bandwidth utilization reports",
      "Firmware update scheduling",
      "Periodic health reviews",
    ],
  },
];

const hardwareTech = [
  { name: "MikroTik", role: "Routing & bandwidth", color: "text-[#FF9112]" },
  { name: "Cisco", role: "Managed switching", color: "text-[#1C9773]" },
  { name: "Ubiquiti UniFi", role: "Wireless access points", color: "text-amber-400" },
  { name: "TP-Link", role: "Networking equipment", color: "text-teal-400" },
  { name: "Ubuntu Linux", role: "Cloud server OS", color: "text-white" },
  { name: "Nginx", role: "Web server", color: "text-[#1C9773]" },
  { name: "Cloudflare", role: "DNS & edge security", color: "text-amber-400" },
  { name: "Hikvision / Dahua", role: "CCTV systems", color: "text-[#FF9112]" },
];

const infraWorkflow = [
  {
    step: "01",
    title: "Consultation & Site Assessment",
    desc: "We discuss your goals, review the premises and existing equipment, identify coverage or security needs, and confirm the scope of work.",
  },
  {
    step: "02",
    title: "Solution Design & Planning",
    desc: "We prepare a practical plan for cabling, Wi-Fi coverage, network devices, CCTV placement, hosting, DNS, or email configuration.",
  },
  {
    step: "03",
    title: "Installation & Configuration",
    desc: "We install or configure the agreed equipment and services, apply suitable security settings, and keep changes documented.",
  },
  {
    step: "04",
    title: "Testing & Handover",
    desc: "We test connectivity, recording, access, website availability, or email delivery as relevant, then explain the setup and maintenance needs.",
  },
];

const faqs = [
  {
    q: "Can you install a wired and wireless network for an office or campus?",
    a: "Yes. We can assess the site and plan a combined wired and wireless network based on the number of users, rooms, devices, building layout, and budget. The final design depends on the site survey and equipment selected.",
  },
  {
    q: "Can I view my CCTV cameras when I am away from the property?",
    a: "Remote viewing is possible with compatible IP cameras or DVR/NVR systems and a suitable internet connection. We can configure authorized mobile or desktop access and recommend secure settings for your system.",
  },
  {
    q: "Can you connect my domain, website, and business email?",
    a: "Yes. We can help configure domain DNS records for your website and email provider, set up supported business email accounts, and configure common email authentication records such as SPF, DKIM, and DMARC where supported.",
  },
  {
    q: "Can you migrate my website without losing its data?",
    a: "We begin by creating or verifying a backup, then transfer the required website files and databases, test the destination, and plan the DNS change. No migration is completely risk-free, so a verified backup and an agreed maintenance window are important.",
  },
  {
    q: "Do you provide maintenance after installation?",
    a: "Maintenance options can be discussed according to the project. They may include scheduled checks, configuration backups, updates, troubleshooting, and guidance for network, hosting, or CCTV equipment.",
  },
];

export default function NetworkingHosting() {
  const { openQuoteModal } = useQuoteModal();
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-[#070B16] pt-24 text-white selection:bg-[#1C9773] selection:text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10 pb-20 pt-12">
        <div className="pointer-events-none absolute inset-0">
          <ParticleBackground />
        </div>
        <div className="pointer-events-none absolute left-1/2 top-1/4 h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#1C9773]/20 via-[#FF9112]/15 to-transparent blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="group mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-teal-400 sm:text-sm"
          >
            <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
            <span>All Services</span>
          </Link>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1C9773]/30 bg-[#1C9773]/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-teal-400" />
              Networking, Hosting & CCTV
            </div>

            <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Reliable Connectivity, Secure Surveillance &{" "}
              <span className="bg-gradient-to-r from-[#1C9773] via-[#22B58A] to-[#FF9112] bg-clip-text text-transparent">
                Online Infrastructure
              </span>
            </h1>

            <p className="text-base font-normal leading-relaxed text-slate-300 sm:text-lg">
              Reliable connectivity, secure surveillance and online infrastructure for businesses and institutions. From wired LANs and Wi-Fi optimization to CCTV surveillance and cloud hosting, we secure your digital foundation.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => openQuoteModal("Networking, Hosting & CCTV", "Networking & Hosting")}
                className="cursor-pointer rounded-xl bg-gradient-to-r from-[#1C9773] to-[#15795C] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1C9773]/25 transition-all hover:scale-[1.02] hover:shadow-[#1C9773]/40"
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
              ["14 Services", "Networking to online infrastructure"],
              ["Wired + Wi-Fi", "Connectivity for different environments"],
              ["CCTV Systems", "Recording and remote access setup"],
              ["End-to-End", "Planning, installation, and handover"],
            ].map(([value, label]) => (
              <div key={value} className="rounded-2xl border border-white/5 bg-[#0D1424]/60 p-4">
                <div className="text-xl font-black text-teal-400 sm:text-2xl">{value}</div>
                <div className="mt-1 text-xs text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl space-y-3 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1C9773]">
              Our Capabilities
            </span>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Networking, Hosting & CCTV Solutions
            </h2>
            <p className="text-sm text-slate-400 sm:text-base">
              Practical infrastructure services for businesses, homes, offices,
              educational institutions, and growing organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {infraCapabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <TiltCard
                  key={item.title}
                  className={`flex flex-col justify-between rounded-3xl border ${
                    index === 0
                      ? "border-[#1C9773]/50 shadow-lg shadow-[#1C9773]/5"
                      : "border-white/10"
                  } bg-[#0D1424]/80 p-7 transition-all hover:border-[#1C9773]/40`}
                >
                  <div>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#070B16] text-xl text-[#1C9773] shadow-lg">
                      <Icon />
                    </div>

                    <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-teal-400">
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
                          <FaCheckCircle className="shrink-0 text-[11px] text-[#1C9773]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => openQuoteModal(item.title, "Networking & Hosting")}
                      className="inline-flex items-center gap-2 text-xs font-bold text-teal-400 transition hover:text-teal-300 cursor-pointer"
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

      {/* Technology Stack */}
      <section className="relative border-y border-white/10 bg-[#0B1120]/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-xl text-center">
            <h3 className="text-xl font-black text-white sm:text-2xl">
              Technologies & Equipment
            </h3>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">
              Tools and platforms selected to match each project's needs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {hardwareTech.map((tech) => (
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
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF9112]">
              How We Work
            </span>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              From Assessment to Handover
            </h2>
            <p className="text-sm text-slate-400 sm:text-base">
              A clear process helps make installations easier to maintain and support.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {infraWorkflow.map((item) => (
              <div
                key={item.step}
                className="relative rounded-3xl border border-white/10 bg-[#0D1424]/60 p-6 transition-all hover:border-[#1C9773]/30"
              >
                <div className="mb-4 text-3xl font-black text-teal-400/40">{item.step}</div>
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
            <h3 className="text-2xl font-black text-white sm:text-3xl">
              Frequently Asked Questions
            </h3>
            <p className="mt-2 text-xs text-slate-400 sm:text-sm">
              Answers about networking, CCTV, hosting, domains, and maintenance.
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
                    className="flex w-full cursor-pointer items-center justify-between p-5 text-left text-sm font-bold text-white transition hover:text-teal-400 sm:text-base"
                  >
                    <span>{faq.q}</span>
                    <FaChevronDown
                      className={`ml-4 shrink-0 text-xs text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-teal-400" : ""
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
              <h3 className="text-2xl font-black text-white sm:text-4xl">
                Need a More Reliable Digital Infrastructure?
              </h3>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                Tell us about your network, CCTV, hosting, domain, or business email
                requirements. We will help identify a practical next step for your project.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => openQuoteModal("Networking, Hosting & CCTV", "Networking & Hosting")}
                  className="cursor-pointer rounded-xl bg-gradient-to-r from-[#1C9773] to-[#15795C] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1C9773]/25 transition-all hover:shadow-[#1C9773]/40"
                >
                  Let's Discuss This Service
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