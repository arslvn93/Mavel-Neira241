"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    let offsetX = 0;
    let offsetY = 0;

    const areaCursorCustom = document.querySelector(".area-cursor-custom");

    const handleMouseMove = (e) => {
      const cursorCustom = areaCursorCustom.querySelector(".custom-cursor");
      if (cursorCustom) {
        cursorCustom.style.top = `${e.clientY + offsetY}px`;
        cursorCustom.style.left = `${e.clientX + offsetX}px`;
      }
    };

    const handleMouseEnter = () => {
      const cursorCustom = areaCursorCustom.querySelector(".custom-cursor");
      if (cursorCustom) {
        cursorCustom.style.transform = "scale(1)";
        cursorCustom.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      const cursorCustom = areaCursorCustom.querySelector(".custom-cursor");
      if (cursorCustom) {
        cursorCustom.style.transform = "scale(0)";
        cursorCustom.style.opacity = "0";
      }
    };

    if (areaCursorCustom) {
      areaCursorCustom.addEventListener("mousemove", handleMouseMove);
      areaCursorCustom.addEventListener("mouseenter", handleMouseEnter);
      areaCursorCustom.addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup function to remove event listeners
    return () => {
      if (areaCursorCustom) {
        areaCursorCustom.removeEventListener("mousemove", handleMouseMove);
        areaCursorCustom.removeEventListener("mouseenter", handleMouseEnter);
        areaCursorCustom.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="custom-cursor style-2 md-hide">
      <i className="icon-cursor" />
      Drang
    </div>
  );
}
