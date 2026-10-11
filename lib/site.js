// Shared constants and metadata helpers for the marketing site.
export const SITE_URL = "https://www.easytech-agency.net";
export const SITE_NAME = "EASYTECH";
export const CONTACT_EMAIL = "contact@easytech-agency.net";
export const FOUNDED = "2025-04-18";

export function pageMeta({ title, description, path = "/" }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | An AI studio that ships`;
  return {
    title: title ? title : { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

// "2026-05-12" -> "12 May 2026" (UTC, so output does not depend on the server timezone)
export function formatDate(iso) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(iso + "T00:00:00Z"));
}
export function formatMonth(iso) {
  return new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(iso + "T00:00:00Z"));
}
