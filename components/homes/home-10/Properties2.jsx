"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { properties8 } from "@/data/properties";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
export default function Properties2() {
  return (
    <div className="section-listing tf-spacing-13">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-48">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Best properties for sale" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                Thousands of luxury home enthusiasts just like you visit our
                website.
              </p>
            </div>
            <div
              className="swiper style-pagination tf-sw-mobile-1 sw-swiper-992"
              data-screen={992}
              data-preview={1}
              data-space={15}
            >
              <div className="swiper-wrapper tf-layout-mobile-lg lg-col-2">
                {properties8.map((property) => (
                  <div className="swiper-slide" key={property.id}>
                    <div className="box-house hover-img style-list v2">
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
                            <li className="flat-tag text-4 bg-main fw-6 sale text_white">
                              For Sale
                            </li>
                          )}
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
                        <div className="tag-catefories d-flex align-items-center gap-8">
                          <i className="icon-file" /> {property.category}
                        </div>
                        <h5 className="title">
                          <Link
                            href={`/property-detail-v1/${property.id}`}
                            className="text_white link"
                          >
                            {property.title}
                          </Link>
                        </h5>
                        <p className="location text-1 flex items-center gap-6 text-color2">
                          <i className="icon-location" /> {property.location}
                        </p>
                        <ul className="meta-list flex">
                          <li className="text-1 flex">
                            <i className="icon-bed-4" />
                            <span>{property.beds}</span>
                          </li>
                          <li className="text-1 flex">
                            <i className="icon-bath-1" />
                            <span>{property.baths}</span>
                          </li>
                          <li className="text-1 flex">
                            <i className="icon-sqft-1" />
                            <span>{property.sqft}</span>Sqft
                          </li>
                        </ul>
                        <div className="bot flex justify-between items-center">
                          <div className="info-agent d-flex align-items-center gap-8">
                            <div className="avatar">
                              <Image
                                alt="avatar"
                                src={property.agentAvatar}
                                width={128}
                                height={128} // or 200 if the source image is larger
                              />
                            </div>
                            <div className="name text-1 text_white">
                              {property.agentName}
                            </div>
                          </div>
                          <h5 className="price">${property.price}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="sw-pagination sw-pagination-mb-1 text-center mt-20 d-block d-lg-none d-block" />
            </div>
            <Swiper
              className="swiper style-pagination tf-sw-mobile-1 sw-swiper-992"
              spaceBetween={15}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd450",
              }}
            >
              {properties8.map((property) => (
                <SwiperSlide className="swiper-slide" key={property.id}>
                  <div className="box-house hover-img style-list v2">
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
                          <li className="flat-tag text-4 bg-main fw-6 sale text_white">
                            For Sale
                          </li>
                        )}
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
                      <div className="tag-catefories d-flex align-items-center gap-8">
                        <i className="icon-file" /> {property.category}
                      </div>
                      <h5 className="title">
                        <Link
                          href={`/property-detail-v1/${property.id}`}
                          className="text_white link"
                        >
                          {property.title}
                        </Link>
                      </h5>
                      <p className="location text-1 flex items-center gap-6 text-color2">
                        <i className="icon-location" /> {property.location}
                      </p>
                      <ul className="meta-list flex">
                        <li className="text-1 flex">
                          <i className="icon-bed-4" />
                          <span>{property.beds}</span>
                        </li>
                        <li className="text-1 flex">
                          <i className="icon-bath-1" />
                          <span>{property.baths}</span>
                        </li>
                        <li className="text-1 flex">
                          <i className="icon-sqft-1" />
                          <span>{property.sqft}</span>Sqft
                        </li>
                      </ul>
                      <div className="bot flex justify-between items-center">
                        <div className="info-agent d-flex align-items-center gap-8">
                          <div className="avatar">
                            <Image
                              alt="avatar"
                              src={property.agentAvatar}
                              width={128}
                              height={128} // or 200 if the source image is larger
                            />
                          </div>
                          <div className="name text-1 text_white">
                            {property.agentName}
                          </div>
                        </div>
                        <h5 className="price">${property.price}</h5>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="sw-pagination sw-pagination-mb-1 text-center mt-20 d-block d-lg-none d-block spd450" />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
