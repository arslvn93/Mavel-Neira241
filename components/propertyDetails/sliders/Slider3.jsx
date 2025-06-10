"use client";
import Image from "next/image";
import { useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
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
export default function Slider3() {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div className="single-property-gallery style-1">
      <div className="position-relative">
        <Gallery>
          <Swiper
            dir="ltr"
            modules={[Thumbs, Navigation]}
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
                  width={840}
                  height={473}
                >
                  {({ ref, open }) => (
                    <a
                      data-fancybox="gallery"
                      onClick={open}
                      className="image-wrap d-block"
                    >
                      <Image
                        ref={ref}
                        className="lazyload"
                        alt=""
                        src={elm.src}
                        width={840}
                        height={473}
                      />
                    </a>
                  )}
                </Item>
              </SwiperSlide>
            ))}
          </Swiper>
        </Gallery>
        <div className="box-navigation">
          <div className="swiper-button-prev sw-button style-2 sw-thumbs-prev snbpdp1">
            <i className="icon-arrow-left-1" />
          </div>
          <div className="swiper-button-next sw-button style-2 sw-thumbs-next snbpdn1">
            <i className="icon-arrow-right-1" />
          </div>
        </div>
        <Swiper
          dir="ltr"
          onSwiper={setSwiperRef}
          className="swiper thumbs-sw-pagi"
          spaceBetween={15}
          slidesPerView={5}
        >
          {images.map((elm, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <div className="img-thumb-pagi">
                <Image alt="images" src={elm.src} width={317} height={202} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
