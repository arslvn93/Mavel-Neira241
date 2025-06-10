"use client";
import { slides } from "@/data/testimonials";
import React from "react";
import { EffectCards, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function Testimonials() {
  return (
    <div className="section-testimonials style-2 tf-spacing-8">
      <div className="tf-container">
        <div className="heading-section text-center gap-33 mb-48 testimonial-heading">
          <div className="title text-color-heading text-display-4 fw-5 split-text effect-right">
            <SplitTextAnimation text="What our customers says" />
          </div>
          <p
            className="text-1 text-color-default split-text split-lines-transform"
            data-wow-duration="1.5s"
            data-wow-delay="0s"
          >
            Our vision is to be the premier real estate company in New York,
            recognized for our unwavering <br />
            commitment to excellence, innovation, and community impact.
          </p>
        </div>
        <div className="relative">
          <Swiper
            dir="ltr"
            className="swiper sw-fipcard style-pagination "
            slidesPerView={1}
            initialSlide={1}
            effect={"cards"}
            grabCursor={true}
            centeredSlides
            cardsEffect={{
              slideShadows: false,

              perSlideOffset: 8,
              perSlideRotate: 10,
            }}
            modules={[EffectCards, Navigation, Pagination]}
            pagination={{
              el: ".spd26",
            }}
            navigation={{
              prevEl: ".snbp14",
              nextEl: ".snbn14",
            }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div className="wg-testimonial style-5 style-bg-white">
                  <p className="text-11 description text-color-default fw-3">
                    {slide.description}
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image alt="" width={51} height={51} src={slide.avatar} />
                    </div>
                    <div className="content">
                      <div className="name text-1">
                        <a href="#" className="text-color-heading link">
                          {slide.name}
                        </a>
                      </div>
                      <p className="text-color-heading-2">{slide.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Pagination */}
            <div className="sw-pagination sw-pagination-fipcard text-center mt-20 spd26" />
          </Swiper>
          <div className="swiper-button-prev sw-button sw-fipcard-prev md-hide snbp14">
            <i className="icon-arrow-left-3" />
          </div>
          <div className="swiper-button-next sw-button sw-fipcard-next md-hide snbn14">
            <i className="icon-arrow-right-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
