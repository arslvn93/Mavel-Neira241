// Removed Breadcumb import
import Footer2 from "@/components/footers/Footer2"; // Changed to Footer2
import Header6 from "@/components/headers/Header6";
import Cta from "@/components/otherPages/faq/Cta";
import Faqs from "@/components/otherPages/faq/Faqs";

import React from "react";
import { siteContent } from "@/data/siteContent"; // Import centralized content

export const metadata = {
  title: `FAQ | ${siteContent.agent.name} - ${siteContent.agent.title}`,
  description: `Frequently asked questions about working with ${siteContent.agent.name}, ${siteContent.agent.title}.`,
};

export default function page() {
  return (
    <>
      <div id="wrapper" className="counter-scroll">
        <Header6 />
        {/* Removed Breadcumb */}
        <div className="main-content tf-spacing-6 header-fixed" style={{ paddingTop: '50px' }}>
          <Faqs />
          <Cta />
        </div>
        <Footer2 />
      </div>
    </>
  );
}