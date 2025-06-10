import React from "react";
import Image from "next/image";
export default function VirtualTour() {
  return (
    <>
      <div className="wg-title text-11 fw-6 text-color-heading">
        360 Virtual Tour
      </div>
      <div className="image-wrap">
        <Image
          alt=""
          src="/images/section/property-detail-2.jpg"
          width={792}
          height={439}
        />
        <div className="box-icon">
          <div className="icons">
            <i className="icon-360" />
          </div>
        </div>
      </div>
    </>
  );
}
