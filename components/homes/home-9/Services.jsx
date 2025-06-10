"use client";
import { serviceData } from "@/data/services";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { Pagination } from "swiper/modules";
export default function Services() {
  return (
    <div className="section-service style-1 tf-spacing-7">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-58 gap-32">
              <h2 className="title split-text effect-right fw-5">
                <SplitTextAnimation text="Have a look at our services" />
              </h2>
              <p className="text-1 text-color-default split-text split-lines-transform">
                Our vision is to be the premier real estate company in New York,
                recognized for our unwavering commitment to
                <br />
                excellence, innovation, and community impact. We aspire to
                create lasting value for our clients, employees, and <br />
                the communities we serve.
              </p>
            </div>
            <Swiper
              dir="ltr"
              className="swiper sw-layout mb_38 style-pagination"
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
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
              modules={[Pagination]}
              pagination={{
                el: ".spd25",
              }}
            >
              {serviceData.map((service) => (
                <SwiperSlide className="swiper-slide" key={service.id}>
                  <div
                    className="service-item style-2 hover-img effec-icon wow animate__fadeInUp animate__animated"
                    data-wow-duration="1s"
                    data-wow-delay={service.wowDelay}
                  >
                    <div className="heading d-flex">
                      <div className="icon">
                        <i className={service.icon} />
                      </div>
                      <div className="text-11 text-color-heading fw-6">
                        {service.title}
                      </div>
                    </div>
                    <div className="img-style">
                      <Image
                        className="lazyload"
                        data-src={service.imageSrc}
                        alt=""
                        src={service.imageSrc}
                        width={336}
                        height={240}
                      />
                    </div>
                    <p className="text-1 text-color-default">
                      {service.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-pagination sw-pagination-layout text-center mt-20 spd25" />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
