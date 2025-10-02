"use client";

import { useActionState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"; 
import { signUpCredentials } from "lib/actions";
import { PasswordInput } from "../PasswordInput";
import { RegisterButton } from "@/components/auth/button";


const FormRegister = () => {
  const [state, formAction] = useActionState(signUpCredentials, null);
   const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();


  useEffect(() => {
    if (state?.success) {
      setShowSuccess(true); // tampilkan pesan sukses
      const timer = setTimeout(() => {
        router.push("/login"); // redirect setelah 3 detik
      }, 3000);

      return () => clearTimeout(timer); // bersihin timer kalau component unmount
    }
  }, [state, router]);



  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br">
  <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6 sm:p-8">
    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
      Daftar Akun E-Government
    </h2>
    <p className="text-center text-gray-500 text-sm mb-8">
      Silakan masukkan data diri Anda
    </p>


     {showSuccess && (
          <p className="bg-green-100 text-green-700 text-center py-2 rounded mb-4 sm:col-span-2">
            Pendaftaran berhasil! Redirect ke login...
          </p>
        )}


    <form
      action={formAction}
      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
    >
      {/* NIK */}
      <div className="sm:col-span-1">
        <label htmlFor="nik" className="block text-sm font-medium text-gray-700 mb-1">
          NIK
        </label>
        <input
          type="text"
          id="nik"
          name="nik"
          maxLength={16}
          pattern="[0-9]{16}"
          placeholder="16 Digit NIK"
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          required
        />
        <p className="text-xs text-red-500 mt-1">{state?.error?.nik}</p>
      </div>

      {/* KK */}
      <div className="sm:col-span-1">
        <label htmlFor="kk" className="block text-sm font-medium text-gray-700 mb-1">
          No KK
        </label>
        <input
          type="text"
          id="kk"
          name="kk"
          maxLength={16}
          pattern="[0-9]{16}"
          placeholder="16 Digit KK"
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          required
        />
        <p className="text-xs text-red-500 mt-1">{state?.error?.kk}</p>
      </div>

      {/* Nama */}
      <div className="sm:col-span-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nama Lengkap
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nama Lengkap"
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          required
        />
        <p className="text-xs text-red-500 mt-1">{state?.error?.name}</p>
      </div>

      {/* Username */}
      <div className="sm:col-span-2">
        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Buat Username"
          className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          required
        />
        <p className="text-xs text-red-500 mt-1">{state?.error?.username}</p>
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
         <PasswordInput id="password" placeholder="Password" />
      </div>

      {/* Confirm Password */}
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
          Ulangi Password
        </label>
          <PasswordInput id="confirmPassword" placeholder="Konfirmasi Password" />
      </div>

      {/* Checkbox */}
      <div className="sm:col-span-2 flex items-center gap-2">
        <input
          type="checkbox"
          id="agree"
          name="agree"
          required
          className="h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
        <label htmlFor="agree" className="text-gray-700 text-sm">
          Saya setuju dengan{" "}
          <span className="text-blue-600">syarat & ketentuan</span>
        </label>
      </div>

      {/* Error Global */}
      {state?.message && (
        <p className="text-xs text-center text-red-500 sm:col-span-2">
          {state.message}
        </p>
      )}

      {/* Button */}
      <div className="sm:col-span-2">
       <RegisterButton />
        {state?.success === false && (
          <p className="text-red-500 text-center mt-2">{state.message}</p>
        )}
      </div>
    </form>

    <p className="text-sm text-center text-gray-600 mt-6">
      Sudah punya akun?{" "}
      <Link href="/login" className="text-blue-600 hover:underline">
        Login di sini
      </Link>
    </p>
  </div>
</div>

  );
};

export default FormRegister;
