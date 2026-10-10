import type { ReactNode } from "react";
import type {
  AboutUsVariant,
  BlogsVariant,
  BookingVariant,
  ContactVariant,
  CtaVariant,
  FaqVariant,
  HeroVariant,
  PortfolioVariant,
  ServicesVariant,
  TeamVariant,
  TestimonialsVariant,
  WhyChooseUsVariant,
} from "@/types";

import Aboutus from "./Aboutus";
import BlogList from "./BlogList";
import BookingForm from "./BookingForm";
import ContactUs from "./ContactUs";
import Faq from "./Faq";
import FeatursAbout from "./FeatursAbout";
import Hero from "./Hero";
import LetsCreatetogether from "./Letscreatetogether";
import News from "./News";
import OurcoreTeams from "./OurcoreTeams";
import OurFeatures from "./OurFeatures";
import PortfolioGrid from "./PortfolioGrid";
import Services from "./Services";
import TestMonial from "./Testmonial";

type Render = (data: unknown, props: Record<string, unknown>) => ReactNode;

/*
  Component names used in category.json -> templateComponents.pages.
  Detail sections (service, blog, portfolio) need the current item, so their
  pages pass them in as slots instead (see PageSections).
*/
export const sectionRegistry: Record<string, Render> = {
  PhotographyHero1: (data) => <Hero data={data as HeroVariant} />,
  PhotographyAboutUs1: (data) => <Aboutus data={data as AboutUsVariant} />,
  PhotographyServices1: (data, props) => (
    <Services data={data as ServicesVariant} showAll={props.showAll === true} />
  ),
  /* Home page layout of "Why Choose Us" */
  PhotographyWhyChooseUs1: (data) => (
    <OurFeatures data={data as WhyChooseUsVariant} />
  ),
  /* About page layout of "Why Choose Us" */
  PhotographyWhyChooseUs2: (data) => (
    <FeatursAbout data={data as WhyChooseUsVariant} />
  ),
  PhotographyTestimonials1: (data) => (
    <TestMonial data={data as TestimonialsVariant} />
  ),
  /* Home page: slider of the latest posts */
  PhotographyBlogs1: (data) => <News data={data as BlogsVariant} />,
  /* Blog page: all posts with pagination */
  PhotographyBlogs2: (data, props) => (
    <BlogList
      data={data as BlogsVariant}
      subtitle={typeof props.subtitle === "string" ? props.subtitle : undefined}
    />
  ),
  PhotographyPortfolio1: (data) => (
    <PortfolioGrid data={data as PortfolioVariant} />
  ),
  PhotographyCta1: (data) => <LetsCreatetogether data={data as CtaVariant} />,
  PhotographyTeam1: (data) => <OurcoreTeams data={data as TeamVariant} />,
  PhotographyFaq1: (data) => <Faq data={data as FaqVariant} />,
  PhotographyContact1: (data) => <ContactUs data={data as ContactVariant} />,
  PhotographyBooking1: (data) => <BookingForm data={data as BookingVariant} />,
};
