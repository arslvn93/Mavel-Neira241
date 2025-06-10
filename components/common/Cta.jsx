import React from "react";
import Image from "next/image";
import { siteContent } from "@/data/siteContent"; // Import centralized content
export default function Cta() {
  return (
    <section className="section-CTA">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="content-inner">
              <Image
                alt=""
                src={siteContent.agent.headshotNoBgImageSrc} // Use centralized no-bg headshot path
                width={432}
                height={624}
              />
              <div className="content">
                <h4 className="text_white mb-8">
                  {`Looking for a ${siteContent.agent.location} Real Estate Expert?`}
                </h4>
                <p className="text_white text-1">
                  {siteContent.common.ctaDescription}
                </p>
              </div>
              <a href="/contact" className="tf-btn style-2 fw-6">
                {`Contact ${siteContent.agent.firstName} Today`}
                <i className="icon-MagnifyingGlass fw-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
