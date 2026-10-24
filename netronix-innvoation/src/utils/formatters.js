/**
 * ==============================================================================
 * Data Formatting Utilities
 * ==============================================================================
 * Helpers for displaying currency, dates, and text consistently.
 */

/**
 * Format numbers into currency string (e.g. NPR 35,000)
 * @param {number|string} amount
 * @param {string} [prefix='NPR']
 * @returns {string}
 */
export function formatCurrency(amount, prefix = "NPR") {
  const num = Number(amount) || 0;
  return `${prefix} ${num.toLocaleString()}`;
}

/**
 * Formats ISO date string into readable date (e.g. "Oct 20, 2026, 1:45 PM")
 * @param {string} dateString
 * @returns {string}
 */
export function formatDate(dateString) {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch (e) {
    return dateString;
  }
}
