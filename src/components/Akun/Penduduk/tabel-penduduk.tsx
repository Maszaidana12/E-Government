import { DataPenduduk } from "lib/data";
import { EditButton, DeleteButton } from "../buttons";

const kolom = [
  { label: "ID", key: "id_penduduk" },
  { label: "NIK", key: "nik" },
  { label: "No. KK", key: "no_kk" },
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

export default async function TabelPenduduk() {
  const data = await DataPenduduk();

  return (
    <div className="w-full space-y-4">

      {/* ================= MOBILE (HP) ================= */}
      <div className="lg:hidden space-y-4">
        {data.map((item, idx) => (
          <div
            key={item.id_penduduk || idx}
            className="bg-white rounded-xl border shadow-sm p-4"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-800">
                {item.nama}
              </h3>
              <div className="flex gap-2">
                <EditButton id={item.id_penduduk} />
                <DeleteButton id={item.id_penduduk} />
              </div>
            </div>

            <div className="text-sm text-gray-600 space-y-1">
              <p><b>NIK:</b> {item.nik}</p>
              <p><b>No KK:</b> {item.no_kk}</p>
              <p><b>Jenis Kelamin:</b> {item.jenis_kelamin}</p>
              <p>
                <b>TTL:</b> {item.tempat_lahir},{" "}
                {new Date(item.tanggal_lahir).toLocaleDateString("id-ID")}
              </p>
              <p><b>Pekerjaan:</b> {item.pekerjaan}</p>
              <p><b>Status:</b> {item.status_perkawinan}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= DESKTOP (TETAP LEBAR) ================= */}
      <div className="hidden lg:block">
        <div className="w-full overflow-x-auto rounded-lg shadow-md border border-gray-200">
          <table className="min-w-[1600px] text-sm text-center font-outfit text-gray-600 bg-white">
            <thead className="bg-gray-50">
              <tr>
                {kolom.map((col, idx) => (
                  <th
                    key={idx}
                    className="px-6 py-3 whitespace-nowrap font-semibold"
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data.map((item, idx) => (
                <tr
                  key={item.id_penduduk || idx}
                  className="border-b hover:bg-gray-50"
                >
                  {kolom.map((col, i) => (
                    <td
                      key={i}
                      className={`px-4 py-3 max-w-[220px] truncate ${
                        col.key === "actions" ? "text-center" : ""
                      }`}
                    >
                      {col.key === "actions" ? (
                        <div className="flex justify-center gap-2">
                          <EditButton id={item.id_penduduk} />
                          <DeleteButton id={item.id_penduduk} />
                        </div>
                      ) : col.key === "tanggal_lahir" ? (
                        new Date(item.tanggal_lahir).toLocaleDateString("id-ID")
                      ) : (
                        String(item[col.key as keyof typeof item] ?? "")
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
