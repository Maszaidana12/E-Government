import  {CreateFormPermohonan}  from "@/components/Administrasi/Permohonan/create-form-permohonan";
import WargaDaftarPermohonan from "@/components/Administrasi/Permohonan/warga-daftar-permohonan";
import { getPermohonanWarga } from "../validation/actions";


export default async function PermohonanWargaPage() {
  const data = await getPermohonanWarga();

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      
      {/* AJUKAN */}
      <section className="bg-white rounded-xl border shadow-sm p-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-2">
          📝 Ajukan Permohonan Baru
        </h2>
        <CreateFormPermohonan />
      </section>

      {/* RIWAYAT */}
      <section className="bg-white rounded-xl border shadow-sm p-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-3">
          📄 Permohonan Saya
        </h2>
        <WargaDaftarPermohonan data={data} />
      </section>

    </div>
  );
}
