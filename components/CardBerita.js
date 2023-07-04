import Image from "next/image";
import React from "react";

export default function CardBerita(props) {
  return (
    <div className="col-span-1 flex space-x-3 p-5 bg-slate-100 hover:bg-slate-200 rounded-md shadow-md ">
      <Image
        src={props.pp}
        alt="profile"
        className="w-[80px] h-[80px] rounded-md border-2 border-black  "
      />
      <div>
        <div className="text-left uppercase font-semibold">{props.capt}</div>
        <div className="text-[12px] ">{props.tanggal}</div>
      </div>
    </div>
  );
}
