import React from "react";
import DropdownSelect from "../common/DropdownSelect";
import Image from "next/image";

export default function PageTitle() {
  return (
    <section className="flat-title style-3">
      <div className="title-inner">
        <div className="heading-section text-center gap-24">
          <div className="title split-text effect-right text-display-3 text-color-heading">
            Our best project
          </div>
          <p className="text-1">
            Our best projects are not just buildings; they are testaments to our
            dedication to creating <br />
            spaces that inspire, connect, and endure
          </p>
        </div>
      </div>
      <div className="tf-spacing-12">
        <div className="relative">
          <div className="img-style">
            <Image
              className="lazyload"
              data-src="/images/section/banner-6.jpg"
              alt=""
              src="/images/section/banner-6.jpg"
              width={1888}
              height={656}
            />
          </div>
          <div className="wg-filter style-4 relative z-31">
            <div className="form-title">
              <DropdownSelect
                options={[
                  "Status",
                  "Bungalow",
                  "Apartment",
                  "House",
                  "Smart Home",
                  "Office",
                ]}
              />
              <div className="line" />

              <DropdownSelect
                options={[
                  "Property Type",
                  "Bungalow",
                  "Apartment",
                  "House",
                  "Smart Home",
                  "Office",
                ]}
              />
              <div className="line" />
              <DropdownSelect
                options={[
                  "Baths",
                  "Floating baths",
                  "Massage baths",
                  "Floor-standing bath",
                  "Built-in baths",
                ]}
              />

              <div className="line" />
              <DropdownSelect
                options={[
                  "Beds",
                  "Twin beds",
                  "Bunk beds",
                  "Kids beds",
                  "Single bed",
                ]}
              />
              <div className="wrap-btn">
                <a href="#" className="tf-btn bg-color-primary pd-3 fw-6">
                  Search <i className="icon-MagnifyingGlass fw-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
