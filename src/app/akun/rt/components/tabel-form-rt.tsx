"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { deleteRT } from "../../penduduk/validation/actions";

interface RTData {
  id_rt: number;
  nomor_rt: string;
  nik: string;
  nama_lengkap: string;
  no_hp?: string;
  alamat?: string;
  provinsi?: string;
  kabupaten_kota?: string;
  kecamatan?: string;
  desa_kelurahan?: string;
  createdAt?: string;
}

const kolom = [
  { label: "No", key: "no" },
  { label: "Nomor RT", key: "nomor_rt" },
  { label: "Nama Ketua", key: "nama_lengkap" },
  { label: "NIK Ketua", key: "nik" },
  { label: "No HP", key: "no_hp" },
  { label: "Alamat", key: "alamat" },
  { label: "Wilayah", key: "wilayah" },
  { label: "Waktu Pembuatan", key: "createdAt" },
  { label: "Pengaturan", key: "actions" },
] as const;

export default function TabelRT() {
  const [rtList, setRtList] = useState<RTData[]>([]);

  const fetchRT = async () => {
    try {
      const res = await fetch("/api/rt");
      const data = await res.json();
      setRtList(data);
    } catch (error) {
      console.error("Gagal fetch RT:", error);
    }
  };

  useEffect(() => {
    fetchRT();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Yakin mau hapus RT ini?")) return;
    try {
      await deleteRT(id);
      setRtList(rtList.filter((rt) => rt.id_rt !== id));
    } catch (error) {
      console.error("Gagal hapus RT:", error);
    }
  };

  return (
    <div className="w-full h-full p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Daftar RT</h1>
      </div>

      <div className="max-w-full overflow-x-auto rounded-lg shadow-md border border-gray-200">
        <table className="min-w-max text-sm text-center font-outfit text-gray-600 bg-white">
          <thead>
            <tr className="bg-gray-100">
              {kolom.map((col, idx) => (
                <th key={idx} className="px-6 py-3 border">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rtList.length === 0 ? (
              <tr>
                <td colSpan={kolom.length} className="text-center py-4">
                  Belum ada RT
                </td>
              </tr>
            ) : (
              rtList.map((rt, idx) => (
                <tr key={rt.id_rt} className="bg-white border-b hover:bg-gray-50">
                  {kolom.map((col, i) => (
                    <td
                      key={i}
                      className={`px-4 py-3 border truncate max-w-[200px] ${
                        col.key === "actions" ? "text-center" : ""
                      }`}
                    >
                      {col.key === "actions" ? (
                        <div className="flex gap-2 justify-center">
                          <Link
                            href={`/akun/rt/edit/${rt.id_rt}`}
                            className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDelete(rt.id_rt)}
                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                          >
                            Hapus
                          </button>
                        </div>
                      ) : col.key === "wilayah" ? (
                        `${rt.provinsi} / ${rt.kabupaten_kota} / ${rt.kecamatan} / ${rt.desa_kelurahan}`
                      ) : col.key === "createdAt" && rt.createdAt ? (
                        new Date(rt.createdAt).toLocaleDateString("id-ID")
                      ) : col.key === "no" ? (
                        idx + 1
                      ) : (
                        String(rt[col.key as keyof RTData] ?? "-")
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
