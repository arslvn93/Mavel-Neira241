"use client";
import { boxHelpData } from "@/data/helpCenter";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import Image from "next/image";
import { Pagination } from "swiper/modules";
export default function HelpSection() {
  return (
    <div className="section-help style-1">
      <div className="tf-container-2">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-68 gap-33">
              <h2 className="title fw-5 split-text effect-right">
                <SplitTextAnimation text="See how Proty can help" />
              </h2>
              <p className="text-1 text-color-default split-text split-lines-transform">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet dapibus justo. Nam nec libero diam. <br />
                Pellentesque vel efficitur justo. Ut at ipsum turpis.
              </p>
            </div>
            <Swiper
              dir="ltr"
              className="swiper style-pagination sw-layout"
              spaceBetween={15}
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
                  spaceBetween: 32,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
              modules={[Pagination]}
              pagination={{
                el: ".spd5",
              }}
            >
              {boxHelpData.map((box) => (
                <SwiperSlide className="swiper-slide" key={box.id}>
                  <div
                    className="box-help wow animate__fadeInUp animate__animated"
                    data-wow-duration="1s"
                    data-wow-delay={box.delay}
                  >
                    <div className="img-style">
                      <Image
                        className="lazyload"
                        data-src={box.imageSrc}
                        alt=""
                        src={box.imageSrc}
                        width={592}
                        height={366}
                      />
                    </div>
                    <div className="content">
                      <h4 className="text_white mb-12">{box.title}</h4>
                      <p className="text-1 text_white">{box.description}</p>
                    </div>
                    <Link href={`/contact`} className="tf-btn">
                      <i className="icon-arrow-up-right" />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-pagination sw-pagination-layout text-center d-lg-none d-block mt-20 spd5" />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
