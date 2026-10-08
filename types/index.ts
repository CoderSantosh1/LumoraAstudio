/* ================================================= */
/* TYPES FOR THE SITE'S STATIC DATA (see /data/*.json) */
/* ================================================= */

/* ================= SHARED ================= */

/* Icon names used in JSON; mapped to components in app/components/icons.ts */
export type IconName =
  | "camera"
  | "lightbulb"
  | "trophy"
  | "gem"
  | "circle-user"
  | "map-pin"
  | "building"
  | "calendar";

export type NavLink = {
  name: string;
  href: string;
};

/* ================= NAVIGATION (navigation.json) ================= */

export type NavigationData = {
  mainNav: NavLink[];
  bookingLink: NavLink;
  footerQuickLinks: NavLink[];
  footerServices: NavLink[];
};

/* ================= CONTACT (contact.json) ================= */

export type ContactDetails = {
  email: string;
  phone: string;
  phoneHref: string;
  addressLine1: string;
  addressLine2: string;
  mapQuery: string;
  /* Google Maps zoom level: 5 = country, 14 = street */
  mapZoom: number;
};

export type SocialPlatform =
  | "facebook"
  | "twitter"
  | "instagram"
  | "pinterest"
  | "dribbble";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

export type ContactData = {
  details: ContactDetails;
  inquiryOptions: string[];
  socialLinks: SocialLink[];
};

/* ================= SERVICES (services.json) ================= */

export type Service = {
  slug: string;
  number: string;
  title: string;
  /* Title split over two lines on the service cards */
  titleLines: [string, string];
  /* Longer text on the service cards */
  description: string;
  /* Shorter text in the "Other Services" sidebar */
  shortDescription: string;
  cardImage: string;
  image: string;
  thumb: string;
};

export type ServiceDetailContent = {
  intro: string;
  stepsIntro: string;
  steps: string[];
  outro: string;
};

export type ServicesData = {
  services: Service[];
  /* Order of the "Other Services" sidebar on the detail page */
  sidebarOrder: string[];
  detailContent: ServiceDetailContent;
};

/* ================= BLOG (blog.json) ================= */

export type BlogPost = {
  slug: string;
  date: string;
  fullDate: string;
  titleLead: string;
  titleScript: string;
  author: string;
  avatar: string;
  image: string;
  category: string;
  views: string;
};

export type BlogArticleContent = {
  bodyText: string;
  concepts: string[];
};

export type BlogData = {
  posts: BlogPost[];
  /* Shared body content shown on every blog detail page */
  article: BlogArticleContent;
};

/* ================= PORTFOLIO (portfolio.json) ================= */

export type PortfolioItem = {
  slug: string;
  title: string;
  image: string;
};

export type ProjectInfoRow = {
  icon: IconName;
  label: string;
  value: string;
};

export type CameraGear = {
  brand: string;
  model: string;
};

export type PortfolioProject = {
  client: string;
  headingScript: string;
  coverImage: string;
  info: ProjectInfoRow[];
  /* Client rating out of 5 */
  rating: number;
  gear: CameraGear[];
  bodyText: string;
  concepts: string[];
  gallery: string[];
};

export type PortfolioData = {
  items: PortfolioItem[];
  /* Shared project details shown on every portfolio detail page */
  project: PortfolioProject;
};

/* ================= FAQ (faq.json) ================= */

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqData = {
  /* Each group is numbered from 01 on the FAQ page */
  groups: FaqItem[][];
};

/* ================= TESTIMONIALS (testimonials.json) ================= */

export type Testimonial = {
  name: string;
  location: string;
  text: string;
};

export type TestimonialsData = {
  testimonials: Testimonial[];
};

/* ================= TEAM (team.json) ================= */

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export type TeamData = {
  members: TeamMember[];
};

/* ================= FEATURES (features.json) ================= */

export type Feature = {
  icon: IconName;
  title: string;
  description: string;
};

export type FeaturesData = {
  features: Feature[];
};

/* ================= HERO (hero.json) ================= */

export type HeroData = {
  slides: string[];
};

/* ================= BOOKING (booking.json) ================= */

export type BookingData = {
  packages: string[];
  locations: string[];
};
