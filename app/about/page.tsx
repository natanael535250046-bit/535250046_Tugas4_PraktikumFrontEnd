import Section from "../../components/Section";
import { images } from "../../lib/site";

export default function AboutPage() {
  return (
    <section className="page-section" style={{ backgroundImage: `url(${images.aboutBg})` }}>
      <div className="page-overlay"></div>
      <Section title="ABOUT US" event="03" page={4} />

      <div className="section-content">
        <div className="about-container">
          <div className="about-text-box">
            <p className="about-tag">SEJARAH SINGKAT · SEJAK 2010</p>
            <h2 className="about-heading">
              Dari Warung Tenda Sederhana Menjadi Kuliner Malam Favorit Kampus
            </h2>
            <p className="about-paragraph">
              Perjalanan Pecel Lele Pak Asep dimulai pada tahun 2010 dari sebuah warung tenda kaki lima sederhana di dekat kawasan kampus. Berbekal resep keluarga dan komitmen menyajikan hidangan berkualitas dengan harga terjangkau bagi kantong mahasiswa, Pak Asep meracik sendiri bumbu kuning gurih dan sambal ulek dadakan.
            </p>
            <p className="about-paragraph">
              Kunci kelezatan yang membuat pelanggan setia terus bertambah adalah sambal tomat terasi segar yang diulek langsung saat dipesan, berpadu dengan lele goreng kremes renyah dan ayam bakar bumbu rempah. Kini, Pecel Lele Pak Asep telah memiliki cabang yang selalu ramai menjadi tempat makan malam, nugas, dan berkumpul mahasiswa hingga dini hari.
            </p>
          </div>

          <div className="about-gallery">
            <div className="about-photo-card">
              <img src={images.aboutWarung1} alt="Suasana Warung Tenda Pecel Lele Pak Asep" />
              <div className="about-photo-caption">
                <strong>WARUNG TENDA PERTAMA</strong>
                <span>Suasana santap malam hangat di warung tenda Pak Asep</span>
              </div>
            </div>

            <div className="about-photo-card">
              <img src={images.aboutWarung2} alt="Proses Mengulek Sambal Dadakan Pak Asep" />
              <div className="about-photo-caption">
                <strong>DAPUR & COBEK BATU TRADISIONAL</strong>
                <span>Proses menggoreng lele garing dan racikan sambal ulek dadakan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}