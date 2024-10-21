"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const TabNavigation = () => {
  const pathname = usePathname();

  return (
    <section className="top-ulli">
      <ul>
        <li className={pathname === "/terms-of-uses" ? "activee" : ""}>
          <Link href="/terms-of-uses">Terms of Use</Link>
        </li>
        <li className={pathname === "/privacy-security" ? "activee" : ""}>
          <Link href="/privacy-security">Privacy & Security</Link>
        </li>
        <li className={pathname === "/sitemap" ? "activee" : ""}>
          <Link href="/sitemap">Site Map</Link>
        </li>
      </ul>
    </section>
  );
};

export default TabNavigation;
