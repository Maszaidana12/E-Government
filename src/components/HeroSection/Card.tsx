import Image from 'next/image';
import Link from 'next/link';
import { HeroImage, listFitur } from '../index';

const Card = () => {
  return (
    <div
      className=" layanan grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-6"
    id='layanan'>
     {listFitur.map((fitur) => (
    <div
      key={fitur.id}
      className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-4 
      hover:shadow-lg hover:scale-105 hover:bg-blue-800 transition-all duration-300 group"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={fitur.dad}
    >
      <Image
        src={fitur.gambar}
        alt="Layanan"
        className="w-12 h-12 mb-3 transition-transform duration-300 group-hover:scale-110"
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
