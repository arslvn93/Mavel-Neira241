"use client";

import { agents } from "@/data/agents";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { Pagination } from "swiper/modules";
export default function Team() {
  return (
    <div className="section-box-team style-1 section-style style-border-top tf-spacing-7">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center gap-33 mb-55">
              <div className="title text-display-4 text_white split-text effect-right">
                <SplitTextAnimation text="Meet the team" />
              </div>
              <p
                className="text-1 text-color1 wow animate__fadeInUp animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                Our vision is to be the premier real estate company in New York,
                recognized for our unwavering <br />
                commitment to excellence, innovation, and community impact.
              </p>
            </div>
            <Swiper
              dir="ltr"
              className="swiper sw-layout mb_38 style-pagination"
              spaceBetween={15}
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 1,
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
                el: ".spd17",
              }}
            >
              {agents.map((agent, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div
                    className="agent-item style-4 hover-img wow animate__fadeInRight animate__animated"
                    data-wow-delay={agent.delay}
                  >
                    <div className="image-wrap">
                      <Link href={`/agents-details/${agent.id}`}>
                        <Image
                          className="lazyload"
                          data-src={agent.imageSrc}
                          alt=""
                          width={400}
                          height={494}
                          src={agent.imageSrc}
                        />
                      </Link>
                      <div className="list-social">
                        <a href="#">
                          <i className="icon-fb" />
                        </a>
                        <a href="#">
                          <i className="icon-X" />
                        </a>
                        <a href="#">
                          <i className="icon-linked" />
                        </a>
                        <a href="#">
                          <i className="icon-ins" />
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="text-11 fw-6">
                        <Link
                          href={`/agents-details/${agent.id}`}
                          className="text_white link"
                        >
                          {agent.name}
                        </Link>
                      </div>
                      <p className="text-1 text-color1">{agent.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-pagination sw-pagination-layout text-center mt-20 spd17" />
            </Swiper>
            <a
              href="#"
              className="tf-btn bg-color-primary height-1 pd-25 rounded-cycle mx-auto btn-border"
            >
              View all services <i className="icon-arrow-right-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
