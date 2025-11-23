"use client";

import { useNavbar } from "@/app/context/NavbarContext"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const RTClient = () => {
    const {setConfig} = useNavbar ();
    const router = useRouter();

    useEffect(()=>{
        setConfig({
            title:"Jabatan RT", 
            showAdd:true, 
            showSearch:true,
            onAdd : () => router.push("/akun/rt/create")
        });
    }, [setConfig, router]);

    return null;
}

export default RTClient


