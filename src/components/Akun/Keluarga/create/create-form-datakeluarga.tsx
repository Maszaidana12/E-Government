"use client";

import { useActionState, useEffect } from "react";
import { DataKeluargaCreate } from "@/app/akun/penduduk/validation/actions";
import { SubmitButton } from "../../buttons";
import { useRouter } from "next/navigation";

const CreateFormDataKeluarga = () => {
  const router = useRouter();
  const [state, formAction] = useActionState(DataKeluargaCreate, null);

  // Redirect jika success
  useEffect(() => {
    if (state?.success) {
      router.push("/akun/datakeluarga");
    }
  }, [state,router]);

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-6">Tambah Data Keluarga</h2>

      <form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* No KK */}
        <div>
          <label className="text-sm mb-1">No KK</label>
          <input
            type="text"
            name="no_kk"
            maxLength={16}
            className="w-full border rounded-lg p-2"
          />
          <p className="text-red-500 text-sm">{state?.Error?.no_kk}</p>
        </div>

        {/* Alamat (auto fill barang RT) */}
        <div>
          <label className="text-sm mb-1">Alamat</label>
          <input
            type="text"
            name="alamat"
            placeholder="Data Alamat terisi Otomatis"
            disabled
            value={state?.wilayah?.alamat ?? ""}
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>

        {/* Nomor RT (auto fill) */}
        <div>
          <label className="text-sm mb-1">Nomor RT</label>
          <input
            type="text"
            disabled
            placeholder="Nomor RT terisi Otomatis"
            value={state?.wilayah?.nomor_rt ?? ""}
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>

        {/* Provinsi */}
        <div>
          <label className="text-sm mb-1">Provinsi</label>
          <input
            type="text"
            disabled
            placeholder="Provinsi terisi Otomatis"
            value={state?.wilayah?.provinsi ?? ""}
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>

        {/* Kabupaten */}
        <div>
          <label className="text-sm mb-1">Kabupaten/Kota</label>
          <input
            type="text"
            disabled
            placeholder="Kabupaten/Kota terisi Otomatis"
            value={state?.wilayah?.kabupaten_kota ?? ""}
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>

        {/* Kecamatan */}
        <div>
          <label className="text-sm mb-1">Kecamatan</label>
          <input
            type="text"
            disabled
            placeholder="Kecamatan terisi Otomatis"
            value={state?.wilayah?.kecamatan ?? ""}
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>

        {/* Desa */}
        <div>
          <label className="text-sm mb-1">Desa/Kelurahan</label>
          <input
            type="text"
            disabled
            placeholder="Desa terisi Otomatis"
            value={state?.wilayah?.desa_kelurahan ?? ""}
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>

        {/* Kode pos */}
        <div>
          <label className="text-sm mb-1">Kode Pos</label>
          <input
            type="text"
            disabled
            placeholder="Kode_pos terisi Otomatis"
            value={state?.wilayah?.kode_pos ?? ""}
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>

        <div className="md:col-span-2 flex justify-end mt-4">
          <SubmitButton label="Create" />
        </div>
      </form>
    </div>
  );
};

export default CreateFormDataKeluarga;
