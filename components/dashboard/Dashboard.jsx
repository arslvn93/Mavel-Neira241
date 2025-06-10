"use client";
import React from "react";
import LineChart from "./Chart";
import Link from "next/link";
import Image from "next/image";
import { properties5 } from "@/data/properties";
export default function Dashboard() {
  return (
    <div className="main-content w-100">
      <div className="main-content-inner">
        <div className="button-show-hide show-mb">
          <span className="body-1">Show Dashboard</span>
        </div>
        <div className="flat-counter-v2 tf-counter">
          <div className="counter-box">
            <div className="box-icon">
              <span className="icon">
                <svg
                  width={36}
                  height={36}
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5 3H9C8.20435 3 7.44129 3.31607 6.87868 3.87868C6.31607 4.44129 6 5.20435 6 6V30C6 30.7956 6.31607 31.5587 6.87868 32.1213C7.44129 32.6839 8.20435 33 9 33H27C27.7956 33 28.5587 32.6839 29.1213 32.1213C29.6839 31.5587 30 30.7956 30 30V10.5L22.5 3Z"
                    stroke="#F1913D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 3V9C21 9.79565 21.3161 10.5587 21.8787 11.1213C22.4413 11.6839 23.2044 12 24 12H30"
                    stroke="#F1913D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 19.5H15"
                    stroke="#F1913D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 19.5H24"
                    stroke="#F1913D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 25.5H15"
                    stroke="#F1913D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 25.5H24"
                    stroke="#F1913D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="content-box">
              <div className="title-count text-variant-1">Your listing</div>
              <div className="box-count d-flex align-items-end">
                <div className="number">32</div>
                <span className="text">/50 remaining</span>
              </div>
            </div>
          </div>
          <div className="counter-box">
            <div className="box-icon">
              <span className="icon">
                <svg
                  width={36}
                  height={36}
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5061 32.991C15.4409 33.0945 12.4177 32.2559 9.84374 30.5882C7.26982 28.9206 5.26894 26.504 4.11073 23.6642C2.95253 20.8243 2.69265 17.6977 3.36614 14.7056C4.03962 11.7135 5.61409 8.9998 7.87737 6.9301C10.1407 4.86039 12.984 3.5342 16.0242 3.13022C19.0644 2.72624 22.1554 3.2639 24.8807 4.67074C27.6059 6.07757 29.8344 8.28598 31.2659 10.9984C32.6974 13.7107 33.263 16.7967 32.8866 19.8405"
                    stroke="#F1913D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 9V18L21 19.5"
                    stroke="#F1913D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 27L27 33L33 27"
                    stroke="#F1913D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M27 21V33"
                    stroke="#F1913D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="content-box">
              <div className="title-count text-variant-1">Pending</div>
              <div className="box-count d-flex align-items-end">
                <div className="number">02</div>
              </div>
            </div>
          </div>
          <div className="counter-box">
            <div className="box-icon">
              <span className="icon">
                <svg
                  width={36}
                  height={36}
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 33H27C27.7956 33 28.5587 32.6839 29.1213 32.1213C29.6839 31.5587 30 30.7956 30 30V10.5L22.5 3H9C8.20435 3 7.44129 3.31607 6.87868 3.87868C6.31607 4.44129 6 5.20435 6 6V9"
                    stroke="#F1913D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 3V9C21 9.79565 21.3161 10.5587 21.8787 11.1213C22.4413 11.6839 23.2044 12 24 12H30"
                    stroke="#F1913D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.4348 16.05C14.9224 15.5384 14.2692 15.191 13.5586 15.0521C12.848 14.9132 12.1121 14.989 11.4448 15.27C11.0098 15.45 10.6048 15.72 10.2748 16.065L9.74976 16.575L9.22476 16.065C8.71531 15.5539 8.0656 15.2055 7.35797 15.064C6.65033 14.9225 5.9166 14.9942 5.24976 15.27C4.79976 15.45 4.40976 15.72 4.06476 16.065C2.63976 17.475 2.56476 19.86 4.36476 21.675L9.74976 27L15.1498 21.675C16.9498 19.86 16.8598 17.475 15.4348 16.065V16.05Z"
                    stroke="#F1913D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="content-box">
              <div className="title-count text-variant-1">Favorites</div>
              <div className="d-flex align-items-end">
                <div className="number">06</div>
              </div>
            </div>
          </div>
          <div className="counter-box">
            <div className="box-icon">
              <span className="icon">
                <svg
                  width={36}
                  height={36}
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.5 22.5C31.5 23.2956 31.1839 24.0587 30.6213 24.6213C30.0587 25.1839 29.2956 25.5 28.5 25.5H10.5L4.5 31.5V7.5C4.5 6.70435 4.81607 5.94129 5.37868 5.37868C5.94129 4.81607 6.70435 4.5 7.5 4.5H28.5C29.2956 4.5 30.0587 4.81607 30.6213 5.37868C31.1839 5.94129 31.5 6.70435 31.5 7.5V22.5Z"
                    stroke="#F1913D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 18C12.7956 18 13.5587 17.6839 14.1213 17.1213C14.6839 16.5587 15 15.7956 15 15V12H12"
                    stroke="#F1913D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 18C21.7956 18 22.5587 17.6839 23.1213 17.1213C23.6839 16.5587 24 15.7956 24 15V12H21"
                    stroke="#F1913D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="content-box">
              <div className="title-count text-variant-1">Reviews</div>
              <div className="d-flex align-items-end">
                <div className="number">1.483</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-9">
            <div className="widget-box-2 wd-listing mb-24">
              <h3 className="title">My Favorites</h3>
              <div className="wrap-table">
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>Listing</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {properties5.map((listing) => (
                        <tr key={listing.id} className="file-delete">
                          <td>
                            <div className="listing-box">
                              <div className="images">
                                <Image
                                  alt="images"
                                  width={615}
                                  height={405}
                                  src={listing.imageSrc}
                                />
                              </div>
                              <div className="content">
                                <div className="title">
                                  <Link
                                    href={`/property-detail-v1/${listing.id}`}
                                    className="link"
                                  >
                                    {listing.title}
                                  </Link>
                                </div>
                                <div className="text-date">
                                  Posting date: {listing.postingDate}
                                </div>
                                <div className="text-btn text-color-primary">
                                  {listing.price.toLocaleString()}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span>{listing.expiryDate}</span>
                          </td>
                          <td>
                            <ul className="list-action">
                              <li>
                                <a className="item">
                                  <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M11.2413 2.9915L12.366 1.86616C12.6005 1.63171 12.9184 1.5 13.25 1.5C13.5816 1.5 13.8995 1.63171 14.134 1.86616C14.3685 2.10062 14.5002 2.4186 14.5002 2.75016C14.5002 3.08173 14.3685 3.39971 14.134 3.63416L4.55467 13.2135C4.20222 13.5657 3.76758 13.8246 3.29 13.9668L1.5 14.5002L2.03333 12.7102C2.17552 12.2326 2.43442 11.7979 2.78667 11.4455L11.242 2.9915H11.2413ZM11.2413 2.9915L13 4.75016"
                                      stroke="#A3ABB0"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a className="item">
                                  <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12.2427 12.2427C13.3679 11.1175 14.0001 9.59135 14.0001 8.00004C14.0001 6.40873 13.3679 4.8826 12.2427 3.75737C11.1175 2.63214 9.59135 2 8.00004 2C6.40873 2 4.8826 2.63214 3.75737 3.75737M12.2427 12.2427C11.1175 13.3679 9.59135 14.0001 8.00004 14.0001C6.40873 14.0001 4.8826 13.3679 3.75737 12.2427C2.63214 11.1175 2 9.59135 2 8.00004C2 6.40873 2.63214 4.8826 3.75737 3.75737M12.2427 12.2427L3.75737 3.75737"
                                      stroke="#A3ABB0"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  Sold
                                </a>
                              </li>
                              <li>
                                <a className="remove-file item">
                                  <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.82667 6.00035L9.596 12.0003M6.404 12.0003L6.17333 6.00035M12.8187 3.86035C13.0467 3.89501 13.2733 3.93168 13.5 3.97101M12.8187 3.86035L12.1067 13.1157C12.0776 13.4925 11.9074 13.8445 11.63 14.1012C11.3527 14.3579 10.9886 14.5005 10.6107 14.5003H5.38933C5.0114 14.5005 4.64735 14.3579 4.36999 14.1012C4.09262 13.8445 3.92239 13.4925 3.89333 13.1157L3.18133 3.86035M12.8187 3.86035C12.0492 3.74403 11.2758 3.65574 10.5 3.59568M3.18133 3.86035C2.95333 3.89435 2.72667 3.93101 2.5 3.97035M3.18133 3.86035C3.95076 3.74403 4.72416 3.65575 5.5 3.59568M10.5 3.59568V2.98501C10.5 2.19835 9.89333 1.54235 9.10667 1.51768C8.36908 1.49411 7.63092 1.49411 6.89333 1.51768C6.10667 1.54235 5.5 2.19901 5.5 2.98501V3.59568M10.5 3.59568C8.83581 3.46707 7.16419 3.46707 5.5 3.59568"
                                      stroke="#A3ABB0"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
                    <a href="#">3</a>
                  </li>
                  <li className="arrow">
                    <a href="#">
                      <i className="icon-arrow-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="widget-box-2 wd-chart">
              <h5 className="title">Page Inside</h5>
              <div className="wd-filter-date">
                <div className="left">
                  <div className="dates active">Day</div>
                  <div className="dates">Week</div>
                  <div className="dates">Month</div>
                  <div className="dates">Year</div>
                </div>
                <div className="right">
                  <form>
                    <fieldset className="ip-group icon">
                      <input
                        type="text"
                        id="datepicker3"
                        className="ip-datepicker icon"
                        placeholder="From Date"
                      />
                    </fieldset>
                  </form>
                  <form>
                    <fieldset className="ip-group icon">
                      <input
                        type="text"
                        id="datepicker4"
                        className="ip-datepicker icon"
                        placeholder="To Date"
                      />
                    </fieldset>
                  </form>
                </div>
              </div>
              <div className="chart-box">
                <LineChart />
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="widget-box-2 mess-box mb-20">
              <h5 className="title">Messages</h5>
              <ul className="list-mess">
                <li className="mess-item">
                  <div className="user-box">
                    <div className="avatar">
                      <Image
                        alt="avt"
                        width={51}
                        height={51}
                        src="/images/avatar/avt-png9.png"
                      />
                    </div>
                    <div className="content">
                      <div className="name fw-6">Themesflat</div>
                      <span className="caption-2 text-variant-3">
                        3 day ago
                      </span>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean scelerisque vulputate tincidunt. Maecenas lorem
                    sapien
                  </p>
                </li>
                <li className="mess-item">
                  <div className="user-box">
                    <div className="avatar">
                      <Image
                        alt="avt"
                        width={51}
                        height={51}
                        src="/images/avatar/avt-png10.png"
                      />
                    </div>
                    <div className="content">
                      <div className="name fw-6">ThemeMu</div>
                      <span className="caption-2 text-variant-3">
                        3 day ago
                      </span>
                    </div>
                  </div>
                  <p>
                    Nullam lacinia lorem id sapien suscipit, vitae pellentesque
                    metus maximus. Duis eu mollis dolor. Proin faucibus eu
                    lectus a eleifend
                  </p>
                </li>
                <li className="mess-item">
                  <div className="user-box">
                    <div className="avatar">
                      <Image
                        alt="avt"
                        width={51}
                        height={51}
                        src="/images/avatar/avt-png11.png"
                      />
                    </div>
                    <div className="content">
                      <div className="name fw-6">Cameron Williamson</div>
                      <span className="caption-2 text-variant-3">
                        3 day ago
                      </span>
                    </div>
                  </div>
                  <p>In consequat lacus augue, a vestibulum est aliquam non</p>
                </li>
                <li className="mess-item">
                  <div className="user-box">
                    <div className="avatar">
                      <Image
                        alt="avt"
                        width={51}
                        height={51}
                        src="/images/avatar/avt-png12.png"
                      />
                    </div>
                    <div className="content">
                      <div className="name fw-6">Esther Howard</div>
                      <span className="caption-2 text-variant-3">
                        3 day ago
                      </span>
                    </div>
                  </div>
                  <p>
                    Cras congue in justo vel dapibus. Praesent euismod, lectus
                    et aliquam pretium
                  </p>
                </li>
              </ul>
            </div>
            <div className="widget-box-2 mess-box">
              <h5 className="title">Recent Reviews</h5>
              <ul className="list-mess">
                <li className="mess-item">
                  <div className="user-box">
                    <div className="avatar">
                      <Image
                        alt="avt"
                        width={51}
                        height={51}
                        src="/images/avatar/avt-png13.png"
                      />
                    </div>
                    <div className="content">
                      <div className="name fw-6">Bessie Cooper</div>
                      <span className="caption-2 text-variant-3">
                        3 day ago
                      </span>
                    </div>
                  </div>
                  <p>
                    Maecenas eu lorem et urna accumsan vestibulum vel vitae
                    magna.
                  </p>
                  <div className="ratings">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                </li>
                <li className="mess-item">
                  <div className="user-box">
                    <div className="avatar">
                      <Image
                        alt="avt"
                        width={68}
                        height={68}
                        src="/images/avatar/avt-png14.png"
                      />
                    </div>
                    <div className="content">
                      <div className="name fw-6">Annette Black</div>
                      <span className="caption-2 text-variant-3">
                        3 day ago
                      </span>
                    </div>
                  </div>
                  <p>
                    Nullam rhoncus dolor arcu, et commodo tellus semper vitae.
                    Aenean finibus tristique lectus, ac lobortis mauris
                    venenatis ac.
                  </p>
                  <div className="ratings">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                </li>
                <li className="mess-item">
                  <div className="user-box">
                    <div className="avatar">
                      <Image
                        alt="avt"
                        width={51}
                        height={51}
                        src="/images/avatar/avt-png15.png"
                      />
                    </div>
                    <div className="content">
                      <div className="name fw-6">Ralph Edwards</div>
                      <span className="caption-2 text-variant-3">
                        3 day ago
                      </span>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus viverra semper convallis. Integer vestibulum tempus
                    tincidunt.
                  </p>
                  <div className="ratings">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                </li>
                <li className="mess-item">
                  <div className="user-box">
                    <div className="avatar">
                      <Image
                        alt="avt"
                        width={51}
                        height={51}
                        src="/images/avatar/avt-png16.png"
                      />
                    </div>
                    <div className="content">
                      <div className="name fw-6">Jerome Bell</div>
                      <span className="caption-2 text-variant-3">
                        3 day ago
                      </span>
                    </div>
                  </div>
                  <p>
                    Fusce sit amet purus eget quam eleifend hendrerit nec a
                    erat. Sed turpis neque, iaculis blandit viverra ut, dapibus
                    eget nisi.
                  </p>
                  <div className="ratings">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                </li>
                <li className="mess-item">
                  <div className="user-box">
                    <div className="avatar">
                      <Image
                        alt="avt"
                        width={51}
                        height={51}
                        src="/images/avatar/avt-png17.png"
                      />
                    </div>
                    <div className="content">
                      <div className="name fw-6">Albert Flores</div>
                      <span className="caption-2 text-variant-3">
                        3 day ago
                      </span>
                    </div>
                  </div>
                  <p>
                    Donec bibendum nibh quis nisl luctus, at aliquet ipsum
                    bibendum. Fusce at dui tincidunt nulla semper venenatis at
                    et magna. Mauris turpis lorem, ultricies vel justo sed.
                  </p>
                  <div className="ratings">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-9">
            {/* .footer-dashboard */}
            <div className="footer-dashboard">
              <p>Copyright © {new Date().getFullYear()} Popty</p>
              <ul className="list">
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
            {/* .footer-dashboard */}
          </div>
        </div>
      </div>
      <div className="overlay-dashboard" />
    </div>
  );
}
