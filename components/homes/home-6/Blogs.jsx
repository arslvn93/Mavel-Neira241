"use client";
import Link from "next/link";
import { siteContent } from "@/data/siteContent"; // Import centralized content
// Removed blogs import
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { Pagination } from "swiper/modules";
export default function Blogs() {
  return (
    <section className="section-opinion tf-spacing-7 section-style style-border-top">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center gap-33 mb-54">
              <div className="title text-display-4 fw-5 text_white split-text effect-right">
                <SplitTextAnimation text={`${siteContent.agent.firstName}'s ${siteContent.agent.location} Market Insights`} />
              </div>
              <p
                className="text-1 text-color1 wow animate__fadeInUp animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                {`Stay informed with the latest news, tips, and trends relevant to the ${siteContent.agent.location} real estate market.`}
              </p>
            </div>
            <Swiper
              dir="ltr"
              className="swiper style-pagination sw-layout wow animate__fadeInUp animate__animated"
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
                el: ".spd15",
              }}
            >
              {siteContent.blog.posts.map((blog, i) => ( // Use siteContent
                <SwiperSlide key={i} className="swiper-slide">
                  <div className="blog-article-item style-3 hover-img">
                    <h4 className="title">
                      <Link
                        href={`/blog-details/${blog.id}`}
                        className="line-clamp-2 text_white link"
                      >
                        {blog.title.replace('{Location}', siteContent.agent.location)}
                      </Link>
                    </h4>
                    <div className="relative">
                      <div className="image-wrap">
                        <Link href={`/blog-details/${blog.id}`}>
                          <Image
                            className="lazyload"
                            alt={blog.alt.replace('{Location}', siteContent.agent.location)}
                            width={400}
                            height={264}
                            src={blog.imageSrc}
                          />
                        </Link>
                      </div>
                      <div className="box-tag">
                        <div className="tag-item text-4 text_white fw-6">
                          {blog.tag}
                        </div>
                      </div>
                    </div>
                    <div className="article-content">
                      <div className="time text_white">
                        <div className="icons">
                          <i className="icon-clock" />
                        </div>
                        <p className="fw-5 text_white">{blog.date}</p>
                      </div>
                      <p className="description text-1 text-color1">
                        {blog.description.replace('{Location}', siteContent.agent.location)}
                      </p>
                      <Link
                        href={`/blog-details/${blog.id}`}
                        className="tf-btn-link"
                      >
                        <span> Read More </span>
                        <i className="icon-circle-arrow" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-pagination sw-pagination-layout text-center d-lg-none d-block mt-20 spd15" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
