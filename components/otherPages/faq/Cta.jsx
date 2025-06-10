import Image from "next/image";
import React from "react";
import { siteContent } from "@/data/siteContent"; // Import centralized content

export default function Cta() {
  return (
    <div className="section-contact-help">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="relative">
              <div className="logo">
                {/* Replaced Image with styled text */}
                {/* Note: This might need a Link wrapper if it should link home */}
                <span className="text-logo">{siteContent.agent.name}</span>
              </div>
              <div className="image-wrap">
                <Image
                  className="lazyload"
                  data-src="/images/section/section-contact.jpg"
                  alt=""
                  width={1280}
                  height={390}
                  src="/images/section/section-contact.jpg"
                />
              </div>
              <div className="content">
                <div className="heading-section mb-0">
                  <h2 className="title text_white">
                    {/* Using faq object for specificity */}
                    {siteContent.faq.contactBoxQuestion || `Need help? Talk to ${siteContent.agent.firstName}.`}
                  </h2>
                  <p className="text-1 text_white">
                    {siteContent.faq.contactBoxText || "Have more questions or ready to discuss your specific needs? Contact me directly."}
                  </p>
                </div>
                <div className="wrap-btn">
                  <a
                    href="/contact"
                    className="tf-btn style-border color-white pd-14 fw-6"
                  >
                    {/* Using a generic button text, could add specific one to siteContent.faq if needed */}
                    {`Contact ${siteContent.agent.firstName}`}
                  </a>
                  <a href="/contact" className="tf-btn bg-color-primary pd-15 fw-6">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.875 8.125V4.375M11.875 8.125H15.625M11.875 8.125L16.875 3.125M14.375 18.125C7.47167 18.125 1.875 12.5283 1.875 5.625V3.75C1.875 3.25272 2.07254 2.77581 2.42417 2.42417C2.77581 2.07254 3.25272 1.875 3.75 1.875H4.89333C5.32333 1.875 5.69833 2.1675 5.8025 2.585L6.72417 6.27083C6.81583 6.6375 6.67917 7.0225 6.37667 7.24833L5.29917 8.05667C5.14494 8.16831 5.03083 8.32672 4.97379 8.50837C4.91674 8.69002 4.9198 8.88523 4.9825 9.065C5.48406 10.4293 6.27618 11.6682 7.30398 12.696C8.33179 13.7238 9.57073 14.5159 10.935 15.0175C11.3025 15.1525 11.7083 15.0142 11.9433 14.7008L12.7517 13.6233C12.8623 13.4756 13.0141 13.3639 13.188 13.3021C13.3619 13.2402 13.5501 13.2311 13.7292 13.2758L17.415 14.1975C17.8317 14.3017 18.125 14.6767 18.125 15.1067V16.25C18.125 16.7473 17.9275 17.2242 17.5758 17.5758C17.2242 17.9275 16.7473 18.125 16.25 18.125H14.375Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {siteContent.agent.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
