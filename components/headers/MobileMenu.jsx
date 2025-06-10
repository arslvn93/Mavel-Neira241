"use client";
import { navLinks } from "@/data/menu"; // Import the new flat navLinks array
import Image from "next/image"; // Keep Image import if needed elsewhere, otherwise remove
import { siteContent } from "@/data/siteContent"; // Import siteContent
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function MobileMenu() {
  const pathname = usePathname();
  // Removed isParentActive function as it's not needed for flat navigation
  return (
    <div
      className="offcanvas offcanvas-start mobile-nav-wrap"
      tabIndex={-1}
      id="menu-mobile"
      aria-labelledby="menu-mobile"
    >
      <div className="offcanvas-header top-nav-mobile">
        <div className="offcanvas-title">
          <Link href={`/`}>
            {/* Replaced Image with styled text */}
            <span className="text-logo">{siteContent.agent.name}</span>
          </Link>
        </div>
        <div data-bs-dismiss="offcanvas" aria-label="Close">
          <i className="icon-close" />
        </div>
      </div>
      <div className="offcanvas-body inner-mobile-nav">
        <div className="mb-body">
          {/* Render a flat list of navigation links */}
          <ul id="menu-mobile-menu">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`menu-item ${
                  pathname === link.href ? "current-item" : ""
                }`}
              >
                <Link href={link.href} className="tem-menu-mobile">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="support">
            <a href="#" className="text-need">
              {" "}
              Need help?
            </a>
            <ul className="mb-info">
              <li>
                Call Us Now: <a href={`tel:${siteContent.agent.phone}`} className="number">{siteContent.agent.phone}</a>
              </li>
              <li>
                Support 24/7: <a href={`mailto:${siteContent.agent.email}`}>{siteContent.agent.email}</a>
              </li>
              <li>
                <div className="wrap-social">
                  <p>Follow us:</p>
                  {/* Dynamically generate social links */}
                  <ul className="tf-social style-2">
                    {siteContent.agent.socialLinks.map((link, index) => (
                      <li key={index}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <i className={link.iconClass} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
