import React from "react";
import Image from "next/image";
import Nav from "./Nav";
import Link from "next/link";
export default function Header9() {
  return (
    <header id="header-main" className="header style-6 no-shadow">
      <div className="tf-container-xxl">
        <div className="row">
          <div className="col-">
            <div className="header-inner">
              <div className="header-inner-wrap border-bottom-0">
                <div className="header-logo">
                  <Link href={`/`} className="site-logo">
                    <Image
                      id="logo_header"
                      alt=""
                      src="/images/logo/logo-2@2x.png"
                      width={272}
                      height={85}
                    />
                  </Link>
                </div>
                <nav className="main-menu">
                  <ul className="navigation">
                    <Nav />
                  </ul>
                </nav>
                <div className="header-right">
                  <div className="btn-add">
                    <Link
                      className="tf-btn style-border height-3 pd-23 rounded-cycle"
                      href={`/add-property`}
                    >
                      Add property
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
                      </svg>
                    </Link>
                  </div>
                  <div
                    className="mobile-button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#menu-mobile"
                    aria-controls="menu-mobile"
                  >
                    <i className="icon-menu" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
