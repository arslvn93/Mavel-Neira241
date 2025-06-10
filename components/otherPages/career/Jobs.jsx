import { careerData } from "@/data/jobs";
import React from "react";

export default function Jobs() {
  return (
    <section className="section-career tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-48">
              <h2
                className="title wow animate__fadeInUp animate__animated"
                data-wow-duration="1s"
                data-wow-delay="0s"
              >
                Best Job For You At Proty
              </h2>
              <p
                className="text-1 wow animate__fadeInUp animate__animated"
                data-wow-duration="1s"
                data-wow-delay="0s"
              >
                We connect you directly to the person that knows the most about
                a property for sale, <br />
                the listing agent.
              </p>
            </div>
            <div className="tf-grid-layout-2 mb-48">
              {careerData.map((item, index) => (
                <div
                  key={index}
                  className={`career-item wow animate__${item.animation} animate__animated`}
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  <div className="content">
                    <h5 className="lh-28 name">{item.title}</h5>
                    <ul className="list-info">
                      <li className="text-4">
                        <i className="icon-bag" />
                        {item.department}
                      </li>
                      <li className="text-4">
                        <i className="icon-location" />
                        {item.location}
                      </li>
                      <li className="text-4">
                        <i className="icon-money" />
                        <span className="fw-7 text-color-primary">
                          {item.salary}
                        </span>
                        Month
                      </li>
                    </ul>
                  </div>
                  <a href="#" className="tf-btn style-border pd-10">
                    Apply now
                  </a>
                </div>
              ))}
            </div>
            <a href="#" className="tf-btn bg-color-primary fw-7 pd-16 mx-auto">
              Load more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
