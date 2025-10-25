"use client";


import { useFormStatus } from "react-dom"

export const LoginButton = ()=> {
    const {pending} = useFormStatus(); 
    return (
         <button
          type="submit"
          disabled = {pending}
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          {pending ? "Masuk..." : "Login"}
        </button>
    )
}

