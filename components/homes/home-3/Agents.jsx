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
    <section className="section-local-agent">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section mb-46 text-center">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Agents Specializing In California" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                We connect you directly to the person that knows the most about
                a property for sale, the <br />
                listing agent.
              </p>
            </div>
            <div
              className="swiper style-pagination tf-sw-mobile-1 sw-swiper-576"
              data-screen={576}
              data-preview={1}
              data-space={15}
            >
              <div className="swiper-wrapper tf-layout-mobile-sm sm-col-2 lg-col-4 mb-48">
                {agents3.map((agent, i) => (
                  <div key={i} className="swiper-slide">
                    <div className="agent-item style-3 hover-img">
                      <div className="image-wrap">
                        <Link href={`/agents-details/${agent.id}`}>
                          <Image
                            className="lazyload"
                            alt=""
                            width={435}
                            height={435}
                            src={agent.imageSrc}
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
              <div className="sw-pagination sw-pagination-mb-1 text-center d-md-none d-block mb-20" />
            </div>
            <Swiper
              className="swiper style-pagination tf-sw-mobile-1 sw-swiper-576"
              spaceBetween={15}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd453",
              }}
            >
              {agents3.map((agent, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <div className="agent-item style-3 hover-img">
                    <div className="image-wrap">
                      <Link href={`/agents-details/${agent.id}`}>
                        <Image
                          className="lazyload"
                          alt=""
                          width={435}
                          height={435}
                          src={agent.imageSrc}
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

              <div className="sw-pagination sw-pagination-mb-1 text-center d-md-none d-block mb-20 mt-48 spd453" />
            </Swiper>
            <p className="text-center text-1 mb-46">
              Explore Property agents are here to help with all your buying,
              renting and selling goals. <br />
              Find the home of your dreams with an expert you can trust.
              <a href="#">Let’s chat</a>
            </p>
            <a href="#" className="tf-btn bg-color-primary pd-3 fw-6 mx-auto">
              Find your location agent <i className="icon-MagnifyingGlass" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
