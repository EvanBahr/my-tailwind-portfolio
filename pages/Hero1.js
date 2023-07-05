import React from "react";
import org from "@/Assets/image/org.jpg";
import gedung from "@/Assets/image/gedung.jpg";
import lingkungan from "@/Assets/image/lingkungan.jpg";
import kelas from "@/Assets/image/kelas.jpg";
import Image from "next/image";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Hero1() {
  const Fotos = [org, gedung, lingkungan, kelas];

  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      // disableOnInteraction={false}
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
  );
}
