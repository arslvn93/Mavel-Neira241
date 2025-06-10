import React from "react";
import Link from "next/link";
export default function Breadcumb({ pageName = "Property Listing" }) {
  return (
    <section className="flat-title">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-inner">
              <ul className="breadcrumb">
                <li>
                  <Link className="home fw-6 text-color-3" href={`/`}>
                    Home
                  </Link>
                </li>
                <li>{pageName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
