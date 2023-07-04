import React from "react";

export default function Agenda() {
  return (
    <div className="mx-[130px]">
      <div className=" flex items-center space-x-[1px] bg-slate-400 ">
        <div className="h-full w-[150px] p-3 bg-blue-950  text-teal-200 text-center">
          AGENDA
        </div>
        <div className="h-full w-[250px] p-3 hover:bg-blue-950  text-teal-200 text-center cursor-pointer">
          INFO DAN PENGUMUMAN
        </div>
        <div className="h-full w-[250px] p-3 hover:bg-blue-950  text-teal-200 text-center cursor-pointer">
          BERITA ACADEMY
        </div>
      </div>

      <div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
