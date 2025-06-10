import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <div className="tf-container-2">
      <div className="row">
        <div className="col-12">
          <div className="text-with-img style-1">
            <div className="left">
              <div className="heading-section mb-54 gap-33">
                <h2 className="title fw-5 split-text split-lines-transform">
                  We pride ourselves on our extensive market knowledge and
                  commitment to client satisfaction.
                </h2>
                <p
                  className="text-1 text-color-default wow animate__fadeInUp animate__animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                  At Proty, we're more than just a real estate company; we're
                  architects of dreams, crafting spaces where life flourishes
                  and businesses thrive. With a rich history spanning 12 years,
                  we've established ourselves as a trusted leader in the real
                  estate market, renowned for our unwavering commitment to
                  excellence, innovation, and client satisfaction.
                </p>
              </div>
              <div className="bot">
                <a
                  href="#"
                  className="tf-btn bg-color-primary rounded-cycle height-3 pd-15 wow animate__fadeInUp animate__animated"
                >
                  Explore our homes
                  <i className="icon-arrow-up-right" />
                </a>
                <div className="img-style lg-hide img-custom-anim-left wow">
                  <Image
                    className="lazyload"
                    data-src="/images/section/section-about-1.jpg"
                    alt=""
                    width={394}
                    height={366}
                    src="/images/section/section-about-1.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="right">
              <div className="img-style img-custom-anim-left wow">
                <Image
                  className="lazyload"
                  data-src="/images/section/section-about-2.jpg"
                  alt=""
                  width={790}
                  height={700}
                  src="/images/section/section-about-2.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
