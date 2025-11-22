"use client";

import { useActionState } from "react";
import { DataKeluargaCreate } from "@/app/akun/penduduk/validation/actions";
import { SubmitButton } from "../../buttons";


const CreateFormDataKeluarga = () => {
  const [state, formAction] = useActionState(DataKeluargaCreate, null)
  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-6">Tambah Data Keluarga</h2>

      <form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="no_kk" className="block text-sm font-medium mb-1">No KK</label>
          <input
            type="text"
            id="no_kk"
            name="no_kk"
            maxLength={16}
            placeholder="Masukkan Nomor KK..."
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          <div id = "no_kk-error" aria-live = "polite" aria-atomic = "true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.no_kk}</p>
          </div>
        </div>

         <div>
          <label htmlFor="alamat" className="block text-sm font-medium mb-1">Alamat</label>
          <input
            type="text"
            id="alamat"
            name="alamat"
            placeholder="Masukkan Alamat..."
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          <div id = "nama-error" aria-live = "polite" aria-atomic = "true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.alamat}</p>
          </div>
        </div>

         <div>
          <label htmlFor="nomor_rt" className="block text-sm font-medium mb-1">No RT</label>
          <input
            type="text"
            id="no_rt"
            name="no_rt"
            placeholder="Masukkan Nama..."
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          <div id = "nama-error" aria-live = "polite" aria-atomic = "true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.nomor_rt}</p>
          </div>
        </div>

          <div>
          <label htmlFor="kode_pos" className="block text-sm font-medium mb-1">Kode Pos</label>
          <input
            type="text"
            id="kode_pos"
            name="kode_pos"
            placeholder="Masukkan Kode Pos..."
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          <div id = "kode_pos-error" aria-live = "polite" aria-atomic = "true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.kode_pos}</p>
          </div>
        </div>

          <div>
          <label htmlFor="desa_kelurahan" className="block text-sm font-medium mb-1">Desa/Kelurahan</label>
          <input
            type="text"
            id="desa_kelurahan"
            name="desa_kelurahan"
            placeholder="Masukkan Desa/Kelurahan..."
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          <div id = "desa_kelurahan-error" aria-live = "polite" aria-atomic = "true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.desa_kelurahan}</p>
          </div>
        </div>

          <div>
          <label htmlFor="kecamatan" className="block text-sm font-medium mb-1">Kecamatan</label>
          <input
            type="text"
            id="kecamatan"
            name="kecamatan"
            placeholder="Masukkan Kecamatan..."
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          <div id = "kecamatan-error" aria-live = "polite" aria-atomic = "true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.kecamatan}</p>
          </div>
        </div>

          <div>
          <label htmlFor="kabupaten_kota" className="block text-sm font-medium mb-1">Kabupaten/Kota</label>
          <input
            type="text"
            id="kabupaten_kota"
            name="kabupaten_kota"
            placeholder="Masukkan Kabupaten/Kota..."
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          <div id = "kabupaten_kota-error" aria-live = "polite" aria-atomic = "true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.kabupaten_kota}</p>
          </div>
        </div>

         <div>
          <label htmlFor="provinsi" className="block text-sm font-medium mb-1">Provinsi</label>
          <input
            type="text"
            id="provinsi"
            name="provinsi"
            placeholder="Masukkan Provinsi..."
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          <div id = "provinsi-error" aria-live = "polite" aria-atomic = "true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.provinsi}</p>
          </div>
        </div>    
        <div className="md:col-span-2 flex justify-end mt-4">
          <SubmitButton label= "Create" />
        </div>
      </form>
    </div>
  )
}

export default CreateFormDataKeluarga
 