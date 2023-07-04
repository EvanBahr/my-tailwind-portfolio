import Image from "next/image";
import React from "react";
import org from "@/Assets/image/org.jpg";
import CardPhoto from "./CardPhoto";
export default function Pendaftaran() {
  return (
    <div className="mx-[130px]">
      <div className=" my-[20px] px-[20px] pt-[30px] pb-[20px] flex items-center justify-between bg-blue-950 text-teal-200 ">
        <div>
          <div className="text-2xl">
            SIPENMARU, PENERIMAAN MAHASISWA BARU FAZUFI ACADEMY 2023
          </div>
          <div>
            Informasi Pendaftaran, Pengumuman, Daftar Ulang Mahasiswa Baru.
          </div>
        </div>
        <button className="h-[40px] bg-black w-[150px]  "> Klik Disini </button>
      </div>
      <div className="text-center  text-3xl font-semibold mt-10">
        BERITA ACADEMY
      </div>
      <div className="grid grid-cols-2 pt-10 ">
        <Image
          src={org}
          alt="gambar besar"
          className="h-[400px] w-[550px] pl-[20px] object-cover "
        />
        <div>
          <div className="text-sm text-blue-400 font-semibold">
            Sunday 7 July 2023
          </div>
          <div>
            PERDANA, FAZUFI ACADEMY BAHASA HELAT FUN ENGLISH CAMP UNTUK PELAJAR,
            BAKAL DIGELAR TAHUNAN
          </div>
          <div>
            AcademyFazufi.ac.id., SURABAYA—UPT Fazufi Academy adalah sebuah
            lembaga bootcamp fullstack yang berdedikasi untuk memberikan
            pelatihan teknologi informasi tingkat tinggi kepada calon pengembang
            perangkat lunak. Dengan program pendidikan intensif selama 12
            minggu, Fazufi Academy berkomitmen untuk membekali peserta dengan
            pengetahuan dan keterampilan yang diperlukan untuk menjadi fullstack
            developer yang berkualitas.
            <span className="font-bold"> yahahahahaha cuma Dummy text</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 pt-6 justify-between space-x-1 ">
        <CardPhoto
          foto={org}
          text={
            "Fazufi Academy adalah sebuah bootcamp coding yang berfokus pada pengajaran React, salah satu framework JavaScript yang paling populer untuk pengembangan antarmuka web. Dengan durasi singkat, hanya beberapa minggu, bootcamp ini. "
          }
          judul={"Manfaat Mengikuti Fazufi Academy"}
        />
        <CardPhoto
          foto={org}
          text={
            "Fazufi Academy menyediakan banyak manfaat bagi peserta yang mengikuti programnya. Selain mempelajari dasar-dasar React, peserta juga akan mendapatkan pemahaman tentang ekosistem teknologi yang relevan, seperti Redux, React Router, dan Axios. Bootcamp ini menawarkan suasana belajar yang kolaboratif, di mana peserta dapat berinteraksi dan bekerja bersama untuk menyelesaikan proyek-proyek nyata. "
          }
          judul={"Manfaat Mengikuti Fazufi Academy"}
        />
        <CardPhoto
          foto={org}
          text={
            "Kurikulum Fazufi Academy didesain secara cermat untuk mengajarkan konsep-konsep penting dalam React dengan cara yang efektif. Dalam program ini, peserta akan belajar tentang komponen, state, props, lifecycle, dan bagaimana semuanya saling berinteraksi untuk menciptakan antarmuka yang dinamis. Selain itu,  "
          }
          judul={"Kurikulum dan Metode Pengajaran"}
        />
      </div>
      <div className="flex mt-[50px]">
        <div className="h-[40px] w-[250px] bg-blue-950 mx-auto text-white  flex items-center justify-center hover:bg-blue-900 cursor-pointer">
          lihat berita selengkapnya {">>"}
        </div>
      </div>
    </div>
  );
}
