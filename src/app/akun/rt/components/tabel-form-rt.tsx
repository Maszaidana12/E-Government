import { JabatanRT } from "lib/data";
import { EditButton, DeleteRTButton } from "./buttons";

const kolom = [
  { label: "ID RT", key: "id_rt" },
  { label: "Nomor RT", key: "nomor_rt" },
  { label: "Nama Ketua", key: "nama_lengkap" },
  { label: "NIK Ketua", key: "nik" },
  { label: "No HP", key: "no_hp" },
  { label: "Alamat", key: "alamat" },
  { label: "Desa / Kelurahan", key: "desa_kelurahan" },
  { label: "Kecamatan", key: "kecamatan" },
  { label: "Kab/Kota", key: "kabupaten_kota" },
  { label: "Kode Pos", key: "kode_pos" },
  { label: "Provinsi", key: "provinsi" },
  { label: "Pengaturan", key: "actions" },
] as const;

const TabelRT = async () => {
  const data = await JabatanRT();

  return (
    <div className="w-full h-full">
      <div className="max-w-full overflow-x-auto overflow-y-auto rounded-lg shadow-md border border-gray-200">
        <table className="min-w-max text-sm text-center font-outfit text-gray-600 bg-white">
          <thead>
            <tr>
              {kolom.map((col, idx) => (
                <th
                  key={idx}
                  className="px-10 py-3 text-center bg-gray-100 border-b"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, idx) => (
              <tr
                key={row.id_rt || idx}
                className="bg-white border-b hover:bg-gray-50"
              >
                {kolom.map((col, i) => (
                  <td
                    key={i}
                    className={`px-4 py-3 border-b border-gray-200 truncate max-w-[200px] ${
                      col.key === "actions" ? "text-center" : ""
                    }`}
                  >
                    {col.key === "actions" ? (
                      <div className="flex justify-center gap-2">
                        <EditButton id={row.id_rt} />
                        <DeleteRTButton id={row.id_rt} />
                      </div>
                    ) : (
                      String(row[col.key as keyof typeof row] ?? "-")
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelRT;
