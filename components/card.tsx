import Link from "next/link";
import type { MenuItem } from "../lib/menu";

type CardProps = {
  item: MenuItem;
  active?: boolean;
};

export default function Card({ item, active = false }: CardProps) {
  return (
    <Link
      href={`/data/${item.id}`}
      className={active ? "dish-card active" : "dish-card"}
      title={item.name}
    >
      <div className="dish-card-thumb">
        <img src={item.image} alt={item.name} />
      </div>
      <span className="dish-card-id">{item.id}</span>
      <span className="dish-card-line"></span>
    </Link>
  );
}