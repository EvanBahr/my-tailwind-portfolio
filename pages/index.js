import Agenda from "@/components/Agenda";
import Fasilitas from "@/components/Fasilitas";
import Footer from "@/components/Footer";
import Hero from "@/pages/Hero1";
import Pendidikan from "@/components/Pendidikan";
import Penerimaan from "@/components/Penerimaan";
import Pengalaman from "@/components/Pengalaman";
import RealProject from "@/components/RealProject";
import Info from "@/components/info";
import Jendela from "@/components/jendela";
import NavComp from "@/components/nav-comp";
import Pendaftaran from "@/components/pendaftaran";

export default function Home() {
  return (
    <div className=" bg-slate-50">
      <NavComp />
      <Hero />
      <br />
      <br />
      <Penerimaan />
      <br />
      <br />
      <Pendaftaran />
      <br />
      <br />
      <Agenda />
      <br />
      <br />
      <Pendidikan />
      <br />
      <br />
      <Pengalaman />
      <br />
      <br />
      <RealProject />
      <br />
      <br />
      <Jendela />
      <br />
      <br />
      <Fasilitas />
      <br />
      <br />
      <Info />
      <Footer />
    </div>
  );
}
