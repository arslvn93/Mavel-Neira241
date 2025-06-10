import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FloorLayout() {
  return (
    <div className="tf-spacing-7">
      <div className="box-home-layout">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-6 left">
              <div className="heading mb-32">
                <h2 className="title text-color-heading fw-5 mb-30">
                  Home layout
                </h2>
                <p className="description text-1 text-color-default">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris id risus est. Ut efficitur dignissim ante, nec bibendum
                  odio ullamcorper ut. Vivamus condimentum gravida condimentum.
                  Aliquam placerat pharetra cursus. Maecenas malesuada ultrices
                  rhoncus. Aenean ornare scelerisque venenatis.
                </p>
              </div>
              <div className="info d-flex mb-54">
                <div className="item">
                  <span className="number text-display-4 fw-2 text-color-heading">
                    4
                  </span>
                  <div className="box-icon d-flex gap-8 align-items-center">
                    <i className="icon-bed-4" />
                    <span className="text-color-default text-1">Beds</span>
                  </div>
                </div>
                <div className="item">
                  <span className="number text-display-4 fw-2 text-color-heading">
                    3
                  </span>
                  <div className="box-icon d-flex gap-8 align-items-center">
                    <i className="icon-baths" />
                    <span className="text-color-default text-1">Baths</span>
                  </div>
                </div>
                <div className="item">
                  <span className="number text-display-4 fw-2 text-color-heading">
                    1,484
                  </span>
                  <div className="box-icon d-flex gap-8 align-items-center">
                    <div>
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 7.33333V3.33333C14 2.97971 13.8595 2.64057 13.6095 2.39052C13.3594 2.14048 13.0203 2 12.6667 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H7.33333"
                          stroke="#5C5E61"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14 14L8 8"
                          stroke="#5C5E61"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14 10V14H10"
                          stroke="#5C5E61"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-color-default text-1">sqft</span>
                  </div>
                </div>
              </div>
              <ul className="list-info">
                <li>
                  <span className="text-1 text-color-heading fw-6">Floors</span>
                  <p className="text-1 text-color-heading">2</p>
                </li>
                <li>
                  <span className="text-1 text-color-heading fw-6">Garage</span>
                  <p className="text-1 text-color-heading">1</p>
                </li>
                <li>
                  <span className="text-1 text-color-heading fw-6">
                    Ceiling height
                  </span>
                  <p className="text-1 text-color-heading">3m</p>
                </li>
                <li>
                  <span className="text-1 text-color-heading fw-6">Pool</span>
                  <p className="text-1 text-color-heading">1</p>
                </li>
                <li>
                  <span className="text-1 text-color-heading fw-6">Garden</span>
                  <p className="text-1 text-color-heading">5m</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 right">
              <div className="wg-property single-property-floor mb-30">
                <ul className="box-floor" id="parent-floor">
                  <li className="floor-item mb-11">
                    <div
                      role="button"
                      className="floor-header"
                      data-bs-target="#floor-one"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="floor-one"
                    >
                      <div className="inner-left">
                        <i className="icon icon-CaretDown" />
                        <span className="text-btn">First Floor</span>
                      </div>
                      <ul className="inner-right">
                        <li className="flex items-center gap-8">
                          <i className="icon icon-beds-3" />2 Bedroom
                        </li>
                        <li className="flex items-center gap-8">
                          <i className="icon icon-baths" />2 Bathroom
                        </li>
                      </ul>
                    </div>
                    <div
                      id="floor-one"
                      className="collapse show"
                      data-bs-parent="#parent-floor"
                    >
                      <div className="faq-body">
                        <div className="box-img">
                          <Image
                            alt="img-floor"
                            src="/images/section/floor.jpg"
                            width={712}
                            height={501}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="floor-item">
                    <div
                      className="floor-header collapsed"
                      role="button"
                      data-bs-target="#floor-two"
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="floor-two"
                    >
                      <div className="inner-left">
                        <i className="icon icon-CaretDown" />
                        <span className="text-btn">Second Floor</span>
                      </div>
                      <ul className="inner-right">
                        <li className="flex items-center gap-8">
                          <i className="icon icon-beds-3" />2 Bedroom
                        </li>
                        <li className="flex items-center gap-8">
                          <i className="icon icon-baths" />2 Bathroom
                        </li>
                      </ul>
                    </div>
                    <div
                      id="floor-two"
                      className="collapse"
                      data-bs-parent="#parent-floor"
                    >
                      <div className="faq-body">
                        <div className="box-img">
                          <Image
                            alt="img-floor"
                            src="/images/section/floor.jpg"
                            width={712}
                            height={501}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <Link
                href={`/contact`}
                className="tf-btn pd-15 style-border height-3 rounded-cycle"
              >
                Download floor plans
                <i className="icon-arrow-up-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
