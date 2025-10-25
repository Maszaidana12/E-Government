"use client";

import { useNavbar } from "@/app/context/NavbarContext"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DashboardClient = () => {
    const {setConfig} = useNavbar ();
    const router = useRouter();

    useEffect(()=>{
        setConfig({
            title:"Dashboard", 
            showAdd:true, 
            showSearch:true,
            onAdd : () => router.push("/dashboard")
        });
    }, [setConfig, router]);

    return null;
}

export default DashboardClient
