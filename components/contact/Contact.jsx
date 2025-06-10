"use client";
import React from "react";
import DropdownSelect from "../common/DropdownSelect";
import { siteContent } from "@/data/siteContent";
import useForm from "../../hooks/useForm";

export default function Contact() {
  const { formData, formState, formError, handleChange, handleSubmit } = useForm(
    {
      name: "",
      email: "",
      phone: "",
      interest: "Select",
      message: "",
      formName: "Contact Page Form",
    },
    siteContent.agent.email
  );

  const handleInterestChange = (value) => {
    handleChange({ target: { name: "interest", value } });
  };

  return (
    <section className="section-top-map style-2">
      <div className="wrap-map">
        <div
          id="map"
          className="row-height"
          data-map-zoom={16}
          data-map-scroll="true"
        >
          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              siteContent.agent.address
            )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="box">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <form id="contactform" onSubmit={handleSubmit} className="form-contact">
                <div className="heading-section">
                  <h2 className="title">{siteContent.contactPage.formTitle}</h2>
                  <p className="text-1">
                    {siteContent.contactPage.formDescription}
                  </p>
                </div>
                <div className="cols">
                  <fieldset>
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your name"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </fieldset>
                  <fieldset>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      id="email-contact"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </fieldset>
                </div>
                <div className="cols">
                  <fieldset className="phone">
                    <label htmlFor="phone">Phone number:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your phone number"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </fieldset>
                  <div className="select">
                    <label className="text-1 fw-6 mb-12">
                      What are you interested in?
                    </label>
                    <DropdownSelect
                      options={["Select", "Location", "Rent", "Sale"]}
                      addtionalParentClass=""
                      selectedValue={formData.interest}
                      onChange={handleInterestChange}
                    />
                  </div>
                </div>
                <fieldset>
                  <label htmlFor="message">Your Message:</label>
                  <textarea
                    name="message"
                    cols={30}
                    rows={10}
                    placeholder="Message"
                    id="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </fieldset>
                <div className="send-wrap">
                  <button
                    className="tf-btn bg-color-primary fw-7 pd-8"
                    type="submit"
                    disabled={formState === 'submitting'}
                  >
                    {formState === 'submitting' ? 'Submitting...' : `Send ${siteContent.agent.firstName} a Message`}
                  </button>
                </div>
                {formState === 'success' && (
                  <p className="text-success">Your message has been sent successfully!</p>
                )}
                {formState === 'error' && (
                  <p className="text-error">
                    {formError || 'An error occurred. Please try again.'}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
