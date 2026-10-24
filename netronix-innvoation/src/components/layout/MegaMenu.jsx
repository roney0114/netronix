import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";
import { useQuoteModal } from "../../context/QuoteContext";
import { serviceCategories as serviceCategoriesData } from "../../data/servicesData";

// Re-export for any consumers
export { serviceCategoriesData };

export default function MegaMenu({ onClose }) {
  const [activeCategoryId, setActiveCategoryId] = useState("web-development");
  const { openQuoteModal } = useQuoteModal();

  const activeCategory =
    serviceCategoriesData.find((cat) => cat.id === activeCategoryId) ||
    serviceCategoriesData[0];

  const ActiveCategoryIcon = activeCategory.icon;

  const getQuoteName = (name) => {
    if (name.includes("&")) {
      return name.split("&")[0].trim();
    }
    if (name.includes(",")) {
      return name.split(",")[0].trim();
    }
    return name.split(" ")[0];
  };

  return (
    <div className="w-[1140px] max-w-[96vw] rounded-[28px] border border-white/10 bg-[#070B16]/98 p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] backdrop-blur-2xl text-left selection:bg-[#1C9773] selection:text-white">
      <div className="grid grid-cols-12 gap-6 min-h-[500px]">
        {/* Left Column: SELECT VERTICAL (6 CATEGORIES) */}
        <div className="col-span-5 flex flex-col space-y-2">
          <div className="px-2 pb-1 text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
            SELECT VERTICAL (6 CATEGORIES)
          </div>

          <div className="space-y-2 max-h-[520px] overflow-y-auto pr-1.5 custom-scrollbar">
            {serviceCategoriesData.map((cat) => {
              const isActive = cat.id === activeCategoryId;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onMouseEnter={() => setActiveCategoryId(cat.id)}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`w-full p-2.5 sm:p-3 rounded-2xl text-left transition-all duration-200 flex items-center gap-3.5 cursor-pointer border ${
                    isActive
                      ? "bg-[#07131F] border-[#1C9773] shadow-lg shadow-[#1C9773]/20 ring-1 ring-[#1C9773]/30"
                      : "bg-[#0B1120] border-white/5 hover:border-white/15 hover:bg-[#0E172B] text-slate-300"
                  }`}
                >
                  {/* Category Thumbnail Image or Icon */}
                  <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-slate-900 border border-white/10 relative shadow-md">
                    {cat.image ? (
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : null}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900 text-teal-400 -z-10">
                      {cat.icon && <cat.icon className="text-xl" />}
                    </div>

                    {isActive && (
                      <div className="absolute inset-0 bg-[#1C9773]/20 ring-1 ring-inset ring-[#1C9773]" />
                    )}
                  </div>

                  {/* Title & Highlight */}
                  <div className="flex-1 min-w-0">
                    <div
                      className={`text-xs sm:text-sm font-bold truncate leading-snug ${
                        isActive ? "text-white" : "text-slate-200"
                      }`}
                    >
                      {cat.number}. {cat.name}
                    </div>
                    <div className="text-[11px] text-slate-400 truncate mt-0.5">
                      {cat.highlight ? cat.highlight.replace(/·/g, "•") : ""}
                    </div>
                  </div>

                  {/* Right Chevron */}
                  <div
                    className={`shrink-0 text-xs transition-transform ${
                      isActive ? "text-[#1C9773] translate-x-0.5" : "text-slate-500"
                    }`}
                  >
                    <FaChevronRight />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Category Details & Services Grid */}
        <div className="col-span-7">
          <div className="h-full bg-[#080E1C] border border-white/10 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl relative">
            <div className="space-y-4">
              {/* Category Header */}
              <div className="flex items-center gap-3.5 pb-4 border-b border-white/10">
                <div className="w-12 h-12 rounded-xl bg-[#1C9773]/15 border border-[#1C9773]/40 flex items-center justify-center text-teal-400 text-xl shadow-[0_0_20px_rgba(28,151,115,0.25)] shrink-0">
                  <ActiveCategoryIcon />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white leading-tight">
                    {activeCategory.name}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-[13px] mt-0.5 line-clamp-1">
                    {activeCategory.servicesCount} services available • {activeCategory.tagline}
                  </p>
                </div>
              </div>

              {/* Sub-Services List Grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 py-1 max-h-[340px] overflow-y-auto pr-1 custom-scrollbar">
                {activeCategory.items.map((sub, idx) => (
                  <Link
                    key={idx}
                    to={sub.slug}
                    onClick={() => onClose?.()}
                    className="group block space-y-1 p-2 rounded-xl hover:bg-white/[0.04] transition duration-200"
                  >
                    <div className="flex items-center gap-2 font-bold text-xs sm:text-[13px] text-white group-hover:text-[#FF9112] transition-colors">
                      <span className="text-[#1C9773] group-hover:text-[#FF9112] font-black text-sm shrink-0 transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                      <span className="truncate">{sub.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 group-hover:text-slate-300 leading-snug line-clamp-2 pl-4">
                      {sub.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Action Footer Bar */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs mt-3">
              <div className="text-slate-300 font-medium">
                Not sure what you need?{" "}
                <button
                  type="button"
                  onClick={() => {
                    onClose?.();
                    openQuoteModal(activeCategory.name);
                  }}
                  className="text-[#FF9112] hover:text-[#FFA73E] font-bold hover:underline cursor-pointer ml-1"
                >
                  Talk to our team
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  onClose?.();
                  openQuoteModal(activeCategory.name);
                }}
                className="px-5 py-2.5 rounded-full bg-[#1C9773] hover:bg-[#15795C] text-white font-bold transition flex items-center gap-2 shadow-lg shadow-[#1C9773]/25 hover:shadow-[#1C9773]/40 hover:scale-[1.02] cursor-pointer text-xs"
              >
                <span>Get Quote for {getQuoteName(activeCategory.name)}</span>
                <FaArrowRight className="text-[10px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}