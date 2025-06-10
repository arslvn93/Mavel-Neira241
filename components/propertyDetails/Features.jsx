import React from "react";

export default function Features() {
  return (
    <>
      <div className="wg-title text-11 fw-6 text-color-heading">
        Amenities And Features
      </div>
      <div className="wrap-feature">
        <div className="box-feature">
          <ul>
            <li className="feature-item">Smoke alarm</li>
            <li className="feature-item">Carbon monoxide alarm</li>
            <li className="feature-item">First aid kit</li>
            <li className="feature-item">Self check-in with lockbox</li>
            <li className="feature-item">Security cameras</li>
          </ul>
        </div>
        <div className="box-feature">
          <ul>
            <li className="feature-item">Hangers</li>
            <li className="feature-item">Bed linens</li>
            <li className="feature-item">Extra pillows &amp; blankets</li>
            <li className="feature-item">Iron</li>
            <li className="feature-item">TV with standard cable</li>
          </ul>
        </div>
        <div className="box-feature">
          <ul>
            <li className="feature-item">Refrigerator</li>
            <li className="feature-item">Microwave</li>
            <li className="feature-item">Dishwasher</li>
            <li className="feature-item">Coffee maker</li>
          </ul>
        </div>
      </div>
    </>
  );
}
