import React from "react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function Banner() {
  return (
    <section className="section-appraisal style-2">
      <div className="wg-appraisal style-3">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <div className="heading-section mb-32">
                  <h2 className="title split-text effect-right">
                    <SplitTextAnimation text="Have confidence in any market with us" />
                  </h2>
                  <p
                    className="text-1 split-text split-lines-transform"
                    data-wow-duration="1s"
                  >
                    Proty® agents have the experience to get the job done in
                    today’s market, backed by a robust network of over 140,000
                    agents in more than 9,000 offices worldwide. With our
                    extensive global connections and deep local insights, you
                    gain an edge that transcends what you'll find online.
                  </p>
                </div>
                <a
                  href="#"
                  className="tf-btn bg-color-primary pd-19 fw-7 wow animate__fadeInUp animate__animated"
                  data-wow-duration="1s"
                >
                  Find your agnet today
                </a>
                <div
                  className="person wow animate__fadeInRight animate__animated"
                  data-wow-duration="1s"
                >
                  <Image
                    alt=""
                    width={509}
                    height={578}
                    src="/images/section/person-3.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
