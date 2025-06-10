"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { properties } from "@/data/properties";
export default function Properties() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filtered, setFiltered] = useState(properties);
  const categories = [
    { name: "Apartments", listings: 9 },
    { name: "Farm house", listings: 20 },
    { name: "House", listings: 10 },
    { name: "Villas", listings: 10 },
  ];

  useEffect(() => {
    if (activeCategory == "All") {
      setFiltered(properties);
    } else {
      setFiltered(
        properties.filter((elm) => elm.categories.includes(activeCategory))
      );
    }
  }, [activeCategory]);

  return (
    <section className="section-featured-listings tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-48">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Featured Listings" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                Thousands of luxury home enthusiasts just like you visit our
                website.
              </p>
            </div>
            <div className="widget-tabs style-2">
              <ul className="widget-menu-tab mb-48 overflow-x-auto">
                <li
                  className={`item-title hover-tooltip ${
                    activeCategory == "All" ? "active" : ""
                  } `}
                  onClick={() => setActiveCategory("All")}
                >
                  View all
                  <span className="tooltip">{properties.length} Listing</span>
                </li>
                {categories.map((category) => (
                  <li
                    key={category.name}
                    className={`item-title hover-tooltip ${
                      activeCategory === category.name ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory(category.name)}
                  >
                    {category.name}
                    <span className="tooltip">
                      {
                        properties.filter((elm) =>
                          elm.categories.includes(category.name)
                        ).length
                      }{" "}
                      Listing
                    </span>
                  </li>
                ))}
              </ul>
              <div className="widget-content-tab">
                <div className="widget-content-inner active" style={{}}>
                  <div className="tf-grid-layout lg-col-3 md-col-2 loadmore-item">
                    {filtered.map((property, i) => (
                      <div
                        key={i}
                        className="box-house hover-img fl-item"
                        style={{ display: "block" }}
                      >
                        <div className="image-wrap">
                          <Link href={`/property-detail-v1/${property.id}`}>
                            <Image
                              className=" ls-is-cached lazyloaded"
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
                          <p className="location text-1 flex items-center gap-6">
                            <i className="icon-location" /> {property.location}
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
                                <i className="icon-compare" />
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
                    ))}
                  </div>
                  <button className="tf-btn bg-color-primary pd-13 fw-7 btn-loadmore view-more-button">
                    Load more property
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
