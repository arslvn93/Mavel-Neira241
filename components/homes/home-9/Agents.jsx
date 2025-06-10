"use client";
import Image from "next/image";
import { agents } from "@/data/agents";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { Pagination } from "swiper/modules";
export default function Agents() {
  return (
    <div className="section-local-agent tf-spacing-7">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section mb-55 justify-content-between d-flex flex-row">
              <div className="left">
                <h2 className="title split-text effect-right mb-32">
                  <SplitTextAnimation text="Agents Specializing in California" />
                </h2>
                <p className="text-1 wow animate__fadeInUp animate__animated">
                  Explore Property agents are here to help with all your buying,
                  renting and selling goals. <br />
                  Find the home of your dreams with an expert you can trust.
                  <Link href={`/contact`} className="text-color-primary link-2">
                    Let’s chat
                  </Link>
                </p>
              </div>
              <div className="right">
                <a
                  href="#"
                  className="tf-btn bg-color-primary rounded-cycle height-3 pd-25 wow animate__fadeInUp animate__animated"
                >
                  See all gallery
                  <i className="icon-arrow-up-right" />
                </a>
              </div>
            </div>
            <Swiper
              dir="ltr"
              className="swiper sw-layout mb_38 style-pagination"
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
                el: ".spd23",
              }}
            >
              {agents.map((agent, i) => (
                <SwiperSlide className="swiper-slide" key={i}>
                  <div
                    className="agent-item style-5 hover-img wow animate__fadeInRight animate__animated"
                    data-wow-duration="1s"
                    data-wow-delay={agent.delay}
                  >
                    <div className="image-wrap">
                      <Link href={`/agents-details/${agent.id}`}>
                        <Image
                          className="lazyload"
                          data-src={agent.imageSrc}
                          alt=""
                          src={agent.imageSrc}
                          width={400}
                          height={494}
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <div className="author">
                        <h5 className="name lh-30">
                          <Link
                            href={`/agents-details/${agent.id}`}
                            className="text_white link"
                          >
                            {agent.name}
                          </Link>
                        </h5>
                        <p className="text-1 text-color1">
                          {agent.propertyType}
                        </p>
                      </div>
                      <div className="wrap-btn-icon">
                        <a href="#" className="btn-icon">
                          <i className="icon-phone-3" />
                        </a>
                        <a href="#" className="btn-icon">
                          <i className="icon-letter" />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-pagination sw-pagination-layout text-center mt-20 spd23" />
            </Swiper>
          </div>
        </div>
      </div>
      {/* /.section-local-agent */}
    </div>
  );
}
