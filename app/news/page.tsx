import Section from "../../components/Section";
import NewsBoard from "../../components/NewsBoard";
import { images } from "../../lib/site";
import { ambassador, newsList } from "../../lib/news";

export default function NewsPage() {
  return (
    <section className="page-section" style={{ backgroundImage: `url(${images.newsBg})` }}>
      <div className="page-overlay"></div>
      <Section title="NEWS" event="01" page={2} />
      <div className="section-content">
        <NewsBoard ambassador={ambassador} items={newsList} />
      </div>
    </section>
  );
}