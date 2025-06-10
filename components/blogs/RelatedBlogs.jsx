"use client";
import { siteContent } from "@/data/siteContent"; // Import centralized content
// Removed blogs import
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "swiper/modules";
export default function RelatedBlogs({ currentBlogId }) { // Accept currentBlogId prop
  // Filter out the current blog post
  const relatedPosts = siteContent.blog.posts.filter(post => post.id !== currentBlogId);

  return (
    <section className="section-related-posts">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <h4 className="heading">{`More Articles by ${siteContent.agent.firstName}`}</h4>
            <Swiper
              dir="ltr"
              className="swiper style-pagination sw-layout"
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
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              modules={[Pagination]}
              pagination={{
                el: ".spd1",
              }}
            >
              {relatedPosts.map((article, index) => ( // Use filtered relatedPosts
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="blog-article-item style-2 hover-img">
                    <div className="image-wrap">
                      <Link href={`/blog-details/${article.id}`}>
                        <Image
                          className="lazyload"
                          data-src={article.imageSrc}
                          alt={article.alt.replace('{Location}', siteContent.agent.location)}
                          width={600}
                          height={396}
                          src={article.imageSrc}
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
                          {article.title.replace('{Location}', siteContent.agent.location)}
                        </Link>
                      </h4>
                      <Link
                        href={`/blog-details/${article.id}`}
                        className="tf-btn-link"
                      >
                        <span> Read More </span>
                        <i className="icon-circle-arrow" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-pagination sw-pagination-layout text-center d-lg-none d-block mt-20 spd1" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
