import React from "react";
import pendidikan from "@/Assets/image/pendidikan.jpg";
import Image from "next/image";
export default function Pendidikan() {
  return (
    <div className="mx-[130px]">
      <div className="text-center  text-3xl font-semibold">PENDIDIKAN</div>
      <div className="flex pt-10">
        <Image
          src={pendidikan}
          className="w-[800px] h-[550px] shadow-md "
          alt="foto sub pendidikan"
        />
        <div className="pl-10 pt-6 text-[16px] text-slate-600">
          Saat Ini FAZUFI ACADEMY Memiliki 7 Fakultas Dan Pascasarjana, Yaitu
          Fakultas Teknik, Fakultas Ekonomi, Fakultas Matematika Dan Ilmu
          Pengetahuan Alam, Fakultas Ilmu Sosial Dan Hukum, Fakultas Ilmu
          Olahraga, Fakultas Ilmu Pendidikan, Dan Fakultas Bahasa Dan Seni,
          Serta Pascasarjana.
          <ol className="list-disc pl-5 font-semibold">
            <li>satu</li>
            <li>dua</li>
            <li>tiga</li>
            <li>empat</li>
            <li>lima</li>
            <li>enam</li>
            <li>tujuh</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
