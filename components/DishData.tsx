import Link from "next/link";
import Card from "./card";
import { menuList, formatRupiah, type MenuItem } from "../lib/menu";
import { pad } from "../lib/site";

type DishDataProps = {
  item: MenuItem;
};

export default function DishData({ item }: DishDataProps) {
  const index = menuList.findIndex((menu) => menu.id === item.id);
  const prevIndex = index > 0 ? index - 1 : menuList.length - 1;
  const nextIndex = index < menuList.length - 1 ? index + 1 : 0;
  const prev = menuList[prevIndex];
  const next = menuList[nextIndex];

  return (
    <div className="data-container">
      <div className="data-left">
        <div className="dish-header">
          <h2 className="dish-name">{item.name}</h2>
          <p className="dish-category">— MENU ANDALAN PAK ASEP —</p>
          <p className="dish-desc">{item.description}</p>
        </div>

        <div className="dish-meta">
          <span>
            <b className="meta-tag">■</b> KATEGORI: {item.category}
          </span>
          <span>
            <b className="meta-tag">■</b> LEVEL PEDAS: {item.spicyLevel}
          </span>
        </div>

        <div className="dish-cards">
          {menuList.map((menu) => (
            <Card key={menu.id} item={menu} active={menu.id === item.id} />
          ))}
        </div>

        <div className="dish-counter">
          <Link href={`/data/${prev.id}`}>◀</Link>
          <span>
            {pad(index + 1)} / {pad(menuList.length)}
          </span>
          <Link href={`/data/${next.id}`}>▶</Link>
        </div>
      </div>

      <div className="data-center">
        <div className="dish-image-box">
          <img src={item.image} alt={item.name} />
        </div>
      </div>

      <div className="data-right">
        <p className="chef-label">
          <strong>PERACIK.</strong> BUMBU.
        </p>
        <div className="chef-bar">
          {item.cook} | {item.branchInfo}
        </div>
        <h3 className="dish-short-name">{item.short}</h3>
        <p className="dish-code">
          <span>▶▶▶</span> MENU \\ {item.code} · PECEL LELE PAK ASEP
        </p>
        <p className="dish-price">
          {formatRupiah(item.price)} · ({item.portion})
        </p>
      </div>
    </div>
  );
}