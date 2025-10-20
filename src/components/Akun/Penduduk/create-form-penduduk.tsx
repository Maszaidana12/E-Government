"use client";

import { useState } from "react";

const CreateFormPenduduk = () => {
    const [formData, setFormData] = useState ({
        nik: "",
        nama: "",
        jenis_kelamin: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        agama: "",
        alamat: "",
        pekerjaan: "",
        golongan_darah : " ",
        status_perkawinan: " ",
        kewarganegaraan: " ",
        status_hubungan: " "
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Data dikirim:", formData);
    // nanti di sini tinggal fetch ke API misalnya POST /api/penduduk
  };




  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-6">Tambah Data Penduduk</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nik" className="block text-sm font-medium mb-1">NIK</label>
          <input
            type="text"
            id="nik"
            name="nik"
            value={formData.nik}
            onChange={handleChange}
            placeholder="Masukkan NIK..."
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="nama" className="block text-sm font-medium mb-1">Nama Lengkap</label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            placeholder="Masukkan Nama..."
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="jenis_kelamin" className="block text-sm font-medium mb-1">Jenis Kelamin</label>
          <select
            id="jenis_kelamin"
            name="jenis_kelamin"
            value={formData.jenis_kelamin}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Pilih Jenis Kelamin</option>
            <option value="L">Laki-laki</option>
            <option value="P">Perempuan</option>
          </select>
        </div>

        <div>
          <label htmlFor="tempat_lahir" className="block text-sm font-medium mb-1">Tempat Lahir</label>
          <input
            type="text"
            id="tempat_lahir"
            name="tempat_lahir"
            value={formData.tempat_lahir}
            onChange={handleChange}
            placeholder="Masukkan Tempat Lahir..."
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="tanggal_lahir" className="block text-sm font-medium mb-1">Tanggal Lahir</label>
          <input
            type="date"
            id="tanggal_lahir"
            name="tanggal_lahir"
            value={formData.tanggal_lahir}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="agama" className="block text-sm font-medium mb-1">Agama</label>
          <select
            id="agama"
            name="agama"
            value={formData.agama}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Pilih Agama</option>
            <option value="Islam">Islam</option>
            <option value="Kristen">Kristen</option>
            <option value="Katolik">Katolik</option>
            <option value="Hindu">Hindu</option>
            <option value="Buddha">Buddha</option>
            <option value="Konghucu">Konghucu</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="alamat" className="block text-sm font-medium mb-1">Alamat</label>
          <input
            type="text"
            id="alamat"
            name="alamat"
            value={formData.alamat}
            onChange={handleChange}
            placeholder="Masukkan Alamat Lengkap..."
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="pekerjaan" className="block text-sm font-medium mb-1">Pekerjaan</label>
          <input
            type="text"
            id="pekerjaan"
            name="pekerjaan"
            value={formData.pekerjaan}
            onChange={handleChange}
            placeholder="Masukkan Pekerjaan..."
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="golongan_darah" className="block text-sm font-medium mb-1">Golongan Darah</label>
          <select
            id="golongan_darah"
            name="golongan_darah"
            value={formData.golongan_darah}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Golongan Darah</option>
            <option value="A">A</option>
            <option value="B">AB</option>
            <option value="B">B</option>
            <option value="O">O</option>
          </select>
        </div>

        <div>
          <label htmlFor="status_perkawinan" className="block text-sm font-medium mb-1">Status Perkawinan</label>
          <select
            id="status_perkawinan"
            name="status_perkawinan"
            value={formData.status_perkawinan}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Status Perkawinan</option>
            <option value="Belum_Kawin">Belum Kawin</option>
            <option value="Kawin">Kawin</option>
            <option value="Cerai_Mati">Cerai Hidup</option>
            <option value="Cerai_Mati">Cerai Mati</option>
          </select>
        </div>
        
         <div>
          <label htmlFor="kewarganegaraan" className="block text-sm font-medium mb-1">Kewarganegaraan</label>
          <select
            id="kewarganegaraan"
            name="kewarganegaraan"
            value={formData.kewarganegaraan}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Kewarganegaraan</option>
            <option value="Belum_Kawin">WNI</option>
            <option value="Kawin">WNA</option>
          </select>
        </div>

         <div>
          <label htmlFor="status_hubungan" className="block text-sm font-medium mb-1">Status Hubungan</label>
          <select
            id="status_hubungan"
            name="status_hubungan"
            value={formData.status_hubungan}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Status Hubungan</option>
            <option value="kepala_keluarga">Kepala Keluarga</option>
            <option value="istri">Istri</option>
            <option value="anak">Anak</option>
            <option value="orang_tua">Orang Tua</option>
          </select>
        </div>
        <div className="md:col-span-2 flex justify-end mt-4">
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            Simpan Data
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateFormPenduduk
 