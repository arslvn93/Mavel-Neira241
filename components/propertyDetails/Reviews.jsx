"use client";
import React from "react";
import Image from "next/image";
export default function Reviews() {
  return (
    <>
      <div className="wrap-comment">
        <h4 className="title">Guest Reviews</h4>
        <ul className="comment-list">
          <li>
            <div className="comment-item">
              <div className="image-wrap">
                <Image
                  alt=""
                  src="/images/avatar/avatar-1.jpg"
                  width={120}
                  height={120}
                />
              </div>
              <div className="content">
                <div className="user">
                  <div className="author">
                    <h6 className="name">Viola Lucas</h6>
                    <div className="time">August 13, 2023</div>
                  </div>
                  <div className="ratings">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                </div>
                <div className="comment">
                  <p>
                    It's really easy to use and it is exactly what I am looking
                    for. A lot of good looking templates &amp; it's highly
                    customizable. Live support is helpful, solved my issue in no
                    time.
                  </p>
                  <div className="group-image">
                    <Image
                      alt=""
                      src="/images/blog/comment-1.jpg"
                      width={282}
                      height={158}
                    />
                    <Image
                      alt=""
                      src="/images/blog/comment-2.jpg"
                      width={282}
                      height={158}
                    />
                    <Image
                      alt=""
                      src="/images/blog/comment-3.jpg"
                      width={282}
                      height={158}
                    />
                  </div>
                  <div className="action action-button-list">
                    <div className="action-item action-button btn-action">
                      <div className="icons">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.375 6.75H10.6875M4.66949 14.0625C4.66124 14.025 4.64849 13.9875 4.63049 13.9515C4.18724 13.0515 3.93749 12.039 3.93749 10.9687C3.93587 9.89238 4.19282 8.83136 4.68674 7.875M4.66949 14.0625C4.72649 14.3362 4.53224 14.625 4.23824 14.625H3.55724C2.89049 14.625 2.27249 14.2365 2.07824 13.599C1.82399 12.7665 1.68749 11.8837 1.68749 10.9687C1.68749 9.804 1.90874 8.69175 2.31074 7.67025C2.54024 7.08975 3.12524 6.75 3.74999 6.75H4.53974C4.89374 6.75 5.09849 7.167 4.91474 7.47C4.83434 7.60234 4.7578 7.73742 4.68674 7.875M4.66949 14.0625H5.63999C6.0027 14.0623 6.36307 14.1205 6.70724 14.235L9.04274 15.015C9.38691 15.1295 9.74728 15.1877 10.11 15.1875H13.122C13.5855 15.1875 14.0347 15.0022 14.3257 14.6407C15.6143 13.0434 16.3156 11.0523 16.3125 9C16.3125 8.6745 16.2952 8.35275 16.2615 8.03625C16.1797 7.2705 15.4905 6.75 14.721 6.75H12.3765C11.913 6.75 11.6332 6.207 11.8327 5.7885C12.191 5.03444 12.3763 4.20985 12.375 3.375C12.375 2.92745 12.1972 2.49823 11.8807 2.18176C11.5643 1.86529 11.135 1.6875 10.6875 1.6875C10.5383 1.6875 10.3952 1.74676 10.2897 1.85225C10.1843 1.95774 10.125 2.10082 10.125 2.25V2.72475C10.125 3.1545 10.0425 3.57975 9.88349 3.97875C9.65549 4.54875 9.18599 4.97625 8.64374 5.265C7.81128 5.7092 7.0807 6.32228 6.49874 7.065C6.12524 7.5405 5.57924 7.875 4.97474 7.875H4.68674"
                            stroke="#A8ABAE"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="text-2">Useful</div>
                    </div>
                    <div className="action-item action-button btn-action">
                      <div className="icons">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.62501 11.25H7.31251M13.3305 3.9375C13.3388 3.975 13.3515 4.0125 13.3695 4.0485C13.8128 4.9485 14.0625 5.961 14.0625 7.03125C14.0641 8.10762 13.8072 9.16864 13.3133 10.125M13.3305 3.9375C13.2735 3.66375 13.4678 3.375 13.7618 3.375H14.4428C15.1095 3.375 15.7275 3.7635 15.9218 4.401C16.176 5.2335 16.3125 6.11625 16.3125 7.03125C16.3125 8.196 16.0913 9.30825 15.6893 10.3298C15.4598 10.9103 14.8748 11.25 14.25 11.25H13.4603C13.1063 11.25 12.9015 10.833 13.0853 10.53C13.1657 10.3977 13.2422 10.2626 13.3133 10.125M13.3305 3.9375H12.36C11.9973 3.93772 11.6369 3.87948 11.2928 3.765L8.95726 2.985C8.61309 2.87053 8.25272 2.81228 7.89001 2.8125H4.87801C4.41451 2.8125 3.96526 2.99775 3.67426 3.35925C2.38572 4.95658 1.68441 6.94774 1.68751 9C1.68751 9.3255 1.70476 9.64725 1.73851 9.96375C1.82026 10.7295 2.50951 11.25 3.27901 11.25H5.62351C6.08701 11.25 6.36676 11.793 6.16726 12.2115C5.80897 12.9656 5.6237 13.7902 5.62501 14.625C5.62501 15.0726 5.8028 15.5018 6.11927 15.8182C6.43574 16.1347 6.86496 16.3125 7.31251 16.3125C7.46169 16.3125 7.60477 16.2532 7.71026 16.1477C7.81575 16.0423 7.87501 15.8992 7.87501 15.75V15.2753C7.87501 14.8455 7.95751 14.4203 8.11651 14.0213C8.34451 13.4513 8.81401 13.0238 9.35626 12.735C10.1887 12.2908 10.9193 11.6777 11.5013 10.935C11.8748 10.4595 12.4208 10.125 13.0253 10.125H13.3133"
                            stroke="#A8ABAE"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="text-2">Not helpful</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="comment-item">
              <div className="image-wrap">
                <Image
                  alt=""
                  src="/images/avatar/avatar-2.jpg"
                  width={120}
                  height={120}
                />
              </div>
              <div className="content">
                <div className="user">
                  <div className="author">
                    <h6 className="name">Viola Lucas</h6>
                    <div className="time">August 13, 2023</div>
                  </div>
                  <div className="ratings">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                </div>
                <div className="comment">
                  <p>
                    It's really easy to use and it is exactly what I am looking
                    for. A lot of good looking templates &amp; it's highly
                    customizable. Live support is helpful, solved my issue in no
                    time.
                  </p>
                  <div className="action action-button-list">
                    <div className="action-item action-button btn-action">
                      <div className="icons">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.375 6.75H10.6875M4.66949 14.0625C4.66124 14.025 4.64849 13.9875 4.63049 13.9515C4.18724 13.0515 3.93749 12.039 3.93749 10.9687C3.93587 9.89238 4.19282 8.83136 4.68674 7.875M4.66949 14.0625C4.72649 14.3362 4.53224 14.625 4.23824 14.625H3.55724C2.89049 14.625 2.27249 14.2365 2.07824 13.599C1.82399 12.7665 1.68749 11.8837 1.68749 10.9687C1.68749 9.804 1.90874 8.69175 2.31074 7.67025C2.54024 7.08975 3.12524 6.75 3.74999 6.75H4.53974C4.89374 6.75 5.09849 7.167 4.91474 7.47C4.83434 7.60234 4.7578 7.73742 4.68674 7.875M4.66949 14.0625H5.63999C6.0027 14.0623 6.36307 14.1205 6.70724 14.235L9.04274 15.015C9.38691 15.1295 9.74728 15.1877 10.11 15.1875H13.122C13.5855 15.1875 14.0347 15.0022 14.3257 14.6407C15.6143 13.0434 16.3156 11.0523 16.3125 9C16.3125 8.6745 16.2952 8.35275 16.2615 8.03625C16.1797 7.2705 15.4905 6.75 14.721 6.75H12.3765C11.913 6.75 11.6332 6.207 11.8327 5.7885C12.191 5.03444 12.3763 4.20985 12.375 3.375C12.375 2.92745 12.1972 2.49823 11.8807 2.18176C11.5643 1.86529 11.135 1.6875 10.6875 1.6875C10.5383 1.6875 10.3952 1.74676 10.2897 1.85225C10.1843 1.95774 10.125 2.10082 10.125 2.25V2.72475C10.125 3.1545 10.0425 3.57975 9.88349 3.97875C9.65549 4.54875 9.18599 4.97625 8.64374 5.265C7.81128 5.7092 7.0807 6.32228 6.49874 7.065C6.12524 7.5405 5.57924 7.875 4.97474 7.875H4.68674"
                            stroke="#A8ABAE"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="text-2">Useful</div>
                    </div>
                    <div className="action-item action-button btn-action">
                      <div className="icons">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.62501 11.25H7.31251M13.3305 3.9375C13.3388 3.975 13.3515 4.0125 13.3695 4.0485C13.8128 4.9485 14.0625 5.961 14.0625 7.03125C14.0641 8.10762 13.8072 9.16864 13.3133 10.125M13.3305 3.9375C13.2735 3.66375 13.4678 3.375 13.7618 3.375H14.4428C15.1095 3.375 15.7275 3.7635 15.9218 4.401C16.176 5.2335 16.3125 6.11625 16.3125 7.03125C16.3125 8.196 16.0913 9.30825 15.6893 10.3298C15.4598 10.9103 14.8748 11.25 14.25 11.25H13.4603C13.1063 11.25 12.9015 10.833 13.0853 10.53C13.1657 10.3977 13.2422 10.2626 13.3133 10.125M13.3305 3.9375H12.36C11.9973 3.93772 11.6369 3.87948 11.2928 3.765L8.95726 2.985C8.61309 2.87053 8.25272 2.81228 7.89001 2.8125H4.87801C4.41451 2.8125 3.96526 2.99775 3.67426 3.35925C2.38572 4.95658 1.68441 6.94774 1.68751 9C1.68751 9.3255 1.70476 9.64725 1.73851 9.96375C1.82026 10.7295 2.50951 11.25 3.27901 11.25H5.62351C6.08701 11.25 6.36676 11.793 6.16726 12.2115C5.80897 12.9656 5.6237 13.7902 5.62501 14.625C5.62501 15.0726 5.8028 15.5018 6.11927 15.8182C6.43574 16.1347 6.86496 16.3125 7.31251 16.3125C7.46169 16.3125 7.60477 16.2532 7.71026 16.1477C7.81575 16.0423 7.87501 15.8992 7.87501 15.75V15.2753C7.87501 14.8455 7.95751 14.4203 8.11651 14.0213C8.34451 13.4513 8.81401 13.0238 9.35626 12.735C10.1887 12.2908 10.9193 11.6777 11.5013 10.935C11.8748 10.4595 12.4208 10.125 13.0253 10.125H13.3133"
                            stroke="#A8ABAE"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="text-2">Not helpful</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="comment-item">
              <div className="image-wrap">
                <Image
                  alt=""
                  src="/images/avatar/avatar-3.jpg"
                  width={120}
                  height={120}
                />
              </div>
              <div className="content">
                <div className="user">
                  <div className="author">
                    <h6 className="name">Viola Lucas</h6>
                    <div className="time">August 13, 2023</div>
                  </div>
                  <div className="ratings">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                </div>
                <div className="comment">
                  <p>
                    It's really easy to use and it is exactly what I am looking
                    for. A lot of good looking templates &amp; it's highly
                    customizable. Live support is helpful, solved my issue in no
                    time.
                  </p>
                  <div className="action action-button-list">
                    <div className="action-item action-button btn-action">
                      <div className="icons">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.375 6.75H10.6875M4.66949 14.0625C4.66124 14.025 4.64849 13.9875 4.63049 13.9515C4.18724 13.0515 3.93749 12.039 3.93749 10.9687C3.93587 9.89238 4.19282 8.83136 4.68674 7.875M4.66949 14.0625C4.72649 14.3362 4.53224 14.625 4.23824 14.625H3.55724C2.89049 14.625 2.27249 14.2365 2.07824 13.599C1.82399 12.7665 1.68749 11.8837 1.68749 10.9687C1.68749 9.804 1.90874 8.69175 2.31074 7.67025C2.54024 7.08975 3.12524 6.75 3.74999 6.75H4.53974C4.89374 6.75 5.09849 7.167 4.91474 7.47C4.83434 7.60234 4.7578 7.73742 4.68674 7.875M4.66949 14.0625H5.63999C6.0027 14.0623 6.36307 14.1205 6.70724 14.235L9.04274 15.015C9.38691 15.1295 9.74728 15.1877 10.11 15.1875H13.122C13.5855 15.1875 14.0347 15.0022 14.3257 14.6407C15.6143 13.0434 16.3156 11.0523 16.3125 9C16.3125 8.6745 16.2952 8.35275 16.2615 8.03625C16.1797 7.2705 15.4905 6.75 14.721 6.75H12.3765C11.913 6.75 11.6332 6.207 11.8327 5.7885C12.191 5.03444 12.3763 4.20985 12.375 3.375C12.375 2.92745 12.1972 2.49823 11.8807 2.18176C11.5643 1.86529 11.135 1.6875 10.6875 1.6875C10.5383 1.6875 10.3952 1.74676 10.2897 1.85225C10.1843 1.95774 10.125 2.10082 10.125 2.25V2.72475C10.125 3.1545 10.0425 3.57975 9.88349 3.97875C9.65549 4.54875 9.18599 4.97625 8.64374 5.265C7.81128 5.7092 7.0807 6.32228 6.49874 7.065C6.12524 7.5405 5.57924 7.875 4.97474 7.875H4.68674"
                            stroke="#A8ABAE"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="text-2">Useful</div>
                    </div>
                    <div className="action-item action-button btn-action">
                      <div className="icons">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.62501 11.25H7.31251M13.3305 3.9375C13.3388 3.975 13.3515 4.0125 13.3695 4.0485C13.8128 4.9485 14.0625 5.961 14.0625 7.03125C14.0641 8.10762 13.8072 9.16864 13.3133 10.125M13.3305 3.9375C13.2735 3.66375 13.4678 3.375 13.7618 3.375H14.4428C15.1095 3.375 15.7275 3.7635 15.9218 4.401C16.176 5.2335 16.3125 6.11625 16.3125 7.03125C16.3125 8.196 16.0913 9.30825 15.6893 10.3298C15.4598 10.9103 14.8748 11.25 14.25 11.25H13.4603C13.1063 11.25 12.9015 10.833 13.0853 10.53C13.1657 10.3977 13.2422 10.2626 13.3133 10.125M13.3305 3.9375H12.36C11.9973 3.93772 11.6369 3.87948 11.2928 3.765L8.95726 2.985C8.61309 2.87053 8.25272 2.81228 7.89001 2.8125H4.87801C4.41451 2.8125 3.96526 2.99775 3.67426 3.35925C2.38572 4.95658 1.68441 6.94774 1.68751 9C1.68751 9.3255 1.70476 9.64725 1.73851 9.96375C1.82026 10.7295 2.50951 11.25 3.27901 11.25H5.62351C6.08701 11.25 6.36676 11.793 6.16726 12.2115C5.80897 12.9656 5.6237 13.7902 5.62501 14.625C5.62501 15.0726 5.8028 15.5018 6.11927 15.8182C6.43574 16.1347 6.86496 16.3125 7.31251 16.3125C7.46169 16.3125 7.60477 16.2532 7.71026 16.1477C7.81575 16.0423 7.87501 15.8992 7.87501 15.75V15.2753C7.87501 14.8455 7.95751 14.4203 8.11651 14.0213C8.34451 13.4513 8.81401 13.0238 9.35626 12.735C10.1887 12.2908 10.9193 11.6777 11.5013 10.935C11.8748 10.4595 12.4208 10.125 13.0253 10.125H13.3133"
                            stroke="#A8ABAE"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="text-2">Not helpful</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <a href="#" className="tf-btn style-border fw-7 pd-1">
          <span>
            View all reivew <i className="icon-arrow-right-2 fw-4" />
          </span>
        </a>
      </div>
      <div className="box-send">
        <div className="heading-box">
          <h4 className="title fw-7">Add Review</h4>
          <p>Your email address will not be published</p>
        </div>
        <form className="form-add-review" onSubmit={(e) => e.preventDefault()}>
          <div className="cols">
            <fieldset className="name">
              <label className="text-1 fw-6" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                className="tf-input style-2"
                placeholder="Your Name*"
                tabIndex={2}
                aria-required="true"
                id="name"
                name="name"
                required
              />
            </fieldset>
            <fieldset className="email">
              <label className="text-1 fw-6" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="tf-input style-2"
                placeholder="Your Email*"
                tabIndex={2}
                aria-required="true"
                id="email1"
                name="email"
                required
              />
            </fieldset>
          </div>
          <div className="checkbox-item style-1">
            <label>
              <span className="text-1 fw-4">
                Save your name, email for the next time review
              </span>
              <input type="checkbox" />
              <span className="btn-checkbox" />
            </label>
          </div>
          <fieldset className="message">
            <label className="text-1 fw-6" htmlFor="message">
              Review
            </label>
            <textarea
              id="message"
              className="tf-input"
              name="message"
              rows={4}
              placeholder="Your review"
              tabIndex={4}
              aria-required="true"
              required
              defaultValue={""}
            />
          </fieldset>
          <button className="tf-btn bg-color-primary pd-24 fw-7" type="submit">
            Post Comment <i className="icon-arrow-right-2 fw-4" />
          </button>
        </form>
      </div>
    </>
  );
}
