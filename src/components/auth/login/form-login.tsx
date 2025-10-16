"use client";

import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SignInCredentials } from "lib/actions";

import { useActionState } from "react"; // pastikan ini udah ada

const LoginPage = () => {
  const [state, formAction] = useActionState(SignInCredentials, null);
  const [showMessage, setShowMessage] = useState(false);

  // Pesan setelah register
  useEffect(() => {
    const registered = sessionStorage.getItem("registered");
    if (registered === "true") {
      setShowMessage(true);
      sessionStorage.removeItem("registered");
    }
  }, []);

  // Auto redirect kalau sudah login   

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login Akun
        </h2>

        {/* Pesan Register */}
        {showMessage && (
          <p className="bg-green-100 text-green-700 text-center py-2 rounded mb-4">
            Pendaftaran berhasil! Silakan login.
          </p>
        )}

        <form action={formAction} className="space-y-5">
          {state?.message ? (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100"
              role="alert"
            >
              <span className="font-outfit">{state?.message}</span>
            </div>
          ) : null}

          {/* NIK */}
          <div>
            <label
              htmlFor="nik"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="nik"
              name="nik"
              maxLength={16}
              placeholder="Masukkan Username"
              className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-3 py-2 text-gray-900 outline-none transition"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Masukkan Password Anda"
              className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg px-3 py-2 text-gray-900 outline-none transition"
              required
            />
          </div>

          {/* Button Masuk */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition"
          >
            Masuk
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">atau</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 hover:bg-gray-100 transition"
        >
          <FcGoogle size={22} />
          <span className="text-gray-700 font-medium">Lanjut dengan Google</span>
        </button>

        {/* Extra Links */}
        <p className="text-sm text-gray-500 text-center mt-6">
          Belum punya akun?{" "}
          <a href="/register" className="text-blue-600 hover:underline font-medium">
            Daftar
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
