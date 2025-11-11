import { DataPendudukById } from "lib/data";
import UpdateFormPenduduk from "@/components/Akun/Penduduk/edit-form";
import { notFound } from "next/navigation";

interface Props {
  params: { id: number };
}

export default async function EditPendudukPage({ params }: Props) {
const { id } = await params;
const data = await DataPendudukById(Number(id));


  if (!data) {
    notFound();
  }

  return (
    <div className="max-w-screen mx-auto mt-5">
      <h1 className="text-2xl text-center mb-4 font-semibold">
        Edit Data Penduduk
      </h1>

      <UpdateFormPenduduk
        penduduk={{
          ...data,
          tanggal_lahir: data.tanggal_lahir
            ? data.tanggal_lahir.toISOString().split("T")[0]
            : "",
            no_kk: data.no_kk ?? undefined,
        }}
      />
    </div>
  );
}
