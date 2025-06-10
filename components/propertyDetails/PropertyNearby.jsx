import React from "react";

export default function PropertyNearby() {
  return (
    <>
      <div className="wg-title text-11 fw-6 text-color-heading">
        What’s Nearby?
      </div>
      <p className="description text-color-default">
        Explore nearby amenities to precisely locate your property and identify
        surrounding conveniences, providing a comprehensive overview of the
        living environment and the property's convenience.
      </p>
      <div className="row box-nearby">
        <div className="col-md-5">
          <ul className="box-left">
            <li className="item-nearby">
              <span className="fw-7 label text-4">School:</span>
              <span>0.7 km</span>
            </li>
            <li className="item-nearby">
              <span className="fw-7 label text-4">University:</span>
              <span>1.3 km</span>
            </li>
            <li className="item-nearby">
              <span className="fw-7 label text-4">Grocery center:</span>
              <span>0.6 km</span>
            </li>
            <li className="item-nearby">
              <span className="fw-7 label text-4">Market:</span>
              <span>1.1 km</span>
            </li>
          </ul>
        </div>
        <div className="col-md-5">
          <ul className="box-right">
            <li className="item-nearby">
              <span className="fw-7 label text-4">Hospital:</span>
              <span>0.4 km</span>
            </li>
            <li className="item-nearby">
              <span className="fw-7 label text-4">Metro station:</span>
              <span>1.8 km</span>
            </li>
            <li className="item-nearby">
              <span className="fw-7 label text-4">Gym, wellness:</span>
              <span>1.3 km</span>
            </li>
            <li className="item-nearby">
              <span className="fw-7 label text-4">River:</span>
              <span>2.1 km</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
