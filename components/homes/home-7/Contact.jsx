"use client";
import React from "react";

export default function Contact() {
  return (
    <div className="section-contact style-2 tf-spacing-7">
      <div className="tf-container">
        <div className="row justify-content-end">
          <div className="col-md-6">
            <form
              className="form-get-in-touch"
              onSubmit={(e) => e.preventDefault()}
            >
              <h2 className="text-color-heading title-form fw-5 mb-0">
                Get in touch
              </h2>
              <p className="text-1 text-color-default fw-3">
                We'll get to know you to understand your selling goals, explain
                the selling process so you know what to expect.
              </p>
              <div className="grid-2">
                <fieldset>
                  <label className="text-1 fw-6 mb-12" htmlFor="name3">
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
                  <label className="text-1 fw-6 mb-12" htmlFor="email3">
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
                <label className="text-1 fw-6 mb-12" htmlFor="phone">
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
                <label className="text-1 fw-6 mb-12" htmlFor="message3">
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
  );
}
