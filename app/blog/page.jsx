import Blogs2 from "@/components/blogs/Blogs2";

// Removed Breadcumb import
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2"; // Changed to Footer2
import Header6 from "@/components/headers/Header6";
import React from "react";
import { siteContent } from "@/data/siteContent"; // Import centralized content

export const metadata = {
  title: `Blog | ${siteContent.agent.name} - ${siteContent.agent.title}`,
  description: `Real estate insights and ${siteContent.agent.location} market updates from ${siteContent.agent.name}.`,
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <Header6 />
        <div className="main-content" style={{ paddingTop: '50px' }}>
          {/* Removed Breadcumb */}
          <Blogs2 />
          <Cta />
        </div>
        <Footer2 />
      </div>
    </>
  );
}