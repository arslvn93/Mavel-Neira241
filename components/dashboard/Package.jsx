import React from "react";
import Link from "next/link";
export default function Package() {
  return (
    <div className="main-content w-100">
      <div className="main-content-inner style-3">
        <div className="button-show-hide show-mb">
          <span className="body-1">Show Dashboard</span>
        </div>
        <div className="widget-box-2 style-2 package">
          <h3 className="title">My Package</h3>
          <div className="flat-pricing">
            <div className="box box-style">
              <h3 className="sub-title fw-7">Basic</h3>
              <p className="text-sub fw-6">
                Automatically reach potential customers
              </p>
              <div className="title-price flex">
                <h2>$19</h2>
                <div className="month fw-7">/ month</div>
              </div>
              <p className="texts">Per month, per company or team members</p>
              <ul className="check">
                <li className="flex-three">Listing free</li>
                <li className="flex-three">Support 24/7</li>
                <li className="flex-three">Quick access to customers</li>
                <li className="flex-three">Auto refresh ads</li>
              </ul>
              <div className="button-pricing">
                <Link
                  className="tf-btn bg-color-primary pd-20"
                  href={`/pricing`}
                >
                  <span>Upgrade</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* .footer-dashboard */}
        <div className="footer-dashboard style-2">
          <p>Copyright © {new Date().getFullYear()} Popty</p>
          <ul className="list">
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        {/* .footer-dashboard */}
      </div>
      <div className="overlay-dashboard" />
    </div>
  );
}
