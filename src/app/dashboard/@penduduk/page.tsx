import { JumlahDataPenduduk } from "@/app/akun/penduduk/validation/actions";


export default async function AnalyticsPenduduk() {
  const res = await JumlahDataPenduduk();
  const { totalPenduduk } = await res.json();

  return (
   <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
      <div className="bg-white rounded-2xl shadow-md p-6 text-center border border-slate-100">
        <h2 className="text-sm font-medium text-gray-500">Total Penduduk</h2>
        <p className="text-xl font-bold text-blue-700 mt-2">{totalPenduduk}</p>
      </div>
    </div>
  );
}