"use client";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import ModalVideo from "@/components/common/ModalVideo";
import { useState } from "react";
export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="tf-spacing-7 pt-0">
        <div className="box-about style-1">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-6 left">
                <div className="heading-section mb-74 gap-33">
                  <h2 className="title split-text split-lines-rotation-x fw-5">
                    We pride ourselves on our extensive market knowledge and
                    commitment to client satisfaction.
                  </h2>
                  <p className="text-1 text-color-default wow animate__fadeInUp animate__animated">
                    At Proty, we're more than just a real estate company; we're
                    architects of dreams, crafting spaces where life flourishes
                    and businesses thrive. With a rich history spanning 12
                    years, we've established ourselves as a trusted leader in
                    the real estate market, renowned for our unwavering
                    commitment to excellence, innovation, and client
                    satisfaction.
                  </p>
                </div>
                <div className="img-style img-custom-anim-left wow">
                  <Image
                    className="lazyload"
                    data-src="/images/section/section-about-5.jpg"
                    alt=""
                    src="/images/section/section-about-5.jpg"
                    width={440}
                    height={357}
                  />
                </div>
              </div>
              <div className="col-lg-6 right">
                <div className="wrap relative">
                  <div className="img-style img-custom-anim-right wow">
                    <Image
                      className="lazyload"
                      data-src="/images/section/section-about-6.jpg"
                      alt=""
                      src="/images/section/section-about-6.jpg"
                      width={620}
                      height={509}
                    />
                  </div>
                  <div className="widget-video style-2">
                    <div className="wrap-icon">
                      <div className="text-circle">
                        <svg className="textcircle" viewBox="0 0 500 500">
                          <defs>
                            <path
                              id="textcircle"
                              d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                            />
                          </defs>
                          <text>
                            <textPath xlinkHref="#textcircle" textLength={900}>
                              find the dream home Proty real estate *
                            </textPath>
                          </text>
                        </svg>
                      </div>
                      <a
                        className="video-icon popup-youtube"
                        onClick={() => setIsOpen(true)}
                      >
                        <i aria-hidden="true" className="icon-play-1" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <div className="text-17 text-color-heading fw-6 mb-27 split-text effect-right">
                    <SplitTextAnimation text="A powerful platform with thousands of high-end properties" />
                  </div>
                  <p className="tetx-1 text-color-default split-text split-lines-transform">
                    We offer a comprehensive suite of real estate services,
                    catering to a diverse clientele with varied needs and
                    aspirations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        videoId={"XHOmBV4js_E"}
      />{" "}
    </>
  );
}
