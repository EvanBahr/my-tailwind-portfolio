import Image from "next/image";
import React from "react";

export default function CardPhoto(props) {
  return (
    <div className="w-full mx-2">
      <Image
        src={props.foto}
        alt="gambar besar"
        className="w-full h-[250px] object-cover  "
      />
      <div className="text-[15px] ">
        bismillah Fazufi Academy adalah sebuah lembaga bootcamp fullstack yang
        berdedikasi untuk memberikan pelatihan teknologi informasi tingkat
        tinggi kepada calon pengembang perangkat lunak. Dengan program
        pendidikan intensif selama 12 minggu, Fazufi Academy berkomitmen untuk
        membekali peserta dengan pengetahuan dan keterampilan yang diperlukan
        untuk menjadi fullstack developer yang berkualitas.
      </div>
    </div>
  );
}
