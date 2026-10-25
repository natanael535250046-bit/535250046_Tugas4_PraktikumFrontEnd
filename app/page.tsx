import Link from "next/link";
import { TOTAL_PAGES, images, pad } from "../lib/site";

const socials = [
  { label: "IG", href: "https://instagram.com" },
  { label: "TT", href: "https://tiktok.com" },
  { label: "YT", href: "https://youtube.com" },
  { label: "FB", href: "https://facebook.com" },
  { label: "WA", href: "https://wa.me/6281234567890" },
];

const stores = [
  { icon: "G", small: "PESAN DI", name: "GoFood", color: "#00aa13" },
  { icon: "G", small: "PESAN DI", name: "GrabFood", color: "#00b14f" },
  { icon: "S", small: "PESAN DI", name: "ShopeeFood", color: "#ee4d2d" },
];

export default function HomePage() {
  return (
    <section className="home-section" style={{ backgroundImage: `url(${images.heroBg})` }}>
      <div className="home-overlay"></div>

      <div className="home-page-count">
        PAGE - <strong>01</strong> / {pad(TOTAL_PAGES)}
      </div>

      <div className="home-content">
        <h1 className="home-title">PECEL LELE PAK ASEP</h1>
        <p className="home-subtitle">
          — LEGENDA SAMBAL DADAKAN &amp; LELE CRISPY SEJAK 2010 —
        </p>
        <p className="home-date">Buka Setiap Hari · 17.00 - 03.00 WIB</p>
      </div>

      <div className="home-bottom-left">
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
        <div className="progress-labels">
          <span>EST</span>
          <span>2010</span>
          <span>2015</span>
          <span>2020</span>
          <span>2026</span>
        </div>
      </div>

      <Link href="/news" className="scroll-down-btn">
        ▼
      </Link>

      <div className="home-bottom-right">
        <div className="download-group">
          <div className="social-links">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                {social.label}
              </a>
            ))}
          </div>

          <div className="store-buttons">
            {stores.map((store) => (
              <Link key={store.name} href="/data" className="store-btn">
                <span className="store-icon" style={{ backgroundColor: store.color }}>
                  {store.icon}
                </span>
                <div>
                  <small>{store.small}</small>
                  <strong>{store.name}</strong>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="qr-box">
          <small>SCAN PESAN WA</small>
          <img src={images.qr} alt="QR Code Pecel Lele Pak Asep" />
        </div>
      </div>
    </section>
  );
}