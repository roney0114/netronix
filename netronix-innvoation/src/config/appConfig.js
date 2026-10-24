/**
 * ==============================================================================
 * Application Configuration (Central Source of Truth)
 * ==============================================================================
 * Reads environment variables with graceful fallbacks.
 * Any developer can easily switch API targets, adjust feature flags, or change
 * company contact info here in a single place.
 */

export const appConfig = {
  // Backend API Base URL
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || "/api",

  // Environment mode
  isProduction: import.meta.env.PROD,
  isDevelopment: import.meta.env.DEV,

  // Company Contact Defaults
  company: {
    name: "Netronix Innovation",
    tagline: "Empowering Businesses Through Next-Gen Tech & Digital Solutions",
    email: "contact@netronixinnovation.com",
    phone: "+977-9767468934",
    whatsapp: "+9779767468934",
    location: "Bharatpur-10, Chitwan, Bagmati Province, Nepal",
    supportHours: "24/7 Remote & Emergency Tech Support",
    officeHours: "Sun - Fri: 9:00 AM - 6:00 PM",
  },

  // Storage keys used across local cache & state persistence
  storageKeys: {
    quotes: "netronix_quotes",
    contacts: "netronix_contacts",
    theme: "netronix_theme",
  },

  // API Endpoints specification
  endpoints: {
    quotes: "/quotes",
    contacts: "/contacts",
    health: "/health",
    newsletter: "/newsletter",
  },
};

export default appConfig;
