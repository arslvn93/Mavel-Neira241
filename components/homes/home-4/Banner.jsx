import React from "react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function Banner() {
  return (
    <section className="section-appraisal style-2">
      <div className="wg-appraisal">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <div className="heading-section mb-32">
                  <h2 className="title split-text effect-right">
                    <SplitTextAnimation text="Are You Selling Or" />
                    <br />
                    <SplitTextAnimation text="Renting Your Property?" />
                  </h2>
                  <p
                    className="text-1 wow animate__fadeInUp animate__animated"
                    data-wow-duration="1.5s"
                    data-wow-delay="0s"
                  >
                    Thousands of luxury home enthusiasts just like you visit our
                    website.
                  </p>
                </div>
                <a
                  href="#"
                  className="tf-btn bg-color-primary pd-11 fw-7 wow animate__fadeInUp animate__animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                  Request your free appraisal
                </a>
                <div
                  className="person wow animate__fadeInRight animate__animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                  <Image
                    alt=""
                    width={366}
                    height={491}
                    src="/images/section/person-1.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
