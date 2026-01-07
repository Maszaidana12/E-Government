// File: create-form-permohonan.tsx

"use client";

import { useActionState, useState, useTransition } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import {
    createPermohonan, 
    GetPemohonDataForConfirmation, 
    PemohonDataForConfirmation // Diimpor dari actions.ts (Server Action file)
} from "@/app/administrasi/validation/actions";
// 💡 CreateButtonPermohonan dihapus karena tidak digunakan.

// --- TIPE DATA UTILITY (DIPERTahankan di sini atau pindahkan ke types.ts) ---

type FullConfirmationData = PemohonDataForConfirmation & {
    dynamic_fields: Record<string, string>; // Data tambahan dari form
    keperluan_surat_utama: string;
};

type FormState = {
    success?: boolean;
    message?: string;
    error?: {
        [key: string]: string[] | string | undefined; 
        nik?: string[];
        jenis_permohonan?: string[];
        keterangan?: string[];
        general?: string;
    };
} | null;

type FieldDefinition = {
    name: string;
    label: string;
    type: string;
    placeholder: string;
}[];

// --- DYNAMIC FIELDS MAP (BERDASARKAN JENIS SURAT) ---
const requiredFieldsMap: Record<string, FieldDefinition> = {
    "Surat_Keterangan_Tidak_Mampu": [
        { name: "pendapatan", label: "Pendapatan Orang Tua (Rp)", type: "number", placeholder: "Contoh: 3000000" },
        { name: "pekerjaan_ortu", label: "Pekerjaan Orang Tua Saat Ini", type: "text", placeholder: "Contoh: Buruh Harian" },
    ],
    "Izin_Keramaian": [
        { name: "keperluan_acara", label: "Keperluan Acara", type: "text", placeholder: "Contoh: Pesta Pernikahan" },
        { name: "tanggal_mulai", label: "Tanggal Mulai", type: "date", placeholder: "" },
        { name: "tanggal_selesai", label: "Tanggal Selesai", type: "date", placeholder: "" },
    ],
    "Surat_Pembuatan_KTP": [
        { name: "alasan_ktp", label: "Alasan Pembuatan KTP", type: "textarea", placeholder: "Contoh: KTP hilang/rusak" },
    ],
    "Surat_Pengantar_RT/RW": [
        { name: "surat_pengantar", label: "Alasan Surat Pengantar", type: "textarea", placeholder: "Contoh: Surat Pengantar RT untuk SKCK" },
    ],
};

/* -------------------------------------------------------
   🟦 UTILITY COMPONENTS (DataRow & KonfirmasiModal)
-------------------------------------------------------- */

// Utility component
const DataRow = ({ label, value }: { label: string, value: string | undefined | null }) => (
    <div className="col-span-1">
        <div className="font-medium text-gray-500">{label}:</div>
        <div className="font-semibold break-words">{value || '-'}</div>
    </div>
);

interface KonfirmasiProps {
    isOpen: boolean;
    data: FullConfirmationData | null; 
    onBatal: () => void;
    onSimpan: () => void;
}

// 💡 KONFIRMASI MODAL - DIBAWAH INI ADALAH KOMPONEN YANG HILANG/TERDUPLIKASI
export const KonfirmasiModal = ({ isOpen, data, onBatal, onSimpan }: KonfirmasiProps) => {
    if (!isOpen || !data) return null;

    // Fungsi utilitas untuk memformat tanggal
    const formatDate = (date: Date) => new Date(date).toLocaleDateString('id-ID', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
    
    // Asumsi Kepala Keluarga ditampilkan sebagai No. KK jika data kk tersedia
    const kepalaKeluargaDisplay = data.kk ? `No. KK: ${data.no_kk}` : "TIDAK TERDAFTAR KK"; 

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-2xl">
                <h3 className="text-xl font-bold mb-4 text-center">🔔 Konfirmasi Data Pengajuan</h3>
                <p className="mb-4 text-sm text-red-600">
                    Data ini akan digunakan untuk proses surat. Mohon pastikan kebenarannya.
                </p>

                <div className="h-96 overflow-y-auto pr-2">
                    
                    <h4 className="font-bold text-gray-700 mb-2 border-b pb-1">👤 Data Pemohon</h4>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-4 text-sm">
                        <DataRow label="No. KTP/NIK" value={data.nik} />
                        <DataRow label="Nama Lengkap" value={data.nama} />
                        <DataRow label="Tanggal Lahir" value={formatDate(data.tanggal_lahir)} />
                        <DataRow label="Jenis Kelamin" value={data.jenis_kelamin?.replace(/_/g, ' ') || '-'} /> 
                        <DataRow label="Agama" value={data.agama || '-'} />
                        <DataRow label="No. KK" value={data.no_kk || '-'} />
                        <DataRow label="Kepala Keluarga" value={kepalaKeluargaDisplay} /> 
                    </div>

                    <h4 className="font-bold text-gray-700 mb-2 border-b pt-4 pb-1">📍 Data Alamat KK</h4>
                    <div className="text-sm p-2 bg-slate-50 rounded">
                        {data.kk ? (
                            <>
                                <p className="font-semibold">{data.kk.alamat}</p>
                                <p className="text-xs">
                                    {data.kk.desa_kelurahan}, {data.kk.kecamatan}, {data.kk.kabupaten_kota} - {data.kk.kode_pos}
                                </p>
                            </>
                        ) : (
                            <p className="text-red-500 text-xs">Data KK tidak ditemukan/belum lengkap!</p>
                        )}
                    </div>

                    <h4 className="font-bold text-gray-700 mb-2 border-b pt-4 pb-1">📝 Keperluan & Keterangan Tambahan</h4>
                    <DataRow label="Jenis Permohonan" value={data.keperluan_surat_utama.replace(/_/g, " ")} />

                    {/* Data Form Dinamis (Pendapatan/Izin, dll.) */}
                    {Object.keys(data.dynamic_fields).filter(key => key !== 'keterangan').map(key => {
                        // Cari label asli dari requiredFieldsMap untuk display
                        const fields = requiredFieldsMap[data.keperluan_surat_utama] || [];
                        const fieldDef = fields.find(f => f.name === key);
                        const labelDisplay = fieldDef ? fieldDef.label : key.replace(/_/g, " "); 
                        
                        return (
                            <DataRow 
                                key={key} 
                                label={labelDisplay} 
                                value={data.dynamic_fields[key]} 
                            />
                        );
                    })}

                    {/* Keterangan Umum (dari field keterangan optional) */}
                    <div className='mt-3'>
                        <DataRow label="Keterangan Tambahan (Opsional)" value={data.dynamic_fields.keterangan || '-'} />
                    </div>
                </div>

                {/* Konfirmasi & Tombol */}
                <div className="mt-6 pt-4 border-t">
                    <p className="font-bold mb-3">Apakah semua informasi di atas sudah benar?</p>
                    <div className="flex justify-end gap-3">
                        <button 
                            type="button" 
                            onClick={onBatal}
                            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                        >
                            Batal
                        </button>
                        <button 
                            type="button" 
                            onClick={onSimpan}
                            className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
                        >
                            Simpan & Ajukan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* -------------------------------------------------------
   🟦 DYNAMIC FIELDS COMPONENT
-------------------------------------------------------- */
const DynamicFields = ({
    selectedSurat,
    state,
}: {
    selectedSurat: string;
    state: FormState; 
}) => {
    const fields = requiredFieldsMap[selectedSurat];
    if (!fields || fields.length === 0) return null;

    return (
        <>
            <h4 className="font-semibold text-gray-700 dark:text-gray-200 mt-4 pt-4 border-t">
                Keterangan Tambahan ({selectedSurat.replace(/_/g, " ")})
            </h4>

            {fields.map((field) => (
                <div className="flex flex-col gap-1" key={field.name}>
                    <label className="text-sm font-medium">{field.label}</label>

                    {field.type === "textarea" ? (
                        <textarea
                            name={field.name}
                            required
                            rows={3}
                            className="w-full p-3 rounded-xl border border-slate-300"
                            placeholder={field.placeholder}
                        />
                    ) : (
                        <input
                            name={field.name}
                            required
                            type={field.type}
                            className="w-full p-3 rounded-xl border border-slate-300"
                            placeholder={field.placeholder}
                        />
                    )}

                    {state?.error?.[field.name] && Array.isArray(state.error[field.name]) && (
                        <p className="text-red-500 text-xs mt-1">
                            {state.error[field.name]?.[0]}
                        </p>
                    )}
                </div>
            ))}
        </>
    );
};

/* -------------------------------------------------------
   🟦 MAIN FORM COMPONENT
-------------------------------------------------------- */
export function CreateFormPermohonan() {
    // Terapkan FormState di useActionState
        const [isPending, startTransition] = useTransition();

    const [state, formAction] = useActionState<FormState, FormData>(createPermohonan, null);
    const { data: session } = useSession();
    const [selectedSurat, setSelectedSurat] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tempFormData, setTempFormData] = useState<FormData | null>(null); // Menyimpan FormData asli
    const [konfirmasiData, setKonfirmasiData] = useState<FullConfirmationData | null>(null);

    // 💡 Handler saat tombol "Ajukan" di Form diklik
    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // 💡 PENTING: Mencegah submit langsung ke action={formAction}
        const form = event.currentTarget;
        const formData = new FormData(form);

        const nik = session?.user?.username;
        const jenisPermohonan = formData.get("jenis_permohonan")?.toString();

        if (!nik || !jenisPermohonan || jenisPermohonan === "") {
            alert("Harap pilih jenis permohonan.");
            return;
        }

        // 1. Ambil Data Tetap dari Server (Penduduk & KK)
        const pemohonDataResult = await GetPemohonDataForConfirmation(nik);

        if ('error' in pemohonDataResult) {
            alert(pemohonDataResult.error);
            return;
        }
        
        // Cek jika hasil adalah error, kembalikan string (error di Server Action)
        if (typeof pemohonDataResult === 'string' || 'error' in pemohonDataResult) {
             alert(typeof pemohonDataResult === 'string' ? pemohonDataResult : pemohonDataResult.error);
             return;
        }

        // 2. Ambil Data Dinamis dari Form
        const dynamicFields: Record<string, string> = {};
        const fieldsToMap = requiredFieldsMap[jenisPermohonan] || [];
        
        // Lakukan validasi dasar di sini untuk field dinamis yang wajib
        for (const field of fieldsToMap) {
            const value = formData.get(field.name)?.toString();
            if (!value || value.trim() === "") {
                alert(`Field wajib: ${field.label} belum diisi.`);
                return;
            }
            dynamicFields[field.name] = value;
        }

        // Ambil keterangan opsional dari form
        const keteranganOpsional = formData.get("keterangan")?.toString() || '';
        if (keteranganOpsional) {
            dynamicFields['keterangan'] = keteranganOpsional;
        }
        
        // 3. Gabungkan Data untuk Modal
        const finalData: FullConfirmationData = {
            ...pemohonDataResult,
            dynamic_fields: dynamicFields,
            keperluan_surat_utama: jenisPermohonan,
        };

        setTempFormData(formData); // Simpan FormData untuk pengiriman akhir
        setKonfirmasiData(finalData);
        setIsModalOpen(true); // Tampilkan modal
    };
    
    // Handler saat tombol "Simpan & Ajukan" di Modal diklik
    const handleSimpanKonfirmasi = () => {
        setIsModalOpen(false);
        if (tempFormData) {
            startTransition(() => {
                formAction(tempFormData);
            });
            
        }
    };

    return (
        <div className="w-full flex justify-center py-10 px-4">
            <Card className="w-full max-w-2xl shadow-xl rounded-2xl border border-slate-200 dark:border-slate-700">
                <CardContent className="p-6 space-y-6">
                    <h1 className="text-2xl font-semibold text-center">
                        Form Permohonan
                    </h1>

                    {/* 💡 Perbaikan: Mengganti action={formAction} dengan onSubmit={handleFormSubmit} */}
                    <form onSubmit={handleFormSubmit} className="space-y-5">
                        {/* NIK */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium">NIK Pemohon</label>
                            <input
                                name="nik"
                                disabled
                                value={session?.user?.username ?? "Memuat..."}
                                className="w-full p-3 rounded-xl border border-slate-300 bg-gray-100"
                            />
                            {state?.error?.nik && (
                                <p className="text-red-500 text-xs mt-1">
                                    {state.error.nik[0]}
                                </p>
                            )}
                        </div>

                        {/* JENIS PERMOHONAN */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium">Jenis Permohonan</label>
                            <select
                                name="jenis_permohonan"
                                className="w-full p-3 rounded-xl border border-slate-300 bg-white"
                                onChange={(e) => setSelectedSurat(e.target.value)}
                                value={selectedSurat}
                            >
                                <option value="">-- Pilih Jenis Permohonan --</option>
                                <option value="Surat_Keterangan_Domisili">Surat Keterangan Domisili</option>
                                <option value="Surat_Keterangan_Tidak_Mampu">Surat Keterangan Tidak Mampu</option>
                                <option value="Surat_Pengantar_RT/RW">Surat Pengantar RT/RW</option>
                                <option value="Surat_Pembuatan_KTP">Surat Pembuatan KTP</option>
                                <option value="Izin_Keramaian">Izin Keramaian</option>
                                <option value="Lainnya">Lainnya</option>
                            </select>
                            {state?.error?.jenis_permohonan && (
                                <p className="text-red-500 text-xs mt-1">
                                    {state.error.jenis_permohonan[0]}
                                </p>
                            )}
                        </div>

                        {/* DYNAMIC FIELDS */}
                        <DynamicFields selectedSurat={selectedSurat} state={state} />

                        {/* KETERANGAN */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium">
                                Keterangan (Opsional)
                            </label>
                            <textarea
                                name="keterangan"
                                rows={4}
                                className="w-full p-3 rounded-xl border border-slate-300"
                                placeholder="Tambahkan keterangan jika diperlukan"
                            />
                            {state?.error?.keterangan && (
                                <p className="text-red-500 text-xs mt-1">
                                    {state.error.keterangan[0]}
                                </p>
                            )}
                        </div>

                        {/* ERROR UMUM */}
                        {state?.error?.general && (
                            <p className="text-red-500 text-sm font-medium text-center">
                                {state.error.general}
                            </p>
                        )}

                        {/* SUCCESS */}
                        {state?.success && (
                            <p className="text-green-600 text-sm font-medium text-center">
                                Permohonan berhasil diajukan!
                            </p>
                        )}

                        {/* BUTTON */}
                        <button 
                        type="submit" 
                        className="w-full p-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                        disabled={isPending} // Matikan tombol saat proses berjalan
                    >
                        {isPending ? 'Memproses...' : 'Ajukan Permohonan (Konfirmasi Data)'}
                    </button>
                    </form>
                    
                    {/* 💡 RENDER MODAL KONFIRMASI */}
                    <KonfirmasiModal 
                    isOpen={isModalOpen} 
                    data={konfirmasiData} 
                    onBatal={() => setIsModalOpen(false)} 
                    // 💡 onSimpan akan memanggil handleSimpanKonfirmasi, yang kini menggunakan startTransition
                    onSimpan={handleSimpanKonfirmasi} 
                />
                </CardContent>
            </Card>
        </div>
    );
}

// ... (end of create-form-permohonan.tsx)