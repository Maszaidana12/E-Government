
const FormRegister = () => {
  return (
  <div className="mb-10">
    <form action="" className="space-y-6">
      {/* NIK */}
      <div>
        <label htmlFor="nik" className="block mb-2 text-sm font-medium text-gray-900">
          NIK
        </label>
        <input
          type="text"
          id="nik"
          name="nik"
          maxLength={16}
          pattern="[0-9]{16}"
          placeholder="Masukkan NIK (16 Digit)"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          required
        />
      </div>

      {/* Nama */}
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
          Nama
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Masukkan Nama Lengkap"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Masukkan Email"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          required
        />
      </div>

       <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Masukkan Password"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          required
        />
      </div>

       <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
          Password
        </label>
        <input
          type="password"
          id="confirmpassword"
          name="confirmPassword"
          placeholder="Ulangi Password"
          autoComplete="new-password"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          required
        />
      </div>


      <button
        type="submit"
        className="w-full bg-blue-800 text-white p-2.5 rounded-lg hover:bg-blue-700 transition"
      >
        Register Admin
      </button>
    </form>
    </div>
  )
}

export default FormRegister
