import Image from "next/image";
import React from "react";

export default function Benefits() {
  return (
    <section className="section-benefits">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="box-benefits">
              <div className="wrap-image relative">
                <div
                  className="image img-1 wow animate__zoomIn animate__animated"
                  data-wow-duration="2s"
                  data-wow-delay="0s"
                >
                  <Image
                    className="lazyload parallax-img"
                    data-src="/images/section/section-benefits-1.jpg"
                    alt=""
                    width={400}
                    height={509}
                    src="/images/section/section-benefits-1.jpg"
                  />
                </div>
                <div
                  className="image img-2 wow animate__zoomIn animate__animated"
                  data-wow-duration="2s"
                  data-wow-delay="0s"
                >
                  <Image
                    className="lazyload parallax-img"
                    data-src="/images/section/section-benefits-2.jpg"
                    alt=""
                    width={400}
                    height={509}
                    src="/images/section/section-benefits-2.jpg"
                  />
                </div>
              </div>
              <div className="content">
                <h2
                  className="title wow animate__fadeInUp animate__animated"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  Benefits when you work <br />
                  at Proty
                </h2>
                <div
                  className="description wow animate__fadeInUp animate__animated"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  <p className="text-1 mb-16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean sollicitudin ipsum ullamcorper, pulvinar ipsum in,
                    imperdiet ante. In feugiat tortor semper nibh rhoncus
                    volutpat. Suspendisse potenti.
                  </p>
                  <p className="text-1">
                    Proin pharetra rhoncus maximus. Sed est dolor, consectetur
                    eu sagittis a
                  </p>
                </div>
                <div className="wrap-icon">
                  <div
                    className="box-icon wow animate__zoomIn animate__animated"
                    data-wow-duration="1s"
                    data-wow-delay="0s"
                  >
                    <div className="icons">
                      <i className="icon-heart-1" />
                    </div>
                    <div className="title text-1 text-center fw-6">
                      Health care
                    </div>
                  </div>
                  <div
                    className="box-icon wow animate__zoomIn animate__animated"
                    data-wow-duration="1s"
                    data-wow-delay="0s"
                  >
                    <div className="icons">
                      <i className="icon-pig" />
                    </div>
                    <div className="title text-1 text-center fw-6">
                      Attractive salary and bonus
                    </div>
                  </div>
                  <div
                    className="box-icon wow animate__zoomIn animate__animated"
                    data-wow-duration="1s"
                    data-wow-delay="0s"
                  >
                    <div className="icons">
                      <i className="icon-family" />
                    </div>
                    <div className="title text-1 text-center fw-6">
                      Family life
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className="tf-btn bg-color-primary fw-7 pd-17 wow animate__fadeInUp animate__animated"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  Join our team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
