"use client";

import { useEffect } from "react";

export default function ThemeController({ themeColor }) {
  useEffect(() => {
    // Remove existing theme classes first
    document.body.classList.remove('light-theme', 'dark-theme');
    // Add the new theme class
    document.body.classList.add(themeColor);

    // Cleanup function to remove the class when the component unmounts or themeColor changes
    return () => {
      document.body.classList.remove(themeColor);
    };
  }, [themeColor]); // Add themeColor dependency

  return <></>;
}
