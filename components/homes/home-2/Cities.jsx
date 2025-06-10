"use client";
import { locations } from "@/data/locations";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { Navigation, Pagination } from "swiper/modules";
export default function Cities() {
  return (
    <section className="section-neighborhoods style-2">
      <div className="tf-container full">
        <div className="row">
          <div className="col-12">
            <div className="heading-section mb-46 text-center">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Explore The Neighborhoods" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                vel lobortis justo
              </p>
            </div>
            <Swiper
              dir="ltr"
              className="swiper sw-layout style-pagination "
              spaceBetween={12}
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
              }}
              modules={[Pagination, Navigation]}
              pagination={{
                el: ".spd66666",
              }}
              navigation={{
                prevEl: ".snbp1234",
                nextEl: ".snbn1234",
              }}
            >
              {locations.map((location, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="box-location hover-img">
                    <div className="image-wrap">
                      <a href="#">
                        <Image
                          className="lazyload"
                          data-src={location.imageSrc}
                          alt={location.alt}
                          width={689}
                          height={467}
                          src={location.imageSrc}
                        />
                      </a>
                    </div>
                    <div className="content">
                      <h6 className="text_white">{location.city}</h6>
                      <a
                        href="#"
                        className="text-1 tf-btn style-border pd-23 text_white tf-btn style-border pd-23"
                      >
                        {location.propertiesCount}{" "}
                        <i className="icon-arrow-right" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-wrap-btn  mt-48">
                <div className="swiper-button-prev sw-button nav-prev-layout snbp1234">
                  <i className="icon-arrow-left-3" />
                </div>
                <div className="sw-pagination sw-pagination-layout text-center spd66666" />
                <div className="swiper-button-next sw-button nav-next-layout snbp1234">
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
