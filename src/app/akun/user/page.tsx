import TabelUsers from "@/components/Akun/User/tabel-users"
import UsersClient from "./usersclient"

const Penduduk = () => {
  
  return (
    <>
    <UsersClient />
    <div className="w-[84dvw] h-[90dvh] mx-auto mt-5 flex flex-col">
      {/* Kalau nanti mau ada tombol tambah atau filter di atas tabel */}
      <div className="flex items-center justify-between mb-4">
        {/* tombol atau filter bisa taruh di sini */}
      </div>

      {/* Area tabel yang bisa scroll */}
      <div className="flex-1 relative overflow-x-auto rounded-lg border border-gray-100 bg-white shadow-sm">
        <TabelUsers />
      </div>
    </div>
    </>
    
  )
}

export default Penduduk
