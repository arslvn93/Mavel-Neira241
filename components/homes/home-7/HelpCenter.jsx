"use client";
import { slides } from "@/data/helpCenter";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { Pagination } from "swiper/modules";
export default function HelpCenter() {
  return (
    <div className="section-help style-1 tf-spacing-7">
      <div className="tf-container-2">
        <div className="row">
          <div className="col-12">
            <div className="heading-section mb-68 gap-32">
              <h2 className="title fw-5 split-text effect-right">
                <SplitTextAnimation text="See how Proty can help" />
              </h2>
              <p
                className="text-1 text-color-default wow animate__fadeInUp animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet dapibus justo. Nam nec libero diam. <br />
                Pellentesque vel efficitur justo. Ut at ipsum turpis.
              </p>
            </div>
            <Swiper
              dir="ltr"
              className="swiper style-pagination sw-layout"
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 32,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              modules={[Pagination]}
              pagination={{
                el: ".spd19",
              }}
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id} className="swiper-slide">
                  <div className="box-help hover-image-2">
                    <div className="img-style">
                      <Image
                        className="lazyload"
                        data-src={slide.imageSrc}
                        alt=""
                        width={592}
                        height={366}
                        src={slide.imageSrc}
                      />
                    </div>
                    <div className="content">
                      <h4 className="mb-12">
                        <a href="#" className="text_white link">
                          {slide.title}
                        </a>
                      </h4>
                      <p className="text-1 text_white">{slide.description}</p>
                    </div>
                    {/* Hardcoded link */}
                    <Link href={`/contact`} className="tf-btn">
                      <i className="icon-arrow-up-right" />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-pagination sw-pagination-layout text-center d-lg-none d-block mt-20 spd19" />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
