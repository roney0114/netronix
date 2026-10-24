import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaHeadset,
  FaArrowRight,
  FaComments,
  FaGlobe,
} from "react-icons/fa";
import { useQuoteModal } from "../context/QuoteContext";
import { contactService } from "../services/contactService";

export default function ContactPage() {
  const { openQuoteModal } = useQuoteModal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", msg: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback({ type: "", msg: "" });

    try {
      const res = await contactService.sendMessage(formData);

      if (res.success) {
        setFeedback({
          type: "success",
          msg: res.message || "Thank you! Your message has been sent successfully. Our team will contact you shortly.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "General Inquiry",
          message: "",
        });
      } else {
        setFeedback({
          type: "error",
          msg: res.error || "Failed to send message. Please try again.",
        });
      }
    } catch (err) {
      setFeedback({
        type: "error",
        msg: "Failed to send message. Please check your connection or call us directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070B16] text-white font-sans pt-28 pb-20 relative overflow-hidden">
      {/* Background Lighting Orbs */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#1C9773]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#FF9112]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C9773]/15 border border-[#1C9773]/40 text-[#1C9773] text-xs font-extrabold uppercase tracking-wider">
            <FaComments /> Get In Touch
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Let’s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1C9773] via-[#22B58A] to-[#FF9112]">Extraordinary</span> Together
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Have a technical question, need custom software, or want a high-converting website? Reach out to our team or request a fast estimate online.
          </p>
        </div>

        {/* Contact Quick Info Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 bg-[#0D1424]/80 border border-white/10 rounded-3xl backdrop-blur-xl hover:border-[#1C9773]/40 transition group flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#1C9773] to-[#15795C] flex items-center justify-center text-white text-xl flex-shrink-0 shadow-lg shadow-[#1C9773]/25 group-hover:scale-105 transition-transform">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base mb-1">Our Location</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Ratnanagar, Chitwan<br />Bagmati Province, Nepal
              </p>
            </div>
          </div>

          <div className="p-6 bg-[#0D1424]/80 border border-white/10 rounded-3xl backdrop-blur-xl hover:border-[#1C9773]/40 transition group flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#1C9773] to-[#15795C] flex items-center justify-center text-white text-xl flex-shrink-0 shadow-lg shadow-[#1C9773]/25 group-hover:scale-105 transition-transform">
              <FaEnvelope />
            </div>
            <div className="min-w-0">
              <h3 className="font-extrabold text-white text-base mb-1">Email</h3>
              <a
                href="mailto:info@netronix.com.np"
                className="text-[#1C9773] hover:text-[#22B58A] font-semibold text-xs sm:text-sm underline block truncate"
              >
                info@netronix.com.np
              </a>
              <a
                href="mailto:support@netronix.com.np"
                className="text-[#1C9773] hover:text-[#22B58A] font-semibold text-xs sm:text-sm underline block truncate mt-0.5"
              >
                support@netronix.com.np
              </a>
            </div>
          </div>

          <div className="p-6 bg-[#0D1424]/80 border border-white/10 rounded-3xl backdrop-blur-xl hover:border-[#1C9773]/40 transition group flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#1C9773] to-[#15795C] flex items-center justify-center text-white text-xl flex-shrink-0 shadow-lg shadow-[#1C9773]/25 group-hover:scale-105 transition-transform">
              <FaPhoneAlt />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base mb-1">Phone</h3>
              <a
                href="tel:+9779767468934"
                className="text-slate-200 hover:text-[#1C9773] font-bold text-sm block transition"
              >
                9767468934
              </a>
              <a
                href="tel:+9779865381214"
                className="text-slate-200 hover:text-[#1C9773] font-bold text-sm block transition mt-0.5"
              >
                9865381214
              </a>
            </div>
          </div>

          <div className="p-6 bg-[#0D1424]/80 border border-white/10 rounded-3xl backdrop-blur-xl hover:border-[#FF9112]/40 transition group flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#FF9112]/15 border border-[#FF9112]/40 flex items-center justify-center text-[#FF9112] text-xl flex-shrink-0 group-hover:scale-105 transition-transform">
              <FaClock />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base mb-1">Working Hours</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Sun - Fri: 9:00 AM - 6:00 PM<br />
                <span className="text-[#1C9773] font-semibold">24/7 Support SLA</span>
              </p>
            </div>
          </div>
        </div>

        {/* Main Grid: Contact Form + Interactive Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#0D1424]/80 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-xl shadow-2xl space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-white">Send Us a Direct Message</h2>
              <p className="text-slate-400 text-xs mt-1">
                Fill out the form below and an engineer or consultant will respond within 1-2 hours.
              </p>
            </div>

            {feedback.msg && (
              <div
                className={`p-4 rounded-2xl border text-xs flex items-center gap-3 ${feedback.type === "success"
                  ? "bg-[#1C9773]/15 border-[#1C9773]/30 text-[#1C9773]"
                  : "bg-red-500/15 border-red-500/30 text-red-400"
                  }`}
              >
                {feedback.type === "success" ? <FaCheckCircle className="text-lg flex-shrink-0" /> : <FaExclamationCircle className="text-lg flex-shrink-0" />}
                <span>{feedback.msg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Full Name <span className="text-[#1C9773]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full bg-[#070B16] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#1C9773] focus:ring-1 focus:ring-[#1C9773] transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Email Address <span className="text-[#1C9773]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full bg-[#070B16] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#1C9773] focus:ring-1 focus:ring-[#1C9773] transition"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+977-98XXXXXXXX"
                    className="w-full bg-[#070B16] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#1C9773] focus:ring-1 focus:ring-[#1C9773] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Subject / Service Area
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#070B16] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#1C9773] transition"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Software Development">Software Development</option>
                    <option value="UI/UX, Branding & Marketing">UI/UX, Branding & Marketing</option>
                    <option value="Networking, Hosting & CCTV">Networking, Hosting & CCTV</option>
                    <option value="IT Consulting & Support">IT Consulting & Support</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Your Message <span className="text-[#1C9773]">*</span>
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, timeline, budget, or inquiry..."
                  className="w-full bg-[#070B16] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-[#1C9773] focus:ring-1 focus:ring-[#1C9773] transition"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF9112] to-[#E57D06] hover:from-[#FFA73E] hover:to-[#FF9112] text-white font-extrabold text-sm shadow-xl shadow-[#FF9112]/20 transition flex items-center justify-center gap-2.5 cursor-pointer"
              >
                {submitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message Now</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Quote Trigger & Map Banner */}
          <div className="lg:col-span-5 space-y-6">

            {/* Instant Project Estimate Banner */}
            <div className="p-8 bg-gradient-to-br from-[#0D1424] via-[#1C9773]/10 to-[#0D1424] border border-[#1C9773]/30 rounded-3xl backdrop-blur-xl space-y-5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1C9773]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#1C9773] to-[#FF9112] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                <FaHeadset />
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-white">Need an Immediate Project Quote?</h3>
                <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                  Skip the line and receive a customized project quotation with transparent pricing and estimated completion timelines.
                </p>
              </div>

              <button
                onClick={openQuoteModal}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF9112] to-[#E57D06] hover:from-[#FFA73E] hover:to-[#FF9112] text-white font-bold text-xs shadow-lg shadow-[#FF9112]/20 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Custom Quote Now</span>
                <FaArrowRight />
              </button>
            </div>

            {/* Embedded Location Map Preview */}
            <div className="p-6 bg-[#0D1424]/80 border border-white/10 rounded-3xl backdrop-blur-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <FaGlobe className="text-[#1C9773]" />
                  <span>Ratnanagar, Chitwan Office Location</span>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#1C9773]/15 border border-[#1C9773]/30 text-[#1C9773]">
                  Open Today 🟢
                </span>
              </div>

              <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-white/10 bg-[#070B16] flex items-center justify-center">
                <iframe
                  title="Netronix Innovation Ratnanagar Chitwan Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28312.48560064561!2d84.49845013063595!3d27.618683701201946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994e8a528ee3297%3A0xad7e57ada4ce9d83!2sRatnanagar%2044204!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                  className="w-full h-full border-0 opacity-80 hover:opacity-100 transition"
                  loading="lazy"
                  allowFullScreen=""
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-slate-400">Ratnanagar, Chitwan, Nepal</span>
                <a
                  href="https://maps.google.com/?q=Ratnanagar,+Chitwan,+Nepal"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#FF9112] hover:text-[#FFA73E] font-bold inline-flex items-center gap-1 transition"
                >
                  <span>Open in Maps</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
