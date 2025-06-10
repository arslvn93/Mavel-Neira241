"use client";
import OdometerComponent from "@/components/common/OdometerComponent";
import Image from "next/image";
import { testimonials5 } from "@/data/testimonials";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Testimonials() {
  return (
    <div className="section-testimonials style-4">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-4 left">
            <div className="heading-section mb-62 gap-32">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Tursted by thousands of people all across the globe" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                We are committed to building long-term relationships with our
                clients based on trust and integrity.
              </p>
            </div>
            <div className="content">
              <div className="counter-item style-5 mb-30">
                <div className="count">
                  <div className="counter-number">
                    <div className="odometer style-5 style-5-1">
                      <OdometerComponent max={9} />
                    </div>
                    <span>.500</span>
                    <span className="sub plus">+</span>
                  </div>
                  <p className="text-1 mt_-5">Happy Clients</p>
                </div>
              </div>
              <ul className="img-group">
                <li>
                  <Image
                    alt="avatar"
                    src="/images/avatar/avatar-4.jpg"
                    width={128}
                    height={128}
                  />
                </li>
                <li>
                  <Image
                    alt="avatar"
                    src="/images/avatar/avatar-5.jpg"
                    width={128}
                    height={128}
                  />
                </li>
                <li>
                  <Image
                    alt="avatar"
                    src="/images/avatar/avatar-6.jpg"
                    width={128}
                    height={128}
                  />
                </li>
                <li>
                  <Image
                    alt="avatar"
                    src="/images/avatar/avatar-7.jpg"
                    width={128}
                    height={128}
                  />
                </li>
                <li>
                  <Image
                    alt="avatar"
                    src="/images/avatar/avatar-8.jpg"
                    width={128}
                    height={128}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 right">
            <div className="tf-grid-layout md-col-2 wrap home-10-testimonials">
              <Swiper
                dir="ltr"
                direction="vertical"
                className="infiniteslide autoplay-linear slider-1"
                data-clone={1}
                data-style="up"
                slidesPerView={"auto"}
                spaceBetween={30}
                autoplay={{
                  pauseOnMouseEnter: true,
                  reverseDirection: true,
                  delay: 1,
                }} // Equivalent to data-autoplay & data-autoplaytime
                slidesPerGroupAuto
                speed={5000} // Equivalent to data-speed
                loop
                modules={[Autoplay]}
              >
                {testimonials5.map((testimonial, index) => (
                  <SwiperSlide className="wg-testimonial style-2" key={index}>
                    <div className="ratings">
                      {/* Render stars based on the rating */}
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i className="icon-star" key={i} />
                      ))}
                    </div>
                    <p className="text-1 description">
                      {testimonial.description}
                    </p>
                    <div className="author">
                      <div className="avatar">
                        <Image
                          alt=""
                          src={testimonial.avatar}
                          width={testimonial.width}
                          height={testimonial.height}
                        />
                      </div>
                      <div className="content">
                        <h6 className="name">
                          <a href="#">{testimonial.name}</a>
                        </h6>
                        <p className="text-2">{testimonial.role}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                dir="ltr"
                direction="vertical"
                className="infiniteslide autoplay-linear"
                slidesPerView={"auto"}
                slidesPerGroupAuto
                spaceBetween={30}
                loop
                autoplay={{
                  pauseOnMouseEnter: true,
                  delay: 1,
                }} // Equivalent to data-autoplay & data-autoplaytime
                speed={5000} // Equivalent to data-speed
                modules={[Autoplay, FreeMode]}
              >
                {testimonials5.map((testimonial, index) => (
                  <SwiperSlide className="wg-testimonial style-2" key={index}>
                    <div className="ratings">
                      {/* Render stars based on the rating */}
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i className="icon-star" key={i} />
                      ))}
                    </div>
                    <p className="text-1 description">
                      {testimonial.description}
                    </p>
                    <div className="author">
                      <div className="avatar">
                        <Image
                          alt=""
                          src={testimonial.avatar}
                          width={testimonial.width}
                          height={testimonial.height}
                        />
                      </div>
                      <div className="content">
                        <h6 className="name">
                          <a href="#">{testimonial.name}</a>
                        </h6>
                        <p className="text-2">{testimonial.role}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
