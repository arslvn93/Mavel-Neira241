"use client";
import { blogArticles2 } from "@/data/blogs";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { Pagination } from "swiper/modules";
export default function Blogs() {
  return (
    <div className="section-opinion style-1 tf-spacing-15">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-56 gap-32">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Our latest news and blog" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                We are committed to building long-term relationships with our
                clients based on trust and integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        dir="ltr"
        className="swiper style-pagination sw-layout"
        loop
        initialSlide={2}
        centeredSlides
        spaceBetween={15}
        breakpoints={{
          0: { slidesPerView: 1 },
          575: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 4.49,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        pagination={{
          el: ".spd4",
        }}
      >
        {blogArticles2.map((article) => (
          <SwiperSlide className="swiper-slide" key={article.id}>
            <div className="blog-article-item style-2 hover-img">
              <div className="image-wrap">
                <Link href={`/blog-details/${article.id}`}>
                  <Image
                    className="lazyload"
                    data-src={article.imageSrc}
                    alt=""
                    src={article.imageSrc}
                    width={600}
                    height={396}
                  />
                </Link>
                <div className="box-tag">
                  <div className="tag-item text-4 text_white fw-6">
                    {article.tag}
                  </div>
                </div>
              </div>
              <div className="article-content">
                <div className="time">
                  <div className="icons">
                    <i className="icon-clock" />
                  </div>
                  <p className="fw-5">{article.date}</p>
                </div>
                <h4 className="title">
                  <Link
                    href={`/blog-details/${article.id}`}
                    className="line-clamp-2"
                  >
                    {article.title}
                  </Link>
                </h4>
                <Link
                  href={`/blog-details/${article.id}`}
                  className="tf-btn-link"
                >
                  <span> Read More </span> <i className="icon-circle-arrow" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="sw-pagination sw-pagination-layout text-center d-lg-none d-block mt-20 spd4" />
      </Swiper>
    </div>
  );
}
