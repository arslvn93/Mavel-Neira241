import React from "react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function Services() {
  return (
    <div className="section-help style-3 tf-spacing-7 pb-0">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center gap-30 mb-56">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Have a look at our services" />
              </h2>
              <p
                className="text-1 wow animate__fadeInUp animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                Our vision is to be the premier real estate company in New York,
                recognized for our unwavering commitment to <br />
                excellence, innovation, and community impact. We aspire to
                create lasting value for our clients, employees, and <br />
                the communities we serve.
              </p>
            </div>
            <div className="tf-grid-layout md-col-2 mb-6">
              <div
                className="icons-box style-3 wow animate__zoomIn animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                <div className="tf-icon">
                  <i className="icon-agent-2" />
                </div>
                <div className="content">
                  <h5 className="title">
                    <a href="#">Find the Best Agent for You</a>
                  </h5>
                  <p className="text-1">
                    Explore video tours, in-depth research, and articles on
                    20,000 neighborhoods. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                  <a href="#" className="tf-btn-link color-3">
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
              <div
                className="icons-box style-3 wow animate__zoomIn animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                <div className="tf-icon">
                  <i className="icon-location-4" />
                </div>
                <div className="content">
                  <h5 className="title">
                    <a href="#">Explore Great Neighborhoods</a>
                  </h5>
                  <p className="text-1">
                    Explore video tours, in-depth research, and articles on
                    20,000 neighborhoods. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                  <a href="#" className="tf-btn-link color-3">
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
              <div
                className="icons-box style-3 wow animate__zoomIn animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                <div className="tf-icon">
                  <i className="icon-house-1" />
                </div>
                <div className="content">
                  <h5 className="title">
                    <a href="#">Find highly rated apartments</a>
                  </h5>
                  <p className="text-1">
                    Explore video tours, in-depth research, and articles on
                    20,000 neighborhoods. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                  <a href="#" className="tf-btn-link color-3">
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
              <div
                className="icons-box style-3 wow animate__zoomIn animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                <div className="tf-icon">
                  <i className="icon-find-2" />
                </div>
                <div className="content">
                  <h5 className="title">
                    <a href="#">Search Recent Property Sales</a>
                  </h5>
                  <p className="text-1">
                    Explore video tours, in-depth research, and articles on
                    20,000 neighborhoods. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                  <a href="#" className="tf-btn-link color-3">
                    <span>Learn More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item text-center">
        <Image
          alt=""
          src="/images/section/section-help.png"
          width={1875}
          height={153}
        />
      </div>
    </div>
  );
}
