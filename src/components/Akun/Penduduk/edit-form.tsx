"use client";

import { useActionState } from "react";
import { DataPendudukUpdate } from "@/app/akun/penduduk/validation/actions";
import { SubmitButton } from "../buttons";
import type{ PendudukUpdateInput} from "@/app/akun/penduduk/validation/validation";

export default function UpdateFormPenduduk({ penduduk }: { penduduk: PendudukUpdateInput}) {
  const [state, formAction] = useActionState(DataPendudukUpdate, null);

  
  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-6">Edit Data Penduduk</h2>

      <form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* field tersembunyi buat id */}
       <input type="hidden" name="id_penduduk" value={penduduk.id_penduduk}/>

        {/* === NIK === */}
        <div>
          <label htmlFor="nik" className="block text-sm font-medium mb-1">NIK</label>
          <input
            type="text"
            id="nik"
            name="nik"
            maxLength={16}
            defaultValue={penduduk.nik}
            placeholder="Masukkan NIK..."
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          <p className="mt-2 text-sm text-red-500">{state?.Error?.nik}</p>
        </div>

        {/* === Nama === */}
        <div>
          <label htmlFor="nama" className="block text-sm font-medium mb-1">Nama Lengkap</label>
          <input
            type="text"
            id="nama"
            name="nama"
            defaultValue={penduduk.nama}
            placeholder="Masukkan Nama..."
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          <p className="mt-2 text-sm text-red-500">{state?.Error?.nama}</p>
        </div>

        {/* === Jenis Kelamin === */}
        <div>
          <label htmlFor="jenis_kelamin" className="block text-sm font-medium mb-1">Jenis Kelamin</label>
          <select
            id="jenis_kelamin"
            name="jenis_kelamin"
            defaultValue={penduduk.jenis_kelamin}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Pilih Jenis Kelamin</option>
            <option value="laki_laki">Laki-laki</option>
            <option value="perempuan">Perempuan</option>
          </select>
          <p className="mt-2 text-sm text-red-500">{state?.Error?.jenis_kelamin}</p>
        </div>

        {/* === Tempat Lahir === */}
        <div>
          <label htmlFor="tempat_lahir" className="block text-sm font-medium mb-1">Tempat Lahir</label>
          <input
            type="text"
            id="tempat_lahir"
            name="tempat_lahir"
            defaultValue={penduduk.tempat_lahir}
            placeholder="Masukkan Tempat Lahir..."
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          <p className="mt-2 text-sm text-red-500">{state?.Error?.tempat_lahir}</p>
        </div>

        {/* === Tanggal Lahir === */}
        <div>
          <label htmlFor="tanggal_lahir" className="block text-sm font-medium mb-1">Tanggal Lahir</label>
          <input
            type="date"
            id="tanggal_lahir"
            name="tanggal_lahir"
            defaultValue={penduduk.tanggal_lahir?.split("T")[0]}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          <p className="mt-2 text-sm text-red-500">{state?.Error?.tanggal_lahir}</p>
        </div>

        {/* === Agama === */}
        <div>
          <label htmlFor="agama" className="block text-sm font-medium mb-1">Agama</label>
          <select
            id="agama"
            name="agama"
            defaultValue={penduduk.agama}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Pilih Agama</option>
            <option value="Islam">Islam</option>
            <option value="Kristen">Kristen</option>
            <option value="Katolik">Katolik</option>
            <option value="Hindu">Hindu</option>
            <option value="Buddha">Buddha</option>
            <option value="Konghucu">Konghucu</option>
             <option value="Kepercayaan">Kepercayaan</option>
          </select>
          <p className="mt-2 text-sm text-red-500">{state?.Error?.agama}</p>
        </div>

        {/* === Pendidikan === */}
        <div>
          <label htmlFor="pendidikan" className="block text-sm font-medium mb-1">Pendidikan</label>
          <select
            id="pendidikan"
            name="pendidikan"
            defaultValue={penduduk.pendidikan}
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
          <p className="mt-2 text-sm text-red-500">{state?.Error?.pendidikan}</p>
        </div>

        {/* === Golongan Darah === */}
        <div>
          <label htmlFor="golongan_darah" className="block text-sm font-medium mb-1">Golongan Darah</label>
          <select
            id="golongan_darah"
            name="golongan_darah"
            defaultValue={penduduk.golongan_darah}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Golongan Darah</option>
            <option value="A">A</option>
            <option value="AB">AB</option>
            <option value="B">B</option>
            <option value="O">O</option>
            <option value="Tidak_Tahu">Tidak Tahu</option>
          </select>
          <p className="mt-2 text-sm text-red-500">{state?.Error?.golongan_darah}</p>
        </div>

        {/* === Pekerjaan === */}
        <div>
          <label htmlFor="pekerjaan" className="block text-sm font-medium mb-1">Pekerjaan</label>
          <input
            type="text"
            id="pekerjaan"
            name="pekerjaan"
            defaultValue={penduduk.pekerjaan}
            placeholder="Masukkan Pekerjaan..."
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          <p className="mt-2 text-sm text-red-500">{state?.Error?.pekerjaan}</p>
        </div>

        {/* === Status Perkawinan === */}
        <div>
          <label htmlFor="status_perkawinan" className="block text-sm font-medium mb-1">Status Perkawinan</label>
          <select
            id="status_perkawinan"
            name="status_perkawinan"
            defaultValue={penduduk.status_perkawinan}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Status Perkawinan</option>
            <option value="Belum_Kawin">Belum Kawin</option>
            <option value="Kawin">Kawin</option>
            <option value="Cerai_Hidup">Cerai Hidup</option>
            <option value="Cerai_Mati">Cerai Mati</option>
          </select>
          <p className="mt-2 text-sm text-red-500">{state?.Error?.status_perkawinan}</p>
        </div>

        {/* === Kewarganegaraan === */}
        <div>
          <label htmlFor="kewarganegaraan" className="block text-sm font-medium mb-1">Kewarganegaraan</label>
          <select
            id="kewarganegaraan"
            name="kewarganegaraan"
            defaultValue={penduduk.kewarganegaraan}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Kewarganegaraan</option>
            <option value="WNI">WNI</option>
            <option value="WNA">WNA</option>
          </select>
          <p className="mt-2 text-sm text-red-500">{state?.Error?.kewarganegaraan}</p>
        </div>

        {/* === Status Hubungan === */}
        <div>
          <label htmlFor="status_hubungan" className="block text-sm font-medium mb-1">Status Hubungan</label>
          <select
            id="status_hubungan"
            name="status_hubungan"
            defaultValue={penduduk.status_hubungan}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Status Hubungan</option>
            <option value="Kepala_Keluarga">Kepala Keluarga</option>
            <option value="Istri">Istri</option>
            <option value="Anak">Anak</option>
            <option value="Orang_Tua">Orang Tua</option>
          </select>
          <p className="mt-2 text-sm text-red-500">{state?.Error?.status_hubungan}</p>
        </div>

        <div className="md:col-span-2 flex justify-end mt-4">
          <SubmitButton label="Edit" />
        </div>
      </form>
    </div>
  );
}
