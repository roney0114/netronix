import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaFilter,
  FaSearch,
  FaTimes,
  FaCheckCircle,
  FaRocket,
  FaCode,
  FaLaptopCode,
  FaNetworkWired,
  FaPaintBrush,
  FaServer,
  FaEye,
  FaLayerGroup,
  FaShieldAlt,
  FaArrowRight,
  FaChevronRight,
} from "react-icons/fa";
import website1 from "../assets/portfolio/website1.png";
import website2 from "../assets/portfolio/website2.png";
import website3 from "../assets/portfolio/website3.png";
import ParticleBackground from "../components/ui/ParticleBackground";
import TiltCard from "../components/ui/TiltCard";
import { useQuoteModal } from "../context/QuoteContext";

const categories = [
  { id: "all", label: "All Projects", icon: FaLayerGroup },
  { id: "web", label: "Web Applications", icon: FaCode },
  { id: "software", label: "Software & ERP", icon: FaLaptopCode },
  { id: "networking", label: "Networking & Security", icon: FaNetworkWired },
  { id: "design", label: "Branding & UI/UX", icon: FaPaintBrush },
];

const techPills = [
  "All",
  "React",
  "Node.js",
  "Next.js",
  "Tailwind CSS",
  "MikroTik",
  "PostgreSQL",
  "Figma",
  "Vite",
  "Cloudflare",
];

const portalProjects = [
  {
    id: 1,
    title: "Sandesh Bhattarai Portfolio",
    category: "Web Applications",
    categoryKey: "web",
    badge: "Featured Showcase",
    image: website2,
    client: "Lead Full Stack Engineer",
    description: "Interactive portfolio & full-stack web engineering showcase built with React, Tailwind CSS, and custom fluid micro-animations.",
    link: "https://bsandesh.com.np/",
    tags: ["React", "Tailwind CSS", "Vite", "Node.js"],
    highlight: "100% PageSpeed & Modern UI",
    metrics: "Sub-500ms Load • 99+ Lighthouse Score",
    challenge: "Engineered to deliver an ultra-fast developer portfolio with rich fluid micro-animations without compromising Google Lighthouse performance or mobile fluidity.",
    solution: "Developed using Vite and Tailwind CSS with custom GPU-accelerated Framer Motion interactions, structured component architecture, and responsive layouts.",
    deliverables: ["Dynamic Portfolio Architecture", "Interactive Work Demos", "Fluid Micro-Interactions", "Mobile-First Design System"],
  },
  {
    id: 2,
    title: "Pratik Mahato Portfolio",
    category: "Branding & UI/UX",
    categoryKey: "design",
    badge: "Featured Showcase",
    image: website1,
    client: "Creative UI/UX Designer",
    description: "Creative design & web development portfolio featuring Figma design systems, responsive web apps, and visual branding assets.",
    link: "https://pratikmahato.com.np/",
    tags: ["React", "Figma", "Tailwind CSS", "Vite"],
    highlight: "Award-Winning UI/UX System",
    metrics: "Figma Component System • High-Res Graphics",
    challenge: "Designing a digital showcase that highlights large Figma UI kits and multi-brand identity collateral with high visual fidelity and fast rendering.",
    solution: "Created an intuitive, dark-mode design system paired with interactive mockups and smooth transitions that emphasize visual typography and layout aesthetics.",
    deliverables: ["Figma UI Component Kit", "Interactive Case Study Walkthroughs", "Responsive Web App", "Visual Brand Identity"],
  },
  {
    id: 3,
    title: "Acharya Foods",
    category: "Foods and Manufacturing",
    categoryKey: "foods",
    badge: "Business Website",
    image: website3,
    client: "Acharya Foods",
    description: "Modern food brand website showcasing traditional Nepali pickles, spices, flours, snacks, and dealership opportunities across Nepal.",
    link: "https://acharyafoods.com.np/",
    tags: ["React", "Node.js", "Responsive UI", "CMS"],
    highlight: "Traditional Nepali Foods Brand",
    metrics: "Product • Dealership • Customer Inquries",
    challenge: "Digitizing a traditional family food business while presenting its products, story, and dealership opportunities in a professional and accessible way.",
    solution: "Built a responsive product showcase platform with organized product categories, brand storytelling, dealership applications, contact management, and modern UI.",
    deliverables: ["Product Showcase", "Category Management", "Dealership Application", "Contact Management"],
  },
  {
    id: 4,
    title: "A&B Hospital Enterprise Network",
    category: "Networking & Security",
    categoryKey: "networking",
    badge: "Enterprise Infrastructure",
    image: website1,
    client: "A&B Hospital & Medical Center",
    description: "Multi-floor hospital enterprise network setup with VLAN isolation, MikroTik RouterOS bandwidth management, and secure medical telemetry.",
    link: "https://netronixinnovation.com",
    tags: ["MikroTik", "VLAN", "Firewall", "Cisco"],
    highlight: "Zero-Downtime Multi-WAN",
    metrics: "Dual-WAN Failover • 100% Isolated VLANs",
    challenge: "Connection drops between the diagnostic labs and admission desks caused workflow disruptions, while public WiFi usage degraded vital telemetry transmission.",
    solution: "Installed MikroTik RouterOS with automated multi-ISP load balancing, isolated VLAN subnets for medical staff and guests, and strict QoS rules prioritizing patient record transfers.",
    deliverables: ["MikroTik RouterOS Setup", "VLAN Network Segmentation", "Failover WAN Configuration", "Staff & Guest WiFi Captive Portal"],
  },
  {
    id: 5,
    title: "Corporate Brand Identity & UI Kit",
    category: "Branding & UI/UX",
    categoryKey: "design",
    badge: "Brand Identity",
    image: website2,
    client: "Corporate Enterprise Client",
    description: "Complete visual branding package including custom corporate logo, color theory guidelines, typography hierarchy, and Figma UI kit.",
    link: "https://netronixinnovation.com",
    tags: ["Figma", "Illustrator", "Brand Guide", "Tailwind CSS"],
    highlight: "Complete Brand Ecosystem",
    metrics: "40+ Page Brand Book • Multi-Format Assets",
    challenge: "Client possessed an outdated visual logo and inconsistent graphic styling across their web platform, physical business cards, and marketing collaterals.",
    solution: "Constructed an integrated brand identity with scalable vector iconography, corporate color palette, stationery templates, and a full Figma component design system.",
    deliverables: ["Vector Master Logo Suite", "Corporate Identity Guidelines", "Figma UI Kit & Web Stylesheet", "Social Media & Stationery Templates"],
  },
  {
    id: 6,
    title: "Footstep Nepal Educational Portal",
    category: "Web Applications",
    categoryKey: "web",
    badge: "Portal Platform",
    image: website1,
    client: "Footstep Educational Consultancy",
    description: "Comprehensive web platform for educational consultation, student university applications, and overseas milestone tracking in Nepal.",
    link: "https://netronixinnovation.com",
    tags: ["React", "Tailwind CSS", "Node.js", "Vite"],
    highlight: "70% Faster File Processing",
    metrics: "1,200+ Students Processed • Cloud Document Vault",
    challenge: "Consultants spent excessive hours manually following up on student documentation and visa updates across multiple messaging channels.",
    solution: "Designed a centralized client application portal where students securely upload transcripts, track counselor reviews in real time, and schedule appointments.",
    deliverables: ["Student Document Management", "Counseling Appointment Engine", "Interactive University Finder", "Automated Status Alerts"],
  },
  {
    id: 7,
    title: "Bagaincha Resort Booking & Cloud VPS",
    category: "Web Applications",
    categoryKey: "web",
    badge: "Hospitality & Cloud",
    image: website2,
    client: "Bagaincha Luxury Resort",
    description: "Modern resort reservation website featuring real-time room availability, online booking, and high-speed cloud VPS hosting deployment.",
    link: "https://netronixinnovation.com",
    tags: ["Next.js", "Tailwind CSS", "Cloud VPS", "Nginx"],
    highlight: "Direct Commission-Free Bookings",
    metrics: "35% Booking Increase • Sub-1s Page Load",
    challenge: "High commission fees to third-party travel platforms and slow page load times on standard shared web hosting was cutting into direct revenue.",
    solution: "Built a responsive reservation web application deployed on an optimized Linux cloud VPS with Nginx micro-caching, SSL hardening, and automated daily backups.",
    deliverables: ["Direct Room Reservation System", "Linux Cloud VPS Deployment", "Automated SSL & Security Hardening", "Mobile-Optimized Experience"],
  },
  {
    id: 8,
    title: "SaaS Analytics & Client Dashboard",
    category: "Software & ERP",
    categoryKey: "software",
    badge: "Analytics Platform",
    image: website1,
    client: "Enterprise Marketing & Analytics Agency",
    description: "Multi-tenant SaaS dashboard for business analytics, real-time KPI telemetry, client portal management, and automated PDF reports.",
    link: "https://netronixinnovation.com",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    highlight: "Real-Time Telemetry & Reports",
    metrics: "Role-Based Access • Automated PDF Exports",
    challenge: "Aggregating multi-source analytics into a single dashboard while allowing tiered access permissions for different agency clients and internal managers.",
    solution: "Constructed an authenticated multi-tenant dashboard with role-based JWT authentication, interactive telemetry charts, and automated monthly performance reports.",
    deliverables: ["Multi-Tenant Role Architecture", "Real-Time Interactive Data Visualizations", "Automated PDF Report Generator", "REST API Data Feeds"],
  },
  {
    id: 9,
    title: "Enterprise MikroTik Fiber & VPN Infrastructure",
    category: "Networking & Security",
    categoryKey: "networking",
    badge: "Network Architecture",
    image: website2,
    client: "Multi-Branch Commercial Enterprise",
    description: "High-speed multi-WAN load balancing, encrypted WireGuard VPN tunnels, perimeter firewall rules, and corporate WiFi setup.",
    link: "https://netronixinnovation.com",
    tags: ["MikroTik", "WireGuard", "VPN", "Firewall"],
    highlight: "Sub-15ms Branch Sync",
    metrics: "256-Bit Encrypted Tunnels • 99.9% Uptime",
    challenge: "Securely linking multiple remote branch locations to the central headquarters database with minimum latency and high security against external attacks.",
    solution: "Engineered site-to-site encrypted WireGuard VPN connections across MikroTik hardware, VLAN network segmentation, and priority queuing for ERP transactions.",
    deliverables: ["Site-to-Site Encrypted VPN", "MikroTik RouterOS Topology", "Layer-7 Firewall Protection", "Automated Failover ISP Setup"],
  },
];

const portalStats = [
  { value: "35+", label: "Delivered Solutions" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "5.0 ★", label: "Average Rating" },
  { value: "6+", label: "Tech Disciplines" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedTech, setSelectedTech] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const { openQuoteModal } = useQuoteModal();

  // Filter projects by category, tech stack, and search query
  const filteredProjects = useMemo(() => {
    return portalProjects.filter((project) => {
      const matchCategory =
        activeCategory === "all" || project.categoryKey === activeCategory;

      const matchTech =
        selectedTech === "All" ||
        project.tags.some(
          (t) => t.toLowerCase() === selectedTech.toLowerCase()
        );

      const query = searchQuery.trim().toLowerCase();
      const matchSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query) ||
        project.tags.some((t) => t.toLowerCase().includes(query));

      return matchCategory && matchTech && matchSearch;
    });
  }, [activeCategory, selectedTech, searchQuery]);

  const getCategoryCount = (catId) => {
    if (catId === "all") return portalProjects.length;
    return portalProjects.filter((p) => p.categoryKey === catId).length;
  };

  return (
    <div className="pt-24 bg-[#070B16] text-white min-h-screen relative overflow-hidden">
      <ParticleBackground />

      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/3 w-[600px] h-[600px] bg-[#1C9773]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[500px] h-[500px] bg-[#FF9112]/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Hero Header Section */}
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
              <FaLayerGroup className="text-xs" />
              Netronix Portfolio & Case Studies Portal
            </span>

            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Explore Our <span className="text-[#FF9112]">Proven Work</span> & Case Studies
            </h1>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Explore how we architect high-performance web systems, custom software platforms, high-speed MikroTik network topologies, and digital brand identities that drive measurable business outcomes.
            </p>

            {/* Live Search Bar */}
            <div className="pt-4 max-w-xl mx-auto">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
                <input
                  type="text"
                  placeholder="Search projects by name, keyword, or tech (e.g. React, MikroTik, Figma)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-[#0D1424]/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#1C9773] text-sm shadow-xl backdrop-blur-xl transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs cursor-pointer p-1"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {portalStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#0D1424]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-center shadow-lg hover:border-[#1C9773]/40 transition"
              >
                <div className="text-2xl md:text-3xl font-black text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Filter & Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">

        {/* Category Filter Tabs */}
        <div className="space-y-6 mb-10 pb-8 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#1C9773]">
              <FaFilter className="text-xs" />
              <span>Filter by Discipline</span>
            </div>
            <span className="text-xs text-slate-400 font-semibold">
              Showing {filteredProjects.length} of {portalProjects.length} Works
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              const count = getCategoryCount(cat.id);
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 cursor-pointer flex items-center gap-2.5 shadow-md ${isActive
                    ? "bg-gradient-to-r from-[#FF9112] to-[#E57D06] text-white shadow-lg shadow-[#FF9112]/25 scale-[1.02]"
                    : "bg-[#0D1424] border border-white/10 text-slate-400 hover:text-white hover:border-[#1C9773]/40"
                    }`}
                >
                  <Icon className="text-sm" />
                  <span>{cat.label}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold ${isActive ? "bg-white/20 text-white" : "bg-white/5 text-slate-400"
                      }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-500 font-semibold mr-1">
              Tech Stack:
            </span>
            {techPills.map((tech) => {
              const isSelected = selectedTech === tech;
              return (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${isSelected
                    ? "bg-[#1C9773] text-white shadow-md shadow-[#1C9773]/25"
                    : "bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10 border border-white/5"
                    }`}
                >
                  {tech}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center space-y-4 bg-[#0D1424]/60 rounded-3xl border border-white/10 p-12">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 text-2xl">
              <FaSearch />
            </div>
            <h3 className="text-xl font-bold text-white">No projects found</h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto">
              No case studies matched your current category or search criteria. Try resetting your search or selecting "All Projects".
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSelectedTech("All");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 rounded-xl bg-[#1C9773] hover:bg-[#15795C] text-white font-bold text-xs transition shadow-md cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const isExternal = project.link && project.link.startsWith("http");
              return (
                <TiltCard key={project.id} className="h-full">
                  <div className="group bg-[#0D1424]/90 rounded-3xl overflow-hidden border border-white/10 hover:border-[#FF9112]/50 transition-all duration-300 shadow-2xl backdrop-blur-xl flex flex-col justify-between h-full">
                    <div>
                      {/* Project Image Box */}
                      <div className="relative overflow-hidden h-60 bg-[#070B16]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="px-3 py-1 rounded-full bg-[#070B16]/80 backdrop-blur-md text-[#1C9773] border border-[#1C9773]/30 text-xs font-bold uppercase tracking-wider">
                            {project.category}
                          </span>
                          {project.badge && (
                            <span className="px-3 py-1 rounded-full bg-[#FF9112]/90 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                              {project.badge}
                            </span>
                          )}
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-[#070B16]/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-3 p-4">
                          {isExternal && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              className="px-4 py-2.5 bg-gradient-to-r from-[#FF9112] to-[#E57D06] hover:from-[#FFA73E] hover:to-[#FF9112] text-white rounded-xl shadow-lg transition flex items-center gap-2 font-bold text-xs"
                            >
                              <FaExternalLinkAlt /> Live Preview
                            </a>
                          )}
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="px-4 py-2.5 bg-[#0D1424] hover:bg-white/10 text-white border border-white/20 rounded-xl transition flex items-center gap-2 font-bold text-xs cursor-pointer"
                          >
                            <FaEye /> Case Study
                          </button>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-6">
                        <div className="text-xs font-bold text-[#1C9773] uppercase tracking-wider mb-1">
                          {project.client}
                        </div>

                        <h3 className="text-xl font-bold text-white group-hover:text-[#FF9112] transition duration-300">
                          {project.title}
                        </h3>

                        <p className="text-slate-400 text-xs md:text-sm mt-2.5 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Metrics Highlight Pill */}
                        <div className="mt-4 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2 text-xs text-[#1C9773] font-medium">
                          <FaCheckCircle className="text-xs flex-shrink-0" />
                          <span className="truncate">{project.highlight}</span>
                        </div>

                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/10">
                          {project.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 text-[11px] font-medium border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="px-6 pb-6 pt-0">
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-xs font-bold text-slate-300 hover:text-[#1C9773] transition flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>View Case Study</span>
                          <FaChevronRight className="text-[10px]" />
                        </button>

                        {isExternal ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs font-bold text-[#FF9112] hover:text-[#FFA73E] uppercase tracking-wider transition flex items-center gap-1"
                          >
                            Live Demo ↗
                          </a>
                        ) : (
                          <button
                            onClick={() => openQuoteModal(project.title)}
                            className="text-xs font-bold text-[#FF9112] hover:text-[#FFA73E] uppercase tracking-wider transition cursor-pointer"
                          >
                            Request Quote →
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        )}

      </section>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-[#070B16]/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#0D1424] border border-white/10 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative space-y-6 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#1C9773]/10 text-[#1C9773] border border-[#1C9773]/30 text-xs font-bold uppercase tracking-wider mb-2">
                  {selectedProject.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  {selectedProject.title}
                </h2>
                <p className="text-xs text-slate-400 mt-1 font-semibold">
                  Client / Industry: {selectedProject.client}
                </p>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
              >
                <FaTimes />
              </button>
            </div>

            {/* Preview Banner */}
            <div className="relative rounded-2xl overflow-hidden h-64 bg-[#070B16]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1424] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-extrabold text-[#FF9112] px-3 py-1 rounded-lg bg-[#070B16]/90 border border-white/10 shadow">
                  {selectedProject.metrics}
                </span>
                {selectedProject.link && selectedProject.link.startsWith("http") && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#FF9112] hover:bg-[#E57D06] text-white font-bold text-xs transition flex items-center gap-1.5 shadow"
                  >
                    <span>Visit Live Website</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                )}
              </div>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#070B16]/80 rounded-2xl p-5 border border-white/5 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FF9112] flex items-center gap-1.5">
                  <FaRocket className="text-xs" />
                  <span>The Challenge</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.challenge}
                </p>
              </div>

              <div className="bg-[#070B16]/80 rounded-2xl p-5 border border-white/5 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#1C9773] flex items-center gap-1.5">
                  <FaCheckCircle className="text-xs" />
                  <span>Netronix Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            {/* Key Deliverables */}
            <div className="space-y-3">
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#1C9773]">
                Key Deliverables & Milestones
              </div>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {selectedProject.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-200"
                  >
                    <FaCheckCircle className="text-[#1C9773] text-xs flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Used */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="text-xs font-bold text-slate-400">
                Technologies & Tools Deployed:
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-bold text-xs transition cursor-pointer"
              >
                Close Case Study
              </button>

              <button
                onClick={() => {
                  setSelectedProject(null);
                  openQuoteModal(selectedProject.title);
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FF9112] to-[#E57D06] text-white font-bold text-xs transition shadow-lg shadow-[#FF9112]/25 cursor-pointer"
              >
                Request Similar Solution For Your Project
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 pb-24 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#0D1424] via-[#0A1020] to-[#0D1424] border border-white/10 p-8 md:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 space-y-5 max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1C9773]/10 text-[#1C9773] border border-[#1C9773]/30 uppercase text-xs font-bold tracking-widest">
              Let's Engineer Your Vision
            </span>

            <h3 className="text-2xl md:text-4xl font-black text-white">
              Have a Project in Mind? Let's Build Something Exceptional
            </h3>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Whether you require an enterprise web application, custom software workflow, hospital network infrastructure, or creative brand identity, our engineering team is ready to deliver.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openQuoteModal()}
                className="px-8 py-3.5 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-[#FF9112] to-[#E57D06] shadow-lg shadow-[#FF9112]/30 hover:scale-[1.03] transition-all cursor-pointer"
              >
                Request Free Technical Estimate
              </button>
              <Link
                to="/services"
                className="px-8 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-[#0D1424] border border-white/10 hover:border-[#1C9773] hover:text-white transition-all inline-flex items-center gap-2"
              >
                <span>Explore Services Portal</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

