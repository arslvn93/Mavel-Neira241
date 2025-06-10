"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function Details({ project }) {
  return (
    <div>
      <Gallery>
        <div className="tf-container slider-layout-left">
          <div className="row">
            <div className="col-12">
              <div className="box-project-details">
                <div className="left">
                  <div className="wrap-image">
                    <div className="image mb-12">
                      <Item
                        original={"/images/section/project-details-1.jpg"}
                        thumbnail={"/images/section/project-details-1.jpg"}
                        width={900}
                        height={600}
                      >
                        {({ ref, open }) => (
                          <a
                            onClick={open}
                            className="image-wrap relative d-block"
                          >
                            <Image
                              ref={ref}
                              className="lazyload"
                              data-src="/images/section/project-details-1.jpg"
                              alt=""
                              src="/images/section/project-details-1.jpg"
                              width={900}
                              height={600}
                            />
                          </a>
                        )}
                      </Item>
                    </div>
                    <div className="bot d-flex gap-12">
                      <div className="image">
                        <Item
                          original={"/images/section/project-details-2.jpg"}
                          thumbnail={"/images/section/project-details-2.jpg"}
                          width={444}
                          height={400}
                        >
                          {({ ref, open }) => (
                            <a
                              onClick={open}
                              className="image-wrap relative d-block"
                            >
                              <Image
                                ref={ref}
                                className="lazyload"
                                data-src="/images/section/project-details-2.jpg"
                                alt=""
                                src="/images/section/project-details-2.jpg"
                                width={444}
                                height={400}
                              />
                            </a>
                          )}
                        </Item>
                      </div>
                      <div className="image">
                        <Item
                          original={"/images/section/project-details-3.jpg"}
                          thumbnail={"/images/section/project-details-3.jpg"}
                          width={444}
                          height={400}
                        >
                          {({ ref, open }) => (
                            <a
                              onClick={open}
                              className="image-wrap relative d-block"
                            >
                              <Image
                                ref={ref}
                                className="lazyload"
                                data-src="/images/section/project-details-3.jpg"
                                alt=""
                                src="/images/section/project-details-3.jpg"
                                width={444}
                                height={400}
                              />
                            </a>
                          )}
                        </Item>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="content">
                    <div className="heading">
                      <h2 className="title text-color-heading fw-6">
                        {project.title}
                      </h2>
                    </div>
                    <p className="description text-1 text-color-default">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris id risus est. Ut efficitur dignissim ante, nec
                      bibendum odio ullamcorper ut. Vivamus condimentum gravida
                      condimentum. Aliquam placerat pharetra cursus. Maecenas
                      malesuada ultrices rhoncus. Aenean ornare scelerisque
                      venenatis.
                    </p>
                    <div className="d-flex justify-content-between align-items-center gap-12 wrap-price">
                      <div className="text-15 fw-2 text-color-heading">
                        $1,250,000
                      </div>
                      <a
                        href="#"
                        className="tf-btn pd-15 style-border rounded-cycle height-3"
                      >
                        Split options
                        <i className="icon-arrow-up-right" />
                      </a>
                    </div>
                  </div>
                  <ul className="list-info">
                    <li>
                      <span className="text-1 text-color-heading fw-6">
                        Type
                      </span>
                      <p className="text-1 text-color-heading">
                        Studio, Shophouse
                      </p>
                    </li>
                    <li>
                      <span className="text-1 text-color-heading fw-6">
                        Status
                      </span>
                      <p className="text-1 text-color-heading">Finish</p>
                    </li>
                    <li>
                      <span className="text-1 text-color-heading fw-6">
                        Location
                      </span>
                      <p className="text-1 text-color-heading">
                        102 Ingraham St, Brooklyn, NY 11237
                      </p>
                    </li>
                    <li>
                      <span className="text-1 text-color-heading fw-6">
                        Total Towers
                      </span>
                      <p className="text-1 text-color-heading">5</p>
                    </li>
                    <li>
                      <span className="text-1 text-color-heading fw-6">
                        Year
                      </span>
                      <p className="text-1 text-color-heading">2024</p>
                    </li>
                  </ul>
                  <div className="group-agent d-flex justify-content-between align-items-center gap-10">
                    <div className="info-agent d-flex align-items-center">
                      <div className="avatar">
                        <Image
                          alt="avatar"
                          src="/images/avatar/avatar-7.jpg"
                          width={128}
                          height={128}
                        />
                      </div>
                      <div className="info">
                        <div className="name text-11 text-color-heading">
                          Marvin McKinney
                        </div>
                        <p className="text-1 text-color-default">Local agent</p>
                      </div>
                    </div>
                    <Link
                      href={`/contact`}
                      className="tf-btn pd-7 style-border rounded-cycle height-3"
                    >
                      Contact
                      <i className="icon-arrow-up-right" />
                    </Link>
                  </div>
                  <a
                    href="#"
                    className="tf-btn w-full bg-color-secondary btn-main d-flex flex-column rounded-cycle"
                  >
                    <span className="text_white text-14 fw-7">
                      Request a tour
                    </span>
                    <span className="text_white text-1 fw-3">
                      Earliest at 11:00 tomorrow
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </Gallery>
    </div>
  );
}
