export const BRAND = "PAK ASEP";
export const HUD_TEXT = "PECEL LELE PAK ASEP";
export const TOTAL_PAGES = 4;

export type NavItem = {
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "HOME" },
  { href: "/news", label: "NEWS" },
  { href: "/data", label: "DATA" },
  { href: "/about", label: "ABOUT US" },
];

export function pad(value: number): string {
  return value < 10 ? `0${value}` : `${value}`;
}

export const images = {
  logo: "/images/logo-pak-asep.png",
  qr: "/images/qr-order.png",
  heroBg: "/images/bg-home-lele.jpg",
  newsBg: "/images/bg-news.jpg",
  dataBg: "/images/bg-data.jpg",
  aboutBg: "/images/bg-about.jpg",
  ambassador: "/images/brand-ambassador.jpg",
  aboutWarung1: "/images/about-warung-1.jpg",
  aboutWarung2: "/images/about-warung-2.jpg",
};