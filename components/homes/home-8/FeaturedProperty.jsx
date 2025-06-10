import React from "react";
import Image from "next/image";
export default function FeaturedProperty() {
  return (
    <div className="tf-spacing-7">
      <div className="text-with-form style-1 relative">
        <div className="swiper sw-single">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Image
                className="lazyload"
                data-src="/images/section/banner-2.jpg"
                alt=""
                src="/images/section/banner-2.jpg"
                width={1888}
                height={871}
              />
            </div>
            <div className="swiper-slide">
              <Image
                className="lazyload"
                data-src="/images/section/banner-3.jpg"
                alt=""
                src="/images/section/banner-3.jpg"
                width={1888}
                height={871}
              />
            </div>
          </div>
        </div>
        <div className="content">
          <div>
            <div className="heading mb-32">
              <div className="title text-13 text-color-heading fw-5 mb-12">
                Nextgen riverside 152
              </div>
              <p className="location text-1 flex items-center gap-8 line-clamp-1">
                <i className="icon-location-5" /> 102 Ingraham St, Brooklyn, NY
                11237
              </p>
            </div>
            <div className="info d-flex mb-48">
              <div className="item">
                <span className="number text-15 fw-2 text-color-heading">
                  4
                </span>
                <div className="box-icon d-flex gap-8 align-items-center">
                  <i className="icon-bed-4" />
                  <span className="text-color-default text-1">Beds</span>
                </div>
              </div>
              <div className="item">
                <span className="number text-15 fw-2 text-color-heading">
                  3
                </span>
                <div className="box-icon d-flex gap-8 align-items-center">
                  <i className="icon-baths" />
                  <span className="text-color-default text-1">Baths</span>
                </div>
              </div>
              <div className="item">
                <span className="number text-15 fw-2 text-color-heading">
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
            <div className="d-flex justify-content-between align-items-center gap-12 flex-wrap">
              <div className="price text-15 fw-2 text-color-heading">
                $1,250,000
              </div>
              <a
                href="#"
                className="tf-btn pd-26 style-border height-3 rounded-cycle"
              >
                Details
                <i className="icon-arrow-up-right" />
              </a>
            </div>
          </div>
          <div>
            <div className="info-agent mb-48">
              <div className="avatar">
                <Image
                  alt="avatar"
                  src="/images/avatar/avatar-7.jpg"
                  width={128}
                  height={128}
                />
              </div>
              <div className="info">
                <div className="name text-11 text-color-heading">
                  Marvin McKinney
                </div>
                <p className="text-1 text-color-default">Local agent</p>
              </div>
            </div>
            <a href="#" className="tf-btn w-full bg-color-secondary btn-main">
              <span className="text_white text-14 fw-7">Request a tour</span>
              <span className="text_white fw-3">
                Earliest at 11:00 tomorrow
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
