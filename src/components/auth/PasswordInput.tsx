// PasswordInput.tsx
"use client";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const PasswordInput = ({ id, placeholder }: { id: string; placeholder: string }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        id={id}
        name={id}
        placeholder={placeholder}
        className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
        required
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
      >
        {show ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
      </button>
    </div>
  );
};
