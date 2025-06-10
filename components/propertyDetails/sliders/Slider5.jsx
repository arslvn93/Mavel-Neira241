"use client";
import Image from "next/image";
import { useState } from "react";
import { EffectFade, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  {
    src: "/images/section/property-details-v2-1.jpg",
    alt: "",
  },
  { src: "/images/section/property-details-v3-1.jpg", alt: "" },
  { src: "/images/section/property-details-v3-2.jpg", alt: "" },
  { src: "/images/section/property-details-v3-3.jpg", alt: "" },
  { src: "/images/section/property-details-v3-4.jpg", alt: "" },
  { src: "/images/section/property-details-v3-5.jpg", alt: "" },
];
import { Gallery, Item } from "react-photoswipe-gallery";
export default function Slider5() {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div className="single-property-gallery">
      <div className="tf-container">
        <div className="row">
          <div className="position-relative">
            <Gallery>
              <Swiper
                dir="ltr"
                modules={[Thumbs, Navigation, EffectFade]}
                effect="fade"
                thumbs={{ swiper: swiperRef }}
                navigation={{
                  prevEl: ".snbpdp1",
                  nextEl: ".snbpdn1",
                }}
                className="swiper sw-single"
              >
                {images.map((elm, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <Item
                      original={elm.src}
                      thumbnail={elm.src}
                      width={1290}
                      height={680}
                    >
                      {({ ref, open }) => (
                        <a
                          onClick={open}
                          data-fancybox="gallery"
                          className="image-wrap d-block"
                        >
                          <Image
                            ref={ref}
                            className="lazyload"
                            alt=""
                            src={elm.src}
                            width={1290}
                            height={680}
                          />
                        </a>
                      )}
                    </Item>
                  </SwiperSlide>
                ))}

                <div className="swiper-button-prev sw-button style-2 sw-thumbs-prev snbpdp1">
                  <i className="icon-arrow-left-1" />
                </div>
                <div className="swiper-button-next sw-button style-2 sw-thumbs-next snbpdn1">
                  <i className="icon-arrow-right-1" />
                </div>
              </Swiper>
            </Gallery>
          </div>
          <Swiper
            dir="ltr"
            onSwiper={setSwiperRef}
            className="swiper thumbs-sw-pagi style-2"
            spaceBetween={15}
            breakpoints={{
              0: { slidesPerView: 3 },
              575: {
                slidesPerView: 6,
              },
            }}
          >
            {images.map((elm, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="img-thumb-pagi">
                  <Image alt="images" src={elm.src} width={297} height={222} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
