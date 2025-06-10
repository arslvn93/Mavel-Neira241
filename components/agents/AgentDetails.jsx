"use client";
import React from "react";
import Listings from "./Listings";
import Link from "next/link";
import Image from "next/image";
import { properties4 } from "@/data/properties";

export default function AgentDetails({ agent }) {
  return (
    <section className="section-agents-details tf-spacing-4">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-8">
            <div className="agent-details hover-img effec-overlay mb-48">
              <div className="image-wrap">
                <Link href={`/agents-details/1`}>
                  <Image
                    className="lazyload"
                    data-src="/images/section/agent-details.jpg"
                    alt=""
                    width={522}
                    height={701}
                    src="/images/section/agent-details.jpg"
                  />
                </Link>
                <ul className="tf-social style-3">
                  <li>
                    <a href="#">
                      <i className="icon-fb" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-X" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-linked" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-ins" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="content-inner">
                <div className="author">
                  <h4 className="name">
                    <Link href={`/agents-details/1`}>{agent.name}</Link>
                  </h4>
                  <p className="font-poppins">
                    Company Agent at{" "}
                    <a href="#" className="fw-7">
                      Themesflat
                    </a>
                  </p>
                </div>
                <ul className="info">
                  <li>
                    <svg
                      width={16}
                      height={17}
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 7V4M9.5 7H12.5M9.5 7L13.5 3M11.5 15C5.97733 15 1.5 10.5227 1.5 5V3.5C1.5 3.10218 1.65804 2.72064 1.93934 2.43934C2.22064 2.15804 2.60218 2 3 2H3.91467C4.25867 2 4.55867 2.234 4.642 2.568L5.37933 5.51667C5.45267 5.81 5.34333 6.118 5.10133 6.29867L4.23933 6.94533C4.11595 7.03465 4.02467 7.16138 3.97903 7.3067C3.93339 7.45202 3.93584 7.60818 3.986 7.752C4.38725 8.84341 5.02094 9.83456 5.84319 10.6568C6.66544 11.4791 7.65659 12.1128 8.748 12.514C9.042 12.622 9.36667 12.5113 9.55467 12.2607L10.2013 11.3987C10.2898 11.2805 10.4113 11.1911 10.5504 11.1416C10.6895 11.0922 10.8401 11.0849 10.9833 11.1207L13.932 11.858C14.2653 11.9413 14.5 12.2413 14.5 12.5853V13.5C14.5 13.8978 14.342 14.2794 14.0607 14.5607C13.7794 14.842 13.3978 15 13 15H11.5Z"
                        stroke="#8E8E93"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-mulish fw-7">+7-445-556-8337</span>
                  </li>
                  <li>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5 4.5V11.5C14.5 11.8978 14.342 12.2794 14.0607 12.5607C13.7794 12.842 13.3978 13 13 13H3C2.60218 13 2.22064 12.842 1.93934 12.5607C1.65804 12.2794 1.5 11.8978 1.5 11.5V4.5M14.5 4.5C14.5 4.10218 14.342 3.72064 14.0607 3.43934C13.7794 3.15804 13.3978 3 13 3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5M14.5 4.5V4.662C14.5 4.9181 14.4345 5.16994 14.3096 5.39353C14.1848 5.61712 14.0047 5.80502 13.7867 5.93933L8.78667 9.016C8.55014 9.16169 8.2778 9.23883 8 9.23883C7.7222 9.23883 7.44986 9.16169 7.21333 9.016L2.21333 5.94C1.99528 5.80569 1.81525 5.61779 1.69038 5.3942C1.56551 5.1706 1.49997 4.91876 1.5 4.66267V4.5"
                        stroke="#8E8E93"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <a href="#">themesflat@gmail.com</a>
                  </li>
                  <li>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z"
                        stroke="#8E8E93"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z"
                        stroke="#8E8E93"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    1901 Thornridge Cir. Shiloh, Hawaii 81063
                  </li>
                </ul>
                <div className="content">
                  <h6 className="title">About Cameron Williamson</h6>
                  <p className="text-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam risus leo, blandit vitae diam a, vestibulum viverra
                    nisi. Vestibulum ullamcorper velit eget mattis aliquam.
                    Proin dapibus luctus pulvinar. Integer et libero ut purus
                    bibendum
                  </p>
                  <a href="#" className="tf-btn-link">
                    <span> Read More </span>
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2450_13860)">
                        <path
                          d="M10.0013 18.3334C14.6037 18.3334 18.3346 14.6024 18.3346 10C18.3346 5.39765 14.6037 1.66669 10.0013 1.66669C5.39893 1.66669 1.66797 5.39765 1.66797 10C1.66797 14.6024 5.39893 18.3334 10.0013 18.3334Z"
                          stroke="#F1913D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.66797 10H13.3346"
                          stroke="#F1913D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 13.3334L13.3333 10L10 6.66669"
                          stroke="#F1913D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2450_13860">
                          <rect width={20} height={20} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
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
            <div className="tf-sidebar">
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
                    placeholder="Your phone number"
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
                    id="message"
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
                  <a href="#" className="tf-btn style-border pd-24">
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
              <div className="sidebar-item sidebar-featured style-2 pb-36 mb-28">
                <h4 className="sidebar-title mb-28">Featured Listings</h4>
                <ul>
                  {properties4.map((listing, i) => (
                    <li key={i} className="box-listings style-2 hover-img">
                      <div className="image-wrap">
                        <Image
                          className="lazyload"
                          data-src={listing.imageSrc}
                          alt=""
                          width={224}
                          height={160}
                          src={listing.imageSrc}
                        />
                      </div>
                      <div className="content">
                        <div className="text-1 title fw-5 lh-20">
                          <Link href={`/property-detail-v1/${listing.id}`}>
                            {listing.title}
                          </Link>
                        </div>
                        <ul className="meta-list flex">
                          <li className="text-1 flex">
                            <span>{listing.beds}</span>Bed
                          </li>
                          <li className="text-1 flex">
                            <span>{listing.baths}</span>Bath
                          </li>
                          <li className="text-1 flex">
                            <span>{listing.sqft}</span>Sqft
                          </li>
                        </ul>
                        <div className="price text-1 lh-20 fw-6">
                          {listing.price.toLocaleString()}
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
