import Image from "next/image"
import HeaderSection from "@/components/HeroSection/HeaderSection"
import { TentangImage } from "@/components"
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5"

const TentangPage = () => {
  return (
    <div>
      <HeaderSection title = 'Tentang Kami' subTitle="" />
      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
            <Image src ={TentangImage} 
            alt="Gambar Tentang Kami"
            width={500}
            height={500}
            />
            <div>
                <h1 className="text-4xl font-outfit font-semibold text-gray-900 mb-4">hahahihihuuhu</h1>
                <p className="text-gray-700 py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ad corrupti voluptatum quasi pariatur placeat temporibus quam dolore ex magni, aperiam asperiores? 
                    Ipsam dolore sapiente aliquid modi adipisci sint veniam accusantium reprehenderit obcaecati excepturi 
                    dignissimos vitae explicabo fugiat deserunt iusto deleniti omnis aliquam minima voluptatum, incidunt tenetur 
                    vel asperiores quidem? Sint dicta sit debitis iste quis corporis quas pariatur quam tempore. Ducimus magni accusantium 
                    dolor enim a at qui iste nesciunt, repellendus quia non. Molestiae ullam vel consectetur id a, maiores vitae molestias. 
                    Accusamus corporis optio, enim impedit, provident harum dignissimos quae quia molestiae placeat rerum repellendus sunt odit, 
                    fugit corrupti.</p>
                    <ul className="list-item space-y-6 pt-8">
                        <li className="flex gap-5">
                            <div className="">
                                <div className="flex-none mt-1"></div>
                                <IoEyeOutline className="size-7"/>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold mb-1 font-outfit">Visi : </h4>
                                <p className="text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                    Blanditiis quos facere consectetur necessitatibus? Explicabo fuga, itaque corporis impedit
                                     tempore eius?</p>
                            </div>
                        </li>
                         <li className="flex gap-5">
                            <div className="">
                                <div className="flex-none mt-1"></div>
                                <IoLocateOutline className="size-7"/>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold mb-1 font-outfit">Misi : </h4>
                                <p className="text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                    Blanditiis quos facere consectetur necessitatibus? Explicabo fuga, itaque corporis impedit
                                     tempore eius?</p>
                            </div>
                        </li>
                    </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TentangPage
