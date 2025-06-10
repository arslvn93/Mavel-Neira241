import React from "react";
import Link from "next/link";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function Projects() {
  return (
    <div className="section-project tf-spacing-7">
      <div className="tf-container-xl">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center gap-33 mb-56">
              <div className="title text-display-4 text_white split-text effect-right">
                <SplitTextAnimation text="Discovery our Latest Projects" />
              </div>
              <p
                className="text-1 text-color1 wow animate__fadeInUp animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                We are proud to present our recently completed projects, each
                meticulously crafted with exceptional quality <br />
                and attention to detail, setting new standards for modern living
              </p>
            </div>
            <div className="wrap-layout">
              <div className="wrap-project layout-1">
                <div className="project-item style-1 hover-image-2 item-1">
                  <div className="img-style">
                    <Image
                      className="lazyload"
                      data-src="/images/project/project-1.jpg"
                      alt="project"
                      width={285}
                      height={311}
                      src="/images/project/project-1.jpg"
                    />
                  </div>
                  <div className="content">
                    <span className="number text_white text-1 mb-8 d-block">
                      01
                    </span>
                    <div className="title text-14 fw-6">
                      <Link
                        href={`/property-detail/1`}
                        className="text_white link"
                      >
                        Accy apartment for rent
                      </Link>
                    </div>
                  </div>
                  <Link href={`/project`} className="tf-btn">
                    <i className="icon-arrow-up-right" />
                  </Link>
                </div>
                <div className="project-item style-1 hover-image-2 item-6">
                  <div className="img-style">
                    <Image
                      className="lazyload"
                      data-src="/images/project/project-5.jpg"
                      alt="project"
                      width={285}
                      height={400}
                      src="/images/project/project-5.jpg"
                    />
                  </div>
                  <div className="content">
                    <span className="number text_white text-1 mb-8 d-block">
                      06
                    </span>
                    <div className="title text-14 fw-6">
                      <Link
                        href={`/property-detail/1`}
                        className="text_white link"
                      >
                        Whispering pines lakeview estate
                      </Link>
                    </div>
                  </div>
                  <Link href={`/project`} className="tf-btn">
                    <i className="icon-arrow-up-right" />
                  </Link>
                </div>
              </div>
              <div className="wrap-project layout-2">
                <div className="project-item style-1 hover-image-2 item-2">
                  <div className="img-style">
                    <Image
                      className="lazyload"
                      data-src="/images/project/project-2.jpg"
                      alt="project"
                      width={285}
                      height={311}
                      src="/images/project/project-2.jpg"
                    />
                  </div>
                  <div className="content">
                    <span className="number text_white text-1 mb-8 d-block">
                      02
                    </span>
                    <div className="title text-14 fw-6">
                      <Link
                        href={`/property-detail/1`}
                        className="text_white link"
                      >
                        Mirror house sudd
                      </Link>
                    </div>
                  </div>
                  <Link href={`/project`} className="tf-btn">
                    <i className="icon-arrow-up-right" />
                  </Link>
                </div>
                <div className="project-item style-1 hover-image-2 item-7">
                  <div className="img-style">
                    <Image
                      className="lazyload"
                      data-src="/images/project/project-6.jpg"
                      alt="project"
                      width={285}
                      height={400}
                      src="/images/project/project-6.jpg"
                    />
                  </div>
                  <div className="content">
                    <span className="number text_white text-1 mb-8 d-block">
                      07
                    </span>
                    <div className="title text-14 fw-6">
                      <Link
                        href={`/property-detail/1`}
                        className="text_white link"
                      >
                        Golden valley hillside retreat
                      </Link>
                    </div>
                  </div>
                  <Link href={`/project`} className="tf-btn">
                    <i className="icon-arrow-up-right" />
                  </Link>
                </div>
                <div className="project-item style-1 hover-image-2 item-12">
                  <div className="img-style">
                    <Image
                      className="lazyload"
                      data-src="/images/project/project-10.jpg"
                      alt="project"
                      width={285}
                      height={300}
                      src="/images/project/project-10.jpg"
                    />
                  </div>
                  <div className="content">
                    <span className="number text_white text-1 mb-8 d-block">
                      11
                    </span>
                    <div className="title text-14 fw-6">
                      <Link
                        href={`/property-detail/1`}
                        className="text_white link"
                      >
                        Accy apartment for rent
                      </Link>
                    </div>
                  </div>
                  <Link href={`/project`} className="tf-btn">
                    <i className="icon-arrow-up-right" />
                  </Link>
                </div>
              </div>
              <div className="wrap-project layout-3">
                <div className="project-item style-1 hover-image-2 item-3">
                  <div className="img-style">
                    <Image
                      className="lazyload"
                      data-src="/images/project/project-3.jpg"
                      alt="project"
                      width={285}
                      height={400}
                      src="/images/project/project-3.jpg"
                    />
                  </div>
                  <div className="content">
                    <span className="number text_white text-1 mb-8 d-block">
                      03
                    </span>
                    <div className="title text-14 fw-6">
                      <Link
                        href={`/property-detail/1`}
                        className="text_white link"
                      >
                        Aruna grandview residences at sinar <br />
                        valley
                      </Link>
                    </div>
                  </div>
                  <Link href={`/project`} className="tf-btn">
                    <i className="icon-arrow-up-right" />
                  </Link>
                </div>
                <div className="project-item style-1 hover-image-2 item-8">
                  <div className="img-style">
                    <Image
                      className="lazyload"
                      data-src="/images/project/project-7.jpg"
                      alt="project"
                      width={285}
                      height={311}
                      src="/images/project/project-7.jpg"
                    />
                  </div>
                  <div className="content">
                    <span className="number text_white text-1 mb-8 d-block">
                      08
                    </span>
                    <div className="title text-14 fw-6">
                      <Link
                        href={`/property-detail/1`}
                        className="text_white link"
                      >
                        Seaside breeze luxury residence
                      </Link>
                    </div>
                  </div>
                  <Link href={`/project`} className="tf-btn">
                    <i className="icon-arrow-up-right" />
                  </Link>
                </div>
                <div className="project-item empty">
                  <div className="content">
                    <Link href={`/`} className="logo">
                      <Image
                        alt="logo-footer"
                        width={272}
                        height={85}
                        src="/images/logo/logo-2@2x.png"
                      />
                    </Link>
                    <p className="text-1 text-color1">
                      Discover our wide selection of properties and find the one
                      that suits you best
                    </p>
                  </div>
                  <Link
                    href={`/project`}
                    className="tf-btn bg-color-primary height-1 mx-auto rounded-cycle btn-border"
                  >
                    View all project <i className="icon-arrow-right-3" />
                  </Link>
                </div>
              </div>
              <div className="wrap-project layout-4">
                <div className="project-item style-1 hover-image-2 item-4">
                  <div className="img-style">
                    <Image
                      className="lazyload"
                      data-src="/images/project/project-4.jpg"
                      alt="project"
                      width={285}
                      height={311}
                      src="/images/project/project-4.jpg"
                    />
                  </div>
                  <div className="content">
                    <span className="number text_white text-1 mb-8 d-block">
                      04
                    </span>
                    <div className="title text-14 fw-6">
                      <Link
                        href={`/property-detail/1`}
                        className="text_white link"
                      >
                        Whispering pines lakeview estate
                      </Link>
                    </div>
                  </div>
                  <Link href={`/project`} className="tf-btn">
                    <i className="icon-arrow-up-right" />
                  </Link>
                </div>
                <div className="project-item style-1 hover-image-2 item-9">
                  <div className="img-style">
                    <Image
                      className="lazyload"
                      data-src="/images/project/project-8.jpg"
                      alt="project"
                      width={285}
                      height={400}
                      src="/images/project/project-8.jpg"
                    />
                  </div>
                  <div className="content">
                    <span className="number text_white text-1 mb-8 d-block">
                      09
                    </span>
                    <div className="title text-14 fw-6">
                      <Link
                        href={`/property-detail/1`}
                        className="text_white link"
                      >
                        Reverbend grove country villa
                      </Link>
                    </div>
                  </div>
                  <Link href={`/project`} className="tf-btn">
                    <i className="icon-arrow-up-right" />
                  </Link>
                </div>
                <div className="project-item style-1 hover-image-2 item-13">
                  <div className="img-style">
                    <Image
                      className="lazyload"
                      data-src="/images/project/project-11.jpg"
                      alt="project"
                      width={285}
                      height={300}
                      src="/images/project/project-11.jpg"
                    />
                  </div>
                  <div className="content">
                    <span className="number text_white text-1 mb-8 d-block">
                      12
                    </span>
                    <div className="title text-14 fw-6">
                      <Link
                        href={`/property-detail/1`}
                        className="text_white link"
                      >
                        Gorgeous Apartment Building
                      </Link>
                    </div>
                  </div>
                  <Link href={`/project`} className="tf-btn">
                    <i className="icon-arrow-up-right" />
                  </Link>
                </div>
              </div>
              <div className="wrap-project layout-5">
                <div className="project-item style-1 hover-image-2 item-5">
                  <div className="img-style">
                    <Image
                      className="lazyload"
                      data-src="/images/project/project-9.jpg"
                      alt="project"
                      width={285}
                      height={400}
                      src="/images/project/project-9.jpg"
                    />
                  </div>
                  <div className="content">
                    <span className="number text_white text-1 mb-8 d-block">
                      05
                    </span>
                    <div className="title text-14 fw-6">
                      <Link
                        href={`/property-detail/1`}
                        className="text_white link"
                      >
                        Gorgeous Apartment Building
                      </Link>
                    </div>
                  </div>
                  <Link href={`/project`} className="tf-btn">
                    <i className="icon-arrow-up-right" />
                  </Link>
                </div>
                <div className="project-item style-1 hover-image-2 item-10">
                  <div className="img-style">
                    <Image
                      className="lazyload"
                      data-src="/images/project/project-12.jpg"
                      alt="project"
                      width={285}
                      height={311}
                      src="/images/project/project-12.jpg"
                    />
                  </div>
                  <div className="content">
                    <span className="number text_white text-1 mb-8 d-block">
                      10
                    </span>
                    <div className="title text-14 fw-6">
                      <Link
                        href={`/property-detail/1`}
                        className="text_white link"
                      >
                        Seaside breeze luxury residence
                      </Link>
                    </div>
                  </div>
                  <Link href={`/project`} className="tf-btn">
                    <i className="icon-arrow-up-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
