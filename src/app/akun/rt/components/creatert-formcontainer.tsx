"use client";

import React, { useEffect, useState } from "react";
import CreateFormRT from "./create-form-rt";
import { createRT } from "@/app/akun/penduduk/validation/actions";
import { useActionState } from "react";

interface RTData {
  nomor_rt: string;
  nik: string;
  nama_lengkap: string;
  no_hp?: string;
  alamat?: string;
  provinsi?: string;
  kabupaten_kota?: string;
  kecamatan?: string;
  desa_kelurahan?: string;
}

// --- fetch wilayah helper ---
async function fetchProvinces() {
  const res = await fetch("https://wilayah.id/api/provinces.json");
  if (!res.ok) throw new Error("Gagal fetch provinces");
  return res.json();
}
async function fetchRegencies(provinceCode: string) {
  const res = await fetch(`https://wilayah.id/api/regencies/${provinceCode}.json`);
  if (!res.ok) throw new Error("Gagal fetch regencies");
  return res.json();
}
async function fetchDistricts(regencyCode: string) {
  const res = await fetch(`https://wilayah.id/api/districts/${regencyCode}.json`);
  if (!res.ok) throw new Error("Gagal fetch districts");
  return res.json();
}
async function fetchVillages(districtCode: string) {
  const res = await fetch(`https://wilayah.id/api/villages/${districtCode}.json`);
  if (!res.ok) throw new Error("Gagal fetch villages");
  return res.json();
}

// --- Container Component ---
export default function CreateRTFormContainer({ defaultValues }: { defaultValues?: RTData }) {
  const [, formAction] = useActionState(createRT, null);

  const [provinces, setProvinces] = useState<{ code: string; name: string }[]>([]);
  const [regencies, setRegencies] = useState<{ code: string; name: string }[]>([]);
  const [districts, setDistricts] = useState<{ code: string; name: string }[]>([]);
  const [villages, setVillages] = useState<{ code: string; name: string }[]>([]);

  // --- fetch provinsi awal ---
  useEffect(() => {
    fetchProvinces().then(setProvinces).catch(console.error);
  }, []);

  // --- handlers dropdown ---
  const handleProvince = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    const code = ev.target.value;
    if (!code) return setRegencies([]);
    fetchRegencies(code).then(setRegencies).catch(console.error);
  };

  const handleRegency = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    const code = ev.target.value;
    if (!code) return setDistricts([]);
    fetchDistricts(code).then(setDistricts).catch(console.error);
  };

  const handleDistrict = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    const code = ev.target.value;
    if (!code) return setVillages([]);
    fetchVillages(code).then(setVillages).catch(console.error);
  };

  // --- submit form ---
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget); // buat FormData dari form
    formAction(formData);
  };

  return (
    <CreateFormRT
      provinsiList={provinces}
      kabupatenList={regencies}
      kecamatanList={districts}
      desaList={villages}
      defaultValues={defaultValues}
      onChangeProvince={handleProvince}
      onChangeRegency={handleRegency}
      onChangeDistrict={handleDistrict}
      onSubmit={handleSubmit}
    />
  );
}
