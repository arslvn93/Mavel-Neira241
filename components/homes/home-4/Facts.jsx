import OdometerComponent from "@/components/common/OdometerComponent";
import { counters2 } from "@/data/facts";
import React from "react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function Facts() {
  return (
    <section className="section-box-team style-2 tf-spacing-1 pb-0">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content-inner">
              <div className="heading-section mb-48">
                <h2 className="title split-text effect-right">
                  <SplitTextAnimation text=" Selling Agents And Property Management Specialists" />
                </h2>
              </div>
              <div
                className="content mb-48 wow animate__fadeInUp animate__animated"
                data-wow-duration="1s"
                data-wow-delay="0s"
              >
                <p className="text-1 description-1 mb-16">
                  Our team of real estate professionals have helped hundreds of
                  buyers, sellers and investors make decisions that they feel
                  were and continue to be right for them years down the road. We
                  measure success not by the sales volume that ranks us among
                  the top 1% of local agents, but by delivering results and
                  fulfilling the trust placed on us by clients.
                </p>
                <p className="description-2 text-1 mb-24">
                  We stand ready to serve you as your California real estate
                  team.
                </p>
                <a
                  href="#"
                  className="tf-btn bg-color-primary pd-12 fw-7 wow animate__fadeInUp animate__animated"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  Meet The Team
                </a>
              </div>
              <div className="wrap-counter">
                {counters2.map((counter) => (
                  <div className="counter-item style-2" key={counter.id}>
                    <div className="count">
                      <div className="icons">
                        <i className={counter.icon} />
                      </div>
                      <div className="counter-number">
                        <div
                          className={`odometer style-2 style-2-${counter.id}`}
                        >
                          <OdometerComponent max={counter.number} />
                        </div>
                        {counter.hasSubNumber && (
                          <span>{counter.subNumber}</span>
                        )}
                        {counter.subText && (
                          <span className="sub plus">{counter.subText}</span>
                        )}
                      </div>
                      <p className="text-4">{counter.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="wrap-image relative">
              <div
                className="image-wrap hover-img-wrap img-1 animate__zoomIn wow animate__animated"
                data-wow-duration="2s"
              >
                <Image
                  className="lazyload parallax-img"
                  data-src="/images/section/section-box-team.jpg"
                  alt=""
                  width={400}
                  height={509}
                  src="/images/section/section-box-team.jpg"
                />
              </div>
              <div
                className="image-wrap hover-img-wrap img-2 animate__zoomIn wow animate__animated"
                data-wow-duration="2s"
              >
                <Image
                  className="lazyload parallax-img"
                  data-src="/images/section/section-box-team-2.jpg"
                  alt=""
                  width={400}
                  height={509}
                  src="/images/section/section-box-team-2.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
