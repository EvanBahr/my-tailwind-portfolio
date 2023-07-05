import Image from "next/image";
import React from "react";
import pendidikan from "@/Assets/image/pendidikan.jpg";
import gedung from "@/Assets/image/gedung.jpg";
import workshop from "@/Assets/image/workshop.jpg";
import lingkungan from "@/Assets/image/lingkungan.jpg";
import kebel from "@/Assets/image/kebel.jpg";
import events from "@/Assets/image/events.jpg";
import kelas from "@/Assets/image/kelas.jpg";
import CardFasilitas from "./cardFasilitas";

const Fasilitas = () => {
  return (
    <section className="relative " id="fasilitas">
      {/* Gambar besar yang akan muncul di section ini */}
      <Image
        src={pendidikan}
        alt="Cover Image"
        className="w-full h-full object-cover absolute inset-0 blur-sm z-10 border-2 border-black"
      />
      <div className="h-screen z-20 relative">
        <div className="mx-[130px]">
          <div className="text-center  text-3xl font-semibold">FASILITAS</div>
          <div className="grid grid-cols-3 pt-[50px] space-x-3 ">
            <CardFasilitas gmb={workshop} text="event event academy" />
            <CardFasilitas gmb={gedung} text="sarana prasarana" />
            <CardFasilitas gmb={lingkungan} text="lingkungan academy" />
            <CardFasilitas gmb={kelas} text="sarana belajar" />
            <CardFasilitas gmb={events} text="event event keakademian" />
            <CardFasilitas gmb={kebel} text="kegiatan belajar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fasilitas;
