"use client";


import { useNavbar } from "@/app/context/NavbarContext"
import { useEffect } from "react";
import { useRouter } from "next/navigation";


const UsersClient = () => {
    const {setConfig} = useNavbar ();
    const router = useRouter();

    useEffect(()=>{
        setConfig({
            title:"Data User", 
            showAdd:true, 
            showSearch:true,
            onAdd : () => router.push("/akun/users/create")
        });
    }, [setConfig, router]);

    return null;
}

export default UsersClient
