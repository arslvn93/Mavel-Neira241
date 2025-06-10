"use client";
import { locations2 } from "@/data/locations";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { Navigation, Pagination } from "swiper/modules";
export default function Locations() {
  return (
    <section className="section-categories-neighborhoods tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-48">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Explore Property Categories" />
              </h2>
              <p
                className="text-1 wow animate__fadeInUp animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                We connect you directly to the person that knows the most about
                a property for sale, the <br />
                listing agent.
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
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              modules={[Pagination, Navigation]}
              pagination={{
                el: ".spd10",
              }}
              navigation={{
                prevEl: ".snbp5",
                nextEl: ".snbn5",
              }}
            >
              {locations2.map((location) => (
                <SwiperSlide className="swiper-slide" key={location.id}>
                  <div className="box-location h-450 hover-img">
                    <div className="image-wrap">
                      <a href="#">
                        <Image
                          className="lazyload"
                          data-src={location.imageSrc}
                          alt={location.alt}
                          width={location.width}
                          height={location.height}
                          src={location.imageSrc}
                        />
                      </a>
                    </div>
                    <div className="content">
                      <h6 className="text_white">{location.title}</h6>
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

              <div className="sw-wrap-btn mt-48">
                <div className="swiper-button-prev sw-button nav-prev-layout snbp5">
                  <i className="icon-arrow-left-3" />
                </div>
                <div className="sw-pagination sw-pagination-layout text-center spd10" />
                <div className="swiper-button-next sw-button nav-next-layout snbn5">
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
