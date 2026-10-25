export type MenuItem = {
  id: string;
  code: string;
  name: string;
  short: string;
  category: string;
  spicyLevel: string;
  cook: string;
  branchInfo: string;
  price: number;
  portion: string;
  description: string;
  image: string;
};

export function formatRupiah(value: number): string {
  return "Rp " + value.toLocaleString("id-ID");
}

export const menuList: MenuItem[] = [
  {
    id: "01",
    code: "PKA-01",
    name: "Lele Goreng Kremes",
    short: "LELE",
    category: "Makanan Utama",
    spicyLevel: "Pedas Nampol",
    cook: "Pak Asep",
    branchInfo: "Resep Asli Lamongan",
    price: 18000,
    portion: "Nasi + Lalapan + Sambal",
    description:
      "Ikan lele segar ukuran pas yang dimarinasi bumbu kuning kunyit dan ketumbar, digoreng garing hingga renyah sampai ke sirip dengan taburan kremesan gurih dan sambal tomat dadakan.",
    image: "/images/menu-lele-kremes.png",
  },
  {
    id: "02",
    code: "PKA-02",
    name: "Ayam Bakar Pak Asep",
    short: "AYAM",
    category: "Makanan Utama",
    spicyLevel: "Manis Gurih",
    cook: "Pak Asep & Tim",
    branchInfo: "Bumbu Kecap Rempah",
    price: 22000,
    portion: "Paha / Dada + Nasi + Lalapan",
    description:
      "Ayam ungkep bumbu rempah Jawa yang dibakar di atas arang batok kelapa sambil diolesi kecap manis pedas karamel. Dagingnya empuk, harum asap, dan meresap sampai ke tulang.",
    image: "/images/menu-ayam-bakar.png",
  },
  {
    id: "03",
    code: "PKA-03",
    name: "Bebek Goreng Sambal Ijo",
    short: "BEBEK",
    category: "Makanan Utama",
    spicyLevel: "Pedas Sedang",
    cook: "Kang Ujang",
    branchInfo: "Spesialis Unggas",
    price: 28000,
    portion: "Bebek + Nasi + Sambal Ijo",
    description:
      "Potongan bebek muda yang direbus lama bersama daun jeruk dan serai sehingga bebas bau amis, digoreng garing di luar namun tetap lembut di dalam, disajikan dengan sambal cabai ijo segar.",
    image: "/images/menu-bebek-goreng.png",
  },
  {
    id: "04",
    code: "PKA-04",
    name: "Tahu Tempe Penyet",
    short: "PENYET",
    category: "Paket Hemat",
    spicyLevel: "Pedas Nampol",
    cook: "Teh Rina",
    branchInfo: "Jagoan Ulek Sambal",
    price: 12000,
    portion: "2 Tahu + 2 Tempe + Nasi",
    description:
      "Paket penyelamat akhir bulan favorit mahasiswa! Tahu Bandung dan tempe kedelai goreng hangat yang dipenyet langsung di atas cobek batu bersama sambal terasi dadakan dan kemangi segar.",
    image: "/images/menu-tahu-tempe.png",
  },
];