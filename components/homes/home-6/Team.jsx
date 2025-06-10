"use client";

import { siteContent } from "@/data/siteContent"; // Import centralized content
// Removed agents import
// Removed Swiper imports
import Link from "next/link";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
// Removed Swiper imports
export default function Team() {
  return (
    <div className="section-box-team style-1 section-style style-border-top tf-spacing-7">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center gap-33 mb-55">
              <div className="title text-display-4 text_white split-text effect-right">
                <SplitTextAnimation text={`About ${siteContent.agent.name}`} />
              </div>
              <p
                className="text-1 text-color1 wow animate__fadeInUp animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                {`Your trusted guide for buying and selling in ${siteContent.agent.location}.`}
              </p>
            </div>
            {/* Removed Swiper wrapper and map loop, added centering div */}
            <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '400px', margin: '0 auto 38px' }}>
                  {/* Removed SwiperSlide wrapper, using siteContent.agent directly */}
                  <div
                    className="agent-item style-4 hover-img wow animate__fadeInRight animate__animated"
                    // data-wow-delay={agent.delay} // Removed delay as it's not in siteContent.agent
                  >
                    <div className="image-wrap">
                      <Link href={`/contact`}> {/* Changed link to /contact */}
                        <Image
                          className="lazyload"
                          alt=""
                          width={400}
                          height={494}
                          src={siteContent.agent.headshotImageSrc} // Use centralized headshot path
                        />
                      </Link>
                      <div className="list-social">
                        <a href="#">
                          <i className="icon-fb" />
                        </a>
                        <a href="#">
                          <i className="icon-X" />
                        </a>
                        <a href="#">
                          <i className="icon-linked" />
                        </a>
                        <a href="#">
                          <i className="icon-ins" />
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="text-11 fw-6">
                        <Link
                          href={`/contact`} // Changed link to /contact
                          className="text_white link"
                        >
                          {siteContent.agent.name}
                        </Link>
                      </div>
                      <p className="text-1 text-color1">{`Your ${siteContent.agent.location} Realtor - ${siteContent.agent.experienceYears} Years Experience`}</p>
                    </div>
                  </div>
                  {/* Removed SwiperSlide closing tag */}
            </div> {/* Closing centering div */}
            {/* Removed Swiper pagination div */}
            <a
              href="/contact"
              className="tf-btn bg-color-primary height-1 pd-25 rounded-cycle mx-auto btn-border"
            >
              {siteContent.aboutMike.buttonText} <i className="icon-arrow-right-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
