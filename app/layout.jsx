"use client";
import { useEffect } from "react";
import "../public/main.scss";
import "odometer/themes/odometer-theme-default.css"; // Import theme
import "photoswipe/style.css";
import "rc-slider/assets/index.css";
import { usePathname } from "next/navigation";
import BackToTop from "@/components/common/BackToTop";
import MobileMenu from "@/components/headers/MobileMenu";
import ThemeController from "@/components/common/ThemeController";
// Removed SettingsHandler import
import Login from "@/components/modals/Login";
import Register from "@/components/modals/Register";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  if (typeof window !== "undefined") {
    import("bootstrap/dist/js/bootstrap.esm").then((module) => {
      // Module is imported, you can access any exported functionality if
    });
  }
  useEffect(() => {
    // Close any open modal
    const bootstrap = require("bootstrap"); // dynamically import bootstrap
    const modalElements = document.querySelectorAll(".modal.show");
    modalElements.forEach((modal) => {
      const modalInstance = bootstrap.Modal.getInstance(modal);
      if (modalInstance) {
        modalInstance.hide();
      }
    });

    // Close any open offcanvas
    const offcanvasElements = document.querySelectorAll(".offcanvas.show");
    offcanvasElements.forEach((offcanvas) => {
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    });
  }, [pathname]); // Runs every time the route changes

  useEffect(() => {
    const WOW = require("@/utlis/wow");
    const wow = new WOW.default({
      animateClass: "animated",
      offset: 100,
      mobile: true,
      live: false,
    });
    wow.init();
  }, [pathname]);
  useEffect(() => {
    const handleSticky = () => {
      const navbar = document.querySelector(".header");
      if (navbar) {
        if (window.scrollY > 120) {
          navbar.classList.add("fixed");
          navbar.classList.add("header-sticky");
        } else {
          navbar.classList.remove("fixed");
          navbar.classList.remove("header-sticky");
        }
        if (window.scrollY > 300) {
          navbar.classList.add("is-sticky");
        } else {
          navbar.classList.remove("is-sticky");
        }
      }
    };

    window.addEventListener("scroll", handleSticky);
  }, []);
  return (
    <html lang="en">
      <body className="popup-loader">
        {/* Conditionally apply theme based on pathname */}
        {pathname === '/' ? (
          <ThemeController themeColor="light-theme" />
        ) : (
          <ThemeController themeColor="dark-theme" />
        )}
        {children}
        <MobileMenu />
        <BackToTop />
        {/* Removed SettingsHandler component */}
        <Login />
        <Register />
      </body>
    </html>
  );
}