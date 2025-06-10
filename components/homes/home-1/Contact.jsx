"use client";
import React from "react";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function Contact() {
  return (
    <section className="section-contact style-1 tf-spacing-7">
      <div className="tf-container">
        <div className="row">
          <div className="wrap">
            <div className="left">
              <div className="box-contact style-1">
                <div className="heading-section mb-54 gap-33">
                  <div className="title text-white text-display-4 split-text effect-right">
                    <SplitTextAnimation text="Get In Touch" />
                  </div>
                  <p className="text-1 text-color1 wow animate__fadeInUp animate__animated">
                    Estimate your payment with our easy-to-use loan calculator.
                    Then get pre-qualified to buy by a local lender.
                  </p>
                </div>
                <ul className="list-info">
                  <li className="wow animate__fadeInUp animate__animated">
                    <div className="icon">
                      <svg
                        width={50}
                        height={51}
                        viewBox="0 0 50 51"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M42.5742 38.5965L42.7 38.5462V38.4108V24.2559C42.7 23.6763 43.1704 23.2059 43.75 23.2059C44.3295 23.2059 44.8 23.6763 44.8 24.2559V39.2558C44.8 39.6859 44.5378 40.0708 44.1422 40.233C44.142 40.2331 44.1418 40.2332 44.1417 40.2333L31.6657 45.2226L31.7375 45.4021V45.4083L31.6563 45.2256L31.6371 45.2341C31.3894 45.3331 31.1131 45.3331 30.8654 45.2341L30.8462 45.2256L30.8074 45.2083H30.801L18.8243 40.4176L18.75 40.3879L18.6757 40.4176L6.64074 45.2301L6.64072 45.2301C6.5143 45.2807 6.382 45.3058 6.25 45.3058C6.04198 45.3058 5.8387 45.245 5.6623 45.1253C5.37413 44.9297 5.2 44.6039 5.2 44.2558V21.7559C5.2 21.3257 5.46218 20.9414 5.85936 20.7815C5.85944 20.7815 5.85953 20.7814 5.85962 20.7814L18.3281 15.7925L18.3282 15.7931L18.3507 15.7856L18.3509 15.786L18.3623 15.7813C18.6118 15.6807 18.8907 15.6807 19.1402 15.7813L19.1401 15.7814L19.1448 15.7831L19.1648 15.7906L19.1987 15.8034H19.1989L26.6456 18.784C27.1861 19.0007 27.4479 19.612 27.2319 20.1487L27.2318 20.149C27.0154 20.6889 26.3971 20.949 25.8673 20.7354L25.8668 20.7352L20.0743 18.4177L19.8 18.3079V18.6034V38.4083V38.5437L19.9257 38.594L29.9257 42.594L30.2 42.7037V42.4083V29.2558C30.2 28.6763 30.6704 28.2058 31.25 28.2058C31.8295 28.2058 32.3 28.6763 32.3 29.2558V42.4108V42.7062L32.5742 42.5965L42.5742 38.5965ZM18.265 15.6096L18.265 15.6096L18.265 15.6034L18.2775 15.6408L18.265 15.6096ZM17.5743 38.594L17.7 38.5437V38.4083V18.6009V18.3055L17.4257 18.4152L7.42572 22.4152L7.3 22.4654V22.6009V42.4083V42.7037L7.57428 42.594L17.5743 38.594Z"
                          fill="white"
                          fillOpacity="0.3"
                          stroke="#1F2124"
                          strokeWidth="0.4"
                        />
                        <path
                          d="M32.7 14.2559C32.7 12.2988 34.293 10.7059 36.25 10.7059C38.207 10.7059 39.8 12.2988 39.8 14.2559C39.8 16.2129 38.207 17.8059 36.25 17.8059C34.293 17.8059 32.7 16.2129 32.7 14.2559ZM34.8 14.2559C34.8 15.0563 35.4495 15.7059 36.25 15.7059C37.0505 15.7059 37.7 15.0563 37.7 14.2559C37.7 13.4554 37.0505 12.8059 36.25 12.8059C35.4495 12.8059 34.8 13.4554 34.8 14.2559Z"
                          fill="white"
                          fillOpacity="0.3"
                          stroke="#1F2124"
                          strokeWidth="0.4"
                        />
                        <path
                          d="M36.0971 24.9773L36.25 25.1586L36.4029 24.9773C37.7722 23.3535 39.3407 21.2933 40.5681 19.3378C41.1818 18.3602 41.7126 17.4049 42.0906 16.5409C42.4666 15.6815 42.7 14.8934 42.7 14.2558C42.7 10.7004 39.8054 7.80586 36.25 7.80586C32.6945 7.80586 29.8 10.7004 29.8 14.2558C29.8 14.894 30.0334 15.6824 30.4094 16.542C30.7874 17.4061 31.3182 18.3613 31.9319 19.3387C33.1593 21.294 34.7278 23.3535 36.0971 24.9773ZM27.7 14.2558C27.7 9.54131 31.5355 5.70586 36.25 5.70586C40.9645 5.70586 44.8 9.54131 44.8 14.2558C44.8 15.333 44.3769 16.6391 43.7105 18.0213C43.0462 19.399 42.1501 20.8323 41.2259 22.158C39.3782 24.8085 37.43 27.0123 37.0314 27.457C36.8312 27.6781 36.5474 27.8058 36.25 27.8058C35.9526 27.8058 35.6687 27.6781 35.4685 27.4569C35.0697 27.012 33.1216 24.8083 31.2741 22.158C30.3499 20.8323 29.4538 19.399 28.7895 18.0213C28.1231 16.6391 27.7 15.333 27.7 14.2558Z"
                          fill="white"
                          fillOpacity="0.3"
                          stroke="#1F2124"
                          strokeWidth="0.4"
                        />
                      </svg>
                    </div>
                    <div className="content">
                      <div className="sub text-color2">Office address</div>
                      <p className="text-1 text-color1">
                        102 Ingraham St, Brooklyn, NY 11237
                      </p>
                    </div>
                  </li>
                  <li className="wow animate__fadeInUp animate__animated">
                    <div className="icon">
                      <svg
                        width={50}
                        height={50}
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M26.4648 13.2881C26.4648 14.0971 27.1207 14.7529 27.9297 14.7529C28.7387 14.7529 29.3945 14.0971 29.3945 13.2881C29.3945 12.4791 28.7387 11.8232 27.9297 11.8232C27.1207 11.8232 26.4648 12.4791 26.4648 13.2881Z"
                          fill="white"
                          fillOpacity="0.3"
                        />
                        <path
                          d="M32.3242 13.2881C32.3242 14.0971 32.9801 14.7529 33.7891 14.7529C34.598 14.7529 35.2539 14.0971 35.2539 13.2881C35.2539 12.4791 34.598 11.8232 33.7891 11.8232C32.9801 11.8232 32.3242 12.4791 32.3242 13.2881Z"
                          fill="white"
                          fillOpacity="0.3"
                        />
                        <path
                          d="M38.1836 13.2881C38.1836 14.0971 38.8395 14.7529 39.6484 14.7529C40.4574 14.7529 41.1133 14.0971 41.1133 13.2881C41.1133 12.4791 40.4574 11.8232 39.6484 11.8232C38.8395 11.8232 38.1836 12.4791 38.1836 13.2881Z"
                          fill="white"
                          fillOpacity="0.3"
                        />
                        <path
                          d="M22.6771 36.7256L27.0716 33.7959L35.8398 36.7256V42.585C35.8398 44.2029 34.549 45.5146 32.931 45.5146C16.7508 45.5146 1.46484 30.3264 1.46484 14.1462C1.46484 12.5282 2.77656 11.2373 4.39453 11.2373H10.2539L13.1836 20.0056L10.2539 24.4001C12.1247 29.0771 18 34.8548 22.6771 36.7256Z"
                          stroke="white"
                          strokeOpacity="0.3"
                          strokeWidth="1.7"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.1406 13.2881C19.1406 18.1422 23.0756 22.0771 27.9297 22.0771V27.9365L33.7891 22.0771H39.6484C44.5025 22.0771 48.5352 18.1422 48.5352 13.2881C48.5352 8.43398 44.5025 4.49902 39.6484 4.49902H27.9297C23.0756 4.49902 19.1406 8.43398 19.1406 13.2881Z"
                          stroke="white"
                          strokeOpacity="0.3"
                          strokeWidth="1.7"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="content">
                      <div className="sub text-color2">Office address</div>
                      <div className="phone">(603) 555-0123</div>
                    </div>
                  </li>
                  <li className="wow animate__fadeInUp animate__animated">
                    <div className="icon">
                      <svg
                        width={50}
                        height={51}
                        viewBox="0 0 50 51"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2379_12865)">
                          <path
                            d="M36.6559 18.3339L36.6559 18.3339L36.6609 18.3391C36.8315 18.5111 37.0549 18.5967 37.2788 18.5967C37.5021 18.5967 37.7258 18.5114 37.8976 18.3409C38.2409 18.0003 38.241 17.4424 37.8996 17.0983C37.5586 16.7547 37.0037 16.7524 36.66 17.0933L36.6559 18.3339ZM36.6559 18.3339L36.6551 18.333M36.6559 18.3339L36.6551 18.333M36.6551 18.333C36.3141 17.9893 36.3163 17.4343 36.66 17.0933L36.6551 18.333Z"
                            fill="#1F2124"
                            stroke="white"
                            strokeWidth="0.2"
                          />
                          <path
                            d="M46.462 28.3825H46.7034L46.5327 28.2118L39.3323 21.0115C38.99 20.6691 38.99 20.1141 39.3323 19.7718C39.6747 19.4296 40.2298 19.4296 40.572 19.7718L49.6422 28.8419C49.8065 29.0063 49.8989 29.2294 49.899 29.4618C49.899 29.6943 49.8066 29.9172 49.6423 30.0816L34.0738 45.6502C33.9094 45.8145 33.6864 45.9069 33.454 45.9069C33.2215 45.9069 32.9985 45.8145 32.8342 45.6502L9.34111 22.1572C9.3411 22.1572 9.3411 22.1572 9.3411 22.1572C8.99879 21.8148 8.99881 21.2598 9.3411 20.9175L24.9094 5.34884C25.2517 5.00664 25.8068 5.00664 26.1491 5.34884C26.1491 5.34884 26.1491 5.34884 26.1491 5.34884L34.9704 14.17C35.3127 14.5124 35.3127 15.0675 34.9704 15.4098C34.628 15.752 34.0729 15.7519 33.7306 15.4098L26.7792 8.45839L26.6085 8.28768V8.5291V25.6994C26.6085 27.179 27.8119 28.3825 29.2916 28.3825H46.462ZM24.8555 8.12373V7.88231L24.6848 8.05302L12.2477 20.4901L12.077 20.6608H12.3184H24.7555H24.8555V20.5608V8.12373ZM32.4067 42.7434L32.5774 42.9141V42.6727V30.2356V30.1356H32.4774H29.2918C26.8457 30.1356 24.8555 28.1455 24.8555 25.6994V22.5139V22.4139H24.7555H12.3184H12.077L12.2477 22.5846L32.4067 42.7434ZM34.3304 42.6728V42.9142L34.5012 42.7435L46.9382 30.3064L47.1089 30.1356H46.8675H34.4304H34.3304V30.2356V42.6728Z"
                            fill="#1F2124"
                            stroke="white"
                            strokeWidth="0.2"
                          />
                          <path
                            d="M0.976562 25.4046H6.70225C7.18637 25.4046 7.57881 25.7971 7.57881 26.2812C7.57881 26.7653 7.18637 27.1577 6.70225 27.1577H0.976562C0.492442 27.1577 0.1 26.7652 0.1 26.2812C0.1 25.7971 0.492442 25.4046 0.976562 25.4046Z"
                            fill="#1F2124"
                            stroke="white"
                            strokeWidth="0.2"
                          />
                          <path
                            d="M9.59766 25.4046H9.6123C10.0964 25.4046 10.4889 25.7971 10.4889 26.2812C10.4889 26.7652 10.0964 27.1577 9.6123 27.1577H9.59766C9.11354 27.1577 8.72109 26.7652 8.72109 26.2812C8.72109 25.7971 9.11354 25.4046 9.59766 25.4046Z"
                            fill="#1F2124"
                            stroke="white"
                            strokeWidth="0.2"
                          />
                          <path
                            d="M0.976562 15.151H4.10186C4.58598 15.151 4.97842 15.5435 4.97842 16.0275C4.97842 16.5116 4.58598 16.9041 4.10186 16.9041H0.976562C0.492442 16.9041 0.1 16.5116 0.1 16.0275C0.1 15.5435 0.492442 15.151 0.976562 15.151Z"
                            fill="#1F2124"
                            stroke="white"
                            strokeWidth="0.2"
                          />
                          <path
                            d="M7.29297 15.151H10.9871C11.4712 15.151 11.8637 15.5435 11.8637 16.0275C11.8637 16.5116 11.4712 16.9041 10.9871 16.9041H7.29297C6.80885 16.9041 6.41641 16.5116 6.41641 16.0275C6.41641 15.5435 6.80885 15.151 7.29297 15.151Z"
                            fill="#1F2124"
                            stroke="white"
                            strokeWidth="0.2"
                          />
                          <path
                            d="M7.64453 30.7756H13.1132C13.5972 30.7756 13.9897 31.1681 13.9897 31.6522C13.9897 32.1362 13.5973 32.5287 13.1132 32.5287H7.64453C7.16041 32.5287 6.76797 32.1362 6.76797 31.6522C6.76797 31.1681 7.16041 30.7756 7.64453 30.7756Z"
                            fill="#1F2124"
                            stroke="white"
                            strokeWidth="0.2"
                          />
                          <path
                            d="M3.61328 37.0258H17.3827C17.8668 37.0258 18.2593 37.4183 18.2593 37.9023C18.2593 38.3864 17.8668 38.7789 17.3827 38.7789H3.61328C3.12916 38.7789 2.73672 38.3864 2.73672 37.9023C2.73672 37.4183 3.12916 37.0258 3.61328 37.0258Z"
                            fill="#1F2124"
                            stroke="white"
                            strokeWidth="0.2"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2379_12865">
                            <rect
                              width={50}
                              height={50}
                              fill="white"
                              transform="translate(0 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="content">
                      <div className="sub text-color2">Email us</div>
                      <a href="#">themesflat@gmail.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <form
                className="form-get-in-touch style-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <h2 className="text_white title-form fw-5 mb-0">
                  Request a call back
                </h2>
                <p className="text-1 text-color1 fw-3">
                  We'll get to know you to understand your selling goals,
                  explain the selling process so you know what to expect.
                </p>
                <div className="grid-2">
                  <fieldset>
                    <label
                      className="text-1 fw-6 mb-12 text_white"
                      htmlFor="name3"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your name"
                      name="name"
                      id="name3"
                      required
                    />
                  </fieldset>
                  <fieldset>
                    <label
                      className="text-1 fw-6 mb-12 text_white"
                      htmlFor="email3"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      name="Your email"
                      id="email3"
                      required
                    />
                  </fieldset>
                </div>
                <fieldset className="phone">
                  <label
                    className="text-1 fw-6 mb-12 text_white"
                    htmlFor="phone"
                  >
                    Phone number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your phone number"
                    name="phone"
                    id="phone"
                    required
                  />
                </fieldset>
                <fieldset>
                  <label
                    className="text-1 fw-6 mb-12 text_white"
                    htmlFor="message3"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    cols={30}
                    rows={10}
                    placeholder="Your message"
                    id="message3"
                    required
                    defaultValue={""}
                  />
                </fieldset>
                <div className="wrap-btn">
                  <a
                    href="#"
                    className="tf-btn bg-color-primary pd-26 btn-border rounded-cycle"
                  >
                    Contact our experts
                    <i className="icon-arrow-up-right" />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
