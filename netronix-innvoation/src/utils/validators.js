/**
 * ==============================================================================
 * Form Validation Utilities
 * ==============================================================================
 * Centralized pure validation functions for forms across the website.
 */

/**
 * Validates standard email address syntax
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  if (!email || typeof email !== "string") return false;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
}

/**
 * Validates phone numbers (minimum 7 digits, supports + and spaces)
 * @param {string} phone
 * @returns {boolean}
 */
export function isValidPhone(phone) {
  if (!phone || typeof phone !== "string") return false;
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

/**
 * Validates a required text field
 * @param {string} value
 * @param {number} [minLength=1]
 * @returns {boolean}
 */
export function isRequired(value, minLength = 1) {
  if (value === null || value === undefined) return false;
  return String(value).trim().length >= minLength;
}
