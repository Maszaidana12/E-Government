"use client";

import { useNavbar } from "@/app/context/NavbarContext"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const PendudukClient = () => {
    const {setConfig} = useNavbar ();
    const router = useRouter();

    useEffect(()=>{
        setConfig({
            title:"Data Penduduk", 
            showAdd:true, 
            showSearch:true,
            onAdd : () => router.push("/akun/penduduk/create")
        });
    }, [setConfig, router]);

    return null;
}

export default PendudukClient
