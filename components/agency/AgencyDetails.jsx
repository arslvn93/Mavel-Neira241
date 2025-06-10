"use client";
import React from "react";
import Listings from "../agents/Listings";
import Link from "next/link";
import Image from "next/image";
import { properties4 } from "@/data/properties";
export default function AgencyDetails({ agency }) {
  return (
    <section className="section-agency-details">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-8">
            <div className="agency-details mb-48">
              <div className="image-wrap">
                <Image
                  className="lazyload"
                  data-src="/images/section/agency-details.jpg"
                  alt=""
                  width={840}
                  height={300}
                  src="/images/section/agency-details.jpg"
                />
              </div>
              <div className="content">
                <div className="logo">
                  <Image
                    alt=""
                    width={380}
                    height={380}
                    src="/images/brands/brand-5.1.jpg"
                  />
                </div>
                <div className="info">
                  <div className="name text-8 fw-7 text-color-heading">
                    {agency.name}
                  </div>
                  <p className="location text-1 flex items-center gap-8">
                    <i className="icon-location" /> 2118 Thornridge Cir.
                    Syracuse, Connecticut 35624
                  </p>
                </div>
              </div>
            </div>
            <div className="box-description mb-48">
              <div className="widget about">
                <h6 className="title">About Lorem House</h6>
                <p className="text-1 mb-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam risus leo, blandit vitae diam a, vestibulum viverra
                  nisi. Vestibulum ullamcorper velit eget mattis aliquam. Proin
                  dapibus luctus pulvinar. Integer et libero ut purus bibendum
                  gravida non ac tellus.
                </p>
                <p className="text-1">
                  Aliquam non lorem consequat, luctus dui et, auctor nisi.
                  Aenean placerat sapien at augue lacinia, non semper urna
                  tempor. Mauris sit amet elit orci.
                </p>
              </div>
              <div className="widget location">
                <h6 className="title">Location</h6>
                <iframe
                  className="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d135905.11693909427!2d-73.95165795400088!3d41.17584829642291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1727094281524!5m2!1sen!2s"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <Listings />
            <ul className="wg-pagination">
              <li className="arrow">
                <a href="#">
                  <i className="icon-arrow-left" />
                </a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li className="active">
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">...</a>
              </li>
              <li>
                <a href="#">20</a>
              </li>
              <li className="arrow">
                <a href="#">
                  <i className="icon-arrow-right" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <div className="tf-sidebar sticky-sidebar">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="form-contact-agent style-2 mb-30"
              >
                <h4 className="heading-title mb-30">Contact Me</h4>
                <fieldset>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    name="name"
                    id="name"
                    required
                  />
                </fieldset>
                <fieldset>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    id="email-contact"
                    required
                  />
                </fieldset>
                <fieldset className="phone">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                    name="phone"
                    id="phone"
                    required
                  />
                </fieldset>
                <fieldset>
                  <textarea
                    name="message"
                    cols={30}
                    rows={10}
                    placeholder="Message"
                    id="message-contact"
                    required
                    defaultValue={""}
                  />
                </fieldset>
                <div className="wrap-btn">
                  <a href="#" className="tf-btn bg-color-primary w-full">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.125 5.625V14.375C18.125 14.8723 17.9275 15.3492 17.5758 15.7008C17.2242 16.0525 16.7473 16.25 16.25 16.25H3.75C3.25272 16.25 2.77581 16.0525 2.42417 15.7008C2.07254 15.3492 1.875 14.8723 1.875 14.375V5.625M18.125 5.625C18.125 5.12772 17.9275 4.65081 17.5758 4.29917C17.2242 3.94754 16.7473 3.75 16.25 3.75H3.75C3.25272 3.75 2.77581 3.94754 2.42417 4.29917C2.07254 4.65081 1.875 5.12772 1.875 5.625M18.125 5.625V5.8275C18.125 6.14762 18.0431 6.46242 17.887 6.74191C17.7309 7.0214 17.5059 7.25628 17.2333 7.42417L10.9833 11.27C10.6877 11.4521 10.3472 11.5485 10 11.5485C9.65275 11.5485 9.31233 11.4521 9.01667 11.27L2.76667 7.425C2.4941 7.25711 2.26906 7.02224 2.11297 6.74275C1.95689 6.46325 1.87496 6.14845 1.875 5.82833V5.625"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Send message
                  </a>
                  <a href="#" className="tf-btn style-border pd-9">
                    <svg
                      width={21}
                      height={20}
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.375 8.125V4.375M12.375 8.125H16.125M12.375 8.125L17.375 3.125M14.875 18.125C7.97167 18.125 2.375 12.5283 2.375 5.625V3.75C2.375 3.25272 2.57254 2.77581 2.92417 2.42417C3.27581 2.07254 3.75272 1.875 4.25 1.875H5.39333C5.82333 1.875 6.19833 2.1675 6.3025 2.585L7.22417 6.27083C7.31583 6.6375 7.17917 7.0225 6.87667 7.24833L5.79917 8.05667C5.64494 8.16831 5.53083 8.32672 5.47379 8.50837C5.41674 8.69002 5.4198 8.88523 5.4825 9.065C5.98406 10.4293 6.77618 11.6682 7.80398 12.696C8.83179 13.7238 10.0707 14.5159 11.435 15.0175C11.8025 15.1525 12.2083 15.0142 12.4433 14.7008L13.2517 13.6233C13.3623 13.4756 13.5141 13.3639 13.688 13.3021C13.8619 13.2402 14.0501 13.2311 14.2292 13.2758L17.915 14.1975C18.3317 14.3017 18.625 14.6767 18.625 15.1067V16.25C18.625 16.7473 18.4275 17.2242 18.0758 17.5758C17.7242 17.9275 17.2473 18.125 16.75 18.125H14.875Z"
                        stroke="#F1913D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Call
                  </a>
                </div>
              </form>
              <div className="sidebar-item sidebar-featured style-2 mb-28 pb-36">
                <h4 className="sidebar-title mb-28">Featured Listings</h4>
                <ul>
                  {properties4.map((property, i) => (
                    <li key={i} className="box-listings style-2 hover-img">
                      <div className="image-wrap">
                        <Image
                          className="lazyload"
                          alt=""
                          width={224}
                          height={160}
                          src={property.imageSrc}
                        />
                      </div>
                      <div className="content">
                        <div className="text-1 title fw-5 lh-20">
                          <Link href={`/property-detail-v1/${property.id}`}>
                            {property.title}
                          </Link>
                        </div>
                        <ul className="meta-list flex">
                          <li className="text-1 flex">
                            <span>{property.beds}</span>Bed
                          </li>
                          <li className="text-1 flex">
                            <span>{property.baths}</span>Bath
                          </li>
                          <li className="text-1 flex">
                            <span>{property.sqft}</span>Sqft
                          </li>
                        </ul>
                        <div className="price text-1 lh-20 fw-6">
                          ${property.price.toLocaleString()}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sidebar-ads">
                <div className="image-wrap">
                  <Image
                    className="lazyload"
                    data-src="/images/blog/ads.jpg"
                    alt=""
                    width={400}
                    height={470}
                    src="/images/blog/ads.jpg"
                  />
                </div>
                <div className="logo relative z-5">
                  <Image
                    alt=""
                    width={272}
                    height={85}
                    src="/images/logo/logo-2@2x.png"
                  />
                </div>
                <div className="box-ads relative z-5">
                  <div className="content">
                    <h4 className="title">
                      <a href="#">
                        We can help you find a local real estate agent
                      </a>
                    </h4>
                    <div className="text-addres">
                      <p>
                        Connect with a trusted agent who knows the market inside
                        out - whether you’re buying or selling.
                      </p>
                    </div>
                  </div>
                  <a href="#" className="tf-btn fw-6 bg-color-primary w-full">
                    Connect with an agent
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
