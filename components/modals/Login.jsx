"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Login() {
  return (
    <div className="modal modal-account fade" id="modalLogin">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="flat-account">
            <div className="banner-account">
              <Image
                alt="banner"
                width={380}
                height={659}
                src="/images/section/banner-login.jpg"
              />
            </div>
            <form className="form-account" onSubmit={(e) => e.preventDefault()}>
              <div className="title-box">
                <h4>Login</h4>
                <span
                  className="close-modal icon-close"
                  data-bs-dismiss="modal"
                />
              </div>
              <div className="box">
                <fieldset className="box-fieldset">
                  <label htmlFor="nameAccount">Account</label>
                  <div className="ip-field">
                    <svg
                      className="icon"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4869 14.0435C12.9628 13.3497 12.2848 12.787 11.5063 12.3998C10.7277 12.0126 9.86989 11.8115 9.00038 11.8123C8.13086 11.8115 7.27304 12.0126 6.49449 12.3998C5.71594 12.787 5.03793 13.3497 4.51388 14.0435M13.4869 14.0435C14.5095 13.1339 15.2307 11.9349 15.5563 10.6056C15.8818 9.27625 15.7956 7.87934 15.309 6.60014C14.8224 5.32093 13.9584 4.21986 12.8317 3.44295C11.7049 2.66604 10.3686 2.25 9 2.25C7.63137 2.25 6.29508 2.66604 5.16833 3.44295C4.04158 4.21986 3.17762 5.32093 2.69103 6.60014C2.20443 7.87934 2.11819 9.27625 2.44374 10.6056C2.76929 11.9349 3.49125 13.1339 4.51388 14.0435M13.4869 14.0435C12.2524 15.1447 10.6546 15.7521 9.00038 15.7498C7.3459 15.7523 5.74855 15.1448 4.51388 14.0435M11.2504 7.31228C11.2504 7.90902 11.0133 8.48131 10.5914 8.90327C10.1694 9.32523 9.59711 9.56228 9.00038 9.56228C8.40364 9.56228 7.83134 9.32523 7.40939 8.90327C6.98743 8.48131 6.75038 7.90902 6.75038 7.31228C6.75038 6.71554 6.98743 6.14325 7.40939 5.72129C7.83134 5.29933 8.40364 5.06228 9.00038 5.06228C9.59711 5.06228 10.1694 5.29933 10.5914 5.72129C11.0133 6.14325 11.2504 6.71554 11.2504 7.31228Z"
                        stroke="#A3ABB0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      type="text"
                      className="form-control"
                      id="nameAccount"
                      placeholder="Your name"
                    />
                  </div>
                </fieldset>
                <fieldset className="box-fieldset">
                  <label htmlFor="pass">Password</label>
                  <div className="ip-field">
                    <svg
                      className="icon"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.375 7.875V5.0625C12.375 4.16739 12.0194 3.30895 11.3865 2.67601C10.7535 2.04308 9.89511 1.6875 9 1.6875C8.10489 1.6875 7.24645 2.04308 6.61351 2.67601C5.98058 3.30895 5.625 4.16739 5.625 5.0625V7.875M5.0625 16.3125H12.9375C13.3851 16.3125 13.8143 16.1347 14.1307 15.8182C14.4472 15.5018 14.625 15.0726 14.625 14.625V9.5625C14.625 9.11495 14.4472 8.68573 14.1307 8.36926C13.8143 8.05279 13.3851 7.875 12.9375 7.875H5.0625C4.61495 7.875 4.18573 8.05279 3.86926 8.36926C3.55279 8.68573 3.375 9.11495 3.375 9.5625V14.625C3.375 15.0726 3.55279 15.5018 3.86926 15.8182C4.18573 16.1347 4.61495 16.3125 5.0625 16.3125Z"
                        stroke="#A3ABB0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      type="text"
                      className="form-control"
                      id="pass"
                      placeholder="Your password"
                    />
                  </div>
                  <div className="text-forgot text-end">
                    <a href="#">Forgot password</a>
                  </div>
                </fieldset>
              </div>
              <div className="box box-btn">
                <Link
                  href={`/dashboard`}
                  className="tf-btn bg-color-primary w-100"
                >
                  Login
                </Link>
                <div className="text text-center">
                  Don’t you have an account?
                  <a
                    href="#modalRegister"
                    data-bs-toggle="modal"
                    className="text-color-primary"
                  >
                    Register
                  </a>
                </div>
              </div>
              <p className="box text-center caption-2">or login with</p>
              <div className="group-btn">
                <a href="#" className="btn-social">
                  <svg
                    width={21}
                    height={20}
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2478_11334)">
                      <path
                        d="M4.93242 12.0863L4.23625 14.6852L1.69176 14.739C0.931328 13.3286 0.5 11.7149 0.5 10C0.5 8.34179 0.903281 6.77804 1.61812 5.40112H1.61867L3.88398 5.81644L4.87633 8.06815C4.66863 8.67366 4.55543 9.32366 4.55543 10C4.55551 10.7341 4.68848 11.4374 4.93242 12.0863Z"
                        fill="#FBBB00"
                      />
                      <path
                        d="M20.3242 8.1319C20.439 8.73682 20.4989 9.36155 20.4989 10C20.4989 10.716 20.4236 11.4143 20.2802 12.088C19.7934 14.3803 18.5214 16.3819 16.7594 17.7984L16.7588 17.7978L13.9055 17.6522L13.5017 15.1314C14.6709 14.4456 15.5847 13.3726 16.066 12.088H10.7188V8.1319H20.3242Z"
                        fill="#518EF8"
                      />
                      <path
                        d="M16.7595 17.7978L16.7601 17.7984C15.0464 19.1758 12.8694 20 10.4996 20C6.69141 20 3.38043 17.8715 1.69141 14.739L4.93207 12.0863C5.77656 14.3401 7.95074 15.9445 10.4996 15.9445C11.5952 15.9445 12.6216 15.6484 13.5024 15.1313L16.7595 17.7978Z"
                        fill="#28B446"
                      />
                      <path
                        d="M16.882 2.30219L13.6425 4.95437C12.7309 4.38461 11.6534 4.05547 10.4991 4.05547C7.89246 4.05547 5.67762 5.73348 4.87543 8.06812L1.61773 5.40109H1.61719C3.28148 2.1923 6.63422 0 10.4991 0C12.9254 0 15.1502 0.864297 16.882 2.30219Z"
                        fill="#F14336"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2478_11334">
                        <rect
                          width={20}
                          height={20}
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Google
                </a>
                <a href="#" className="btn-social">
                  <svg
                    width={21}
                    height={20}
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5 10C20.5 14.9914 16.843 19.1285 12.0625 19.8785V12.8906H14.3926L14.8359 10H12.0625V8.12422C12.0625 7.3332 12.45 6.5625 13.6922 6.5625H14.9531V4.10156C14.9531 4.10156 13.8086 3.90625 12.7145 3.90625C10.4305 3.90625 8.9375 5.29063 8.9375 7.79688V10H6.39844V12.8906H8.9375V19.8785C4.15703 19.1285 0.5 14.9914 0.5 10C0.5 4.47734 4.97734 0 10.5 0C16.0227 0 20.5 4.47734 20.5 10Z"
                      fill="#1877F2"
                    />
                    <path
                      d="M14.3926 12.8906L14.8359 10H12.0625V8.12418C12.0625 7.33336 12.4499 6.5625 13.6921 6.5625H14.9531V4.10156C14.9531 4.10156 13.8088 3.90625 12.7146 3.90625C10.4304 3.90625 8.9375 5.29063 8.9375 7.79688V10H6.39844V12.8906H8.9375V19.8785C9.44664 19.9584 9.96844 20 10.5 20C11.0316 20 11.5534 19.9584 12.0625 19.8785V12.8906H14.3926Z"
                      fill="white"
                    />
                  </svg>
                  Facebook
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
