"use client";
import { testimonials5 } from "@/data/testimonials";
import React from "react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div className="section-testimonials style-4 tf-spacing-10">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-56 gap-32">
              <h2 className="title">Customer Reviews</h2>
              <p className="text-1 split-text split-lines-transform">
                We are committed to building long-term relationships with our
                clients based on trust and integrity.
              </p>
            </div>
            <div className="tf-grid-layout md-col-3 wrap home-8-testimonials">
              <Swiper
                dir="ltr"
                direction="vertical"
                className="infiniteslide autoplay-linear d-none d-md-block slider-1"
                data-clone={1}
                data-style="up"
                slidesPerView={"auto"}
                spaceBetween={30}
                slidesPerGroupAuto
                loop
                autoplay={{
                  pauseOnMouseEnter: true,
                  delay: 1,
                }} // Equivalent to data-autoplay & data-autoplaytime
                speed={5000} // Equivalent to data-speed
                modules={[Autoplay]}
              >
                {testimonials5.map((testimonial, index) => (
                  <SwiperSlide className="wg-testimonial style-2" key={index}>
                    <div className="ratings">
                      {/* Render stars based on the rating */}
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i className="icon-star" key={i} />
                      ))}
                    </div>
                    <p className="text-1 description">
                      {testimonial.description}
                    </p>
                    <div className="author">
                      <div className="avatar">
                        <Image
                          alt=""
                          src={testimonial.avatar}
                          width={testimonial.width}
                          height={testimonial.height}
                        />
                      </div>
                      <div className="content">
                        <h6 className="name">
                          <a href="#">{testimonial.name}</a>
                        </h6>
                        <p className="text-2">{testimonial.role}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                dir="ltr"
                direction="vertical"
                className="infiniteslide autoplay-linear slider-2"
                data-clone={1}
                data-style="up"
                slidesPerView={"auto"}
                spaceBetween={30}
                loop
                slidesPerGroupAuto
                autoplay={{
                  pauseOnMouseEnter: true,
                  delay: 1,

                  reverseDirection: true,
                }} // Equivalent to data-autoplay & data-autoplaytime
                speed={5000} // Equivalent to data-speed
                modules={[Autoplay]}
              >
                {testimonials5.map((testimonial, index) => (
                  <SwiperSlide className="wg-testimonial style-2" key={index}>
                    <div className="ratings">
                      {/* Render stars based on the rating */}
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i className="icon-star" key={i} />
                      ))}
                    </div>
                    <p className="text-1 description">
                      {testimonial.description}
                    </p>
                    <div className="author">
                      <div className="avatar">
                        <Image
                          alt=""
                          src={testimonial.avatar}
                          width={testimonial.width}
                          height={testimonial.height}
                        />
                      </div>
                      <div className="content">
                        <h6 className="name">
                          <a href="#">{testimonial.name}</a>
                        </h6>
                        <p className="text-2">{testimonial.role}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                dir="ltr"
                direction="vertical"
                className="infiniteslide autoplay-linear"
                data-clone={1}
                data-style="up"
                slidesPerView={"auto"}
                spaceBetween={30}
                slidesPerGroupAuto
                loop
                autoplay={{
                  pauseOnMouseEnter: true,
                  delay: 1,
                }} // Equivalent to data-autoplay & data-autoplaytime
                speed={5000} // Equivalent to data-speed
                modules={[Autoplay]}
              >
                {testimonials5.map((testimonial, index) => (
                  <SwiperSlide className="wg-testimonial style-2" key={index}>
                    <div className="ratings">
                      {/* Render stars based on the rating */}
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i className="icon-star" key={i} />
                      ))}
                    </div>
                    <p className="text-1 description">
                      {testimonial.description}
                    </p>
                    <div className="author">
                      <div className="avatar">
                        <Image
                          alt=""
                          src={testimonial.avatar}
                          width={testimonial.width}
                          height={testimonial.height}
                        />
                      </div>
                      <div className="content">
                        <h6 className="name">
                          <a href="#">{testimonial.name}</a>
                        </h6>
                        <p className="text-2">{testimonial.role}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
