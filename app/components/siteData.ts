/* ================================================= */
/* SHARED CONTENT FOR SERVICES, BLOG & PORTFOLIO */
/* ================================================= */

export const scriptFont = {
  fontFamily: '"Segoe Script", "Brush Script MT", cursive',
};

/* ================= CONTACT DETAILS ================= */
/* Default contact details used across the website */

export const contactDetails = {
  email: "info@xyz.com",
  phone: "+1 00000000",
  phoneHref: "tel:+100000000",
  addressLine1: "1234 Main Street, Suite 100",
  addressLine2: "Springfield, IL 62701, USA",
  mapQuery: "1234 Main Street, Springfield, IL 62701, USA",
};

/* ================= SERVICES ================= */

export type ServiceItem = {
  slug: string;
  number?: string;
  title: string;
  description: string;
  image: string;
  thumb: string;
};

export const serviceItems: ServiceItem[] = [
  {
    slug: "wedding-photography",
    number: "01",
    title: "Wedding Photography",
    description: "Beautifully capturing your special day with timeless memories.",
    image: "/Home/WeddingPhotography.png",
    thumb: "/ServiceDetail/WeddingThumb.png",
  },
  {
    slug: "drone-cinematography",
    number: "02",
    title: "Drone Cinematography",
    description: "Stunning aerial shots to make your events look extraordinary.",
    image: "/Home/DroneCinematography.png",
    thumb: "/Home/DroneCinematography.png",
  },
  {
    slug: "wedding-cinematography",
    number: "03",
    title: "Wedding Cinematography",
    description: "Cinematic films that tell the story of your cherished moments.",
    image: "/Home/WeddingCinematography.png",
    thumb: "/Home/WeddingCinematography.png",
  },
  {
    slug: "personal-portfolio",
    number: "04",
    title: "Portrait Photography",
    description: "Creative and professional portraits for every occasion.",
    image: "/Home/PersonalPortfolioShoot.png",
    thumb: "/ServiceDetail/PortraitThumb.png",
  },
  {
    slug: "product-photography",
    title: "Product Photography",
    description: "High-quality product shots to make your brand stand out.",
    image: "/Portfolio/Product.png",
    thumb: "/ServiceDetail/ProductThumb.png",
  },
  {
    slug: "event-photography",
    title: "Event Photography",
    description: "Covering all your important events with creativity.",
    image: "/Portfolio/Event.png",
    thumb: "/ServiceDetail/EventThumb.png",
  },
  {
    slug: "studio-photography",
    title: "Studio Photography",
    description: "Professional studio sessions with perfect lighting and style.",
    image: "/ServiceDetail/StudioPhotography.png",
    thumb: "/Portfolio/Studio.png",
  },
];

export function findService(slug: string) {
  return serviceItems.find(
    (service) => service.slug === slug || service.number === slug,
  );
}

/* ================= BLOG ================= */

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

export const blogPosts: BlogPost[] = [
  {
    slug: "beginners-guide-to-photography",
    date: "25 SEP 2023",
    fullDate: "September 25, 2023",
    titleLead: "Beginners guide to start your",
    titleScript: "photography journey",
    author: "Ashton William",
    avatar: "/Home/Avatar-1.jpg",
    image: "/Home/GoldenHourPhotographer.png",
    category: "Photography",
    views: "1.3K Views",
  },
  {
    slug: "twenty-photography-tips",
    date: "22 SEP 2023",
    fullDate: "September 22, 2023",
    titleLead: "Twenty photography tips to make",
    titleScript: "photos amazing",
    author: "Olivia Rose",
    avatar: "/Home/Avatar-2.jpg",
    image: "/Home/CanonDSLR.png",
    category: "Tips",
    views: "980 Views",
  },
  {
    slug: "norway-best-photography-spots",
    date: "22 SEP 2023",
    fullDate: "September 22, 2023",
    titleLead: "What Norway is best spots",
    titleScript: "For Photography",
    author: "Justin Burke",
    avatar: "/Home/Avatar-2.jpg",
    image: "/Home/SunsetMountain.png",
    category: "Travel",
    views: "2.1K Views",
  },
  {
    slug: "essential-editing-tips",
    date: "18 SEP 2023",
    fullDate: "September 18, 2023",
    titleLead: "Essential editing tips to",
    titleScript: "enhance your photos",
    author: "Emma Clarke",
    avatar: "/Home/Avatar-1.jpg",
    image: "/Home/WarmPhotography.png",
    category: "Editing",
    views: "1.1K Views",
  },
  {
    slug: "planning-your-wedding-shoot",
    date: "12 SEP 2023",
    fullDate: "September 12, 2023",
    titleLead: "How to plan a stress-free",
    titleScript: "wedding shoot",
    author: "Ashton William",
    avatar: "/Home/Avatar-1.jpg",
    image: "/Home/WeddingPhotography.png",
    category: "Wedding",
    views: "1.7K Views",
  },
  {
    slug: "drone-shots-for-events",
    date: "08 SEP 2023",
    fullDate: "September 8, 2023",
    titleLead: "Why drone shots make every",
    titleScript: "event special",
    author: "Justin Burke",
    avatar: "/Home/Avatar-2.jpg",
    image: "/Home/DroneCinematography.png",
    category: "Cinematography",
    views: "860 Views",
  },
  {
    slug: "portrait-posing-guide",
    date: "02 SEP 2023",
    fullDate: "September 2, 2023",
    titleLead: "A simple posing guide for",
    titleScript: "natural portraits",
    author: "Olivia Rose",
    avatar: "/Home/Avatar-2.jpg",
    image: "/Home/PersonalPortfolioShoot.png",
    category: "Portrait",
    views: "1.4K Views",
  },
  {
    slug: "cinematic-wedding-films",
    date: "28 AUG 2023",
    fullDate: "August 28, 2023",
    titleLead: "Telling love stories through",
    titleScript: "cinematic films",
    author: "Emma Clarke",
    avatar: "/Home/Avatar-1.jpg",
    image: "/Home/WeddingCinematography.png",
    category: "Cinematography",
    views: "1.2K Views",
  },
  {
    slug: "golden-hour-lighting",
    date: "21 AUG 2023",
    fullDate: "August 21, 2023",
    titleLead: "Making the most of",
    titleScript: "golden hour light",
    author: "Ashton William",
    avatar: "/Home/Avatar-1.jpg",
    image: "/Portfolio/Outdoor.png",
    category: "Lighting",
    views: "2.4K Views",
  },
  {
    slug: "newborn-photography-tips",
    date: "15 AUG 2023",
    fullDate: "August 15, 2023",
    titleLead: "Gentle tips for your first",
    titleScript: "newborn session",
    author: "Olivia Rose",
    avatar: "/Home/Avatar-2.jpg",
    image: "/Portfolio/Newborn.png",
    category: "Newborn",
    views: "940 Views",
  },
  {
    slug: "styling-a-fashion-shoot",
    date: "09 AUG 2023",
    fullDate: "August 9, 2023",
    titleLead: "Styling ideas for a bold",
    titleScript: "fashion shoot",
    author: "Emma Clarke",
    avatar: "/Home/Avatar-1.jpg",
    image: "/Portfolio/Fashion.png",
    category: "Fashion",
    views: "1.5K Views",
  },
  {
    slug: "product-photography-at-home",
    date: "02 AUG 2023",
    fullDate: "August 2, 2023",
    titleLead: "Shooting beautiful product",
    titleScript: "photos at home",
    author: "Justin Burke",
    avatar: "/Home/Avatar-2.jpg",
    image: "/Portfolio/Product.png",
    category: "Product",
    views: "780 Views",
  },
];

export function findBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

/* ================= PORTFOLIO ================= */

export type PortfolioItem = {
  slug: string;
  title: string;
  image: string;
};

export const portfolioItems: PortfolioItem[] = [
  { slug: "studio-photography", title: "Studio Photography", image: "/Portfolio/Studio.png" },
  { slug: "wedding-photography", title: "Wedding Photography", image: "/Portfolio/Wedding.png" },
  { slug: "newborn-photography", title: "Newborn Photography", image: "/Portfolio/Newborn.png" },
  { slug: "indoor-photography", title: "Indoor Photography", image: "/Portfolio/Indoor.png" },
  { slug: "outdoor-photography", title: "Outdoor Photography", image: "/Portfolio/Outdoor.png" },
  { slug: "fashion-photography", title: "Fashion Photography", image: "/Portfolio/Fashion.png" },
  { slug: "lifestyle-photography", title: "Lifestyle Photography", image: "/Portfolio/Lifestyle.png" },
  { slug: "product-photography", title: "Product Photography", image: "/Portfolio/Product.png" },
  { slug: "event-photography", title: "Event Photography", image: "/Portfolio/Event.png" },
];

export function findPortfolioItem(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}
