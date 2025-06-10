"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "rc-slider";
import React, { useState } from "react";
import DropdownSelect from "../common/DropdownSelect";
import { properties4 } from "@/data/properties";

export default function Sidebar() {
  const [priceRange, setPriceRange] = useState([100, 700]);
  const [sizeRange, setSizeRange] = useState([200, 820]);
  return (
    <div className="tf-sidebar">
      <form
        className="form-advanced-search mb-30"
        onSubmit={(e) => e.preventDefault()}
      >
        <h4 className="heading-title mb-30">Advanced Search</h4>
        <fieldset className="mb-12">
          <input
            type="text"
            className="form-control"
            required
            placeholder="Type keyword..."
            name="search"
            id="search"
          />
          <div className="icon">
            <i className="icon-location1" />
          </div>
        </fieldset>
        <fieldset className="mb-30">
          <input
            type="text"
            className="form-control"
            required
            placeholder="Location"
            name="Location"
            id="Location"
          />
          <div className="icon">
            <i className="icon-search" />
          </div>
        </fieldset>
        <div className="widget-range mb-30">
          <div className="box-title-price mb-10">
            <div className="caption-price text-12">
              <span>
                Price: ${priceRange[0].toLocaleString()} - $
                {priceRange[1].toLocaleString()}
              </span>
            </div>
          </div>
          <Slider
            range
            max={1000}
            min={0}
            value={priceRange}
            onChange={setPriceRange}
          />
        </div>
        <div className="group-select mb-30">
          <div className="box-select mb-12">
            <DropdownSelect
              options={[
                "States",
                "California",
                "Texas",
                "Florida",
                "New York",
                "Illinois",
                "Washington",
                "Pennsylvania",
              ]}
              addtionalParentClass=""
            />
          </div>
          <div className="box-select mb-12">
            <DropdownSelect
              options={["Regions", "1", "2", "3", "4", "5", "6", "7"]}
            />
          </div>
          <div className="box-select mb-12">
            <DropdownSelect options={["House", "1", "2", "3", "4"]} />
          </div>
          <div className="box-select mb-12">
            <DropdownSelect
              options={["Beds: Any", "1", "2", "3", "4", "5", "6"]}
              addtionalParentClass=""
            />
          </div>
          <div className="box-select mb-12">
            <DropdownSelect
              options={["Bath: Any", "1", "2", "3"]}
              addtionalParentClass=""
            />
          </div>
          <div className="box-select mb-12">
            <DropdownSelect options={["Garages", "1", "2", "3", "4", "5"]} />
          </div>
        </div>
        <div className="widget-price style-2 mb-30">
          <div className="box-title-price mb-10">
            <span className="title-price">Size:</span>
            <div className="caption-price">
              <span className="value" id="slider-range-value03">
                {sizeRange[0]}
              </span>
              <span>-</span>
              <span className="value" id="slider-range-value04">
                {sizeRange[1]}
              </span>
            </div>
          </div>
          <Slider
            range
            max={1000}
            min={0}
            value={sizeRange}
            onChange={setSizeRange}
          />
        </div>
        <button type="submit" className="tf-btn bg-color-primary w-full">
          Search Property
          <i className="icon-search" />
        </button>
      </form>
      <div className="sidebar-item sidebar-featured style-2 pb-36 mb-28">
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
      <div className="sidebar-item sidebar-location">
        <h4 className="sidebar-title mb-28">Real estate near you</h4>
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
        <h4 className="sidebar-title mb-28">Real estate near you</h4>
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
              <a href="#">We can help you find a local real estate agent</a>
            </h4>
            <div className="text-addres">
              <p>
                Connect with a trusted agent who knows the market inside out -
                whether you’re buying or selling.
              </p>
            </div>
          </div>
          <a href="#" className="tf-btn fw-6 bg-color-primary w-full">
            Connect with an agent
          </a>
        </div>
      </div>
    </div>
  );
}
