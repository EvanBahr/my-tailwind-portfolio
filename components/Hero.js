import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import org from "@/Assets/image/org.jpg";
import gedung from "@/Assets/image/gedung.jpg";
import lingkungan from "@/Assets/image/lingkungan.jpg";
import kelas from "@/Assets/image/kelas.jpg";
import kebel from "@/Assets/image/kebel.jpg";
import events from "@/Assets/image/events.jpg";
import workshop from "@/Assets/image/workshop.jpg";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Hero() {
  const Fotos = [org, lingkungan, kelas, kebel, workshop, gedung, events];

  return (
    <>
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
        className="mySwiper"
      >
        {Fotos.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item}
              alt={`Slide ${index + 1}`}
              className="w-full h-[500px] object-cover mt-24"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
