"use client";
import { properties3 } from "@/data/properties";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { Pagination } from "swiper/modules";
export default function Properties() {
  return (
    <div className="tf-spacing-9">
      <div className="tf-container-3">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-57 gap-30">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Explore the latest property listings" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                Proin auctor, mauris at tristique ullamcorper, nunc nisi
                sagittis velit, eget blandit dolor arcu sed ante. Fusce
                <br />
                euismod varius massa, id viverra nisl semper ut.
              </p>
            </div>
            <Swiper
              dir="ltr"
              className="swiper sw-layout style-pagination mb-44"
              spaceBetween={15}
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              modules={[Pagination]}
              pagination={{
                el: ".spd22",
              }}
            >
              {properties3.map((slide, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div
                    className="box-house hover-img style-7 wow animate__fadeInUp animate__animated"
                    data-wow-duration="1.5s"
                    data-wow-delay={slide.delay}
                  >
                    <div className="image-wrap">
                      <Link href={`/property-detail-v1/${slide.id}`}>
                        <Image
                          className="lazyload"
                          data-src={slide.imageSrc}
                          alt=""
                          src={slide.imageSrc}
                          width={slide.width}
                          height={slide.height}
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
                      <ul className="status flex gap-8">
                        <li className="flat-tag text-4 bg-3 fw-6 text_white">
                          <i className="icon-img" />7
                        </li>
                        <li className="flat-tag text-4 bg-3 fw-6 text_white">
                          <i className="icon-view-2" />2
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
                        <Link href={`/property-detail-v1/${slide.id}`}>
                          {slide.title}
                        </Link>
                      </h5>
                      <p className="location text-1 flex items-center gap-6">
                        <i className="icon-location" /> {slide.location}
                      </p>
                      <div className="d-flex justify-between flex-wrap gap-8">
                        <div className="tag text-1 lh-20">
                          <i className="icon-file" />
                          Studio
                        </div>
                        <ul className="meta-list flex">
                          <li className="text-1 flex">
                            <i className="icon-bed-4" />
                            <span>3</span>
                          </li>
                          <li className="text-1 flex">
                            <i className="icon-bath-1" />
                            <span>3</span>
                          </li>
                          <li className="text-1 flex">
                            <i className="icon-sqft-1" />
                            <span>4,043</span>Sqft
                          </li>
                        </ul>
                      </div>
                      <div className="bot d-flex justify-between flex-wrap gap-8 align-items-center">
                        <h5 className="price">
                          ${slide.price.toLocaleString()}
                        </h5>
                        <p className="text-color-note">{slide.date}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-pagination sw-pagination-layout text-center spd22" />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
