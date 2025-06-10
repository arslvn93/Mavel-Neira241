"use client";
import { blogPosts } from "@/data/blogs";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { Pagination } from "swiper/modules";
export default function Blogs() {
  return (
    <section className="section-opinion ">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-48">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Insight & Opinion" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                Thousands of luxury home enthusiasts just like you visit our
                website.
              </p>
            </div>
            <Swiper
              dir="ltr"
              className="swiper style-pagination sw-layout"
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              modules={[Pagination]}
              pagination={{
                el: ".spd3",
              }}
            >
              {blogPosts.map((post, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="blog-article-item style-2 hover-img">
                    <div className="image-wrap">
                      <Link href={`/blog-details/${post.id}`}>
                        <Image
                          className="lazyload"
                          data-src={post.imgSrc}
                          alt=""
                          src={post.imgSrc}
                          width={600}
                          height={396}
                        />
                      </Link>
                      <div className="box-tag">
                        <div className="tag-item text-4 text_white fw-6">
                          {post.tag}
                        </div>
                      </div>
                    </div>
                    <div className="article-content">
                      <div className="time">
                        <div className="icons">
                          <i className="icon-clock" />
                        </div>
                        <p className="fw-5">{post.date}</p>
                      </div>
                      <h4 className="title">
                        <Link
                          href={`/blog-details/${post.id}`}
                          className="line-clamp-2"
                        >
                          {post.title}
                        </Link>
                      </h4>
                      <Link
                        href={`/blog-details/${post.id}`}
                        className="tf-btn-link"
                      >
                        <span>Read More</span>{" "}
                        <i className="icon-circle-arrow" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-pagination sw-pagination-layout text-center d-lg-none d-block mt-20 spd3"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
