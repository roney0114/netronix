import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaGithub, FaHeart } from "react-icons/fa";
import logo from "../../assets/logo-transparent.png";

const defaultCompany = {
  description: "Netronix Innovation is a leading IT & software development company in Nepal. We engineer high-performance web applications, enterprise software, MikroTik networking, and cloud hosting infrastructure.",
  phone: "+977-9767468934",
  email: "contact@netronixinnovation.com",
  location: "Chitwan, Nepal",
};

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [company, setCompany] = useState(defaultCompany);

  useEffect(() => {
    fetch("/api/company-info")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setCompany((prev) => ({ ...prev, ...data.data }));
        }
      })
      .catch(() => console.log("[Footer] Using fallback company info"));
  }, []);

  const getLinkHref = (hash) => {
    return isHome ? hash : `/${hash}`;
  };

  return (
    <footer className="bg-[#070B16] text-white border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1C9773]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF9112]/5 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">

          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#0D1424] to-[#070B16] border border-white/15 p-2 flex items-center justify-center shadow-lg group-hover:border-[#1C9773]/70 group-hover:shadow-[0_0_24px_rgba(28,151,115,0.4)] transition-all duration-300">
                <img
                  src={logo}
                  alt="Netronix Innovation"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h2 className="text-white font-black text-2xl tracking-tight leading-none">
                  Netro<span className="text-[#FF9112] drop-shadow-[0_0_12px_rgba(255,145,18,0.4)]">nix</span>
                </h2>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1C9773] shadow-[0_0_6px_#1C9773]" />
                  <p className="text-[11px] uppercase font-extrabold tracking-[0.24em] text-[#1C9773] leading-none">
                    Innovation
                  </p>
                </div>
              </div>
            </Link>

            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-sm pt-2">
              {company.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0D1424] border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#1C9773] hover:text-white hover:border-[#1C9773] hover:shadow-[0_0_15px_rgba(28,151,115,0.4)] transition duration-300 text-sm"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0D1424] border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#FF9112] hover:text-white hover:border-[#FF9112] hover:shadow-[0_0_15px_rgba(255,145,18,0.4)] transition duration-300 text-sm"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/git07Sandesh"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0D1424] border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#1C9773] hover:text-white hover:border-[#1C9773] hover:shadow-[0_0_15px_rgba(28,151,115,0.4)] transition duration-300 text-sm"
                title="GitHub Profile"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-[#FF9112] font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9112]" />
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs md:text-sm text-slate-400">
              <li>
                <a href={getLinkHref("#hero")} className="hover:text-[#FF9112] hover:translate-x-1 inline-block transition">• Home</a>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FF9112] hover:translate-x-1 inline-block transition">• About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FF9112] hover:translate-x-1 inline-block transition">• Service Portal</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-[#FF9112] hover:translate-x-1 inline-block transition">• Portfolio & Works</Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-[#FF9112] hover:translate-x-1 inline-block transition">• Our Team</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FF9112] hover:translate-x-1 inline-block transition">• Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-[#1C9773] font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1C9773]" />
              Our Services
            </h3>
            <ul className="space-y-2.5 text-xs md:text-sm text-slate-400">
              <li>
                <Link to="/services/web-development" className="hover:text-[#1C9773] hover:translate-x-1 inline-block transition">• Website Development</Link>
              </li>
              <li>
                <Link to="/services/software-development" className="hover:text-[#1C9773] hover:translate-x-1 inline-block transition">• Software Development</Link>
              </li>
              <li>
                <Link to="/services/networking" className="hover:text-[#1C9773] hover:translate-x-1 inline-block transition">• Networking, Hosting & CCTV</Link>
              </li>
              <li>
                <Link to="/services/mobile-app-development" className="hover:text-[#1C9773] hover:translate-x-1 inline-block transition">• Mobile Application</Link>
              </li>
              <li>
                <Link to="/services/ui-ux-design" className="hover:text-[#1C9773] hover:translate-x-1 inline-block transition">• UI/UX, Branding & Marketing</Link>
              </li>
              <li>
                <Link to="/services/consulting" className="hover:text-[#1C9773] hover:translate-x-1 inline-block transition">• IT Consulting & Support</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-[#FF9112] font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9112]" />
              Get In Touch
            </h3>
            <div className="space-y-3 text-xs md:text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#FF9112] text-base mt-0.5 flex-shrink-0" />
                <span>{company.location}</span>
              </div>
              <a
                href={`tel:${company.phone}`}
                className="flex items-start gap-3 hover:text-white transition duration-200 group"
              >
                <FaPhoneAlt className="text-[#1C9773] text-base mt-0.5 flex-shrink-0 group-hover:scale-110 transition duration-200" />
                <span>{company.phone}</span>
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-start gap-3 hover:text-white transition duration-200 group"
              >
                <FaEnvelope className="text-[#FF9112] text-base mt-0.5 flex-shrink-0 group-hover:scale-110 transition duration-200" />
                <span>{company.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Netronix Innovation. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-[#1C9773] transition">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-[#1C9773] transition">
              Terms of Service
            </Link>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              Engineered with <FaHeart className="text-[#FF9112] animate-pulse" /> for Digital Growth
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
