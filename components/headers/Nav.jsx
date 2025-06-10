"use client";
import { navLinks } from "@/data/menu"; // Import the new flat navLinks array
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav() {
  const pathname = usePathname();
  // Removed isParentActive function as it's not needed for flat navigation
  return (
    // Render a flat list of navigation links
    <>
      {navLinks.map((link, index) => (
        <li
          key={index}
          className={pathname === link.href ? "current-menu" : ""}
        >
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </>
  );
}
