import Section from "../../components/Section";
import DishData from "../../components/DishData";
import { images } from "../../lib/site";
import { menuList } from "../../lib/menu";

export default function DataPage() {
  return (
    <section className="page-section" style={{ backgroundImage: `url(${images.dataBg})` }}>
      <div className="page-overlay"></div>
      <Section title="DATA" event="02" page={3} />
      <div className="section-content">
        <DishData item={menuList[0]} />
      </div>
    </section>
  );
}