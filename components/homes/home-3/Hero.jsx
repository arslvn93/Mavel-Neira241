"use client";
import DropdownSelect from "@/components/common/DropdownSelect";
import SearchForm from "@/components/common/SearchForm";
import React, { useState } from "react";

export default function Hero() {
  // State to track the active item
  const [activeItem, setActiveItem] = useState("For sale");

  // Array of items to render
  const items = ["For sale", "For rent"];
  return (
    <div className="page-title home03">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="content-inner">
              <div className="heading-title">
                <h1 className="title">Your Way Home Starts Here</h1>
                <p className="h6 fw-4">
                  Thousands of luxury home enthusiasts just like you visit our
                  website.
                </p>
              </div>
              <div className="widget-tabs style-1">
                <ul className="widget-menu-tab">
                  {items.map((item) => (
                    <li
                      key={item}
                      className={`item-title ${
                        activeItem === item ? "active" : ""
                      }`}
                      onClick={() => setActiveItem(item)} // Set the active item on click
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="wg-filter">
                  <div className="form-title">
                    <form className="w-full">
                      <fieldset>
                        <input
                          type="text"
                          placeholder="Address, City, ZIP..."
                        />
                      </fieldset>
                    </form>

                    <DropdownSelect
                      options={[
                        "Location",
                        "Texas",
                        "Florida",
                        "New York",
                        "Illinois",
                        "Washington",
                        "Pennsylvania",
                        "Ohio",
                      ]}
                      addtionalParentClass=""
                    />

                    <DropdownSelect
                      options={[
                        "Province / States",
                        "California",
                        "Texas",
                        "Florida",
                        "New York",
                        "Illinois",
                        "Washington",
                      ]}
                      addtionalParentClass=""
                    />
                    <div className="wrap-btn">
                      <div className="btn-filter show-form searchFormToggler">
                        <div className="icons">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21 4H14"
                              stroke="#F1913D"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 4H3"
                              stroke="#F1913D"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M21 12H12"
                              stroke="#F1913D"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8 12H3"
                              stroke="#F1913D"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M21 20H16"
                              stroke="#F1913D"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 20H3"
                              stroke="#F1913D"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M14 2V6"
                              stroke="#F1913D"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8 10V14"
                              stroke="#F1913D"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16 18V22"
                              stroke="#F1913D"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <a href="#" className="tf-btn bg-color-primary pd-3">
                        Search <i className="icon-MagnifyingGlass fw-6" />
                      </a>
                    </div>
                  </div>
                  <SearchForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
