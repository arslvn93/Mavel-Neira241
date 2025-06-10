import React from "react";
import Link from "next/link";
import Image from "next/image";
import { properties } from "@/data/properties";

export default function Listings() {
  return (
    <div className="wg-listing">
      <div className="heading">
        <div className="text-7 fw-6 text-color-heading">Listing</div>
        <div className="tf-houese-filter">
          <div
            className="tf-btns-filter text-1 tf-tab-link_all is--active"
            id="all"
          >
            <span>All</span>
          </div>
          <div className="tf-btns-filter text-1 fw-3" id="tf_filter_rent">
            <span>For rent</span>
          </div>
          <div className="tf-btns-filter text-1 fw-3" id="tf_filter_sale">
            <span>For sale</span>
          </div>
        </div>
      </div>
      <div id="parent" className="tf-grid-layout md-col-2">
        {properties.map((property, i) => (
          <div key={i} className="tf_filter_rent tf-filter-item tf-tab-content">
            <div className="box-house hover-img">
              <div className="image-wrap">
                <Link href={`/property-detail-v1/${property.id}`}>
                  <Image
                    className="lazyload"
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
                  <h5 className="price">${property.price.toLocaleString()}</h5>
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
          </div>
        ))}
      </div>
    </div>
  );
}
