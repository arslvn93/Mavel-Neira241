"use client";
import React, { useState } from "react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function Testimonials() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="section-testimonials style-1 tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-48">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Clients Testimonials" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                Thousands of luxury home enthusiasts just like you visit our
                website.
              </p>
            </div>
            <div
              className={`tf-grid-layout md-col-3 loadmore-item-8 ${
                showMore ? "active" : ""
              } `}
            >
              <div className="box-testimonials">
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    Aenean orci lorem, pharetra ac imperdiet eget, tristique ac
                    magna. In aliquet efficitur turpis, et posuere tellus
                    commodo at. Morbi accumsan nulla id neque rutrum, et tempus
                    dui venenatis. Quisque dapibus metus ligula, id tempor nisl
                    interdum vitae.
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/testimonials-4.jpg"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Annette Black</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    In hac habitasse platea dictumst. Sed eleifend aliquam dui
                    quis convallis. Sed aliquet eros sit amet metus rhoncus
                    bibendum nec vel nunc. Nullam ac dapibus enim. Nulla rhoncus
                    ante ante, nec lacinia turpis consectetur non. Vivamus sit
                    amet nunc leo.
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png7.png"
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Eleanor Pena</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    aliquam tempus urna id interdum. Proin iaculis erat id
                    sapien venenatis convallis. Nam et ullamcorper nibh. Nulla
                    malesuada consectetur sem ut varius. Fusce ornare tortor non
                    maximus volutpat. Integer at consequat turpis, vel aliquam
                    neque. Suspendisse quis odio felis. Quisque volutpat
                    bibendum maximus. In porttitor semper ultrices.
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png12.png"
                        width={51}
                        height={51}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Floyd Miles</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-testimonials">
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    aliquam tempus urna id interdum. Proin iaculis erat id
                    sapien venenatis convallis. Nam et ullamcorper nibh. Nulla
                    malesuada consectetur sem ut varius. Fusce ornare tortor non
                    maximus volutpat. Integer at consequat turpis, vel aliquam
                    neque. Suspendisse quis odio felis. Quisque volutpat
                    bibendum maximus. In porttitor semper ultrices.
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png12.png"
                        width={51}
                        height={51}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Floyd Miles</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    Vivamus at nisl ornare, vulputate turpis finibus, posuere
                    metus. Donec in placerat felis. Praesent ante tellus,
                    dignissim nec imperdiet ac.
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png6.png"
                        width={120}
                        height={120}
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
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    Quisque tincidunt, nunc vitae maximus lobortis, tellus risus
                    fringilla mi, pulvinar feugiat lacus ipsum nec tortor.
                    Aliquam a venenatis orci, id bibendum eros. Pellentesque in
                    ante rutrum, congue eros vestibulum, commodo ex.
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png5.png"
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Ralph Edwards</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-testimonials">
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    "My experience with property management services has
                    exceeded expectations. They efficiently manage properties
                    with a professional and attentive approach in every
                    situation. I feel reassured that any issue will be resolved
                    promptly and effectively."
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png8.png"
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Jacob Jones</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    Quisque tincidunt, nunc vitae maximus lobortis, tellus risus
                    fringilla mi, pulvinar feugiat lacus ipsum nec tortor.
                    Aliquam a venenatis orci, id bibendum eros. Pellentesque in
                    ante rutrum, congue eros vestibulum, commodo ex.
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png5.png"
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Ralph Edwards</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    aliquam tempus urna id interdum. Proin iaculis erat id
                    sapien venenatis convallis. Nam et ullamcorper nibh. Nulla
                    malesuada consectetur sem ut varius. Fusce ornare tortor non
                    maximus volutpat. Integer at consequat turpis, vel aliquam
                    neque. Suspendisse quis odio felis. Quisque volutpat
                    bibendum maximus. In porttitor semper ultrices.
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png12.png"
                        width={51}
                        height={51}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Floyd Miles</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
              </div>
              {showMore ? (
                ""
              ) : (
                <button
                  onClick={() => setShowMore((pre) => !pre)}
                  className="tf-btn bg-color-primary fw-7 mx-auto btn-loadmore view-more-button"
                >
                  Show more...
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
