"use client";
import Slider from "rc-slider";
import React, { useState } from "react";

export default function FilterModal() {
  const [priceRange, setPriceRange] = useState([100, 700]);
  const [sizeRange, setSizeRange] = useState([200, 820]);
  return (
    <div className="modal modal-filter fade" id="modalFilter">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="wd-search-form style-3">
            <div className="title-box">
              <h4>Advanced Search</h4>
              <span
                className="close-modal icon-close"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="group-price">
              <div className="widget-price">
                <div className="box-title-price">
                  <span className="title-price">Price</span>
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
                <div className="nice-select" tabIndex={0}>
                  <span className="current">Province / States</span>
                  <ul className="list">
                    <li data-value={1} className="option">
                      California
                    </li>
                    <li data-value={2} className="option selected">
                      Texas
                    </li>
                    <li data-value={3} className="option">
                      Florida
                    </li>
                    <li data-value={4} className="option">
                      New York
                    </li>
                    <li data-value={5} className="option">
                      Illinois
                    </li>
                    <li data-value={6} className="option">
                      Washington
                    </li>
                    <li data-value={7} className="option">
                      Pennsylvania
                    </li>
                    <li data-value={8} className="option">
                      Ohio
                    </li>
                    <li data-value={9} className="option">
                      Georgia
                    </li>
                    <li data-value={10} className="option">
                      North Carolina
                    </li>
                  </ul>
                </div>
              </div>
              <div className="box-select">
                <div className="nice-select" tabIndex={0}>
                  <span className="current">Rooms</span>
                  <ul className="list">
                    <li data-value={1} className="option">
                      1
                    </li>
                    <li data-value={2} className="option selected">
                      2
                    </li>
                    <li data-value={3} className="option">
                      3
                    </li>
                    <li data-value={4} className="option">
                      4
                    </li>
                    <li data-value={5} className="option">
                      5
                    </li>
                    <li data-value={6} className="option">
                      6
                    </li>
                    <li data-value={7} className="option">
                      7
                    </li>
                    <li data-value={8} className="option">
                      8
                    </li>
                    <li data-value={9} className="option">
                      9
                    </li>
                    <li data-value={10} className="option">
                      10
                    </li>
                  </ul>
                </div>
              </div>
              <div className="box-select">
                <div className="nice-select" tabIndex={0}>
                  <span className="current">Bath: Any</span>
                  <ul className="list">
                    <li data-value={1} className="option">
                      1
                    </li>
                    <li data-value={2} className="option selected">
                      2
                    </li>
                    <li data-value={3} className="option">
                      3
                    </li>
                    <li data-value={4} className="option">
                      4
                    </li>
                  </ul>
                </div>
              </div>
              <div className="box-select">
                <div className="nice-select" tabIndex={0}>
                  <span className="current">Beds: Any</span>
                  <ul className="list">
                    <li data-value={1} className="option">
                      1
                    </li>
                    <li data-value={2} className="option selected">
                      2
                    </li>
                    <li data-value={3} className="option">
                      3
                    </li>
                    <li data-value={4} className="option">
                      4
                    </li>
                    <li data-value={5} className="option">
                      5
                    </li>
                    <li data-value={6} className="option">
                      6
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="group-checkbox">
              <div className="title text-4 fw-6">Amenities:</div>
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
        </div>
      </div>
    </div>
  );
}
