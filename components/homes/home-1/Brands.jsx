import BrandSlider from "@/components/common/BrandSlider";
import React from "react";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function Brands() {
  return (
    <section className="section-work-together style-2 tf-spacing-1 pb-0">
      <div className="wg-partner">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="heading-section text-center mb-48">
                <h2 className="title split-text effect-right">
                  <SplitTextAnimation text="Let’s Work Together" />
                </h2>
                <p className="text-1">
                  Thousands of luxury home enthusiasts just like you visit our
                  website.
                </p>
              </div>
              <BrandSlider parentClass="infiniteslide wrap-partners" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
