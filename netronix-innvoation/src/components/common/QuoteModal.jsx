import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaCheck,
  FaUser,
  FaBriefcase,
  FaDollarSign,
  FaCalendarAlt,
  FaCommentDots,
  FaArrowRight,
  FaArrowLeft,
  FaPaperPlane,
  FaSpinner,
  FaCheckCircle,
  FaFileAlt,
  FaExclamationCircle,
} from "react-icons/fa";
import { useQuoteModal } from "../../context/QuoteContext";
import { quoteService } from "../../services/quoteService";
import {
  serviceCategoryOptions,
  resolveServiceCategory,
  SERVICE_CATEGORIES,
} from "../../utils/serviceCategoryMapper";

// 5 Step 
const steps = [
  { id: 1, label: "Personal Info", icon: FaUser },
  { id: 2, label: "Project Type", icon: FaBriefcase },
  { id: 3, label: "Budget", icon: FaDollarSign },
  { id: 4, label: "Timeline", icon: FaCalendarAlt },
  { id: 5, label: "Details", icon: FaCommentDots },
];

// Step 2 Services (using standardized categories)
const serviceOptions = serviceCategoryOptions;

// Step 3 Budgets (in NPR)
const budgetOptions = [
  { id: "Rs.20K - Rs.30K", title: "Rs.20K - Rs.30K", desc: "Small projects" },
  { id: "Rs.35k - Rs.60k", title: "Rs.35k - Rs.60k", desc: "Medium projects" },
  { id: "Rs.60k - Rs.3L", title: "Rs.60k - Rs.3L", desc: "Large projects" },
  { id: "Rs.3L+", title: "Rs.3L+", desc: "Enterprise solutions" },
  { id: "Let's Discuss", title: "Let's Discuss", desc: "Flexible budget" },
];

// Step 4 Timelines
const timelineOptions = [
  { id: "Less than 1 month", title: "Less than 1 month", desc: "Urgent delivery" },
  { id: "1-3 months", title: "1-3 months", desc: "Short-term project" },
  { id: "3-6 months", title: "3-6 months", desc: "Standard timeline" },
  { id: "6+ months", title: "6+ months", desc: "Long-term project" },
  { id: "Ongoing", title: "Ongoing", desc: "Continuous support" },
];

export default function QuoteModal() {
  const { isOpen, closeQuoteModal, initialPayload } = useQuoteModal();

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [SERVICE_CATEGORIES.WEB_SOFTWARE],
    budget: "Let's Discuss",
    timeline: "1-3 months",
    details: "",
    uploadedFiles: [],
  });

  const [validationError, setValidationError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync initial payload from context and accurately auto-select category
  useEffect(() => {
    if (initialPayload && isOpen) {
      setFormData((prev) => {
        let updatedServices = prev.services;
        if (Array.isArray(initialPayload.services) && initialPayload.services.length > 0) {
          const resolved = [];
          initialPayload.services.forEach((s) => {
            const categories = resolveServiceCategory(s);
            categories.forEach((cat) => {
              if (!resolved.includes(cat)) resolved.push(cat);
            });
          });
          updatedServices = resolved.length > 0 ? resolved : [SERVICE_CATEGORIES.WEB_SOFTWARE];
        }

        return {
          ...prev,
          services: updatedServices,
          details:
            initialPayload.details !== undefined && initialPayload.details !== ""
              ? initialPayload.details
              : prev.details,
          budget: initialPayload.budget || prev.budget,
          timeline: initialPayload.timeline || prev.timeline,
        };
      });
    }
  }, [initialPayload, isOpen]);

  // Reset state when modal closes
  const handleClose = () => {
    closeQuoteModal();
    setTimeout(() => {
      setCurrentStep(1);
      setIsSuccess(false);
      setValidationError("");
      setFieldErrors({});
    }, 300);
  };

  if (!isOpen) return null;

  // Form input change handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationError) setValidationError("");
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Toggle service selection (Step 2 - multi-select)
  const toggleService = (serviceId) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceId);
      if (exists) {
        if (prev.services.length === 1) return prev; // Keep at least one
        return { ...prev, services: prev.services.filter((s) => s !== serviceId) };
      } else {
        return { ...prev, services: [...prev.services, serviceId] };
      }
    });
    if (validationError) setValidationError("");
  };

  // Select Budget (Step 3 - single select)
  const selectBudget = (budgetId) => {
    setFormData((prev) => ({ ...prev, budget: budgetId }));
    if (validationError) setValidationError("");
  };

  // Select Timeline (Step 4 - single select)
  const selectTimeline = (timelineId) => {
    setFormData((prev) => ({ ...prev, timeline: timelineId }));
    if (validationError) setValidationError("");
  };

  // Handle file uploads
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        uploadedFiles: [...prev.uploadedFiles, ...files.map((f) => f.name)],
      }));
    }
  };

  const removeFile = (index) => {
    setFormData((prev) => ({
      ...prev,
      uploadedFiles: prev.uploadedFiles.filter((_, i) => i !== index),
    }));
  };

  // Step Validation Helper - validates required fields for any given step
  const validateStep = (step) => {
    const errors = {};
    let errorMsg = "";

    if (step === 1) {
      if (!formData.name || !formData.name.trim()) {
        errors.name = "Full name is required.";
        errorMsg = "Please enter your full name.";
      } else if (formData.name.trim().length < 2) {
        errors.name = "Full name must be at least 2 characters.";
        errorMsg = "Please enter your full name (minimum 2 characters).";
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email || !formData.email.trim()) {
        errors.email = "Email address is required.";
        if (!errorMsg) errorMsg = "Please enter your email address.";
      } else if (!emailRegex.test(formData.email.trim())) {
        errors.email = "Please enter a valid email address.";
        if (!errorMsg) errorMsg = "Please enter a valid email address (e.g., name@company.com).";
      }

      if (formData.phone && formData.phone.trim()) {
        const digits = formData.phone.replace(/\D/g, "");
        if (digits.length < 7) {
          errors.phone = "Phone number must have at least 7 digits.";
          if (!errorMsg) errorMsg = "Please enter a valid phone number (at least 7 digits).";
        }
      }
    } else if (step === 2) {
      if (!formData.services || formData.services.length === 0) {
        errorMsg = "Please select at least one service category.";
      }
    } else if (step === 3) {
      if (!formData.budget) {
        errorMsg = "Please select an estimated budget range.";
      }
    } else if (step === 4) {
      if (!formData.timeline) {
        errorMsg = "Please select your preferred project timeline.";
      }
    }

    return {
      isValid: Object.keys(errors).length === 0 && !errorMsg,
      errors,
      errorMsg,
    };
  };

  // Step Navigation - Enforces valid data before advancing
  const handleNext = () => {
    const { isValid, errors, errorMsg } = validateStep(currentStep);
    if (!isValid) {
      setFieldErrors(errors);
      setValidationError(errorMsg);
      return;
    }

    setFieldErrors({});
    setValidationError("");
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  // Direct Step Navigation Guard - Prevents skipping forward past invalid steps
  const goToStep = (targetStep) => {
    if (targetStep <= currentStep) {
      // Going back to review/edit prior steps is always permitted
      setFieldErrors({});
      setValidationError("");
      setCurrentStep(targetStep);
      return;
    }

    // Verify all prior steps sequentially before allowing user to jump forward
    for (let s = 1; s < targetStep; s++) {
      const { isValid, errors, errorMsg } = validateStep(s);
      if (!isValid) {
        setCurrentStep(s);
        setFieldErrors(errors);
        setValidationError(errorMsg);
        return;
      }
    }

    setFieldErrors({});
    setValidationError("");
    setCurrentStep(targetStep);
  };

  const handlePrevious = () => {
    setValidationError("");
    setFieldErrors({});
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  // Handle final submission (Step 5)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verify all steps 1 through 4 are valid before submission
    for (let s = 1; s <= 4; s++) {
      const { isValid, errors, errorMsg } = validateStep(s);
      if (!isValid) {
        setCurrentStep(s);
        setFieldErrors(errors);
        setValidationError(errorMsg);
        return;
      }
    }

    setIsSubmitting(true);
    setValidationError("");
    setFieldErrors({});

    try {
      const quoteData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "Not provided",
        company: formData.company || "Not provided",
        service: formData.services.join(", "),
        budget: formData.budget,
        timeline: formData.timeline,
        details: formData.details || "No additional comments",
        files: formData.uploadedFiles,
        createdAt: new Date().toISOString(),
      };

      await quoteService.submitQuote(quoteData);

      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setValidationError("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200 selection:bg-[#1C9773] selection:text-white">
      {/* Modal Dialog Card Container with Company Dark & Glowing Border */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl my-auto rounded-[32px] overflow-hidden shadow-2xl bg-[#0D1424] border border-white/15 flex flex-col text-white"
      >
        {/* Subtle Ambient Radial Glows (Company Teal & Orange) */}
        <div className="absolute top-0 left-1/4 w-[350px] h-[250px] bg-[#1C9773]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[350px] h-[250px] bg-[#FF9112]/15 rounded-full blur-[100px] pointer-events-none" />

        {/* Top Header Banner in Brand Dark with Gradient */}
        <div className="bg-[#070B16]/95 border-b border-white/10 px-6 py-8 sm:py-10 text-center relative z-10">
          {/* Close Button */}
          <button
            onClick={handleClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 text-slate-400 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 w-10 h-10 rounded-full flex items-center justify-center transition cursor-pointer"
          >
            <FaTimes className="text-base" />
          </button>

          {/* Company Mini Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C9773]/15 border border-[#1C9773]/30 text-teal-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Netronix Official Quote Request
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Let's Build{" "}
            <span className="block sm:inline">
              Something{" "}
              <span className="bg-gradient-to-r from-[#1C9773] via-amber-400 to-[#FF9112] bg-clip-text text-transparent">
                Amazing
              </span>
            </span>
          </h2>
          <p className="mt-2 text-slate-300 text-xs sm:text-sm font-medium max-w-xl mx-auto">
            Tell us about your project and get a free customized engineering quote within 24 hours.
          </p>
        </div>

        {/* Modal Body Area*/}
        <div className="p-6 sm:p-10 bg-[#070B16]/90 flex-grow relative z-10">
          {/* 5-Step Horizontal Indicator Bar*/}
          {!isSuccess && (
            <div className="max-w-2xl mx-auto mb-10">
              <div className="flex items-center justify-between">
                {steps.map((st, idx) => {
                  const StepIcon = st.icon;
                  const isCompleted = currentStep > st.id;
                  const isCurrent = currentStep === st.id;

                  return (
                    <React.Fragment key={st.id}>
                      {/* Step Circle & Label Indicator (Non-clickable visual progress) */}
                      <div className="flex flex-col items-center select-none cursor-default pointer-events-none">
                        <div
                          className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${isCompleted
                              ? "bg-gradient-to-r from-[#1C9773] to-[#22B58A] text-white shadow-md shadow-[#1C9773]/40"
                              : isCurrent
                                ? "bg-gradient-to-r from-[#FF9112] to-[#E57D06] text-white shadow-lg shadow-[#FF9112]/40 ring-4 ring-[#FF9112]/20 scale-105"
                                : "bg-[#0D1424] text-slate-500 border border-white/10"
                            }`}
                        >
                          {isCompleted ? (
                            <FaCheck className="text-xs stroke-[2]" />
                          ) : (
                            <StepIcon className="text-sm" />
                          )}
                        </div>
                        <span
                          className={`text-[11px] sm:text-xs font-bold mt-2 text-center transition-colors ${isCompleted
                              ? "text-teal-400"
                              : isCurrent
                                ? "text-[#FF9112]"
                                : "text-slate-500"
                            }`}
                        >
                          {st.label}
                        </span>
                      </div>

                      {/* Connecting Horizontal Line (between steps) */}
                      {idx < steps.length - 1 && (
                        <div
                          className={`h-0.5 sm:h-1 flex-1 mx-2 sm:mx-3 rounded-full mb-6 transition-all duration-300 ${currentStep > st.id
                              ? "bg-gradient-to-r from-[#1C9773] to-[#FF9112]"
                              : "bg-white/10"
                            }`}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          )}

          {/* Validation Error Alert */}
          {validationError && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-2xl mx-auto mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/40 text-red-400 text-xs sm:text-sm font-semibold flex items-center gap-2.5 shadow-lg shadow-red-500/5"
            >
              <FaExclamationCircle className="text-base shrink-0 text-red-400 animate-pulse" />
              <span>{validationError}</span>
            </motion.div>
          )}

          {/* Step Card Container*/}
          <div className="bg-[#0D1424]/90 rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl backdrop-blur-xl max-w-3xl mx-auto">
            {/* Success State */}
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 px-4"
              >
                <div className="w-20 h-20 rounded-full bg-[#1C9773]/20 border border-[#1C9773]/40 text-teal-400 flex items-center justify-center text-4xl mx-auto mb-6 shadow-[0_0_30px_rgba(28,151,115,0.3)]">
                  <FaCheckCircle />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  Quote Request Received!
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                  Thank you, <span className="font-bold text-white">{formData.name}</span>. Our technical architects will evaluate your project details and send a formal estimate to <span className="font-bold text-teal-400">{formData.email}</span> within 24 hours.
                </p>

                <div className="p-5 rounded-2xl bg-[#070B16] border border-white/10 text-left text-xs max-w-md mx-auto mb-8 space-y-2 text-slate-300">
                  <div>
                    <span className="font-bold text-[#FF9112]">Services:</span> {formData.services.join(", ")}
                  </div>
                  <div>
                    <span className="font-bold text-teal-400">Budget:</span> {formData.budget}
                  </div>
                  <div>
                    <span className="font-bold text-teal-400">Timeline:</span> {formData.timeline}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleClose}
                  className="px-9 py-3.5 rounded-2xl bg-gradient-to-r from-[#1C9773] to-[#FF9112] hover:opacity-95 text-white font-extrabold text-sm shadow-xl shadow-[#1C9773]/30 transition cursor-pointer"
                >
                  Done
                </button>
              </motion.div>
            ) : (
              <AnimatePresence mode="wait">
                {/* STEP 1: Personal Info */}
                {currentStep === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="text-center mb-8">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        Tell Us About Yourself
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm mt-1.5 font-medium">
                        Let's start with your basic information.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className={`w-full px-4 py-3.5 rounded-2xl bg-[#070B16] border text-white placeholder-slate-500 text-sm focus:outline-none transition ${
                            fieldErrors.name
                              ? "border-red-500/80 bg-red-500/5 ring-1 ring-red-500/50 focus:border-red-500"
                              : "border-white/15 focus:border-[#1C9773] focus:ring-1 focus:ring-[#1C9773]"
                          }`}
                        />
                        {fieldErrors.name && (
                          <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 font-medium">
                            <FaExclamationCircle className="text-[11px] shrink-0" />
                            <span>{fieldErrors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@company.com"
                          className={`w-full px-4 py-3.5 rounded-2xl bg-[#070B16] border text-white placeholder-slate-500 text-sm focus:outline-none transition ${
                            fieldErrors.email
                              ? "border-red-500/80 bg-red-500/5 ring-1 ring-red-500/50 focus:border-red-500"
                              : "border-white/15 focus:border-[#1C9773] focus:ring-1 focus:ring-[#1C9773]"
                          }`}
                        />
                        {fieldErrors.email && (
                          <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 font-medium">
                            <FaExclamationCircle className="text-[11px] shrink-0" />
                            <span>{fieldErrors.email}</span>
                          </p>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+977 98XXXXXXXX"
                          className={`w-full px-4 py-3.5 rounded-2xl bg-[#070B16] border text-white placeholder-slate-500 text-sm focus:outline-none transition ${
                            fieldErrors.phone
                              ? "border-red-500/80 bg-red-500/5 ring-1 ring-red-500/50 focus:border-red-500"
                              : "border-white/15 focus:border-[#1C9773] focus:ring-1 focus:ring-[#1C9773]"
                          }`}
                        />
                        {fieldErrors.phone && (
                          <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 font-medium">
                            <FaExclamationCircle className="text-[11px] shrink-0" />
                            <span>{fieldErrors.phone}</span>
                          </p>
                        )}
                      </div>

                      {/* Company Name */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Company name (optional)"
                          className="w-full px-4 py-3.5 rounded-2xl bg-[#070B16] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#1C9773] focus:ring-1 focus:ring-[#1C9773] transition"
                        />
                      </div>
                    </div>

                    {/* Step 1 Footer */}
                    <div className="flex justify-end pt-4 border-t border-white/10">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF9112] to-[#E57D06] hover:from-[#FFA73E] hover:to-[#FF9112] active:scale-95 text-white font-extrabold text-sm shadow-lg shadow-[#FF9112]/25 flex items-center gap-2 transition cursor-pointer"
                      >
                        <span>Next</span>
                        <FaArrowRight className="text-xs" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Project Type */}
                {currentStep === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="text-center mb-8">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        What Do You Need?
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm mt-1.5 font-medium">
                        Select one or more services (you can choose multiple).
                      </p>
                    </div>

                    {/* 6 Option Cards in 2x3 grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                      {serviceOptions.map((opt) => {
                        const isSelected = formData.services.includes(opt.id);
                        return (
                          <div
                            key={opt.id}
                            onClick={() => toggleService(opt.id)}
                            className={`rounded-2xl p-4 sm:p-5 cursor-pointer relative transition-all duration-200 select-none ${isSelected
                              ? "border-2 border-[#FF9112] bg-[#0E1830] shadow-[0_0_20px_rgba(255,145,18,0.25)] ring-1 ring-[#FF9112]/40"
                              : "bg-[#070B16] border border-white/10 hover:border-[#1C9773]/50 hover:bg-[#0A1120]"
                              }`}
                          >
                            {/* Checkmark in top right */}
                            {isSelected && (
                              <div className="absolute top-4 right-4 text-[#FF9112] text-sm animate-in zoom-in-50">
                                <FaCheck />
                              </div>
                            )}

                            <h4 className="font-bold text-sm sm:text-base text-white pr-6">
                              {opt.title}
                            </h4>
                            <p className="text-xs text-slate-400 mt-1 font-medium">
                              {opt.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Step 2 Footer Navigation */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <button
                        type="button"
                        onClick={handlePrevious}
                        className="px-6 py-3 rounded-2xl border border-white/20 text-slate-300 hover:text-white hover:border-[#1C9773] hover:bg-white/5 active:scale-95 transition flex items-center gap-1.5 cursor-pointer font-bold text-sm"
                      >
                        <FaArrowLeft className="text-xs" />
                        <span>Previous</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNext}
                        className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF9112] to-[#E57D06] hover:from-[#FFA73E] hover:to-[#FF9112] active:scale-95 text-white font-extrabold text-sm shadow-lg shadow-[#FF9112]/25 flex items-center gap-2 transition cursor-pointer"
                      >
                        <span>Next</span>
                        <FaArrowRight className="text-xs" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Budget */}
                {currentStep === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="text-center mb-8">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        What's Your Budget?
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm mt-1.5 font-medium">
                        Select your estimated project budget in NPR
                      </p>
                    </div>

                    {/* Budget Options Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                      {budgetOptions.map((b) => {
                        const isSelected = formData.budget === b.id;
                        return (
                          <div
                            key={b.id}
                            onClick={() => selectBudget(b.id)}
                            className={`rounded-2xl p-4 sm:p-5 cursor-pointer relative transition-all duration-200 select-none ${isSelected
                              ? "border-2 border-[#1C9773] bg-[#07241D] shadow-[0_0_20px_rgba(28,151,115,0.25)] ring-1 ring-[#1C9773]/40"
                              : "bg-[#070B16] border border-white/10 hover:border-[#1C9773]/50 hover:bg-[#0A1120]"
                              }`}
                          >
                            {isSelected && (
                              <div className="absolute top-4 right-4 text-teal-400 text-sm animate-in zoom-in-50">
                                <FaCheck />
                              </div>
                            )}

                            <h4 className="font-bold text-sm sm:text-base text-white pr-6">
                              {b.title}
                            </h4>
                            <p className="text-xs text-slate-400 mt-1 font-medium">
                              {b.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Step 3 Footer Navigation */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <button
                        type="button"
                        onClick={handlePrevious}
                        className="px-6 py-3 rounded-2xl border border-white/20 text-slate-300 hover:text-white hover:border-[#1C9773] hover:bg-white/5 active:scale-95 transition flex items-center gap-1.5 cursor-pointer font-bold text-sm"
                      >
                        <FaArrowLeft className="text-xs" />
                        <span>Previous</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNext}
                        className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF9112] to-[#E57D06] hover:from-[#FFA73E] hover:to-[#FF9112] active:scale-95 text-white font-extrabold text-sm shadow-lg shadow-[#FF9112]/25 flex items-center gap-2 transition cursor-pointer"
                      >
                        <span>Next</span>
                        <FaArrowRight className="text-xs" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: Timeline */}
                {currentStep === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="text-center mb-8">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        What's Your Timeline?
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm mt-1.5 font-medium">
                        When do you need the project completed?
                      </p>
                    </div>

                    {/* Timeline Options Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                      {timelineOptions.map((t) => {
                        const isSelected = formData.timeline === t.id;
                        return (
                          <div
                            key={t.id}
                            onClick={() => selectTimeline(t.id)}
                            className={`rounded-2xl p-4 sm:p-5 cursor-pointer relative transition-all duration-200 select-none ${isSelected
                              ? "border-2 border-[#FF9112] bg-[#0E1830] shadow-[0_0_20px_rgba(255,145,18,0.25)] ring-1 ring-[#FF9112]/40"
                              : "bg-[#070B16] border border-white/10 hover:border-[#1C9773]/50 hover:bg-[#0A1120]"
                              }`}
                          >
                            {isSelected && (
                              <div className="absolute top-4 right-4 text-[#FF9112] text-sm animate-in zoom-in-50">
                                <FaCheck />
                              </div>
                            )}

                            <h4 className="font-bold text-sm sm:text-base text-white pr-6">
                              {t.title}
                            </h4>
                            <p className="text-xs text-slate-400 mt-1 font-medium">
                              {t.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Step 4 Footer Navigation */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <button
                        type="button"
                        onClick={handlePrevious}
                        className="px-6 py-3 rounded-2xl border border-white/20 text-slate-300 hover:text-white hover:border-[#1C9773] hover:bg-white/5 active:scale-95 transition flex items-center gap-1.5 cursor-pointer font-bold text-sm"
                      >
                        <FaArrowLeft className="text-xs" />
                        <span>Previous</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNext}
                        className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF9112] to-[#E57D06] hover:from-[#FFA73E] hover:to-[#FF9112] active:scale-95 text-white font-extrabold text-sm shadow-lg shadow-[#FF9112]/25 flex items-center gap-2 transition cursor-pointer"
                      >
                        <span>Next</span>
                        <FaArrowRight className="text-xs" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 5: */}
                {currentStep === 5 && (
                  <motion.div
                    key="step-5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="text-center mb-8">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        Project Details
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm mt-1.5 font-medium">
                        Tell us more about your project vision and upload relevant files.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 mb-8">
                      {/* Describe Your Project */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          Describe Your Project
                        </label>
                        <textarea
                          rows={4}
                          name="details"
                          value={formData.details}
                          onChange={handleInputChange}
                          placeholder="Provide any goals, tech preferences, or feature details..."
                          className="w-full px-4 py-3.5 rounded-2xl bg-[#070B16] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#1C9773] focus:ring-1 focus:ring-[#1C9773] transition min-h-[140px] resize-y"
                        />
                      </div>

                      {/* Upload Images */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          Upload Images / Documents
                        </label>

                        <div className="border border-white/10 rounded-2xl p-4 bg-[#070B16] flex flex-col gap-3">
                          <input
                            type="file"
                            multiple
                            accept="image/*,.pdf,.doc,.docx"
                            onChange={handleFileUpload}
                            className="text-xs text-slate-400 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border file:border-white/15 file:text-xs file:font-bold file:bg-[#0D1424] file:text-teal-400 hover:file:border-[#1C9773] cursor-pointer"
                          />

                          {formData.uploadedFiles.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-2">
                              {formData.uploadedFiles.map((file, idx) => (
                                <div
                                  key={idx}
                                  className="inline-flex items-center gap-1.5 bg-[#0D1424] border border-white/10 px-3 py-1.5 rounded-xl text-xs text-slate-300"
                                >
                                  <FaFileAlt className="text-teal-400 text-[10px]" />
                                  <span className="truncate max-w-[150px]">{file}</span>
                                  <button
                                    type="button"
                                    onClick={() => removeFile(idx)}
                                    className="text-slate-400 hover:text-red-400 ml-1 cursor-pointer"
                                  >
                                    <FaTimes className="text-[10px]" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Step 5 Footer Navigation */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <button
                          type="button"
                          onClick={handlePrevious}
                          className="px-6 py-3 rounded-2xl border border-white/20 text-slate-300 hover:text-white hover:border-[#1C9773] hover:bg-white/5 active:scale-95 transition flex items-center gap-1.5 cursor-pointer font-bold text-sm"
                        >
                          <FaArrowLeft className="text-xs" />
                          <span>Previous</span>
                        </button>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-9 py-3.5 rounded-2xl bg-gradient-to-r from-[#1C9773] via-[#22B58A] to-[#FF9112] hover:opacity-95 active:scale-95 disabled:opacity-50 text-white font-extrabold text-sm shadow-xl shadow-[#1C9773]/30 flex items-center gap-2 transition cursor-pointer"
                        >
                          {isSubmitting ? (
                            <>
                              <FaSpinner className="animate-spin text-sm" />
                              <span>Submitting...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Request</span>
                              <FaPaperPlane className="text-xs" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
