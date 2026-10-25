import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import Hud from "../components/Hud";

export const metadata: Metadata = {
  title: "Pecel Lele Pak Asep | Legenda Sambal Dadakan & Lele Crispy Sejak 2010",
  description:
    "Website resmi Pecel Lele Pak Asep — pelopor sambal ulek dadakan, lele goreng kremes, dan ayam bakar favorit mahasiswa sejak 2010.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <Sidebar />
        <main>{children}</main>
        <Hud />
      </body>
    </html>
  );
}