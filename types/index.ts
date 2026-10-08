
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

export type SocialPlatform =
  | "facebook"
  | "twitter"
  | "instagram"
  | "pinterest"
  | "dribbble";

export type LinkItem = {
  id: string;
  label: string;
  url: string;
};

export type Button = {
  text: string;
  url: string;
};

export type ImageRef = {
  src: string;
  alt: string;
};

/* Section heading: title1 + titleScript (gold script font) */
export type SectionHeading = {
  subtitle: string;
  title1: string;
  titleScript: string;
};

/* Description with a bold phrase: lead **highlight** end */
export type HighlightedDescription = {
  descriptionLead: string;
  descriptionHighlight: string;
  descriptionEnd: string;
};

/* ================= COMMON ================= */

export type ContactInfo = {
  addressLine1: string;
  addressLine2: string;
  phone: string;
  phoneUrl: string;
  email: string;
};

export type FooterData = {
  logo: string;
  logoAlt: string;
  tagline: string;
  bgImage: string;
  description: string;
  quickLinksTitle: string;
  quickLinks: LinkItem[];
  servicesTitle: string;
  servicesLinks: LinkItem[];
  getInTouchTitle: string;
  addressTitle: string;
  phoneTitle: string;
  emailTitle: string;
  copyrightText: string;
};

/* Page banner shown at the top of inner pages */
export type Breadcrumb = {
  title: string;
  bgImage: string;
};

export type CommonData = {
  contactInfo: ContactInfo;
  Footer: FooterData;
  [breadcrumbKey: `${string}Breadcrumb`]: Breadcrumb;
};

/* ================= SECTION VARIANTS ================= */

export type HeaderVariant = {
  logo: string;
  logoAlt: string;
  navLinks: LinkItem[];
  bookingButton: Button;
};

export type HeroVariant = {
  subtitle: string;
  title1: string;
  titleScript: string;
  title2: string;
  /* Lines are joined with a line break on larger screens */
  description: string[];
  slides: string[];
  button: Button;
};

export type AboutUsVariant = SectionHeading & {
  title2: string;
  descriptions: string[];
  button: Button;
  image: string;
  imageAlt: string;
};

export type Feature = {
  id: string;
  icon: IconName;
  title: string;
  description: string;
};

export type Stat = {
  id: string;
  icon: IconName;
  value: string;
  label: string;
  /* true = gold card, false = dark card */
  highlight: boolean;
};

export type WhyChooseUsVariant = SectionHeading & {
  description: string;
  features: Feature[];
  mainImage: ImageRef;
  smallImage: ImageRef;
  stats: Stat[];
  infoCard: {
    subtitle: string;
    titleLines: string[];
    description: string;
    button: Button;
  };
};

export type Service = {
  id: string;
  slug: string;
  number: string;
  title: string;
  /* Title split over two lines on the service cards */
  titleLines: string[];
  /* Longer text on the service cards */
  description: string;
  /* Shorter text in the "Other Services" sidebar */
  shortDescription: string;
  cardImage: string;
  image: string;
  thumb: string;
};

export type ServicesVariant = SectionHeading &
  HighlightedDescription & {
    services: Service[];
  };

export type ServiceDetailVariant = {
  intro: string;
  stepsTitle: string;
  stepsIntro: string;
  steps: string[];
  outro: string;
  sidebarTitle1: string;
  sidebarTitle2: string;
  /* Order of the "Other Services" sidebar */
  sidebarOrder: string[];
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
};

export type TestimonialsVariant = SectionHeading & {
  description: string[];
  testimonials: Testimonial[];
};

export type BlogPost = {
  id: string;
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

export type BlogDetailContent = {
  introImage: string;
  mainImage: ImageRef;
  bottomImage: ImageRef;
  conceptsTitle: string;
  bodyText: string;
  concepts: string[];
};

export type BlogsVariant = SectionHeading &
  HighlightedDescription & {
    blogs: BlogPost[];
    /* Shared body content shown on every blog detail page */
    detail: BlogDetailContent;
  };

export type PortfolioItem = {
  id: string;
  slug: string;
  title: string;
  image: string;
};

export type PortfolioVariant = SectionHeading & {
  description: string[];
  items: PortfolioItem[];
};

export type ProjectInfoRow = {
  icon: IconName;
  label: string;
  value: string;
};

export type PortfolioProject = {
  client: string;
  headingScript: string;
  coverImage: string;
  info: ProjectInfoRow[];
  /* Client rating out of 5 */
  rating: number;
  gear: { brand: string; model: string }[];
  bodyText: string;
  concepts: string[];
  gallery: string[];
};

export type PortfolioDetailVariant = {
  detailsTitle1: string;
  detailsTitle2: string;
  ratingLabel: string;
  conceptTitle: string;
  galleryTitle: string;
  /* Shared project details shown on every portfolio detail page */
  project: PortfolioProject;
};

export type CtaVariant = SectionHeading & {
  description: string;
  button: Button;
  bgImage: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
};

export type TeamVariant = SectionHeading &
  HighlightedDescription & {
    members: TeamMember[];
  };

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqVariant = SectionHeading & {
  description: string;
  groupTitle: string;
  /* Each group is numbered from 01 */
  faqGroups: FaqItem[][];
  image: string;
  card: {
    image: ImageRef;
    title: string;
    description: string;
  };
};

export type SocialLink = {
  id: string;
  icon: SocialPlatform;
  label: string;
  url: string;
};

export type ContactVariant = SectionHeading & {
  description: string;
  successMessage: string;
  form: {
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    topicPlaceholder: string;
    topics: string[];
    messagePlaceholder: string;
    requiredNote: string;
    buttonText: string;
  };
  infoCard: {
    subtitle: string;
    title1: string;
    titleScript: string;
    description: string;
    addressTitle: string;
    phoneTitle: string;
    emailTitle: string;
    followTitle: string;
  };
  socialLinks: SocialLink[];
  images: {
    photo: ImageRef;
    photoMobile: string;
    sketch: string;
  };
  /* Google Maps query (address or "lat,lng") and zoom: 5 = country, 14 = street */
  map: { query: string; zoom: number };
};

export type BookingVariant = SectionHeading & {
  description: string;
  image: string;
  form: {
    subtitle: string;
    title: string;
    description: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    addressPlaceholder: string;
    servicePlaceholder: string;
    packagePlaceholder: string;
    packages: string[];
    locations: string[];
    buttonText: string;
    successMessage: string;
  };
};

/* ================= CATEGORY ================= */

export type CategorySections = {
  Header: { variants: Record<string, HeaderVariant> };
  Hero: { variants: Record<string, HeroVariant> };
  AboutUs: { variants: Record<string, AboutUsVariant> };
  WhyChooseUs: { variants: Record<string, WhyChooseUsVariant> };
  Services: { variants: Record<string, ServicesVariant> };
  ServiceDetail: { variants: Record<string, ServiceDetailVariant> };
  Testimonials: { variants: Record<string, TestimonialsVariant> };
  Blogs: { variants: Record<string, BlogsVariant> };
  Portfolio: { variants: Record<string, PortfolioVariant> };
  PortfolioDetail: { variants: Record<string, PortfolioDetailVariant> };
  Cta: { variants: Record<string, CtaVariant> };
  Team: { variants: Record<string, TeamVariant> };
  Faq: { variants: Record<string, FaqVariant> };
  Contact: { variants: Record<string, ContactVariant> };
  Booking: { variants: Record<string, BookingVariant> };
};

export type SectionName = keyof CategorySections;

/* One section on a page. `component` picks the React component (see
   app/components/sectionRegistry.tsx); `variant` picks its data and
   defaults to the component name. */
export type PageComponent = {
  key: string;
  component: string;
  variant?: string;
  props?: Record<string, unknown>;
};

export type PageKey =
  | "home"
  | "about"
  | "services"
  | "serviceDetail"
  | "blog"
  | "blogDetail"
  | "portfolio"
  | "portfolioDetail"
  | "booking"
  | "faq"
  | "contact";

export type TemplateComponents = {
  shared: {
    Header: string;
    Footer: string;
  };
  pages: Record<PageKey, { components: PageComponent[] }>;
};

export type Category = {
  sections: CategorySections;
  templateComponents: TemplateComponents;
};

export type SiteData = {
  common: CommonData;
  categories: {
    Photography: Category;
  };
};
