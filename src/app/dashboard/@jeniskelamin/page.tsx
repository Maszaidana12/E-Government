
import { JumlahPendudukByGender } from '@/app/akun/penduduk/validation/actions';
import DonutGenderChart from '../../../components/JenisKelamin/genderchart';


export default async function AnalyticsGender() {
  const res = await JumlahPendudukByGender();    // kamu buat sendiri function ini
  const { laki, perempuan } = await res.json();

  return (
    <div className="bg-white rounded-2xl shadow p-4 border border-slate-100">
      <DonutGenderChart laki={laki} perempuan={perempuan} />
    </div>
  );
}
