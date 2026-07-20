import type { Metadata } from "next";

export const SITE_NAME = "Al Nakiya Trading";
export const SITE_TAGLINE =
  "Industrial tools, hardware, electrical accessories and building materials supplier in the UAE.";

export function getSiteUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://alnakiyatrading.com";
  return raw.replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function truncateMeta(value: string, max = 155) {
  const clean = value.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).trimEnd()}…`;
}

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  image = "/icons/og-icon.png",
  type = "website",
  noIndex = false,
  keywords = [],
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(SITE_NAME)
    ? title
    : undefined; /* use template */
  const desc = truncateMeta(description);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    title: fullTitle ?? title,
    description: desc,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description: desc,
      url,
      siteName: SITE_NAME,
      locale: "en_AE",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description: desc,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false, nocache: true }
      : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: getSiteUrl(),
    logo: absoluteUrl("/icons/android-chrome-512x512.png"),
    image: absoluteUrl("/icons/og-icon.png"),
    description: SITE_TAGLINE,
    email: "info@alnakiyatrading.com",
    telephone: "+971506859158",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sharjah",
      addressCountry: "AE",
    },
    sameAs: ["https://www.instagram.com/", "https://wa.me/971506859158"],
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: getSiteUrl(),
    description: SITE_TAGLINE,
    potentialAction: {
      "@type": "SearchAction",
      target: `${absoluteUrl("/shop")}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function safeDate(value?: string | null) {
  if (!value) return new Date();
  const normalized = value.includes("T")
    ? value
    : value.replace(" ", "T") + (value.endsWith("Z") ? "" : "Z");
  const date = new Date(normalized);
  return Number.isNaN(date.getTime()) ? new Date() : date;
}
