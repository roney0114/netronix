import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaLock,
  FaKey,
  FaSignOutAlt,
  FaEnvelope,
  FaFileInvoiceDollar,
  FaCheckCircle,
  FaTrashAlt,
  FaEdit,
  FaPlus,
  FaSync,
  FaExclamationCircle,
  FaArrowLeft,
  FaServer,
  FaFilter,
  FaSearch,
  FaClock,
  FaPhoneAlt,
  FaUserCheck,
  FaLayerGroup,
  FaShieldAlt,
  FaTimes,
  FaBriefcase,
  FaUsers,
  FaBuilding,
  FaSave,
  FaGlobe,
  FaQuoteLeft,
  FaQuestionCircle,
  FaStar,
  FaThList,
  FaLink,
  FaCode,
  FaDatabase,
  FaFolder,
  FaBars,
  FaChevronRight,
  FaExternalLinkAlt,
  FaCube,
  FaCogs,
  FaSlidersH,
  FaLaptopCode,
} from "react-icons/fa";
import { useSiteData } from "../../context/SiteContext";

const componentMeta = {
  overview: {
    title: "System Overview & Data Telemetry",
    category: "Backend System Control",
    type: "backend",
    file: "server/src/index.js",
    api: "GET /api/overview",
    description: "Live summary of message inquiries, quote requests, active services, and catalog totals.",
    previewLink: "/",
  },
  hero_company: {
    title: "Hero Banner & Company Branding",
    category: "Frontend UI Component",
    type: "frontend",
    file: "src/pages/HomePage.jsx",
    api: "GET / PUT /api/company",
    description: "Main website hero banner, tagline, core contact metrics, and call-to-action buttons.",
    previewLink: "/",
  },
  about_page: {
    title: "About Page & Corporate Story",
    category: "Frontend UI Component",
    type: "frontend",
    file: "src/pages/AboutPage.jsx",
    api: "GET / PUT /api/about",
    description: "Company background, vision, mission statement, core values, and achievement numbers.",
    previewLink: "/about",
  },
  why_us: {
    title: "Why Choose Us Highlights",
    category: "Frontend UI Component",
    type: "frontend",
    file: "src/pages/HomePage.jsx",
    api: "GET / PUT /api/why-us",
    description: "Key advantages, client guarantees, technical strengths, and feature highlights.",
    previewLink: "/",
  },
  services: {
    title: "Services Catalog & Offerings",
    category: "Frontend UI Component",
    type: "frontend",
    file: "src/pages/ServicesPage.jsx",
    api: "GET / POST / PUT / DELETE /api/services",
    description: "Full service portfolio management: icons, full descriptions, pricing, and active status.",
    previewLink: "/services",
  },
  portfolio: {
    title: "Portfolio Projects Showcase",
    category: "Frontend UI Component",
    type: "frontend",
    file: "src/pages/PortfolioPage.jsx",
    api: "GET / POST / PUT / DELETE /api/portfolio",
    description: "Case studies, live project URLs, client names, category filters, and tech stack tags.",
    previewLink: "/portfolio",
  },
  team: {
    title: "Team Members & Leadership",
    category: "Frontend UI Component",
    type: "frontend",
    file: "src/pages/TeamPage.jsx",
    api: "GET / POST / PUT / DELETE /api/team",
    description: "Staff profiles, job titles, short bios, social links (GitHub/LinkedIn), and display ordering.",
    previewLink: "/team",
  },
  testimonials: {
    title: "Client Testimonials & Reviews",
    category: "Frontend UI Component",
    type: "frontend",
    file: "src/pages/HomePage.jsx",
    api: "GET / POST / PUT / DELETE /api/testimonials",
    description: "Client feedback quotes, star ratings, roles, companies, and home page feature flags.",
    previewLink: "/",
  },
  faqs: {
    title: "Frequently Asked Questions",
    category: "Frontend UI Component",
    type: "frontend",
    file: "src/components/sections/FaqSection.jsx",
    api: "GET / POST / PUT / DELETE /api/faqs",
    description: "Manage categorized QA items displayed across service pages and support section.",
    previewLink: "/about",
  },
  contacts: {
    title: "Contact Form Inquiries",
    category: "Backend Data Submissions",
    type: "backend",
    file: "server/src/routes/contactRoutes.js",
    api: "GET / PUT / DELETE /api/contacts",
    description: "Incoming customer messages, contact info, subject details, and message status updates.",
    previewLink: "/",
  },
  quotes: {
    title: "Custom Project Quote Requests",
    category: "Backend Data Submissions",
    type: "backend",
    file: "server/src/routes/quoteRoutes.js",
    api: "GET / PUT / DELETE /api/quotes",
    description: "Formal estimate requests submitted by potential clients from service pages.",
    previewLink: "/",
  },
  security: {
    title: "Access Control & Security PIN",
    category: "Backend Security",
    type: "backend",
    file: "server/src/routes/adminRoutes.js",
    api: "POST /api/admin/change-pin",
    description: "Update the master security PIN passkey required to access this portal.",
    previewLink: null,
  },
};

export default function AdminDashboard() {
  const { refreshData } = useSiteData();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [authError, setAuthError] = useState("");
  const [verifying, setVerifying] = useState(false);

  // Active Tab & Mobile Drawer Toggle
  const [activeTab, setActiveTab] = useState("overview");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Data Loading & State
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const [metrics, setMetrics] = useState({
    totalContacts: 0,
    newContacts: 0,
    totalQuotes: 0,
    pendingQuotes: 0,
    totalServices: 0,
    totalTeamMembers: 0,
    totalPortfolioProjects: 0,
    totalTestimonials: 0,
    totalFaqs: 0,
  });

  // State Collections
  const [companyForm, setCompanyForm] = useState({});
  const [aboutForm, setAboutForm] = useState({});
  const [whyUsForm, setWhyUsForm] = useState({});
  const [services, setServices] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [team, setTeam] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [quotes, setQuotes] = useState([]);

  // Modals & Form Editing States
  const [serviceModal, setServiceModal] = useState({ open: false, editing: null });
  const [serviceForm, setServiceForm] = useState({
    title: "",
    slug: "",
    icon: "FaLaptopCode",
    description: "",
    fullDescription: "",
    features: "",
    pricing: "Custom Quote",
    active: true,
  });

  const [portfolioModal, setPortfolioModal] = useState({ open: false, editing: null });
  const [portfolioForm, setPortfolioForm] = useState({
    title: "",
    category: "Web Development",
    client: "",
    description: "",
    image: "",
    link: "",
    tags: "",
    featured: true,
  });

  const [teamModal, setTeamModal] = useState({ open: false, editing: null });
  const [teamForm, setTeamForm] = useState({
    name: "",
    role: "",
    bio: "",
    image: "",
    github: "",
    linkedin: "",
    order: 1,
  });

  const [testimonialModal, setTestimonialModal] = useState({ open: false, editing: null });
  const [testimonialForm, setTestimonialForm] = useState({
    name: "",
    role: "",
    company: "",
    content: "",
    stars: 5,
    featured: true,
  });

  const [faqModal, setFaqModal] = useState({ open: false, editing: null });
  const [faqForm, setFaqForm] = useState({
    question: "",
    answer: "",
    category: "General",
    order: 1,
  });

  // Security Form State
  const [securityForm, setSecurityForm] = useState({ currentPin: "", newPin: "", confirmPin: "" });
  const [securityStatus, setSecurityStatus] = useState({ success: "", error: "" });

  // Session Check
  useEffect(() => {
    const token = localStorage.getItem("netronix_admin_token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Show toast feedback helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  };

  // Fetch all backend state
  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [siteRes, dashRes, contactsRes, quotesRes] = await Promise.all([
        fetch("/api/site-content"),
        fetch("/api/admin/dashboard"),
        fetch("/api/contacts"),
        fetch("/api/quotes"),
      ]);

      const siteData = await siteRes.json();
      const dashData = await dashRes.json();
      const contactsData = await contactsRes.json();
      const quotesData = await quotesRes.json();

      if (siteData.success && siteData.data) {
        setCompanyForm(siteData.data.company || {});
        setAboutForm(siteData.data.about || {});
        setWhyUsForm(siteData.data.whyUs || {});
        setServices(siteData.data.services || []);
        setPortfolio(siteData.data.portfolio || []);
        setTeam(siteData.data.team || []);
        setTestimonials(siteData.data.testimonials || []);
        setFaqs(siteData.data.faqs || []);
      }

      if (dashData.success && dashData.metrics) {
        setMetrics({
          ...dashData.metrics,
          totalTestimonials: (siteData.data?.testimonials || []).length,
          totalFaqs: (siteData.data?.faqs || []).length,
        });
      }

      if (contactsData.success) setContacts(contactsData.data || []);
      if (quotesData.success) setQuotes(quotesData.data || []);

      // Synchronize global site context for immediate live UI reflection
      refreshData();
    } catch (err) {
      console.error("Failed to load admin data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAllData();
    }
  }, [isAuthenticated]);

  // Login PIN verification
  const handleLogin = async (e) => {
    e.preventDefault();
    setVerifying(true);
    setAuthError("");

    // Instant local check for default PIN or attempt API call
    if (pinInput.trim() === "netronix2026") {
      localStorage.setItem("netronix_admin_token", "netronix_admin_sess_2026");
      setIsAuthenticated(true);
      setVerifying(false);
      return;
    }

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin: pinInput }),
      });

      const data = await res.json();
      if (data.success) {
        localStorage.setItem("netronix_admin_token", data.token);
        setIsAuthenticated(true);
      } else {
        setAuthError(data.error || "Invalid PIN Code. Default PIN is netronix2026");
      }
    } catch (err) {
      if (pinInput.trim() === "netronix2026") {
        localStorage.setItem("netronix_admin_token", "netronix_admin_sess_2026");
        setIsAuthenticated(true);
      } else {
        setAuthError("Failed to verify PIN. Default PIN is netronix2026");
      }
    } finally {
      setVerifying(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("netronix_admin_token");
    setIsAuthenticated(false);
    setPinInput("");
  };

  // --- SAVE HANDLERS ---
  const saveCompanySettings = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/company-info", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(companyForm),
      });
      const data = await res.json();
      if (data.success) {
        showToast("✓ Hero & Company details updated successfully!");
        refreshData();
      }
    } catch (e) {
      showToast("❌ Error saving company settings");
    } finally {
      setSaving(false);
    }
  };

  const saveAboutSettings = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/site-content/about", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(aboutForm),
      });
      const data = await res.json();
      if (data.success) {
        showToast("✓ About section content saved!");
        refreshData();
      }
    } catch (e) {
      showToast("❌ Error saving About page content");
    } finally {
      setSaving(false);
    }
  };

  const saveWhyUsSettings = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/site-content/why-us", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(whyUsForm),
      });
      const data = await res.json();
      if (data.success) {
        showToast("✓ Why Choose Us content saved!");
        refreshData();
      }
    } catch (e) {
      showToast("❌ Error saving Why Choose Us content");
    } finally {
      setSaving(false);
    }
  };

  // --- SERVICE CRUD ---
  const saveService = async () => {
    const url = serviceModal.editing ? `/api/services/${serviceModal.editing.id}` : "/api/services";
    const method = serviceModal.editing ? "PUT" : "POST";
    const payload = {
      ...serviceForm,
      items: typeof serviceForm.features === "string" ? serviceForm.features.split("\n").filter(Boolean) : serviceForm.features,
    };

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        showToast(`✓ Service ${serviceModal.editing ? "updated" : "created"}!`);
        setServiceModal({ open: false, editing: null });
        fetchAllData();
      }
    } catch (e) {
      showToast("❌ Failed to save service");
    }
  };

  const deleteService = async (id) => {
    if (!window.confirm("Are you sure you want to delete this service?")) return;
    try {
      const res = await fetch(`/api/services/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        showToast("✓ Service deleted!");
        fetchAllData();
      }
    } catch (e) {
      showToast("❌ Failed to delete service");
    }
  };

  // --- PORTFOLIO CRUD ---
  const savePortfolio = async () => {
    const url = portfolioModal.editing ? `/api/portfolio/${portfolioModal.editing.id}` : "/api/portfolio";
    const method = portfolioModal.editing ? "PUT" : "POST";
    const payload = {
      ...portfolioForm,
      tags: typeof portfolioForm.tags === "string" ? portfolioForm.tags.split(",").map((t) => t.trim()).filter(Boolean) : portfolioForm.tags,
    };

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        showToast(`✓ Portfolio project ${portfolioModal.editing ? "updated" : "added"}!`);
        setPortfolioModal({ open: false, editing: null });
        fetchAllData();
      }
    } catch (e) {
      showToast("❌ Failed to save project");
    }
  };

  const deletePortfolio = async (id) => {
    if (!window.confirm("Delete this portfolio project?")) return;
    try {
      const res = await fetch(`/api/portfolio/${id}`, { method: "DELETE" });
      if ((await res.json()).success) {
        showToast("✓ Portfolio project deleted!");
        fetchAllData();
      }
    } catch (e) {
      showToast("❌ Failed to delete project");
    }
  };

  // --- TEAM CRUD ---
  const saveTeam = async () => {
    const url = teamModal.editing ? `/api/team/${teamModal.editing.id}` : "/api/team";
    const method = teamModal.editing ? "PUT" : "POST";
    const payload = {
      ...teamForm,
      socials: { github: teamForm.github, linkedin: teamForm.linkedin },
    };

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if ((await res.json()).success) {
        showToast(`✓ Team member ${teamModal.editing ? "updated" : "added"}!`);
        setTeamModal({ open: false, editing: null });
        fetchAllData();
      }
    } catch (e) {
      showToast("❌ Failed to save team member");
    }
  };

  const deleteTeam = async (id) => {
    if (!window.confirm("Delete team member?")) return;
    try {
      const res = await fetch(`/api/team/${id}`, { method: "DELETE" });
      if ((await res.json()).success) {
        showToast("✓ Team member deleted!");
        fetchAllData();
      }
    } catch (e) {
      showToast("❌ Failed to delete team member");
    }
  };

  // --- TESTIMONIAL CRUD ---
  const saveTestimonial = async () => {
    const url = testimonialModal.editing ? `/api/testimonials/${testimonialModal.editing.id}` : "/api/testimonials";
    const method = testimonialModal.editing ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(testimonialForm),
      });
      if ((await res.json()).success) {
        showToast(`✓ Testimonial ${testimonialModal.editing ? "updated" : "added"}!`);
        setTestimonialModal({ open: false, editing: null });
        fetchAllData();
      }
    } catch (e) {
      showToast("❌ Failed to save testimonial");
    }
  };

  const deleteTestimonial = async (id) => {
    if (!window.confirm("Delete this review?")) return;
    try {
      const res = await fetch(`/api/testimonials/${id}`, { method: "DELETE" });
      if ((await res.json()).success) {
        showToast("✓ Review deleted!");
        fetchAllData();
      }
    } catch (e) {
      showToast("❌ Failed to delete review");
    }
  };

  // --- FAQ CRUD ---
  const saveFaq = async () => {
    const url = faqModal.editing ? `/api/faqs/${faqModal.editing.id}` : "/api/faqs";
    const method = faqModal.editing ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(faqForm),
      });
      if ((await res.json()).success) {
        showToast(`✓ FAQ ${faqModal.editing ? "updated" : "added"}!`);
        setFaqModal({ open: false, editing: null });
        fetchAllData();
      }
    } catch (e) {
      showToast("❌ Failed to save FAQ");
    }
  };

  const deleteFaq = async (id) => {
    if (!window.confirm("Delete FAQ?")) return;
    try {
      const res = await fetch(`/api/faqs/${id}`, { method: "DELETE" });
      if ((await res.json()).success) {
        showToast("✓ FAQ deleted!");
        fetchAllData();
      }
    } catch (e) {
      showToast("❌ Failed to delete FAQ");
    }
  };

  // --- CONTACTS & QUOTES ACTIONS ---
  const updateContactStatus = async (id, status) => {
    try {
      const res = await fetch(`/api/contacts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if ((await res.json()).success) {
        showToast("✓ Contact status updated!");
        fetchAllData();
      }
    } catch (e) {
      showToast("❌ Failed to update contact");
    }
  };

  const deleteContact = async (id) => {
    if (!window.confirm("Delete this contact message?")) return;
    try {
      const res = await fetch(`/api/contacts/${id}`, { method: "DELETE" });
      if ((await res.json()).success) {
        showToast("✓ Contact message deleted!");
        fetchAllData();
      }
    } catch (e) {
      showToast("❌ Failed to delete contact");
    }
  };

  const updateQuoteStatus = async (id, status) => {
    try {
      const res = await fetch(`/api/quotes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if ((await res.json()).success) {
        showToast("✓ Quote status updated!");
        fetchAllData();
      }
    } catch (e) {
      showToast("❌ Failed to update quote");
    }
  };

  const deleteQuote = async (id) => {
    if (!window.confirm("Delete this quote request?")) return;
    try {
      const res = await fetch(`/api/quotes/${id}`, { method: "DELETE" });
      if ((await res.json()).success) {
        showToast("✓ Quote request deleted!");
        fetchAllData();
      }
    } catch (e) {
      showToast("❌ Failed to delete quote");
    }
  };

  // PIN Change
  const handleChangePin = async (e) => {
    e.preventDefault();
    setSecurityStatus({ success: "", error: "" });

    if (securityForm.newPin !== securityForm.confirmPin) {
      setSecurityStatus({ success: "", error: "New PIN and Confirmation PIN do not match." });
      return;
    }

    try {
      const res = await fetch("/api/admin/change-pin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPin: securityForm.currentPin, newPin: securityForm.newPin }),
      });
      const data = await res.json();
      if (data.success) {
        setSecurityStatus({ success: "PIN updated successfully!", error: "" });
        setSecurityForm({ currentPin: "", newPin: "", confirmPin: "" });
      } else {
        setSecurityStatus({ success: "", error: data.error || "Failed to update PIN." });
      }
    } catch (e) {
      setSecurityStatus({ success: "", error: "Network error updating PIN." });
    }
  };

  // --- UNAUTHENTICATED PIN LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#070B16] text-white flex items-center justify-center px-6 py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#1C9773]/20 via-[#FF9112]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
          <div className="text-center space-y-3 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#1C9773] to-[#FF9112] flex items-center justify-center mx-auto shadow-lg shadow-teal-500/20">
              <FaLock className="text-2xl text-slate-950" />
            </div>
            <h1 className="text-2xl font-extrabold text-white">Netronix Admin CMS</h1>
            <p className="text-slate-400 text-xs">Enter your secure Security PIN to access full site management</p>
          </div>

          {authError && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
              <FaExclamationCircle className="flex-shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Admin Passkey / PIN Code
              </label>
              <div className="relative">
                <FaKey className="absolute left-4 top-3.5 text-slate-500 text-sm" />
                <input
                  type="password"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Enter PIN (Default: netronix2026)"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-[#1C9773] text-sm transition"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={verifying}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#1C9773] to-[#15795C] hover:from-[#15795C] hover:to-[#1C9773] text-white font-bold text-sm shadow-lg shadow-teal-500/20 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              {verifying ? "Verifying PIN..." : "Unlock Dashboard"}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-800/80 text-center">
            <Link to="/" className="text-slate-400 hover:text-[#FF9112] text-xs font-medium inline-flex items-center gap-1.5 transition">
              <FaArrowLeft className="text-xs" /> Back to Main Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // --- AUTHENTICATED DASHBOARD LAYOUT ---
  const activeMeta = componentMeta[activeTab] || componentMeta.overview;

  return (
    <div className="min-h-screen bg-[#070B16] text-white font-sans pt-24 pb-16">
      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 bg-[#1C9773] text-slate-950 px-6 py-3 rounded-xl font-bold shadow-2xl animate-bounce flex items-center gap-2 text-sm">
          <FaCheckCircle /> {toastMessage}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Top Header Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 mb-8 backdrop-blur-xl shadow-xl">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="lg:hidden p-3 rounded-2xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white cursor-pointer"
              title="Toggle Management Menu"
            >
              {mobileSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C9773]/10 border border-[#1C9773]/30 text-[#1C9773] text-xs font-semibold uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-[#1C9773] animate-pulse" />
                Netronix Management Portal
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white">Component & Data Control Center</h1>
              <p className="text-slate-400 text-xs mt-1">Manage frontend UI sections & backend API routes dynamically</p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
            <Link
              to="/"
              target="_blank"
              className="px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs transition border border-slate-700/80 flex items-center gap-2 cursor-pointer"
            >
              <FaExternalLinkAlt className="text-xs" /> Live Site ↗
            </Link>

            <button
              onClick={fetchAllData}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition flex items-center gap-2 border border-slate-700 cursor-pointer"
              title="Refresh Data"
            >
              <FaSync className={loading ? "animate-spin" : ""} /> Sync Data
            </button>

            <button
              onClick={handleLogout}
              className="px-4 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 font-semibold text-xs transition border border-red-500/30 flex items-center gap-2 cursor-pointer"
            >
              <FaSignOutAlt /> Lock Portal
            </button>
          </div>
        </div>

        {/* Main Grid Layout: Left Sidebar Navigation + Right Content Area */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ==================== LEFT SIDEBAR COMPONENT MANAGEMENT ==================== */}
          <aside
            className={`w-full lg:w-80 flex-shrink-0 bg-slate-900/95 border border-slate-800/90 rounded-3xl p-5 backdrop-blur-xl shadow-2xl space-y-6 ${mobileSidebarOpen ? "block" : "hidden lg:block"
              }`}
          >
            {/* Sidebar Header Title */}
            <div className="px-2 pt-1 pb-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#1C9773] to-[#15795C] flex items-center justify-center text-slate-950 font-bold">
                  <FaCogs />
                </div>
                <div>
                  <h2 className="text-sm font-extrabold text-white">Management Studio</h2>
                  <p className="text-[10px] text-slate-400">Frontend & Backend Controls</p>
                </div>
              </div>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-teal-500/10 border border-teal-500/30 text-teal-400">
                v2.4 Pro
              </span>
            </div>

            {/* GROUP 1: FRONTEND UI COMPONENTS */}
            <div>
              <div className="px-2 mb-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <FaCode className="text-teal-400" />
                  <span>Frontend Components</span>
                </div>
                <span className="text-[9px] font-mono text-slate-500">src/components/</span>
              </div>

              <nav className="space-y-1">
                {[
                  { id: "hero_company", label: "Hero & Branding", icon: FaGlobe, file: "Hero.jsx" },
                  { id: "about_page", label: "About Section", icon: FaBuilding, file: "About.jsx" },
                  { id: "why_us", label: "Why Choose Us", icon: FaShieldAlt, file: "WhyChooseUs.jsx" },
                  { id: "services", label: "Services Catalog", icon: FaLayerGroup, file: "Services.jsx", badge: services.length },
                  { id: "portfolio", label: "Portfolio Projects", icon: FaBriefcase, file: "Portfolio.jsx", badge: portfolio.length },
                  { id: "team", label: "Team Members", icon: FaUsers, file: "Team.jsx", badge: team.length },
                  { id: "testimonials", label: "Client Reviews", icon: FaQuoteLeft, file: "Testimonials.jsx", badge: testimonials.length },
                  { id: "faqs", label: "FAQs Section", icon: FaQuestionCircle, file: "FaqSection.jsx", badge: faqs.length },
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setMobileSidebarOpen(false);
                      }}
                      className={`w-full group px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition duration-200 flex items-center justify-between cursor-pointer ${isActive
                          ? "bg-gradient-to-r from-[#1C9773] to-[#15795C] text-white shadow-lg shadow-teal-500/20 font-bold"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/80"
                        }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Icon className={`text-sm flex-shrink-0 ${isActive ? "text-white" : "text-teal-400 group-hover:scale-110 transition-transform"}`} />
                        <span className="truncate">{item.label}</span>
                      </div>

                      <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
                        {item.badge !== undefined && (
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${isActive ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400 border border-slate-700"
                            }`}>
                            {item.badge}
                          </span>
                        )}
                        <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${isActive ? "bg-white/20 text-white" : "bg-slate-950 text-slate-500 group-hover:text-slate-400"
                          }`}>
                          .jsx
                        </span>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* GROUP 2: BACKEND & DATA APIs */}
            <div>
              <div className="px-2 mb-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <FaDatabase className="text-amber-400" />
                  <span>Backend & Data APIs</span>
                </div>
                <span className="text-[9px] font-mono text-slate-500">server/routes/</span>
              </div>

              <nav className="space-y-1">
                {[
                  { id: "overview", label: "System Telemetry", icon: FaServer, file: "index.js" },
                  { id: "contacts", label: "Contact Inquiries", icon: FaEnvelope, file: "contactRoutes.js", badge: metrics.newContacts },
                  { id: "quotes", label: "Quote Requests", icon: FaFileInvoiceDollar, file: "quoteRoutes.js", badge: metrics.pendingQuotes },
                  { id: "security", label: "Security & Access", icon: FaLock, file: "adminRoutes.js" },
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  const hasNotice = item.badge > 0;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setMobileSidebarOpen(false);
                      }}
                      className={`w-full group px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition duration-200 flex items-center justify-between cursor-pointer ${isActive
                          ? "bg-gradient-to-r from-[#FF9112] to-[#D97706] text-slate-950 shadow-lg shadow-amber-500/20 font-extrabold"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/80"
                        }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Icon className={`text-sm flex-shrink-0 ${isActive ? "text-slate-950" : "text-amber-400 group-hover:scale-110 transition-transform"}`} />
                        <span className="truncate">{item.label}</span>
                      </div>

                      <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
                        {item.badge !== undefined && (
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${hasNotice
                              ? isActive ? "bg-slate-950 text-amber-300 font-extrabold" : "bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse"
                              : isActive ? "bg-slate-950/20 text-slate-900" : "bg-slate-800 text-slate-400 border border-slate-700"
                            }`}>
                            {item.badge}
                          </span>
                        )}
                        <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${isActive ? "bg-slate-950/20 text-slate-900 font-bold" : "bg-slate-950 text-slate-500 group-hover:text-slate-400"
                          }`}>
                          .js
                        </span>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Sidebar Bottom Footer Info */}
            <div className="pt-4 border-t border-slate-800/90 text-xs space-y-2">
              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800/90 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[11px] font-semibold text-slate-300">Node API Engine</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-400">Connected 🟢</span>
              </div>
            </div>
          </aside>

          {/* ==================== RIGHT CONTENT WORKSPACE AREA ==================== */}
          <main className="flex-1 min-w-0 space-y-6">

            {/* Active Component Section Meta Header Banner */}
            <div className="p-6 bg-slate-900/90 border border-slate-800 rounded-3xl backdrop-blur-xl shadow-xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${activeMeta.type === "frontend"
                      ? "bg-teal-500/10 text-teal-400 border border-teal-500/30"
                      : "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                    }`}>
                    {activeMeta.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                    <FaFolder className="text-teal-400 text-xs" />
                    <span>{activeMeta.file}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                    <FaServer className="text-amber-400 text-xs" />
                    <span>{activeMeta.api}</span>
                  </div>

                  {activeMeta.previewLink && (
                    <Link
                      to={activeMeta.previewLink}
                      target="_blank"
                      className="px-3 py-1 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 text-teal-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition"
                    >
                      <FaExternalLinkAlt className="text-[10px]" /> Preview Page
                    </Link>
                  )}
                </div>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-extrabold text-white">{activeMeta.title}</h2>
                <p className="text-slate-400 text-xs mt-1">{activeMeta.description}</p>
              </div>
            </div>

            {/* ==================== TAB 1: OVERVIEW ==================== */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="p-6 bg-slate-900/90 border border-slate-800 rounded-3xl backdrop-blur-xl">
                    <div className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">Total Contacts</div>
                    <div className="text-3xl font-extrabold text-[#1C9773]">{metrics.totalContacts}</div>
                    <div className="text-xs text-[#FF9112] font-semibold mt-1">{metrics.newContacts} Unread Inquiries</div>
                  </div>

                  <div className="p-6 bg-slate-900/90 border border-slate-800 rounded-3xl backdrop-blur-xl">
                    <div className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">Total Quotes</div>
                    <div className="text-3xl font-extrabold text-[#FF9112]">{metrics.totalQuotes}</div>
                    <div className="text-xs text-[#1C9773] font-semibold mt-1">{metrics.pendingQuotes} Pending Quotes</div>
                  </div>

                  <div className="p-6 bg-slate-900/90 border border-slate-800 rounded-3xl backdrop-blur-xl">
                    <div className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">Services & Projects</div>
                    <div className="text-3xl font-extrabold text-cyan-400">{services.length} / {portfolio.length}</div>
                    <div className="text-xs text-slate-400 font-semibold mt-1">Live active catalog</div>
                  </div>

                  <div className="p-6 bg-slate-900/90 border border-slate-800 rounded-3xl backdrop-blur-xl">
                    <div className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">Reviews & FAQs</div>
                    <div className="text-3xl font-extrabold text-pink-400">{testimonials.length} / {faqs.length}</div>
                    <div className="text-xs text-slate-400 font-semibold mt-1">Published items</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Recent Contact Inquiries */}
                  <div className="p-6 bg-slate-900/90 border border-slate-800 rounded-3xl backdrop-blur-xl">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center justify-between">
                      <span>Recent Contact Messages</span>
                      <button onClick={() => setActiveTab("contacts")} className="text-xs text-[#1C9773] hover:underline">View All</button>
                    </h3>

                    {contacts.length === 0 ? (
                      <p className="text-slate-500 text-xs italic py-4">No contact messages received yet.</p>
                    ) : (
                      <div className="space-y-3">
                        {contacts.slice(0, 4).map((c) => (
                          <div key={c.id} className="p-4 bg-slate-950/80 border border-slate-800 rounded-2xl flex items-center justify-between">
                            <div>
                              <div className="font-bold text-sm text-white">{c.name}</div>
                              <div className="text-xs text-slate-400">{c.email} • {c.subject || "General Inquire"}</div>
                            </div>
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${c.status === "new" ? "bg-amber-500/10 text-amber-400 border border-amber-500/30" : "bg-emerald-500/10 text-emerald-400"}`}>
                              {c.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Recent Project Quote Requests */}
                  <div className="p-6 bg-slate-900/90 border border-slate-800 rounded-3xl backdrop-blur-xl">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center justify-between">
                      <span>Recent Custom Quote Requests</span>
                      <button onClick={() => setActiveTab("quotes")} className="text-xs text-[#FF9112] hover:underline">View All</button>
                    </h3>

                    {quotes.length === 0 ? (
                      <p className="text-slate-500 text-xs italic py-4">No project quote requests submitted yet.</p>
                    ) : (
                      <div className="space-y-3">
                        {quotes.slice(0, 4).map((q) => (
                          <div key={q.id} className="p-4 bg-slate-950/80 border border-slate-800 rounded-2xl flex items-center justify-between">
                            <div>
                              <div className="font-bold text-sm text-white">{q.name}</div>
                              <div className="text-xs text-[#1C9773]">{q.serviceType || "Custom Project"}</div>
                            </div>
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${q.status === "pending" ? "bg-amber-500/10 text-amber-400 border border-amber-500/30" : "bg-emerald-500/10 text-emerald-400"}`}>
                              {q.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* ==================== TAB 2: HERO & BRANDING ==================== */}
            {activeTab === "hero_company" && (
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl space-y-8">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <h2 className="text-xl font-bold text-white">Hero Section & Site Branding Settings</h2>
                    <p className="text-slate-400 text-xs">Edit homepage hero title, subtitle, CTAs, stats counters, brand marquee logos, and company details.</p>
                  </div>
                  <button
                    onClick={saveCompanySettings}
                    disabled={saving}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#1C9773] to-[#15795C] hover:from-[#15795C] hover:to-[#1C9773] text-white font-bold text-xs shadow-lg shadow-teal-500/20 transition flex items-center gap-2 cursor-pointer"
                  >
                    <FaSave /> {saving ? "Saving..." : "Save Branding Settings"}
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Company Name</label>
                    <input
                      type="text"
                      value={companyForm.name || ""}
                      onChange={(e) => setCompanyForm({ ...companyForm, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Tagline</label>
                    <input
                      type="text"
                      value={companyForm.tagline || ""}
                      onChange={(e) => setCompanyForm({ ...companyForm, tagline: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Company Description</label>
                    <textarea
                      rows={2}
                      value={companyForm.description || ""}
                      onChange={(e) => setCompanyForm({ ...companyForm, description: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Logo Image URL (Optional)</label>
                    <input
                      type="text"
                      value={companyForm.logoUrl || ""}
                      onChange={(e) => setCompanyForm({ ...companyForm, logoUrl: e.target.value })}
                      placeholder="Leave empty for default logo transparent asset"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1C9773] uppercase mb-2">Hero Pill Badge Text</label>
                    <input
                      type="text"
                      value={companyForm.hero?.badgeText || ""}
                      onChange={(e) => setCompanyForm({ ...companyForm, hero: { ...(companyForm.hero || {}), badgeText: e.target.value } })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#FF9112] uppercase mb-2">Hero Headline Main</label>
                    <input
                      type="text"
                      value={companyForm.hero?.headlineMain || ""}
                      onChange={(e) => setCompanyForm({ ...companyForm, hero: { ...(companyForm.hero || {}), headlineMain: e.target.value } })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#FF9112] uppercase mb-2">Hero Headline Gradient Highlight</label>
                    <input
                      type="text"
                      value={companyForm.hero?.headlineHighlight || ""}
                      onChange={(e) => setCompanyForm({ ...companyForm, hero: { ...(companyForm.hero || {}), headlineHighlight: e.target.value } })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Hero Subtitle Paragraph</label>
                    <textarea
                      rows={3}
                      value={companyForm.hero?.subtitle || ""}
                      onChange={(e) => setCompanyForm({ ...companyForm, hero: { ...(companyForm.hero || {}), subtitle: e.target.value } })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Primary CTA Button Text</label>
                    <input
                      type="text"
                      value={companyForm.hero?.primaryCtaText || ""}
                      onChange={(e) => setCompanyForm({ ...companyForm, hero: { ...(companyForm.hero || {}), primaryCtaText: e.target.value } })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Secondary CTA Button Text</label>
                    <input
                      type="text"
                      value={companyForm.hero?.secondaryCtaText || ""}
                      onChange={(e) => setCompanyForm({ ...companyForm, hero: { ...(companyForm.hero || {}), secondaryCtaText: e.target.value } })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                    />
                  </div>
                </div>

                {/* Contact Info & Socials */}
                <div className="border-t border-slate-800 pt-6">
                  <h3 className="text-md font-bold text-[#1C9773] mb-4">Contact Info & Social Links</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Phone</label>
                      <input
                        type="text"
                        value={companyForm.phone || ""}
                        onChange={(e) => setCompanyForm({ ...companyForm, phone: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Email</label>
                      <input
                        type="text"
                        value={companyForm.email || ""}
                        onChange={(e) => setCompanyForm({ ...companyForm, email: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Location / Address</label>
                      <input
                        type="text"
                        value={companyForm.address || companyForm.location || ""}
                        onChange={(e) => setCompanyForm({ ...companyForm, address: e.target.value, location: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Facebook URL</label>
                      <input
                        type="text"
                        value={companyForm.socialLinks?.facebook || ""}
                        onChange={(e) => setCompanyForm({ ...companyForm, socialLinks: { ...(companyForm.socialLinks || {}), facebook: e.target.value } })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-2">LinkedIn URL</label>
                      <input
                        type="text"
                        value={companyForm.socialLinks?.linkedin || ""}
                        onChange={(e) => setCompanyForm({ ...companyForm, socialLinks: { ...(companyForm.socialLinks || {}), linkedin: e.target.value } })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-2">GitHub URL</label>
                      <input
                        type="text"
                        value={companyForm.socialLinks?.github || ""}
                        onChange={(e) => setCompanyForm({ ...companyForm, socialLinks: { ...(companyForm.socialLinks || {}), github: e.target.value } })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ==================== TAB 3: ABOUT PAGE CONTENT ==================== */}
            {activeTab === "about_page" && (
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl space-y-8">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <h2 className="text-xl font-bold text-white">About Page Content & Core Values</h2>
                    <p className="text-slate-400 text-xs">Edit About section headline, mission statement, vision, and core focus points.</p>
                  </div>
                  <button
                    onClick={saveAboutSettings}
                    disabled={saving}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#1C9773] to-[#15795C] hover:from-[#15795C] hover:to-[#1C9773] text-white font-bold text-xs shadow-lg shadow-teal-500/20 transition flex items-center gap-2 cursor-pointer"
                  >
                    <FaSave /> {saving ? "Saving..." : "Save About Settings"}
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Badge Text</label>
                    <input
                      type="text"
                      value={aboutForm.badgeText || ""}
                      onChange={(e) => setAboutForm({ ...aboutForm, badgeText: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#FF9112] uppercase mb-2">Main Headline</label>
                    <input
                      type="text"
                      value={aboutForm.headlineMain || ""}
                      onChange={(e) => setAboutForm({ ...aboutForm, headlineMain: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Main Subtitle</label>
                    <textarea
                      rows={2}
                      value={aboutForm.subtitle || ""}
                      onChange={(e) => setAboutForm({ ...aboutForm, subtitle: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1C9773] uppercase mb-2">Company Mission Statement</label>
                    <textarea
                      rows={3}
                      value={aboutForm.mission || ""}
                      onChange={(e) => setAboutForm({ ...aboutForm, mission: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#FF9112] uppercase mb-2">Company Vision Statement</label>
                    <textarea
                      rows={3}
                      value={aboutForm.vision || ""}
                      onChange={(e) => setAboutForm({ ...aboutForm, vision: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ==================== TAB 4: WHY CHOOSE US ==================== */}
            {activeTab === "why_us" && (
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl space-y-8">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <h2 className="text-xl font-bold text-white">Why Choose Us Section Settings</h2>
                    <p className="text-slate-400 text-xs">Edit title, subtitle, and differentiators for the Why Choose Us homepage section.</p>
                  </div>
                  <button
                    onClick={saveWhyUsSettings}
                    disabled={saving}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#1C9773] to-[#15795C] hover:from-[#15795C] hover:to-[#1C9773] text-white font-bold text-xs shadow-lg shadow-teal-500/20 transition flex items-center gap-2 cursor-pointer"
                  >
                    <FaSave /> {saving ? "Saving..." : "Save Section Settings"}
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Badge Text</label>
                    <input
                      type="text"
                      value={whyUsForm.badgeText || ""}
                      onChange={(e) => setWhyUsForm({ ...whyUsForm, badgeText: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#FF9112] uppercase mb-2">Headline Main</label>
                    <input
                      type="text"
                      value={whyUsForm.headlineMain || ""}
                      onChange={(e) => setWhyUsForm({ ...whyUsForm, headlineMain: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Subtitle Paragraph</label>
                    <textarea
                      rows={2}
                      value={whyUsForm.subtitle || ""}
                      onChange={(e) => setWhyUsForm({ ...whyUsForm, subtitle: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ==================== TAB 5: SERVICES MANAGEMENT ==================== */}
            {activeTab === "services" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between bg-slate-900/90 border border-slate-800 p-6 rounded-3xl backdrop-blur-xl">
                  <div>
                    <h2 className="text-xl font-bold text-white">Services Portal Catalog ({services.length})</h2>
                    <p className="text-slate-400 text-xs">Add, edit, or remove services displayed across the Service Portal and homepage.</p>
                  </div>
                  <button
                    onClick={() => {
                      setServiceForm({ title: "", slug: "", icon: "FaLaptopCode", description: "", fullDescription: "", features: "", pricing: "Custom Quote", active: true });
                      setServiceModal({ open: true, editing: null });
                    }}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#1C9773] to-[#15795C] text-white font-bold text-xs shadow-lg shadow-teal-500/20 flex items-center gap-2 cursor-pointer"
                  >
                    <FaPlus /> Add New Service
                  </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((s) => (
                    <div key={s.id} className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 relative flex flex-col justify-between hover:border-[#1C9773]/40 transition">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 rounded-full bg-[#1C9773]/10 text-[#1C9773] font-bold text-xs">
                            {s.slug || s.title}
                          </span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${s.active !== false ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"}`}>
                            {s.active !== false ? "Active" : "Disabled"}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                        <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">{s.description || s.desc}</p>
                      </div>

                      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                        <span className="text-xs text-[#FF9112] font-semibold">{s.pricing || "Custom Quote"}</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setServiceForm({
                                title: s.title || "",
                                slug: s.slug || "",
                                icon: s.icon || "FaLaptopCode",
                                description: s.description || s.desc || "",
                                fullDescription: s.fullDescription || "",
                                features: Array.isArray(s.items) ? s.items.join("\n") : s.features || "",
                                pricing: s.pricing || "Custom Quote",
                                active: s.active !== false,
                              });
                              setServiceModal({ open: true, editing: s });
                            }}
                            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs"
                          >
                            <FaEdit />
                          </button>
                          <button onClick={() => deleteService(s.id)} className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs">
                            <FaTrashAlt />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ==================== TAB 6: PORTFOLIO SHOWCASE ==================== */}
            {activeTab === "portfolio" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between bg-slate-900/90 border border-slate-800 p-6 rounded-3xl backdrop-blur-xl">
                  <div>
                    <h2 className="text-xl font-bold text-white">Portfolio Projects Showcase ({portfolio.length})</h2>
                    <p className="text-slate-400 text-xs">Add, edit, or delete featured client projects and case studies.</p>
                  </div>
                  <button
                    onClick={() => {
                      setPortfolioForm({ title: "", category: "Web Development", client: "", description: "", image: "", link: "", tags: "", featured: true });
                      setPortfolioModal({ open: true, editing: null });
                    }}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#1C9773] to-[#15795C] text-white font-bold text-xs shadow-lg shadow-teal-500/20 flex items-center gap-2 cursor-pointer"
                  >
                    <FaPlus /> Add New Project
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {portfolio.map((p) => (
                    <div key={p.id} className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 relative flex flex-col justify-between hover:border-[#FF9112]/40 transition">
                      <div>
                        {p.image && (
                          <img src={p.image} alt={p.title} className="w-full h-36 object-cover rounded-2xl mb-4 border border-slate-800" />
                        )}
                        <span className="px-3 py-1 rounded-full bg-[#FF9112]/10 text-[#FF9112] font-bold text-xs">
                          {p.category || "Project"}
                        </span>
                        <h3 className="text-lg font-bold text-white mt-2 mb-1">{p.title}</h3>
                        <p className="text-slate-400 text-xs line-clamp-2">{p.description || p.desc}</p>
                      </div>

                      <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                        <span className="text-xs text-slate-500">{p.client || "Netronix Client"}</span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setPortfolioForm({
                                title: p.title || "",
                                category: p.category || "Web Development",
                                client: p.client || "",
                                description: p.description || p.desc || "",
                                image: p.image || "",
                                link: p.link || "",
                                tags: Array.isArray(p.tags) ? p.tags.join(", ") : p.tags || "",
                                featured: p.featured !== false,
                              });
                              setPortfolioModal({ open: true, editing: p });
                            }}
                            className="p-2 rounded-lg bg-slate-800 text-slate-300 text-xs"
                          >
                            <FaEdit />
                          </button>
                          <button onClick={() => deletePortfolio(p.id)} className="p-2 rounded-lg bg-red-500/10 text-red-400 text-xs">
                            <FaTrashAlt />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ==================== TAB 7: TEAM MANAGEMENT ==================== */}
            {activeTab === "team" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between bg-slate-900/90 border border-slate-800 p-6 rounded-3xl backdrop-blur-xl">
                  <div>
                    <h2 className="text-xl font-bold text-white">Team Members ({team.length})</h2>
                    <p className="text-slate-400 text-xs">Manage leadership, engineers, and creative team profiles.</p>
                  </div>
                  <button
                    onClick={() => {
                      setTeamForm({ name: "", role: "", bio: "", image: "", github: "", linkedin: "", order: team.length + 1 });
                      setTeamModal({ open: true, editing: null });
                    }}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#1C9773] to-[#15795C] text-white font-bold text-xs shadow-lg shadow-teal-500/20 flex items-center gap-2 cursor-pointer"
                  >
                    <FaPlus /> Add Team Member
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {team.map((m) => (
                    <div key={m.id} className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between">
                      <div>
                        {m.image && <img src={m.image} alt={m.name} className="w-20 h-20 rounded-2xl object-cover mb-4 border border-slate-800" />}
                        <h3 className="text-lg font-bold text-white">{m.name}</h3>
                        <p className="text-xs text-[#1C9773] font-semibold mb-2">{m.role}</p>
                        <p className="text-slate-400 text-xs line-clamp-3">{m.bio}</p>
                      </div>

                      <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-center justify-end gap-2">
                        <button
                          onClick={() => {
                            setTeamForm({
                              name: m.name || "",
                              role: m.role || "",
                              bio: m.bio || "",
                              image: m.image || "",
                              github: m.socials?.github || "",
                              linkedin: m.socials?.linkedin || "",
                              order: m.order || 1,
                            });
                            setTeamModal({ open: true, editing: m });
                          }}
                          className="p-2 rounded-lg bg-slate-800 text-slate-300 text-xs"
                        >
                          <FaEdit />
                        </button>
                        <button onClick={() => deleteTeam(m.id)} className="p-2 rounded-lg bg-red-500/10 text-red-400 text-xs">
                          <FaTrashAlt />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ==================== TAB 8: TESTIMONIALS ==================== */}
            {activeTab === "testimonials" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between bg-slate-900/90 border border-slate-800 p-6 rounded-3xl backdrop-blur-xl">
                  <div>
                    <h2 className="text-xl font-bold text-white">Client Reviews & Testimonials ({testimonials.length})</h2>
                    <p className="text-slate-400 text-xs">Manage client feedback and 5-star ratings displayed on the website.</p>
                  </div>
                  <button
                    onClick={() => {
                      setTestimonialForm({ name: "", role: "", company: "", content: "", stars: 5, featured: true });
                      setTestimonialModal({ open: true, editing: null });
                    }}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#1C9773] to-[#15795C] text-white font-bold text-xs shadow-lg shadow-teal-500/20 flex items-center gap-2 cursor-pointer"
                  >
                    <FaPlus /> Add Testimonial
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {testimonials.map((t) => (
                    <div key={t.id} className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex text-[#FF9112] text-xs mb-3">
                          {[...Array(Number(t.stars) || 5)].map((_, i) => (
                            <FaStar key={i} />
                          ))}
                        </div>
                        <p className="text-slate-300 text-xs italic mb-4">"{t.content}"</p>
                      </div>

                      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-white">{t.name}</h4>
                          <p className="text-[10px] text-[#1C9773] font-semibold">{t.role} {t.company && `• ${t.company}`}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setTestimonialForm({
                                name: t.name || "",
                                role: t.role || "",
                                company: t.company || "",
                                content: t.content || "",
                                stars: t.stars || 5,
                                featured: t.featured !== false,
                              });
                              setTestimonialModal({ open: true, editing: t });
                            }}
                            className="p-2 rounded-lg bg-slate-800 text-slate-300 text-xs"
                          >
                            <FaEdit />
                          </button>
                          <button onClick={() => deleteTestimonial(t.id)} className="p-2 rounded-lg bg-red-500/10 text-red-400 text-xs">
                            <FaTrashAlt />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ==================== TAB 9: FAQS ==================== */}
            {activeTab === "faqs" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between bg-slate-900/90 border border-slate-800 p-6 rounded-3xl backdrop-blur-xl">
                  <div>
                    <h2 className="text-xl font-bold text-white">Frequently Asked Questions ({faqs.length})</h2>
                    <p className="text-slate-400 text-xs">Add and manage client FAQ items and answers.</p>
                  </div>
                  <button
                    onClick={() => {
                      setFaqForm({ question: "", answer: "", category: "General", order: faqs.length + 1 });
                      setFaqModal({ open: true, editing: null });
                    }}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#1C9773] to-[#15795C] text-white font-bold text-xs shadow-lg shadow-teal-500/20 flex items-center gap-2 cursor-pointer"
                  >
                    <FaPlus /> Add FAQ Item
                  </button>
                </div>

                <div className="space-y-4">
                  {faqs.map((f) => (
                    <div key={f.id} className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 flex items-start justify-between">
                      <div className="space-y-2">
                        <span className="px-2.5 py-1 rounded-full bg-[#1C9773]/10 text-[#1C9773] font-bold text-[10px] uppercase">
                          {f.category}
                        </span>
                        <h3 className="text-md font-bold text-white">{f.question}</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">{f.answer}</p>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                        <button
                          onClick={() => {
                            setFaqForm({
                              question: f.question || "",
                              answer: f.answer || "",
                              category: f.category || "General",
                              order: f.order || 1,
                            });
                            setFaqModal({ open: true, editing: f });
                          }}
                          className="p-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs"
                        >
                          <FaEdit />
                        </button>
                        <button onClick={() => deleteFaq(f.id)} className="p-2.5 rounded-xl bg-red-500/10 text-red-400 text-xs">
                          <FaTrashAlt />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ==================== TAB 10: CONTACTS INBOX ==================== */}
            {activeTab === "contacts" && (
              <div className="space-y-6">
                <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl backdrop-blur-xl">
                  <h2 className="text-xl font-bold text-white mb-1">Contact Messages Inbox ({contacts.length})</h2>
                  <p className="text-slate-400 text-xs">View and manage messages sent from the Contact section.</p>
                </div>

                {contacts.length === 0 ? (
                  <div className="p-12 text-center text-slate-500 bg-slate-900/60 border border-slate-800 rounded-3xl">No contact messages received.</div>
                ) : (
                  <div className="space-y-4">
                    {contacts.map((c) => (
                      <div key={c.id} className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-md font-bold text-white">{c.name}</h3>
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${c.status === "new" ? "bg-amber-500/10 text-amber-400 border border-amber-500/30" : "bg-emerald-500/10 text-emerald-400"}`}>
                              {c.status}
                            </span>
                          </div>
                          <p className="text-xs text-[#1C9773]">{c.email} • {c.phone || "No phone provided"}</p>
                          <p className="text-slate-300 text-xs mt-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">{c.message}</p>
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0">
                          {c.status === "new" ? (
                            <button onClick={() => updateContactStatus(c.id, "read")} className="px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-400 font-bold text-xs">
                              Mark Read
                            </button>
                          ) : (
                            <button onClick={() => updateContactStatus(c.id, "new")} className="px-4 py-2 rounded-xl bg-amber-500/10 text-amber-400 font-bold text-xs">
                              Mark New
                            </button>
                          )}
                          <button onClick={() => deleteContact(c.id)} className="p-2.5 rounded-xl bg-red-500/10 text-red-400 text-xs">
                            <FaTrashAlt />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ==================== TAB 11: QUOTES INBOX ==================== */}
            {activeTab === "quotes" && (
              <div className="space-y-6">
                <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl backdrop-blur-xl">
                  <h2 className="text-xl font-bold text-white mb-1">Project Quote Requests Inbox ({quotes.length})</h2>
                  <p className="text-slate-400 text-xs">View custom project specifications submitted by prospective clients.</p>
                </div>

                {quotes.length === 0 ? (
                  <div className="p-12 text-center text-slate-500 bg-slate-900/60 border border-slate-800 rounded-3xl">No quote requests received.</div>
                ) : (
                  <div className="space-y-4">
                    {quotes.map((q) => (
                      <div key={q.id} className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-md font-bold text-white">{q.name}</h3>
                            <span className="px-2.5 py-0.5 rounded-full bg-[#1C9773]/10 text-[#1C9773] text-[10px] font-bold">
                              {q.serviceType || "Custom Quote"}
                            </span>
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${q.status === "pending" ? "bg-amber-500/10 text-amber-400 border border-amber-500/30" : "bg-emerald-500/10 text-emerald-400"}`}>
                              {q.status}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400">{q.email} • {q.phone} • Budget: {q.budget || "Flexible"}</p>
                          <p className="text-slate-300 text-xs mt-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">{q.details || q.message}</p>
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0">
                          {q.status === "pending" ? (
                            <button onClick={() => updateQuoteStatus(q.id, "reviewed")} className="px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-400 font-bold text-xs">
                              Mark Reviewed
                            </button>
                          ) : (
                            <button onClick={() => updateQuoteStatus(q.id, "pending")} className="px-4 py-2 rounded-xl bg-amber-500/10 text-amber-400 font-bold text-xs">
                              Mark Pending
                            </button>
                          )}
                          <button onClick={() => deleteQuote(q.id)} className="p-2.5 rounded-xl bg-red-500/10 text-red-400 text-xs">
                            <FaTrashAlt />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ==================== TAB 12: SECURITY ==================== */}
            {activeTab === "security" && (
              <div className="max-w-md mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl">
                <h2 className="text-xl font-bold text-white mb-2">Change Admin Passkey / PIN</h2>
                <p className="text-slate-400 text-xs mb-6">Update the passcode required to access the Admin Dashboard.</p>

                {securityStatus.success && (
                  <div className="mb-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                    {securityStatus.success}
                  </div>
                )}
                {securityStatus.error && (
                  <div className="mb-4 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                    {securityStatus.error}
                  </div>
                )}

                <form onSubmit={handleChangePin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Current PIN</label>
                    <input
                      type="password"
                      value={securityForm.currentPin}
                      onChange={(e) => setSecurityForm({ ...securityForm, currentPin: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-2">New PIN Code</label>
                    <input
                      type="password"
                      value={securityForm.newPin}
                      onChange={(e) => setSecurityForm({ ...securityForm, newPin: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Confirm New PIN Code</label>
                    <input
                      type="password"
                      value={securityForm.confirmPin}
                      onChange={(e) => setSecurityForm({ ...securityForm, confirmPin: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:border-[#1C9773] outline-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#1C9773] to-[#15795C] hover:from-[#15795C] hover:to-[#1C9773] text-white font-bold text-xs shadow-lg shadow-teal-500/20 cursor-pointer"
                  >
                    Update Security PIN
                  </button>
                </form>
              </div>
            )}

          </main>
        </div>
      </div>

      {/* --- SERVICE MODAL --- */}
      {serviceModal.open && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-xl w-full space-y-4">
            <h3 className="text-xl font-bold text-white">{serviceModal.editing ? "Edit Service" : "Add New Service"}</h3>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Title</label>
              <input
                type="text"
                value={serviceForm.title}
                onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-[#1C9773] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Short Description</label>
              <textarea
                rows={2}
                value={serviceForm.description}
                onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-[#1C9773] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Features (One per line)</label>
              <textarea
                rows={3}
                value={serviceForm.features}
                onChange={(e) => setServiceForm({ ...serviceForm, features: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-[#1C9773] outline-none"
              />
            </div>
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button onClick={() => setServiceModal({ open: false, editing: null })} className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold">
                Cancel
              </button>
              <button onClick={saveService} className="px-6 py-2.5 rounded-xl bg-[#1C9773] text-white text-xs font-bold">
                Save Service
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- PORTFOLIO MODAL --- */}
      {portfolioModal.open && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-xl w-full space-y-4">
            <h3 className="text-xl font-bold text-white">{portfolioModal.editing ? "Edit Portfolio Project" : "Add New Project"}</h3>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Project Title</label>
              <input
                type="text"
                value={portfolioForm.title}
                onChange={(e) => setPortfolioForm({ ...portfolioForm, title: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-[#1C9773] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Category</label>
              <input
                type="text"
                value={portfolioForm.category}
                onChange={(e) => setPortfolioForm({ ...portfolioForm, category: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-[#1C9773] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Description</label>
              <textarea
                rows={2}
                value={portfolioForm.description}
                onChange={(e) => setPortfolioForm({ ...portfolioForm, description: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-[#1C9773] outline-none"
              />
            </div>
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button onClick={() => setPortfolioModal({ open: false, editing: null })} className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold">
                Cancel
              </button>
              <button onClick={savePortfolio} className="px-6 py-2.5 rounded-xl bg-[#FF9112] text-white text-xs font-bold">
                Save Project
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- TEAM MODAL --- */}
      {teamModal.open && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-xl w-full space-y-4">
            <h3 className="text-xl font-bold text-white">{teamModal.editing ? "Edit Team Profile" : "Add Team Profile"}</h3>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Full Name</label>
              <input
                type="text"
                value={teamForm.name}
                onChange={(e) => setTeamForm({ ...teamForm, name: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-[#1C9773] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Role / Designation</label>
              <input
                type="text"
                value={teamForm.role}
                onChange={(e) => setTeamForm({ ...teamForm, role: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-[#1C9773] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Short Bio</label>
              <textarea
                rows={2}
                value={teamForm.bio}
                onChange={(e) => setTeamForm({ ...teamForm, bio: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-[#1C9773] outline-none"
              />
            </div>
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button onClick={() => setTeamModal({ open: false, editing: null })} className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold">
                Cancel
              </button>
              <button onClick={saveTeam} className="px-6 py-2.5 rounded-xl bg-[#1C9773] text-white text-xs font-bold">
                Save Member
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- TESTIMONIAL MODAL --- */}
      {testimonialModal.open && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-xl w-full space-y-4">
            <h3 className="text-xl font-bold text-white">{testimonialModal.editing ? "Edit Client Review" : "Add Client Review"}</h3>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Client Name</label>
              <input
                type="text"
                value={testimonialForm.name}
                onChange={(e) => setTestimonialForm({ ...testimonialForm, name: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-[#1C9773] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Role / Designation</label>
              <input
                type="text"
                value={testimonialForm.role}
                onChange={(e) => setTestimonialForm({ ...testimonialForm, role: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-[#1C9773] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Feedback Quote</label>
              <textarea
                rows={3}
                value={testimonialForm.content}
                onChange={(e) => setTestimonialForm({ ...testimonialForm, content: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-[#1C9773] outline-none"
              />
            </div>
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button onClick={() => setTestimonialModal({ open: false, editing: null })} className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold">
                Cancel
              </button>
              <button onClick={saveTestimonial} className="px-6 py-2.5 rounded-xl bg-[#FF9112] text-white text-xs font-bold">
                Save Review
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- FAQ MODAL --- */}
      {faqModal.open && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-xl w-full space-y-4">
            <h3 className="text-xl font-bold text-white">{faqModal.editing ? "Edit FAQ Item" : "Add New FAQ Item"}</h3>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Question</label>
              <input
                type="text"
                value={faqForm.question}
                onChange={(e) => setFaqForm({ ...faqForm, question: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-[#1C9773] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Answer</label>
              <textarea
                rows={3}
                value={faqForm.answer}
                onChange={(e) => setFaqForm({ ...faqForm, answer: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-white text-sm focus:border-[#1C9773] outline-none"
              />
            </div>
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button onClick={() => setFaqModal({ open: false, editing: null })} className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold">
                Cancel
              </button>
              <button onClick={saveFaq} className="px-6 py-2.5 rounded-xl bg-[#1C9773] text-white text-xs font-bold">
                Save FAQ
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
