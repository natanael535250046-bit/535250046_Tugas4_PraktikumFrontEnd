import { images } from "./site";

export type AmbassadorProfile = {
  badge: string;
  name: string;
  role: string;
  quote: string;
  image: string;
};

export type NewsItem = {
  id: string;
  title: string;
  date: string;
};

export const ambassador: AmbassadorProfile = {
  badge: "OFFICIAL BRAND AMBASSADOR",
  name: "Rezaeditore",
  role: "Food Blogger & Pelanggan Setia Sejak 2016",
  quote:
    '"Sudah keliling ratusan warung, tapi sambal ulek dan lele kremes Pak Asep tetap juara satu. Pedasnya nampol, lelenya garing sampai ke tulang, dan gratis nambah nasi bikin pelanggan selalu balik lagi!"',
  image: images.ambassador,
};

export const newsList: NewsItem[] = [
  {
    id: "n01",
    title: "Pembukaan Cabang Baru Pecel Lele Pak Asep ke-5 di Dekat Gerbang Kampus!",
    date: "2026-10-25",
  },
  {
    id: "n02",
    title: "Promo Gratis Es Teh Jumbo untuk Mahasiswa (Cukup Tunjukkan KTM Aktif)",
    date: "2026-10-22",
  },
  {
    id: "n03",
    title: "Menu Baru Spesial Bulan Ini: Lele & Ayam Bakar Madu Pedas Karamel",
    date: "2026-10-18",
  },
  {
    id: "n04",
    title: "Program Jumat Berkah: Gratis Tambah Nasi & Lalapan Sepuasnya Makan di Tempat",
    date: "2026-10-14",
  },
  {
    id: "n05",
    title: "Tantangan Sambal Level 10: Habiskan dalam 5 Menit Gratis Makan Sebulan!",
    date: "2026-10-09",
  },
  {
    id: "n06",
    title: "Jam Operasional Baru: Kini Buka Lebih Malam Sampai Pukul 03.00 Dini Hari",
    date: "2026-10-04",
  },
  {
    id: "n07",
    title: "Menerima Pesanan Nasi Kotak untuk Acara Himpunan, KKN, & Rapat Kampus",
    date: "2026-09-28",
  },
  {
    id: "n08",
    title: "Bebas Ongkir 5 KM Pertama untuk Pemesanan Langsung via WhatsApp Pak Asep",
    date: "2026-09-20",
  },
];