/**
 * ==============================================================================
 * API Client (Universal Fetch Wrapper)
 * ==============================================================================
 * A lightweight, dependency-free HTTP client built on native `fetch`.
 * - Automatically prepends API base URL from appConfig (or Vite dev proxy)
 * - Serializes JSON request bodies
 * - Formats error responses cleanly
 * - Injects Bearer auth token if present
 * - Provides developer logs in development mode
 * - Supports request timeouts
 */

import appConfig from "../config/appConfig";

export class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

/**
 * Universal request handler
 * @param {string} endpoint - API path (e.g., "/quotes")
 * @param {RequestInit} [options] - Native fetch options
 * @param {number} [timeoutMs=10000] - Request timeout in milliseconds
 */
async function request(endpoint, options = {}, timeoutMs = 10000) {
  const url = endpoint.startsWith("http")
    ? endpoint
    : `${appConfig.apiBaseUrl.replace(/\/$/, "")}/${endpoint.replace(/^\//, "")}`;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  // Retrieve optional auth token
  const token = typeof window !== "undefined" ? localStorage.getItem("netronix_auth_token") : null;

  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    signal: controller.signal,
  };

  const method = config.method || "GET";

  if (appConfig.isDevelopment) {
    console.debug(`[apiClient] 🚀 ${method} ${url}`, config.body ? JSON.parse(config.body) : "");
  }

  try {
    const response = await fetch(url, config);
    clearTimeout(timer);

    let data = null;
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    if (!response.ok) {
      const errorMessage =
        (typeof data === "object" && data?.error) ||
        (typeof data === "object" && data?.message) ||
        `Request failed with status ${response.status}`;
      throw new ApiError(errorMessage, response.status, data);
    }

    if (appConfig.isDevelopment) {
      console.debug(`[apiClient] ✅ ${method} ${url} ->`, data);
    }

    return data;
  } catch (err) {
    clearTimeout(timer);
    if (err.name === "AbortError") {
      throw new ApiError("Request timed out. Please try again.", 408);
    }
    if (appConfig.isDevelopment) {
      console.warn(`[apiClient] ❌ ${method} ${url} failed:`, err.message);
    }
    throw err;
  }
}

export const apiClient = {
  get: (endpoint, options) => request(endpoint, { method: "GET", ...options }),
  post: (endpoint, body, options) =>
    request(endpoint, {
      method: "POST",
      body: body ? JSON.stringify(body) : undefined,
      ...options,
    }),
  put: (endpoint, body, options) =>
    request(endpoint, {
      method: "PUT",
      body: body ? JSON.stringify(body) : undefined,
      ...options,
    }),
  patch: (endpoint, body, options) =>
    request(endpoint, {
      method: "PATCH",
      body: body ? JSON.stringify(body) : undefined,
      ...options,
    }),
  delete: (endpoint, options) => request(endpoint, { method: "DELETE", ...options }),
};

export default apiClient;
