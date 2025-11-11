"use client";

import React from 'react'
import Link from 'next/link'
import { IoAddSharp, IoPencil, IoTrashOutline } from 'react-icons/io5'
import { useFormStatus } from 'react-dom';
import clsx from 'clsx';
import { DeletePenduduk } from '@/app/akun/penduduk/validation/actions';



export const CreateButton = () =>{
    return (
       <Link href = "/akun/penduduk/" className='inline-flex  rounded-sm items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800
       px-5[9px] text-sm'>
      <IoAddSharp size={20} />
      Tambah
       </Link>
    );
};

export const EditButton = ({id}:{id:number}) =>{
    return (
       
       <Link href ={`/akun/penduduk/edit/${id}`} className='inline-flex items-center p-1 hover:bg-gray-100 border-2 mr-0.5
       px-5[9px] rounded-sm text-sm'>
      <IoPencil size={20} />
      Edit
       </Link>
    );
};

export const DeleteButton = ({id}:{id:number}) =>{
    return (
       <Link href = "/akun/penduduk/" className='inline-flex items-center p-1 hover:bg-gray-100
       px-5[9px] rounded-sm text-sm border-2'
       onClick={async()=>{
        if(confirm('Yakin ingin menghapus')){
            await DeletePenduduk(id);
            window.location.reload();
        }
       }}
       >

      <IoTrashOutline size={20} />
      Hapus
       </Link>
    );
};

export const SubmitButton = ({label}:{label:string}) =>{
    const {pending} = useFormStatus();

    const className=clsx("px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all", {
        "opacity-50 cursor-progress": pending
    })

    return (
        <button
            type="submit"
            className={className}
            disabled = {pending}
          >
            {label === "Create"? (
                <span>{pending ? "Menyimpan...": "Tambah +"}</span>
            ):(
                <span>{pending ? "Edit...": "Edit"}</span>
            )}
           
          </button>
    )

}
