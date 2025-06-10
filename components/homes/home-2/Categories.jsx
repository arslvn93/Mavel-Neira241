"use client";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { categories2 } from "@/data/categories";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Categories() {
  return (
    <section className="section-categories style-2 tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-48">
              <h2 className="title split-text effect-right">
                {" "}
                <SplitTextAnimation text="Property Type" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                Thousands of luxury home enthusiasts just like you visit our
                website.
              </p>
            </div>
            <div
              className="swiper style-pagination tf-sw-mobile-1 sw-swiper-576"
              data-screen={576}
              data-preview={1}
              data-space={15}
            >
              <div className="swiper-wrapper tf-layout-mobile-sm sm-col-2 xl-col-4 lg-col-3">
                {categories2.map((category, index) => (
                  <div className="swiper-slide" key={index}>
                    <a href="#" className="categories-item style-2">
                      <div className="icon-box">
                        <i className={`icon ${category.icon}`}></i>
                      </div>
                      <div className="content">
                        <h5 className="mb-10">{category.title}</h5>
                        <p>
                          <svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.25 1.5H4.5C4.10218 1.5 3.72064 1.65804 3.43934 1.93934C3.15804 2.22064 3 2.60218 3 3V15C3 15.3978 3.15804 15.7794 3.43934 16.0607C3.72064 16.342 4.10218 16.5 4.5 16.5H13.5C13.8978 16.5 14.2794 16.342 14.5607 16.0607C14.842 15.7794 15 15.3978 15 15V5.25L11.25 1.5Z"
                              stroke="#5C5E61"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.5 1.5V4.5C10.5 4.89782 10.658 5.27936 10.9393 5.56066C11.2206 5.84196 11.6022 6 12 6H15"
                              stroke="#5C5E61"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.5 6.75H6"
                              stroke="#5C5E61"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 9.75H6"
                              stroke="#5C5E61"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 12.75H6"
                              stroke="#5C5E61"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {category.listings}
                        </p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
              <div className="sw-pagination sw-pagination-mb-1 text-center d-md-none mt-20 d-block" />
            </div>
            <Swiper
              className="swiper style-pagination tf-sw-mobile-1 sw-swiper-576"
              spaceBetween={15}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd451",
              }}
            >
              <div className="swiper-wrapper tf-layout-mobile-sm sm-col-2 xl-col-4 lg-col-3">
                {categories2.map((category, index) => (
                  <SwiperSlide className="swiper-slide" key={index}>
                    <a href="#" className="categories-item style-2">
                      <div className="icon-box">
                        <i className={`icon ${category.icon}`}></i>
                      </div>
                      <div className="content">
                        <h5 className="mb-10">{category.title}</h5>
                        <p>
                          <svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.25 1.5H4.5C4.10218 1.5 3.72064 1.65804 3.43934 1.93934C3.15804 2.22064 3 2.60218 3 3V15C3 15.3978 3.15804 15.7794 3.43934 16.0607C3.72064 16.342 4.10218 16.5 4.5 16.5H13.5C13.8978 16.5 14.2794 16.342 14.5607 16.0607C14.842 15.7794 15 15.3978 15 15V5.25L11.25 1.5Z"
                              stroke="#5C5E61"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.5 1.5V4.5C10.5 4.89782 10.658 5.27936 10.9393 5.56066C11.2206 5.84196 11.6022 6 12 6H15"
                              stroke="#5C5E61"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.5 6.75H6"
                              stroke="#5C5E61"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 9.75H6"
                              stroke="#5C5E61"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 12.75H6"
                              stroke="#5C5E61"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {category.listings}
                        </p>
                      </div>
                    </a>
                  </SwiperSlide>
                ))}
              </div>
              <div className="sw-pagination sw-pagination-mb-1 text-center d-md-none mt-20 d-block spd451" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
