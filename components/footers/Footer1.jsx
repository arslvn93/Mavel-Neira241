"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { footerData } from "@/data/footerLinks";
export default function Footer1({ logo = "/images/logo/logo-2@2x.png" }) {
  useEffect(() => {
    const headings = document.querySelectorAll(".title-mobile");

    const toggleOpen = (event) => {
      const parent = event.target.closest(".footer-col-block");
      const content = parent.querySelector(".tf-collapse-content");

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
        content.style.height = "0px";
      } else {
        parent.classList.add("open");
        content.style.height = content.scrollHeight + 10 + "px";
      }
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []); // Empty dependency array means this will run only once on mount
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const email = e.target.email.value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        {
          email,
        }
      );

      if ([200, 201].includes(response.status)) {
        e.target.reset(); // Reset the form
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(false); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      console.error("Error:", error.response?.data || "An error occurred");
      setSuccess(false); // Set error state
      handleShowMessage();
      e.target.reset(); // Reset the form
    }
  };

  return (
    <footer id="footer">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="footer-top">
              <div className="footer-logo">
                <Link href={`/`}>
                  <Image
                    id="logo_footer"
                    alt="logo-footer"
                    src={logo}
                    width={272}
                    height={85}
                  />
                </Link>
              </div>
              <div className="wrap-contact-item">
                <div className="contact-item">
                  <div className="icons">
                    <i className="icon-phone-2" />
                  </div>
                  <div className="content">
                    <div className="title text-1">Call us</div>
                    <h6>
                      <a href="#"> (603) 555-0123</a>
                    </h6>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icons">
                    <i className="icon-letter-2" />
                  </div>
                  <div className="content">
                    <div className="title text-1">Nee live help</div>
                    <h6 className="fw-4">
                      <a href="#">proty-support@gmail.com</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-main">
            <div className="row">
              {footerData.map((column, index) => (
                <div className="col-lg-3 col-md-6" key={index}>
                  <div
                    className={`footer-menu-list footer-col-block ${
                      column.className || ""
                    }`}
                  >
                    <h5 className="title lh-30 title-desktop">
                      {column.title}
                    </h5>
                    <h5 className="title lh-30 title-mobile">{column.title}</h5>
                    <ul className="tf-collapse-content">
                      {column.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          {link.href.startsWith("/") ? (
                            <Link href={link.href}>{link.text}</Link>
                          ) : (
                            <a href={link.href}>{link.text}</a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div className="col-lg-3 col-md-6">
                <div className="footer-menu-list newsletter ">
                  <h5 className="title lh-30 mb-19">Newsletter</h5>
                  <div className="sib-form">
                    <div id="sib-form-container" className="sib-form-container">
                      <div
                        id="error-message"
                        className="sib-form-message-panel"
                      >
                        <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                          <svg
                            viewBox="0 0 512 512"
                            className="sib-icon sib-notification__icon"
                          >
                            <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
                          </svg>
                          <span className="sib-form-message-panel__inner-text">
                            Your subscription could not be saved. Please try
                            again.
                          </span>
                        </div>
                      </div>
                      <div
                        id="success-message"
                        className="sib-form-message-panel"
                      >
                        <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                          <svg
                            viewBox="0 0 512 512"
                            className="sib-icon sib-notification__icon"
                          >
                            <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
                          </svg>
                          <span className="sib-form-message-panel__inner-text">
                            Your subscription has been successful.
                          </span>
                        </div>
                      </div>
                      <div
                        id="sib-container"
                        className="sib-container--large sib-container--vertical"
                      >
                        <div
                          className={`tfSubscribeMsg  footer-sub-element ${
                            showMessage ? "active" : ""
                          }`}
                        >
                          {success ? (
                            <p style={{ color: "rgb(52, 168, 83)" }}>
                              You have successfully subscribed.
                            </p>
                          ) : (
                            <p style={{ color: "red" }}>Something went wrong</p>
                          )}
                        </div>
                        <form onSubmit={sendEmail} id="sib-form">
                          <div className="sib-form-block ">
                            <div className="sib-text-form-block">
                              <p className="text-1">
                                Sign up to receive the latest articles
                              </p>
                            </div>
                          </div>
                          <div className="sib-input sib-form-block mb-11">
                            <div className="form__entry entry_block">
                              <div className="form__label-row mb-10">
                                <fieldset className="entry__field">
                                  <input
                                    className="input input-nl "
                                    type="text"
                                    id="EMAIL"
                                    name="email"
                                    autoComplete="off"
                                    placeholder="Your email address"
                                    data-required="true"
                                    required
                                  />
                                </fieldset>
                              </div>
                              <label className="  entry__error entry__error--primary"></label>
                            </div>
                          </div>
                          <div className="sib-form-block">
                            <button
                              className="sib-form-block__button sib-form-block__button-with-loader tf-btn bg-color-primary  w-full"
                              form="sib-form"
                              type="submit"
                            >
                              <svg
                                className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                                viewBox="0 0 512 512"
                              >
                                <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                              </svg>
                              Subscribe
                            </button>
                          </div>
                          <div className="sib-optin sib-form-block">
                            <div className="form__entry entry_mcq">
                              <div className="form__label-row ">
                                <div className="checkbox-item ">
                                  <label className="mb-0">
                                    <span className="text-2 text-color-default">
                                      I have read and agree to the terms &amp;
                                      conditions
                                    </span>
                                    <input
                                      type="checkbox"
                                      className="input_replaced"
                                      defaultValue={1}
                                      id="OPT_IN"
                                      name="OPT_IN"
                                    />
                                    <span className="btn-checkbox" />
                                  </label>
                                </div>
                              </div>
                              <label className="entry__error entry__error--primary"></label>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input
                        type="text"
                        name="email_address_check"
                        defaultValue=""
                        className="input--hidden"
                      />
                      <input type="hidden" name="locale" defaultValue="en" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="footer-bottom">
            <p>
              Copyright © {new Date().getFullYear()}{" "}
              <span className="fw-7">PROTY - REAL ESTATE</span> . Designed &amp;
              Developed by
              <a href="#">Themesflat</a>
            </p>
            <div className="wrap-social">
              <div className="text-3  fw-6 text_white">Follow us</div>
              <ul className="tf-social ">
                <li>
                  <a href="#">
                    <i className="icon-fb" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-X" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-linked" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-ins" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
