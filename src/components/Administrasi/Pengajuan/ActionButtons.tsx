"use client";

import { useState } from "react";
import { approvePermohonan, rejectPermohonan } from "./permohonan-actions";
import { DaftarPermohonan } from "types/permohonan";

interface ActionButtonsProps {
  permohonanId: string;
  status: DaftarPermohonan["status"];
}

export default function ActionButtons({
  permohonanId,
  status,
}: ActionButtonsProps) {
  const [loading, setLoading] = useState(false);

  /* =========================
     PROSES → DIPROSES
  ========================= */
  async function handleProses() {
    setLoading(true);
    await approvePermohonan(permohonanId);
    setLoading(false);
  }

  /* =========================
     UPLOAD → SELESAI
  ========================= */
  async function handleUpload(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    formData.append("permohonanId", permohonanId);

    const res = await fetch("/api/upload-surat", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("✅ Surat berhasil dikirim ke warga");
    } else {
      alert("❌ Gagal upload surat");
    }

    setLoading(false);
  }

  /* =========================
     TOLAK
  ========================= */
  async function handleTolak() {
    const alasan = prompt("Masukkan alasan penolakan:");
    if (!alasan) return;

    setLoading(true);
    await rejectPermohonan(permohonanId, alasan);
    setLoading(false);
  }

  return (
    <div className="space-y-3 text-xs">
      {/* ======================
          STATUS: PENDING
      ====================== */}
      {status === "Menunggu Persetujuan RT" && (
        <div className="flex gap-2">
          <button
            onClick={handleProses}
            disabled={loading}
            className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            ⏳ Proses Surat
          </button>

          <button
            onClick={handleTolak}
            disabled={loading}
            className="px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            ❌ Tolak
          </button>
        </div>
      )}

      {/* ======================
          STATUS: DIPROSES
      ====================== */}
      {status === "Diproses" && (
        <form
          onSubmit={handleUpload}
          className="p-3 border rounded-lg bg-gray-50 space-y-2"
        >
          <p className="italic text-blue-600">
            ⏳ Surat sedang diproses, silakan upload hasil surat
          </p>

          <input
            type="file"
            name="file"
            accept="application/pdf"
            required
            className="block w-full"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="px-3 py-1 bg-green-600 text-white rounded"
            >
              📤 Kirim ke Warga
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
