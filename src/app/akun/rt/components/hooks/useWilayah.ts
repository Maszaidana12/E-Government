// src/app/akun/rt/components/hooks/useWilayah.ts

import { useState, useEffect } from "react";

interface WilayahItem {
    id: string;
    name: string;
}

// State yang dikelola oleh hook ini
interface WilayahState {
    provinces: WilayahItem[];
    regencies: WilayahItem[];
    districts: WilayahItem[];
    villages: WilayahItem[];
    
    // State ID (untuk fetching)
    provinsiId: string;
    kabupatenId: string;
    kecamatanId: string;
    
    // State Nama (untuk dikirim ke database)
    provinsiNama: string;
    kabupatenNama: string;
    kecamatanNama: string;
    desaNama: string;

    // Handlers
    handleProvinceChange: (id: string) => void;
    handleRegencyChange: (id: string) => void;
    handleDistrictChange: (id: string) => void;
    handleVillageChange: (id: string) => void;
}

const API_BASE = "https://www.emsifa.com/api-wilayah-indonesia/api";

async function fetchData<T>(url: string): Promise<T[]> {
    const res = await fetch(url);
    if (!res.ok) {
        // Tampilkan pesan error yang lebih informatif jika gagal
        console.error(`Gagal fetch data dari ${url}. Status: ${res.status}`);
        return [];
    }
    return res.json();
}

export const useWilayah = (): WilayahState => {
    const [provinces, setProvinces] = useState<WilayahItem[]>([]);
    const [regencies, setRegencies] = useState<WilayahItem[]>([]);
    const [districts, setDistricts] = useState<WilayahItem[]>([]);
    const [villages, setVillages] = useState<WilayahItem[]>([]);

    const [provinsiId, setProvinsiId] = useState("");
    const [kabupatenId, setKabupatenId] = useState("");
    const [kecamatanId, setKecamatanId] = useState("");
    
    const [provinsiNama, setProvinsiNama] = useState("");
    const [kabupatenNama, setKabupatenNama] = useState("");
    const [kecamatanNama, setKecamatanNama] = useState("");
    const [desaNama, setDesaNama] = useState("");

    // 1. FETCH PROVINSI AWAL
    useEffect(() => {
        fetchData<WilayahItem>(`${API_BASE}/provinces.json`)
            .then(setProvinces)
            .catch(console.error);
    }, []);

    // 2. FETCH KABUPATEN
    useEffect(() => {
        setRegencies([]);
        setKabupatenId("");
        setKabupatenNama("");
        setDistricts([]); // Reset districts/villages state di sini
        setVillages([]); 
        if (!provinsiId) return;

        fetchData<WilayahItem>(`${API_BASE}/regencies/${provinsiId}.json`)
            .then(setRegencies)
            .catch(console.error);
    }, [provinsiId]);

    // 3. FETCH KECAMATAN
    useEffect(() => {
        setDistricts([]);
        setKecamatanId("");
        setKecamatanNama("");
        setVillages([]); // Reset villages state di sini
        if (!kabupatenId) return;
        
        fetchData<WilayahItem>(`${API_BASE}/districts/${kabupatenId}.json`)
            .then(setDistricts)
            .catch(console.error);
    }, [kabupatenId]);

    // 4. FETCH DESA
    useEffect(() => {
        setVillages([]);
        setDesaNama("");
        if (!kecamatanId) return;

        fetchData<WilayahItem>(`${API_BASE}/villages/${kecamatanId}.json`)
            .then(setVillages)
            .catch(console.error);
    }, [kecamatanId]);


    // HANDLERS (Memisahkan ID dan Nama)
    
    const handleProvinceChange = (id: string) => {
        setProvinsiId(id);
        const name = provinces.find(p => p.id === id)?.name || "";
        setProvinsiNama(name);
        // Reset state level di bawahnya
        setKabupatenId("");
        setKecamatanId("");
    };

    const handleRegencyChange = (id: string) => {
        setKabupatenId(id);
        const name = regencies.find(r => r.id === id)?.name || "";
        setKabupatenNama(name);
        setKecamatanId(""); // Reset kecamatan
    };

    const handleDistrictChange = (id: string) => {
        setKecamatanId(id);
        const name = districts.find(d => d.id === id)?.name || "";
        setKecamatanNama(name);
    };
    
    const handleVillageChange = (id: string) => {
        // ID desa tidak perlu disimpan di state, cukup namanya saja
        const name = villages.find(v => v.id === id)?.name || "";
        setDesaNama(name);
    };

    return {
        provinces,
        regencies,
        districts,
        villages,
        provinsiId,
        kabupatenId,
        kecamatanId,
        provinsiNama,
        kabupatenNama,
        kecamatanNama,
        desaNama,
        handleProvinceChange,
        handleRegencyChange,
        handleDistrictChange,
        handleVillageChange,
    };
};