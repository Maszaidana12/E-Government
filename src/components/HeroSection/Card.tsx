import Image from "next/image";
import { listFitur } from "../index";

const Card = () => {
  return (
    <div
      id="layanan"
      className="layanan grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-8"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      {listFitur.map((fitur, index) => (
        <div
          key={fitur.id}
          className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-6 
          hover:shadow-xl hover:scale-105 hover:bg-blue-800 transition-all duration-500 group"
          data-aos="zoom-in-up"
          data-aos-delay={index * 150}
          data-aos-duration="4000"
        >
          <Image
            src={fitur.gambar}
            alt={fitur.nama}
            className="w-14 h-14 mb-4 transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          <h4 className="text-center font-semibold font-outfit text-gray-800 text-sm group-hover:text-white sm:text-base">
            {fitur.nama}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Card;
