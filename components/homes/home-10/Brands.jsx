import BrandSlider from "@/components/common/BrandSlider";
import React from "react";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function Brands() {
  return (
    <div className="tf-spacing-7">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-40">
              <h4 className="title text-color-heading fw-5 split-text effect-right">
                <SplitTextAnimation text="We are trusted by leading company" />
              </h4>
              <p className="text-1 text-color-default split-text split-lines-transform">
                We offer a comprehensive suite of real estate services, catering
                to a diverse <br />
                clientele with varied needs and aspirations.
              </p>
            </div>
            <BrandSlider parentClass="infiniteslide wrap-partners" />
          </div>
        </div>
      </div>
    </div>
  );
}
