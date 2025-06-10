import React from "react";
import Image from "next/image";
export default function HighlightSection() {
  return (
    <div className="section-highlight tf-spacing-7">
      <div className="tf-container-2">
        <div className="row">
          <div className="col-12">
            <div
              className="wrap parallaxie"
              style={{
                background: 'url("/images/section/section-highligtht.jpg")',
              }}
            >
              <ul className="tag">
                <li className="text-11 fw-3 text_white">
                  <a href="#" className="text_white link ">
                    {" "}
                    Residential Sales and Leasing
                    <i className="icon-arrow-up-right" />
                  </a>
                </li>
                <li className="text-11 fw-3 text_white">
                  <a href="#" className="text_white link ">
                    {" "}
                    Commercial Real Estate
                    <i className="icon-arrow-up-right" />
                  </a>
                </li>
                <li className="text-11 fw-3 text_white">
                  <a href="#" className="text_white link ">
                    {" "}
                    Property Management
                    <i className="icon-arrow-up-right" />
                  </a>
                </li>
                <li className="text-11 fw-3 text_white">
                  <a href="#" className="text_white link ">
                    {" "}
                    Investment Advisory
                    <i className="icon-arrow-up-right" />
                  </a>
                </li>
                <li className="text-11 fw-3 text_white">
                  <a href="#" className="text_white link ">
                    {" "}
                    12 Year of experience
                    <i className="icon-arrow-up-right" />
                  </a>
                </li>
              </ul>
              <div className="content">
                <div className="text-1 fw-7 text_white number mb-15 wow animate__fadeInUp animate__animated">
                  1200<span>+</span> Happy Clients
                </div>
                <ul className="img-group wow animate__fadeInUp animate__animated">
                  <li>
                    <img src="/images/avatar/avatar-4.jpg" alt="avatar" />
                  </li>
                  <li>
                    <img src="/images/avatar/avatar-5.jpg" alt="avatar" />
                  </li>
                  <li>
                    <img src="/images/avatar/avatar-6.jpg" alt="avatar" />
                  </li>
                  <li>
                    <img src="/images/avatar/avatar-7.jpg" alt="avatar" />
                  </li>
                  <li>
                    <img src="/images/avatar/avatar-8.jpg" alt="avatar" />
                  </li>
                </ul>
                <div className="text-display-4 text_white fw-5 wow animate__fadeInUp animate__animated">
                  Our success is driven by our passion for real <br /> estate
                  and our dedication to exceeding <br /> client expectations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
