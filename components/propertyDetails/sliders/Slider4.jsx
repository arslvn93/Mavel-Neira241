"use client";
import Image from "next/image";
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
import { Navigation } from "swiper/modules";
export default function Slider4() {
  return (
    <div className="single-property-gallery">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <Gallery>
              <Swiper
                dir="ltr"
                className="swiper sw-thumbs-sigle"
                modules={[Navigation]}
                navigation={{
                  prevEl: ".snbp1",
                  nextEl: ".snbn1",
                }}
              >
                {images.map((elm, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <Item
                      original={elm.src}
                      thumbnail={elm.src}
                      width={1280}
                      height={680}
                    >
                      {({ ref, open }) => (
                        <a
                          onClick={open}
                          data-fancybox="gallery"
                          className="image-wrap relative d-block"
                        >
                          <Image
                            ref={ref}
                            className="lazyload"
                            alt=""
                            src={elm.src}
                            width={1280}
                            height={680}
                          />
                        </a>
                      )}
                    </Item>
                  </SwiperSlide>
                ))}

                <div className="swiper-button-prev sw-button style-2 sw-thumbs-prev snbp1">
                  <i className="icon-arrow-left-1" />
                </div>
                <div className="swiper-button-next sw-button style-2 sw-thumbs-next snbn1">
                  <i className="icon-arrow-right-1" />
                </div>
              </Swiper>
            </Gallery>
          </div>
        </div>
      </div>
    </div>
  );
}
