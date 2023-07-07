import Image from "next/image";
import React from "react";
import tumbnail from "@/Assets/image/tumbnail.jpg";
import youtube from "@/Assets/image/youtube.jpg";
import YoutubeCard from "./youtubeCard";
export default function Jendela() {
  return (
    <div className=" bg-slate-200 py-20" id="jendela">
      <div className="mx-4 xl:mx-[130px]">
        <div className="text-center  text-xl xl:text-3xl font-semibold">
          JENDELA ACADEMY
        </div>
        <div className="xl:flex pt-10">
          <div>
            <div className="xl:text-xl text-lg  font-semibold">
              KANAL YOUTUBE FAZUFI ACADEMY
            </div>
            <Image
              src={tumbnail}
              alt="jendela fazufi academy"
              className="xl:w-[1800px] w-full h-[250px] xl:h-[500px] mt-3 object-cover"
            />
            <h2 className="text-lg font-semibold">FAZUFI ACADEMY</h2>
            <p>
              FAZUFI ACADEMY: meniti karir programming bersama Fazufi Academy
            </p>
          </div>
          <div className=" xl:pl-10">
            <YoutubeCard
              foto={youtube}
              capt={
                "FAZUFI ACADEMY: Academy Journey to Becoming a Web Developer dan Menggapai Impian Teknologi Anda!"
              }
            />
            <YoutubeCard
              foto={youtube}
              capt={
                "FAZUFI ACADEMY: Pintu Gerbang Menguasai Coding dengan Mudah dan Menyenangkan!"
              }
            />{" "}
            <YoutubeCard
              foto={youtube}
              capt={
                "FAZUFI ACADEMY:From Novice to Pro: The Ultimate Academy Experience for Web Development Mastery!"
              }
            />
            <YoutubeCard
              foto={youtube}
              capt={
                "FAZUFI ACADEMY: Embark on an Academy Journey to Become a Web Developer and Achieve Your Tech Dreams!"
              }
            />{" "}
            <YoutubeCard
              foto={youtube}
              capt={
                "FAZUFI ACADEMY: Academy's Comprehensive Guide to Mastering Software Development and Building Innovative Projects!"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
