import Agenda from "@/components/Agenda";
import Hero from "@/components/Hero";
import Pendidikan from "@/components/Pendidikan";
import Penerimaan from "@/components/Penerimaan";
import Pengalaman from "@/components/Pengalaman";
import NavComp from "@/components/nav-comp";
import Pendaftaran from "@/components/pendaftaran";

export default function Home() {
  return (
    <div className="pb-96 bg-slate-50">
      <NavComp />
      <br />
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
    </div>
  );
}
