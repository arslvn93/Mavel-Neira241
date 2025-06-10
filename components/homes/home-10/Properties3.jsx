"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import { properties9 } from "@/data/properties";
gsap.registerPlugin(ScrollTrigger);
export default function Properties3() {
  useEffect(() => {
    const stackElements = document.querySelectorAll(".stack-element");

    if (stackElements.length > 0) {
      let totalHeight;
      let scrollTriggerInstances = [];

      const updateTotalHeight = () => {
        const stackContentWrap = document.querySelector(".stack-content-wrap");
        totalHeight = stackContentWrap.offsetHeight;

        // Kill existing ScrollTrigger instances
        scrollTriggerInstances.forEach((instance) => {
          instance.kill();
        });
        scrollTriggerInstances = [];

        // Loop through each element and create ScrollTrigger instances
        document.querySelectorAll(".element").forEach((element, index) => {
          const tabHeight = element.offsetHeight;
          totalHeight -= tabHeight;

          const pinTrigger = ScrollTrigger.create({
            trigger: element,
            scrub: 1,
            start: "top 80",
            end: `+=${totalHeight}`,
            pin: true,
            pinSpacing: false,
            animation: gsap.to(element, {
              scale: 0.9,
            }),
          });

          scrollTriggerInstances.push(pinTrigger);
        });
      };

      // Initial call to set up ScrollTriggers
      updateTotalHeight();

      // Add resize event listener
      window.addEventListener("resize", updateTotalHeight);

      // Cleanup function
      return () => {
        window.removeEventListener("resize", updateTotalHeight);
        scrollTriggerInstances.forEach((instance) => {
          instance.kill();
        });
      };
    }
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount
  return (
    <div className="section-best-property tf-spacing-14">
      <div className="tf-container">
        <div className="heading-title text-center split-text effect-scale">
          BEST PROPERTY
        </div>
        <div className="stack-element layout-2">
          <div className="stack-content-wrap">
            {properties9.map((property) => (
              <div className="box-house style-5 element" key={property.id}>
                <div className="image-wrap">
                  <Link href={`/property-detail-v1/${property.id}`}>
                    <Image
                      className="lazyload"
                      data-src={property.imageSrc}
                      alt={property.title}
                      src={property.imageSrc}
                      width={property.imageWidth}
                      height={property.imageHeight}
                    />
                  </Link>
                </div>
                <div className="content">
                  <div className="heading">
                    <div className="left">
                      <div className="title text-13 fw-6">
                        <Link href={`/property-detail-v1/${property.id}`}>
                          {property.title}
                        </Link>
                      </div>
                      <p className="location text-16 flex items-center gap-6">
                        <i className="icon-location-5" /> {property.location}
                      </p>
                    </div>
                    <div className="tag text-1 lh-20">
                      <i className="icon-file" />
                      {property.category}
                    </div>
                  </div>
                  <div className="bot flex justify-between items-center">
                    <div className="left">
                      <h4 className="price">${property.price}</h4>
                      <ul className="meta-list flex">
                        <li className="text-1 flex">
                          <i className="icon-bed-4" />
                          <span>{property.beds}</span>
                        </li>
                        <li className="text-1 flex">
                          <i className="icon-bath-1" />
                          <span>{property.baths}</span>
                        </li>
                        <li className="text-1 flex">
                          <i className="icon-sqft-1" />
                          <span>{property.sqft}</span>Sqft
                        </li>
                      </ul>
                    </div>
                    <div className="wrap-btn flex">
                      <Link
                        href={`/property-detail-v1/${property.id}`}
                        className="tf-btn style-border pd-4"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
