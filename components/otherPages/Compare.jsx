import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Compare() {
  return (
    <div className="tf-spacing-7 pt-0">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="tf-compare-table">
              <div className="tf-compare-row tf-compare-grid">
                <div className="tf-compare-col d-md-block d-none" />
                <div className="tf-compare-col">
                  <div className="tf-compare-item">
                    <Link className="tf-compare-image" href={`/product-detail`}>
                      <Image
                        className="lazyload"
                        data-src="/images/section/compare-1.jpg"
                        alt="img-compare"
                        width={220}
                        height={220}
                        src="/images/section/compare-1.jpg"
                      />
                    </Link>
                    <div className="tf-compare-content">
                      <Link
                        className="link text-title 1 h6 line-clamp-1"
                        href={`/product-detail`}
                      >
                        Elegant studio flat
                      </Link>
                      <div className="property-info">
                        <div className="price text-1 fw-5 text-color-heading">
                          $8.600
                        </div>
                        <p className="d-flex align-items-center gap-8">
                          <i className="icon-location text-color-default line-clamp-1" />
                          102 Ingraham St, Brooklyn, NY
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tf-compare-col">
                  <div className="tf-compare-item">
                    <Link className="tf-compare-image" href={`/product-detail`}>
                      <Image
                        className="lazyload"
                        data-src="/images/section/compare-2.jpg"
                        alt="img-compare"
                        width={220}
                        height={220}
                        src="/images/section/compare-2.jpg"
                      />
                    </Link>
                    <div className="tf-compare-content">
                      <Link
                        className="link text-title 1 h6 line-clamp-1"
                        href={`/product-detail`}
                      >
                        Elegant studio flat
                      </Link>
                      <div className="property-info">
                        <div className="price text-1 fw-5 text-color-heading">
                          $8.600
                        </div>
                        <p className="d-flex align-items-center gap-8">
                          <i className="icon-location text-color-default line-clamp-1" />
                          102 Ingraham St, Brooklyn, NY
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tf-compare-col">
                  <div className="tf-compare-item">
                    <Link className="tf-compare-image" href={`/product-detail`}>
                      <Image
                        className="lazyload"
                        data-src="/images/section/compare-3.jpg"
                        alt="img-compare"
                        width={220}
                        height={220}
                        src="/images/section/compare-3.jpg"
                      />
                    </Link>
                    <div className="tf-compare-content">
                      <Link
                        className="link text-title 1 h6 line-clamp-1"
                        href={`/product-detail`}
                      >
                        Elegant studio flat
                      </Link>
                      <div className="property-info">
                        <div className="price text-1 fw-5 text-color-heading">
                          $8.600
                        </div>
                        <p className="d-flex align-items-center gap-8">
                          <i className="icon-location text-color-default line-clamp-1" />
                          102 Ingraham St, Brooklyn, NY
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tf-compare-row">
                <div className="tf-compare-col tf-compare-field d-md-block d-none">
                  <h6>Feature</h6>
                </div>
                <div className="tf-compare-col tf-compare-field tf-compare-rate">
                  <div className="list-star">
                    <span className="icon icon-star" />
                    <span className="icon icon-star" />
                    <span className="icon icon-star" />
                    <span className="icon icon-star" />
                    <span className="icon icon-star" />
                  </div>
                  <span>(134 reviews)</span>
                </div>
                <div className="tf-compare-col tf-compare-field tf-compare-rate">
                  -
                </div>
                <div className="tf-compare-col tf-compare-field tf-compare-rate">
                  <div className="list-star">
                    <span className="icon icon-star" />
                    <span className="icon icon-star" />
                    <span className="icon icon-star" />
                    <span className="icon icon-star" />
                    <span className="icon icon-star" />
                  </div>
                  <span>(134 reviews)</span>
                </div>
              </div>
              <div className="tf-compare-row">
                <div className="tf-compare-col tf-compare-field d-md-block d-none">
                  <h6>Type</h6>
                </div>
                <div className="tf-compare-col tf-compare-field text-center">
                  <span className="">House, Townhouse, Villa</span>
                </div>
                <div className="tf-compare-col tf-compare-field text-center">
                  <span className="">Bungalow </span>
                </div>
                <div className="tf-compare-col tf-compare-field text-center">
                  <span className="">Bungalow </span>
                </div>
              </div>
              <div className="tf-compare-row">
                <div className="tf-compare-col tf-compare-field d-md-block d-none">
                  <h6>Status</h6>
                </div>
                <div className="tf-compare-col tf-compare-field text-center">
                  <span className="type">For Rent</span>
                </div>
                <div className="tf-compare-col tf-compare-field text-center">
                  <span className="type">For Sale </span>
                </div>
                <div className="tf-compare-col tf-compare-field text-center">
                  <span className="type">For Sale </span>
                </div>
              </div>
              <div className="tf-compare-row">
                <div className="tf-compare-col tf-compare-field d-md-block d-none">
                  <h6>Size</h6>
                </div>
                <div className="tf-compare-col tf-compare-field text-center">
                  1,500 m<sup className="size">2</sup>
                </div>
                <div className="tf-compare-col tf-compare-field text-center">
                  2,112 m<sup className="size">2</sup>
                </div>
                <div className="tf-compare-col tf-compare-field text-center">
                  900 m<sup className="size">2</sup>
                </div>
              </div>
              <div className="tf-compare-row">
                <div className="tf-compare-col tf-compare-field d-md-block d-none">
                  <h6>Land Area</h6>
                </div>
                <div className="tf-compare-col tf-compare-field text-center">
                  1,100 m<sup className="size">2</sup>
                </div>
                <div className="tf-compare-col tf-compare-field text-center">
                  -
                </div>
                <div className="tf-compare-col tf-compare-field text-center">
                  200 m<sup className="size">2</sup>
                </div>
              </div>
              <div className="tf-compare-row">
                <div className="tf-compare-col tf-compare-field d-md-block d-none">
                  <h6>Rooms</h6>
                </div>
                <div className="tf-compare-col tf-compare-field text-center">
                  <span>10</span>
                </div>
                <div className="tf-compare-col tf-compare-field text-center">
                  <span>6</span>
                </div>
                <div className="tf-compare-col tf-compare-field text-center">
                  <span>6</span>
                </div>
              </div>
              <div className="tf-compare-row">
                <div className="tf-compare-col tf-compare-field d-md-block d-none">
                  <h6>Bathrooms</h6>
                </div>
                <div className="tf-compare-col tf-compare-field text-center">
                  <span className="size">2</span>
                </div>
                <div className="tf-compare-col tf-compare-field text-center">
                  <span className="size">1</span>
                </div>
                <div className="tf-compare-col tf-compare-field text-center">
                  <span className="size">1</span>
                </div>
              </div>
              <div className="tf-compare-row">
                <div className="tf-compare-col tf-compare-field d-md-block d-none">
                  <h6>Garages Size</h6>
                </div>
                <div className="tf-compare-col tf-compare-field tf-compare-viewcart text-center">
                  1,100 m<sup className="size">2</sup>
                </div>
                <div className="tf-compare-col tf-compare-field tf-compare-viewcart text-center">
                  300 m<sup className="size">2</sup>
                </div>
                <div className="tf-compare-col tf-compare-field tf-compare-viewcart text-center">
                  200 m<sup className="size">2</sup>
                </div>
              </div>
              <div className="tf-compare-row">
                <div className="tf-compare-col tf-compare-field d-md-block d-none">
                  <h6>Year Built</h6>
                </div>
                <div className="tf-compare-col tf-compare-field tf-compare-viewcart text-center">
                  2022
                </div>
                <div className="tf-compare-col tf-compare-field tf-compare-viewcart text-center">
                  2023
                </div>
                <div className="tf-compare-col tf-compare-field tf-compare-viewcart text-center">
                  2017
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
