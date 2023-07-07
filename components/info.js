import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { MdRadio } from "react-icons/md";
export default function Info() {
  return (
    <div className="bg-blue-950 xl:h-[400px] pt-6 " id="tentang">
      <div className="mx-4 xl:mx-[130px] pb-4">
        <div className="xl:grid xl:grid-cols-5 text-white text-left ">
          <div className="">
            <h1 className="text-xl font-semibold uppercase underline mt-4 xl:mt-0">
              fazufi academy
            </h1>
            <p className="mt-3 capitalize">Jl. Pembelajaran No. 123</p>
            <p className=" capitalize">Kota Pintar, Negara Maju</p>
            <p className=" capitalize">Kode Pos: 56789</p>
            <p className=" capitalize">Telepon: (0123) 456789</p>
            <p className=" capitalize">Email: info@fazufiacademy.com</p>
          </div>
          <div className="">
            <h1 className="text-xl capitalize underline mt-4 xl:mt-0">
              ikuti kami
            </h1>
            <div className="flex space-x-2 items-center mt-3">
              <BsInstagram />
              <p>instagram</p>
            </div>
            <div className="flex space-x-2 items-center">
              <BsFacebook />
              <p>Facebook</p>
            </div>
            <div className="flex space-x-2 items-center">
              <BsTwitter />
              <p>Twitter</p>
            </div>{" "}
            <div className="flex space-x-2 items-center">
              <BsYoutube />
              <p>YouTube</p>
            </div>
            <div className="flex space-x-2 items-center">
              <MdRadio />
              <p>Radio Academy</p>
            </div>
          </div>
          <div>
            <h1 className="text-xl capitalize underline mt-4 xl:mt-0">
              seputar academy
            </h1>
            <p className="mt-3 capitalize">Berita academy</p>
            <p className=" capitalize">youtube</p>
            <p className=" capitalize">majalah academy</p>
            <p className=" capitalize">radio academy</p>
            <p className=" capitalize">direktori </p>
            <p className=" capitalize">survey layanan academy </p>
          </div>
          <div>
            <h1 className="text-xl capitalize underline mt-4 xl:mt-0">
              fasilitas
            </h1>
            <p className="mt-3 capitalize">penelitian</p>
            <p className=" capitalize">fasilitas umum</p>
            <p className=" capitalize">akomodasi</p>
            <p className=" capitalize">tempat ibadah</p>
            <p className=" capitalize">keamanan </p>
            <p className=" capitalize">E-Learning</p>
            <p className=" capitalize">digital library</p>
            <p className=" capitalize">integrate online public</p>
            <p className=" capitalize">blog academy</p>
          </div>
          <div>
            <h1 className="text-xl capitalize underline mt-4 xl:mt-0">
              pelakasanaan teknis
            </h1>
            <p className="mt-3 capitalize"> Pelaksanaan Teknis</p>
            <p className=" capitalize">Upt Perpustakaan</p>
            <p className=" capitalize">
              Upt Pusat Pengembangan Teknologi Informasi
            </p>
            <p className=" capitalize">Upt Pusat Bahasa</p>
          </div>
        </div>
      </div>
    </div>
  );
}
