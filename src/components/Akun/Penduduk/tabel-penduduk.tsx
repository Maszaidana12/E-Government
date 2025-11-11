import { DataPenduduk } from "lib/data";
import { EditButton, DeleteButton } from '../buttons';

const kolom = [
  { label: "ID", key: "id_penduduk" },
  { label: "NIK", key: "nik" },
  { label: "Nama", key: "nama" },
  { label: "Jenis Kelamin", key: "jenis_kelamin" },
  { label: "Tempat Lahir", key: "tempat_lahir" },
  { label: "Tanggal Lahir", key: "tanggal_lahir" },
  { label: "Agama", key: "agama" },
  { label: "Pendidikan", key: "pendidikan" },
  { label: "Pekerjaan", key: "pekerjaan" },
  { label: "Golongan Darah", key: "golongan_darah" },
  { label: "Status Perkawinan", key: "status_perkawinan" },
  { label: "Kewarganegaraan", key: "kewarganegaraan" },
  { label: "Status Hubungan", key: "status_hubungan" },
  { label: "Waktu Pembuatan", key: "createdAt" },
  { label: "Pengaturan", key: "actions" },
] as const;

const TabelPenduduk = async() => {
  const data = await DataPenduduk();
  
  return (
    <div className="w-full h-full">
      <div className="max-w-full overflow-x-auto overflow-y-auto rounded-lg shadow-md border border-gray-200">
          <table className='min-w-max text-sm text-center font-outfit text-gray-600 bg-white'>
      <thead>
        <tr>
          {kolom.map((col, idx) => (
            <th
              key={idx}
              className={`px-10 py-3 text-center ${col.label === 'Pengaturan'}`}
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        
          {data.map((data, idx: number) => (
            <tr 
            key = {data.id_penduduk || idx} 
            className="bg-white border-b"
            >
              {kolom.map((col,i)=>(
                <td  
                key={i}
                className={`px-4 py-3 border-b border-gray-200 truncate max-w-[200px] ${col.label === "Pengaturan" ? 'text-center' : ''
                }`}
                
                >
                 {col.key === "actions" ? (
                <div className="items-center">
                    <EditButton id={data.id_penduduk}/>
                    <DeleteButton  id={data.id_penduduk} />
                </div>
                ) : col.key === "tanggal_lahir" ? (
                  new Date(data.tanggal_lahir).toLocaleDateString("id-ID")
                ) : (
                String(data[col.key as keyof typeof data] ?? "")
                )}         
            </td>
              ))}         
              </tr>
          ))}
      </tbody>
    </table>
    </div>
    </div>
    
    
  )
}

export default TabelPenduduk
