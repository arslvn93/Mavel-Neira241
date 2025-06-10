"use client";
import { galleryImages } from "@/data/gallery";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { Pagination } from "swiper/modules";
import Cursor from "../../common/Cursor";
export default function PropertyGallery() {
  return (
    <div className="section-gallery tf-spacing-7">
      <div className="tf-container-2">
        <div className="row">
          <div className="col-12">
            <div className="heading-section mb-53 justify-content-between d-flex flex-row mb-55">
              <div className="left">
                <h2 className="title split-text effect-right mb-32">
                  <SplitTextAnimation text="Explore our gallery" />
                </h2>
                <p className="text-1 split-text split-lines-transform">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  sit amet dapibus justo. Nam nec libero diam. <br />
                  Pellentesque vel efficitur justo. Ut at ipsum turpis.
                </p>
              </div>
              <div className="right">
                <a
                  href="#"
                  className="tf-btn bg-color-primary rounded-cycle height-3 pd-25 wow animate__fadeInUp animate__animated"
                >
                  See all agent
                  <i className="icon-arrow-up-right" />
                </a>
              </div>
            </div>
            <Swiper
              dir="ltr"
              className="swiper sw-layout style-pagination area-cursor-custom"
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
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
              }}
              modules={[Pagination]}
              pagination={{
                el: ".spd20",
              }}
            >
              {galleryImages.map((image) => (
                <SwiperSlide key={image.id} className="swiper-slide">
                  <div className="slide-inner">
                    <Image
                      className="lazyload"
                      data-src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      src={image.src}
                    />
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-wrap-btn d-md-none mt-20">
                <div className="sw-pagination sw-pagination-layout text-center d-block spd20" />
              </div>
              <Cursor />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
