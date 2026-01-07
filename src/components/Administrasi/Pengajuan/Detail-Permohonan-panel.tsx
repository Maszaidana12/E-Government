import { Tag, Home } from "lucide-react";
import { DaftarPermohonan } from "types/permohonan";

interface DetailProps {
  permohonan: DaftarPermohonan;
}

// helper aman parse JSON
function parseKeterangan(text?: string | null) {
  if (!text) return null;

  const result: {
    alasan?: string;
    pendapatan?: string;
    pekerjaan_ortu?: string;
  } = {};

  // =========================
  // 1. AMBIL ALASAN (SEBELUM ---)
  // =========================
  const alasanPart = text.split("---")[0]?.trim();
  if (alasanPart) {
    result.alasan = alasanPart;
  }

  // =========================
  // 2. AMBIL BAGIAN DALAM { }
  // =========================
  const braceStart = text.indexOf("{");
  const braceEnd = text.lastIndexOf("}");

  if (braceStart !== -1 && braceEnd !== -1) {
    const jsonLike = text.substring(braceStart, braceEnd + 1);

    try {
      // normalisasi jadi JSON valid
      const normalized = jsonLike
        .replace(/'/g, `"`)        // ' → "
        .replace(/(\w+)\s*:/g, `"$1":`) // key tanpa kutip → pakai kutip
        .replace(/\s+/g, " ");

      const parsed = JSON.parse(normalized);

      if (parsed.pendapatan) {
        result.pendapatan = parsed.pendapatan;
      }

      if (parsed.pekerjaan_ortu) {
        result.pekerjaan_ortu = parsed.pekerjaan_ortu;
      }
    } catch (e) {
      console.warn("Gagal parse data tambahan:", e);
    }
  }

  return Object.keys(result).length ? result : null;
}


export default function DetailPermohonanPanel({ permohonan }: DetailProps) {
  const { pemohon, kk, keterangan_warga } = permohonan;
  const parsed = parseKeterangan(keterangan_warga);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-700">
      
      {/* KIRI */}
      <div>
        <h3 className="mb-2 flex items-center gap-2 font-semibold text-indigo-600">
          <Tag size={14} /> Keterangan Warga
        </h3>

        <div className="space-y-2 bg-gray-50 border rounded-lg p-3">
          {parsed ? (
            <>
              <p>
                <span className="font-medium">Alasan:</span>{" "}
                {parsed.alasan || "-"}
              </p>
              {parsed.pendapatan && (
                <p>
                  <span className="font-medium">Pendapatan:</span>{" "}
                  Rp {Number(parsed.pendapatan).toLocaleString("id-ID")} / bulan
                </p>
              )}
              {parsed.pekerjaan_ortu && (
                <p>
                  <span className="font-medium">Pekerjaan Orang Tua:</span>{" "}
                  {parsed.pekerjaan_ortu}
                </p>
              )}
            </>
          ) : (
            <p className="italic text-gray-500">
              {keterangan_warga || "Tidak ada keterangan tambahan"}
            </p>
          )}
        </div>
      </div>

      {/* KANAN */}
      {kk && (
        <div>
          <h3 className="mb-2 flex items-center gap-2 font-semibold text-indigo-600">
            <Home size={14} /> Verifikasi KK
          </h3>

          <div className="space-y-1.5">
            <p>
              <span className="font-medium">Status di KK:</span>{" "}
              <span className="text-blue-600 font-semibold">
                {pemohon.status_hubungan}
              </span>
            </p>
            <p>
              <span className="font-medium">No. KK:</span> {kk.no_kk}
            </p>
            <p>
              <span className="font-medium">Kepala Keluarga:</span>{" "}
              {kk.kepala_keluarga}
            </p>
            <p className="leading-snug">
              <span className="font-medium">Alamat:</span>{" "}
              {kk.alamat} RT {kk.nomor_rt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
