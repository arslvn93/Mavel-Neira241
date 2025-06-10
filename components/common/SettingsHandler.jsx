"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SettingsHandler() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Optional: Sync state with localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("isDark");
    if (savedTheme) {
      setIsDark(JSON.parse(savedTheme));
    }
    const savedDir = localStorage.getItem("isRtl");
    if (savedDir) {
      setIsRtl(JSON.parse(savedDir));
    }
  }, []);
  // Initialize state with false (unchecked)

  // Handle checkbox change event
  const handleCheckboxChange = () => {
    const newIsDark = !isDark; // Toggle the state
    setIsDark(newIsDark); // Toggle the state
    localStorage.setItem("isDark", JSON.stringify(newIsDark)); // Save to localStorage
  };
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDark]);

  useEffect(() => {
    // Select all elements with the data-dark attribute
    const elements = document.querySelectorAll("[data-dark]");

    // Iterate over the NodeList
    elements.forEach((element) => {
      // Get the value of the data-dark attribute
      const srcValueDark = element.getAttribute("data-dark");
      const srcValueLight = element.getAttribute("data-light");

      if (isDark) {
        element.src = srcValueDark;
      } else {
        element.src = srcValueLight;
      }
    });
  }, [pathname, isDark]);

  const handleRtlChange = () => {
    const newIsRtl = !isRtl; // Toggle the state
    setIsRtl(newIsRtl); // Update state
    localStorage.setItem("isRtl", JSON.stringify(newIsRtl)); // Save to localStorage
  };

  useEffect(() => {
    document.dir = isRtl ? "rtl" : "ltr";
    if (isRtl) {
      document.body.classList.add("rtl");
    } else {
      document.body.classList.remove("rtl");
    }
  }, [isRtl]);

  return (
    <div className={`popup-setting ${isOpen ? "show" : ""}`}>
      <div className="btn-setting" onClick={() => setIsOpen((pre) => !pre)}>
        <a className="sw-click">
          <i className="icon-settings" />
        </a>
      </div>
      <div className="popup-setting-container">
        <div className="btn-RTL mb-20">
          <span className="title text-1 fw-5 text-color-heading mb-8">
            RTL:
          </span>
          <a
            id="toggle-rtl"
            className="btn-style-2 radius-3"
            onClick={() => handleRtlChange()}
          >
            {isRtl ? "ltr" : "rtl"}
          </a>
        </div>
        <div className="toggle-container">
          <span className="title text-1 fw-5 text-color-heading mb-8">
            Theme Mode:
          </span>
          <div className="toggle-switch">
            <label className="switch-label">
              <input
                type="checkbox"
                className="checkbox"
                id="theme-toggle"
                checked={isDark} // Bind the checked state to the input
                onChange={handleCheckboxChange} // Handle changes
              />
              <span className="slider" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
