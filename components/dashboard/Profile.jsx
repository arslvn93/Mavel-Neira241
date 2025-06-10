"use client";
import React from "react";
import Image from "next/image";
export default function Profile() {
  return (
    <div className="main-content style-2">
      <div className="main-content-inner wrap-dashboard-content-2">
        <div className="button-show-hide show-mb">
          <span className="body-1">Show Dashboard</span>
        </div>
        <div className="widget-box-2">
          <div className="box">
            <h3 className="title">Account Settings</h3>
            <div className="box-agent-account">
              <h6>Agent Account</h6>
              <p className="note">
                Your current account type is set to agent, if you want to remove
                your agent account, and return to normal account, you must click
                the button below
              </p>
              <a href="#" className="tf-btn bg-color-primary pd-10 fw-7">
                Remove Agent Account
              </a>
            </div>
          </div>
          <div className="box">
            <h5 className="title">Avatar</h5>
            <div className="box-agent-avt">
              <div className="avatar">
                <Image
                  alt="avatar"
                  loading="lazy"
                  width={128}
                  height={128}
                  src="/images/avatar/account.jpg"
                />
              </div>
              <div className="content uploadfile">
                <p>Upload a new avatar</p>
                <div className="box-ip">
                  <input type="file" className="ip-file" />
                </div>
                <p>JPEG 100x100</p>
              </div>
            </div>
          </div>
          <div className="box">
            <h5 className="title">Agent Poster</h5>
            <div className="box-agent-avt">
              <div className="img-poster">
                <Image
                  alt="avatar"
                  loading="lazy"
                  src="/images/avatar/account-2.jpg"
                  width={875}
                  height={500}
                />
              </div>
              <div className="content uploadfile">
                <p>Upload a new poster</p>
                <div className="box-ip">
                  <input type="file" className="ip-file" />
                </div>
                <span>JPEG 100x100</span>
              </div>
            </div>
          </div>
          <h5 className="title">Information</h5>
          <form onSubmit={(e) => e.preventDefault()}>
            <fieldset className="box box-fieldset">
              <label htmlFor="name">
                Full name:<span>*</span>
              </label>
              <input
                type="text"
                id="name"
                defaultValue="Demo Agent"
                className="form-control"
              />
            </fieldset>
            <fieldset className="box box-fieldset">
              <label>
                Description:<span>*</span>
              </label>
              <textarea
                defaultValue={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
              />
            </fieldset>
            <fieldset className="box grid-layout-4 gap-30">
              <div className="box-fieldset">
                <label htmlFor="company">
                  Your Company:<span>*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  defaultValue="Your Company"
                  className="form-control"
                />
              </div>
              <div className="box-fieldset">
                <label htmlFor="position">
                  Position:<span>*</span>
                </label>
                <input
                  type="text"
                  id="position"
                  defaultValue="Your Company"
                  className="form-control"
                />
              </div>
              <div className="box-fieldset">
                <label htmlFor="num">
                  Office Number:<span>*</span>
                </label>
                <input
                  type="number"
                  id="num"
                  defaultValue={1332565894}
                  className="form-control"
                />
              </div>
              <div className="box-fieldset">
                <label htmlFor="address">
                  Office Address:<span>*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  defaultValue="10 Bringhurst St, Houston, TX"
                  className="form-control"
                />
              </div>
            </fieldset>
            <div className="box grid-layout-4 gap-30 box-info-2">
              <div className="box-fieldset">
                <label htmlFor="job">
                  Job:<span>*</span>
                </label>
                <input
                  type="text"
                  id="job"
                  defaultValue="Realter"
                  className="form-control"
                />
              </div>
              <div className="box-fieldset">
                <label htmlFor="email">
                  Email address:<span>*</span>
                </label>
                <input
                  type="text"
                  id="email"
                  defaultValue="themeflat@gmail.com"
                  className="form-control"
                />
              </div>
              <div className="box-fieldset">
                <label htmlFor="phone">
                  Your Phone:<span>*</span>
                </label>
                <input
                  type="number"
                  id="phone"
                  defaultValue={1332565894}
                  className="form-control"
                />
              </div>
            </div>
            <div className="box box-fieldset">
              <label htmlFor="location">
                Location:<span>*</span>
              </label>
              <input
                type="text"
                id="location"
                defaultValue="634 E 236th St, Bronx, NY 10466"
                className="form-control"
              />
            </div>
            <div className="box box-fieldset">
              <label htmlFor="fb">
                Facebook:<span>*</span>
              </label>
              <input
                type="text"
                id="fb"
                defaultValue="#"
                className="form-control"
              />
            </div>
            <div className="box box-fieldset">
              <label htmlFor="tw">
                Twitter:<span>*</span>
              </label>
              <input
                type="text"
                id="tw"
                defaultValue="#"
                className="form-control"
              />
            </div>
            <div className="box box-fieldset">
              <label htmlFor="linkedin">
                Linkedin:<span>*</span>
              </label>
              <input
                type="text"
                id="linkedin"
                defaultValue="#"
                className="form-control"
              />
            </div>
            <div className="box">
              <a href="#" className="tf-btn bg-color-primary pd-10">
                Save &amp; Update
              </a>
            </div>
            <h5 className="title">Change password</h5>
            <div className="box grid-layout-3 gap-30">
              <div className="box-fieldset">
                <label htmlFor="old-pass">
                  Old Password:<span>*</span>
                </label>
                <div className="box-password">
                  <input
                    type="password"
                    id="old-pass"
                    className="form-contact password-field"
                    placeholder="Password"
                  />
                  <span className="show-pass">
                    <i className="icon-pass icon-hide" />
                    <i className="icon-pass icon-view" />
                  </span>
                </div>
              </div>
              <div className="box-fieldset">
                <label htmlFor="new-pass">
                  New Password:<span>*</span>
                </label>
                <div className="box-password">
                  <input
                    type="password"
                    id="new-pass"
                    className="form-contact password-field2"
                    placeholder="Password"
                  />
                  <span className="show-pass2">
                    <i className="icon-pass icon-hide" />
                    <i className="icon-pass icon-view" />
                  </span>
                </div>
              </div>
              <div className="box-fieldset mb-30">
                <label htmlFor="confirm-pass">
                  Confirm Password:<span>*</span>
                </label>
                <div className="box-password">
                  <input
                    type="password"
                    id="confirm-pass"
                    className="form-contact password-field3"
                    placeholder="Password"
                  />
                  <span className="show-pass3">
                    <i className="icon-pass icon-hide" />
                    <i className="icon-pass icon-view" />
                  </span>
                </div>
              </div>
            </div>
          </form>
          <div className="box">
            <a href="#" className="tf-btn bg-color-primary pd-20">
              Update Password
            </a>
          </div>
        </div>
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
      <div className="overlay-dashboard" />
    </div>
  );
}
