import { JumlahDataKeluarga } from "@/app/akun/penduduk/validation/actions";



export default async function AnalyticsKeluarga() {
  const res = await JumlahDataKeluarga();
  const { totalKeluarga } = await res.json();

  return (
   <div className="bg-white rounded-xl shadow-sm p-4 text-center border w-[200px] h-[120px] flex 
   flex-col  justify-center">
        <h2 className="text-sm font-medium text-gray-500">Total Data Keluarga</h2>
        <p className="text-xl font-bold text-blue-700 mt-2">{totalKeluarga}</p>
      </div>
   
  );
}