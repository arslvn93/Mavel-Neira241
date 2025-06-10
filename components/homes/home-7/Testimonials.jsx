"use client";
import { testimonials4 } from "@/data/testimonials";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { Navigation, Pagination } from "swiper/modules";
export default function Testimonials() {
  useEffect(() => {
    const multiplier = {
      translate: 0.1,
      rotate: 0.01,
    };
    const calculateWheel = () => {
      const slides = document.querySelectorAll(".single");
      slides.forEach((slide, i) => {
        const rect = slide.getBoundingClientRect();
        const r = window.innerWidth * 0.5 - (rect.x + rect.width * 0.5);
        let ty =
          Math.abs(r) * multiplier.translate -
          rect.width * multiplier.translate;

        if (ty < 0) {
          ty = 0;
        }
        const transformOrigin = r < 0 ? "left top" : "right top";
        slide.style.transform = `translate(0, ${ty}px) rotate(${
          -r * multiplier.rotate
        }deg)`;
        slide.style.transformOrigin = transformOrigin;
      });
    };

    const raf = () => {
      requestAnimationFrame(raf);
      calculateWheel();
    };

    raf();
  }, []);

  return (
    <div className="section-testimonials style-3 tf-spacing-7">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center gap-32 mb-56">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="What our customers says" />
              </h2>
              <p
                className="text-1 wow animate__fadeInUp animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                We are committed to building long-term relationships with our
                clients based on trust and integrity.
              </p>
            </div>
            <Swiper
              dir="ltr"
              className="swiper categorySlider style-pagination "
              initialSlide={3}
              loop
              centeredSlides
              spaceBetween={10}
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 1,
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
                el: ".spd21",
              }}
              navigation={{
                prevEl: ".snbp12",
                nextEl: ".snbn12",
              }}
            >
              {testimonials4.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="swiper-slide">
                  <div className="single">
                    <div className="wg-testimonial style-6 text-center">
                      <div className="avatar">
                        <Image
                          alt=""
                          width={200}
                          height={200}
                          src={testimonial.avatarSrc}
                        />
                      </div>
                      <p className="h6 description">
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
                          <a href="#" className="link-2">
                            {testimonial.name}
                          </a>
                        </h6>
                        <p className="text-2">{testimonial.role}</p>
                      </div>
                    </div>{" "}
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-wrap-btn mt-28">
                <div className="swiper-button-prev sw-button nav-prev-layout snbp12">
                  <i className="icon-arrow-left-3" />
                </div>
                <div className="sw-pagination sw-pagination-layout text-center spd21" />
                <div className="swiper-button-next sw-button nav-next-layout snbn12">
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
