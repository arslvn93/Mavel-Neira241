// Removed Brands import
import Cta from "@/components/common/Cta";
import About from "@/components/contact/About";
import Contact from "@/components/contact/Contact";
import Footer2 from "@/components/footers/Footer2"; // Changed to Footer2
import Header6 from "@/components/headers/Header6";
import React from "react";
import { siteContent } from "@/data/siteContent"; // Import centralized content

export const metadata = {
  title: `Contact ${siteContent.agent.name} | ${siteContent.agent.name} - ${siteContent.agent.title}`,
  description: `Get in touch with ${siteContent.agent.name} for your ${siteContent.agent.location} real estate needs.`,
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <Header6 />
        <div className="main-content">
          <Contact />
          <About />
          {/* Removed Brands component */}
          <Cta />
        </div>
        <Footer2 />
      </div>
    </>
  );
}