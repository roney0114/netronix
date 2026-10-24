/**
 * ==============================================================================
 * Quote Service
 * ==============================================================================
 * Manages project quotations and inquiries.
 * - Sends to backend API when connected
 * - Stores in localStorage as reliable offline/demo fallback
 * - Enables easy backend integration without changing UI components
 */

import apiClient from "./apiClient";
import appConfig from "../config/appConfig";

// Default initial demo quotes for clean developer testing & handover preview
const INITIAL_DEMO_QUOTES = [
  {
    id: "quote_demo_1",
    name: "Aayush Sharma",
    email: "aayush@himalayatech.com",
    phone: "+977 9841234567",
    company: "Himalaya Tech Pvt. Ltd.",
    service: "Website Development, Software Development",
    budget: "Rs.60k - Rs.3L",
    timeline: "1-3 months",
    details: "Need a high-converting corporate web portal with multi-branch management and staff authentication.",
    files: [],
    status: "in-review",
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
  },
  {
    id: "quote_demo_2",
    name: "Sunita Thapa",
    email: "sunita@chitwanagro.np",
    phone: "+977 9801234567",
    company: "Chitwan Agro Hub",
    service: "Mobile Application, UI/UX, Branding & Marketing",
    budget: "Rs.35k - Rs.60k",
    timeline: "3-6 months",
    details: "Cross-platform mobile app for agro products, online ordering, and eSewa payment gateway.",
    files: [],
    status: "pending",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
  },
];

export const quoteService = {
  /**
   * Submit a new project quote request
   * @param {Object} quoteData - The formatted quote payload
   * @returns {Promise<{success: boolean, id: string|number, data: Object, backendSynced: boolean}>}
   */
  async submitQuote(quoteData) {
    const payload = {
      ...quoteData,
      id: quoteData.id || `quote_${Date.now()}`,
      createdAt: quoteData.createdAt || new Date().toISOString(),
      status: "pending",
    };

    let apiSucceeded = false;

    // 1. Attempt to post to real backend
    try {
      const response = await apiClient.post(appConfig.endpoints.quotes, payload);
      apiSucceeded = true;
      if (response && response.data) {
        payload.id = response.data.id || payload.id;
      }
    } catch (err) {
      // Graceful fallback: backend not ready yet
      console.info("[quoteService] Backend endpoint offline; caching quote locally.");
    }

    // 2. Always persist locally so admin/offline users can view submissions
    try {
      const existing = JSON.parse(
        localStorage.getItem(appConfig.storageKeys.quotes) || "null"
      ) || [...INITIAL_DEMO_QUOTES];

      existing.unshift(payload);
      localStorage.setItem(
        appConfig.storageKeys.quotes,
        JSON.stringify(existing.slice(0, 50)) // keep latest 50
      );
    } catch (e) {
      console.warn("[quoteService] Failed to cache quote in localStorage", e);
    }

    return {
      success: true,
      id: payload.id,
      data: payload,
      backendSynced: apiSucceeded,
    };
  },

  /**
   * Get all quote submissions (from backend API or local cache)
   * @returns {Promise<Array>} List of quotes
   */
  async getAllQuotes() {
    try {
      const res = await apiClient.get(appConfig.endpoints.quotes);
      if (Array.isArray(res)) return res;
      if (res && Array.isArray(res.data)) return res.data;
    } catch (err) {
      // Fallback to local cache
    }

    try {
      const cached = localStorage.getItem(appConfig.storageKeys.quotes);
      if (cached) {
        return JSON.parse(cached);
      }
      // Populate demo quotes for first-time handover preview
      localStorage.setItem(appConfig.storageKeys.quotes, JSON.stringify(INITIAL_DEMO_QUOTES));
      return INITIAL_DEMO_QUOTES;
    } catch (e) {
      return INITIAL_DEMO_QUOTES;
    }
  },

  /**
   * Delete a quote submission
   * @param {string|number} id
   */
  async deleteQuote(id) {
    try {
      await apiClient.delete(`${appConfig.endpoints.quotes}/${id}`);
    } catch (err) {
      // ignore if offline
    }

    try {
      const existing = JSON.parse(
        localStorage.getItem(appConfig.storageKeys.quotes) || "[]"
      );
      const updated = existing.filter((q) => q.id !== id);
      localStorage.setItem(appConfig.storageKeys.quotes, JSON.stringify(updated));
      return true;
    } catch (e) {
      return false;
    }
  },
};

export default quoteService;
