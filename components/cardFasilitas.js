import Image from "next/image";
import React from "react";

export default function CardFasilitas(props) {
  return (
    <div className="mt-4">
      <div className="flex justify-center">
        <Image
          src={props.gmb}
          alt="gedung"
          className="h-[200px] w-[300px] z-30 opacity-90 blur-[30] hover:blur-none rounded-md transform transition-transform duration-300 hover:scale-90 hover:border-4 hover:border-white "
        />
      </div>
      <div className="text-center text-white font-semibold uppercase text-xl">
        {props.text}
      </div>
    </div>
  );
}
