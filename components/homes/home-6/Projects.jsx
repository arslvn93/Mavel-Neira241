import React from "react";
import Link from "next/link";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
import { siteContent } from "@/data/siteContent"; // Import centralized content
export default function Projects() {
  return (
    <div className="section-project tf-spacing-7">
      <div className="tf-container-xl">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center gap-33 mb-56">
              <div className="title text-display-4 text_white split-text effect-right">
                <SplitTextAnimation text={`${siteContent.agent.firstName}'s Client Success Stories`} />
              </div>
              <p
                className="text-1 text-color1 wow animate__fadeInUp animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                {`See examples of how I've helped clients achieve their real estate goals in ${siteContent.agent.location}, delivering exceptional results with personalized service.`}
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
                      {/* Loop through placeholder titles - needs better mapping if possible */}
                      <Link
                        href={siteContent.projects.linkTarget}
                        className="text_white link"
                      >
                        {(siteContent.projects.storyTitles[0] || 'Client Success Story').replace('{Location}', siteContent.agent.location)}
                      </Link>
                    </div>
                  </div>
                  <Link href={siteContent.projects.linkTarget} className="tf-btn">
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
                        href={siteContent.projects.linkTarget}
                        className="text_white link"
                      >
                        {(siteContent.projects.storyTitles[5] || 'Client Success Story').replace('{Location}', siteContent.agent.location)} {/* Index 5 based on original layout */}
                      </Link>
                    </div>
                  </div>
                  <Link href={siteContent.projects.linkTarget} className="tf-btn">
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
                        href={siteContent.projects.linkTarget}
                        className="text_white link"
                      >
                        {(siteContent.projects.storyTitles[1] || 'Client Success Story').replace('{Location}', siteContent.agent.location)} {/* Index 1 */}
                      </Link>
                    </div>
                  </div>
                  <Link href={siteContent.projects.linkTarget} className="tf-btn">
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
                        href={siteContent.projects.linkTarget}
                        className="text_white link"
                      >
                        {(siteContent.projects.storyTitles[6] || 'Client Success Story').replace('{Location}', siteContent.agent.location)} {/* Index 6 */}
                      </Link>
                    </div>
                  </div>
                  <Link href={siteContent.projects.linkTarget} className="tf-btn">
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
                        href={siteContent.projects.linkTarget}
                        className="text_white link"
                      >
                        {(siteContent.projects.storyTitles[10] || 'Client Success Story').replace('{Location}', siteContent.agent.location)} {/* Index 10 */}
                      </Link>
                    </div>
                  </div>
                  <Link href={siteContent.projects.linkTarget} className="tf-btn">
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
                        href={siteContent.projects.linkTarget}
                        className="text_white link"
                      >
                         {(siteContent.projects.storyTitles[2] || 'Client Success Story').replace('{Location}', siteContent.agent.location)} {/* Index 2 */}
                      </Link>
                    </div>
                  </div>
                  <Link href={siteContent.projects.linkTarget} className="tf-btn">
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
                        href={siteContent.projects.linkTarget}
                        className="text_white link"
                      >
                         {(siteContent.projects.storyTitles[7] || 'Client Success Story').replace('{Location}', siteContent.agent.location)} {/* Index 7 */}
                      </Link>
                    </div>
                  </div>
                  <Link href={siteContent.projects.linkTarget} className="tf-btn">
                    <i className="icon-arrow-up-right" />
                  </Link>
                </div>
                <div className="project-item empty">
                  <div className="content">
                    <Link href={`/`} className="logo">
                      {/* Replaced Image with styled text */}
                      <span className="text-logo">{siteContent.agent.name}</span>
                    </Link>
                    <p className="text-1 text-color1">
                      {siteContent.projects.emptyBoxText}
                    </p>
                  </div>
                  <Link
                    href={siteContent.projects.linkTarget}
                    className="tf-btn bg-color-primary height-1 mx-auto rounded-cycle btn-border"
                  >
                    {siteContent.projects.buttonText} <i className="icon-arrow-right-3" />
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
                        href={siteContent.projects.linkTarget}
                        className="text_white link"
                      >
                         {(siteContent.projects.storyTitles[3] || 'Client Success Story').replace('{Location}', siteContent.agent.location)} {/* Index 3 */}
                      </Link>
                    </div>
                  </div>
                  <Link href={siteContent.projects.linkTarget} className="tf-btn">
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
                        href={siteContent.projects.linkTarget}
                        className="text_white link"
                      >
                         {(siteContent.projects.storyTitles[8] || 'Client Success Story').replace('{Location}', siteContent.agent.location)} {/* Index 8 */}
                      </Link>
                    </div>
                  </div>
                  <Link href={siteContent.projects.linkTarget} className="tf-btn">
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
                        href={siteContent.projects.linkTarget}
                        className="text_white link"
                      >
                         {(siteContent.projects.storyTitles[11] || 'Client Success Story').replace('{Location}', siteContent.agent.location)} {/* Index 11 */}
                      </Link>
                    </div>
                  </div>
                  <Link href={siteContent.projects.linkTarget} className="tf-btn">
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
                        href={siteContent.projects.linkTarget}
                        className="text_white link"
                      >
                         {(siteContent.projects.storyTitles[4] || 'Client Success Story').replace('{Location}', siteContent.agent.location)} {/* Index 4 */}
                      </Link>
                    </div>
                  </div>
                  <Link href={siteContent.projects.linkTarget} className="tf-btn">
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
                        href={siteContent.projects.linkTarget}
                        className="text_white link"
                      >
                         {(siteContent.projects.storyTitles[9] || 'Client Success Story').replace('{Location}', siteContent.agent.location)} {/* Index 9 */}
                      </Link>
                    </div>
                  </div>
                  <Link href={siteContent.projects.linkTarget} className="tf-btn">
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
