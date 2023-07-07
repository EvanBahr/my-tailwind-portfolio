import Image from "next/image";
// import React from "react";
import pendidikan from "@/Assets/image/pendidikan.jpg";
import gedung from "@/Assets/image/gedung.jpg";
import workshop from "@/Assets/image/workshop.jpg";
import lingkungan from "@/Assets/image/lingkungan.jpg";
import kebel from "@/Assets/image/kebel.jpg";
import events from "@/Assets/image/events.jpg";
import kelas from "@/Assets/image/kelas.jpg";
import CardFasilitas from "./cardFasilitas";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Fasilitas = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <section className="relative " id="fasilitas">
      {/* Gambar besar yang akan muncul di section ini */}
      <Image
        src={pendidikan}
        alt="Cover Image"
        className="w-full h-[600px] xl:h-[800px] object-cover absolute inset-0 blur-sm z-10 border-2 border-black"
      />
      <div className="h-screen z-20 relative">
        <div className="mx-4 xl:mx-[130px]">
          <div className="text-center  text-xl xl:text-3xl font-semibold">
            FASILITAS
          </div>
          {/* <div className="grid grid-cols-3 pt-[50px] space-x-3 "> */}
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide>
              <CardFasilitas gmb={workshop} text="event event academy" />
            </SwiperSlide>
            <SwiperSlide>
              <CardFasilitas gmb={gedung} text="sarana prasarana" />
            </SwiperSlide>
            <SwiperSlide>
              <CardFasilitas gmb={lingkungan} text="lingkungan academy" />
            </SwiperSlide>
            <SwiperSlide>
              <CardFasilitas gmb={kelas} text="sarana belajar" />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <CardFasilitas gmb={events} text="event event keakademian" />
            </SwiperSlide>
            <SwiperSlide>
              <CardFasilitas gmb={kebel} text="kegiatan belajar" />
            </SwiperSlide>
            {/* </div> */}{" "}
            <div className="autoplay-progress hidden" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Fasilitas;
