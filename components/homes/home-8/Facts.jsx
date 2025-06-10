import OdometerComponent from "@/components/common/OdometerComponent";
import { counterData } from "@/data/facts";
import React from "react";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function Facts() {
  return (
    <div className="tf-spacing-7">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section mb-56 gap-32">
              <h2 className="title split-text effect-right fw-5">
                <SplitTextAnimation text="Market leader in real estate" />
              </h2>
              <p className="text-1 text-color-default split-text split-lines-transform">
                At Proty, we're more than just a real estate company; we're
                architects of dreams, crafting spaces where life <br />
                flourishes and businesses thrive.
              </p>
            </div>
          </div>
          {counterData.map((item, index) => (
            <div className="col-lg-3 col-6" key={index}>
              <div className="counter-item style-4">
                <div className="count">
                  <div className="counter-number">
                    <div className={`odometer style-4 ${item.className}`}>
                      <OdometerComponent max={item.value} />
                    </div>
                    {item.subText && <span>{item.subText}</span>}
                    <span className="sub plus">+</span>
                  </div>
                  <p className="text-1 mt_-9">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
