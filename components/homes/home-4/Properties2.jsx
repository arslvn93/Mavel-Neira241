"use client";
import { properties2 } from "@/data/properties";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
export default function Properties2() {
  return (
    <section className="section-best-sale tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-48">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Best Properties For Sale" />
              </h2>
              <p className="text-1 split-text split-text split-lines-transform">
                Thousands of luxury home enthusiasts just like you visit our
                website.
              </p>
            </div>
            <Swiper
              dir="ltr"
              className="swiper sw-layout style-pagination"
              spaceBetween={15}
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              modules={[Pagination, Navigation]}
              pagination={{
                el: ".spd12",
              }}
              navigation={{
                prevEl: ".snbp7",
                nextEl: ".snbn7",
              }}
            >
              {properties2.map((property) => (
                <SwiperSlide className="swiper-slide" key={property.id}>
                  <div className="box-house hover-img">
                    <div className="image-wrap">
                      <Link href={`/property-detail-v1/${property.id}`}>
                        <Image
                          className="lazyload"
                          data-src={property.imageSrc}
                          alt={property.alt}
                          width={property.width}
                          height={property.height}
                          src={property.imageSrc}
                        />
                      </Link>
                      <ul className="box-tag flex gap-8">
                        <li className="flat-tag text-4 bg-main fw-6 text_white">
                          Featured
                        </li>
                        <li className="flat-tag text-4 bg-3 fw-6 text_white">
                          For Sale
                        </li>
                      </ul>
                      <div className="list-btn flex gap-8">
                        <a href="#" className="btn-icon save hover-tooltip">
                          <i className="icon-save" />
                          <span className="tooltip">Add Favorite</span>
                        </a>
                        <a href="#" className="btn-icon find hover-tooltip">
                          <i className="icon-find-plus" />
                          <span className="tooltip">Quick View</span>
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <h5 className="title">
                        <Link href={`/property-detail-v1/${property.id}`}>
                          {property.title}
                        </Link>
                      </h5>
                      <p className="location text-1 flex items-center gap-6">
                        <i className="icon-location" /> {property.location}
                      </p>
                      <ul className="meta-list flex">
                        <li className="text-1 flex">
                          <span>{property.beds}</span>Beds
                        </li>
                        <li className="text-1 flex">
                          <span>{property.baths}</span>Baths
                        </li>
                        <li className="text-1 flex">
                          <span>{property.sqft}</span>Sqft
                        </li>
                      </ul>
                      <div className="bot flex justify-between items-center">
                        <h5 className="price">
                          ${property.price.toLocaleString()}
                        </h5>
                        <div className="wrap-btn flex">
                          <a
                            href="#"
                            className="compare flex gap-8 items-center text-1"
                          >
                            <i className="icon-compare" />
                            Compare
                          </a>
                          <Link
                            href={`/property-detail-v1/${property.id}`}
                            className="tf-btn style-border pd-4"
                          >
                            Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-wrap-btn  mt-48">
                <div className="swiper-button-prev sw-button nav-prev-layout snbp7">
                  <i className="icon-arrow-left-3" />
                </div>
                <div className="sw-pagination sw-pagination-layout text-center spd12" />
                <div className="swiper-button-next sw-button nav-next-layout snbn7">
                  <i className="icon-arrow-right-3" />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
