"use client";
import { blogData } from "@/data/blogs";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function Blogs() {
  return (
    <div className="tf-spacing-7 pt-0">
      <div className="tf-container full slider-layout-right">
        <div className="heading-section mb-55 gap-32">
          <h2 className="title split-text effect-right">
            <SplitTextAnimation text="Insight & Opinion" />
          </h2>
          <p className="text-1 split-text split-lines-transform">
            Explore Property agents are here to help with all your buying,
            renting and selling goals. <br />
            Find the home of your dreams with an expert you can trust. Let’s
            chat
          </p>
        </div>
        <Swiper
          dir="ltr"
          className="swiper style-pagination sw-layout"
          spaceBetween={15}
          breakpoints={{
            0: { slidesPerView: 1.3 },
            575: {
              slidesPerView: 2.1,
            },
            768: {
              slidesPerView: 2.9,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3.68,
              spaceBetween: 40,
            },
          }}
        >
          {blogData.map((slide) => (
            <SwiperSlide className="swiper-slide" key={slide.id}>
              <div className="blog-article-item style-2 hover-img">
                <div className="image-wrap">
                  <Link href={`/blog-details/${slide.id}`}>
                    <Image
                      className="lazyload"
                      data-src={slide.imageSrc}
                      alt=""
                      src={slide.imageSrc}
                      width={600}
                      height={396}
                    />
                  </Link>
                  <div className="box-tag">
                    <div className="tag-item text-4 text_white fw-6">
                      {slide.tag}
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <div className="time">
                    <div className="icons">
                      <i className="icon-clock" />
                    </div>
                    <p className="fw-5">{slide.date}</p>
                  </div>
                  <h4 className="title">
                    <Link
                      href={`/blog-details/${slide.id}`}
                      className="line-clamp-2"
                    >
                      {slide.title}
                    </Link>
                  </h4>
                  <Link
                    href={`/blog-details/${slide.id}`}
                    className="tf-btn-link"
                  >
                    <span> Read More </span>
                    <i className="icon-circle-arrow" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
