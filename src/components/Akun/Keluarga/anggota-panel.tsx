"use client";

import React, { useState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import {
  GetAnggotaKK, // Fungsi yang sudah ada untuk mendapatkan anggota KK
  SearchPendudukAvailable, // Fungsi baru
  UpdateAnggotaKK, // Fungsi baru
  PendudukSearch, // Tipe baru
} from "@/app/akun/penduduk/validation/actions";
import { useQuery } from "@tanstack/react-query"; // Jika Anda menggunakan TanStack Query atau ganti dengan fetch biasa
import { Trash2, Search, Plus, Loader2, UserMinus } from "lucide-react";


// Tipe data anggota KK (diambil dari skema Penduduk Anda)
type AnggotaKK = {
  nik: string;
  nama: string;
  status_hubungan: string;
  // Tambahkan field lain yang relevan
};

// --- Komponen Search Input ---
const SearchInput = ({ onSelect, noKK }: { onSelect: (nik: string, nama: string) => void, noKK: string }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<PendudukSearch[]>([]);
  const [loading, setLoading] = useState(false);

  // Debounce search input
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchQuery.length > 2) {
        setLoading(true);
        const results = await SearchPendudukAvailable(searchQuery);
        setSearchResult(results);
        setLoading(false);
      } else {
        setSearchResult([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  return (
    <div className="relative mb-4">
      <div className="flex items-center border rounded-lg bg-gray-50 p-2">
        <Search className="w-4 h-4 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Cari Penduduk (NIK atau Nama)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent focus:outline-none text-sm"
        />
        {loading && <Loader2 className="w-4 h-4 animate-spin text-blue-500" />}
      </div>

      {searchResult.length > 0 && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-48 overflow-y-auto shadow-lg">
          {searchResult.map((penduduk) => (
            <div
              key={penduduk.nik}
              className="p-3 text-sm flex justify-between items-center hover:bg-blue-50 cursor-pointer border-b"
            >
              <div>
                <p className="font-medium">{penduduk.nama} ({penduduk.nik})</p>
                <p className="text-xs text-gray-500">{penduduk.status_hubungan}</p>
              </div>
              <button
                type="button"
                className="text-white bg-blue-600 hover:bg-blue-700 p-1 rounded-full flex items-center"
                onClick={() => {
                  onSelect(penduduk.nik, penduduk.nama);
                  setSearchQuery("");
                  setSearchResult([]);
                }}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// --- Komponen Button Aksi Anggota ---
const ActionButton = ({ nik, noKK, action }: { nik: string, noKK: string, action: 'add' | 'remove' }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await UpdateAnggotaKK(noKK, nik, action);
    // Asumsi AnggotaKKPanel akan melakukan re-fetch setelah revalidatePath di action.ts
    setLoading(false);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className={`p-1 rounded-full transition-colors ${
        action === 'add' 
          ? 'bg-blue-500 text-white hover:bg-blue-600'
          : 'bg-red-500 text-white hover:bg-red-600'
      } disabled:opacity-50`}
      title={action === 'add' ? "Tambah Anggota" : "Hapus dari KK"}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : action === 'add' ? (
        <Plus className="w-4 h-4" />
      ) : (
        <UserMinus className="w-4 h-4" />
      )}
    </button>
  );
};


// --- Komponen Utama Panel ---
export default function AnggotaKKPanel({ no_kk }: { no_kk: string }) {
  // Gunakan fungsi GetAnggotaKK (yang sudah Anda miliki) untuk mendapatkan anggota
  // Catatan: Jika Anda tidak menggunakan TanStack Query, ganti ini dengan useEffect dan useState
  const { data: anggota, isLoading, refetch } = useQuery<AnggotaKK[]>({
    queryKey: ['anggotaKK', no_kk],
    queryFn: () => GetAnggotaKK(no_kk) as Promise<AnggotaKK[]>,
  });

  // State untuk anggota yang akan ditambahkan dari search
  const [anggotaToAdd, setAnggotaToAdd] = useState<{ nik: string, nama: string }[]>([]);

  const handleAddFromSearch = (nik: string, nama: string) => {
    if (!anggotaToAdd.some(a => a.nik === nik)) {
      setAnggotaToAdd([...anggotaToAdd, { nik, nama }]);
    }
  };

  const handleAddFinal = async (nik: string, nama: string) => {
    const result = await UpdateAnggotaKK(no_kk, nik, 'add');
    if (result.success) {
      refetch(); // Refresh daftar anggota
      setAnggotaToAdd(anggotaToAdd.filter(a => a.nik !== nik)); // Hapus dari daftar sementara
    } else {
      alert(`Gagal menambahkan ${nama}: ${result.error}`);
    }
  };
  
  const handleRemove = async (nik: string, nama: string) => {
    if (confirm(`Apakah Anda yakin ingin menghapus ${nama} dari KK ${no_kk}?`)) {
      const result = await UpdateAnggotaKK(no_kk, nik, 'remove');
      if (result.success) {
        refetch(); // Refresh daftar anggota
      } else {
        alert(`Gagal menghapus ${nama}: ${result.error}`);
      }
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-slate-800 shadow-inner">
      <h3 className="font-bold text-lg mb-4 text-gray-800 dark:text-white">
        Daftar Anggota KK: {no_kk}
      </h3>

      {/* Panel Pencarian Anggota Baru */}
      <div className="mb-6 p-4 border rounded-lg bg-gray-50 dark:bg-slate-700">
        <h4 className="font-semibold mb-3 text-gray-700 dark:text-gray-200">Tambahkan Anggota Baru</h4>
        <SearchInput onSelect={handleAddFromSearch} noKK={no_kk} />

        {anggotaToAdd.length > 0 && (
            <div className="mt-4 border-t pt-3">
                <h5 className="font-medium text-sm mb-2">Siap Ditambahkan:</h5>
                {anggotaToAdd.map(a => (
                    <div key={a.nik} className="flex justify-between items-center text-sm p-2 bg-yellow-50 rounded mb-1">
                        <span>{a.nama} ({a.nik})</span>
                        <div className="flex gap-2">
                            <button 
                                type="button"
                                onClick={() => handleAddFinal(a.nik, a.nama)}
                                className="text-white bg-green-600 hover:bg-green-700 p-1 rounded-full text-xs"
                            >
                                Tambah
                            </button>
                            <button 
                                type="button"
                                onClick={() => setAnggotaToAdd(anggotaToAdd.filter(item => item.nik !== a.nik))}
                                className="text-white bg-gray-400 hover:bg-gray-500 p-1 rounded-full text-xs"
                            >
                                Batal
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        )}
      </div>

      {/* Tabel Anggota KK Saat Ini */}
      {isLoading ? (
        <div className="flex justify-center py-6 text-blue-500">
          <Loader2 className="w-6 h-6 animate-spin" /> <span className="ml-2">Memuat Anggota...</span>
        </div>
      ) : anggota && anggota.length > 0 ? (
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-gray-200">
              <th className="p-2">NIK</th>
              <th className="p-2">Nama</th>
              <th className="p-2">Hubungan</th>
              <th className="p-2 w-16 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {anggota.map((item) => (
              <tr key={item.nik} className="border-t hover:bg-gray-50 dark:hover:bg-slate-700">
                <td className="p-2">{item.nik}</td>
                <td className="p-2">{item.nama}</td>
                <td className="p-2">{item.status_hubungan}</td>
                <td className="p-2 text-center">
                    <button
                        type="button"
                        onClick={() => handleRemove(item.nik, item.nama)}
                        className="text-white bg-red-500 hover:bg-red-600 p-1 rounded-full flex items-center justify-center mx-auto"
                        title="Hapus dari KK"
                    >
                        <UserMinus className="w-4 h-4" />
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500 py-6">Belum ada anggota di Kartu Keluarga ini.</p>
      )}
    </div>
  );
}