"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { updateProfile, getProfileData } from "@/app/profile/actions"; // 👈 Import Server Actions
import { useProfile } from "@/app/context/ProfileContext"; // 👈 Untuk update Navbar

export default function ProfileForms() {
  
  // State untuk form data awal dan preview foto
  const [form, setForm] = useState({
    nama: "",
    nik: "",
    previewFoto: "", // URL untuk preview di browser
    foto: null as File | null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const { setProfileImage } = useProfile(); // Hook dari context

  // 1. Load Data Awal Menggunakan Server Action
  useEffect(() => {
    async function loadInitialData() {
      const result = await getProfileData();
      if (result.user) {
        setForm((prev) => ({
          ...prev,
          nama: result.user.nama || "",
          nik: result.user.nik || "",
          previewFoto: result.user.previewFoto || "",
        }));
      } else {
         console.error(result.error);
      }
    }
    loadInitialData();
  }, []);

  // Handler untuk input text dan file
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      setForm((prev) => ({
        ...prev,
        foto: file,
        previewFoto: URL.createObjectURL(file), // URL lokal untuk preview
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // 2. Submit Form Menggunakan Server Action
  const handleAction = async (formData: FormData) => {
    setIsLoading(true);
    
    // Tambahkan foto ke FormData secara manual jika ada (karena state `foto` adalah File)
    if (form.foto) {
        formData.append("foto", form.foto);
    }
    
    // Server Action
    const result = await updateProfile(formData); 

    if (result.status === 200) {
      alert(result.message);
      
      // Update Context global (Navbar)
      if (result.user?.images) {
          setProfileImage(`/uploads/${result.user.images}`);
      }
      
    } else {
      alert(result.message);
    }
    setIsLoading(false);
  };

  return (
    // ⚠️ Ganti onSubmit={handleSubmit} dengan action={handleAction}
    <form
      action={handleAction} 
      className="w-full mt-[10vh] max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl border border-slate-200"
    >
      <h2 className="text-xl font-semibold text-slate-700 text-center">
        Profil Pengguna
      </h2>

      {/* Foto Profil */}
      <div className="flex flex-col items-center gap-4 mb-8">
        <label className="w-28 h-28 bg-slate-100 rounded-full flex items-center justify-center overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-400 transition">
          {form.previewFoto ? (
            <Image
              src={form.previewFoto}
              alt="Preview"
              width={112}
              height={112}
              className="object-cover w-full h-full"
            />
          ) : (
            <span className="text-slate-400 text-sm">Upload Foto</span>
          )}

          <input
            type="file"
            name="foto-file-input" // 👈 Name berbeda, karena kita ambil dari state foto
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
        </label>
      </div>

      {/* NIK */}
      <div>
        <label className="block text-sm font-medium text-slate-600 mt-4">NIK</label>
        <input
          type="text"
          name="nik"
          value={form.nik}
          disabled
          className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-100 p-2.5 text-slate-500"
        />
      </div>

      {/* Nama */}
      <div>
        <label className="block text-sm font-medium text-slate-600 mt-4">Nama Lengkap</label>
        <input
          type="text"
          name="nama"
          value={form.nama}
          onChange={handleChange}
          className="mt-4 w-full rounded-lg border border-slate-300 p-2.5"
          placeholder="Masukkan nama lengkap"
        />
      </div>

      {/* Password (Baru) - TAMBAHKAN KEMBALI */}
      <div>
        <label className="block text-sm font-medium text-slate-600 mt-4">Password Baru (Opsional)</label>
        <input
          type="password"
          name="password" // 👈 Pastikan name ini sesuai dengan Server Action
          className="mt-4 w-full rounded-lg border border-slate-300 p-2.5"
          placeholder="Isi jika ingin mengganti password"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-2.5 mt-8 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium disabled:bg-slate-400 transition"
      >
        {isLoading ? 'Menyimpan...' : 'Simpan Perubahan'}
      </button>
    </form>
  );
}