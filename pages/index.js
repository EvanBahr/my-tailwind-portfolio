import Hero from "@/components/Hero";
import NavComp from "@/components/nav-comp";
import Pendaftaran from "@/components/pendaftaran";

export default function Home() {
  return (
    <div className="mb-96">
      <NavComp />
      <Hero />
      <Pendaftaran />
    </div>
  );
}
