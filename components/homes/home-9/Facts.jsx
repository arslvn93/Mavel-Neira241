import OdometerComponent from "@/components/common/OdometerComponent";
import { counterData2 } from "@/data/facts";
import React from "react";

export default function Facts() {
  return (
    <div className="tf-spacing-7">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="wrap-counter style-1 tf-grid-layout-2 lg-col-4">
              {counterData2.map((item) => (
                <div className="counter-item style-4 text-center" key={item.id}>
                  <div className="count">
                    <div className="counter-number mx-auto">
                      <div className={`odometer style-4 ${item.className}`}>
                        <OdometerComponent max={item.value} />
                      </div>
                      {item.additionalText && (
                        <span>{item.additionalText}</span>
                      )}
                      <span className="sub plus">+</span>
                    </div>
                    <p className="text-1 mt_-9">{item.subText}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
