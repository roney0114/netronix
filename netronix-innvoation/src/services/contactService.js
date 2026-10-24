/**
 * ==============================================================================
 * Contact Service
 * ==============================================================================
 * Manages general contact inquiries and messages.
 * - Posts to backend API endpoint
 * - Falls back to localStorage cache if backend is not yet deployed
 */

import apiClient from "./apiClient";
import appConfig from "../config/appConfig";

// Default initial demo inquiries for clean developer testing & handover preview
const INITIAL_DEMO_INQUIRIES = [
  {
    id: "msg_demo_1",
    name: "Bikash Adhikari",
    email: "bikash@kalikagroup.com",
    phone: "+977 9856012345",
    subject: "Office Networking, Hosting & CCTV",
    message: "We are relocating our main corporate office in Bharatpur and need a complete MikroTik Wi-Fi setup and 16 IP CCTV cameras with remote mobile app monitoring.",
    status: "unread",
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
  {
    id: "msg_demo_2",
    name: "Pooja Gurung",
    email: "pooja@gurunglogistics.np",
    phone: "+977 9812345678",
    subject: "IT Consulting & Support",
    message: "Looking for an annual maintenance contract (AMC) for 25 office workstations and routine automated cloud data backup.",
    status: "read",
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
  },
];

export const contactService = {
  /**
   * Submit a new contact message
   * @param {Object} messageData - { name, email, phone, subject, message }
   * @returns {Promise<{success: boolean, message: string, backendSynced: boolean}>}
   */
  async sendMessage(messageData) {
    const payload = {
      ...messageData,
      id: `msg_${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: "unread",
    };

    let apiSucceeded = false;

    // 1. Attempt backend POST
    try {
      await apiClient.post(appConfig.endpoints.contacts, payload);
      apiSucceeded = true;
    } catch (err) {
      console.info("[contactService] Backend endpoint offline; caching message locally.");
    }

    // 2. Cache in localStorage so admin can see inquiries
    try {
      const existing = JSON.parse(
        localStorage.getItem(appConfig.storageKeys.contacts) || "null"
      ) || [...INITIAL_DEMO_INQUIRIES];

      existing.unshift(payload);
      localStorage.setItem(
        appConfig.storageKeys.contacts,
        JSON.stringify(existing.slice(0, 50))
      );
    } catch (e) {
      console.warn("[contactService] Failed to cache contact in localStorage", e);
    }

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully. Our team will contact you shortly.",
      backendSynced: apiSucceeded,
    };
  },

  /**
   * Get all contact inquiries
   * @returns {Promise<Array>}
   */
  async getAllInquiries() {
    try {
      const res = await apiClient.get(appConfig.endpoints.contacts);
      if (Array.isArray(res)) return res;
      if (res && Array.isArray(res.data)) return res.data;
    } catch (err) {
      // offline
    }

    try {
      const cached = localStorage.getItem(appConfig.storageKeys.contacts);
      if (cached) {
        return JSON.parse(cached);
      }
      localStorage.setItem(appConfig.storageKeys.contacts, JSON.stringify(INITIAL_DEMO_INQUIRIES));
      return INITIAL_DEMO_INQUIRIES;
    } catch (e) {
      return INITIAL_DEMO_INQUIRIES;
    }
  },

  /**
   * Delete an inquiry
   * @param {string|number} id
   */
  async deleteInquiry(id) {
    try {
      await apiClient.delete(`${appConfig.endpoints.contacts}/${id}`);
    } catch (err) {
      // offline
    }

    try {
      const existing = JSON.parse(
        localStorage.getItem(appConfig.storageKeys.contacts) || "[]"
      );
      const updated = existing.filter((m) => m.id !== id);
      localStorage.setItem(appConfig.storageKeys.contacts, JSON.stringify(updated));
      return true;
    } catch (e) {
      return false;
    }
  },
};

export default contactService;
