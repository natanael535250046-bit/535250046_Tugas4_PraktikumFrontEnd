import { BRAND, TOTAL_PAGES, pad } from "../lib/site";

type SectionProps = {
  title: string;
  event: string;
  page: number;
};

export default function Section({ title, event, page }: SectionProps) {
  return (
    <header className="section-header">
      <div className="watermark-text">{BRAND}</div>

      <div className="header-row">
        <div className="header-line-box">
          <span className="header-line"></span>
          <span className="event-text">\ EVENT {event}</span>
        </div>

        <div className="header-center">
          <h1 className="section-title">{title}</h1>
          <div className="section-subtitle">
            <span className="subtitle-line"></span>
            <span>{BRAND}</span>
            <span className="subtitle-line"></span>
          </div>
          <div className="header-dots">• • •</div>
        </div>

        <div className="header-line-box">
          <span className="event-text">EVENT {event} /</span>
          <span className="header-line"></span>
          <span className="page-counter">
            PAGE - <strong>{pad(page)}</strong> / {pad(TOTAL_PAGES)}
          </span>
        </div>
      </div>
    </header>
  );
}