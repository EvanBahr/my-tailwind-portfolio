import Image from "next/image";
import React from "react";

export default function CardPhoto(props) {
  return (
    <div>
      <Image
        src={props.foto}
        alt="gambar"
        className="h-[200px] xl:h-[400px] w-full xl:pr-[20px] xl:pl-[20px] object-cover "
      />
      <div className="p-2">
        <div className="text-xl font-semibold">{props.judul}</div>
        <div className="text-slate-500 mt-2">
          {props.text}
          <span className="font-bold text-black cursor-pointer hover:text-blue-600">
            baca selengkapnya...
          </span>
        </div>
      </div>
    </div>
  );
}
