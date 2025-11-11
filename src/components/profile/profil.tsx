"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProfileForm() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    password: "",
    nik: "", // contoh data (biasanya dari session / API)
    foto: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    // TODO: kirim ke API (misal /api/profile/update)
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mt-[10vh] max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl border border-slate-200"
    >
      <h2 className="text-xl font-semibold text-slate-700 text-center">
        Profil Pengguna
      </h2>

      {/* Foto Profil */}
      <div className="flex flex-col items-center gap-4 mb-8">
        <label className="w-28 h-28 bg-slate-100 rounded-full flex items-center justify-center overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-400 transition">
          {form.foto ? (
            <Image
              src={URL.createObjectURL(form.foto)}
              alt="Preview"
              className="object-cover w-full h-full"
            />
          ) : (
            <span className="text-slate-400 text-sm">Upload Foto</span>
          )}
          <input
            type="file"
            name="foto"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
        </label>
      </div>

      {/* NIK */}
           <div>
        <label className="block text-sm font-medium text-slate-600 mt-4">
          NIK
        </label>
        <input
          type="text"
          name="nik"
          value={form.nik}
          disabled
          className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-100 p-2.5 text-slate-500 gap-2" 
        />
      </div>


      <div>
        <label className="block text-sm font-medium text-slate-600 mt-4">
          Nama Lengkap
        </label>
        <input
          type="text"
          name="nama"
          value={form.nama}
          onChange={handleChange}
          className="mt-4 w-full rounded-lg border border-slate-300 p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Masukkan nama lengkap"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-slate-600 mt-4">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="mt-4 w-full rounded-lg border border-slate-300 p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Masukkan email"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-slate-600 mt-4">
          Ubah Password
        </label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="mt-4 w-full rounded-lg border border-slate-300 p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="••••••••"
        />
      </div>

     
     

      {/* Tombol */}
      <button
        type="submit"
        className="w-full py-2.5 mt-8 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
      >
        Simpan Perubahan
      </button>
    </form>
  );
}
