import Image from "next/image";
import React from "react";

export default function Reviews() {
  return (
    <section className="section-review tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="box-review">
              <div className="content-left">
                <h2
                  className="title mb-32 wow animate__fadeInUp animate__animated"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  Reviews from employees working at Proty
                </h2>
                <div
                  className="description mb-32 wow animate__fadeInUp animate__animated"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  <p className="text-1 mb-15">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean sollicitudin ipsum ullamcorper, pulvinar ipsum in,
                    imperdiet ante. In feugiat tortor semper nibh rhoncus
                    volutpat.
                  </p>
                  <p className="text-1">
                    Proin pharetra rhoncus maximus. Sed est dolor, consectetur
                    eu sagittis a
                  </p>
                </div>
                <a
                  href="#"
                  className="tf-btn bg-color-primary fw-7 pd-18 wow animate__fadeInUp animate__animated"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  More stories
                </a>
              </div>
              <div className="content-right">
                <div
                  className="person wow animate__zoomIn animate__animated"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  <Image
                    alt=""
                    width={509}
                    height={578}
                    src="/images/section/person-3.png"
                  />
                </div>
                <div
                  className="box-author ani5"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  <div className="avatar">
                    <Image
                      alt=""
                      width={120}
                      height={120}
                      src="/images/avatar/avt-png18.png"
                    />
                  </div>
                  <div className="content">
                    <h6 className="name">Cody Fisher</h6>
                    <p className="text-2 lh-16">CEO Themesflat</p>
                  </div>
                </div>
                <div
                  className="ratings ani4 ani5"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                </div>
                <div
                  className="wg-testimonial ani8 style-2 ani5"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  <div className="ratings">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description line-clamp-3">
                    Vivamus at nisl ornare, vulputate turpis finibus, posuere
                    metus. Donec in placerat felis. Praesent ante tellus,
                    dignissim nec imperdiet ac.
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        width={200}
                        height={200}
                        src="/images/avatar/testimonials-4.jpg"
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Cody Fisher</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
