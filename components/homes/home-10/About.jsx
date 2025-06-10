"use client";
import ModalVideo from "@/components/common/ModalVideo";
import Image from "next/image";
import { useState } from "react";
export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="tf-spacing-7">
        <div className="text-with-img style-3">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="box-contact style-1 pt-0 pb-0">
                  <div className="heading-section mb-56 gap-32">
                    <h2 className="title split-text split-lines-transform">
                      Proty Comprehensive solution for your real estate buying
                      and selling
                    </h2>
                    <p className="text-1 wow animate__fadeInUp animate__animated">
                      At Proty, we're more than just a real estate company;
                      we're architects of dreams, crafting spaces where life
                      flourishes and businesses thrive. With a rich history
                      spanning 12 years, we've established ourselves as a
                      trusted leader in the real estate market, renowned for our
                      unwavering commitment to excellence, innovation, and
                      client satisfaction.
                    </p>
                  </div>
                  <ul className="list-info">
                    <li className="animate__fadeInUp animate__animated">
                      <div className="icon">
                        <svg
                          width={48}
                          height={49}
                          viewBox="0 0 48 49"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M43.9999 34.34V40.34C44.0021 40.897 43.888 41.4483 43.6649 41.9586C43.4417 42.469 43.1145 42.9271 42.704 43.3037C42.2936 43.6802 41.809 43.9669 41.2814 44.1454C40.7537 44.3238 40.1946 44.3901 39.6399 44.34C33.4855 43.6712 27.5739 41.5682 22.3799 38.2C17.5475 35.1293 13.4505 31.0323 10.3799 26.2C6.99982 20.9824 4.89635 15.0419 4.23987 8.85995C4.18989 8.30688 4.25562 7.74947 4.43287 7.2232C4.61012 6.69693 4.89501 6.21333 5.2694 5.80319C5.64379 5.39306 6.09948 5.06537 6.60745 4.84099C7.11542 4.61662 7.66455 4.50047 8.21987 4.49995H14.2199C15.1905 4.4904 16.1314 4.83411 16.8674 5.46702C17.6033 6.09992 18.084 6.97884 18.2199 7.93995C18.4731 9.86008 18.9428 11.7454 19.6199 13.5599C19.889 14.2758 19.9472 15.0538 19.7877 15.8017C19.6282 16.5496 19.2576 17.2362 18.7199 17.78L16.1799 20.3199C19.027 25.327 23.1728 29.4728 28.1799 32.32L30.7199 29.78C31.2636 29.2422 31.9502 28.8716 32.6981 28.7121C33.446 28.5526 34.224 28.6109 34.9399 28.8799C36.7544 29.5571 38.6397 30.0267 40.5599 30.28C41.5314 30.417 42.4187 30.9064 43.0529 31.6549C43.6872 32.4035 44.0242 33.3591 43.9999 34.34Z"
                            stroke="#F1913D"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="content">
                        <div className="sub">Office address</div>
                        <div className="phone">(603) 555-0123</div>
                      </div>
                    </li>
                    <li className="animate__fadeInUp animate__animated">
                      <div className="icon">
                        <svg
                          width={48}
                          height={49}
                          viewBox="0 0 48 49"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M40 8.5H8C5.79086 8.5 4 10.2909 4 12.5V36.5C4 38.7091 5.79086 40.5 8 40.5H40C42.2091 40.5 44 38.7091 44 36.5V12.5C44 10.2909 42.2091 8.5 40 8.5Z"
                            stroke="#F1913D"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M44 14.5L26.06 25.9C25.4425 26.2869 24.7286 26.492 24 26.492C23.2714 26.492 22.5575 26.2869 21.94 25.9L4 14.5"
                            stroke="#F1913D"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="content">
                        <div className="sub">Nee live help</div>
                        <p>proty-support@gmail.com</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        videoId={"XHOmBV4js_E"}
      />
    </>
  );
}
