"use client";

import { useState } from "react";
import { EffectFade, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
const images = [
  { src: "/images/page-title/thumbs-main-3.jpg", alt: "" },
  { src: "/images/page-title/thumbs-main-4.jpg", alt: "" },
  { src: "/images/page-title/thumbs-main-5.jpg", alt: "" },
  { src: "/images/page-title/thumbs-main-6.jpg", alt: "" },
];
const pagiImages = [
  { src: "/images/page-title/pagi-thumbs-4.jpg", alt: "images" },
  { src: "/images/page-title/pagi-thumbs-5.jpg", alt: "images" },
  { src: "/images/page-title/pagi-thumbs-6.jpg", alt: "images" },
  { src: "/images/page-title/pagi-thumbs-7.jpg", alt: "images" },
];
export default function Hero() {
  const [swiperThumb1, setswiperThumb1] = useState(null);
  return (
    <div className="page-title home08 bg-color-white">
      <div className="tf-slider style-2">
        <div className="position-relative">
          <Swiper
            dir="ltr"
            className="swiper hero-thumbs-2 "
            modules={[Thumbs, EffectFade, Navigation]}
            navigation={{
              prevEl: ".snbhp1",
              nextEl: ".snbhn1",
            }}
            effect="fade"
            thumbs={{ swiper: swiperThumb1 }}
          >
            {images.map((image, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <a
                  href={image.src}
                  data-fancybox="gallery"
                  className="image-wrap d-block"
                >
                  <Image
                    className="lazyload"
                    data-src={image.src}
                    alt={image.alt}
                    src={image.src}
                    width={1888}
                    height={940}
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="content-inner">
            <div className="tf-container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="content">
                    <div className="heading">
                      <div className="text-display-2 title fw-7 text_white mb-20">
                        Find nearby luxurious estates
                      </div>
                      <p className="text_white description text-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas ultrices sapien dolor, non consequat risus
                        feugiat eu. Quisque congue, nisi vel tincidunt suscipit,
                      </p>
                    </div>
                    <div className="wrap-pagination-thumbs lg-hide">
                      <Swiper
                        dir="ltr"
                        className="swiper thumbs-sw-pagi"
                        spaceBetween={15}
                        slidesPerView={3}
                        onSwiper={setswiperThumb1}
                        modules={[Thumbs]}
                      >
                        {pagiImages.map((image, index) => (
                          <SwiperSlide className="swiper-slide" key={index}>
                            <div className="img-thumb-pagi">
                              <Image
                                alt={image.alt}
                                src={image.src}
                                width={196}
                                height={130}
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      <div className="swiper-button-prev sw-button style-4 sw-thumbs-prev-2 snbhp1">
                        <div>
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19 12H5"
                              stroke="#5C5E61"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 5L5 12L12 19"
                              stroke="#5C5E61"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="swiper-button-next sw-button style-4 sw-thumbs-next-2 snbhn1">
                        <div>
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 12H19"
                              stroke="#5C5E61"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 5L19 12L12 19"
                              stroke="#5C5E61"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <form
                    className="form-get-in-touch"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="text-color-heading text-13 title-form">
                      Get in touch
                    </div>
                    <div className="grid-2">
                      <fieldset>
                        <label className="text-1 fw-6 mb-12" htmlFor="name3">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your name"
                          name="name"
                          id="name3"
                          required
                        />
                      </fieldset>
                      <fieldset>
                        <label className="text-1 fw-6 mb-12" htmlFor="email3">
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          name="Your email"
                          id="email3"
                          required
                        />
                      </fieldset>
                    </div>
                    <fieldset className="phone">
                      <label className="text-1 fw-6 mb-12" htmlFor="phone">
                        Phone number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your phone number"
                        name="phone"
                        id="phone"
                        required
                      />
                    </fieldset>
                    <fieldset>
                      <label className="text-1 fw-6 mb-12" htmlFor="message3">
                        Message
                      </label>
                      <textarea
                        name="message"
                        cols={30}
                        rows={10}
                        placeholder="Your message"
                        id="message3"
                        required
                        defaultValue={""}
                      />
                    </fieldset>
                    <div className="wrap-btn">
                      <a
                        href="#"
                        className="tf-btn bg-color-primary pd-15 height-3 rounded-cycle"
                      >
                        Contact our experts
                        <i className="icon-arrow-up-right"> </i>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
