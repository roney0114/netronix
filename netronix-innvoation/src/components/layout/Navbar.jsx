import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaChevronDown, FaChevronRight, FaPaperPlane } from "react-icons/fa";
import MegaMenu from "./MegaMenu";
import { serviceCategories } from "../../data/servicesData";
import { useQuoteModal } from "../../context/QuoteContext";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import logo from "../../assets/logo-transparent.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services", hasMega: true },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Team", path: "/team" },
];

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { isScrolled: scroll } = useScrollPosition(30);
  const [showMega, setShowMega] = useState(false);
  const { openQuoteModal } = useQuoteModal();
  const location = useLocation();

  const megaTimeoutRef = useRef(null);

  useEffect(() => {
    setOpenMobile(false);
    setMobileServicesOpen(false);
    setShowMega(false);
  }, [location.pathname]);

  // Handle ESC key to close mega menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowMega(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMouseEnterMega = () => {
    if (megaTimeoutRef.current) {
      clearTimeout(megaTimeoutRef.current);
    }
    setShowMega(true);
  };

  const handleMouseLeaveMega = () => {
    megaTimeoutRef.current = setTimeout(() => {
      setShowMega(false);
    }, 220);
  };

  const toggleMega = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowMega((prev) => !prev);
  };

  const getIsActive = (link) => {
    if (link.path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === link.path || location.pathname.startsWith(`${link.path}/`);
  };

  const handleNavClick = (link) => {
    if (location.pathname === link.path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setOpenMobile(false);
    setShowMega(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scroll
            ? "bg-[#070B16]/95 backdrop-blur-xl shadow-2xl border-b border-white/10 py-3"
            : "bg-[#070B16]/85 backdrop-blur-xl border-b border-white/10 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo & Brand Wordmark */}
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-3.5 group"
          >
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#0D1424] to-[#070B16] border border-white/15 p-2 flex items-center justify-center shadow-lg shadow-black/40 group-hover:border-[#1C9773]/70 group-hover:shadow-[0_0_24px_rgba(28,151,115,0.4)] group-hover:scale-105 transition-all duration-300">
              <img
                src={logo}
                alt="Netronix Innovation"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <h2 className="text-white font-black text-2xl md:text-[26px] tracking-tight leading-none group-hover:brightness-110 transition-all">
                Netro<span className="text-[#FF9112] drop-shadow-[0_0_12px_rgba(255,145,18,0.45)]">nix</span>
              </h2>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1C9773] animate-pulse shadow-[0_0_6px_#1C9773]" />
                <p className="text-[11px] uppercase font-extrabold tracking-[0.24em] text-[#1C9773] group-hover:text-[#2be4ad] transition-colors leading-none">
                  Innovation
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 relative">
            {navLinks.map((link) => {
              const isActive = getIsActive(link);

              if (link.hasMega) {
                return (
                  <div
                    key={link.name}
                    className="relative flex items-center py-2"
                    onMouseEnter={handleMouseEnterMega}
                    onMouseLeave={handleMouseLeaveMega}
                  >
                    <Link
                      to={link.path}
                      onClick={() => handleNavClick(link)}
                      className={`flex items-center gap-1.5 text-sm font-semibold transition-colors relative py-1 ${
                        isActive ? "text-[#1C9773]" : "text-slate-300 hover:text-[#1C9773]"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1C9773] rounded-full shadow-[0_0_10px_#1C9773]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>

                    {/* Interactive Dropdown Chevron Arrow Button */}
                    <button
                      type="button"
                      onClick={toggleMega}
                      aria-label="Toggle Services Mega Menu"
                      className={`p-1.5 ml-1 rounded-lg text-xs transition-all cursor-pointer flex items-center justify-center ${
                        showMega
                          ? "text-[#1C9773] bg-[#1C9773]/15 rotate-180 ring-1 ring-[#1C9773]/30"
                          : "text-slate-400 hover:text-[#1C9773] hover:bg-white/5"
                      }`}
                    >
                      <FaChevronDown className="transition-transform duration-250" />
                    </button>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link)}
                  className={`text-sm font-semibold transition-colors relative py-2 flex items-center gap-1.5 ${
                    isActive ? "text-[#1C9773]" : "text-slate-300 hover:text-[#1C9773]"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1C9773] rounded-full shadow-[0_0_10px_#1C9773]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              onClick={() => {
                if (location.pathname === "/contact") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm border transition-all flex items-center gap-1.5 ${
                location.pathname === "/contact"
                  ? "text-white border-[#1C9773] bg-[#1C9773] shadow-[0_0_20px_rgba(28,151,115,0.4)]"
                  : "text-white border-[#1C9773]/40 bg-[#1C9773]/15 hover:bg-[#1C9773] hover:shadow-[0_0_20px_rgba(28,151,115,0.4)]"
              }`}
            >
              <span>Contact Us</span>
            </Link>

            <button
              onClick={() => openQuoteModal()}
              className="relative group px-5 py-2.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-[#FF9112] to-[#E57D06] shadow-lg shadow-[#FF9112]/25 hover:shadow-[#FF9112]/50 hover:scale-[1.03] transition-all flex items-center gap-2 cursor-pointer"
            >
              <FaPaperPlane className="text-xs group-hover:translate-x-0.5 transition-transform" />
              <span>Get a Quote</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setOpenMobile(!openMobile)}
            className="lg:hidden text-slate-200 text-2xl p-2 rounded-xl bg-[#0D1424] border border-white/10 focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {openMobile ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {openMobile && (
          <div className="lg:hidden bg-[#070B16]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = getIsActive(link);

              if (link.hasMega) {
                return (
                  <div key={link.name} className="border-b border-white/5 pb-2">
                    <div className="flex items-center justify-between py-2">
                      <Link
                        to={link.path}
                        onClick={() => handleNavClick(link)}
                        className={`text-base font-semibold transition-colors ${
                          isActive ? "text-[#1C9773] font-bold" : "text-slate-200 hover:text-[#1C9773]"
                        }`}
                      >
                        <span>{link.name}</span>
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="p-2 text-slate-400 hover:text-[#1C9773] rounded-lg transition-colors cursor-pointer"
                        aria-label="Toggle Mobile Categories"
                      >
                        <FaChevronDown
                          className={`text-sm transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180 text-[#1C9773]" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Mobile 7 Categories Drawer */}
                    {mobileServicesOpen && (
                      <div className="mt-2 space-y-2 max-h-[360px] overflow-y-auto pr-1">
                        {serviceCategories.map((cat) => (
                          <Link
                            key={cat.id}
                            to={cat.items[0]?.slug || "/services"}
                            onClick={() => {
                              setOpenMobile(false);
                            }}
                            className="flex items-center gap-3 p-2.5 rounded-xl bg-[#0D1424] border border-white/5 hover:border-[#1C9773]/40 transition"
                          >
                            <div className="w-11 h-11 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center text-teal-400 text-lg shrink-0 overflow-hidden relative">
                              {cat.icon && <cat.icon className="text-base text-teal-400" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-bold text-white truncate">
                                {cat.number}. {cat.name}
                              </div>
                              <div className="text-[10px] text-slate-400 truncate">
                                {cat.highlight.replace(/·/g, "•")}
                              </div>
                            </div>
                            <FaChevronRight className="text-xs text-slate-500 shrink-0" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => {
                    handleNavClick(link);
                  }}
                  className={`flex items-center gap-2 py-2.5 text-base font-semibold border-b border-white/5 transition-colors ${
                    isActive ? "text-[#1C9773] font-bold" : "text-slate-200 hover:text-[#1C9773]"
                  }`}
                >
                  <span>{link.name}</span>
                </Link>
              );
            })}

            <div className="pt-4 flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={() => {
                  setOpenMobile(false);
                  if (location.pathname === "/contact") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={`w-full py-3 rounded-xl font-bold text-center border transition-all ${
                  location.pathname === "/contact"
                    ? "text-white border-[#1C9773] bg-[#1C9773]"
                    : "text-white border-[#1C9773]/40 bg-[#1C9773]/15 hover:bg-[#1C9773]"
                }`}
              >
                Contact Us
              </Link>
              <button
                onClick={() => {
                  setOpenMobile(false);
                  openQuoteModal();
                }}
                className="w-full py-3 rounded-xl font-bold text-center text-white bg-gradient-to-r from-[#FF9112] to-[#E57D06] shadow-lg shadow-[#FF9112]/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaPaperPlane />
                <span>Request Free Quote</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Centered Desktop Mega Menu with Dimming Backdrop */}
      <AnimatePresence>
        {showMega && (
          <>
            {/* Soft Backdrop Dimming */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-40 bg-black/45 backdrop-blur-[2px]"
              onClick={() => setShowMega(false)}
            />

            {/* Viewport-Centered Mega Menu Container */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 right-0 top-[76px] z-50 flex justify-center px-4 pointer-events-auto"
              onMouseEnter={handleMouseEnterMega}
              onMouseLeave={handleMouseLeaveMega}
            >
              <div className="w-full max-w-[1140px]">
                <MegaMenu onClose={() => setShowMega(false)} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}