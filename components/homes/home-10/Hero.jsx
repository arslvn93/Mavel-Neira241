"use client";
const slidesData = [
  {
    title: "Nextgen riverside 152",
    location: "102 Ingraham St, Brooklyn, NY 11237",
    beds: 4,
    baths: 3,
    sqft: "1,484",
  },
  {
    title: "Nextgen riverside 152",
    location: "102 Ingraham St, Brooklyn, NY 11237",
    beds: 4,
    baths: 3,
    sqft: "1,484",
  },
  {
    title: "Nextgen riverside 152",
    location: "102 Ingraham St, Brooklyn, NY 11237",
    beds: 4,
    baths: 3,
    sqft: "1,484",
  },
];
const imageSlidesData = [
  {
    src: "/images/page-title/pagi-thumbs-8.jpg",
    width: 908,
    height: 357,
    alt: "images",
  },
  {
    src: "/images/page-title/pagi-thumbs-9.jpg",
    width: 908,
    height: 339,
    alt: "images",
  },
  {
    src: "/images/page-title/pagi-thumbs-10.jpg",
    width: 909,
    height: 339,
    alt: "images",
  },
];
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { propertySlidesData } from "@/data/properties";
import { useState } from "react";
import {
  EffectCards,
  EffectCreative,
  Navigation,
  Thumbs,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

export default function Hero() {
  const [thumbsSwiper1, setThumbsSwiper1] = useState(null);
  const [thumbsSwiper2, setThumbsSwiper2] = useState(null);
  const [thumbsSwiper3, setThumbsSwiper3] = useState(null);
  return (
    <div className="page-title home10">
      <div className="wrap tf-slider style-3 flex-wrap-lg">
        <div className="left">
          <div className="text-display-3 fw-5 text-color-heading title-main split-text effect-right">
            <SplitTextAnimation text="The path to your dream home" />
          </div>
          <Swiper
            dir="ltr"
            onSlideChange={(swiper) =>
              thumbsSwiper3.slideTo(swiper.activeIndex)
            }
            className="swiper hero-thumbs-1"
            onSwiper={setThumbsSwiper2}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div className="heading">
                  <div className="text-13 fw-5 title text-color-heading">
                    {slide.title}
                  </div>
                  <div className="location d-flex gap-8">
                    <div className="icon">
                      <svg
                        width={18}
                        height={19}
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.25 17.0001C11.0511 17.0001 10.8603 16.9211 10.7197 16.7804C10.579 16.6398 10.5 16.449 10.5 16.2501V13.2501C10.5 13.1267 10.5304 13.0051 10.5887 12.8963C10.6469 12.7874 10.7311 12.6946 10.8337 12.6261L13.0837 11.1261C13.207 11.0439 13.3518 11 13.5 11C13.6482 11 13.793 11.0439 13.9163 11.1261L16.1663 12.6261C16.2689 12.6946 16.3531 12.7874 16.4113 12.8963C16.4696 13.0051 16.5 13.1267 16.5 13.2501V16.2501C16.5 16.449 16.421 16.6398 16.2803 16.7804C16.1397 16.9211 15.9489 17.0001 15.75 17.0001H11.25Z"
                          stroke="#5C5E61"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 8C13.5 6.4087 12.8679 4.88258 11.7426 3.75736C10.6174 2.63214 9.0913 2 7.5 2C5.9087 2 4.38258 2.63214 3.25736 3.75736C2.13214 4.88258 1.5 6.4087 1.5 8C1.5 11.7448 5.65425 15.6447 7.04925 16.8492C7.17928 16.9468 7.33747 16.9994 7.5 16.9993"
                          stroke="#5C5E61"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.5 17V14.75"
                          stroke="#5C5E61"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.5 10.25C8.74264 10.25 9.75 9.24264 9.75 8C9.75 6.75736 8.74264 5.75 7.5 5.75C6.25736 5.75 5.25 6.75736 5.25 8C5.25 9.24264 6.25736 10.25 7.5 10.25Z"
                          stroke="#5C5E61"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-color-default text-1">
                      {slide.location}
                    </p>
                  </div>
                  <div className="info">
                    <div className="item">
                      <span className="number text-display-4 fw-2 text-color-heading">
                        {slide.beds}
                      </span>
                      <div className="box-icon d-flex gap-8 align-items-center">
                        <div>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.33301 13.3334V8.00008C1.33301 7.64646 1.47348 7.30732 1.72353 7.05727C1.97358 6.80722 2.31272 6.66675 2.66634 6.66675H13.333C13.6866 6.66675 14.0258 6.80722 14.2758 7.05727C14.5259 7.30732 14.6663 7.64646 14.6663 8.00008V13.3334"
                              stroke="#5C5E61"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M2.66699 6.66675V4.00008C2.66699 3.64646 2.80747 3.30732 3.05752 3.05727C3.30756 2.80722 3.6467 2.66675 4.00033 2.66675H12.0003C12.3539 2.66675 12.6931 2.80722 12.9431 3.05727C13.1932 3.30732 13.3337 3.64646 13.3337 4.00008V6.66675"
                              stroke="#5C5E61"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8 2.66675V6.66675"
                              stroke="#5C5E61"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1.33301 12H14.6663"
                              stroke="#5C5E61"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className="text-color-default text-1">Beds</span>
                      </div>
                    </div>
                    <div className="item">
                      <span className="number text-display-4 fw-2 text-color-heading">
                        {slide.baths}
                      </span>
                      <div className="box-icon d-flex gap-8 align-items-center">
                        <i className="icon-baths" />
                        <span className="text-color-default text-1">Baths</span>
                      </div>
                    </div>
                    <div className="item">
                      <span className="number text-display-4 fw-2 text-color-heading">
                        {slide.sqft}
                      </span>
                      <div className="box-icon d-flex gap-8 align-items-center">
                        <div>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 7.33333V3.33333C14 2.97971 13.8595 2.64057 13.6095 2.39052C13.3594 2.14048 13.0203 2 12.6667 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H7.33333"
                              stroke="#5C5E61"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14 14L8 8"
                              stroke="#5C5E61"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14 10V14H10"
                              stroke="#5C5E61"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className="text-color-default text-1">sqft</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="bot flex-wrap gap-10 align-items-center">
            <Swiper
              dir="ltr"
              className="swiper thumbs-sw-pagi-3 mb-30"
              onSwiper={setThumbsSwiper1}
              modules={[EffectCards]}
              cardsEffect={{
                perSlideOffset: 11.2,
                perSlideRotate: 0,
              }}
              onSlideChange={(swiper) =>
                thumbsSwiper2.slideTo(swiper.activeIndex)
              }
              direction="vertical"
              effect={"cards"}
            >
              {imageSlidesData.map((slide, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <Image
                    className="slide-inner"
                    alt={slide.alt}
                    src={slide.src}
                    width={slide.width}
                    height={slide.height}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="right">
          <Swiper
            dir="ltr"
            modules={[EffectCreative]}
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            onSwiper={setThumbsSwiper3}
            className="swiper hero-thumbs-2"
            onSlideChange={(swiper) => {
              thumbsSwiper2.slideTo(swiper.activeIndex);
              thumbsSwiper1.slideTo(swiper.activeIndex);
            }}
          >
            {propertySlidesData.map((slide, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div className="property-wrap">
                  <Image
                    className="lazyload slide-inner"
                    data-src={slide.mainImage.src}
                    alt={slide.mainImage.alt}
                    src={slide.mainImage.src}
                    width={slide.mainImage.width}
                    height={slide.mainImage.height}
                  />
                  <div className="property-info">
                    <div className="img-wrap">
                      <Image
                        alt={slide.propertyImage.alt}
                        src={slide.propertyImage.src}
                        width={slide.propertyImage.width}
                        height={slide.propertyImage.height}
                      />
                    </div>
                    <div className="content">
                      <h5 className="text-color-heading title mb-10">
                        {slide.title}
                      </h5>
                      <div className="text-1 d-flex align-items-center text-color-default gap-8 mb-12">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_4594_18934)">
                            <path
                              d="M11.25 16.5C11.0511 16.5 10.8603 16.421 10.7197 16.2803C10.579 16.1397 10.5 15.9489 10.5 15.75V12.75C10.5 12.6265 10.5304 12.505 10.5887 12.3962C10.6469 12.2873 10.7311 12.1945 10.8337 12.126L13.0837 10.626C13.207 10.5438 13.3518 10.4999 13.5 10.4999C13.6482 10.4999 13.793 10.5438 13.9163 10.626L16.1663 12.126C16.2689 12.1945 16.3531 12.2873 16.4113 12.3962C16.4696 12.505 16.5 12.6265 16.5 12.75V15.75C16.5 15.9489 16.421 16.1397 16.2803 16.2803C16.1397 16.421 15.9489 16.5 15.75 16.5H11.25Z"
                              stroke="#5C5E61"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.5 7.5C13.5 5.9087 12.8679 4.38258 11.7426 3.25736C10.6174 2.13214 9.0913 1.5 7.5 1.5C5.9087 1.5 4.38258 2.13214 3.25736 3.25736C2.13214 4.38258 1.5 5.9087 1.5 7.5C1.5 11.2448 5.65425 15.1447 7.04925 16.3492C7.17928 16.4468 7.33747 16.4994 7.5 16.4993"
                              stroke="#5C5E61"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.5 16.5V14.25"
                              stroke="#5C5E61"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.5 9.75C8.74264 9.75 9.75 8.74264 9.75 7.5C9.75 6.25736 8.74264 5.25 7.5 5.25C6.25736 5.25 5.25 6.25736 5.25 7.5C5.25 8.74264 6.25736 9.75 7.5 9.75Z"
                              stroke="#5C5E61"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_4594_18934">
                              <rect width={18} height={18} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        {slide.location}
                      </div>
                      <Link
                        href={`/property-detail-v1/${slide.id}`}
                        className="tf-btn"
                      >
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 7H17V17"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7 17L17 7"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
