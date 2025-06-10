import React from "react";
import LayoutHandler from "./LayoutHandler";
import DropdownSelect from "../common/DropdownSelect";
import PropertyGridItems from "./PropertyGridItems";
import PropertyListItems from "./PropertyListItems";
import Sidebar from "./Sidebar";

export default function Properties3({ defaultGrid = false }) {
  return (
    <section className="section-property-layout">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="box-title">
              <h2>Property listing</h2>
              <div className="right">
                <ul className="nav-tab-filter group-layout" role="tablist">
                  <LayoutHandler defaultGrid={defaultGrid} />
                </ul>
                <DropdownSelect
                  addtionalParentClass="select-filter list-sort"
                  options={["Sort by (Default)", "Newest", "Oldest"]}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="flat-animate-tab">
              <div className="tab-content">
                <div
                  className={`tab-pane ${defaultGrid ? " active show" : ""}`}
                  id="gridLayout"
                  role="tabpanel"
                >
                  <div className="tf-grid-layout md-col-2">
                    <PropertyGridItems />
                  </div>
                </div>
                <div
                  className={`tab-pane ${!defaultGrid ? " active show" : ""}`}
                  id="listLayout"
                  role="tabpanel"
                >
                  <div className="wrap-list">
                    <PropertyListItems />
                  </div>
                </div>
              </div>
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
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
