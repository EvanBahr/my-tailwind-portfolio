import React from "react";
import laptop from "@/Assets/image/laptop.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <Image
        src={laptop}
        alt="gambar besar"
        className="w-full h-[600px] object-cover"
      />
    </div>
  );
}
