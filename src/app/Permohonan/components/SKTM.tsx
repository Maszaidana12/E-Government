import React from "react";
import Surat from "./Surat";

export default function App() {
  return (
    <Surat
      desa="Jinggo"
      kecamatan="Banyuwangi"
      kabupaten="Banyuwangi"
      provinsi="Jawa Timur"
      nama="Ahmad Zaidi Wardana"
      nik="1234567890123456"
      tanggalLahir="2000-01-01"
      agama="Islam"
      permohonan="Mohon diberikan SKTM untuk keperluan pendidikan."
      penandaTangan="Kepala Desa"
    />
  );
}
