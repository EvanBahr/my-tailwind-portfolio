import React from "react";
import real from "@/Assets/image/real.jpg";
import Image from "next/image";
export default function RealProject() {
  return (
    // <div className="mx-[130px]" id="real">
    <div className="mx-4 xl:mx-[130px] mt-24 " id="pendidikan">
      <div className=" text-center  text-xl xl:text-3xl font-semibold">
        REAL PROJECT
      </div>
      <div className="xl:flex pt-10">
        <Image
          src={real}
          className="w-full h-[250px] xl:h-[550px] shadow-md object-cover "
          alt="foto sub real project"
        />
        <div className="xl:pl-10 pt-6 text-[16px] text-slate-600">
          sebuah academy coding yang inovatif, menawarkan pengalaman belajar
          yang unik dengan mengerjakan real project. Selama mengikuti program
          bootcamp, peserta akan diajak untuk terlibat dalam proyek nyata yang
          relevan dengan dunia industri. Ini bukan hanya sekedar teori, tapi
          pengalaman praktis yang mendalam untuk memahami bagaimana teknologi
          bekerja dalam situasi nyata. Dengan dukungan tim pengajar
          berpengalaman, peserta akan merasakan proses pengembangan aplikasi web
          yang profesional dan mendapatkan wawasan yang berharga tentang
          kolaborasi tim, manajemen proyek, dan problem-solving.
          <span className="font-bold">fake captions</span>
        </div>
      </div>
    </div>
  );
}
