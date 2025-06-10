"use client";
import { testimonials2 } from "@/data/testimonials";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function Testimonials() {
  return (
    <div className="section-testimonials tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-48">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="What Our Clients Say?" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                Here’s just a few reasons why homeowners are choosing Realty to
                sell their property.
              </p>
            </div>
            <Swiper
              dir="ltr"
              className="swiper sw-layout style-pagination"
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
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}
              modules={[Pagination, Navigation]}
              pagination={{
                el: ".spdt1",
              }}
              navigation={{
                prevEl: ".snbpt1",
                nextEl: ".snbnt1",
              }}
            >
              {testimonials2.map((testimonial) => (
                <SwiperSlide className="swiper-slide" key={testimonial.id}>
                  <div className="wg-testimonial style-4 text-center">
                    <div className="avatar">
                      <Image
                        alt=""
                        width={200}
                        height={200}
                        src={testimonial.avatar}
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
                      <p className="text-9 lh-20">{testimonial.location}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-wrap-btn  mt-48">
                <div className="swiper-button-prev sw-button nav-prev-layout snbpt1">
                  <i className="icon-arrow-left-3" />
                </div>
                <div className="sw-pagination sw-pagination-layout text-center spdt1" />
                <div className="swiper-button-next sw-button nav-next-layout snbnt1">
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
