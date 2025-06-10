import { projects, projects2 } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Project1() {
  return (
    <section className="section-property-layout style-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-8">
            <div className="tf-grid-layout md-col-2">
              {projects.map((property, index) => (
                <div
                  key={index}
                  className="box-house hover-img style-6 none-overlay"
                >
                  <div className="image-wrap">
                    <Link href={`/project-details/${property.id}`}>
                      <Image
                        className="lazyload"
                        data-src={property.imageSrc}
                        alt=""
                        src={property.imageSrc}
                        width={property.width}
                        height={property.height}
                      />
                    </Link>
                    <ul className="box-tag flex gap-8">
                      <li className="flat-tag text-4 bg-main fw-6 text_white">
                        {property.type}
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
                    <h4 className="title">
                      <Link href={`/project-details/${property.id}`}>
                        {property.title}
                      </Link>
                    </h4>
                    <p className="location text-1 flex items-center gap-6">
                      <i className="icon-location" /> {property.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="wrap-pagination">
              <p className="text-1">Showing 1-8 of 42 results.</p>
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
          </div>
          <div className="col-lg-4">
            <div className="tf-sidebar">
              <div className="sidebar-item sidebar-featured style-2 pb-36">
                <h4 className="sidebar-title mb-28">Featured Listings</h4>
                <ul>
                  {projects2.map((listing, index) => (
                    <li key={index} className="box-listings style-2 hover-img">
                      <div className="image-wrap">
                        <Image
                          className="lazyload"
                          data-src={listing.imageSrc}
                          alt=""
                          src={listing.imageSrc}
                          width={listing.width}
                          height={listing.height}
                        />
                      </div>
                      <div className="content">
                        <div className="text-1 title fw-5 lh-20">
                          <Link href={`/project-details/${listing.id}`}>
                            {listing.title}
                          </Link>
                        </div>
                        <ul className="meta-list flex">
                          <li className="text-1 flex">
                            <span>{listing.bedrooms}</span>Bed
                          </li>
                          <li className="text-1 flex">
                            <span>{listing.bathrooms}</span>Bath
                          </li>
                          <li className="text-1 flex">
                            <span>{listing.sqft.toLocaleString()}</span>Sqft
                          </li>
                        </ul>
                        <div className="price text-1 lh-20 fw-6">
                          ${listing.price.toLocaleString()}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sidebar-item sidebar-location">
                <h4 className="sidebar-title mb-28">Real Estate Near You</h4>
                <div className="wrap-box-location">
                  <a className="box-location style-2 hover-img-rotate">
                    <div className="image-wrap">
                      <Image
                        className="lazyload"
                        data-src="/images/section/location-23.jpg"
                        alt=""
                        src="/images/section/location-23.jpg"
                        width={390}
                        height={220}
                      />
                    </div>
                    <div className="content">
                      <h6 className="text_white text-1 lh-20">New York</h6>
                      <p className="text-2">1570 listing</p>
                    </div>
                  </a>
                  <a className="box-location style-2 hover-img-rotate">
                    <div className="image-wrap">
                      <Image
                        className="lazyload"
                        data-src="/images/section/location-24.jpg"
                        alt=""
                        src="/images/section/location-24.jpg"
                        width={390}
                        height={220}
                      />
                    </div>
                    <div className="content">
                      <h6 className="text_white text-1 lh-20">Mississauga</h6>
                      <p className="text-2">1570 listing</p>
                    </div>
                  </a>
                  <a className="box-location style-2 hover-img-rotate">
                    <div className="image-wrap">
                      <Image
                        className="lazyload"
                        data-src="/images/section/location-25.jpg"
                        alt=""
                        src="/images/section/location-25.jpg"
                        width={390}
                        height={220}
                      />
                    </div>
                    <div className="content">
                      <h6 className="text_white text-1 lh-20">Halifax</h6>
                      <p className="text-2">1570 listing</p>
                    </div>
                  </a>
                  <a className="box-location style-2 hover-img-rotate">
                    <div className="image-wrap">
                      <Image
                        className="lazyload"
                        data-src="/images/section/location-26.jpg"
                        alt=""
                        src="/images/section/location-26.jpg"
                        width={390}
                        height={220}
                      />
                    </div>
                    <div className="content">
                      <h6 className="text_white text-1 lh-20">Ottawa</h6>
                      <p className="text-2">1570 listing</p>
                    </div>
                  </a>
                  <a className="box-location style-2 hover-img-rotate">
                    <div className="image-wrap">
                      <Image
                        className="lazyload"
                        data-src="/images/section/location-27.jpg"
                        alt=""
                        src="/images/section/location-27.jpg"
                        width={390}
                        height={220}
                      />
                    </div>
                    <div className="content">
                      <h6 className="text_white text-1 lh-20">Iqaluit</h6>
                      <p className="text-2">1570 listing</p>
                    </div>
                  </a>
                  <a className="box-location style-2 hover-img-rotate">
                    <div className="image-wrap">
                      <Image
                        className="lazyload"
                        data-src="/images/section/location-28.jpg"
                        alt=""
                        src="/images/section/location-28.jpg"
                        width={390}
                        height={220}
                      />
                    </div>
                    <div className="content">
                      <h6 className="text_white text-1 lh-20">Toronto</h6>
                      <p className="text-2">1570 listing</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="sidebar-item sidebar-contact-agents">
                <h4 className="sidebar-title mb-28">Contact Agents</h4>
                <div className="wrap-contact-agents">
                  <div className="box-contact-agent">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png19.png"
                        width={130}
                        height={130}
                      />
                    </div>
                    <div className="content">
                      <a href="#" className="text-1">
                        Robert Fox
                      </a>
                      <h6>(201) 555-0124</h6>
                    </div>
                  </div>
                  <div className="box-contact-agent">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png20.png"
                        width={130}
                        height={130}
                      />
                    </div>
                    <div className="content">
                      <a href="#" className="text-1">
                        Cameron Williamson
                      </a>
                      <h6>(405) 555-0128</h6>
                    </div>
                  </div>
                  <div className="box-contact-agent">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png21.png"
                        width={130}
                        height={130}
                      />
                    </div>
                    <div className="content">
                      <a href="#" className="text-1">
                        Darlene Robertson
                      </a>
                      <h6>(252) 555-0126</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar-ads">
                <div className="image-wrap">
                  <Image
                    className="lazyload"
                    data-src="/images/blog/ads.jpg"
                    alt=""
                    src="/images/blog/ads.jpg"
                    width={400}
                    height={470}
                  />
                </div>
                <div className="logo relative z-5">
                  <Image
                    alt=""
                    src="/images/logo/logo-2@2x.png"
                    width={272}
                    height={85}
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
