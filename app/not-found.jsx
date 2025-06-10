// Removed Breadcumb import
import Cta from "@/components/common/Cta";
import Footer2 from "@/components/footers/Footer2"; // Changed to Footer2
import Header6 from "@/components/headers/Header6";
import Link from "next/link";
import React from "react";
import { siteContent } from "@/data/siteContent"; // Import centralized content

export const metadata = {
  title: `Page Not Found | ${siteContent.agent.name} - ${siteContent.agent.title}`,
  description: `The requested page was not found on ${siteContent.agent.name}'s website.`,
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <Header6 />
        <div className="main-content " style={{ paddingTop: '50px' }}>
          {/* Removed Breadcumb */}
          <div className="page-content">
            <div className="tf-container tf-spacing-1 pt-0">
              <div className="error-404 text-center">
                <h1 className="mb-20 title">Oh no... We lost this page</h1>
                <p className="mb-40">
                  {/* Using siteContent for the message */}
                  <span dangerouslySetInnerHTML={{ __html: siteContent.notFound.message }} />
                </p>
                <Link
                  href={"/"}
                  className="tf-btn bg-color-primary rounded-4 pd-3 fw-6 mx-auto"
                >
                  Back to home
                </Link>
              </div>
            </div>
          </div>
          <Cta />
        </div>

        <Footer2 />
      </div>
    </>
  );
}