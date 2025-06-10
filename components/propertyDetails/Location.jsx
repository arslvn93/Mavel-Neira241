import React from "react";

export default function Location() {
  return (
    <>
      <div className="wg-title text-11 fw-6 text-color-heading">
        Get Direction
      </div>
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d135905.11693909427!2d-73.95165795400088!3d41.17584829642291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1727094281524!5m2!1sen!2s"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="info-map">
        <ul className="box-left">
          <li>
            <span className="label fw-6">Address</span>
            <div className="text text-variant-1">150 sqft</div>
          </li>
          <li>
            <span className="label fw-6">City</span>
            <div className="text text-variant-1">#1234</div>
          </li>
          <li>
            <span className="label fw-6">State/county</span>
            <div className="text text-variant-1">$7,500</div>
          </li>
        </ul>
        <ul className="box-right">
          <li>
            <span className="label fw-6">Postal code</span>
            <div className="text text-variant-1">7.328</div>
          </li>
          <li>
            <span className="label fw-6">Area</span>
            <div className="text text-variant-1">7.328</div>
          </li>
          <li>
            <span className="label fw-6">Country</span>
            <div className="text text-variant-1">2024</div>
          </li>
        </ul>
      </div>
    </>
  );
}
