"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { images, navItems } from "../lib/site";

export default function Sidebar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const activeIndex = navItems.findIndex((item) =>
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
  );

  return (
    <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
      {isHome && (
        <Link href="/" className="sidebar-logo">
          <img src={images.logo} alt="Pecel Lele Pak Asep" className="logo-img" />
          <strong>PAK ASEP</strong>
          <small>PECEL LELE &amp; AYAM</small>
        </Link>
      )}

      <button
        type="button"
        className="hamburger-btn"
        aria-label="Toggle Menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          {navItems.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <li
                key={item.href}
                className={isActive ? "nav-item active" : "nav-item"}
              >
                <Link
                  href={item.href}
                  className={isActive ? "nav-link active" : "nav-link"}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}