import React from "react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
const iconBoxes = [
  {
    id: 1,
    iconClass: "icon-agent-2",
    title: "Find the Best Agent for You",
    description:
      "Explore video tours, in-depth research, and articles on 20,000 neighborhoods. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    linkText: "Learn More",
  },
  {
    id: 2,
    iconClass: "icon-location-4",
    title: "Explore Great Neighborhoods",
    description:
      "Explore video tours, in-depth research, and articles on 20,000 neighborhoods. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    linkText: "Learn More",
  },
  {
    id: 3,
    iconClass: "icon-house-1",
    title: "Find highly rated apartments",
    description:
      "Explore video tours, in-depth research, and articles on 20,000 neighborhoods. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    linkText: "Learn More",
  },
  {
    id: 4,
    iconClass: "icon-find-2",
    title: "Search Recent Property Sales",
    description:
      "Explore video tours, in-depth research, and articles on 20,000 neighborhoods. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    linkText: "Learn More",
  },
];

export default function HelpCenter() {
  return (
    <section className="section-help tf-spacing-1 pb-0">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="How Can We Help You?" />
              </h2>
              <p
                className="text-1 wow animate__fadeInUp animate__animated"
                data-wow-duration="1.5s"
                data-wow-delay="0s"
              >
                Thousands of luxury home enthusiasts just like you visit our
                website.
              </p>
            </div>
            <div className="tf-grid-layout md-col-2 mb-6">
              {iconBoxes.map((box) => (
                <div
                  key={box.id}
                  className="icons-box style-3 wow animate__zoomIn animate__animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0s"
                >
                  <div className="tf-icon">
                    <i className={box.iconClass} />
                  </div>
                  <div className="content">
                    <h5 className="title">
                      <a href="#">{box.title}</a>
                    </h5>
                    <p className="text-1">{box.description}</p>
                    <a href="#" className="tf-btn-link color-3">
                      <span>{box.linkText}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="item text-center">
        <Image
          alt=""
          width={1875}
          height={153}
          src="/images/section/section-help.png"
        />
      </div>
    </section>
  );
}
