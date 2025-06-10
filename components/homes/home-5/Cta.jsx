import React from "react";
import Image from "next/image";
export default function Cta() {
  return (
    <section className="section-CTA">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="content-inner">
              <Image
                alt=""
                width={216}
                height={312}
                src="/images/section/cta.png"
              />
              <div className="content">
                <h4 className="text_white mb-8">
                  Find a Local Real Estate Agent Today
                </h4>
                <p className="text_white text-1">
                  If you’re looking to buy or sell a home. We’ll help you make
                  the most money possible.
                </p>
              </div>
              <a href="#" className="tf-btn style-2 fw-6">
                Find your location agent
                <i className="icon-MagnifyingGlass fw-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
