import Link from "next/link";
import React from "react";

import { useState, useEffect } from "react";
function NavComp() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const isTop = window.scrollY < 100;
    setIsScrolled(!isTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full  transition duration-500 z-50 ${
        isScrolled ? "bg-blue-200 bg-opacity-80" : "bg-transparent"
      }`}
    >
      <div className="grid grid-cols-10 text-[18px] justify-center h-24  space-x-4 items-center text-black font-semibold">
        <div className="col-span-2 text-[30px] text-center cursor-pointer ">
          FAZUFI ACADEMY
        </div>
        <Link href="#berita">
          <div className=" hover:text-slate-400 text-[14px] cursor-pointer flex justify-center items-center h-full w-full  ">
            BERITA ACADEMY
          </div>
        </Link>
        <Link href="#agenda">
          <div className=" hover:text-slate-400 text-[14px] cursor-pointer flex justify-center items-center h-full w-full  ">
            AGENDA
          </div>
        </Link>
        <Link href="#pendidikan">
          <div className=" hover:text-slate-400 text-[14px] cursor-pointer flex justify-center items-center h-full w-full  ">
            PENDIDIKAN
          </div>
        </Link>
        <Link href="#pengalaman">
          <div className=" hover:text-slate-400 text-[14px] cursor-pointer flex justify-center items-center h-full w-full  ">
            PENGALAMAN
          </div>
        </Link>
        <Link href="#real">
          <div className=" hover:text-slate-400 text-[14px] cursor-pointer flex justify-center items-center h-full w-full  ">
            REAL PROJECT
          </div>
        </Link>

        <Link href="#fasilitas">
          <div className=" hover:text-slate-400 text-[14px] cursor-pointer flex justify-center items-center h-full w-full  ">
            FASILITAS
          </div>
        </Link>
        <Link href="#tentang">
          <div className=" hover:text-slate-400 text-[14px] cursor-pointer flex justify-center items-center h-full w-full ">
            TENTANG KAMI
          </div>
        </Link>
      </div>
    </div>
    // </div>
  );
}

export default NavComp;
