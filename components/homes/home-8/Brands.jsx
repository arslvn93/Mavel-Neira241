import BrandSlider from "@/components/common/BrandSlider";
import React from "react";

export default function Brands() {
  return (
    <div className="tf-container">
      <div className="row">
        <div className="col-12">
          <BrandSlider parentClass="infiniteslide wrap-partners" />
        </div>
      </div>
    </div>
  );
}
