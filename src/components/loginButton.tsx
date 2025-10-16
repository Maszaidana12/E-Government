import { IoMdLogIn } from "react-icons/io";
export const MasukGoogleButton = () => {
  return (
    <button className="flex items-center justify-center gap-2 w-full bg-blue-700 text-white rounded-sm
     hover:bg-blue-600 cursor-pointer py-3 px-6 font-semibold font-outfit">
     <IoMdLogIn className="size-6"/>
      Masuk dengan Google
    </button>
  )
}


