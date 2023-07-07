import Image from "next/image";
import React from "react";

export default function YoutubeCard(props) {
  return (
    <div className="pt-9">
      <div className="flex ">
        <Image
          src={props.foto}
          alt="thumbnail youtube"
          className="w-[150px] h-[100px] hover:border-2 border-black transform transition-transform duration-300 hover:scale-110  "
        />
        <div className="ml-3 text-sm xl:text-base">{props.capt}</div>
      </div>
    </div>
  );
}
