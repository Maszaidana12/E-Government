import Image from "next/image";
import { TentangImage } from "@/components/index";

const HeaderSection = ({
    title,
    subTitle
}:{
    title:string;
    subTitle:string;
}) => {
  return (
   <header className="mt-10 relative h-60 text-white overflow-hidden">
    <div className="absolute inset-0">
        <Image 
        src ={TentangImage}
        alt ='Header Image'
        fill className="object-cover object-center "
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <div className="relative flex flex-col justify-center items-center h-60 text-center pt-14">
        <h1 className="text-4xl font-bold font-outfit leading-tight capitalize">{title}</h1>
        <p className="text-xl text-gray-300">{subTitle}</p>
    </div>
   </header>
  )
}

export default HeaderSection
