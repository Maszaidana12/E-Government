import FormRegister from "@/components/auth/register/form-register"

const Registerpage = () => {
  return (
   <div className="p-6 space-y-4 justify-between ">
    <h1 className="text-2xl font-semibold font-outfit text-gray-900">
        Buat Akun
    </h1>
    <FormRegister />
   </div>
  )
}

export default Registerpage
