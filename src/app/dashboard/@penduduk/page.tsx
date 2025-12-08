import { JumlahDataPenduduk } from "@/app/akun/penduduk/validation/actions";


export default async function AnalyticsPenduduk() {
  const res = await JumlahDataPenduduk();
  const { totalPenduduk } = await res.json();

  return (
      <div className="bg-white rounded-xl shadow-sm p-4 text-center border w-[200px] h-[120px] flex 
   flex-col  justify-center">
        <h2 className="text-sm font-medium text-gray-500">Total Penduduk</h2>
        <p className="text-xl font-bold text-blue-700 mt-2">{totalPenduduk}</p>
      </div>
   
  );
}