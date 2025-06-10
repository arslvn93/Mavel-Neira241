import Image from "next/image";
import React from "react";
import { siteContent } from "@/data/siteContent"; // Import centralized content

export default function Cta() {
  return (
    <section className="section-CTA style-2 tf-spacing-1">
      <div className="tf-container">
        <div className="row relative">
          <div className="col-12">
            <div className="content-inner">
              <div className="content">
                <div className="logo">
                  {/* Replaced Image with styled text */}
                  {/* Note: This might need a Link wrapper if it should link home */}
                  <span className="text-logo">{siteContent.agent.name}</span>
                </div>
                <div className="heading-section mb-30">
                  <h2 className="title text_white split-text effect-right">
                    {`Looking for a ${siteContent.agent.location} Real Estate Expert?`}
                  </h2>
                  <p
                    className="text-1 text_white wow animate__fadeInUp animate__animated"
                    data-wow-duration="1s"
                    data-wow-delay="0s"
                  >
                    {siteContent.common.ctaDescription}
                  </p>
                </div>
                <a
                  href="/contact"
                  className="tf-btn style-2 fw-6 pd-25 wow animate__fadeInUp animate__animated"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  {`Contact ${siteContent.agent.firstName} Today`}
                  <i className="icon-MagnifyingGlass fw-6" />
                </a>
              </div>
            </div>
            <div
              className="person wow animate__fadeInRight animate__animated"
              data-wow-duration="1s"
              data-wow-delay="0s"
            >
              <Image
                alt=""
                width={346}
                height={499}
                src={siteContent.agent.headshotNoBgImageSrc} // Use centralized no-bg headshot path
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
