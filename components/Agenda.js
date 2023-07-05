import Image from "next/image";
import React from "react";
import pp from "@/Assets/image/pp.jpg";
import CardBerita from "./CardBerita";
export default function Agenda() {
  return (
    <div className=" bg-slate-200 py-20" id="agenda">
      <div className="mx-[130px]">
        <div className=" flex items-center space-x-[1px] bg-slate-400 ">
          <div className="h-full w-[150px] p-3 bg-blue-950  text-teal-200 text-center">
            AGENDA
          </div>
          <div className="h-full w-[250px] p-3 hover:bg-blue-950  text-teal-200 text-center cursor-pointer">
            INFO DAN PENGUMUMAN
          </div>
          <div className="h-full w-[250px] p-3 hover:bg-blue-950  text-teal-200 text-center cursor-pointer">
            BERITA ACADEMY
          </div>
        </div>

        <div>
          <div className="grid grid-cols-3 pt-[100px] space-x-3 ">
            <CardBerita
              pp={pp}
              capt={
                "Menyongsong Era Digital, Fazufi Academy Dukung Generasi Muda Jadi Pengembang Profesional"
              }
              tanggal={"13 maret 2023"}
            />{" "}
            <CardBerita
              pp={pp}
              capt={
                "Fazufi Academy Memperkenalkan Program Belajar React dengan Pendekatan Interaktif"
              }
              tanggal={"14 maret 2023"}
            />{" "}
            <CardBerita
              pp={pp}
              capt={
                "Fazufi Academy Bersama Komunitas, Membangun Kolaborasi dalam Dunia Coding"
              }
              tanggal={"15 maret 2023"}
            />
          </div>{" "}
          <div className="grid grid-cols-3 pt-[20px] space-x-3 ">
            <CardBerita
              pp={pp}
              capt={
                "Raih Kesempatan Emas: Fazufi Academy Buka Pendaftaran Bootcamp React"
              }
              tanggal={"16 maret 2023"}
            />{" "}
            <CardBerita
              pp={pp}
              capt={
                "Fazufi Academy: Menyambut Generasi Baru Pengembang Web Profesional"
              }
              tanggal={"17 maret 2023"}
            />{" "}
            <CardBerita
              pp={pp}
              capt={
                "Fazufi Academy Meluncurkan Bootcamp React Terbaru: Mengaspal Karir Developer!"
              }
              tanggal={"18 maret 2023"}
            />
          </div>
          <div className="flex mt-[50px]">
            <div className="h-[40px] w-[150px] bg-blue-950 mx-auto text-white  flex items-center justify-center hover:bg-blue-900 cursor-pointer">
              selengkapnya {">>"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
