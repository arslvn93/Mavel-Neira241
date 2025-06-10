"use client";
import React, { useState } from "react";
import DropdownSelect from "../common/DropdownSelect";
import Slider from "rc-slider";

export default function FilterSidebarRight() {
  const [priceRange, setPriceRange] = useState([100, 700]);
  const [sizeRange, setSizeRange] = useState([200, 820]);
  return (
    <div
      className="offcanvas offcanvas-end offcanvas-filter"
      tabIndex={-1}
      id="filter-sidbar-right"
      aria-labelledby="offcanvasLabel"
    >
      <div className="offcanvas-header">
        <h4 className="offcanvas-title" id="offcanvasLabel">
          Find Your Home
        </h4>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <form className="wd-search-form style-4">
          <fieldset className="box-search mb-12 mb-30">
            <input
              type="text"
              className="form-control"
              required=""
              placeholder="What are you looking for..."
              name="search"
              id="search"
            />
            <div className="icon">
              <i className="icon-search" />
            </div>
          </fieldset>
          <div className="box-select style-2 mb-30">
            <div className="nice-select" tabIndex={0}>
              <span className="current">Status</span>
              <ul className="list">
                <li data-value={1} className="option">
                  Rent
                </li>
                <li data-value={2} className="option selected">
                  Sale
                </li>
              </ul>
            </div>
            <DropdownSelect
              options={[
                "Status",
                "Bungalow",
                "Apartment",
                "House",
                "Smart Home",
                "Office",
              ]}
            />
          </div>
          <div className="group-amenities mb-30">
            <div className="title text-4 fw-6">Property type:</div>
            <fieldset className="checkbox-item style-1">
              <label>
                <span className="text-4">Apartment</span>
                <input type="checkbox" />
                <span className="btn-checkbox" />
              </label>
            </fieldset>
            <fieldset className="checkbox-item style-1 mt-12">
              <label>
                <span className="text-4">Villa</span>
                <input type="checkbox" />
                <span className="btn-checkbox" />
              </label>
            </fieldset>
            <fieldset className="checkbox-item style-1 mt-12">
              <label>
                <span className="text-4">Studio</span>
                <input type="checkbox" />
                <span className="btn-checkbox" />
              </label>
            </fieldset>
            <fieldset className="checkbox-item style-1 mt-12">
              <label>
                <span className="text-4">Townhouse</span>
                <input type="checkbox" />
                <span className="btn-checkbox" />
              </label>
            </fieldset>
            <fieldset className="checkbox-item style-1 mt-12">
              <label>
                <span className="text-4">Penthouse</span>
                <input type="checkbox" />
                <span className="btn-checkbox" />
              </label>
            </fieldset>
            <fieldset className="checkbox-item style-1 mt-12">
              <label>
                <span className="text-4">Commercial</span>
                <input type="checkbox" />
                <span className="btn-checkbox" />
              </label>
            </fieldset>
            <fieldset className="checkbox-item style-1 mt-12">
              <label>
                <span className="text-4">Family Home</span>
                <input type="checkbox" />
                <span className="btn-checkbox" />
              </label>
            </fieldset>
            <fieldset className="checkbox-item style-1">
              <label>
                <span className="text-4">Land/Plot</span>
                <input type="checkbox" />
                <span className="btn-checkbox" />
              </label>
            </fieldset>
          </div>
          <div className="group-price mb-30">
            <div className="widget-price">
              <div className="box-title-price">
                <span className="title-price">Price range</span>
                <div className="caption-price">
                  <span>from</span>{" "}
                  <span className="value fw-6" id="slider-range-value1">
                    ${priceRange[0].toLocaleString()}
                  </span>{" "}
                  <span>to</span>
                  <span className="value fw-6" id="slider-range-value2">
                    {" "}
                    ${priceRange[1].toLocaleString()}
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
            <div className="widget-price">
              <div className="box-title-price">
                <span className="title-price">Size range</span>
                <div className="caption-price">
                  <span>from</span>{" "}
                  <span className="value fw-6" id="slider-range-value01">
                    {sizeRange[0]}
                  </span>{" "}
                  <span>to</span>{" "}
                  <span className="value fw-6" id="slider-range-value02">
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
          </div>
          <div className="group-select">
            <div className="box-select">
              <DropdownSelect
                options={[
                  "Province / States",
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
            <div className="box-select">
              <DropdownSelect
                options={["Rooms", "1", "2", "3", "4", "5", "6", "7", "8"]}
                addtionalParentClass=""
              />
            </div>
            <div className="box-select">
              <DropdownSelect
                options={["Bath: Any", "1", "2", "3"]}
                addtionalParentClass=""
              />
            </div>
            <div className="box-select">
              <DropdownSelect
                options={["Beds: Any", "1", "2", "3", "4", "5", "6"]}
                addtionalParentClass=""
              />
            </div>
          </div>
          <div className="group-checkbox mb-30">
            <div
              className="title"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <div className="text-4 fw-6">Other features</div>
            </div>
            <div className="collapse" id="collapseExample">
              <div className="group-amenities">
                <fieldset className="checkbox-item style-1">
                  <label>
                    <span className="text-4">Bed linens</span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
                <fieldset className="checkbox-item style-1 mt-12">
                  <label>
                    <span className="text-4"> Carbon alarm</span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
                <fieldset className="checkbox-item style-1 mt-12">
                  <label>
                    <span className="text-4">Check-in lockbox </span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
                <fieldset className="checkbox-item style-1 mt-12">
                  <label>
                    <span className="text-4">Coffee maker </span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
                <fieldset className="checkbox-item style-1 mt-12">
                  <label>
                    <span className="text-4"> Fireplace</span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
                <fieldset className="checkbox-item style-1 mt-12">
                  <label>
                    <span className="text-4">Extra pillows </span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
                <fieldset className="checkbox-item style-1 mt-12">
                  <label>
                    <span className="text-4">First aid kit </span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
                <fieldset className="checkbox-item style-1">
                  <label>
                    <span className="text-4">Hangers </span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
                <fieldset className="checkbox-item style-1 mt-12">
                  <label>
                    <span className="text-4">Iron</span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
                <fieldset className="checkbox-item style-1 mt-12">
                  <label>
                    <span className="text-4"> Microwave</span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
                <fieldset className="checkbox-item style-1 mt-12">
                  <label>
                    <span className="text-4">Fireplace</span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
                <fieldset className="checkbox-item style-1">
                  <label>
                    <span className="text-4"> Refrigerator</span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
                <fieldset className="checkbox-item style-1 mt-12">
                  <label>
                    <span className="text-4">Security cameras </span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
                <fieldset className="checkbox-item style-1 mt-12">
                  <label>
                    <span className="text-4"> Smoke alarm</span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
                <fieldset className="checkbox-item style-1 mt-12">
                  <label>
                    <span className="text-4">Fireplace </span>
                    <input type="checkbox" />
                    <span className="btn-checkbox" />
                  </label>
                </fieldset>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="tf-btn bg-color-primary w-100 fw-6 mb-30"
          >
            Search <i className="icon-MagnifyingGlass fw-6" />
          </button>
          <div className="bot">
            <a href="#" className="option">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.25 9.99995C16.25 8.97328 16.2117 7.95578 16.135 6.94828C16.076 6.15007 15.7323 5.39961 15.1663 4.83365C14.6003 4.2677 13.8499 3.92391 13.0517 3.86495C11.0201 3.71168 8.97989 3.71168 6.94833 3.86495C6.15012 3.92391 5.39966 4.2677 4.8337 4.83365C4.26775 5.39961 3.92396 6.15007 3.865 6.94828C3.85083 7.13162 3.83833 7.31578 3.82667 7.49995M16.25 9.99995L18.75 7.49995M16.25 9.99995L13.75 7.49995M3.75 9.99995C3.75 11.0266 3.78833 12.0441 3.865 13.0516C3.92396 13.8498 4.26775 14.6003 4.8337 15.1662C5.39966 15.7322 6.15012 16.076 6.94833 16.1349C8.97989 16.2883 11.0201 16.2883 13.0517 16.1349C13.8499 16.076 14.6003 15.7322 15.1663 15.1662C15.7323 14.6003 16.076 13.8498 16.135 13.0516C16.1492 12.8683 16.1617 12.6841 16.1733 12.4999M3.75 9.99995L6.25 12.4999M3.75 9.99995L1.25 12.4999"
                  stroke="#5C5E61"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Reset search
            </a>
            <a href="#" className="option">
              Save search
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5681 2.91569C9.60335 2.82971 9.66337 2.75617 9.74054 2.7044C9.8177 2.65264 9.90852 2.625 10.0014 2.625C10.0944 2.625 10.1852 2.65264 10.2623 2.7044C10.3395 2.75617 10.3995 2.82971 10.4348 2.91569L12.2056 7.17485C12.2388 7.25455 12.2932 7.32356 12.3631 7.37428C12.4329 7.425 12.5154 7.45548 12.6014 7.46235L17.1998 7.83069C17.6156 7.86402 17.7839 8.38319 17.4673 8.65402L13.9639 11.6557C13.8985 11.7117 13.8497 11.7846 13.823 11.8665C13.7962 11.9484 13.7925 12.036 13.8123 12.1199L14.8831 16.6074C14.9046 16.6974 14.899 16.7918 14.8669 16.8786C14.8348 16.9654 14.7777 17.0408 14.7028 17.0952C14.6279 17.1496 14.5386 17.1806 14.4461 17.1842C14.3536 17.1879 14.2621 17.164 14.1831 17.1157L10.2456 14.7115C10.1721 14.6666 10.0876 14.6428 10.0014 14.6428C9.91528 14.6428 9.83079 14.6666 9.75727 14.7115L5.81977 17.1165C5.74082 17.1648 5.64932 17.1887 5.55682 17.185C5.46432 17.1814 5.37498 17.1504 5.30008 17.096C5.22518 17.0416 5.16807 16.9663 5.13598 16.8794C5.10389 16.7926 5.09825 16.6982 5.11977 16.6082L6.19061 12.1199C6.21046 12.036 6.20681 11.9483 6.18006 11.8664C6.1533 11.7845 6.10447 11.7116 6.03894 11.6557L2.53561 8.65402C2.46506 8.59388 2.41394 8.51416 2.38874 8.42495C2.36353 8.33574 2.36537 8.24106 2.39401 8.15289C2.42266 8.06473 2.47682 7.98705 2.54965 7.92969C2.62247 7.87233 2.71068 7.83788 2.80311 7.83069L7.40144 7.46235C7.48748 7.45548 7.56996 7.425 7.63979 7.37428C7.70963 7.32356 7.76412 7.25455 7.79727 7.17485L9.5681 2.91569Z"
                  stroke="#5C5E61"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
