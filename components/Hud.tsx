"use client";

import { usePathname } from "next/navigation";
import { HUD_TEXT } from "../lib/site";

export default function Hud() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="bottom-hud">
      <div className="hud-left">
        <span className="hud-arrows">▶ ▶ ▶</span>
        <span>{HUD_TEXT}</span>
      </div>

      <div className="hud-line"></div>

      <div className="hud-caution">
        <span>▽ CAUTION ▽</span>
      </div>

      <div className="hud-line"></div>

      <div className="hud-right">
        <span className="hud-stripes">//////////</span>
        <span className="hud-corner"></span>
      </div>
    </footer>
  );
}