"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { agents3 } from "@/data/agents";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
export default function Agents() {
  return (
    <div className="section-local-agent tf-spacing-7">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section mb-46 justify-content-between d-flex flex-row mb-55">
              <div className="left">
                <h2 className="title split-text effect-right mb-31">
                  <SplitTextAnimation text="Agents Specializing in California" />
                </h2>
                <p className="text-1 split-text split-lines-transform">
                  Explore Property agents are here to help with all your buying,
                  renting and selling goals. <br />
                  Find the home of your dreams with an expert you can trust.
                  Let’s chat
                </p>
              </div>
              <div className="right">
                <a
                  href="#"
                  className="tf-btn bg-color-primary rounded-cycle height-3 pd-25 wow animate__fadeInUp animate__animated"
                >
                  See all agent
                  <i className="icon-arrow-up-right" />
                </a>
              </div>
            </div>
            <div
              className="swiper style-pagination tf-sw-mobile-1 sw-swiper-576"
              data-screen={576}
              data-preview={1}
              data-space={15}
            >
              <div className="swiper-wrapper tf-layout-mobile-sm sm-col-2 lg-col-4">
                {agents3.map((agent, i) => (
                  <div key={i} className="swiper-slide">
                    <div
                      className="agent-item style-3 hover-img wow animate__fadeInUp animate__animated"
                      data-wow-duration="1.5s"
                      data-wow-delay="0s"
                    >
                      <div className="image-wrap">
                        <Link href={`/agents-details/${agent.id}`}>
                          <Image
                            className="lazyload"
                            alt=""
                            src={agent.imageSrc}
                            width={435}
                            height={435}
                          />
                        </Link>
                        <ul className="tf-social style-3">
                          <li>
                            <a href="#">
                              <i className="icon-fb" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon-X" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon-linked" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon-ins" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="content justify-center">
                        <div className="author text-center">
                          <h5 className="name lh-30">
                            <Link href={`/agents-details/${agent.id}`}>
                              {agent.name}
                            </Link>
                          </h5>
                          <p className="text-2 lh-18">Sale agent</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="sw-pagination sw-pagination-mb-1 text-center d-md-none d-block mt-20" />
            </div>
            <Swiper
              className="swiper style-pagination tf-sw-mobile-1 sw-swiper-576"
              spaceBetween={15}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd456",
              }}
            >
              {agents3.map((agent, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <div
                    className="agent-item style-3 hover-img wow animate__fadeInUp animate__animated"
                    data-wow-duration="1.5s"
                    data-wow-delay="0s"
                  >
                    <div className="image-wrap">
                      <Link href={`/agents-details/${agent.id}`}>
                        <Image
                          className="lazyload"
                          alt=""
                          src={agent.imageSrc}
                          width={435}
                          height={435}
                        />
                      </Link>
                      <ul className="tf-social style-3">
                        <li>
                          <a href="#">
                            <i className="icon-fb" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-X" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-linked" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-ins" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="content justify-center">
                      <div className="author text-center">
                        <h5 className="name lh-30">
                          <Link href={`/agents-details/${agent.id}`}>
                            {agent.name}
                          </Link>
                        </h5>
                        <p className="text-2 lh-18">Sale agent</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-pagination sw-pagination-mb-1 text-center d-md-none d-block mt-20 spd456" />
            </Swiper>
          </div>
        </div>
      </div>
      {/* /.section-local-agent */}
    </div>
  );
}
