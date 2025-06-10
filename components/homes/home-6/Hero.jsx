"use client";
import Image from "next/image";
import OdometerComponent from "@/components/common/OdometerComponent";
import { siteContent } from "@/data/siteContent"; // Import centralized content
// Removed heroSlides import as data is now in siteContent
import { useState } from "react";
import { EffectCreative, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero() {
  const [thumbsSwiper1, setThumbsSwiper1] = useState(null);
  const [thumbsSwiper2, setThumbsSwiper2] = useState(null);
  const [thumbsSwiper3, setThumbsSwiper3] = useState(null);

  return (
    <div className="page-title home06">
      <div className="tf-container xl">
        <div className="row">
          <div className="col-12">
            <div className="wrap tf-slider style-1">
              <div className="left">
                <Swiper
                  dir="ltr"
                  className="swiper hero-thumbs-1 effect-content-slide"
                  thumbs={{ swiper: thumbsSwiper1 }} // Connect to both thumbnail sliders
                  onSwiper={setThumbsSwiper2}
                  modules={[Thumbs, Navigation]}
                  navigation={{
                    prevEl: ".snbhp1",
                    nextEl: ".snbhn1",
                  }}
                  onSlideChange={(swiper) =>
                    thumbsSwiper3.slideTo(swiper.activeIndex)
                  }
                >
                  {siteContent.hero.slides.map((slide, index) => ( // Use siteContent
                    <SwiperSlide className="swiper-slide" key={index}>
                      <div className="heading">
                        <div className="effect-item effect-1 effect-down">
                          <div
                            className="text-display fw-5 title "
                            dangerouslySetInnerHTML={{ __html: `Your <span class='text_white'>Trusted ${siteContent.agent.location} Realtor</span>: Meet <span class='text_white'>${siteContent.agent.name}</span>` }} // Construct title dynamically
                          ></div>
                        </div>
                        <div className="item flex-wrap-sm">
                          <div className="img-wrap effect-item effect-left effect-2">
                            <Image
                              alt={`${siteContent.agent.name} Realtor`} // Construct alt text dynamically
                              width={214} // Keep original dimensions? Or make configurable? Keep for now.
                              height={209}
                              src={siteContent.hero.slides[0].smallImage.src} // Use src from siteContent
                            />
                          </div>
                          <div className="content effect-item effect-up effect-3">
                            <p className="text-1">{siteContent.hero.slides[0].description}</p>
                            <a
                              href="/contact"
                              className="tf-btn bg-color-primary pd-26 rounded-cycle height-2"
                            >
                              {siteContent.hero.slides[0].buttonText} {/* Use button text from siteContent */}
                              {/* Assuming icon remains the same, or could be added to siteContent */}
                              <Image
                                alt=""
                                src="icons/arrow-down-3.svg"
                                width={24}
                                height={24}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="bot flex-wrap-md gap-10 align-items-center">
                  <div className="wrap-counter">
                    <div className="counter-item style-3">
                      <div className="count">
                        <div className="counter-number">
                          <div className="odometer style-3 style-3-1">
                            <OdometerComponent max={250} /> {/* Keep Odometer, value could be added to siteContent if needed */}
                          </div>
                          <span className="sub plus">+</span>
                        </div>
                        <p className="text-1">{siteContent.hero.counter1Label}</p>
                      </div>
                    </div>
                    <div className="counter-item style-3">
                      <div className="count">
                        <div className="counter-number">
                          <div className="odometer style-3 style-3-2">
                            {" "}
                            <OdometerComponent max={siteContent.agent.experienceYears} /> {/* Use experience years */}
                          </div>
                          <span className="sub plus">+</span>
                        </div>
                        <p className="text-1">{siteContent.hero.counter2Label}</p>
                      </div>
                    </div>
                  </div>
                  <Swiper
                    dir="ltr"
                    className="swiper thumbs-sw-pagi-2"
                    spaceBetween={16}
                    slidesPerView={2}
                    onSwiper={setThumbsSwiper1}
                    modules={[Thumbs]}
                  >
                    {siteContent.hero.paginationImages.map((slide, index) => ( // Use siteContent
                      <SwiperSlide className="swiper-slide" key={index}>
                        <div className="pagination">
                          <div className="img-thumb-pagi">
                            <Image
                              alt={slide.alt} // Use alt from siteContent
                              width={480} // Keep original dimensions
                              height={220}
                              src={slide.src} // Use src from siteContent
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}

                    <div className="swiper-button-prev sw-button style-3 sw-thumbs-prev-2 snbhp1">
                      <div className="icon icon-1">
                        <svg
                          width={33}
                          height={24}
                          viewBox="0 0 33 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.5343 23L16.3606 22.761C12.9387 18.054 8.32799 14.3404 3 12V12V12C8.32798 9.6596 12.9387 5.94599 16.3606 1.239L16.5343 0.999999"
                            stroke="white"
                            strokeWidth={2}
                          />
                          <path
                            d="M3.99805 12L33.0002 12"
                            stroke="white"
                            strokeWidth={2}
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="swiper-button-next sw-button style-3 sw-thumbs-next-2 snbhn1">
                      <div className="icon icon-2">
                        <svg
                          width={33}
                          height={24}
                          viewBox="0 0 33 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.4657 23L16.6394 22.761C20.0613 18.054 24.672 14.3404 30 12V12V12C24.672 9.6596 20.0613 5.94599 16.6394 1.239L16.4657 0.999999"
                            stroke="white"
                            strokeWidth={2}
                          />
                          <path
                            d="M29.002 12L-0.000156045 12"
                            stroke="white"
                            strokeWidth={2}
                          />
                        </svg>
                      </div>
                    </div>
                  </Swiper>
                </div>
              </div>
              <div className="right">
                <Swiper
                  dir="ltr"
                  className="swiper hero-thumbs-2"
                  thumbs={{ swiper: thumbsSwiper2 }} // Connect to both thumbnail sliders
                  modules={[Thumbs, EffectCreative]}
                  grabCursor={true}
                  effect={"creative"}
                  creativeEffect={{
                    prev: {
                      shadow: true,
                      translate: ["-20%", 0, -1],
                    },
                    next: {
                      translate: ["100%", 0, 0],
                    },
                  }}
                  onSwiper={setThumbsSwiper3}
                >
                  {siteContent.hero.mainImages.map((slide, index) => ( // Use siteContent
                    <SwiperSlide className="swiper-slide" key={index}>
                      <div className="">
                        <Image
                          className="lazyload slide-inner"
                          data-src={slide.src} // Use src from siteContent
                          alt={slide.alt} // Use alt from siteContent
                          width={688} // Keep original dimensions
                          height={816}
                          src={slide.src} // Use src from siteContent
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <form
              className="form-search style-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <fieldset>
                <input
                  className=""
                  type="text"
                  placeholder={siteContent.hero.searchPlaceholder}
                  name="text"
                  tabIndex={2}
                  defaultValue=""
                  aria-required="true"
                  required
                />
              </fieldset>
              <div className="icon">
                <svg
                  width={18}
                  height={19}
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.25 17.0001C11.0511 17.0001 10.8603 16.9211 10.7197 16.7804C10.579 16.6398 10.5 16.449 10.5 16.2501V13.2501C10.5 13.1267 10.5304 13.0051 10.5887 12.8963C10.6469 12.7874 10.7311 12.6946 10.8337 12.6261L13.0837 11.1261C13.207 11.0439 13.3518 11 13.5 11C13.6482 11 13.793 11.0439 13.9163 11.1261L16.1663 12.6261C16.2689 12.6946 16.3531 12.7874 16.4113 12.8963C16.4696 13.0051 16.5 13.1267 16.5 13.2501V16.2501C16.5 16.449 16.421 16.6398 16.2803 16.7804C16.1397 16.9211 15.9489 17.0001 15.75 17.0001H11.25Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5 8C13.5 6.4087 12.8679 4.88258 11.7426 3.75736C10.6174 2.63214 9.0913 2 7.5 2C5.9087 2 4.38258 2.63214 3.25736 3.75736C2.13214 4.88258 1.5 6.4087 1.5 8C1.5 11.7448 5.65425 15.6447 7.04925 16.8492C7.17928 16.9468 7.33747 16.9994 7.5 16.9993"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5 17V14.75"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 10.25C8.74264 10.25 9.75 9.24264 9.75 8C9.75 6.75736 8.74264 5.75 7.5 5.75C6.25736 5.75 5.25 6.75736 5.25 8C5.25 9.24264 6.25736 10.25 7.5 10.25Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="button-submit">
                <button
                  className="tf-btn pd-26 bg-color-primary rounded-cycle"
                  type="submit"
                  onClick={() => window.location.href='/contact'}
                >
                  <span className="md-hide">{siteContent.hero.searchButtonText}</span>
                  <i className="icon-MagnifyingGlass" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
