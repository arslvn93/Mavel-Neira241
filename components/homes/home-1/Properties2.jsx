"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { properties6 } from "@/data/properties";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
export default function Properties2() {
  return (
    <section className="section-listing tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-48">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Open Houses Listings" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                Thousands of luxury home enthusiasts just like you visit our
                website.
              </p>
            </div>
            <div
              className="swiper style-pagination tf-sw-mobile sw-swiper-992"
              data-screen={992}
              data-preview={1}
              data-space={15}
            >
              <div className="swiper-wrapper tf-layout-mobile-lg lg-col-2 ">
                {properties6.map((property) => (
                  <div className="swiper-slide" key={property.id}>
                    <div className="box-house hover-img style-list">
                      <div className="image-wrap">
                        <Link href={`/property-detail-v1/${property.id}`}>
                          <Image
                            className="lazyload"
                            data-src={property.imageSrc}
                            alt=""
                            src={property.imageSrc}
                            width={435}
                            height={408}
                          />
                        </Link>
                        <ul className="box-tag flex gap-8">
                          <li className="flat-tag text-4 bg-main fw-6 text_white">
                            For Sale
                          </li>
                        </ul>
                        <div className="list-btn flex gap-8">
                          <a href="#" className="btn-icon save hover-tooltip">
                            <i className="icon-save" />
                            <span className="tooltip">Add Favorite</span>
                          </a>
                          <a href="#" className="btn-icon find hover-tooltip">
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
                        <p className="location text-1 line-clamp-1">
                          <i className="icon-location" /> {property.location}
                        </p>
                        <ul className="meta-list flex">
                          <li className="meta-item">
                            <div className="text-9 flex">
                              <i className="icon-bed" />
                              Beds<span>{property.beds}</span>
                            </div>
                            <div className="text-9 flex">
                              <i className="icon-sqft" />
                              Sqft<span>{property.sqft}</span>
                            </div>
                          </li>
                          <li className="meta-item">
                            <div className="text-9 flex">
                              <i className="icon-bath" />
                              Baths<span>{property.baths}</span>
                            </div>
                            <div className="text-9 flex">
                              <i className="icon-garage" />
                              Garage<span>{property.garage}</span>
                            </div>
                          </li>
                        </ul>
                        <div className="bot flex justify-between items-center">
                          <h5 className="price">
                            {property.price.toLocaleString()}
                          </h5>
                          <div className="wrap-btn flex">
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
                  </div>
                ))}
              </div>
              <div className="sw-pagination sw-pagination-mb text-center mt-20 d-lg-none d-block" />
            </div>
            <Swiper
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd447",
              }}
              spaceBetween={15}
              className="swiper style-pagination tf-sw-mobile sw-swiper-992"
            >
              {properties6.map((property) => (
                <SwiperSlide className="swiper-slide" key={property.id}>
                  <div className="box-house hover-img style-list">
                    <div className="image-wrap">
                      <Link href={`/property-detail-v1/${property.id}`}>
                        <Image
                          className="lazyload"
                          data-src={property.imageSrc}
                          alt=""
                          src={property.imageSrc}
                          width={435}
                          height={408}
                        />
                      </Link>
                      <ul className="box-tag flex gap-8">
                        <li className="flat-tag text-4 bg-main fw-6 text_white">
                          For Sale
                        </li>
                      </ul>
                      <div className="list-btn flex gap-8">
                        <a href="#" className="btn-icon save hover-tooltip">
                          <i className="icon-save" />
                          <span className="tooltip">Add Favorite</span>
                        </a>
                        <a href="#" className="btn-icon find hover-tooltip">
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
                      <p className="location text-1 line-clamp-1">
                        <i className="icon-location" /> {property.location}
                      </p>
                      <ul className="meta-list flex">
                        <li className="meta-item">
                          <div className="text-9 flex">
                            <i className="icon-bed" />
                            Beds<span>{property.beds}</span>
                          </div>
                          <div className="text-9 flex">
                            <i className="icon-sqft" />
                            Sqft<span>{property.sqft}</span>
                          </div>
                        </li>
                        <li className="meta-item">
                          <div className="text-9 flex">
                            <i className="icon-bath" />
                            Baths<span>{property.baths}</span>
                          </div>
                          <div className="text-9 flex">
                            <i className="icon-garage" />
                            Garage<span>{property.garage}</span>
                          </div>
                        </li>
                      </ul>
                      <div className="bot flex justify-between items-center">
                        <h5 className="price">
                          {property.price.toLocaleString()}
                        </h5>
                        <div className="wrap-btn flex">
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

              <div className="sw-pagination sw-pagination-mb text-center mt-20 d-lg-none d-block spd447" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
