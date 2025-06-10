"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogArticles3, blogData2 } from "@/data/blogs";
export default function Blogs1() {
  return (
    <section className="section-blog-list">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-8">
            <div className="left">
              <div className="box-title">
                <h2>Blog list</h2>
                <div className="group-layout">
                  <a href="#" className="btn-layout grid active">
                    <svg
                      width={25}
                      height={25}
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.04883 6.40508C5.04883 5.6222 5.67272 5 6.41981 5C7.16686 5 7.7908 5.62221 7.7908 6.40508C7.7908 7.18801 7.16722 7.8101 6.41981 7.8101C5.67241 7.8101 5.04883 7.18801 5.04883 6.40508Z"
                        stroke="#8E8E93"
                      />
                      <path
                        d="M11.1045 6.40508C11.1045 5.62221 11.7284 5 12.4755 5C13.2229 5 13.8466 5.6222 13.8466 6.40508C13.8466 7.18789 13.2227 7.8101 12.4755 7.8101C11.7284 7.8101 11.1045 7.18794 11.1045 6.40508Z"
                        stroke="#8E8E93"
                      />
                      <path
                        d="M19.9998 6.40514C19.9998 7.18797 19.3757 7.81016 18.6288 7.81016C17.8818 7.81016 17.2578 7.18794 17.2578 6.40508C17.2578 5.62211 17.8813 5 18.6288 5C19.3763 5 19.9998 5.62215 19.9998 6.40514Z"
                        stroke="#8E8E93"
                      />
                      <path
                        d="M7.74249 12.5097C7.74249 13.2926 7.11849 13.9147 6.37133 13.9147C5.62411 13.9147 5 13.2926 5 12.5097C5 11.7267 5.62419 11.1044 6.37133 11.1044C7.11842 11.1044 7.74249 11.7266 7.74249 12.5097Z"
                        stroke="#8E8E93"
                      />
                      <path
                        d="M13.7976 12.5097C13.7976 13.2927 13.1736 13.9147 12.4266 13.9147C11.6795 13.9147 11.0557 13.2927 11.0557 12.5097C11.0557 11.7265 11.6793 11.1044 12.4266 11.1044C13.1741 11.1044 13.7976 11.7265 13.7976 12.5097Z"
                        stroke="#8E8E93"
                      />
                      <path
                        d="M19.9516 12.5097C19.9516 13.2927 19.328 13.9147 18.5807 13.9147C17.8329 13.9147 17.209 13.2925 17.209 12.5097C17.209 11.7268 17.8332 11.1044 18.5807 11.1044C19.3279 11.1044 19.9516 11.7265 19.9516 12.5097Z"
                        stroke="#8E8E93"
                      />
                      <path
                        d="M5.04297 18.5947C5.04297 17.8118 5.66709 17.1896 6.4143 17.1896C7.16137 17.1896 7.78523 17.8116 7.78523 18.5947C7.78523 19.3778 7.16139 19.9997 6.4143 19.9997C5.66714 19.9997 5.04297 19.3773 5.04297 18.5947Z"
                        stroke="#8E8E93"
                      />
                      <path
                        d="M11.0986 18.5947C11.0986 17.8118 11.7227 17.1896 12.47 17.1896C13.2169 17.1896 13.8409 17.8117 13.8409 18.5947C13.8409 19.3778 13.2169 19.9997 12.47 19.9997C11.7225 19.9997 11.0986 19.3774 11.0986 18.5947Z"
                        stroke="#8E8E93"
                      />
                      <path
                        d="M17.252 18.5947C17.252 17.8117 17.876 17.1896 18.6229 17.1896C19.3699 17.1896 19.9939 17.8117 19.9939 18.5947C19.9939 19.3778 19.3702 19.9997 18.6229 19.9997C17.876 19.9997 17.252 19.3774 17.252 18.5947Z"
                        stroke="#8E8E93"
                      />
                    </svg>
                  </a>
                  <a href="#" className="btn-layout list">
                    <svg
                      width={25}
                      height={25}
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.7016 18.3317H9.00246C8.5615 18.3317 8.2041 17.9743 8.2041 17.5333C8.2041 17.0923 8.5615 16.7349 9.00246 16.7349H19.7013C20.1423 16.7349 20.4997 17.0923 20.4997 17.5333C20.4997 17.9743 20.1426 18.3317 19.7016 18.3317Z"
                        fill="#8E8E93"
                      />
                      <path
                        d="M19.7016 13.3203H9.00246C8.5615 13.3203 8.2041 12.9629 8.2041 12.5219C8.2041 12.081 8.5615 11.7236 9.00246 11.7236H19.7013C20.1423 11.7236 20.4997 12.081 20.4997 12.5219C20.5 12.9629 20.1426 13.3203 19.7016 13.3203Z"
                        fill="#8E8E93"
                      />
                      <path
                        d="M19.7016 8.30919H9.00246C8.5615 8.30919 8.2041 7.95179 8.2041 7.51083C8.2041 7.06986 8.5615 6.71246 9.00246 6.71246H19.7013C20.1423 6.71246 20.4997 7.06986 20.4997 7.51083C20.4997 7.95179 20.1426 8.30919 19.7016 8.30919Z"
                        fill="#8E8E93"
                      />
                      <path
                        d="M5.5722 8.64465C6.16436 8.64465 6.6444 8.16461 6.6444 7.57245C6.6444 6.98029 6.16436 6.50024 5.5722 6.50024C4.98004 6.50024 4.5 6.98029 4.5 7.57245C4.5 8.16461 4.98004 8.64465 5.5722 8.64465Z"
                        fill="#8E8E93"
                      />
                      <path
                        d="M5.5722 13.5942C6.16436 13.5942 6.6444 13.1141 6.6444 12.522C6.6444 11.9298 6.16436 11.4498 5.5722 11.4498C4.98004 11.4498 4.5 11.9298 4.5 12.522C4.5 13.1141 4.98004 13.5942 5.5722 13.5942Z"
                        fill="#8E8E93"
                      />
                      <path
                        d="M5.5722 18.5438C6.16436 18.5438 6.6444 18.0637 6.6444 17.4716C6.6444 16.8794 6.16436 16.3994 5.5722 16.3994C4.98004 16.3994 4.5 16.8794 4.5 17.4716C4.5 18.0637 4.98004 18.5438 5.5722 18.5438Z"
                        fill="#8E8E93"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="wrap-blog-list">
                {blogArticles3.map((post, i) => (
                  <div
                    key={i}
                    className="blog-article-item style-row hover-img"
                  >
                    <div className="article-thumb image-wrap">
                      <Image
                        className="lazyload"
                        alt=""
                        width={1260}
                        height={710}
                        src={post.imageSrc}
                      />
                    </div>
                    <div className="article-content">
                      <div className="time">
                        <div className="icons">
                          <svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_2450_13848)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.03497 3.8631C6.08651 3.83315 6.12412 3.78402 6.13959 3.72645C6.15505 3.66887 6.14712 3.60751 6.11752 3.55576L5.70832 2.8471C5.67837 2.79555 5.62923 2.75795 5.57164 2.74253C5.51405 2.72711 5.45269 2.73512 5.40098 2.7648C5.34943 2.79475 5.31183 2.8439 5.29641 2.90149C5.28099 2.95908 5.289 3.02044 5.31869 3.07214L5.72788 3.78081C5.75788 3.83224 5.80698 3.86974 5.86449 3.88516C5.922 3.90057 5.98327 3.89264 6.03497 3.8631ZM12.6009 15.2355C12.6524 15.2055 12.69 15.1564 12.7055 15.0988C12.721 15.0412 12.713 14.9799 12.6834 14.9281L12.2742 14.2195C12.2443 14.1679 12.1951 14.1303 12.1376 14.1149C12.08 14.0995 12.0186 14.1075 11.9669 14.1372C11.9154 14.1672 11.8778 14.2163 11.8624 14.2739C11.847 14.3315 11.855 14.3928 11.8846 14.4445L12.2938 15.1532C12.3237 15.2047 12.3728 15.2422 12.4304 15.2576C12.4879 15.273 12.5492 15.2651 12.6009 15.2355ZM3.86377 6.0343C3.89339 5.98258 3.90136 5.92125 3.88595 5.86367C3.87053 5.8061 3.83298 5.75696 3.78148 5.72696L3.07282 5.31776C3.0211 5.28814 2.95976 5.28017 2.90219 5.29559C2.84462 5.311 2.79547 5.34856 2.76548 5.40006C2.73585 5.45178 2.72788 5.51311 2.7433 5.57069C2.75872 5.62826 2.79627 5.6774 2.84777 5.7074L3.55643 6.11659C3.60817 6.14615 3.66948 6.15408 3.72703 6.13867C3.78459 6.12326 3.83373 6.08575 3.86377 6.0343ZM15.2364 12.6C15.266 12.5482 15.274 12.4869 15.2586 12.4293C15.2432 12.3718 15.2056 12.3226 15.1541 12.2926L14.4454 11.8834C14.3937 11.8538 14.3324 11.8458 14.2748 11.8612C14.2172 11.8767 14.1681 11.9142 14.1381 11.9657C14.1084 12.0174 14.1004 12.0788 14.1158 12.1364C14.1312 12.194 14.1688 12.2431 14.2204 12.2731L14.9291 12.6823C14.9808 12.7119 15.0421 12.72 15.0997 12.7045C15.1573 12.6891 15.2064 12.6515 15.2364 12.6ZM3.06926 9.00001C3.06906 8.94038 3.04528 8.88326 3.00312 8.8411C2.96096 8.79894 2.90384 8.77517 2.84422 8.77496H2.02583C1.9662 8.77517 1.90908 8.79894 1.86692 8.8411C1.82476 8.88326 1.80098 8.94038 1.80078 9.00001C1.80078 9.12371 1.90213 9.22505 2.02583 9.22505H2.84422C2.90384 9.22485 2.96096 9.20108 3.00312 9.15892C3.04528 9.11676 3.06906 9.05963 3.06926 9.00001ZM16.2011 9.00001C16.2009 8.94043 16.1771 8.88334 16.135 8.84119C16.0929 8.79904 16.0359 8.77523 15.9763 8.77496H15.1579C15.0983 8.77517 15.0412 8.79894 14.999 8.8411C14.9568 8.88326 14.9331 8.94038 14.9329 9.00001C14.9329 9.12396 15.0342 9.22505 15.1579 9.22505H15.9763C16.0359 9.22479 16.0929 9.20098 16.135 9.15883C16.1771 9.11667 16.2009 9.05959 16.2011 9.00001ZM3.86403 11.966C3.83407 11.9144 3.78495 11.8768 3.72737 11.8614C3.66979 11.8459 3.60844 11.8538 3.55669 11.8834L2.84803 12.2926C2.79647 12.3226 2.75888 12.3717 2.74345 12.4293C2.72803 12.4869 2.73604 12.5483 2.76573 12.6C2.79568 12.6515 2.84482 12.6891 2.90242 12.7045C2.96001 12.72 3.02137 12.7119 3.07307 12.6823L3.78173 12.2731C3.83322 12.2431 3.87076 12.194 3.88618 12.1365C3.9016 12.0789 3.89364 12.0177 3.86403 11.966ZM15.2364 5.40006C15.2064 5.34851 15.1573 5.31091 15.0997 5.29544C15.0422 5.27998 14.9808 5.28791 14.9291 5.31751L14.2204 5.7267C14.1688 5.75665 14.1312 5.8058 14.1158 5.86339C14.1004 5.92098 14.1084 5.98234 14.1381 6.03404C14.168 6.0856 14.2172 6.12319 14.2748 6.13862C14.3324 6.15404 14.3937 6.14603 14.4454 6.11634L15.1541 5.70715C15.2056 5.6772 15.2431 5.6281 15.2585 5.57057C15.274 5.51304 15.266 5.45174 15.2364 5.40006ZM6.03522 14.1372C5.9835 14.1075 5.92217 14.0996 5.8646 14.115C5.80702 14.1304 5.75788 14.168 5.72788 14.2195L5.31869 14.9281C5.28907 14.9798 5.2811 15.0412 5.29651 15.0988C5.31193 15.1563 5.34948 15.2055 5.40098 15.2355C5.4527 15.2651 5.51404 15.2731 5.57161 15.2576C5.62918 15.2422 5.67833 15.2047 5.70832 15.1532L6.11752 14.4445C6.14707 14.3928 6.15501 14.3315 6.1396 14.2739C6.12418 14.2164 6.08667 14.1672 6.03522 14.1372ZM12.6009 2.76455C12.5492 2.73493 12.4878 2.72696 12.4303 2.74237C12.3727 2.75779 12.3235 2.79534 12.2935 2.84685L11.8843 3.55551C11.8547 3.60723 11.8468 3.66856 11.8622 3.72613C11.8776 3.78371 11.9151 3.83285 11.9666 3.86285C12.0183 3.89254 12.0797 3.90055 12.1373 3.88512C12.1949 3.8697 12.244 3.8321 12.274 3.78055L12.6832 3.07189C12.7129 3.02019 12.7209 2.95883 12.7055 2.90124C12.69 2.84364 12.6524 2.7945 12.6009 2.76455ZM9.00093 14.9317C8.94131 14.9319 8.88419 14.9557 8.84203 14.9978C8.79986 15.04 8.77609 15.0971 8.77589 15.1567V15.9751C8.77589 16.0988 8.87723 16.2002 9.00093 16.2002C9.06056 16.2 9.11768 16.1762 9.15984 16.134C9.202 16.0919 9.22578 16.0347 9.22598 15.9751V15.1567C9.22578 15.0971 9.202 15.04 9.15984 14.9978C9.11768 14.9557 9.06056 14.9319 9.00093 14.9317ZM9.00093 1.80011C8.94131 1.80031 8.88419 1.82409 8.84203 1.86625C8.79986 1.90841 8.77609 1.96553 8.77589 2.02515V2.84354C8.77589 2.96724 8.87723 3.06859 9.00093 3.06859C9.06056 3.06839 9.11768 3.04461 9.15984 3.00245C9.202 2.96029 9.22578 2.90317 9.22598 2.84354V2.0249C9.22578 1.9653 9.20199 1.9082 9.15983 1.86608C9.11766 1.82396 9.06053 1.80024 9.00093 1.80011ZM9.00093 3.4567C8.94137 3.45697 8.88433 3.48073 8.84219 3.52282C8.80005 3.56491 8.77622 3.62193 8.77589 3.68149V9.00001C8.77616 9.05961 8.79995 9.1167 8.8421 9.15884C8.88424 9.20099 8.94133 9.22479 9.00093 9.22505C9.06058 9.22492 9.11774 9.20117 9.15992 9.15899C9.20209 9.11682 9.22584 9.05965 9.22598 9.00001V3.68149C9.22571 3.62191 9.20191 3.56485 9.15975 3.52275C9.1176 3.48064 9.06051 3.4569 9.00093 3.4567Z"
                                fill="#5C5E61"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.0019 8.54993C9.06189 8.54851 9.12156 8.55909 9.17739 8.58106C9.23323 8.60304 9.28412 8.63595 9.32705 8.67787C9.36998 8.7198 9.40409 8.76988 9.42739 8.82519C9.45068 8.88049 9.46268 8.93989 9.46268 8.99989C9.46268 9.0599 9.45068 9.1193 9.42739 9.1746C9.40409 9.2299 9.36998 9.27999 9.32705 9.32191C9.28412 9.36384 9.23323 9.39675 9.17739 9.41872C9.12156 9.4407 9.06189 9.45128 9.0019 9.44986C8.88441 9.44706 8.77268 9.39843 8.69057 9.31435C8.60846 9.23027 8.5625 9.11741 8.5625 8.99989C8.5625 8.88237 8.60846 8.76952 8.69057 8.68544C8.77268 8.60136 8.88441 8.55272 9.0019 8.54993Z"
                                fill="#5C5E61"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.7417 9.00001C12.7414 8.94045 12.7177 8.8834 12.6756 8.84126C12.6335 8.79912 12.5765 8.7753 12.5169 8.77496H8.99848C8.93888 8.77523 8.88179 8.79903 8.83965 8.84117C8.7975 8.88332 8.7737 8.9404 8.77344 9.00001C8.77344 9.12396 8.87478 9.22505 8.99848 9.22505H12.5169C12.5765 9.22485 12.6336 9.20107 12.6757 9.1589C12.7178 9.11673 12.7416 9.05961 12.7417 9.00001Z"
                                fill="#5C5E61"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9 0C13.9705 0 18 4.02946 18 9C18 13.9705 13.9705 18 9 18C4.02946 18 0 13.9705 0 9C0 4.02946 4.02946 0 9 0ZM9 0.899924C13.4735 0.899924 17.1001 4.52654 17.1001 9C17.1001 13.4735 13.4735 17.1001 9 17.1001C4.52654 17.1001 0.899924 13.4735 0.899924 9C0.899924 4.52654 4.52654 0.899924 9 0.899924Z"
                                fill="#5C5E61"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_2450_13848">
                                <rect width={18} height={18} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <p className="fw-5">{post.date}</p>
                      </div>
                      <h4 className="title">
                        <Link href={`/blog-details/${post.id}`}>
                          {post.title}
                        </Link>
                      </h4>
                      <p className="description text-1">{post.description}</p>
                      <Link
                        href={`/blog-details/${post.id}`}
                        className="tf-btn-link"
                      >
                        <span> Read More </span>
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_2450_13860)">
                            <path
                              d="M10.0013 18.3334C14.6037 18.3334 18.3346 14.6024 18.3346 10C18.3346 5.39765 14.6037 1.66669 10.0013 1.66669C5.39893 1.66669 1.66797 5.39765 1.66797 10C1.66797 14.6024 5.39893 18.3334 10.0013 18.3334Z"
                              stroke="#F1913D"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M6.66797 10H13.3346"
                              stroke="#F1913D"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 13.3334L13.3333 10L10 6.66669"
                              stroke="#F1913D"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2450_13860">
                              <rect width={20} height={20} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <ul className="wg-pagination">
                <li className="arrow">
                  <a href="#">
                    <i className="icon-arrow-left" />
                  </a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li className="active">
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">...</a>
                </li>
                <li>
                  <a href="#">20</a>
                </li>
                <li className="arrow">
                  <a href="#">
                    <i className="icon-arrow-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tf-sidebar">
              <div className="sidebar-search sidebar-item">
                <h4 className="sidebar-title">Search Blog</h4>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="form-search"
                >
                  <fieldset>
                    <input
                      className=""
                      type="text"
                      placeholder="Search"
                      name="text"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <div className="button-submit">
                    <button className="" type="submit">
                      <i className="icon-MagnifyingGlass" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="sidebar-item sidebar-categories">
                <h4 className="sidebar-title">Categories</h4>
                <ul className="list-categories">
                  <li className="flex items-center justify-between">
                    <a href="#" className="text-1 lh-20 fw-5">
                      Market Updates
                    </a>
                    <div className="number">(50)</div>
                  </li>
                  <li className="flex items-center justify-between">
                    <a href="#" className="text-1 lh-20 fw-5">
                      Buying Tips
                    </a>
                    <div className="number">(69)</div>
                  </li>
                  <li className="flex items-center justify-between">
                    <a href="#" className="text-1 lh-20 fw-5">
                      Interior Inspiration
                    </a>
                    <div className="number">(69)</div>
                  </li>
                  <li className="flex items-center justify-between">
                    <a href="#" className="text-1 lh-20 fw-5">
                      Investment Insights
                    </a>
                    <div className="number">(25)</div>
                  </li>
                  <li className="flex items-center justify-between">
                    <a href="#" className="text-1 lh-20 fw-5">
                      Home Construction
                    </a>
                    <div className="number">(12)</div>
                  </li>
                  <li className="flex items-center justify-between">
                    <a href="#" className="text-1 lh-20 fw-5">
                      Legal Guidance
                    </a>
                    <div className="number">(12)</div>
                  </li>
                  <li className="flex items-center justify-between">
                    <a href="#" className="text-1 lh-20 fw-5">
                      Community Spotlight
                    </a>
                    <div className="number">(69)</div>
                  </li>
                </ul>
              </div>
              <div className="sidebar-item sidebar-featured pb-36">
                <h4 className="sidebar-title">Featured Listings</h4>
                <ul>
                  {blogData2.map((item) => (
                    <li key={item.id} className="box-listings hover-img">
                      <div className="image-wrap">
                        <Image
                          className="lazyload"
                          data-src={item.imageSrc}
                          alt=""
                          width={224}
                          height={148}
                          src={item.imageSrc}
                        />
                      </div>
                      <div className="content">
                        <div className="text-1 title fw-5">
                          <Link href={`/blog-details/${item.id}`}>
                            {item.title}
                          </Link>
                        </div>
                        <p>
                          <span className="icon">
                            <svg
                              width={16}
                              height={17}
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.5 2.5V4M11.5 2.5V4M2 13V5.5C2 5.10218 2.15804 4.72064 2.43934 4.43934C2.72064 4.15804 3.10218 4 3.5 4H12.5C12.8978 4 13.2794 4.15804 13.5607 4.43934C13.842 4.72064 14 5.10218 14 5.5V13M2 13C2 13.3978 2.15804 13.7794 2.43934 14.0607C2.72064 14.342 3.10218 14.5 3.5 14.5H12.5C12.8978 14.5 13.2794 14.342 13.5607 14.0607C13.842 13.7794 14 13.3978 14 13M2 13V8C2 7.60218 2.15804 7.22064 2.43934 6.93934C2.72064 6.65804 3.10218 6.5 3.5 6.5H12.5C12.8978 6.5 13.2794 6.65804 13.5607 6.93934C13.842 7.22064 14 7.60218 14 8V13"
                                stroke="#A8ABAE"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>{" "}
                          </span>
                          {item.date}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sidebar-newslatter sidebar-item">
                <h4 className="sidebar-title">Join Our Newsletter</h4>
                <p>
                  Signup to be the first to hear about exclusive deals, special
                  offers and upcoming collections
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="form-search"
                >
                  <fieldset>
                    <input
                      className=""
                      type="text"
                      placeholder="Search"
                      name="text"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <div className="button-submit">
                    <button className="" type="submit">
                      <i className="icon-send-message" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="sidebar-item sidebar-tags">
                <h4 className="sidebar-title mb-18">Popular Tags</h4>
                <ul className="tags-list">
                  <li>
                    <a href="#" className="tags-item">
                      Property
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tags-item">
                      Office
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tags-item">
                      Finance
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tags-item">
                      Legal
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tags-item">
                      Market
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tags-item">
                      Invest
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tags-item">
                      Renovate
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sidebar-ads">
                <div className="image-wrap">
                  <Image
                    className="lazyload"
                    data-src="/images/blog/ads.jpg"
                    alt=""
                    width={400}
                    height={470}
                    src="/images/blog/ads.jpg"
                  />
                </div>
                <div className="logo relative z-5">
                  <Image
                    alt=""
                    width={272}
                    height={85}
                    src="/images/logo/logo-2@2x.png"
                  />
                </div>
                <div className="box-ads relative z-5">
                  <div className="content">
                    <h4 className="title">
                      <a href="#">
                        We can help you find a local real estate agent
                      </a>
                    </h4>
                    <div className="text-addres">
                      <p>
                        Connect with a trusted agent who knows the market inside
                        out - whether you’re buying or selling.
                      </p>
                    </div>
                  </div>
                  <a href="#" className="tf-btn fw-6 bg-color-primary w-full">
                    Connect with an agent
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
