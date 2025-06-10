"use client";
import { testimonials2 } from "@/data/testimonials";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { Navigation, Pagination } from "swiper/modules";
export default function Testimonials() {
  return (
    <div className="section-testimonials">
      <div className="tf-container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-48">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="What Our Clients Say?" />
              </h2>
              <p
                className="text-1 wow animate__fadeInUp animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                Here’s just a few reasons why homeowners are choosing Realty to
                sell their property.
              </p>
            </div>
            <Swiper
              dir="ltr"
              className="swiper sw-layout style-pagination "
              spaceBetween={15}
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
                el: ".spd13",
              }}
              navigation={{
                prevEl: ".snbp8",
                nextEl: ".snbn8",
              }}
            >
              {testimonials2.map((elm, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <div className="wg-testimonial style-no-boder text-center">
                    <div className="avatar">
                      <Image alt="" width={200} height={200} src={elm.avatar} />
                    </div>
                    <p className="text-1 description">{elm.description}</p>
                    <div className="ratings justify-center">
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                    </div>
                    <div className="author">
                      <h6 className="name">
                        <a href="#">{elm.name}</a>
                      </h6>
                      <p className="text-9 lh-20">{elm.location}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="mb-58"></div>
              <div className="sw-wrap-btn">
                <div className="swiper-button-prev sw-button nav-prev-layout snbp8">
                  <i className="icon-arrow-left-3" />
                </div>
                <div className="sw-pagination sw-pagination-layout text-center spd13" />
                <div className="swiper-button-next sw-button nav-next-layout snbn8">
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
