import { DaftarPermohonan } from "types/permohonan";
interface Props {
  data: DaftarPermohonan[];
}

export default function DaftarSurat({ data }: Props) {
  const selesai = data.filter((p) => p.status === "Selesai");

  return (
    <div className="space-y-3">
      {selesai.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center p-3 border rounded-lg bg-white"
        >
          <div>
            <p className="text-sm font-medium">
              {item.jenis_permohonan}
            </p>
            <p className="text-xs text-gray-500">
              {new Date(item.createdAt).toLocaleDateString("id-ID")}
            </p>
          </div>

          <a
            href={item.hasil_surat}
            target="_blank"
            className="text-xs px-3 py-1.5 bg-green-600 text-white rounded hover:bg-green-700"
          >
            ⬇ Download
          </a>
        </div>
      ))}
    </div>
  );
}
