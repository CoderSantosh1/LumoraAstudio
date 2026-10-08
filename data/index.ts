/* ================================================= */
/* TYPED ACCESS TO data/category.json */
/* Edit category.json to change site content. */
/* ================================================= */

import type {
  Breadcrumb,
  CategorySections,
  PageKey,
  SectionName,
  SiteData,
} from "@/types";

import categoryJson from "./category.json";

const site = categoryJson as SiteData;
const category = site.categories.Photography;

/* ================= COMMON ================= */

export const common = site.common;
export const contactInfo = common.contactInfo;
export const footer = common.Footer;

/* Banner of an inner page, e.g. "about" -> common.aboutBreadcrumb */
export function getBreadcrumb(page: PageKey): Breadcrumb | undefined {
  return common[`${page}Breadcrumb`];
}

/* ================= SECTIONS & VARIANTS ================= */

export const sections = category.sections;
export const templateComponents = category.templateComponents;

/* Data of one variant of a section, e.g. getVariant("Hero", "PhotographyHero1") */
export function getVariant<S extends SectionName>(
  section: S,
  variant: string,
): CategorySections[S]["variants"][string] {
  const variants = sections[section].variants as Record<
    string,
    CategorySections[S]["variants"][string]
  >;
  const data = variants[variant];

  if (!data) {
    throw new Error(`Missing variant "${variant}" in section "${section}"`);
  }

  return data;
}

/* Finds a variant's data in any section (used by the page renderer) */
export function findVariant(variant: string): unknown {
  for (const section of Object.values(sections)) {
    const variants = section.variants as Record<string, unknown>;

    if (variant in variants) {
      return variants[variant];
    }
  }

  return undefined;
}

/* Data of the section with `key` on `page` (follows the page's `variant`) */
export function getPageSectionData(page: PageKey, key: string): unknown {
  const entry = templateComponents.pages[page].components.find(
    (component) => component.key === key,
  );

  if (!entry) {
    throw new Error(`Page "${page}" has no section "${key}"`);
  }

  return findVariant(entry.variant ?? entry.component);
}

/* ================= SHARED HEADER ================= */

export const header = getVariant("Header", templateComponents.shared.Header);

/* ================= SERVICES ================= */

export const services = getVariant("Services", "PhotographyServices1").services;

/* Accepts a slug ("wedding-photography") or a number ("01") */
export function findService(slugOrNumber: string) {
  return services.find(
    (service) =>
      service.slug === slugOrNumber || service.number === slugOrNumber,
  );
}

/* ================= BLOG ================= */

export const blogPosts = getVariant("Blogs", "PhotographyBlogs1").blogs;

export function findBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

/* ================= PORTFOLIO ================= */

export const portfolioItems = getVariant(
  "Portfolio",
  "PhotographyPortfolio1",
).items;

export function findPortfolioItem(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}
