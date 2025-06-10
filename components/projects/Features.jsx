"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const features = [
  { icon: "icon-swimming-pool", title: "Infinity pool" },
  { icon: "icon-sky-garden", title: "Sky garden" },
  { icon: "icon-children-play", title: "Children’s play" },
  { icon: "icon-spa", title: "Spa and sauna" },
  { icon: "icon-swimming-pool", title: "Infinity pool" },
  { icon: "icon-sky-garden", title: "Sky garden" },
  { icon: "icon-children-play", title: "Children’s play" },
  { icon: "icon-spa", title: "Spa and sauna" },
];

export default function Features() {
  return (
    <div className="tf-spacing-7">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section mb-46 text-center gap-30 mb-55">
              <h2 className="title split-text effect-right">Home amenities</h2>
              <p className="text-1 split-text split-lines-transform">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                id risus est. <br />
                Ut efficitur dignissim ante, nec bibendum odio ullamcorper ut.
              </p>
            </div>
            <Swiper
              className="swiper sw-layout style-pagination"
              spaceBetween={12}
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              modules={[Navigation, Pagination]}
              pagination={{
                clickable: true,
                el: ".spd444",
              }}
              navigation={{
                prevEl: ".snbp444",
                nextEl: ".snbn444",
              }}
            >
              {features.map((feature, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div
                    className="icons-box style-8 effec-icon wow animate__zoomIn animate__animated"
                    data-wow-duration="1s"
                    data-wow-delay="0s"
                  >
                    <div className="tf-icon">
                      <i className={feature.icon} />
                    </div>
                    <h5 className="title text-center">
                      <a href="#">{feature.title}</a>
                    </h5>
                    <span className="line" />
                    <p className="text-1 text-center">
                      We are not loud, noisy and full of our own
                      self-importance. As your agent we know we work for you.
                    </p>
                  </div>
                </SwiperSlide>
              ))}
              <div className="mb-56"></div>
              <div className="sw-wrap-btn">
                <div className="swiper-button-prev sw-button nav-prev-layout snbp444">
                  <i className="icon-arrow-left-3" />
                </div>
                <div className="sw-pagination sw-pagination-layout text-center spd444" />
                <div className="swiper-button-next sw-button nav-next-layout snbn444">
                  <i className="icon-arrow-right-3" />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
