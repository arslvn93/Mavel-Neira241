import OdometerComponent from "@/components/common/OdometerComponent";
// Removed facts import
import Image from "next/image";
import React from "react";
import { siteContent } from "@/data/siteContent"; // Import centralized content

export default function Facts() {
  return (
    <section className="section-box-team tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content-inner">
              <div className="heading-section mb-48">
                <h2
                  className="title wow animate__fadeInUp animate__animated"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  {siteContent.loanProcess.factsTitle}
                </h2>
              </div>
              <div
                className="content mb-48 wow animate__fadeInUp animate__animated"
                data-wow-duration="1s"
                data-wow-delay="0s"
              >
                <p className="text-1 description-1 mb-14">
                  {siteContent.loanProcess.factsDescription1}
                </p>
                <p className="description-2 text-1 mb-24">
                  {`I stand ready to serve you as your dedicated ${siteContent.agent.location} real estate agent.`}
                </p>
                <a
                  href="/contact"
                  className="tf-btn bg-color-primary fw-7 pd-12 wow animate__fadeInUp animate__animated"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  {`About ${siteContent.agent.name}`}
                </a>
              </div>
              <div className="wrap-counter">
                {/* Refactored counters - Note: Original data had 3 items, siteContent plan only specified labels for 2 + properties sold */}
                {/* Counter 1: Clients Served */}
                <div className="counter-item style-2">
                  <div className="count">
                    <div className="icons"><i className="icon-user-2" /></div> {/* Example icon */}
                    <div className="counter-number">
                      <div className="odometer style-2 style-2-1"><OdometerComponent max={250} /></div> {/* Placeholder value */}
                      <span className="sub plus">+</span>
                    </div>
                    <p className="text-4">{siteContent.loanProcess.factsCounter1Label}</p>
                  </div>
                </div>
                 {/* Counter 2: Years Experience */}
                 <div className="counter-item style-2">
                  <div className="count">
                    <div className="icons"><i className="icon-HouseLine" /></div> {/* Changed icon */}
                    <div className="counter-number">
                      <div className="odometer style-2 style-2-1"><OdometerComponent max={siteContent.agent.experienceYears} /></div>
                      <span className="sub plus">+</span>
                    </div>
                    <p className="text-4">{siteContent.loanProcess.factsCounter2Label}</p>
                  </div>
                </div>
                 {/* Counter 3: Properties Sold */}
                 <div className="counter-item style-2">
                  <div className="count">
                    <div className="icons"><i className="icon-house" /></div> {/* Example icon */}
                    <div className="counter-number">
                      <div className="odometer style-2 style-2-1"><OdometerComponent max={3600} /></div> {/* Placeholder value */}
                       {/* Removed subNumber logic for simplicity */}
                    </div>
                    <p className="text-4">{siteContent.loanProcess.factsCounter3Label}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="wrap-image">
              <div
                className="image-wrap img-1 hover-img-wrap wow animate__zoomIn animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                <Image
                  className="lazyload parallax-img"
                  data-src="/images/section/section-box-team.jpg"
                  alt=""
                  width={400}
                  height={509}
                  src="/images/section/section-box-team.jpg"
                />
              </div>
              <div
                className="image-wrap img-2 hover-img-wrap wow animate__zoomIn animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                <Image
                  className="lazyload parallax-img"
                  alt=""
                  width={400}
                  height={509}
                  src={siteContent.agent.headshotImageSrc} // Use centralized headshot path
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
