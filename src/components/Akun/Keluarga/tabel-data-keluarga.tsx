import { DataKeluarga } from "lib/data";
import { EditButton, DeleteButton } from '../buttons';

const kolom = [
  { label: "ID", key: "id_kk" },
  { label: "No KK", key: "no_kk" },
  { label: "Alamat", key: "alamat" },
  { label: "Nomor RT", key: "Nomor RT" },
  { label: "Kode Pos", key: "tempat_lahir" },
  { label: "Desa/Kelurahan", key: "tanggal_lahir" },
  { label: "Kecamatan", key: "agama" },
  { label: "Kabupaten", key: "pendidikan" },
  { label: "Provinsi", key: "pekerjaan" },
  { label: "Pengaturan", key: "actions" },
] as const;

const TabelDataKeluarga = async() => {
  const data = await DataKeluarga();
  
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
            key = {data.id_kk || idx} 
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
                    <EditButton id={data.id_kk}/>
                    <DeleteButton  id={data.id_kk} />
                </div>
                
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

export default TabelDataKeluarga
