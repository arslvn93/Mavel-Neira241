"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function BrandSlider2() {
  const images = [
    "https://salesgenius.s3.ca-central-1.amazonaws.com/websiteimages/logos/RECO.png",
    "https://salesgenius.s3.ca-central-1.amazonaws.com/websiteimages/logos/treb_logo_white_1.png",
    "https://salesgenius.s3.ca-central-1.amazonaws.com/websiteimages/logos/realtor-logo-png-transparent_1.png",
    "https://salesgenius.s3.ca-central-1.amazonaws.com/websiteimages/logos/orea-logo_1.png",
    "https://salesgenius.s3.ca-central-1.amazonaws.com/websiteimages/logos/RECO.png",
    "https://salesgenius.s3.ca-central-1.amazonaws.com/websiteimages/logos/treb_logo_white_1.png",
    "https://salesgenius.s3.ca-central-1.amazonaws.com/websiteimages/logos/realtor-logo-png-transparent_1.png",
    "https://salesgenius.s3.ca-central-1.amazonaws.com/websiteimages/logos/orea-logo_1.png",
  ];

  return (
    <Swiper
      className="infiniteslide wrap-partners tf-spacing-7 pb-0"
      dir="ltr"
      spaceBetween={15}
      breakpoints={{
        0: { slidesPerView: 2 },
        575: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 7,
          spaceBetween: 30,
        },
      }}
      loop
      autoplay={{ delay: 1, pauseOnMouseEnter: true }}
      speed={2000}
      modules={[Autoplay]}
    >
      {images.map((src, index) => (
        <SwiperSlide
          key={index}
          className="marquee-item style-1"
        >
          <img src={src} alt={`Brand Logo ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
