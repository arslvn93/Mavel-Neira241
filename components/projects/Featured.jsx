"use client";
const projects = [
  {
    image: "/images/section/banner-7.jpg",
    category: "INTERIOR",
    title: "The vibe of a stress-free existence",
    subtitle: "Living room",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id risus est. Ut efficitur dignissim ante, nec bibendum odio ullamcorper ut. Vivamus condimentum gravida condimentum.",
  },
  {
    image: "/images/section/banner-8.jpg",
    category: "Office",
    title: "Seaside breeze luxury residence",
    subtitle: "Living room",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id risus est. Ut efficitur dignissim ante, nec bibendum odio ullamcorper ut. Vivamus condimentum gravida condimentum.",
  },
];

import Image from "next/image";
import React from "react";
import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Featured() {
  return (
    <div className="">
      <div className="tf-container-2">
        <div className="row">
          <div className="col-12">
            <Swiper
              modules={[Navigation, EffectFade]}
              navigation={{
                prevEl: ".snbp445",
                nextEl: ".snbn445",
              }}
              effect="fade"
              className="swiper sw-single"
            >
              {projects.map((project, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="project-slider">
                    <div className="img-style">
                      <Image
                        className="lazyload"
                        data-src={project.image}
                        alt=""
                        src={project.image}
                        width={1840}
                        height={884}
                      />
                    </div>
                    <div className="featured-post">
                      <div className="content">
                        <div className="heading">
                          <span className="sub text-1 fw-5 text-color-primary">
                            {project.category}
                          </span>
                          <h2 className="fw-5">{project.title}</h2>
                          <span className="text-1 text-color-default">
                            {project.subtitle}
                          </span>
                        </div>
                        <p className="description text-1 text-color-default">
                          {project.description}
                        </p>
                      </div>
                      <div className="wrap-btn">
                        <div className="swiper-button-prev sw-button sw-thumbs-prev snbp445">
                          <div>
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 12H5"
                                stroke="#5C5E61"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M12 5L5 12L12 19"
                                stroke="#5C5E61"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="swiper-button-next sw-button sw-thumbs-next snbn445">
                          <div>
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5 12H19"
                                stroke="#5C5E61"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M12 5L19 12L12 19"
                                stroke="#5C5E61"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
