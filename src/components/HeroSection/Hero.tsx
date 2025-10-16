import Image from 'next/image';
import {HeroImage, LogoHero} from '../index';
import Link from 'next/link';



const Hero = () => {
  return (
    <div className="relative h-screen text-white
     overflow-hidden">
      <div className="absolute inset-0">
        <Image 
        src = {HeroImage}
        alt = 'Hero Image'
        fill className='object-cover object-center w-full h-full' 
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative flex flex-col justify-center items-center h-full text-center">
        <Image 
        src = {LogoHero}
        alt = 'Foto Logo'
        width={128}
        height={128}
        />
        <h1 className="text-5xl font-semibold font-outfit leading-tight mb-3 capitalize"> Sistem Informasi Rukun Tetangga </h1>
      <p className="text-xl text-gray-300 mb-8 ">Kabupaten Banyuwangi</p>
      <div className=" grid md:flex sm:grid gap-5 rounded-2xl">
      <Link href='/login' className='bg-[#01467D] text-white font-outfit font-semibold hover:bg-blue-800
      py-2 px-6 md:px-10 text-lg hover:scale-105 hover:shadow-lg
      '>Mulai Sekarang</Link>
      <Link href='/kontak' className='bg-transparent border border-white text-white font-outfit font-semibold hover:bg-blue-800
      py-2 px-6 md:px-10 text-lg hover:scale-105 hover:shadow-lg
      '>Kontak Kami</Link>
      </div>
     
      
      
      </div>
    </div>
  )
}

export default Hero
