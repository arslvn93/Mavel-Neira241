"use client";

import { useState } from "react";

export default function PageTitle() {
  // State to track the active item
  const [activeItem, setActiveItem] = useState("For sale");

  // Array of items to render
  const items = ["For sale", "For rent"];
  return (
    <div className="page-title career">
      <div className="tf-container">
        <div className="row justify-center">
          <div className="col-lg-8">
            <div className="content-inner">
              <div className="heading-title">
                <h1 className="title">
                  A Culture of Inclusivity and Belonging
                </h1>
                <p className="h6 fw-4">
                  Thousands of luxury home enthusiasts just like you visit our
                  website.
                </p>
              </div>
              <div className="wg-filter">
                <div className="form-title">
                  <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
                    <div className="btn-select">
                      <span className="text-sort-value">{activeItem}</span>
                      <i className="icon-CaretDown" />
                    </div>
                    <div className="dropdown-menu">
                      {items.map((item) => (
                        <div
                          key={item}
                          className={`select-item ${
                            activeItem === item ? "active" : ""
                          }`}
                          onClick={() => setActiveItem(item)} // Set the active item on click
                        >
                          <span className="text-value-item">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <form>
                    <fieldset>
                      <input type="text" placeholder="Find job here" />
                    </fieldset>
                  </form>
                  <div className="wrap-btn">
                    <a href="#" className="tf-btn bg-color-primary fw-7 pd-3">
                      Search <i className="icon-MagnifyingGlass fw-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
