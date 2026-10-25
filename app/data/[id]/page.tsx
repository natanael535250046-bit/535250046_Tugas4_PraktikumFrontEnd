import Link from "next/link";
import Section from "../../../components/Section";
import DishData from "../../../components/DishData";
import { images } from "../../../lib/site";
import { menuList } from "../../../lib/menu";

interface DataDetailProps {
  params: Promise<{ id: string }>;
}

export default async function DataDetailPage({ params }: DataDetailProps) {
  const { id } = await params;
  const item = menuList.find((menu) => menu.id === id);

  return (
    <section className="page-section" style={{ backgroundImage: `url(${images.dataBg})` }}>
      <div className="page-overlay"></div>
      <Section title="DATA" event="02" page={3} />
      <div className="section-content">
        {item ? (
          <DishData item={item} />
        ) : (
          <div className="not-found-box">
            <h2>404</h2>
            <p>Menu dengan ID &quot;{id}&quot; tidak ditemukan.</p>
            <Link href="/data" className="more-btn">
              Kembali ke Menu Andalan
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}