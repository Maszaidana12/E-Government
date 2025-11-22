"use client";

import { useActionState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import { createPermohonan } from "@/app/administrasi/validation/actions";
import { CreateButtonPermohonan } from "@/components/Akun/buttons";

export function CreateFormPermohonan() {
  const [state, formAction] = useActionState(createPermohonan, null);
  const { data: session } = useSession();

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <Card className="w-full max-w-2xl shadow-xl rounded-2xl border border-slate-200 dark:border-slate-700">
        <CardContent className="p-6 space-y-6">
          <h1 className="text-2xl font-semibold text-center">
            Form Permohonan
          </h1>

          <form action={formAction} method="POST" className="space-y-5">
            {/* NIK OTOMATIS */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">NIK</label>
              <input
                disabled
                value={session?.user?.username ?? ""}
                className="w-full p-3 rounded-xl border border-slate-300 bg-gray-100"
              />
            </div>

            {/* Jenis Permohonan */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Jenis Permohonan</label>
              <select
                name="jenis_permohonan"
                className="w-full p-3 rounded-xl border border-slate-300 bg-white"
              >
                <option value="">-- Pilih Jenis Permohonan --</option>
                <option value="Surat_Keterangan_Domisili">
                  Surat Keterangan Domisili
                </option>
                <option value="Surat_Keterangan_Tidak_Mampu">
                  Surat Keterangan Tidak Mampu
                </option>
                <option value="Surat_Pengantar_RT/RW">
                  Surat Pengantar RT/RW
                </option>
                <option value="Surat_Pembuatan_KTP">
                  Surat Pembuatan KTP
                </option>
                <option value="Izin_Keramaian">Izin Keramaian</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            {/* Keterangan */}
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
            </div>

            <CreateButtonPermohonan />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
