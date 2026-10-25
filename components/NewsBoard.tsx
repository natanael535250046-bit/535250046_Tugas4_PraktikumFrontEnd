"use client";

import { useState } from "react";
import type { AmbassadorProfile, NewsItem } from "../lib/news";

const LIMIT = 6;

type NewsBoardProps = {
  ambassador: AmbassadorProfile;
  items: NewsItem[];
};

export default function NewsBoard({ ambassador, items }: NewsBoardProps) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? items : items.slice(0, LIMIT);

  return (
    <div className="news-container">
      <div className="news-left">
        <p className="ambassador-header-label">
          <span>★</span> BRAND AMBASSADOR //
        </p>

        <div className="ambassador-card">
          <div className="ambassador-photo-frame">
            <img
              src={ambassador.image}
              alt={ambassador.name}
              className="ambassador-img"
            />
            <span className="ambassador-badge">{ambassador.badge}</span>
          </div>

          <div className="ambassador-info">
            <h3 className="ambassador-name">{ambassador.name}</h3>
            <p className="ambassador-role">{ambassador.role}</p>
            <p className="ambassador-quote">{ambassador.quote}</p>
          </div>
        </div>
      </div>

      <div className="news-right">
        <div className="news-single-header">
          <span className="news-header-title">
            <small className="tab-num">01</small> News
          </span>
          <span className="news-header-sub">INFO &amp; PROMO PAK ASEP</span>
        </div>

        <ul className="news-list">
          {visible.map((news) => (
            <li key={news.id} className="news-item">
              <span className="news-title">[News] {news.title}</span>
              <span className="news-date">{news.date}</span>
            </li>
          ))}
        </ul>

        {items.length > LIMIT && (
          <button
            type="button"
            className="more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "LESS -" : "MORE +"}
          </button>
        )}
      </div>
    </div>
  );
}