import React from "react";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="page-title home07">
      <div className="tf-container xl">
        <div className="row">
          <div className="col-12">
            <div className="clip-color-text heading">
              <div className="clip-text-bg-Horizontal" id="scrollText">
                PROTY
              </div>
            </div>
            <div className="text-uppercase fw-3 text-13 text-color-heading text-center sub split-text split-lines-rotation-x">
              We are a leading real estate agency specializing in connecting
              clients with their <br />
              dream properties.
            </div>
            <div className="wrap-btn d-flex gap-16 justify-center flex-wrap-sm">
              <Link
                className="tf-btn bg-color-primary rounded-cycle pd-23 h54"
                href={`/add-property`}
              >
                Explore our homes
                <span>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 7H17V17"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 17L17 7"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </span>
              </Link>
              <Link
                className="tf-btn style-border rounded-cycle pd-23 height-3"
                href={`/add-property`}
              >
                Meet an expert
                <span>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 7H17V17"
                      stroke="#F1913D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 17L17 7"
                      stroke="#F1913D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
