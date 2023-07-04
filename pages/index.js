import Agenda from "@/components/Agenda";
import Hero from "@/components/Hero";
import Penerimaan from "@/components/Penerimaan";
import NavComp from "@/components/nav-comp";
import Pendaftaran from "@/components/pendaftaran";

export default function Home() {
  return (
    <div className="pb-96 bg-slate-200">
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
    </div>
  );
}
