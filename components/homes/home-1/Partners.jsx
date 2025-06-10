"use client";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import BrandSlider from "@/components/common/BrandSlider";
export default function Partners() {
  return (
    <section className="section-work-together ">
      <div className="wg-partner  tf-spacing-1">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="heading-section  text-center mb-48">
                <h2 className="title text_white split-text effect-right">
                  <SplitTextAnimation text="Let’s Work Together" />
                </h2>
                <p
                  className="text-1 text_white wow animate__fadeInUp animate__animated"
                  data-wow-duration="1.5s"
                >
                  Thousands of luxury home enthusiasts just like you visit our
                  website.
                </p>
              </div>
              <BrandSlider />
            </div>
          </div>
        </div>
      </div>
      <div className="wg-appraisal ">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <div className="heading-section mb-30">
                  <h2 className="title split-text effect-right">
                    <SplitTextAnimation text="Are You Selling Or" />
                    <br />
                    <SplitTextAnimation text="Renting Your Property?" />
                  </h2>
                  <p
                    className="text-1 split-text split-lines-transform"
                    data-wow-duration="1.5s"
                  >
                    Thousands of luxury home enthusiasts just like you visit our
                    website.
                  </p>
                </div>
                <a href="#" className="tf-btn bg-color-primary fw-7 pd-11">
                  Request your free appraisal
                </a>
                <div
                  className="person wow animate__fadeInRight animate__animated"
                  data-wow-duration="2s"
                >
                  <Image
                    alt=""
                    src="/images/section/person-1.png"
                    width={366}
                    height={491}
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
