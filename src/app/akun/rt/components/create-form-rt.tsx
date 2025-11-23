"use client";

import React from "react";
import { SubmitButton } from "@/components/Akun/buttons";

interface RTFormUIProps {
  provinsiList: { code: string; name: string }[];
  kabupatenList: { code: string; name: string }[];
  kecamatanList: { code: string; name: string }[];
  desaList: { code: string; name: string }[];
  defaultValues?: {
    nomor_rt?: string;
    nik?: string;
    nama_lengkap?: string;
    no_hp?: string;
    alamat?: string;
    provinsi?: string;
    kabupaten_kota?: string;
    kecamatan?: string;
    desa_kelurahan?: string;
  };
  errors?: Record<string, string>;
  onChangeProvince: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeRegency: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeDistrict: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
  onSubmit: (ev: React.FormEvent<HTMLFormElement>) => void;
}

export default function CreateFormRT({
  provinsiList,
  kabupatenList,
  kecamatanList,
  desaList,
  defaultValues,
  errors = {},
  onChangeProvince,
  onChangeRegency,
  onChangeDistrict,
  onSubmit,
}: RTFormUIProps) {
  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-6">Tambah RT</h2>
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <label className="block text-sm font-medium mb-1">Nomor RT</label>
          <input
            name="nomor_rt"
            defaultValue={defaultValues?.nomor_rt}
            required
            placeholder="contoh: 001"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
          {errors?.nomor_rt && <p className="mt-1 text-sm text-red-500">{errors.nomor_rt}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">NIK Ketua RT</label>
          <input
            name="nik"
            defaultValue={defaultValues?.nik}
            readOnly
            placeholder="auto-fill dari penduduk"
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Nama Lengkap Ketua RT</label>
          <input
            name="nama_lengkap"
            defaultValue={defaultValues?.nama_lengkap}
            readOnly
            placeholder="auto-fill dari penduduk"
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">No HP</label>
          <input
            name="no_hp"
            defaultValue={defaultValues?.no_hp}
            placeholder="Opsional"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Alamat Jalan</label>
          <input
            name="alamat"
            defaultValue={defaultValues?.alamat}
            placeholder="Opsional"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Dropdown Wilayah */}
        <div>
          <label className="block text-sm font-medium mb-1">Provinsi</label>
          <select
            name="provinsi"
            value={defaultValues?.provinsi || ""}
            onChange={onChangeProvince}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- pilih --</option>
            {provinsiList.map((p) => (
              <option key={p.code} value={p.code}>{p.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Kabupaten/Kota</label>
          <select
            name="kabupaten_kota"
            value={defaultValues?.kabupaten_kota || ""}
            onChange={onChangeRegency}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- pilih --</option>
            {kabupatenList.map((r) => (
              <option key={r.code} value={r.code}>{r.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Kecamatan</label>
          <select
            name="kecamatan"
            value={defaultValues?.kecamatan || ""}
            onChange={onChangeDistrict}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- pilih --</option>
            {kecamatanList.map((d) => (
              <option key={d.code} value={d.code}>{d.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Desa/Kelurahan</label>
          <select
            name="desa_kelurahan"
            value={defaultValues?.desa_kelurahan || ""}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- pilih --</option>
            {desaList.map((v) => (
              <option key={v.code} value={v.name}>{v.name}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2 flex justify-end mt-4">
          <SubmitButton label="Simpan" />
        </div>
      </form>
    </div>
  );
}
