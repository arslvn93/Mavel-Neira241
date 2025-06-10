"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { agents5 } from "@/data/agents";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
export default function Agents() {
  return (
    <section className="section-local-agent">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section mb-48 text-center">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Choose Your Local Agent" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                vel lobortis justo
              </p>
            </div>
            <div
              className="swiper style-pagination tf-sw-mobile-1 sw-swiper-576"
              data-screen={575}
              data-preview={1}
              data-space={15}
            >
              <div className="swiper-wrapper tf-layout-mobile-sm sm-col-2 lg-col-4 mb-48">
                {agents5.map((agent) => (
                  <div className="swiper-slide" key={agent.id}>
                    <div
                      className="agent-item hover-img style-2 wow animate__fadeInUp animate__animated"
                      data-wow-duration="1s"
                      data-wow-delay={agent.delay}
                    >
                      <div className="image-wrap">
                        <Link href={`/agents-details/${agent.id}`}>
                          <Image
                            className="lazyload"
                            data-src={agent.imageSrc}
                            alt=""
                            width={435}
                            height={585}
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
                      <div className="wrap-btn-icon">
                        <a
                          href="#"
                          className="btn-icon phone hover-tooltip style-2"
                        >
                          <i className="icon-phone-3" />
                          <span className="tooltip">Call</span>
                        </a>
                        <a
                          href="#"
                          className="btn-icon message hover-tooltip style-2"
                        >
                          <i className="icon-letter"> </i>
                          <span className="tooltip">Message</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="sw-pagination sw-pagination-mb-1 text-center d-lg-none d-block mb-20" />
            </div>
            <Swiper
              className="swiper style-pagination tf-sw-mobile-1 sw-swiper-576"
              spaceBetween={15}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd454",
              }}
            >
              {agents5.map((agent) => (
                <SwiperSlide className="swiper-slide" key={agent.id}>
                  <div
                    className="agent-item hover-img style-2 wow animate__fadeInUp animate__animated"
                    data-wow-duration="1s"
                    data-wow-delay={agent.delay}
                  >
                    <div className="image-wrap">
                      <Link href={`/agents-details/${agent.id}`}>
                        <Image
                          className="lazyload"
                          data-src={agent.imageSrc}
                          alt=""
                          width={435}
                          height={585}
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
                    <div className="wrap-btn-icon">
                      <a
                        href="#"
                        className="btn-icon phone hover-tooltip style-2"
                      >
                        <i className="icon-phone-3" />
                        <span className="tooltip">Call</span>
                      </a>
                      <a
                        href="#"
                        className="btn-icon message hover-tooltip style-2"
                      >
                        <i className="icon-letter"> </i>
                        <span className="tooltip">Message</span>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-pagination sw-pagination-mb-1 text-center d-lg-none d-block mb-20  mt-48 spd454" />
            </Swiper>
            <p className="text-center text-1 mb-48">
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
