"use client";
import LayoutHandler from "./LayoutHandler";
import DropdownSelect from "../common/DropdownSelect";
import PropertyGridItems from "./PropertyGridItems";
import PropertyListItems from "./PropertyListItems";
import { useState } from "react";
import { properties11 } from "@/data/properties";

export default function Properties7() {
  const [showItems, setShowItems] = useState(6);
  return (
    <section className="section-property tf-spacing-2">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="box-title">
              <h2>Property listing</h2>
              <div className="right">
                <ul className="nav-tab-filter group-layout" role="tablist">
                  <LayoutHandler />
                </ul>
                <DropdownSelect
                  addtionalParentClass="select-filter list-sort"
                  options={["Sort by (Default)", "Newest", "Oldest"]}
                />
              </div>
            </div>
            <div className="flat-animate-tab">
              <div className="tab-content">
                <div
                  className="tab-pane active show"
                  id="gridLayout"
                  role="tabpanel"
                >
                  <div className="tf-grid-layout lg-col-3 md-col-2 loadmore-item-6">
                    <PropertyGridItems showItems={showItems} />
                  </div>
                  {!(showItems >= properties11.length) && (
                    <button
                      onClick={() => setShowItems((pre) => pre + 3)}
                      className="tf-btn bg-color-primary pd-13 fw-7 mx-auto mt-32 btn-loadmore-6 view-more-button-6"
                    >
                      Load more property
                    </button>
                  )}
                </div>
                <div className="tab-pane" id="listLayout" role="tabpanel">
                  <div className="tf-grid-layout lg-col-2 loadmore-item-7">
                    <PropertyListItems showItems={showItems} />
                  </div>
                  {!(showItems >= properties11.length) && (
                    <button
                      onClick={() => setShowItems((pre) => pre + 3)}
                      className="tf-btn bg-color-primary pd-13 fw-7 mx-auto mt-32 btn-loadmore-7 view-more-button-7"
                    >
                      Load more property
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
