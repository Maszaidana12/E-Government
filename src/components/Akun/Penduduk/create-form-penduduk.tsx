"use client";

import { useActionState } from "react";
import { DataPendudukCreate } from "@/app/akun/penduduk/validation/actions";

const CreateFormPenduduk = () => {
  const [state, formAction] = useActionState(DataPendudukCreate, null)
  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-6">Tambah Data Penduduk</h2>

      <form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nik" className="block text-sm font-medium mb-1">NIK</label>
          <input
            type="text"
            id="nik"
            name="nik"
            placeholder="Masukkan NIK..."
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          <div id = "nik-error" aria-live = "polite" aria-atomic = "true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.nik}</p>
          </div>
        </div>

        <div>
          <label htmlFor="nama" className="block text-sm font-medium mb-1">Nama Lengkap</label>
          <input
            type="text"
            id="nama"
            name="nama"
            placeholder="Masukkan Nama..."
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          <div id = "nama-error" aria-live = "polite" aria-atomic = "true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.nama}</p>
          </div>
        </div>

        <div>
          <label htmlFor="jenis_kelamin" className="block text-sm font-medium mb-1">Jenis Kelamin</label>
          <select
            id="jenis_kelamin"
            name="jenis_kelamin"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Pilih Jenis Kelamin</option>
            <option value="laki_laki">Laki-laki</option>
            <option value="perempuan">Perempuan</option>
          </select>
          <div id = "jenis_kelamin-error" aria-live = "polite" aria-atomic = "true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.jenis_kelamin}</p>
          </div>
        </div>

        <div>
          <label htmlFor="tempat_lahir" className="block text-sm font-medium mb-1">Tempat Lahir</label>
          <input
            type="text"
            id="tempat_lahir"
            name="tempat_lahir"
            placeholder="Masukkan Tempat Lahir..."
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          <div id = "tempat_lahir-error" aria-live = "polite" aria-atomic = "true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.tempat_lahir}</p>
          </div>
        </div>

        <div>
          <label htmlFor="tanggal_lahir" className="block text-sm font-medium mb-1">Tanggal Lahir</label>
          <input
            type="date"
            id="tanggal_lahir"
            name="tanggal_lahir"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          <div id = "tanggal_lahir-error" aria-live = "polite" aria-atomic = "true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.tanggal_lahir}</p>
          </div>
        </div>

        <div>
          <label htmlFor="agama" className="block text-sm font-medium mb-1">Agama</label>
          <select
            id="agama"
            name="agama"
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
          <div id = "agama-error" aria-live = "polite" aria-atomic = "true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.agama}</p>
          </div>
        </div>


           <div>
          <label htmlFor="pendidikan" className="block text-sm font-medium mb-1"> Pendidikan</label>
          <select
            id="pendidikan"
            name="pendidikan"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="Tidak_Sekolah">Tidak Sekolah</option>
            <option value="SD">SD</option>
            <option value="SMP">SMP</option>
            <option value="SMA">SMA</option>
            <option value="Diploma">Diploma</option>
            <option value="S1">S1</option>
            <option value="S2">S2</option>
            <option value="S3">S3</option>
          </select>
          <div id = "pendidikan-error" aria-live = "polite" aria-atomic = "true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.pendidikan}</p>
          </div>
        </div>

         <div>
          <label htmlFor="golongan_darah" className="block text-sm font-medium mb-1">Golongan Darah</label>
          <select
            id="golongan_darah"
            name="golongan_darah"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Golongan Darah</option>
            <option value="A">A</option>
            <option value="B">AB</option>
            <option value="B">B</option>
            <option value="O">O</option>
            <option value="Tidak_Tahu">Tidak Tahu</option>
          </select>
          <div id = "golongan_darah-error" aria-live = "polite" aria-atomic = "true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.golongan_darah}</p>
          </div>
        </div>

        <div>
          <label htmlFor="pekerjaan" className="block text-sm font-medium mb-1">Pekerjaan</label>
          <input
            type="text"
            id="pekerjaan"
            name="pekerjaan"
            placeholder="Masukkan Pekerjaan..."
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          <div id = "pekerjaan-error" aria-live = "polite" aria-atomic = "true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.pekerjaan}</p>
          </div>
        </div>

        <div>
          <label htmlFor="status_perkawinan" className="block text-sm font-medium mb-1">Status Perkawinan</label>
          <select
            id="status_perkawinan"
            name="status_perkawinan"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Status Perkawinan</option>
            <option value="Belum_Kawin">Belum Kawin</option>
            <option value="Kawin">Kawin</option>
            <option value="Cerai_Hidup">Cerai Hidup</option>
            <option value="Cerai_Mati">Cerai Mati</option>
          </select>
          <div id = "status_perkawinan-error" aria-live = "polite" aria-atomic = "true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.status_perkawinan}</p>
          </div>
        </div>
        
         <div>
          <label htmlFor="kewarganegaraan" className="block text-sm font-medium mb-1">Kewarganegaraan</label>
          <select
            id="kewarganegaraan"
            name="kewarganegaraan"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Kewarganegaraan</option>
            <option value="WNI">WNI</option>
            <option value="WNA">WNA</option>
          </select>
          <div id = "kewarganegaraan-error" aria-live = "polite" aria-atomic = "true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.kewarganegaraan}</p>
          </div>
        </div>

         <div>
          <label htmlFor="status_hubungan" className="block text-sm font-medium mb-1">Status Hubungan</label>
          <select
            id="status_hubungan"
            name="status_hubungan"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Status Hubungan</option>
            <option value="Kepala_Keluarga">Kepala Keluarga</option>
            <option value="Istri">Istri</option>
            <option value="Anak">Anak</option>
            <option value="Orang_Tua">Orang Tua</option>
          </select>
          <div id = "status_hubungan-error" aria-live = "polite" aria-atomic = "true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.status_hubungan}</p>
          </div>
        </div>
        <div id = "message-error" aria-live = "polite" aria-atomic = "true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.nama}</p>
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
 