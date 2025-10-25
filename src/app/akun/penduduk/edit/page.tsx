import UpdateFormPenduduk from "@/components/Akun/Penduduk/edit-form"
import { DataPendudukById } from "lib/data";
import { notFound } from "next/navigation";

const UpdateDataPenduduk = async({params}: {params:{id:number}}) => {
  const id = params.id;
  const data = await DataPendudukById(id);

  if(!data){
    notFound();
  }
  return (
    <div className="max-w-screen mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2"></h1>
      <UpdateFormPenduduk data={data} />
    </div>
  )
}

export default UpdateDataPenduduk
