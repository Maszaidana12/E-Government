"use client";

import { Download, Clock, CheckCircle, XCircle, Hammer } from "lucide-react";
import { DaftarPermohonan } from "types/permohonan";
import { formatDate } from "lib/utils";
import type { LucideIcon } from "lucide-react";

interface Props {
  data: DaftarPermohonan[];
}

type WargaStatus =
  | "Menunggu Persetujuan RT"
  | "Diproses"
  | "Selesai"
  | "Ditolak";

const STATUS_UI: Record<
  WargaStatus,
  { label: string; color: string; icon: LucideIcon }
> = {
  "Menunggu Persetujuan RT": {
    label: "Menunggu Persetujuan RT",
    color: "bg-yellow-100 text-yellow-800",
    icon: Clock,
  },
  Diproses: {
    label: "Sedang Diproses RT",
    color: "bg-blue-100 text-blue-800",
    icon: Hammer,
  },
  Selesai: {
    label: "Surat Siap Diunduh",
    color: "bg-green-100 text-green-800",
    icon: CheckCircle,
  },
  Ditolak: {
    label: "Permohonan Ditolak",
    color: "bg-red-100 text-red-800",
    icon: XCircle,
  },
};

// 🔥 NORMALISASI STATUS
function mapToWargaStatus(
  status: DaftarPermohonan["status"]
): WargaStatus {
  if (status === "Disetujui") return "Diproses";
  return status as WargaStatus;
}

export default function WargaDaftarPermohonan({ data }: Props) {
  if (data.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        <p className="font-semibold">📭 Belum ada permohonan</p>
        <p className="text-sm">Ajukan surat melalui menu permohonan</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {data.map((item) => {
        const wargaStatus = mapToWargaStatus(item.status);
        const statusConfig = STATUS_UI[wargaStatus];
        const Icon = statusConfig.icon;

        return (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4 p-4
                       border rounded-xl bg-white shadow-sm hover:shadow-md transition"
          >
            {/* LEFT */}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-800 truncate">
                {item.jenis_permohonan}
              </p>
              <p className="text-xs text-gray-500">
                Diajukan: {formatDate(item.createdAt)}
              </p>
            </div>

            {/* STATUS */}
            <div
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full
                          text-xs font-medium ${statusConfig.color}`}
            >
              <Icon size={14} />
              {statusConfig.label}
            </div>

            {/* ACTION */}
            <div className="shrink-0">
              {wargaStatus === "Selesai" && item.hasil_surat ? (
                <a
                  href={item.hasil_surat}
                  download
                  className="inline-flex items-center gap-1 px-3 py-1.5
                             text-xs bg-green-600 text-white rounded-lg
                             hover:bg-green-700 transition"
                >
                  <Download size={14} />
                  Unduh
                </a>
              ) : (
                <span className="text-xs text-gray-400 italic">—</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
