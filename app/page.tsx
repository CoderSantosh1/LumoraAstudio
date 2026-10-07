"use client"
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Aboutus from "@/app/components/Aboutus";
import Services from "@/app/components/Services";
import OurFeatures from "@/app/components/OurFeatures";
import TestMonial from "@/app/components/Testmonial";
import News from "@/app/components/News";
import Footer from "@/app/components/Footer"

export default function Home() {
  return (
   <>
   <Hero />
  <Aboutus />
  <Services />
  <OurFeatures />
  <TestMonial />
  <News />
   </>
  );
}
