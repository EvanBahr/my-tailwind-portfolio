// components/HoleInWebsite.js

import React from "react";
import Image from "next/image";
import pendidikan from "@/Assets/image/pendidikan.jpg";

const HoleInWebsite = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src={pendidikan} alt="Gambar Fixed" width={300} height={200} />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-4xl font-bold text-white">
          Selamat Datang di Website dengan Lubang!
        </h1>
        <p className="text-white mt-4">
          Scroll ke bawah untuk melihat gambar yang muncul.
        </p>
      </div>
    </div>
  );
};

export default HoleInWebsite;
