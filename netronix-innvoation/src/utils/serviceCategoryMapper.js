/**
 * Unified Service Category Mapping for Quote Modal & Service Discussions
 */

export const SERVICE_CATEGORIES = {
  WEB_SOFTWARE: "Web & Software Development",
  MOBILE_APP: "Mobile App",
  UI_UX_DESIGN: "UI/UX Design",
  DIGITAL_MARKETING: "Digital Marketing",
  NETWORKING_HOSTING: "Networking & Hosting",
  CONSULTING: "Consulting",
};

export const serviceCategoryOptions = [
  {
    id: SERVICE_CATEGORIES.WEB_SOFTWARE,
    title: "Web & Software Development",
    desc: "Website, web application & custom software",
  },
  {
    id: SERVICE_CATEGORIES.MOBILE_APP,
    title: "Mobile App Development",
    desc: "Android, iOS & cross-platform mobile apps",
  },
  {
    id: SERVICE_CATEGORIES.UI_UX_DESIGN,
    title: "UI/UX & Branding Design",
    desc: "UI/UX prototypes, official logo & visual identity",
  },
  {
    id: SERVICE_CATEGORIES.DIGITAL_MARKETING,
    title: "Digital Marketing & SEO",
    desc: "Search engine ranking, social media & PPC ads",
  },
  {
    id: SERVICE_CATEGORIES.NETWORKING_HOSTING,
    title: "Networking & Hosting",
    desc: "MikroTik setups, CCTV surveillance & cloud VPS",
  },
  {
    id: SERVICE_CATEGORIES.CONSULTING,
    title: "IT Consulting & Support",
    desc: "Hardware maintenance, IT diagnostics & 24/7 SLA",
  },
];

/**
 * Resolves any service title, subservice name, or category string to one or more
 * valid quote service category IDs.
 *
 * @param {string} serviceName - The specific service clicked
 * @param {string} [fallbackCategory] - Optional category hint passed from caller
 * @returns {string[]} Array of matched category IDs
 */
export function resolveServiceCategory(serviceName, fallbackCategory) {
  if (!serviceName && !fallbackCategory) {
    return [SERVICE_CATEGORIES.WEB_SOFTWARE];
  }

  const query = (serviceName || "").toLowerCase().trim();
  const fallback = (fallbackCategory || "").toLowerCase().trim();

  // Check for combined UI/UX & Digital Marketing first (selects both categories)
  const isMarketingAndDesign =
    query.includes("marketing & ui/ux") ||
    query.includes("ui/ux & marketing") ||
    query.includes("ui/ux & digital marketing") ||
    query.includes("ui/ux, branding") ||
    query.includes("creative & growth") ||
    query.includes("ui-ux") ||
    query === "ui/ux design" ||
    query === "ui/ux" ||
    fallback.includes("marketing & ui/ux") ||
    fallback.includes("ui/ux & marketing") ||
    fallback.includes("ui/ux & digital marketing") ||
    fallback.includes("ui/ux, branding") ||
    fallback.includes("ui-ux");

  if (isMarketingAndDesign) {
    return [SERVICE_CATEGORIES.UI_UX_DESIGN, SERVICE_CATEGORIES.DIGITAL_MARKETING];
  }

  // If already directly matching an ID
  const allIds = Object.values(SERVICE_CATEGORIES);
  const directMatch = allIds.find(
    (id) => id.toLowerCase() === query || id.toLowerCase() === fallback
  );
  if (directMatch) {
    return [directMatch];
  }

  if (
    query.includes("ui/ux") ||
    query.includes("figma") ||
    query.includes("branding") ||
    query.includes("logo") ||
    query.includes("graphic design") ||
    query.includes("brochure") ||
    query.includes("packaging") ||
    query.includes("user research") ||
    query.includes("usability") ||
    query.includes("creative & brand") ||
    fallback.includes("ui-ux") ||
    fallback.includes("ui/ux") ||
    fallback.includes("design")
  ) {
    return [SERVICE_CATEGORIES.UI_UX_DESIGN];
  }

  // 3. Digital Marketing & SEO
  if (
    query.includes("marketing") ||
    query.includes("seo") ||
    query.includes("ppc") ||
    query.includes("social media") ||
    query.includes("ads") ||
    query.includes("campaign") ||
    query.includes("content writing") ||
    fallback.includes("marketing") ||
    fallback.includes("seo")
  ) {
    return [SERVICE_CATEGORIES.DIGITAL_MARKETING];
  }

  // 4. Networking, Hosting & CCTV
  if (
    query.includes("network") ||
    query.includes("lan") ||
    query.includes("wan") ||
    query.includes("vlan") ||
    query.includes("wifi") ||
    query.includes("wi-fi") ||
    query.includes("mikrotik") ||
    query.includes("router") ||
    query.includes("switch") ||
    query.includes("cctv") ||
    query.includes("camera") ||
    query.includes("surveillance") ||
    query.includes("hosting") ||
    query.includes("vps") ||
    query.includes("cloud") ||
    query.includes("server") ||
    query.includes("infrastructure") ||
    fallback.includes("network") ||
    fallback.includes("hosting")
  ) {
    return [SERVICE_CATEGORIES.NETWORKING_HOSTING];
  }

  // 5. Consulting, IT Support & Hardware Maintenance
  if (
    query.includes("consult") ||
    query.includes("repair") ||
    query.includes("troubleshoot") ||
    query.includes("hardware") ||
    query.includes("computer") ||
    query.includes("printer") ||
    query.includes("scanner") ||
    query.includes("operating system") ||
    query.includes("helpdesk") ||
    query.includes("support") ||
    query.includes("maintenance & computer") ||
    query.includes("assessment") ||
    query.includes("audit") ||
    fallback.includes("consult") ||
    fallback.includes("support")
  ) {
    return [SERVICE_CATEGORIES.CONSULTING];
  }

  // 6. Web & Software Development (Default / Primary)
  if (
    query.includes("web") ||
    query.includes("website") ||
    query.includes("software") ||
    query.includes("erp") ||
    query.includes("crm") ||
    query.includes("pos") ||
    query.includes("billing") ||
    query.includes("ecommerce") ||
    query.includes("e-commerce") ||
    query.includes("landing") ||
    query.includes("cms") ||
    query.includes("portal") ||
    query.includes("database") ||
    query.includes("react") ||
    query.includes("next.js") ||
    query.includes("application") ||
    query.includes("workflow") ||
    fallback.includes("web") ||
    fallback.includes("software")
  ) {
    return [SERVICE_CATEGORIES.WEB_SOFTWARE];
  }

  return [SERVICE_CATEGORIES.WEB_SOFTWARE];
}
