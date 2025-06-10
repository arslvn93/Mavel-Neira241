import React from "react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function DownloadApp() {
  return (
    <section className="section-download tf-spacing-1">
      <div className="tf-container">
        <div className="content relative">
          <div className="row">
            <div className="col-lg-6 relative z-5">
              <div className="heading-section">
                <h2 className="title split-text effect-right">
                  <SplitTextAnimation text="Take Your Search With You" />
                </h2>
                <p className="text-1 split-text split-lines-transform">
                  We're here to help you find your dream home, offer property
                  insights, and connect you with top local agents on iOS and
                  Android.
                </p>
              </div>
              <div className="wrap-download">
                <a
                  href="#"
                  className="app-store wow animate__fadeInUp animate__animated"
                  data-wow-duration="1s"
                  data-wow-delay="0s"
                >
                  <Image
                    alt=""
                    width={296}
                    height={112}
                    src="/images/items/app-store.jpg"
                  />
                </a>
                <a
                  href="#"
                  className="ch-play wow animate__fadeInUp animate__animated"
                  data-wow-duration="1s"
                  data-wow-delay="0.1s"
                >
                  <Image
                    alt=""
                    width={336}
                    height={112}
                    src="/images/items/ch-play.jpg"
                  />
                </a>
              </div>
            </div>
          </div>
          <div
            className="image-wrap lg-hide wow animate__fadeInRight animate__animated"
            data-wow-duration="2.5s"
            data-wow-delay="0s"
          >
            <Image
              alt=""
              width={698}
              height={551}
              src="/images/items/phone.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
