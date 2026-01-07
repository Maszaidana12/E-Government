"use client";

import React, { useState } from "react";
import { EditKeluargaButton, DeleteKeluargaButton } from "../buttons";
import AnggotaKKPanel from "./anggota-panel";

// --- Type Definitions ---
type RT = {
  alamat: string | null;
  kode_pos: string | null;
  desa_kelurahan: string | null;
  kecamatan: string | null;
  kabupaten_kota: string | null;
  provinsi: string | null;
  nomor_rt: string | null;
};

type AnggotaKeluarga = {
    nik: string;
    nama: string;
    status_hubungan: string; 

}

export type DaftarKeluarga = {
  id_kk: number;
  no_kk: string;
  alamat: string | null;
  nomor_rt: string | null;
  rt?: RT | null;
  kode_pos: string | null;
  desa_kelurahan: string | null;
  kecamatan: string | null;
  kabupaten_kota: string | null;
  provinsi: string | null;
  anggota_keluarga: AnggotaKeluarga[];
};

interface Props {
  data: DaftarKeluarga[];
}

const kolom = [
  { label: "ID", key: "id_kk" },
  { label: "No KK", key: "no_kk" },
  { label: "Alamat", key: "alamat" },
  { label: "Nomor RT", key: "nomor_rt" },
  { label: "Kode Pos", key: "kode_pos" },
  { label: "Desa/Kelurahan", key: "desa_kelurahan" },
  { label: "Kecamatan", key: "kecamatan" },
  { label: "Kabupaten", key: "kabupaten_kota" },
  { label: "Provinsi", key: "provinsi" },
  { label: "Aksi", key: "actions" },
] as const;

export default function TabelDataKeluarga({ data }: Props) {
  const [openRow, setOpenRow] = useState<string | null>(null);

  const getCellValue = (item: DaftarKeluarga, colKey: string) => {
  if (colKey === "actions") {
    return (
      <div className="flex items-center justify-center gap-2">
        <EditKeluargaButton id={item.id_kk} />
        <DeleteKeluargaButton id={item.id_kk} />
      </div>
    );
  }
  return String(item[colKey as keyof DaftarKeluarga] ?? "");
};

  return (
    <div className="w-full">
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="min-w-max w-full text-sm text-gray-700 bg-white font-outfit">
          <thead className="bg-slate-100 text-gray-800">
            <tr>
              {kolom.map((col, idx) => (
                <th
                  key={idx}
                  className={`px-6 py-3 font-medium whitespace-nowrap border-b ${
                    col.label === "Aksi" ? "w-40" : ""
                  }`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <React.Fragment key={item.no_kk}>
                {/* ROW UTAMA */}
                <tr
                  className="border-b hover:bg-slate-50 cursor-pointer transition"
                  onClick={() =>
                    setOpenRow(openRow === item.no_kk ? null : item.no_kk)
                  }
                >
                  {kolom.map((col, i) => (
                    <td key={i} className="px-6 py-3 whitespace-nowrap">
                      {getCellValue(item, col.key)}
                    </td>
                  ))}
                </tr>

                {/* ROW DETAIL */}
                {openRow === item.no_kk && (
                  <tr className="bg-slate-50">
                    <td colSpan={kolom.length} className="p-4 border-b">
                      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                        <AnggotaKKPanel no_kk={item.no_kk} />
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
