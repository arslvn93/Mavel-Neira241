import React from "react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function WelcomeSection() {
  return (
    <div className="text-with-img style-2">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="wrap-img relative">
              <div className="img-style main">
                <Image
                  className="lazyload"
                  data-src="/images/section/section-about-3.jpg"
                  alt=""
                  src="/images/section/section-about-3.jpg"
                  width={550}
                  height={481}
                />
              </div>
              <div className="img-style sub scroll-tranform">
                <Image
                  className="lazyload"
                  data-src="/images/section/section-about-4.jpg"
                  alt=""
                  src="/images/section/section-about-4.jpg"
                  width={290}
                  height={316}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content">
              <div className="heading-section mb-32 gap-30">
                <h2 className="title split-text effect-right fw-5">
                  <SplitTextAnimation text="Welcome to Proty" />
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
              <ul className="list d-flex flex-column gap-12 mb-32">
                <li
                  className="d-flex align-items-center text-1 fw-3 text-color-default gap-8 wow animate__fadeInUp animate__animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                  <i className="icon-check-cycle text-color-primary fs-24" />
                  Nam malesuada risus non tortor laoreet fringilla.
                </li>
                <li
                  className="d-flex align-items-center text-1 fw-3 text-color-default gap-8 wow animate__fadeInUp animate__animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.1s"
                >
                  <i className="icon-check-cycle text-color-primary fs-24" />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li
                  className="d-flex align-items-center text-1 fw-3 text-color-default gap-8 wow animate__fadeInUp animate__animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <i className="icon-check-cycle text-color-primary fs-24" />
                  Ut malesuada dolor convallis erat iaculis varius.
                </li>
                <li
                  className="d-flex align-items-center text-1 fw-3 text-color-default gap-8 wow animate__fadeInUp animate__animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                >
                  <i className="icon-check-cycle text-color-primary fs-24" />
                  Sed ultrices erat in nisi pulvinar tristique.
                </li>
              </ul>
              <a
                href="#"
                className="tf-btn bg-color-primary pd-4 rounded-cycle height-3 wow animate__fadeInUp animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                Explore our homes
                <i className="icon-arrow-up-right"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
