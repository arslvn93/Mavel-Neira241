import React from "react";
import { siteContent } from "@/data/siteContent"; // Import centralized content
// Removed ThemeController import
import Footer2 from "@/components/footers/Footer2";
import Header6 from "@/components/headers/Header6";
import Hero6 from "@/components/homes/home-6/Hero";
import About6 from "@/components/homes/home-6/About";
import Services6 from "@/components/homes/home-6/Services";
import Projects6 from "@/components/homes/home-6/Projects";
import Team6 from "@/components/homes/home-6/Team";
import Testimonials6 from "@/components/homes/home-6/Testimonials";
import Blogs6 from "@/components/homes/home-6/Blogs";
import Contact6 from "@/components/homes/home-6/Contact";
// Removed AppraisalBanner import

export const metadata = {
  title: `${siteContent.agent.name} - ${siteContent.agent.title}`,
  description: `${siteContent.agent.name}, your trusted realtor for buying and selling homes in ${siteContent.agent.location}. ${siteContent.agent.experienceYears} years of local experience.`, // Construct description dynamically
};

export default function HomePage() {
  return (
    <>
      {/* ThemeController moved to layout.jsx */}
      <div id="wrapper" className="bg-body-1 counter-scroll">
        <Header6 />
        <Hero6 />
        {/* Removed AppraisalBanner component */}
        <About6 />
        <Services6 />
        <Projects6 />
        <Team6 />
        <Testimonials6 />
        <Blogs6 />
        <Contact6 />
        <Footer2 />
      </div>
    </>
  );
}