"use client";

import { useEffect, useRef, useState } from "react";
import DropdownSelect from "./DropdownSelect";
import Slider from "rc-slider";

export default function SearchForm({ parentClass = "wd-search-form" }) {
  const searchFormRef = useRef();
  const [priceRange, setPriceRange] = useState([100, 700]);
  const [sizeRange, setSizeRange] = useState([200, 820]);
  useEffect(() => {
    const searchFormToggler = document.querySelector(".searchFormToggler");

    const handleToggle = () => {
      searchFormRef.current.classList.toggle("show");
    };

    if (searchFormToggler) {
      searchFormToggler.addEventListener("click", handleToggle);
    }

    // Cleanup function to remove the event listener
    return () => {
      if (searchFormToggler) {
        searchFormToggler.removeEventListener("click", handleToggle);
      }
    };
  }, []);

  return (
    <div className={parentClass} ref={searchFormRef}>
      <div className="group-price">
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
      <div className=" group-select">
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
      <div className="group-checkbox">
        <div className=" title text-4 fw-6">Amenities:</div>
        <div className="group-amenities ">
          <fieldset className="checkbox-item style-1  ">
            <label>
              <span className="text-4">Bed linens</span>
              <input type="checkbox" />
              <span className="btn-checkbox" />
            </label>
          </fieldset>
          <fieldset className="checkbox-item style-1   mt-12">
            <label>
              <span className="text-4"> Carbon alarm</span>
              <input type="checkbox" />
              <span className="btn-checkbox" />
            </label>
          </fieldset>
          <fieldset className="checkbox-item style-1   mt-12">
            <label>
              <span className="text-4">Check-in lockbox </span>
              <input type="checkbox" />
              <span className="btn-checkbox" />
            </label>
          </fieldset>
          <fieldset className="checkbox-item style-1   mt-12">
            <label>
              <span className="text-4">Coffee maker </span>
              <input type="checkbox" />
              <span className="btn-checkbox" />
            </label>
          </fieldset>
          <fieldset className="checkbox-item style-1  ">
            <label>
              <span className="text-4"> Dishwasher</span>
              <input type="checkbox" />
              <span className="btn-checkbox" />
            </label>
          </fieldset>
          <fieldset className="checkbox-item style-1   mt-12">
            <label>
              <span className="text-4"> Fireplace</span>
              <input type="checkbox" />
              <span className="btn-checkbox" />
            </label>
          </fieldset>
          <fieldset className="checkbox-item style-1   mt-12">
            <label>
              <span className="text-4">Extra pillows </span>
              <input type="checkbox" />
              <span className="btn-checkbox" />
            </label>
          </fieldset>
          <fieldset className="checkbox-item style-1   mt-12">
            <label>
              <span className="text-4">First aid kit </span>
              <input type="checkbox" />
              <span className="btn-checkbox" />
            </label>
          </fieldset>
          <fieldset className="checkbox-item style-1  ">
            <label>
              <span className="text-4">Hangers </span>
              <input type="checkbox" />
              <span className="btn-checkbox" />
            </label>
          </fieldset>
          <fieldset className="checkbox-item style-1   mt-12">
            <label>
              <span className="text-4">Iron</span>
              <input type="checkbox" />
              <span className="btn-checkbox" />
            </label>
          </fieldset>
          <fieldset className="checkbox-item style-1   mt-12">
            <label>
              <span className="text-4"> Microwave</span>
              <input type="checkbox" />
              <span className="btn-checkbox" />
            </label>
          </fieldset>
          <fieldset className="checkbox-item style-1   mt-12">
            <label>
              <span className="text-4">Fireplace</span>
              <input type="checkbox" />
              <span className="btn-checkbox" />
            </label>
          </fieldset>
          <fieldset className="checkbox-item style-1  ">
            <label>
              <span className="text-4"> Refrigerator</span>
              <input type="checkbox" />
              <span className="btn-checkbox" />
            </label>
          </fieldset>
          <fieldset className="checkbox-item style-1   mt-12">
            <label>
              <span className="text-4">Security cameras </span>
              <input type="checkbox" />
              <span className="btn-checkbox" />
            </label>
          </fieldset>
          <fieldset className="checkbox-item style-1   mt-12">
            <label>
              <span className="text-4"> Smoke alarm</span>
              <input type="checkbox" />
              <span className="btn-checkbox" />
            </label>
          </fieldset>
          <fieldset className="checkbox-item style-1   mt-12">
            <label>
              <span className="text-4">Fireplace </span>
              <input type="checkbox" />
              <span className="btn-checkbox" />
            </label>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
