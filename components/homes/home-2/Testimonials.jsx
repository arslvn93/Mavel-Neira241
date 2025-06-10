"use client";
import { testimonials } from "@/data/testimonials";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { Navigation, Pagination } from "swiper/modules";
export default function Testimonials() {
  return (
    <div className="section-testimonials tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-48">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Clients Testimonials" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                Thousands of luxury home enthusiasts just like you visit our
                website.
              </p>
            </div>
            <Swiper
              dir="ltr"
              className="swiper sw-layout style-pagination "
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              modules={[Pagination, Navigation]}
              pagination={{
                el: ".spd8",
              }}
              navigation={{
                prevEl: ".snbp3",
                nextEl: ".snbn3",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="wg-testimonial text-center">
                    <div className="avatar">
                      <Image
                        alt=""
                        width={200}
                        height={200}
                        src={testimonial.avatarSrc}
                      />
                    </div>
                    <p className="text-1 description">
                      {testimonial.description}
                    </p>
                    <div className="ratings justify-center">
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                    </div>
                    <div className="author">
                      <h6 className="name">
                        <a href="#">{testimonial.name}</a>
                      </h6>
                      <p className="text-2">{testimonial.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-wrap-btn mt-48">
                <div className="swiper-button-prev sw-button nav-prev-layout snbp3">
                  <i className="icon-arrow-left-3" />
                </div>
                <div className="sw-pagination sw-pagination-layout text-center spd8" />
                <div className="swiper-button-next sw-button nav-next-layout snbn3">
                  <i className="icon-arrow-right-3" />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
