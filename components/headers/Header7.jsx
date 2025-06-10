import React from "react";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
export default function Header7() {
  return (
    <header id="header-main" className="header no-shadow style-8">
      <div className="header-inner">
        <div className="tf-container xl">
          <div className="row">
            <div className="col-12">
              <div className="header-inner-wrap">
                <div className="header-logo">
                  <Link href={`/`} className="site-logo">
                    <img
                      className="logo_header"
                      alt=""
                      data-light="/images/logo/logo@2x.png"
                      data-dark="/images/logo/logo-2@2x.png"
                      src="/images/logo/logo@2x.png"
                    />
                  </Link>
                </div>
                <nav className="main-menu style-1">
                  <ul className="navigation">
                    <Nav />
                  </ul>
                </nav>
                <div className="header-right">
                  <div className="btn-add">
                    <Link
                      className="tf-btn style-border rounded-cycle pd-11 height-3"
                      href={`/add-property`}
                    >
                      Explore listing
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
