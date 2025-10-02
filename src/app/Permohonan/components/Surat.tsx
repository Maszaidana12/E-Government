'use client';


import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface SuratProps {
  desa: string;
  kecamatan: string;
  kabupaten: string;
  provinsi: string;
  nama: string;
  nik: string;
  tanggalLahir: string;
  agama: string;
  permohonan: string;
  penandaTangan: string;
}

const SKTM: React.FC<SuratProps> = ({
  desa,
  kecamatan,
  kabupaten,
  provinsi,
  nama,
  nik,
  tanggalLahir,
  agama,
  permohonan,
  penandaTangan,
}) => {
  const suratRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    if (!suratRef.current) return;

    const canvas = await html2canvas(suratRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("surat.pdf");
  };

  return (
    <div className="p-4">
      <div ref={suratRef} className="p-8 border border-black bg-white w-[210mm] min-h-[297mm] mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-lg font-bold">PEMERINTAH DESA {desa.toUpperCase()}</h1>
          <h2 className="text-md font-semibold">KECAMATAN {kecamatan.toUpperCase()}</h2>
          <p>{kabupaten}, {provinsi}</p>
          <div className="border border-b-black"></div>
        </div>

        {/* Body */}
        <div className="mb-6 space-y-2">
             <p className="font-normal mb-3 text-sm text-justify items-center ">
                Yang bertanda tangan dibawah ini Kepala Desa Pengatigan Kecamatan Rogojampi Kabupaten Banyuwangi 
                menerangkan Bahwa :</p>
          <div className="flex">
            <span className="w-32 font-semibold">Nama</span>: <span className="ml-2">{nama}</span>
          </div>
          <div className="flex">
            <span className="w-32 font-semibold">NIK</span>: <span className="ml-2">{nik}</span>
          </div>
          <div className="flex">
            <span className="w-32 font-semibold">Tanggal Lahir</span>: <span className="ml-2">{tanggalLahir}</span>
          </div>
          <div className="flex">
            <span className="w-32 font-semibold">Agama</span>: <span className="ml-2">{agama}</span>
          </div>

          <p className="mt-4">{permohonan}</p>
        </div>

        {/* Signature */}
        <div className="text-right mt-20">
          <p>{penandaTangan}</p>
        </div>
      </div>

      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={generatePDF}
      >
        Generate PDF
      </button>
    </div>
  );
};

export default SKTM;