"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Cursor from "../common/Cursor";
import Image from "next/image";

const galleryImages = [
  "/images/section/gallery-7.jpg",
  "/images/section/gallery-8.jpg",
  "/images/section/gallery-9.jpg",
  "/images/section/gallery-10.jpg",
];
export default function Gallery() {
  return (
    <>
      <div className="box-photo-gallery">
        <div className="heading-section mb-56 text-center">
          <h2 className="title split-text effect-right">Photo gallery</h2>
        </div>

        <Swiper
          dir="ltr"
          className="swiper sw-layout style-pagination area-cursor-custom"
          centeredSlides
          loop
          initialSlide={1}
          spaceBetween={15}
          breakpoints={{
            0: { slidesPerView: 1 },
            575: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 1.49,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: 1.49,
              spaceBetween: 24,
            },
          }}
          modules={[Pagination]}
          pagination={{
            el: ".spd20",
          }}
        >
          {galleryImages.map((src, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="slide-inner">
                <Image
                  className="lazyload"
                  data-src={src}
                  alt=""
                  src={src}
                  width="1280"
                  height="720"
                />
              </div>
            </SwiperSlide>
          ))}

          <div className="sw-wrap-btn d-md-none mt-20">
            <div className="sw-pagination sw-pagination-layout text-center d-block spd20" />
          </div>
          <Cursor />
        </Swiper>
      </div>{" "}
    </>
  );
}
