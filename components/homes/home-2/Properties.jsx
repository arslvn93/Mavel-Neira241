"use client";

import { properties } from "@/data/properties";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
export default function Properties() {
  const [activeItem, setActiveItem] = useState("Michigan");
  const [filtered, setFiltered] = useState(properties);
  const items = [
    { name: "Michigan", listings: "10 Listing" },
    { name: "Oklahome", listings: "9 Listing" },
    { name: "Kentucky", listings: "10 Listing" },
    { name: "Nebraska", listings: "20 Listing" },
    { name: "Colorado", listings: "9 Listing" },
  ];
  useEffect(() => {
    setFiltered(properties.filter((elm) => elm.cities.includes(activeItem)));
  }, [activeItem]);

  const handleClick = (name) => {
    setActiveItem(name);
  };

  return (
    <section className="section-popular-searches tf-spacing-1">
      <div className="tf-container md">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-48">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Popular Searches" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                Thousands of luxury home enthusiasts just like you visit our
                website.
              </p>
            </div>
            <div className="widget-tabs style-2">
              <ul className="widget-menu-tab mb-48 overflow-x-auto">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className={`item-title hover-tooltip ${
                      activeItem === item.name ? "active" : ""
                    }`}
                    onClick={() => handleClick(item.name)}
                  >
                    {item.name}
                    <span className="tooltip">
                      {
                        properties.filter((elm) =>
                          elm.cities.includes(item.name)
                        ).length
                      }
                    </span>
                  </li>
                ))}
              </ul>
              <div className="widget-content-tab">
                <div className="widget-content-inner active">
                  <Swiper
                    dir="ltr"
                    className="swiper sw-layout style-pagination"
                    spaceBetween={15}
                    breakpoints={{
                      0: { slidesPerView: 1 },
                      575: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },
                      992: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                      },
                      1200: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                      },
                    }}
                    modules={[Pagination]}
                    pagination={{
                      el: ".spd7",
                    }}
                  >
                    {filtered.map((property) => (
                      <SwiperSlide className="swiper-slide" key={property.id}>
                        <div className="box-house hover-img">
                          <div className="image-wrap">
                            <Link href={`/property-detail-v1/${property.id}`}>
                              <Image
                                className="lazyload"
                                data-src={property.imageSrc}
                                alt=""
                                width={600}
                                height={401}
                                src={property.imageSrc}
                              />
                            </Link>
                            <ul className="box-tag flex gap-8">
                              <li className="flat-tag text-4 bg-main fw-6 text_white">
                                Featured
                              </li>
                              <li className="flat-tag text-4 bg-3 fw-6 text_white">
                                For Sale
                              </li>
                            </ul>
                            <div className="list-btn flex gap-8">
                              <a
                                href="#"
                                className="btn-icon save hover-tooltip"
                              >
                                <i className="icon-save" />
                                <span className="tooltip">Add Favorite</span>
                              </a>
                              <a
                                href="#"
                                className="btn-icon find hover-tooltip"
                              >
                                <i className="icon-find-plus" />
                                <span className="tooltip">Quick View</span>
                              </a>
                            </div>
                          </div>
                          <div className="content">
                            <h5 className="title">
                              <Link href={`/property-detail-v1/${property.id}`}>
                                {property.title}
                              </Link>
                            </h5>
                            <p className="location text-1 flex items-center gap-8">
                              <i className="icon-location" />
                              {property.location}
                            </p>
                            <ul className="meta-list flex">
                              <li className="text-1 flex">
                                <span>{property.beds}</span>Beds
                              </li>
                              <li className="text-1 flex">
                                <span>{property.baths}</span>Baths
                              </li>
                              <li className="text-1 flex">
                                <span>{property.sqft}</span>Sqft
                              </li>
                            </ul>
                            <div className="bot flex justify-between items-center">
                              <h5 className="price">
                                ${property.price.toLocaleString()}
                              </h5>
                              <div className="wrap-btn flex">
                                <a
                                  href="#"
                                  className="compare flex gap-8 items-center text-1"
                                >
                                  <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M16.6922 14.1922L14.1922 16.6922C14.0749 16.8095 13.9159 16.8754 13.75 16.8754C13.5842 16.8754 13.4251 16.8095 13.3078 16.6922C13.1905 16.5749 13.1247 16.4159 13.1247 16.25C13.1247 16.0842 13.1905 15.9251 13.3078 15.8078L14.7414 14.375H3.75C3.58424 14.375 3.42527 14.3092 3.30806 14.192C3.19085 14.0747 3.125 13.9158 3.125 13.75C3.125 13.5843 3.19085 13.4253 3.30806 13.3081C3.42527 13.1909 3.58424 13.125 3.75 13.125H14.7414L13.3078 11.6922C13.1905 11.5749 13.1247 11.4159 13.1247 11.25C13.1247 11.0842 13.1905 10.9251 13.3078 10.8078C13.4251 10.6905 13.5842 10.6247 13.75 10.6247C13.9159 10.6247 14.0749 10.6905 14.1922 10.8078L16.6922 13.3078C16.7503 13.3659 16.7964 13.4348 16.8279 13.5107C16.8593 13.5865 16.8755 13.6679 16.8755 13.75C16.8755 13.8321 16.8593 13.9135 16.8279 13.9893C16.7964 14.0652 16.7503 14.1342 16.6922 14.1922ZM5.80782 9.1922C5.92509 9.30947 6.08415 9.37536 6.25 9.37536C6.41586 9.37536 6.57492 9.30947 6.69219 9.1922C6.80947 9.07492 6.87535 8.91586 6.87535 8.75001C6.87535 8.58416 6.80947 8.4251 6.69219 8.30782L5.2586 6.87501H16.25C16.4158 6.87501 16.5747 6.80916 16.6919 6.69195C16.8092 6.57474 16.875 6.41577 16.875 6.25001C16.875 6.08425 16.8092 5.92528 16.6919 5.80807C16.5747 5.69086 16.4158 5.62501 16.25 5.62501H5.2586L6.69219 4.1922C6.80947 4.07492 6.87535 3.91586 6.87535 3.75001C6.87535 3.58416 6.80947 3.4251 6.69219 3.30782C6.57492 3.19055 6.41586 3.12466 6.25 3.12466C6.08415 3.12466 5.92509 3.19055 5.80782 3.30782L3.30782 5.80782C3.24971 5.86587 3.20361 5.9348 3.17215 6.01067C3.1407 6.08655 3.12451 6.16788 3.12451 6.25001C3.12451 6.33215 3.1407 6.41348 3.17215 6.48935C3.20361 6.56522 3.24971 6.63415 3.30782 6.6922L5.80782 9.1922Z"
                                      fill="#5C5E61"
                                    />
                                  </svg>
                                  Compare
                                </a>
                                <Link
                                  href={`/property-detail-v1/${property.id}`}
                                  className="tf-btn style-border pd-4"
                                >
                                  Details
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                    <div className="mb-44"></div>
                    <div className="sw-pagination sw-pagination-layout text-center spd7 " />
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
