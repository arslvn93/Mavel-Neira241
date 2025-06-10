"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { properties } from "@/data/properties";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
export default function Properties() {
  return (
    <div className="section-listing tf-spacing-7 pt-0">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center gap-33 mb-55">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Discover best listing" />
              </h2>
              <p
                className="text-1 wow animate__fadeInUp animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet dapibus justo. Nam nec libero diam. <br />
                Pellentesque vel efficitur justo. Ut at ipsum turpis.
              </p>
            </div>
            <div
              className="swiper style-pagination tf-sw-mobile-1 sw-swiper-767"
              data-screen={767}
              data-preview={1}
              data-space={15}
            >
              <div className="swiper-wrapper tf-layout-mobile-md md-col-2 lg-col-3">
                {properties.map((property, i) => (
                  <div key={i} className="swiper-slide">
                    <div className="box-house hover-img style-6">
                      <div className="image-wrap">
                        <Link href={`/property-detail-v1/${property.id}`}>
                          <Image
                            className="lazyload"
                            alt=""
                            width={600}
                            height={401}
                            src={property.imageSrc}
                          />
                        </Link>
                        <ul className="box-tag flex gap-8">
                          <li className="flat-tag text-4 bg-main fw-6 text_white">
                            Featured
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
                        <h4 className="price">
                          ${property.price.toLocaleString()}
                        </h4>
                      </div>
                      <div className="content">
                        <h5 className="title">
                          <Link href={`/property-detail-v1/${property.id}`}>
                            {property.title}
                          </Link>
                        </h5>
                        <p className="location text-1 mb-0 flex items-center gap-6">
                          <i className="icon-location" /> {property.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="sw-pagination sw-pagination-mb-1 text-center d-lg-none d-block" />
            </div>
            <Swiper
              className="swiper style-pagination tf-sw-mobile-1 sw-swiper-767"
              spaceBetween={15}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd455",
              }}
            >
              {properties.map((property, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <div className="box-house hover-img style-6">
                    <div className="image-wrap">
                      <Link href={`/property-detail-v1/${property.id}`}>
                        <Image
                          className="lazyload"
                          alt=""
                          width={600}
                          height={401}
                          src={property.imageSrc}
                        />
                      </Link>
                      <ul className="box-tag flex gap-8">
                        <li className="flat-tag text-4 bg-main fw-6 text_white">
                          Featured
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
                      <h4 className="price">
                        ${property.price.toLocaleString()}
                      </h4>
                    </div>
                    <div className="content">
                      <h5 className="title">
                        <Link href={`/property-detail-v1/${property.id}`}>
                          {property.title}
                        </Link>
                      </h5>
                      <p className="location text-1 mb-0 flex items-center gap-6">
                        <i className="icon-location" /> {property.location}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-pagination sw-pagination-mb-1 text-center d-lg-none d-block spd455" />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
