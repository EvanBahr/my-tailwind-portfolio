import React from "react";
import experience from "@/Assets/image/Experience.jpg";
import Image from "next/image";
export default function Pengalaman() {
  return (
    <div className=" bg-slate-200 py-20" id="pengalaman">
      <div className="mx-[130px]">
        <div className="text-center  text-3xl font-semibold">PENGALAMAN</div>
        <div className="flex pt-10">
          <div className="pr-10 pt-6 text-[16px] text-slate-600">
            Bergabung dengan Fazufi Academy merupakan kesempatan langka untuk
            meraih pengalaman belajar yang efektif dan mendalam dalam menguasai
            coding React. Dengan metode pembelajaran berbasis proyek, peserta
            akan langsung terjun ke dalam praktik coding, memperkuat pemahaman
            konsep secara langsung. Didukung oleh instruktur berpengalaman dan
            komunitas belajar yang solid, peserta akan mendapatkan bimbingan dan
            dukungan yang dibutuhkan selama perjalanan belajar. Selain itu,
            berhasil menguasai coding React akan membuka pintu karir sebagai
            seorang pengembang web profesional, menjadi langkah awal untuk
            meraih kesuksesan di industri teknologi.
          </div>{" "}
          <Image
            src={experience}
            className="w-[800px] h-[550px] shadow-md "
            alt="foto sub pendidikan"
          />
        </div>
      </div>
    </div>
  );
}
