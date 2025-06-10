"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Removed axios import
// Removed footerData import
import { siteContent } from "@/data/siteContent"; // Import centralized content
export default function Footer2({ parentClass = "" }) {
  useEffect(() => {
    const headings = document.querySelectorAll(".footer-heading-mobile");

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

  // Removed unused state and functions related to axios/email form

  return (
    <footer id="footer" className={parentClass} style={{ backgroundColor: '#161618' }}>
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="footer-top">
              <div className="footer-logo">
                <Link href={`/`}>
                  {/* Replaced Image with styled text */}
                  <span className="text-logo">{siteContent.agent.name}</span>
                </Link>
                {/* Added Brokerage Info */}
                <div className="brokerage-info" style={{ marginTop: '5px' }}> {/* Added margin for spacing */}
                  {/* Added Designation using text-color4 utility class */}
                  <p className="text-3 text-color2" style={{ margin: 0, lineHeight: '1.4' }}> {/* Use text-color4 class */}
                    {siteContent.agent.designation}
                  </p>
                  {/* Updated Brokerage Name (removed label, increased font size) */}
                  <p className="text-3 text-color1" style={{ margin: 0, lineHeight: '1.4', fontSize: '1.1em' }}> {/* Increased font size slightly */}
                    {siteContent.agent.brokerageName}
                  </p>
                </div>
              </div>
              <div className="wrap-contact-item style-1">
                <div className="contact-item">
                  <div className="icons">
                    <i className="icon-location-6" />
                  </div>
                  <div className="content">
                    <div className="title text-1">Office Address</div>
                    <h6 className="text_white"> {/* Added text_white class */}
                      {siteContent.agent.address}
                    </h6>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icons">
                    <i className="icon-phone-2" />
                  </div>
                  <div className="content">
                    <div className="title text-1">{/* Assuming "Call Me" is better */}Call Me</div>
                    <h6>
                      <a href={`tel:${siteContent.agent.phone}`}>{siteContent.agent.phone}</a>
                    </h6>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icons">
                    <i className="icon-letter-2" />
                  </div>
                  <div className="content">
                    <div className="title text-1">{/* Assuming "Need Help?" is better */}Email Me</div>
                    <h6 className="fw-4">
                      <a href={`mailto:${siteContent.agent.email}`}>{siteContent.agent.email}</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Removed footer-main section */}
        </div>
        <div className="col-12">
          <div className="footer-bottom">
            <p>
              Copyright © {new Date().getFullYear()}{" "}
              <span className="fw-7">{`${siteContent.agent.name} - ${siteContent.agent.title}`}</span>. Website by{' '}
              <a href="https://salesgenius.co/" target="_blank" rel="noopener noreferrer">SalesGenius</a>
            </p>
            {/* Added Legal Links */}
            <div className="footer-legal-links" style={{ marginLeft: '20px', display: 'flex', gap: '15px' }}>
              <Link href="/privacy-policy" className="text-3">Privacy Policy</Link>
              <span className="text-3 text_white">|</span>
              <Link href="/terms-of-service" className="text-3">Terms of Service</Link>
            </div>
            <div className="wrap-social">
              <div className="text-3 fw-6 text_white">Follow Me:</div> {/* Added colon */}
              <ul className="tf-social">
                {siteContent.agent.socialLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <i className={link.iconClass} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
