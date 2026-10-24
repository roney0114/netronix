import { createContext, useContext, useState } from "react";
import { resolveServiceCategory, SERVICE_CATEGORIES } from "../utils/serviceCategoryMapper";

const QuoteContext = createContext();

export function QuoteProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialPayload, setInitialPayload] = useState({
    services: [SERVICE_CATEGORIES.WEB_SOFTWARE],
    selectedServiceName: "",
    details: "",
    budget: "Let's Discuss",
    timeline: "3-6 months",
  });

  const openQuoteModal = (payload, categoryHint) => {
    let services = [SERVICE_CATEGORIES.WEB_SOFTWARE];
    let selectedServiceName = "";
    let details = "";
    let budget = "Let's Discuss";
    let timeline = "3-6 months";

    if (typeof payload === "string") {
      selectedServiceName = payload;
      services = resolveServiceCategory(payload, categoryHint);
      details = payload.includes("Goals:")
        ? payload
        : payload
        ? `I would like to discuss: ${payload}`
        : "";
    } else if (payload && typeof payload === "object") {
      selectedServiceName = payload.service || payload.title || payload.name || "";
      services =
        payload.services && payload.services.length > 0
          ? payload.services
          : resolveServiceCategory(selectedServiceName, payload.category || categoryHint);
      details =
        payload.details ||
        (selectedServiceName ? `I would like to discuss: ${selectedServiceName}` : "");
      budget = payload.budget || "Let's Discuss";
      timeline = payload.timeline || "3-6 months";
    }

    setInitialPayload({
      services,
      selectedServiceName,
      details,
      budget,
      timeline,
    });
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  return (
    <QuoteContext.Provider
      value={{
        isOpen,
        initialService: initialPayload?.services?.[0] || "Web Development",
        initialPayload,
        openQuoteModal,
        closeQuoteModal,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteProvider");
  }
  return context;
}
