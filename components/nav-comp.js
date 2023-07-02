import React from "react";

function NavComp() {
  return (
    <div>
      <div className="grid grid-cols-10 text-[18px] justify-center h-24 bg-purple-300 space-x-4 items-center text-black font-semibold">
        <div className="col-span-2 text-[30px] text-center cursor-pointer ">
          FAZUFI ACADEMY
        </div>
        {/* <div className="col-span-4 flex justify-start text-[14px] h-24 items-center "> */}
        <div className=" hover:text-slate-400 text-[14px] cursor-pointer flex justify-center items-center h-full w-full  ">
          TENTANG ACADEMY
        </div>
        <div className=" hover:text-slate-400 text-[14px] cursor-pointer flex justify-center items-center h-full w-full  ">
          KEBIJAKAN
        </div>
        <div className=" hover:text-slate-400 text-[14px] cursor-pointer flex justify-center items-center h-full w-full  ">
          PENDIDIKAN
        </div>
        <div className=" hover:text-slate-400 text-[14px] cursor-pointer flex justify-center items-center h-full w-full  ">
          MAHASISWA
        </div>
        <div className=" hover:text-slate-400 text-[14px] cursor-pointer flex justify-center items-center h-full w-full  ">
          PENELITIAN
        </div>
        <div className=" hover:text-slate-400 text-[14px] cursor-pointer flex justify-center items-center h-full w-full  ">
          PENGABDIAN
        </div>
        <div className=" hover:text-slate-400 text-[14px] cursor-pointer flex justify-center items-center h-full w-full ">
          KERJASAMA
        </div>
      </div>
    </div>
    // </div>
  );
}

export default NavComp;
