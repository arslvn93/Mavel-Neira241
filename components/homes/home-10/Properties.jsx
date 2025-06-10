"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { properties7 } from "@/data/properties";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
export default function Properties() {
  return (
    <div className="section-listing">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center gap-30 mb-56">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Premium properties by Proty" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sit amet dapibus justo. Nam nec libero diam. <br />
                Pellentesque vel efficitur justo. Ut at ipsum turpis.
              </p>
            </div>
            <div
              className="swiper style-pagination tf-sw-mobile sw-swiper-767"
              data-screen={767}
              data-preview={1}
              data-space={15}
            >
              <div className="swiper-wrapper tf-layout-mobile-md md-col-2 lg-col-3">
                {properties7.map((property) => (
                  <div className="swiper-slide" key={property.id}>
                    <div className="box-house hover-img style-8">
                      <div className="image-wrap">
                        <Link href={`/property-detail-v1/${property.id}`}>
                          <Image
                            className="lazyload"
                            data-src={property.imageSrc}
                            alt={property.title}
                            src={property.imageSrc}
                            width={property.imageWidth}
                            height={property.imageHeight}
                          />
                        </Link>
                        <ul className="box-tag flex gap-8">
                          {property.featured && (
                            <li className="flat-tag text-4 bg-main fw-6 text_white">
                              Featured
                            </li>
                          )}
                          {property.forSale && (
                            <li className="flat-tag text-4 bg-3 fw-6 text_white">
                              For Sale
                            </li>
                          )}
                        </ul>
                        {property.rooms > 0 || property.views > 0 ? (
                          <ul className="status flex gap-8">
                            {property.rooms > 0 && (
                              <li className="flat-tag text-4 bg-3 fw-6 text_white">
                                <i className="icon-img" />
                                {property.rooms}
                              </li>
                            )}
                            {property.views > 0 && (
                              <li className="flat-tag text-4 bg-3 fw-6 text_white">
                                <i className="icon-view-2" />
                                {property.views}
                              </li>
                            )}
                          </ul>
                        ) : null}
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
                        <h4 className="price">${property.price}</h4>{" "}
                        {/* Add $ sign if needed in presentation */}
                      </div>
                      <div className="content">
                        <div className="tag-catefories">
                          {property.category}
                        </div>
                        <h5 className="title">
                          <Link href={`/property-detail-v1/${property.id}`}>
                            {property.title}
                          </Link>
                        </h5>
                        <p className="location text-1 flex items-center gap-6">
                          <i className="icon-location" /> {property.location}
                        </p>
                        <div className="bot flex justify-between items-center">
                          <div className="info-agent d-flex align-items-center">
                            <div className="avatar">
                              <Image
                                alt="avatar"
                                src={property.agentAvatar}
                                width={128}
                                height={128}
                              />
                            </div>
                            <div className="name text-1 text-color-default">
                              {property.agentName}
                            </div>
                          </div>
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
                ))}
              </div>
              <div className="sw-pagination sw-pagination-mb-1 text-center d-lg-none d-block" />
            </div>
            <Swiper
              className="swiper style-pagination tf-sw-mobile sw-swiper-767"
              spaceBetween={15}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd449",
              }}
            >
              {properties7.map((property) => (
                <SwiperSlide className="swiper-slide" key={property.id}>
                  <div className="box-house hover-img style-8">
                    <div className="image-wrap">
                      <Link href={`/property-detail-v1/${property.id}`}>
                        <Image
                          className="lazyload"
                          data-src={property.imageSrc}
                          alt={property.title}
                          src={property.imageSrc}
                          width={property.imageWidth}
                          height={property.imageHeight}
                        />
                      </Link>
                      <ul className="box-tag flex gap-8">
                        {property.featured && (
                          <li className="flat-tag text-4 bg-main fw-6 text_white">
                            Featured
                          </li>
                        )}
                        {property.forSale && (
                          <li className="flat-tag text-4 bg-3 fw-6 text_white">
                            For Sale
                          </li>
                        )}
                      </ul>
                      {property.rooms > 0 || property.views > 0 ? (
                        <ul className="status flex gap-8">
                          {property.rooms > 0 && (
                            <li className="flat-tag text-4 bg-3 fw-6 text_white">
                              <i className="icon-img" />
                              {property.rooms}
                            </li>
                          )}
                          {property.views > 0 && (
                            <li className="flat-tag text-4 bg-3 fw-6 text_white">
                              <i className="icon-view-2" />
                              {property.views}
                            </li>
                          )}
                        </ul>
                      ) : null}
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
                      <h4 className="price">${property.price}</h4>{" "}
                      {/* Add $ sign if needed in presentation */}
                    </div>
                    <div className="content">
                      <div className="tag-catefories">{property.category}</div>
                      <h5 className="title">
                        <Link href={`/property-detail-v1/${property.id}`}>
                          {property.title}
                        </Link>
                      </h5>
                      <p className="location text-1 flex items-center gap-6">
                        <i className="icon-location" /> {property.location}
                      </p>
                      <div className="bot flex justify-between items-center">
                        <div className="info-agent d-flex align-items-center">
                          <div className="avatar">
                            <Image
                              alt="avatar"
                              src={property.agentAvatar}
                              width={128}
                              height={128}
                            />
                          </div>
                          <div className="name text-1 text-color-default">
                            {property.agentName}
                          </div>
                        </div>
                        <Link
                          href={`/property-detail-v1/${property.id}`}
                          className="tf-btn style-border pd-4"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
