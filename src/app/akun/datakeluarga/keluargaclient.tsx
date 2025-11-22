"use client";

import { useNavbar } from "@/app/context/NavbarContext"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const KeluargaClient = () => {
    const {setConfig} = useNavbar ();
    const router = useRouter();

    useEffect(()=>{
        setConfig({
            title:"Data Keluarga", 
            showAdd:true, 
            showSearch:true,
            onAdd : () => router.push("/akun/datakeluarga/create")
        });
    }, [setConfig, router]);

    return null;
}

export default KeluargaClient


