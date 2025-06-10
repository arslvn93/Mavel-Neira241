"use client";

import { useEffect } from "react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function Services2() {
  useEffect(() => {
    let offsetX = 0;
    let offsetY = 0;

    const areaCursors = document.querySelectorAll(".area-cursor-custom");

    if (!areaCursors.length) return;

    const handleMouseMove = (e, cursorCustom) => {
      cursorCustom.style.top = `${e.clientY + offsetY}px`;
      cursorCustom.style.left = `${e.clientX + offsetX}px`;
    };

    const handleMouseEnter = (cursorCustom) => {
      cursorCustom.style.transform = "scale(1)";
      cursorCustom.style.opacity = "1";
    };

    const handleMouseLeave = (cursorCustom) => {
      cursorCustom.style.transform = "scale(0)";
      cursorCustom.style.opacity = "0";
    };

    areaCursors.forEach((areaCursor) => {
      const cursorCustom = areaCursor.querySelector(".custom-cursor");
      if (!cursorCustom) return;

      const mouseMoveHandler = (e) => handleMouseMove(e, cursorCustom);
      const mouseEnterHandler = () => handleMouseEnter(cursorCustom);
      const mouseLeaveHandler = () => handleMouseLeave(cursorCustom);

      areaCursor.addEventListener("mousemove", mouseMoveHandler);
      areaCursor.addEventListener("mouseenter", mouseEnterHandler);
      areaCursor.addEventListener("mouseleave", mouseLeaveHandler);

      // Cleanup function
      return () => {
        areaCursor.removeEventListener("mousemove", mouseMoveHandler);
        areaCursor.removeEventListener("mouseenter", mouseEnterHandler);
        areaCursor.removeEventListener("mouseleave", mouseLeaveHandler);
      };
    });
  }, []);

  return (
    <div className="tf-container">
      <div className="row">
        <div className="col-12">
          <div className="heading-section mb-54 gap-32">
            <h2 className="title split-text effect-right">
              <SplitTextAnimation text="Have a look at our services" />
            </h2>
            <p className="text-1 split-text split-lines-transform">
              Our vision is to be the premier real estate company in New York,
              recognized for our unwavering commitment to <br />
              excellence, innovation, and community impact. We aspire to create
              lasting value for our clients, employees, and <br />
              the communities we serve.
            </p>
          </div>
          <div className="box-service">
            <div className="box-item area-cursor-custom">
              <h4 className="number fw-4">01.</h4>
              <div className="title text-13">Find the Best Agent for You</div>
              <div className="custom-cursor style-1 lg-hide">
                <Image
                  alt=""
                  src="/images/section/cursor-img-2.jpg"
                  width={334}
                  height={215}
                />
              </div>
            </div>
            <div className="box-item area-cursor-custom">
              <h4 className="number fw-4">02.</h4>
              <div className="title text-13">Explore Great Neighborhoods</div>
              <div className="custom-cursor style-1 lg-hide">
                <Image
                  alt=""
                  src="/images/section/cursor-img-1.jpg"
                  width={338}
                  height={217}
                />
              </div>
            </div>
            <div className="box-item area-cursor-custom">
              <h4 className="number fw-4">03.</h4>
              <div className="title text-13">Find highly rated apartments</div>
              <div className="custom-cursor style-1 lg-hide">
                <Image
                  alt=""
                  src="/images/section/cursor-img-3.jpg"
                  width={334}
                  height={215}
                />
              </div>
            </div>
            <div className="box-item area-cursor-custom">
              <h4 className="number fw-4">04.</h4>
              <div className="title text-13">Search Recent Property Sales</div>
              <div className="custom-cursor style-1 lg-hide">
                <Image
                  alt=""
                  src="/images/section/cursor-img-4.jpg"
                  width={334}
                  height={215}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
