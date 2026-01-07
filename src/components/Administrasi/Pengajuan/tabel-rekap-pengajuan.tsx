"use client";

import React, { useState } from "react";
import {
  Clock,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  type LucideIcon,
} from "lucide-react";
import { formatDate } from "lib/utils";
import DetailPermohonanPanel from "./Detail-Permohonan-panel";
import ActionButtons from "./ActionButtons";
import { DaftarPermohonan } from "types/permohonan";

/* ======================================================
   TYPES
====================================================== */
type StatusType = DaftarPermohonan["status"];

interface StatusBadgeProps {
  status: StatusType;
}

interface TabelRekapSuratProps {
  data: DaftarPermohonan[];
}

/* ======================================================
   STATUS BADGE
====================================================== */
const STATUS_MAP: Record<
  StatusType,
  { color: string; icon: LucideIcon }
> = {
  "Menunggu Persetujuan RT": {
    color: "bg-yellow-100 text-yellow-800",
    icon: Clock,
  },
  Diproses: {
    color: "bg-blue-100 text-blue-800",
    icon: Clock,
  },
  Disetujui: {
    color: "bg-green-100 text-green-800",
    icon: CheckCircle,
  },
  Ditolak: {
    color: "bg-red-100 text-red-800",
    icon: XCircle,
  },
  Selesai: {
    color: "bg-gray-100 text-gray-700",
    icon: AlertCircle,
  },
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const config = STATUS_MAP[status] ?? {
    color: "bg-gray-100 text-gray-700",
    icon: AlertCircle,
  };

  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${config.color}`}
    >
      <Icon size={12} />
      {status}
    </span>
  );
};

/* ======================================================
   MAIN COMPONENT
====================================================== */
const TabelRekapSurat: React.FC<TabelRekapSuratProps> = ({ data }) => {
  const [openRow, setOpenRow] = useState<string | null>(null);

 const dataMenunggu = data.filter(
  (item) =>
    item.status === "Menunggu Persetujuan RT" ||
    item.status === "Diproses"
);

  return (
    <div className="relative mt-8 bg-gradient-to-b from-indigo-50 to-white rounded-2xl border shadow-sm">
      {/* HEADER */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b px-5 py-3 rounded-t-2xl">
        <h2 className="text-sm font-semibold text-gray-700">
          🔔 Notifikasi Persetujuan Surat
        </h2>
        <p className="text-xs text-gray-500">
          Pengajuan akan hilang otomatis setelah diproses
        </p>
      </div>

      {/* LIST */}
      <div className="max-h-[70vh] overflow-y-auto px-3 py-3 space-y-2">
        {dataMenunggu.length === 0 && (
          <div className="py-16 text-center text-gray-400">
            <p className="text-sm font-medium">
              🎉 Tidak ada notifikasi baru
            </p>
            <p className="text-xs mt-1">
              Semua pengajuan telah diproses
            </p>
          </div>
        )}

        {dataMenunggu.map((item: DaftarPermohonan) => {
          const isExpanded = openRow === item.id;

          return (
            <div key={item.id}>
              {/* ROW */}
              <div
                onClick={() =>
                  setOpenRow(isExpanded ? null : item.id)
                }
                className={`group flex items-center justify-between gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all
                  ${
                    isExpanded
                      ? "bg-indigo-50 border border-indigo-200"
                      : "bg-white border border-gray-200 hover:bg-gray-50"
                  }`}
              >
                {/* LEFT */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">
                    {item.jenis_permohonan}
                    <span className="text-gray-500 font-normal">
                      {" "}
                      • {item.pemohon.nama}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    NIK {item.pemohon.nik} • KK{" "}
                    {item.kk?.no_kk || "-"}
                  </p>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-2 shrink-0">
                  <StatusBadge status={item.status} />
                  <span className="text-[11px] text-gray-400">
                    {formatDate(item.createdAt)}
                  </span>
                  {isExpanded ? (
                    <ChevronUp size={16} className="text-gray-400" />
                  ) : (
                    <ChevronDown
                      size={16}
                      className="text-gray-400 group-hover:text-gray-600"
                    />
                  )}
                </div>
              </div>

              {/* DETAIL */}
              {isExpanded && (
                <div className="ml-6 mr-2 mt-2 mb-4 px-4 py-4 bg-white rounded-xl border border-indigo-100 shadow-sm animate-in slide-in-from-top-2 duration-200">
                  <DetailPermohonanPanel permohonan={item} />
                  <div className="mt-4 pt-3 border-t flex justify-end gap-2">
                   <ActionButtons
                    permohonanId={item.id}
                     status={item.status}
/>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabelRekapSurat;
