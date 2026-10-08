/* ================================================= */
/* TYPED ACCESS TO THE SITE'S STATIC DATA */
/* Edit the JSON files in this folder to change site content. */
/* ================================================= */

import type {
  BlogData,
  BookingData,
  ContactData,
  FaqData,
  FeaturesData,
  HeroData,
  NavigationData,
  PortfolioData,
  ServicesData,
  TeamData,
  TestimonialsData,
} from "@/types";

import blogJson from "./blog.json";
import bookingJson from "./booking.json";
import contactJson from "./contact.json";
import faqJson from "./faq.json";
import featuresJson from "./features.json";
import heroJson from "./hero.json";
import navigationJson from "./navigation.json";
import portfolioJson from "./portfolio.json";
import servicesJson from "./services.json";
import teamJson from "./team.json";
import testimonialsJson from "./testimonials.json";

/* ================= NAVIGATION & CONTACT ================= */

export const navigation = navigationJson as NavigationData;

const contact = contactJson as ContactData;
export const contactDetails = contact.details;
export const inquiryOptions = contact.inquiryOptions;
export const socialLinks = contact.socialLinks;

/* ================= SERVICES ================= */

const servicesData = servicesJson as ServicesData;
export const services = servicesData.services;
export const serviceSidebarOrder = servicesData.sidebarOrder;
export const serviceDetailContent = servicesData.detailContent;

/* Accepts a slug ("wedding-photography") or a number ("01") */
export function findService(slugOrNumber: string) {
  return services.find(
    (service) =>
      service.slug === slugOrNumber || service.number === slugOrNumber,
  );
}

/* ================= BLOG ================= */

const blogData = blogJson as BlogData;
export const blogPosts = blogData.posts;
export const blogArticle = blogData.article;

export function findBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

/* ================= PORTFOLIO ================= */

const portfolioData = portfolioJson as PortfolioData;
export const portfolioItems = portfolioData.items;
export const portfolioProject = portfolioData.project;

export function findPortfolioItem(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}

/* ================= OTHER SECTIONS ================= */

export const faqGroups = (faqJson as FaqData).groups;
export const testimonials = (testimonialsJson as TestimonialsData).testimonials;
export const teamMembers = (teamJson as TeamData).members;
export const features = (featuresJson as FeaturesData).features;
export const heroSlides = (heroJson as HeroData).slides;

const booking = bookingJson as BookingData;
export const bookingPackages = booking.packages;
export const bookingLocations = booking.locations;
