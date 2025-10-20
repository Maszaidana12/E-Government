import React from 'react'
import Link from 'next/link'
import { IoAddSharp, IoPencil, IoTrashOutline } from 'react-icons/io5'

export const CreateButton = () =>{
    return (
       <Link href = "/akun/penduduk/" className='inline-flex  rounded-sm items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800
       px-5[9px] text-sm'>
      <IoAddSharp size={20} />
      Tambah
       </Link>
    );
};


export const EditButton = () =>{
    return (
       <button className='inline-flex items-center p-1 hover:bg-gray-100 border-2 mr-0.5
       px-5[9px] rounded-sm text-sm'>
      <IoTrashOutline size={20} />
      Edit
       </button>
    );
};

export const DeleteButton = () =>{
    return (
       <Link href = "/akun/penduduk/" className='inline-flex items-center p-1 hover:bg-gray-100
       px-5[9px] rounded-sm text-sm border-2'>
      <IoPencil size={20} />
      Hapus
       </Link>
    );
};


