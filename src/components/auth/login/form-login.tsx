import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login Akun
        </h2>

        <form action="" className="space-y-5">
          {/* NIK */}
          <div>
            <label
              htmlFor="nik"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              NIK
            </label>
            <input
              type="text"
              id="nik"
              name="nik"
              maxLength={16}
              pattern="[0-9]{16}"
              placeholder="Masukkan NIK (16 Digit)"
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

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition"
          >
            Masuk
          </button>
        </form>

        {/* Extra Links */}
        <p className="text-sm text-gray-500 text-center mt-6">
          Belum punya akun?{" "}
          <a
            href="/auth/register"
            className="text-blue-600 hover:underline font-medium"
          >
            Daftar
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
